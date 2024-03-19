# Docker 基本概念

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器或 Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口

## Docker 架构

Docker 使用 C/S 架构，Client 通过接口与 Server 进程通信实现容器的构建，运行和发布

![](https://cdn.jsdelivr.net/gh/flingyp/ImageStorage/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240319102338.png)

### Docker Client（客户端）

Docker 命令行工具，利用命令行发送请求给 Docker Daemon

### Docker Host（宿主机）

安装了 Docker 程序，并且运行了 Docker Daemon 的主机。其中 Docker Host 包含如下部分：

- Docker Daemon：守护进程，负责管理镜像和容器
- Docker Container：容器
- Docker Images：镜像

### Registry（镜像仓库）

最大的公开仓库是官方的 Docker Hub，国内也有如阿里云、时速云等，可以给国内用户提供稳定快速的服务。用户也可以在本地网络内创建一个私有仓库。当用户创建了自己的镜像之后就可以使用 `push` 命令将它上传到公有或者私有仓库，这样下次在另外一台机器上使用这个镜像时候，只需要从仓库上 `pull` 下来就可以了

## Docker 安装

- [CentOS 7 安装 Docker](https://juejin.cn/post/7154437479955693598#heading-14)

## Docker 常用命令

### Docker 相关命令

```sh
# 启动 Docker 服务
systemctl start docker

# 停止 Docker 服务
systemctl stop docker

# 重启 Docker 服务
systemctl restart docker

# 开机启动 Docker 服务
systemctl enable docker

# 查看 Docker 状态
systemctl status docker

# 查看 Docker 版本
docker version

# 查看 Docker 帮助
docker --help

# 查看 Docker 概要信息
docker info
```

### 镜像相关命令

```sh
# 查看本地主机上的镜像
docker images

# 查看所有镜像(包含中间镜像层)
docker images -a

# 查看镜像ID
docker images -q

# 查看所有镜像ID
docker images -aq

# 查找 Docker 镜像
docker search 镜像名称

# 拉取 Docker 镜像
docker pull 镜像名称[:版本号]

# 推送镜像
docker push 镜像名称[:版本号]

# 删除单个镜像
docker rmi 镜像ID/镜像名称[:版本号]

# -f:表示强制删除，强制删除单个镜像
docker rmi -f 镜像ID/镜像名称[:版本号]

# 删除多个镜像
docker rmi [-f] 镜像1ID/镜像1名称[:版本号] 镜像2ID/镜像2名称[:版本号]

# 删除全部镜像
docker rmi [-f] $(docker images -aq)

# 获取 Docker 镜像元信息
docker inspect 镜像ID/镜像名称[:版本号]
```

### 容器相关命令

```sh
# 以交互模式运行容器
docker run -it -v 宿主机目录/文件的绝对路径:容器内目录/文件的绝对路径[:rw/ro] -p 主机端口:容器端口 --name=容器名称 镜像ID/镜像名称[:版本号]

# 以后台方式运行容器 (推荐)
docker run -d -v 宿主机目录/文件的绝对路径:容器内目录/文件的绝对路径[:rw/ro] -p 主机端口:容器端口 --name=容器名称 镜像ID/镜像名称[:版本号]

# 注意：这里启动容器时，没有挂载容器数据卷，启动容器时，一般建议挂载容器数据卷，实现数据持久化操作
docker run -d -p 8080:8080 --name=myTomcat 镜像ID/镜像名称[:版本号]
# 之后，在浏览器中输入你的 IP:8080 即可访问 Tomcat 页面


# 查看当前运行的容器
docker ps

# 查看所有容器 (运行和停止的)
docker ps -a

# 查看最近创建的容器
docker ps -l

# 查看最近创建指定个数的容器
docker ps -n 数量

# 查看停止的容器
docker ps -f status=exited

# 查看所有容器的ID
docker ps -aq

# 启动容器
docker start 容器ID/容器名称

# 重启容器
docker restart 容器ID/容器名称

# 停止容器
docker stop 容器ID/容器名称

# 强制停止容器
docker kill 容器ID/容器名称

# 删除已停止的容器
docker rm 容器ID/容器名称

# -f:表示强制删除，删除正在运行的容器
docker rm -f 容器ID/容器名称

# 删除全部的容器
docker rm -f $(docker ps -qa)

# 以exec方式进入到容器
docker exec -it 容器ID/容器名称 /bin/bash 或 /bin/sh

# 以attach方式进入到容器
docker attach 容器ID/容器名称

# 如果不想进入容器，直接获取相关指令的运行结果，可在后面填写相关操作指令
docker exec -it 容器ID/容器名称 相关命令

# 退出并停止容器
exit

# 退出但容器不停止
ctrl + p + q

# 从容器内拷贝文件到宿主机
docker cp 容器ID/容器名称:容器内目录/文件的绝对路径 宿主机目录/文件的绝对路径

# 从宿主机中拷贝文件到容器内
docker cp 宿主机目录/文件的绝对路径 容器ID/容器名称:容器内目录/文件的绝对路径

# 查看容器日志
docker logs -f -t 容器ID/容器名称
```

exec 与 attach 的区别：

- `exec`：是在容器中打开新的终端，并且可以启动新的进程 (推荐)
- `attach`：是直接进入容器启动命令的终端，不会启动新的进程

## Dockerfile 解析和镜像制作

Dockerfile 是一种能够被 Docker 程序解释的脚本，是用来构建 Docker 镜像的构建文件。是由一条一条的指令组成，每条指令对应 Linux 下面的一条命令，Docker 程序将这些 Dockerfile 指令翻译真正的 Linux 命令。Dockerfile 有自己书写格式和支持的命令，Docker 程序解决这些命令间的依赖关系，类似于 Makefile，Docker 程序将读取 Dockerfile，根据指令生成定制的镜像

### Dockerfile 构建三步骤

1. 编写 Dockerfile 文件
2. `docker build` 生成镜像文件
3. `docker run` 运行镜像文件，生成容器实例

### Dockerfile 基础知识

- 每条保留字指令都必须为大写字母且后面要跟随至少一个参数
- 指令按照从上到下，从左到右的顺序执行
- `#` 表示注释
- `&&` 表示指令前一条指令执行成功后，才执行下一条指令
- 每条指令都会创建一个新的镜像层，并对镜像进行提交

### Dockerfile 保留字讲解

`FROM`：基础镜像，当前镜像是基于哪个镜像的，必须为 Dockerfile 的第一个指令

```sh
FROM imageName[:tag]

# 示例
FROM mysql:5.6

# 注：tag 是可选的，如果不写，则会默认使用 latest 版本的基础镜像
```

`LABEL`：为镜像指定标签

```sh
# 可以设置多个标签，每个标签为一个 "key=value" 的键值对，如果 key 中包含空格，可以使用\来进行转义，也可以通过""来进行标示；另外，反斜线\也可以用于续行
LABEL key1=value1 key2=value2...
```

`RUN`：容器构建时需要运行的指令

```sh
# RUN用于在镜像容器中执行指令，其有以下两种指令执行方式：

# shell执行
RUN command
# 示例：
RUN yum -y install vim

# exec执行
RUN ["executable", "param1", "param2"]
# 示例：
RUN ["/etc/execfile", "arg1", "arg1"]

# 注：RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache
```

`EXPOSE`：指定当前容器与外界交互的端口

```sh
EXPOSE port [port...]

# 示例：
EXPOSE 80 443
EXPOSE 8080
EXPOSE 11211/tcp 11211/udp

# 注： EXPOSE并不会让容器的端口访问到主机。要使其可访问，需要在 docker run 运行容器时通过 -p 来指定映射这些端口
```

`WORKDIR`：创建容器后终端默认登录进来的工作目录，一个落脚点

`ENV`：用来在构建镜像过程中设置环境变量

`ADD`：将本地文件添加到容器中，会自动处理url网络资源和 解压tar类型文件(网络压缩资源不会被解压)

`COPY`：与类似 ADD，拷贝文件和目录到镜像中。将从构建上下文目录中 <源路径> 的文件 / 目录复制到新的一层的镜像内的 < 目标路径 > 位置，但是不会自动解压文件，也不能访问网络资源

`VOLUME`：容器数据卷，用于数据保存和持久化工作

`CMD`：指定一个容器启动时要运行的指令。Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数给替换

`ENTRYPOINT`：指定一个容器启动时要运行的指令。ENTRYPOINT 的目的和 CMD 一样，都是在指定容器启动程序及参数，不同点是 docker run 之后的参数会被当做参数传递给 ENTRYPOINT，形成新的命令组合

`ONBUILD`：当构建一个被继承的 Dockerfile 时，该指令将被运行，即父镜像在被子继承后，父镜像的 onbuild 将会被触发

`USER`：指定容器运行时的用户名或 UID，后续的 RUN 也会使用指定用户。使用 USER 指定用户时，可以使用用户名、UID 或 GID，或是两者的组合。当服务不需要管理员权限时，可以通过该命令指定运行用户。并且可以在之前创建所需要的用户

**案例：编写一个 Nginx 的 Dockerfile**

```sh
# This my first nginx Dockerfile
# Version 1.0

# Base images 基础镜像
FROM centos

#LABEL 维护者信息
LABEL  \
    email="8426356@qq.com"

#ENV 设置环境变量
ENV PATH /usr/local/nginx/sbin:$PATH
ENV WORKPATH /usr/local/nginx-1.8.0

#ADD  文件放在当前目录下，拷过去会自动解压
ADD nginx-1.8.0.tar.gz /usr/local/
ADD epel-release-latest-7.noarch.rpm /usr/local/

#RUN 执行以下命令
RUN rpm -ivh /usr/local/epel-release-latest-7.noarch.rpm
RUN yum install -y wget lftp gcc gcc-c++ make openssl-devel pcre-devel pcre && yum clean all
RUN useradd -s /sbin/nologin -M www

#WORKDIR 相当于cd
WORKDIR $WORKPATH

RUN ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-pcre && make && make install

RUN echo "daemon off;" >> /etc/nginx.conf

#EXPOSE 映射端口
EXPOSE 80

#CMD 运行以下命令
CMD ["nginx"]
```

### Dockerfile 镜像制作

- 通过 Dockerfile 使用 `docker build` 指令生成镜像
- 通过使用 `docker commit` 指令生成镜像
