# 智能体范式 ReAct（Reason + Act）

面向小白的最简说明：ReAct 让同一个大模型一边“思考”（Reasoning/Thought），一边“行动”（调用工具/Action），再根据环境反馈（Observation）继续思考，直到用 `Answer/Finish` 收尾。它特别适合需要查资料、算东西、分步推理的任务。

## 1. 核心格式与循环

- 循环模式：`Thought -> Action -> Observation -> (repeat) -> Answer`
- Thought：当前要做什么/下一步计划（简短一句）
- Action：要用的工具及参数（只能用允许的工具）
- Observation：工具返回的结果（由系统填回上下文）
- Answer/Finish：给最终答案，不再调用工具

## 2. 什么时候用

- 需要多步推理并结合外部工具：搜索、数据库查询、计算、代码执行、API 调用
- 想减少幻觉、提升可解释性与调试性
- 需要“走一步看一步”，根据实时反馈动态调整

## 3. Prompt 模板（极简骨架）

```text
你是能调用工具的 ReAct 智能体。遵循格式：
Thought: <你下一步要做什么，简短>
Action: <工具名或 Finish>
Action Input: <json 参数，如 { "query": "..." }>
Observation: <工具返回，系统填>
Answer: <当 Action=Finish 时给出最终回答>

可用工具：
- search(query: str): 搜实时信息
- calc(expression: str): 计算表达式

规则：
- 只用上述工具，不要编造工具
- 每步 Thought 保持一句话
- 如无需更多工具，Action 写 Finish，并在 Answer 给出结果
```

## 4. 集成实现思路（伪代码）

```python
# 1) 定义工具
tools = {
  "search": Tool(schema={"query": "str"}, handler=search_api),
  "calc": Tool(schema={"expression": "str"}, handler=run_python)
}

# 2) 准备系统提示词
system_prompt = """
你是 ReAct 智能体，按 Thought/Action/Observation/Answer 循环。
工具: search(query), calc(expression)。
Action 必须是 search/calc/Finish，参数用 JSON。
超过 6 步或出错就给出最佳 Answer 并停止。
"""

# 3) 交替循环：LLM -> 解析 -> 调工具 -> 写 Observation
context = [system_prompt, f"User: {user_query}"]
for step in range(6):
    llm_reply = LLM.generate(context)           # 包含 Thought/Action/Action Input
    thought, action, params = parse(llm_reply)
    if action == "Finish":
        answer = extract_answer(llm_reply)
        break
    obs = call_tool(action, params, tools)      # 执行工具
    context.append(llm_reply)                   # 追加模型输出
    context.append(f"Observation: {obs}")       # 填回 Observation
else:
    answer = "达到步数上限，给出当前最佳结果。"

return answer
```

要点：

- 解析 Action/参数时要做校验，非法就让模型重试（可在 Observation 返回错误信息）。
- 记录每步日志，方便复现和调试。
- Observation 内容保持简洁，避免噪声让模型跑偏。

## 5. 常见风险与防护

- 无限循环/高成本：设步数上限、超时、重复检测，必要时直接 Finish。
- 幻觉/瞎编工具：严格枚举工具清单和 JSON 模式，解析失败即要求重试。
- 输入攻击/不合规：对用户输入做过滤；工具调用前做参数校验；在系统提示中声明安全规则。
- 质量不稳：在 Prompt 中放 1-2 个少样本示例，尤其是 Action Input 的正确格式。

## 6. 最小落地清单

- [ ] 写好工具列表与参数校验
- [ ] 定义系统 Prompt（格式、步数限制、安全规则、示例）
- [ ] 实现循环控制与日志
- [ ] 加上错误/异常 Observation 反馈，让模型自纠正
- [ ] 用便宜模型快速迭代模板，稳定后再换高阶模型
