import {
  A,
  Aa,
  Ca,
  Oa,
  Sa,
  _a,
  ma,
  wa
} from "./chunk-CSA5CQKO.js";
import {
  Km,
  eX,
  lX,
  t5,
  tG
} from "./chunk-XXGV6SHG.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/graph-fsC9e5Zc-C0YVMSKY.js
var D = lX(function(o) {
  return Ca(wa(o, 1, tG, true));
});
var F = "\0";
var d = "\0";
var C = "";
var y = class {
  constructor(t = {}) {
    this._isDirected = Object.prototype.hasOwnProperty.call(t, "directed") ? t.directed : true, this._isMultigraph = Object.prototype.hasOwnProperty.call(t, "multigraph") ? t.multigraph : false, this._isCompound = Object.prototype.hasOwnProperty.call(t, "compound") ? t.compound : false, this._label = void 0, this._defaultNodeLabelFn = eX(void 0), this._defaultEdgeLabelFn = eX(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[d] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(t) {
    return this._label = t, this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(t) {
    return Km(t) || (t = eX(t)), this._defaultNodeLabelFn = t, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return A(this._nodes);
  }
  sources() {
    var t = this;
    return Aa(this.nodes(), function(e) {
      return t5(t._in[e]);
    });
  }
  sinks() {
    var t = this;
    return Aa(this.nodes(), function(e) {
      return t5(t._out[e]);
    });
  }
  setNodes(t, e) {
    var s = arguments, r = this;
    return _a(t, function(i) {
      s.length > 1 ? r.setNode(i, e) : r.setNode(i);
    }), this;
  }
  setNode(t, e) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t) ? (arguments.length > 1 && (this._nodes[t] = e), this) : (this._nodes[t] = arguments.length > 1 ? e : this._defaultNodeLabelFn(t), this._isCompound && (this._parent[t] = d, this._children[t] = {}, this._children[d][t] = true), this._in[t] = {}, this._preds[t] = {}, this._out[t] = {}, this._sucs[t] = {}, ++this._nodeCount, this);
  }
  node(t) {
    return this._nodes[t];
  }
  hasNode(t) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t);
  }
  removeNode(t) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
      var e = (s) => this.removeEdge(this._edgeObjs[s]);
      delete this._nodes[t], this._isCompound && (this._removeFromParentsChildList(t), delete this._parent[t], _a(this.children(t), (s) => {
        this.setParent(s);
      }), delete this._children[t]), _a(A(this._in[t]), e), delete this._in[t], delete this._preds[t], _a(A(this._out[t]), e), delete this._out[t], delete this._sucs[t], --this._nodeCount;
    }
    return this;
  }
  setParent(t, e) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (ma(e))
      e = d;
    else {
      e += "";
      for (var s = e; !ma(s); s = this.parent(s))
        if (s === t)
          throw new Error("Setting " + e + " as parent of " + t + " would create a cycle");
      this.setNode(e);
    }
    return this.setNode(t), this._removeFromParentsChildList(t), this._parent[t] = e, this._children[e][t] = true, this;
  }
  _removeFromParentsChildList(t) {
    delete this._children[this._parent[t]][t];
  }
  parent(t) {
    if (this._isCompound) {
      var e = this._parent[t];
      if (e !== d)
        return e;
    }
  }
  children(t) {
    if (ma(t) && (t = d), this._isCompound) {
      var e = this._children[t];
      if (e)
        return A(e);
    } else {
      if (t === d)
        return this.nodes();
      if (this.hasNode(t))
        return [];
    }
  }
  predecessors(t) {
    var e = this._preds[t];
    if (e)
      return A(e);
  }
  successors(t) {
    var e = this._sucs[t];
    if (e)
      return A(e);
  }
  neighbors(t) {
    var e = this.predecessors(t);
    if (e)
      return D(e, this.successors(t));
  }
  isLeaf(t) {
    var e;
    return this.isDirected() ? e = this.successors(t) : e = this.neighbors(t), e.length === 0;
  }
  filterNodes(t) {
    var e = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    e.setGraph(this.graph());
    var s = this;
    _a(this._nodes, function(n, h) {
      t(h) && e.setNode(h, n);
    }), _a(this._edgeObjs, function(n) {
      e.hasNode(n.v) && e.hasNode(n.w) && e.setEdge(n, s.edge(n));
    });
    var r = {};
    function i(n) {
      var h = s.parent(n);
      return h === void 0 || e.hasNode(h) ? (r[n] = h, h) : h in r ? r[h] : i(h);
    }
    return this._isCompound && _a(e.nodes(), function(n) {
      e.setParent(n, i(n));
    }), e;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(t) {
    return Km(t) || (t = eX(t)), this._defaultEdgeLabelFn = t, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return Oa(this._edgeObjs);
  }
  setPath(t, e) {
    var s = this, r = arguments;
    return Sa(t, function(i, n) {
      return r.length > 1 ? s.setEdge(i, n, e) : s.setEdge(i, n), n;
    }), this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var t, e, s, r, i = false, n = arguments[0];
    typeof n == "object" && n !== null && "v" in n ? (t = n.v, e = n.w, s = n.name, arguments.length === 2 && (r = arguments[1], i = true)) : (t = n, e = arguments[1], s = arguments[3], arguments.length > 2 && (r = arguments[2], i = true)), t = "" + t, e = "" + e, ma(s) || (s = "" + s);
    var h = c(this._isDirected, t, e, s);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, h))
      return i && (this._edgeLabels[h] = r), this;
    if (!ma(s) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(t), this.setNode(e), this._edgeLabels[h] = i ? r : this._defaultEdgeLabelFn(t, e, s);
    var u = M(this._isDirected, t, e, s);
    return t = u.v, e = u.w, Object.freeze(u), this._edgeObjs[h] = u, O(this._preds[e], t), O(this._sucs[t], e), this._in[e][h] = u, this._out[t][h] = u, this._edgeCount++, this;
  }
  edge(t, e, s) {
    var r = arguments.length === 1 ? m(this._isDirected, arguments[0]) : c(this._isDirected, t, e, s);
    return this._edgeLabels[r];
  }
  hasEdge(t, e, s) {
    var r = arguments.length === 1 ? m(this._isDirected, arguments[0]) : c(this._isDirected, t, e, s);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, r);
  }
  removeEdge(t, e, s) {
    var r = arguments.length === 1 ? m(this._isDirected, arguments[0]) : c(this._isDirected, t, e, s), i = this._edgeObjs[r];
    return i && (t = i.v, e = i.w, delete this._edgeLabels[r], delete this._edgeObjs[r], w(this._preds[e], t), w(this._sucs[t], e), delete this._in[e][r], delete this._out[t][r], this._edgeCount--), this;
  }
  inEdges(t, e) {
    var s = this._in[t];
    if (s) {
      var r = Oa(s);
      return e ? Aa(r, function(i) {
        return i.v === e;
      }) : r;
    }
  }
  outEdges(t, e) {
    var s = this._out[t];
    if (s) {
      var r = Oa(s);
      return e ? Aa(r, function(i) {
        return i.w === e;
      }) : r;
    }
  }
  nodeEdges(t, e) {
    var s = this.inEdges(t, e);
    if (s)
      return s.concat(this.outEdges(t, e));
  }
};
y.prototype._nodeCount = 0;
y.prototype._edgeCount = 0;
function O(o, t) {
  o[t] ? o[t]++ : o[t] = 1;
}
function w(o, t) {
  --o[t] || delete o[t];
}
function c(o, t, e, s) {
  var r = "" + t, i = "" + e;
  if (!o && r > i) {
    var n = r;
    r = i, i = n;
  }
  return r + C + i + C + (ma(s) ? F : s);
}
function M(o, t, e, s) {
  var r = "" + t, i = "" + e;
  if (!o && r > i) {
    var n = r;
    r = i, i = n;
  }
  var h = { v: r, w: i };
  return s && (h.name = s), h;
}
function m(o, t) {
  return c(o, t.v, t.w, t.name);
}

export {
  y
};
//# sourceMappingURL=chunk-VVFIDBJC.js.map
