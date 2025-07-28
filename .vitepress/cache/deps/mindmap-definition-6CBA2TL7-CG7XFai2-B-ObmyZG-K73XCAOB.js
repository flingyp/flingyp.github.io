import {
  Jn
} from "./chunk-DUWBSR3N.js";
import {
  At,
  R0,
  S,
  TZ,
  Xq,
  ae,
  hc,
  me,
  oP,
  to,
  tw,
  ut,
  ys,
  zt
} from "./chunk-G6K7VW2X.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.4_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.8.0/node_modules/vitepress-plugin-legend/dist/mindmap-definition-6CBA2TL7-CG7XFai2-B-ObmyZG.js
var it = { exports: {} };
var rt = { exports: {} };
var nt = { exports: {} };
var Ot = nt.exports;
var lt;
function It() {
  return lt || (lt = 1, function(O, M) {
    (function(p, T) {
      O.exports = T();
    })(Ot, function() {
      return (
        /******/
        function(p) {
          var T = {};
          function f(i) {
            if (T[i])
              return T[i].exports;
            var t = T[i] = {
              /******/
              i,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return p[i].call(t.exports, t, t.exports, f), t.l = true, t.exports;
          }
          return f.m = p, f.c = T, f.i = function(i) {
            return i;
          }, f.d = function(i, t, e) {
            f.o(i, t) || Object.defineProperty(i, t, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: e
              /******/
            });
          }, f.n = function(i) {
            var t = i && i.__esModule ? (
              /******/
              function() {
                return i.default;
              }
            ) : (
              /******/
              function() {
                return i;
              }
            );
            return f.d(t, "a", t), t;
          }, f.o = function(i, t) {
            return Object.prototype.hasOwnProperty.call(i, t);
          }, f.p = "", f(f.s = 26);
        }([
          /* 0 */
          /***/
          function(p, T, f) {
            function i() {
            }
            i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i.DEFAULT_INCREMENTAL = false, i.DEFAULT_ANIMATION_ON_LAYOUT = true, i.DEFAULT_ANIMATION_DURING_LAYOUT = false, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = false, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, p.exports = i;
          },
          /* 1 */
          /***/
          function(p, T, f) {
            var i = f(2), t = f(8), e = f(9);
            function r(a, s, y) {
              i.call(this, y), this.isOverlapingSourceAndTarget = false, this.vGraphObject = y, this.bendpoints = [], this.source = a, this.target = s;
            }
            r.prototype = Object.create(i.prototype);
            for (var h in i)
              r[h] = i[h];
            r.prototype.getSource = function() {
              return this.source;
            }, r.prototype.getTarget = function() {
              return this.target;
            }, r.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, r.prototype.getLength = function() {
              return this.length;
            }, r.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, r.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, r.prototype.getLca = function() {
              return this.lca;
            }, r.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, r.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, r.prototype.getOtherEnd = function(a) {
              if (this.source === a)
                return this.target;
              if (this.target === a)
                return this.source;
              throw "Node is not incident with this edge";
            }, r.prototype.getOtherEndInGraph = function(a, s) {
              for (var y = this.getOtherEnd(a), o = s.getGraphManager().getRoot(); ; ) {
                if (y.getOwner() == s)
                  return y;
                if (y.getOwner() == o)
                  break;
                y = y.getOwner().getParent();
              }
              return null;
            }, r.prototype.updateLength = function() {
              var a = new Array(4);
              this.isOverlapingSourceAndTarget = t.getIntersection(this.target.getRect(), this.source.getRect(), a), this.isOverlapingSourceAndTarget || (this.lengthX = a[0] - a[2], this.lengthY = a[1] - a[3], Math.abs(this.lengthX) < 1 && (this.lengthX = e.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = e.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, r.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = e.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = e.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, p.exports = r;
          },
          /* 2 */
          /***/
          function(p, T, f) {
            function i(t) {
              this.vGraphObject = t;
            }
            p.exports = i;
          },
          /* 3 */
          /***/
          function(p, T, f) {
            var i = f(2), t = f(10), e = f(13), r = f(0), h = f(16), a = f(4);
            function s(o, d, c, E) {
              c == null && E == null && (E = d), i.call(this, E), o.graphManager != null && (o = o.graphManager), this.estimatedSize = t.MIN_VALUE, this.inclusionTreeDepth = t.MAX_VALUE, this.vGraphObject = E, this.edges = [], this.graphManager = o, c != null && d != null ? this.rect = new e(d.x, d.y, c.width, c.height) : this.rect = new e();
            }
            s.prototype = Object.create(i.prototype);
            for (var y in i)
              s[y] = i[y];
            s.prototype.getEdges = function() {
              return this.edges;
            }, s.prototype.getChild = function() {
              return this.child;
            }, s.prototype.getOwner = function() {
              return this.owner;
            }, s.prototype.getWidth = function() {
              return this.rect.width;
            }, s.prototype.setWidth = function(o) {
              this.rect.width = o;
            }, s.prototype.getHeight = function() {
              return this.rect.height;
            }, s.prototype.setHeight = function(o) {
              this.rect.height = o;
            }, s.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, s.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, s.prototype.getCenter = function() {
              return new a(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, s.prototype.getLocation = function() {
              return new a(this.rect.x, this.rect.y);
            }, s.prototype.getRect = function() {
              return this.rect;
            }, s.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, s.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, s.prototype.setRect = function(o, d) {
              this.rect.x = o.x, this.rect.y = o.y, this.rect.width = d.width, this.rect.height = d.height;
            }, s.prototype.setCenter = function(o, d) {
              this.rect.x = o - this.rect.width / 2, this.rect.y = d - this.rect.height / 2;
            }, s.prototype.setLocation = function(o, d) {
              this.rect.x = o, this.rect.y = d;
            }, s.prototype.moveBy = function(o, d) {
              this.rect.x += o, this.rect.y += d;
            }, s.prototype.getEdgeListToNode = function(o) {
              var d = [], c = this;
              return c.edges.forEach(function(E) {
                if (E.target == o) {
                  if (E.source != c) throw "Incorrect edge source!";
                  d.push(E);
                }
              }), d;
            }, s.prototype.getEdgesBetween = function(o) {
              var d = [], c = this;
              return c.edges.forEach(function(E) {
                if (!(E.source == c || E.target == c)) throw "Incorrect edge source and/or target";
                (E.target == o || E.source == o) && d.push(E);
              }), d;
            }, s.prototype.getNeighborsList = function() {
              var o = /* @__PURE__ */ new Set(), d = this;
              return d.edges.forEach(function(c) {
                if (c.source == d)
                  o.add(c.target);
                else {
                  if (c.target != d)
                    throw "Incorrect incidency!";
                  o.add(c.source);
                }
              }), o;
            }, s.prototype.withChildren = function() {
              var o = /* @__PURE__ */ new Set(), d, c;
              if (o.add(this), this.child != null)
                for (var E = this.child.getNodes(), m = 0; m < E.length; m++)
                  d = E[m], c = d.withChildren(), c.forEach(function(_) {
                    o.add(_);
                  });
              return o;
            }, s.prototype.getNoOfChildren = function() {
              var o = 0, d;
              if (this.child == null)
                o = 1;
              else
                for (var c = this.child.getNodes(), E = 0; E < c.length; E++)
                  d = c[E], o += d.getNoOfChildren();
              return o == 0 && (o = 1), o;
            }, s.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == t.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, s.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, s.prototype.scatter = function() {
              var o, d, c = -r.INITIAL_WORLD_BOUNDARY, E = r.INITIAL_WORLD_BOUNDARY;
              o = r.WORLD_CENTER_X + h.nextDouble() * (E - c) + c;
              var m = -r.INITIAL_WORLD_BOUNDARY, _ = r.INITIAL_WORLD_BOUNDARY;
              d = r.WORLD_CENTER_Y + h.nextDouble() * (_ - m) + m, this.rect.x = o, this.rect.y = d;
            }, s.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var o = this.getChild();
                if (o.updateBounds(true), this.rect.x = o.getLeft(), this.rect.y = o.getTop(), this.setWidth(o.getRight() - o.getLeft()), this.setHeight(o.getBottom() - o.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var d = o.getRight() - o.getLeft(), c = o.getBottom() - o.getTop();
                  this.labelWidth > d && (this.rect.x -= (this.labelWidth - d) / 2, this.setWidth(this.labelWidth)), this.labelHeight > c && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - c) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - c), this.setHeight(this.labelHeight));
                }
              }
            }, s.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == t.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, s.prototype.transform = function(o) {
              var d = this.rect.x;
              d > r.WORLD_BOUNDARY ? d = r.WORLD_BOUNDARY : d < -r.WORLD_BOUNDARY && (d = -r.WORLD_BOUNDARY);
              var c = this.rect.y;
              c > r.WORLD_BOUNDARY ? c = r.WORLD_BOUNDARY : c < -r.WORLD_BOUNDARY && (c = -r.WORLD_BOUNDARY);
              var E = new a(d, c), m = o.inverseTransformPoint(E);
              this.setLocation(m.x, m.y);
            }, s.prototype.getLeft = function() {
              return this.rect.x;
            }, s.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, s.prototype.getTop = function() {
              return this.rect.y;
            }, s.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, s.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, p.exports = s;
          },
          /* 4 */
          /***/
          function(p, T, f) {
            function i(t, e) {
              t == null && e == null ? (this.x = 0, this.y = 0) : (this.x = t, this.y = e);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setX = function(t) {
              this.x = t;
            }, i.prototype.setY = function(t) {
              this.y = t;
            }, i.prototype.getDifference = function(t) {
              return new DimensionD(this.x - t.x, this.y - t.y);
            }, i.prototype.getCopy = function() {
              return new i(this.x, this.y);
            }, i.prototype.translate = function(t) {
              return this.x += t.width, this.y += t.height, this;
            }, p.exports = i;
          },
          /* 5 */
          /***/
          function(p, T, f) {
            var i = f(2), t = f(10), e = f(0), r = f(6), h = f(3), a = f(1), s = f(13), y = f(12), o = f(11);
            function d(E, m, _) {
              i.call(this, _), this.estimatedSize = t.MIN_VALUE, this.margin = e.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = E, m != null && m instanceof r ? this.graphManager = m : m != null && m instanceof Layout && (this.graphManager = m.graphManager);
            }
            d.prototype = Object.create(i.prototype);
            for (var c in i)
              d[c] = i[c];
            d.prototype.getNodes = function() {
              return this.nodes;
            }, d.prototype.getEdges = function() {
              return this.edges;
            }, d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getParent = function() {
              return this.parent;
            }, d.prototype.getLeft = function() {
              return this.left;
            }, d.prototype.getRight = function() {
              return this.right;
            }, d.prototype.getTop = function() {
              return this.top;
            }, d.prototype.getBottom = function() {
              return this.bottom;
            }, d.prototype.isConnected = function() {
              return this.isConnected;
            }, d.prototype.add = function(E, m, _) {
              if (m == null && _ == null) {
                var N = E;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(N) > -1)
                  throw "Node already in graph!";
                return N.owner = this, this.getNodes().push(N), N;
              } else {
                var D = E;
                if (!(this.getNodes().indexOf(m) > -1 && this.getNodes().indexOf(_) > -1))
                  throw "Source or target not in graph!";
                if (!(m.owner == _.owner && m.owner == this))
                  throw "Both owners must be this graph!";
                return m.owner != _.owner ? null : (D.source = m, D.target = _, D.isInterGraph = false, this.getEdges().push(D), m.edges.push(D), _ != m && _.edges.push(D), D);
              }
            }, d.prototype.remove = function(E) {
              var m = E;
              if (E instanceof h) {
                if (m == null)
                  throw "Node is null!";
                if (!(m.owner != null && m.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var _ = m.edges.slice(), N, D = _.length, g = 0; g < D; g++)
                  N = _[g], N.isInterGraph ? this.graphManager.remove(N) : N.source.owner.remove(N);
                var L = this.nodes.indexOf(m);
                if (L == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(L, 1);
              } else if (E instanceof a) {
                var N = E;
                if (N == null)
                  throw "Edge is null!";
                if (!(N.source != null && N.target != null))
                  throw "Source and/or target is null!";
                if (!(N.source.owner != null && N.target.owner != null && N.source.owner == this && N.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var n = N.source.edges.indexOf(N), u = N.target.edges.indexOf(N);
                if (!(n > -1 && u > -1))
                  throw "Source and/or target doesn't know this edge!";
                N.source.edges.splice(n, 1), N.target != N.source && N.target.edges.splice(u, 1);
                var L = N.source.owner.getEdges().indexOf(N);
                if (L == -1)
                  throw "Not in owner's edge list!";
                N.source.owner.getEdges().splice(L, 1);
              }
            }, d.prototype.updateLeftTop = function() {
              for (var E = t.MAX_VALUE, m = t.MAX_VALUE, _, N, D, g = this.getNodes(), L = g.length, n = 0; n < L; n++) {
                var u = g[n];
                _ = u.getTop(), N = u.getLeft(), E > _ && (E = _), m > N && (m = N);
              }
              return E == t.MAX_VALUE ? null : (g[0].getParent().paddingLeft != null ? D = g[0].getParent().paddingLeft : D = this.margin, this.left = m - D, this.top = E - D, new y(this.left, this.top));
            }, d.prototype.updateBounds = function(E) {
              for (var m = t.MAX_VALUE, _ = -t.MAX_VALUE, N = t.MAX_VALUE, D = -t.MAX_VALUE, g, L, n, u, l, v = this.nodes, A = v.length, I = 0; I < A; I++) {
                var w = v[I];
                E && w.child != null && w.updateBounds(), g = w.getLeft(), L = w.getRight(), n = w.getTop(), u = w.getBottom(), m > g && (m = g), _ < L && (_ = L), N > n && (N = n), D < u && (D = u);
              }
              var R = new s(m, N, _ - m, D - N);
              m == t.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), v[0].getParent().paddingLeft != null ? l = v[0].getParent().paddingLeft : l = this.margin, this.left = R.x - l, this.right = R.x + R.width + l, this.top = R.y - l, this.bottom = R.y + R.height + l;
            }, d.calculateBounds = function(E) {
              for (var m = t.MAX_VALUE, _ = -t.MAX_VALUE, N = t.MAX_VALUE, D = -t.MAX_VALUE, g, L, n, u, l = E.length, v = 0; v < l; v++) {
                var A = E[v];
                g = A.getLeft(), L = A.getRight(), n = A.getTop(), u = A.getBottom(), m > g && (m = g), _ < L && (_ = L), N > n && (N = n), D < u && (D = u);
              }
              var I = new s(m, N, _ - m, D - N);
              return I;
            }, d.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, d.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == t.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, d.prototype.calcEstimatedSize = function() {
              for (var E = 0, m = this.nodes, _ = m.length, N = 0; N < _; N++) {
                var D = m[N];
                E += D.calcEstimatedSize();
              }
              return E == 0 ? this.estimatedSize = e.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = E / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, d.prototype.updateConnected = function() {
              var E = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var m = new o(), _ = /* @__PURE__ */ new Set(), N = this.nodes[0], D, g, L = N.withChildren();
              for (L.forEach(function(I) {
                m.push(I), _.add(I);
              }); m.length !== 0; ) {
                N = m.shift(), D = N.getEdges();
                for (var n = D.length, u = 0; u < n; u++) {
                  var l = D[u];
                  if (g = l.getOtherEndInGraph(N, this), g != null && !_.has(g)) {
                    var v = g.withChildren();
                    v.forEach(function(I) {
                      m.push(I), _.add(I);
                    });
                  }
                }
              }
              if (this.isConnected = false, _.size >= this.nodes.length) {
                var A = 0;
                _.forEach(function(I) {
                  I.owner == E && A++;
                }), A == this.nodes.length && (this.isConnected = true);
              }
            }, p.exports = d;
          },
          /* 6 */
          /***/
          function(p, T, f) {
            var i, t = f(1);
            function e(r) {
              i = f(5), this.layout = r, this.graphs = [], this.edges = [];
            }
            e.prototype.addRoot = function() {
              var r = this.layout.newGraph(), h = this.layout.newNode(null), a = this.add(r, h);
              return this.setRootGraph(a), this.rootGraph;
            }, e.prototype.add = function(r, h, a, s, y) {
              if (a == null && s == null && y == null) {
                if (r == null)
                  throw "Graph is null!";
                if (h == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(r) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(r), r.parent != null)
                  throw "Already has a parent!";
                if (h.child != null)
                  throw "Already has a child!";
                return r.parent = h, h.child = r, r;
              } else {
                y = a, s = h, a = r;
                var o = s.getOwner(), d = y.getOwner();
                if (!(o != null && o.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(d != null && d.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (o == d)
                  return a.isInterGraph = false, o.add(a, s, y);
                if (a.isInterGraph = true, a.source = s, a.target = y, this.edges.indexOf(a) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(a), !(a.source != null && a.target != null))
                  throw "Edge source and/or target is null!";
                if (!(a.source.edges.indexOf(a) == -1 && a.target.edges.indexOf(a) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return a.source.edges.push(a), a.target.edges.push(a), a;
              }
            }, e.prototype.remove = function(r) {
              if (r instanceof i) {
                var h = r;
                if (h.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(h == this.rootGraph || h.parent != null && h.parent.graphManager == this))
                  throw "Invalid parent node!";
                var a = [];
                a = a.concat(h.getEdges());
                for (var s, y = a.length, o = 0; o < y; o++)
                  s = a[o], h.remove(s);
                var d = [];
                d = d.concat(h.getNodes());
                var c;
                y = d.length;
                for (var o = 0; o < y; o++)
                  c = d[o], h.remove(c);
                h == this.rootGraph && this.setRootGraph(null);
                var E = this.graphs.indexOf(h);
                this.graphs.splice(E, 1), h.parent = null;
              } else if (r instanceof t) {
                if (s = r, s == null)
                  throw "Edge is null!";
                if (!s.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(s.source != null && s.target != null))
                  throw "Source and/or target is null!";
                if (!(s.source.edges.indexOf(s) != -1 && s.target.edges.indexOf(s) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var E = s.source.edges.indexOf(s);
                if (s.source.edges.splice(E, 1), E = s.target.edges.indexOf(s), s.target.edges.splice(E, 1), !(s.source.owner != null && s.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (s.source.owner.getGraphManager().edges.indexOf(s) == -1)
                  throw "Not in owner graph manager's edge list!";
                var E = s.source.owner.getGraphManager().edges.indexOf(s);
                s.source.owner.getGraphManager().edges.splice(E, 1);
              }
            }, e.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, e.prototype.getGraphs = function() {
              return this.graphs;
            }, e.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var r = [], h = this.getGraphs(), a = h.length, s = 0; s < a; s++)
                  r = r.concat(h[s].getNodes());
                this.allNodes = r;
              }
              return this.allNodes;
            }, e.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, e.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, e.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, e.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var r = [], h = this.getGraphs();
                h.length;
                for (var a = 0; a < h.length; a++)
                  r = r.concat(h[a].getEdges());
                r = r.concat(this.edges), this.allEdges = r;
              }
              return this.allEdges;
            }, e.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, e.prototype.setAllNodesToApplyGravitation = function(r) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = r;
            }, e.prototype.getRoot = function() {
              return this.rootGraph;
            }, e.prototype.setRootGraph = function(r) {
              if (r.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = r, r.parent == null && (r.parent = this.layout.newNode("Root node"));
            }, e.prototype.getLayout = function() {
              return this.layout;
            }, e.prototype.isOneAncestorOfOther = function(r, h) {
              if (!(r != null && h != null))
                throw "assert failed";
              if (r == h)
                return true;
              var a = r.getOwner(), s;
              do {
                if (s = a.getParent(), s == null)
                  break;
                if (s == h)
                  return true;
                if (a = s.getOwner(), a == null)
                  break;
              } while (true);
              a = h.getOwner();
              do {
                if (s = a.getParent(), s == null)
                  break;
                if (s == r)
                  return true;
                if (a = s.getOwner(), a == null)
                  break;
              } while (true);
              return false;
            }, e.prototype.calcLowestCommonAncestors = function() {
              for (var r, h, a, s, y, o = this.getAllEdges(), d = o.length, c = 0; c < d; c++) {
                if (r = o[c], h = r.source, a = r.target, r.lca = null, r.sourceInLca = h, r.targetInLca = a, h == a) {
                  r.lca = h.getOwner();
                  continue;
                }
                for (s = h.getOwner(); r.lca == null; ) {
                  for (r.targetInLca = a, y = a.getOwner(); r.lca == null; ) {
                    if (y == s) {
                      r.lca = y;
                      break;
                    }
                    if (y == this.rootGraph)
                      break;
                    if (r.lca != null)
                      throw "assert failed";
                    r.targetInLca = y.getParent(), y = r.targetInLca.getOwner();
                  }
                  if (s == this.rootGraph)
                    break;
                  r.lca == null && (r.sourceInLca = s.getParent(), s = r.sourceInLca.getOwner());
                }
                if (r.lca == null)
                  throw "assert failed";
              }
            }, e.prototype.calcLowestCommonAncestor = function(r, h) {
              if (r == h)
                return r.getOwner();
              var a = r.getOwner();
              do {
                if (a == null)
                  break;
                var s = h.getOwner();
                do {
                  if (s == null)
                    break;
                  if (s == a)
                    return s;
                  s = s.getParent().getOwner();
                } while (true);
                a = a.getParent().getOwner();
              } while (true);
              return a;
            }, e.prototype.calcInclusionTreeDepths = function(r, h) {
              r == null && h == null && (r = this.rootGraph, h = 1);
              for (var a, s = r.getNodes(), y = s.length, o = 0; o < y; o++)
                a = s[o], a.inclusionTreeDepth = h, a.child != null && this.calcInclusionTreeDepths(a.child, h + 1);
            }, e.prototype.includesInvalidEdge = function() {
              for (var r, h = this.edges.length, a = 0; a < h; a++)
                if (r = this.edges[a], this.isOneAncestorOfOther(r.source, r.target))
                  return true;
              return false;
            }, p.exports = e;
          },
          /* 7 */
          /***/
          function(p, T, f) {
            var i = f(0);
            function t() {
            }
            for (var e in i)
              t[e] = i[e];
            t.MAX_ITERATIONS = 2500, t.DEFAULT_EDGE_LENGTH = 50, t.DEFAULT_SPRING_STRENGTH = 0.45, t.DEFAULT_REPULSION_STRENGTH = 4500, t.DEFAULT_GRAVITY_STRENGTH = 0.4, t.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, t.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, t.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, t.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, t.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, t.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, t.COOLING_ADAPTATION_FACTOR = 0.33, t.ADAPTATION_LOWER_NODE_LIMIT = 1e3, t.ADAPTATION_UPPER_NODE_LIMIT = 5e3, t.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, t.MAX_NODE_DISPLACEMENT = t.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, t.MIN_REPULSION_DIST = t.DEFAULT_EDGE_LENGTH / 10, t.CONVERGENCE_CHECK_PERIOD = 100, t.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, t.MIN_EDGE_LENGTH = 1, t.GRID_CALCULATION_CHECK_PERIOD = 10, p.exports = t;
          },
          /* 8 */
          /***/
          function(p, T, f) {
            var i = f(12);
            function t() {
            }
            t.calcSeparationAmount = function(e, r, h, a) {
              if (!e.intersects(r))
                throw "assert failed";
              var s = new Array(2);
              this.decideDirectionsForOverlappingNodes(e, r, s), h[0] = Math.min(e.getRight(), r.getRight()) - Math.max(e.x, r.x), h[1] = Math.min(e.getBottom(), r.getBottom()) - Math.max(e.y, r.y), e.getX() <= r.getX() && e.getRight() >= r.getRight() ? h[0] += Math.min(r.getX() - e.getX(), e.getRight() - r.getRight()) : r.getX() <= e.getX() && r.getRight() >= e.getRight() && (h[0] += Math.min(e.getX() - r.getX(), r.getRight() - e.getRight())), e.getY() <= r.getY() && e.getBottom() >= r.getBottom() ? h[1] += Math.min(r.getY() - e.getY(), e.getBottom() - r.getBottom()) : r.getY() <= e.getY() && r.getBottom() >= e.getBottom() && (h[1] += Math.min(e.getY() - r.getY(), r.getBottom() - e.getBottom()));
              var y = Math.abs((r.getCenterY() - e.getCenterY()) / (r.getCenterX() - e.getCenterX()));
              r.getCenterY() === e.getCenterY() && r.getCenterX() === e.getCenterX() && (y = 1);
              var o = y * h[0], d = h[1] / y;
              h[0] < d ? d = h[0] : o = h[1], h[0] = -1 * s[0] * (d / 2 + a), h[1] = -1 * s[1] * (o / 2 + a);
            }, t.decideDirectionsForOverlappingNodes = function(e, r, h) {
              e.getCenterX() < r.getCenterX() ? h[0] = -1 : h[0] = 1, e.getCenterY() < r.getCenterY() ? h[1] = -1 : h[1] = 1;
            }, t.getIntersection2 = function(e, r, h) {
              var a = e.getCenterX(), s = e.getCenterY(), y = r.getCenterX(), o = r.getCenterY();
              if (e.intersects(r))
                return h[0] = a, h[1] = s, h[2] = y, h[3] = o, true;
              var d = e.getX(), c = e.getY(), E = e.getRight(), m = e.getX(), _ = e.getBottom(), N = e.getRight(), D = e.getWidthHalf(), g = e.getHeightHalf(), L = r.getX(), n = r.getY(), u = r.getRight(), l = r.getX(), v = r.getBottom(), A = r.getRight(), I = r.getWidthHalf(), w = r.getHeightHalf(), R = false, S2 = false;
              if (a === y) {
                if (s > o)
                  return h[0] = a, h[1] = c, h[2] = y, h[3] = v, false;
                if (s < o)
                  return h[0] = a, h[1] = _, h[2] = y, h[3] = n, false;
              } else if (s === o) {
                if (a > y)
                  return h[0] = d, h[1] = s, h[2] = u, h[3] = o, false;
                if (a < y)
                  return h[0] = E, h[1] = s, h[2] = L, h[3] = o, false;
              } else {
                var U = e.height / e.width, G = r.height / r.width, C = (o - s) / (y - a), x = void 0, F = void 0, k = void 0, Y = void 0, X = void 0, P = void 0;
                if (-U === C ? a > y ? (h[0] = m, h[1] = _, R = true) : (h[0] = E, h[1] = c, R = true) : U === C && (a > y ? (h[0] = d, h[1] = c, R = true) : (h[0] = N, h[1] = _, R = true)), -G === C ? y > a ? (h[2] = l, h[3] = v, S2 = true) : (h[2] = u, h[3] = n, S2 = true) : G === C && (y > a ? (h[2] = L, h[3] = n, S2 = true) : (h[2] = A, h[3] = v, S2 = true)), R && S2)
                  return false;
                if (a > y ? s > o ? (x = this.getCardinalDirection(U, C, 4), F = this.getCardinalDirection(G, C, 2)) : (x = this.getCardinalDirection(-U, C, 3), F = this.getCardinalDirection(-G, C, 1)) : s > o ? (x = this.getCardinalDirection(-U, C, 1), F = this.getCardinalDirection(-G, C, 3)) : (x = this.getCardinalDirection(U, C, 2), F = this.getCardinalDirection(G, C, 4)), !R)
                  switch (x) {
                    case 1:
                      Y = c, k = a + -g / C, h[0] = k, h[1] = Y;
                      break;
                    case 2:
                      k = N, Y = s + D * C, h[0] = k, h[1] = Y;
                      break;
                    case 3:
                      Y = _, k = a + g / C, h[0] = k, h[1] = Y;
                      break;
                    case 4:
                      k = m, Y = s + -D * C, h[0] = k, h[1] = Y;
                      break;
                  }
                if (!S2)
                  switch (F) {
                    case 1:
                      P = n, X = y + -w / C, h[2] = X, h[3] = P;
                      break;
                    case 2:
                      X = A, P = o + I * C, h[2] = X, h[3] = P;
                      break;
                    case 3:
                      P = v, X = y + w / C, h[2] = X, h[3] = P;
                      break;
                    case 4:
                      X = l, P = o + -I * C, h[2] = X, h[3] = P;
                      break;
                  }
              }
              return false;
            }, t.getCardinalDirection = function(e, r, h) {
              return e > r ? h : 1 + h % 4;
            }, t.getIntersection = function(e, r, h, a) {
              if (a == null)
                return this.getIntersection2(e, r, h);
              var s = e.x, y = e.y, o = r.x, d = r.y, c = h.x, E = h.y, m = a.x, _ = a.y, N = void 0, D = void 0, g = void 0, L = void 0, n = void 0, u = void 0, l = void 0, v = void 0, A = void 0;
              return g = d - y, n = s - o, l = o * y - s * d, L = _ - E, u = c - m, v = m * E - c * _, A = g * u - L * n, A === 0 ? null : (N = (n * v - u * l) / A, D = (L * l - g * v) / A, new i(N, D));
            }, t.angleOfVector = function(e, r, h, a) {
              var s = void 0;
              return e !== h ? (s = Math.atan((a - r) / (h - e)), h < e ? s += Math.PI : a < r && (s += this.TWO_PI)) : a < r ? s = this.ONE_AND_HALF_PI : s = this.HALF_PI, s;
            }, t.doIntersect = function(e, r, h, a) {
              var s = e.x, y = e.y, o = r.x, d = r.y, c = h.x, E = h.y, m = a.x, _ = a.y, N = (o - s) * (_ - E) - (m - c) * (d - y);
              if (N === 0)
                return false;
              var D = ((_ - E) * (m - s) + (c - m) * (_ - y)) / N, g = ((y - d) * (m - s) + (o - s) * (_ - y)) / N;
              return 0 < D && D < 1 && 0 < g && g < 1;
            }, t.HALF_PI = 0.5 * Math.PI, t.ONE_AND_HALF_PI = 1.5 * Math.PI, t.TWO_PI = 2 * Math.PI, t.THREE_PI = 3 * Math.PI, p.exports = t;
          },
          /* 9 */
          /***/
          function(p, T, f) {
            function i() {
            }
            i.sign = function(t) {
              return t > 0 ? 1 : t < 0 ? -1 : 0;
            }, i.floor = function(t) {
              return t < 0 ? Math.ceil(t) : Math.floor(t);
            }, i.ceil = function(t) {
              return t < 0 ? Math.floor(t) : Math.ceil(t);
            }, p.exports = i;
          },
          /* 10 */
          /***/
          function(p, T, f) {
            function i() {
            }
            i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, p.exports = i;
          },
          /* 11 */
          /***/
          function(p, T, f) {
            var i = /* @__PURE__ */ function() {
              function s(y, o) {
                for (var d = 0; d < o.length; d++) {
                  var c = o[d];
                  c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(y, c.key, c);
                }
              }
              return function(y, o, d) {
                return o && s(y.prototype, o), d && s(y, d), y;
              };
            }();
            function t(s, y) {
              if (!(s instanceof y))
                throw new TypeError("Cannot call a class as a function");
            }
            var e = function(s) {
              return { value: s, next: null, prev: null };
            }, r = function(s, y, o, d) {
              return s !== null ? s.next = y : d.head = y, o !== null ? o.prev = y : d.tail = y, y.prev = s, y.next = o, d.length++, y;
            }, h = function(s, y) {
              var o = s.prev, d = s.next;
              return o !== null ? o.next = d : y.head = d, d !== null ? d.prev = o : y.tail = o, s.prev = s.next = null, y.length--, s;
            }, a = function() {
              function s(y) {
                var o = this;
                t(this, s), this.length = 0, this.head = null, this.tail = null, y == null ? void 0 : y.forEach(function(d) {
                  return o.push(d);
                });
              }
              return i(s, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(y, o) {
                  return r(o.prev, e(y), o, this);
                }
              }, {
                key: "insertAfter",
                value: function(y, o) {
                  return r(o, e(y), o.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(y, o) {
                  return r(o.prev, y, o, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(y, o) {
                  return r(o, y, o.next, this);
                }
              }, {
                key: "push",
                value: function(y) {
                  return r(this.tail, e(y), null, this);
                }
              }, {
                key: "unshift",
                value: function(y) {
                  return r(null, e(y), this.head, this);
                }
              }, {
                key: "remove",
                value: function(y) {
                  return h(y, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return h(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return h(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return h(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return h(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(y) {
                  if (y <= this.length()) {
                    for (var o = 1, d = this.head; o < y; )
                      d = d.next, o++;
                    return d.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(y, o) {
                  if (y <= this.length()) {
                    for (var d = 1, c = this.head; d < y; )
                      c = c.next, d++;
                    c.value = o;
                  }
                }
              }]), s;
            }();
            p.exports = a;
          },
          /* 12 */
          /***/
          function(p, T, f) {
            function i(t, e, r) {
              this.x = null, this.y = null, t == null && e == null && r == null ? (this.x = 0, this.y = 0) : typeof t == "number" && typeof e == "number" && r == null ? (this.x = t, this.y = e) : t.constructor.name == "Point" && e == null && r == null && (r = t, this.x = r.x, this.y = r.y);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.getLocation = function() {
              return new i(this.x, this.y);
            }, i.prototype.setLocation = function(t, e, r) {
              t.constructor.name == "Point" && e == null && r == null ? (r = t, this.setLocation(r.x, r.y)) : typeof t == "number" && typeof e == "number" && r == null && (parseInt(t) == t && parseInt(e) == e ? this.move(t, e) : (this.x = Math.floor(t + 0.5), this.y = Math.floor(e + 0.5)));
            }, i.prototype.move = function(t, e) {
              this.x = t, this.y = e;
            }, i.prototype.translate = function(t, e) {
              this.x += t, this.y += e;
            }, i.prototype.equals = function(t) {
              if (t.constructor.name == "Point") {
                var e = t;
                return this.x == e.x && this.y == e.y;
              }
              return this == t;
            }, i.prototype.toString = function() {
              return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, p.exports = i;
          },
          /* 13 */
          /***/
          function(p, T, f) {
            function i(t, e, r, h) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, t != null && e != null && r != null && h != null && (this.x = t, this.y = e, this.width = r, this.height = h);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.setX = function(t) {
              this.x = t;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setY = function(t) {
              this.y = t;
            }, i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(t) {
              this.width = t;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(t) {
              this.height = t;
            }, i.prototype.getRight = function() {
              return this.x + this.width;
            }, i.prototype.getBottom = function() {
              return this.y + this.height;
            }, i.prototype.intersects = function(t) {
              return !(this.getRight() < t.x || this.getBottom() < t.y || t.getRight() < this.x || t.getBottom() < this.y);
            }, i.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, i.prototype.getMinX = function() {
              return this.getX();
            }, i.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, i.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, i.prototype.getMinY = function() {
              return this.getY();
            }, i.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, i.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, i.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, p.exports = i;
          },
          /* 14 */
          /***/
          function(p, T, f) {
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
              return typeof e;
            } : function(e) {
              return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            function t() {
            }
            t.lastID = 0, t.createID = function(e) {
              return t.isPrimitive(e) ? e : (e.uniqueID != null || (e.uniqueID = t.getString(), t.lastID++), e.uniqueID);
            }, t.getString = function(e) {
              return e == null && (e = t.lastID), "Object#" + e;
            }, t.isPrimitive = function(e) {
              var r = typeof e > "u" ? "undefined" : i(e);
              return e == null || r != "object" && r != "function";
            }, p.exports = t;
          },
          /* 15 */
          /***/
          function(p, T, f) {
            function i(c) {
              if (Array.isArray(c)) {
                for (var E = 0, m = Array(c.length); E < c.length; E++)
                  m[E] = c[E];
                return m;
              } else
                return Array.from(c);
            }
            var t = f(0), e = f(6), r = f(3), h = f(1), a = f(5), s = f(4), y = f(17), o = f(27);
            function d(c) {
              o.call(this), this.layoutQuality = t.QUALITY, this.createBendsAsNeeded = t.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = t.DEFAULT_INCREMENTAL, this.animationOnLayout = t.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = t.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = t.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = t.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new e(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, c != null && (this.isRemoteUse = c);
            }
            d.RANDOM_SEED = 1, d.prototype = Object.create(o.prototype), d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, d.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, d.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, d.prototype.newGraphManager = function() {
              var c = new e(this);
              return this.graphManager = c, c;
            }, d.prototype.newGraph = function(c) {
              return new a(null, this.graphManager, c);
            }, d.prototype.newNode = function(c) {
              return new r(this.graphManager, c);
            }, d.prototype.newEdge = function(c) {
              return new h(null, null, c);
            }, d.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, d.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var c;
              return this.checkLayoutSuccess() ? c = false : c = this.layout(), t.ANIMATE === "during" ? false : (c && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, c);
            }, d.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, d.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var c = this.graphManager.getAllEdges(), E = 0; E < c.length; E++)
                  c[E];
                for (var m = this.graphManager.getRoot().getNodes(), E = 0; E < m.length; E++)
                  m[E];
                this.update(this.graphManager.getRoot());
              }
            }, d.prototype.update = function(c) {
              if (c == null)
                this.update2();
              else if (c instanceof r) {
                var E = c;
                if (E.getChild() != null)
                  for (var m = E.getChild().getNodes(), _ = 0; _ < m.length; _++)
                    update(m[_]);
                if (E.vGraphObject != null) {
                  var N = E.vGraphObject;
                  N.update(E);
                }
              } else if (c instanceof h) {
                var D = c;
                if (D.vGraphObject != null) {
                  var g = D.vGraphObject;
                  g.update(D);
                }
              } else if (c instanceof a) {
                var L = c;
                if (L.vGraphObject != null) {
                  var n = L.vGraphObject;
                  n.update(L);
                }
              }
            }, d.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = t.QUALITY, this.animationDuringLayout = t.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = t.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = t.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = t.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = t.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = t.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, d.prototype.transform = function(c) {
              if (c == null)
                this.transform(new s(0, 0));
              else {
                var E = new y(), m = this.graphManager.getRoot().updateLeftTop();
                if (m != null) {
                  E.setWorldOrgX(c.x), E.setWorldOrgY(c.y), E.setDeviceOrgX(m.x), E.setDeviceOrgY(m.y);
                  for (var _ = this.getAllNodes(), N, D = 0; D < _.length; D++)
                    N = _[D], N.transform(E);
                }
              }
            }, d.prototype.positionNodesRandomly = function(c) {
              if (c == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var E, m, _ = c.getNodes(), N = 0; N < _.length; N++)
                  E = _[N], m = E.getChild(), m == null || m.getNodes().length == 0 ? E.scatter() : (this.positionNodesRandomly(m), E.updateBounds());
            }, d.prototype.getFlatForest = function() {
              for (var c = [], E = true, m = this.graphManager.getRoot().getNodes(), _ = true, N = 0; N < m.length; N++)
                m[N].getChild() != null && (_ = false);
              if (!_)
                return c;
              var D = /* @__PURE__ */ new Set(), g = [], L = /* @__PURE__ */ new Map(), n = [];
              for (n = n.concat(m); n.length > 0 && E; ) {
                for (g.push(n[0]); g.length > 0 && E; ) {
                  var u = g[0];
                  g.splice(0, 1), D.add(u);
                  for (var l = u.getEdges(), N = 0; N < l.length; N++) {
                    var v = l[N].getOtherEnd(u);
                    if (L.get(u) != v)
                      if (!D.has(v))
                        g.push(v), L.set(v, u);
                      else {
                        E = false;
                        break;
                      }
                  }
                }
                if (!E)
                  c = [];
                else {
                  var A = [].concat(i(D));
                  c.push(A);
                  for (var N = 0; N < A.length; N++) {
                    var I = A[N], w = n.indexOf(I);
                    w > -1 && n.splice(w, 1);
                  }
                  D = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map();
                }
              }
              return c;
            }, d.prototype.createDummyNodesForBendpoints = function(c) {
              for (var E = [], m = c.source, _ = this.graphManager.calcLowestCommonAncestor(c.source, c.target), N = 0; N < c.bendpoints.length; N++) {
                var D = this.newNode(null);
                D.setRect(new Point(0, 0), new Dimension(1, 1)), _.add(D);
                var g = this.newEdge(null);
                this.graphManager.add(g, m, D), E.add(D), m = D;
              }
              var g = this.newEdge(null);
              return this.graphManager.add(g, m, c.target), this.edgeToDummyNodes.set(c, E), c.isInterGraph() ? this.graphManager.remove(c) : _.remove(c), E;
            }, d.prototype.createBendpointsFromDummyNodes = function() {
              var c = [];
              c = c.concat(this.graphManager.getAllEdges()), c = [].concat(i(this.edgeToDummyNodes.keys())).concat(c);
              for (var E = 0; E < c.length; E++) {
                var m = c[E];
                if (m.bendpoints.length > 0) {
                  for (var _ = this.edgeToDummyNodes.get(m), N = 0; N < _.length; N++) {
                    var D = _[N], g = new s(D.getCenterX(), D.getCenterY()), L = m.bendpoints.get(N);
                    L.x = g.x, L.y = g.y, D.getOwner().remove(D);
                  }
                  this.graphManager.add(m, m.source, m.target);
                }
              }
            }, d.transform = function(c, E, m, _) {
              if (m != null && _ != null) {
                var N = E;
                if (c <= 50) {
                  var D = E / m;
                  N -= (E - D) / 50 * (50 - c);
                } else {
                  var g = E * _;
                  N += (g - E) / 50 * (c - 50);
                }
                return N;
              } else {
                var L, n;
                return c <= 50 ? (L = 9 * E / 500, n = E / 10) : (L = 9 * E / 50, n = -8 * E), L * c + n;
              }
            }, d.findCenterOfTree = function(c) {
              var E = [];
              E = E.concat(c);
              var m = [], _ = /* @__PURE__ */ new Map(), N = false, D = null;
              (E.length == 1 || E.length == 2) && (N = true, D = E[0]);
              for (var g = 0; g < E.length; g++) {
                var L = E[g], n = L.getNeighborsList().size;
                _.set(L, L.getNeighborsList().size), n == 1 && m.push(L);
              }
              var u = [];
              for (u = u.concat(m); !N; ) {
                var l = [];
                l = l.concat(u), u = [];
                for (var g = 0; g < E.length; g++) {
                  var L = E[g], v = E.indexOf(L);
                  v >= 0 && E.splice(v, 1);
                  var A = L.getNeighborsList();
                  A.forEach(function(R) {
                    if (m.indexOf(R) < 0) {
                      var S2 = _.get(R), U = S2 - 1;
                      U == 1 && u.push(R), _.set(R, U);
                    }
                  });
                }
                m = m.concat(u), (E.length == 1 || E.length == 2) && (N = true, D = E[0]);
              }
              return D;
            }, d.prototype.setGraphManager = function(c) {
              this.graphManager = c;
            }, p.exports = d;
          },
          /* 16 */
          /***/
          function(p, T, f) {
            function i() {
            }
            i.seed = 1, i.x = 0, i.nextDouble = function() {
              return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
            }, p.exports = i;
          },
          /* 17 */
          /***/
          function(p, T, f) {
            var i = f(4);
            function t(e, r) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            t.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, t.prototype.setWorldOrgX = function(e) {
              this.lworldOrgX = e;
            }, t.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, t.prototype.setWorldOrgY = function(e) {
              this.lworldOrgY = e;
            }, t.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, t.prototype.setWorldExtX = function(e) {
              this.lworldExtX = e;
            }, t.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, t.prototype.setWorldExtY = function(e) {
              this.lworldExtY = e;
            }, t.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, t.prototype.setDeviceOrgX = function(e) {
              this.ldeviceOrgX = e;
            }, t.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, t.prototype.setDeviceOrgY = function(e) {
              this.ldeviceOrgY = e;
            }, t.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, t.prototype.setDeviceExtX = function(e) {
              this.ldeviceExtX = e;
            }, t.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, t.prototype.setDeviceExtY = function(e) {
              this.ldeviceExtY = e;
            }, t.prototype.transformX = function(e) {
              var r = 0, h = this.lworldExtX;
              return h != 0 && (r = this.ldeviceOrgX + (e - this.lworldOrgX) * this.ldeviceExtX / h), r;
            }, t.prototype.transformY = function(e) {
              var r = 0, h = this.lworldExtY;
              return h != 0 && (r = this.ldeviceOrgY + (e - this.lworldOrgY) * this.ldeviceExtY / h), r;
            }, t.prototype.inverseTransformX = function(e) {
              var r = 0, h = this.ldeviceExtX;
              return h != 0 && (r = this.lworldOrgX + (e - this.ldeviceOrgX) * this.lworldExtX / h), r;
            }, t.prototype.inverseTransformY = function(e) {
              var r = 0, h = this.ldeviceExtY;
              return h != 0 && (r = this.lworldOrgY + (e - this.ldeviceOrgY) * this.lworldExtY / h), r;
            }, t.prototype.inverseTransformPoint = function(e) {
              var r = new i(this.inverseTransformX(e.x), this.inverseTransformY(e.y));
              return r;
            }, p.exports = t;
          },
          /* 18 */
          /***/
          function(p, T, f) {
            function i(o) {
              if (Array.isArray(o)) {
                for (var d = 0, c = Array(o.length); d < o.length; d++)
                  c[d] = o[d];
                return c;
              } else
                return Array.from(o);
            }
            var t = f(15), e = f(7), r = f(0), h = f(8), a = f(9);
            function s() {
              t.call(this), this.useSmartIdealEdgeLengthCalculation = e.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = e.DEFAULT_EDGE_LENGTH, this.springConstant = e.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = e.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = e.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = e.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = e.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * e.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = e.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = e.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = e.MAX_ITERATIONS;
            }
            s.prototype = Object.create(t.prototype);
            for (var y in t)
              s[y] = t[y];
            s.prototype.initParameters = function() {
              t.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = e.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, s.prototype.calcIdealEdgeLengths = function() {
              for (var o, d, c, E, m, _, N = this.getGraphManager().getAllEdges(), D = 0; D < N.length; D++)
                o = N[D], o.idealLength = this.idealEdgeLength, o.isInterGraph && (c = o.getSource(), E = o.getTarget(), m = o.getSourceInLca().getEstimatedSize(), _ = o.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (o.idealLength += m + _ - 2 * r.SIMPLE_NODE_SIZE), d = o.getLca().getInclusionTreeDepth(), o.idealLength += e.DEFAULT_EDGE_LENGTH * e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + E.getInclusionTreeDepth() - 2 * d));
            }, s.prototype.initSpringEmbedder = function() {
              var o = this.getAllNodes().length;
              this.incremental ? (o > e.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * e.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (o - e.ADAPTATION_LOWER_NODE_LIMIT) / (e.ADAPTATION_UPPER_NODE_LIMIT - e.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - e.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = e.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (o > e.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(e.COOLING_ADAPTATION_FACTOR, 1 - (o - e.ADAPTATION_LOWER_NODE_LIMIT) / (e.ADAPTATION_UPPER_NODE_LIMIT - e.ADAPTATION_LOWER_NODE_LIMIT) * (1 - e.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = e.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, s.prototype.calcSpringForces = function() {
              for (var o = this.getAllEdges(), d, c = 0; c < o.length; c++)
                d = o[c], this.calcSpringForce(d, d.idealLength);
            }, s.prototype.calcRepulsionForces = function() {
              var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, c, E, m, _, N = this.getAllNodes(), D;
              if (this.useFRGridVariant)
                for (this.totalIterations % e.GRID_CALCULATION_CHECK_PERIOD == 1 && o && this.updateGrid(), D = /* @__PURE__ */ new Set(), c = 0; c < N.length; c++)
                  m = N[c], this.calculateRepulsionForceOfANode(m, D, o, d), D.add(m);
              else
                for (c = 0; c < N.length; c++)
                  for (m = N[c], E = c + 1; E < N.length; E++)
                    _ = N[E], m.getOwner() == _.getOwner() && this.calcRepulsionForce(m, _);
            }, s.prototype.calcGravitationalForces = function() {
              for (var o, d = this.getAllNodesToApplyGravitation(), c = 0; c < d.length; c++)
                o = d[c], this.calcGravitationalForce(o);
            }, s.prototype.moveNodes = function() {
              for (var o = this.getAllNodes(), d, c = 0; c < o.length; c++)
                d = o[c], d.move();
            }, s.prototype.calcSpringForce = function(o, d) {
              var c = o.getSource(), E = o.getTarget(), m, _, N, D;
              if (this.uniformLeafNodeSizes && c.getChild() == null && E.getChild() == null)
                o.updateLengthSimple();
              else if (o.updateLength(), o.isOverlapingSourceAndTarget)
                return;
              m = o.getLength(), m != 0 && (_ = this.springConstant * (m - d), N = _ * (o.lengthX / m), D = _ * (o.lengthY / m), c.springForceX += N, c.springForceY += D, E.springForceX -= N, E.springForceY -= D);
            }, s.prototype.calcRepulsionForce = function(o, d) {
              var c = o.getRect(), E = d.getRect(), m = new Array(2), _ = new Array(4), N, D, g, L, n, u, l;
              if (c.intersects(E)) {
                h.calcSeparationAmount(c, E, m, e.DEFAULT_EDGE_LENGTH / 2), u = 2 * m[0], l = 2 * m[1];
                var v = o.noOfChildren * d.noOfChildren / (o.noOfChildren + d.noOfChildren);
                o.repulsionForceX -= v * u, o.repulsionForceY -= v * l, d.repulsionForceX += v * u, d.repulsionForceY += v * l;
              } else
                this.uniformLeafNodeSizes && o.getChild() == null && d.getChild() == null ? (N = E.getCenterX() - c.getCenterX(), D = E.getCenterY() - c.getCenterY()) : (h.getIntersection(c, E, _), N = _[2] - _[0], D = _[3] - _[1]), Math.abs(N) < e.MIN_REPULSION_DIST && (N = a.sign(N) * e.MIN_REPULSION_DIST), Math.abs(D) < e.MIN_REPULSION_DIST && (D = a.sign(D) * e.MIN_REPULSION_DIST), g = N * N + D * D, L = Math.sqrt(g), n = this.repulsionConstant * o.noOfChildren * d.noOfChildren / g, u = n * N / L, l = n * D / L, o.repulsionForceX -= u, o.repulsionForceY -= l, d.repulsionForceX += u, d.repulsionForceY += l;
            }, s.prototype.calcGravitationalForce = function(o) {
              var d, c, E, m, _, N, D, g;
              d = o.getOwner(), c = (d.getRight() + d.getLeft()) / 2, E = (d.getTop() + d.getBottom()) / 2, m = o.getCenterX() - c, _ = o.getCenterY() - E, N = Math.abs(m) + o.getWidth() / 2, D = Math.abs(_) + o.getHeight() / 2, o.getOwner() == this.graphManager.getRoot() ? (g = d.getEstimatedSize() * this.gravityRangeFactor, (N > g || D > g) && (o.gravitationForceX = -this.gravityConstant * m, o.gravitationForceY = -this.gravityConstant * _)) : (g = d.getEstimatedSize() * this.compoundGravityRangeFactor, (N > g || D > g) && (o.gravitationForceX = -this.gravityConstant * m * this.compoundGravityConstant, o.gravitationForceY = -this.gravityConstant * _ * this.compoundGravityConstant));
            }, s.prototype.isConverged = function() {
              var o, d = false;
              return this.totalIterations > this.maxIterations / 3 && (d = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), o = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, o || d;
            }, s.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, s.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var o, d = this.graphManager.getAllNodes(), c = 0; c < d.length; c++)
                o = d[c], o.noOfChildren = o.getNoOfChildren();
            }, s.prototype.calcGrid = function(o) {
              var d = 0, c = 0;
              d = parseInt(Math.ceil((o.getRight() - o.getLeft()) / this.repulsionRange)), c = parseInt(Math.ceil((o.getBottom() - o.getTop()) / this.repulsionRange));
              for (var E = new Array(d), m = 0; m < d; m++)
                E[m] = new Array(c);
              for (var m = 0; m < d; m++)
                for (var _ = 0; _ < c; _++)
                  E[m][_] = new Array();
              return E;
            }, s.prototype.addNodeToGrid = function(o, d, c) {
              var E = 0, m = 0, _ = 0, N = 0;
              E = parseInt(Math.floor((o.getRect().x - d) / this.repulsionRange)), m = parseInt(Math.floor((o.getRect().width + o.getRect().x - d) / this.repulsionRange)), _ = parseInt(Math.floor((o.getRect().y - c) / this.repulsionRange)), N = parseInt(Math.floor((o.getRect().height + o.getRect().y - c) / this.repulsionRange));
              for (var D = E; D <= m; D++)
                for (var g = _; g <= N; g++)
                  this.grid[D][g].push(o), o.setGridCoordinates(E, m, _, N);
            }, s.prototype.updateGrid = function() {
              var o, d, c = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), o = 0; o < c.length; o++)
                d = c[o], this.addNodeToGrid(d, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, s.prototype.calculateRepulsionForceOfANode = function(o, d, c, E) {
              if (this.totalIterations % e.GRID_CALCULATION_CHECK_PERIOD == 1 && c || E) {
                var m = /* @__PURE__ */ new Set();
                o.surrounding = new Array();
                for (var _, N = this.grid, D = o.startX - 1; D < o.finishX + 2; D++)
                  for (var g = o.startY - 1; g < o.finishY + 2; g++)
                    if (!(D < 0 || g < 0 || D >= N.length || g >= N[0].length)) {
                      for (var L = 0; L < N[D][g].length; L++)
                        if (_ = N[D][g][L], !(o.getOwner() != _.getOwner() || o == _) && !d.has(_) && !m.has(_)) {
                          var n = Math.abs(o.getCenterX() - _.getCenterX()) - (o.getWidth() / 2 + _.getWidth() / 2), u = Math.abs(o.getCenterY() - _.getCenterY()) - (o.getHeight() / 2 + _.getHeight() / 2);
                          n <= this.repulsionRange && u <= this.repulsionRange && m.add(_);
                        }
                    }
                o.surrounding = [].concat(i(m));
              }
              for (D = 0; D < o.surrounding.length; D++)
                this.calcRepulsionForce(o, o.surrounding[D]);
            }, s.prototype.calcRepulsionRange = function() {
              return 0;
            }, p.exports = s;
          },
          /* 19 */
          /***/
          function(p, T, f) {
            var i = f(1), t = f(7);
            function e(h, a, s) {
              i.call(this, h, a, s), this.idealLength = t.DEFAULT_EDGE_LENGTH;
            }
            e.prototype = Object.create(i.prototype);
            for (var r in i)
              e[r] = i[r];
            p.exports = e;
          },
          /* 20 */
          /***/
          function(p, T, f) {
            var i = f(3);
            function t(r, h, a, s) {
              i.call(this, r, h, a, s), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            t.prototype = Object.create(i.prototype);
            for (var e in i)
              t[e] = i[e];
            t.prototype.setGridCoordinates = function(r, h, a, s) {
              this.startX = r, this.finishX = h, this.startY = a, this.finishY = s;
            }, p.exports = t;
          },
          /* 21 */
          /***/
          function(p, T, f) {
            function i(t, e) {
              this.width = 0, this.height = 0, t !== null && e !== null && (this.height = e, this.width = t);
            }
            i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(t) {
              this.width = t;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(t) {
              this.height = t;
            }, p.exports = i;
          },
          /* 22 */
          /***/
          function(p, T, f) {
            var i = f(14);
            function t() {
              this.map = {}, this.keys = [];
            }
            t.prototype.put = function(e, r) {
              var h = i.createID(e);
              this.contains(h) || (this.map[h] = r, this.keys.push(e));
            }, t.prototype.contains = function(e) {
              return i.createID(e), this.map[e] != null;
            }, t.prototype.get = function(e) {
              var r = i.createID(e);
              return this.map[r];
            }, t.prototype.keySet = function() {
              return this.keys;
            }, p.exports = t;
          },
          /* 23 */
          /***/
          function(p, T, f) {
            var i = f(14);
            function t() {
              this.set = {};
            }
            t.prototype.add = function(e) {
              var r = i.createID(e);
              this.contains(r) || (this.set[r] = e);
            }, t.prototype.remove = function(e) {
              delete this.set[i.createID(e)];
            }, t.prototype.clear = function() {
              this.set = {};
            }, t.prototype.contains = function(e) {
              return this.set[i.createID(e)] == e;
            }, t.prototype.isEmpty = function() {
              return this.size() === 0;
            }, t.prototype.size = function() {
              return Object.keys(this.set).length;
            }, t.prototype.addAllTo = function(e) {
              for (var r = Object.keys(this.set), h = r.length, a = 0; a < h; a++)
                e.push(this.set[r[a]]);
            }, t.prototype.size = function() {
              return Object.keys(this.set).length;
            }, t.prototype.addAll = function(e) {
              for (var r = e.length, h = 0; h < r; h++) {
                var a = e[h];
                this.add(a);
              }
            }, p.exports = t;
          },
          /* 24 */
          /***/
          function(p, T, f) {
            var i = /* @__PURE__ */ function() {
              function h(a, s) {
                for (var y = 0; y < s.length; y++) {
                  var o = s[y];
                  o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(a, o.key, o);
                }
              }
              return function(a, s, y) {
                return s && h(a.prototype, s), y && h(a, y), a;
              };
            }();
            function t(h, a) {
              if (!(h instanceof a))
                throw new TypeError("Cannot call a class as a function");
            }
            var e = f(11), r = function() {
              function h(a, s) {
                t(this, h), (s !== null || s !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var y = void 0;
                a instanceof e ? y = a.size() : y = a.length, this._quicksort(a, 0, y - 1);
              }
              return i(h, [{
                key: "_quicksort",
                value: function(a, s, y) {
                  if (s < y) {
                    var o = this._partition(a, s, y);
                    this._quicksort(a, s, o), this._quicksort(a, o + 1, y);
                  }
                }
              }, {
                key: "_partition",
                value: function(a, s, y) {
                  for (var o = this._get(a, s), d = s, c = y; ; ) {
                    for (; this.compareFunction(o, this._get(a, c)); )
                      c--;
                    for (; this.compareFunction(this._get(a, d), o); )
                      d++;
                    if (d < c)
                      this._swap(a, d, c), d++, c--;
                    else return c;
                  }
                }
              }, {
                key: "_get",
                value: function(a, s) {
                  return a instanceof e ? a.get_object_at(s) : a[s];
                }
              }, {
                key: "_set",
                value: function(a, s, y) {
                  a instanceof e ? a.set_object_at(s, y) : a[s] = y;
                }
              }, {
                key: "_swap",
                value: function(a, s, y) {
                  var o = this._get(a, s);
                  this._set(a, s, this._get(a, y)), this._set(a, y, o);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(a, s) {
                  return s > a;
                }
              }]), h;
            }();
            p.exports = r;
          },
          /* 25 */
          /***/
          function(p, T, f) {
            var i = /* @__PURE__ */ function() {
              function r(h, a) {
                for (var s = 0; s < a.length; s++) {
                  var y = a[s];
                  y.enumerable = y.enumerable || false, y.configurable = true, "value" in y && (y.writable = true), Object.defineProperty(h, y.key, y);
                }
              }
              return function(h, a, s) {
                return a && r(h.prototype, a), s && r(h, s), h;
              };
            }();
            function t(r, h) {
              if (!(r instanceof h))
                throw new TypeError("Cannot call a class as a function");
            }
            var e = function() {
              function r(h, a) {
                var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                t(this, r), this.sequence1 = h, this.sequence2 = a, this.match_score = s, this.mismatch_penalty = y, this.gap_penalty = o, this.iMax = h.length + 1, this.jMax = a.length + 1, this.grid = new Array(this.iMax);
                for (var d = 0; d < this.iMax; d++) {
                  this.grid[d] = new Array(this.jMax);
                  for (var c = 0; c < this.jMax; c++)
                    this.grid[d][c] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var E = 0; E < this.iMax; E++) {
                  this.tracebackGrid[E] = new Array(this.jMax);
                  for (var m = 0; m < this.jMax; m++)
                    this.tracebackGrid[E][m] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return i(r, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var h = 1; h < this.jMax; h++)
                    this.grid[0][h] = this.grid[0][h - 1] + this.gap_penalty, this.tracebackGrid[0][h] = [false, false, true];
                  for (var a = 1; a < this.iMax; a++)
                    this.grid[a][0] = this.grid[a - 1][0] + this.gap_penalty, this.tracebackGrid[a][0] = [false, true, false];
                  for (var s = 1; s < this.iMax; s++)
                    for (var y = 1; y < this.jMax; y++) {
                      var o = void 0;
                      this.sequence1[s - 1] === this.sequence2[y - 1] ? o = this.grid[s - 1][y - 1] + this.match_score : o = this.grid[s - 1][y - 1] + this.mismatch_penalty;
                      var d = this.grid[s - 1][y] + this.gap_penalty, c = this.grid[s][y - 1] + this.gap_penalty, E = [o, d, c], m = this.arrayAllMaxIndexes(E);
                      this.grid[s][y] = E[m[0]], this.tracebackGrid[s][y] = [m.includes(0), m.includes(1), m.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var h = [];
                  for (h.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); h[0]; ) {
                    var a = h[0], s = this.tracebackGrid[a.pos[0]][a.pos[1]];
                    s[0] && h.push({
                      pos: [a.pos[0] - 1, a.pos[1] - 1],
                      seq1: this.sequence1[a.pos[0] - 1] + a.seq1,
                      seq2: this.sequence2[a.pos[1] - 1] + a.seq2
                    }), s[1] && h.push({
                      pos: [a.pos[0] - 1, a.pos[1]],
                      seq1: this.sequence1[a.pos[0] - 1] + a.seq1,
                      seq2: "-" + a.seq2
                    }), s[2] && h.push({
                      pos: [a.pos[0], a.pos[1] - 1],
                      seq1: "-" + a.seq1,
                      seq2: this.sequence2[a.pos[1] - 1] + a.seq2
                    }), a.pos[0] === 0 && a.pos[1] === 0 && this.alignments.push({
                      sequence1: a.seq1,
                      sequence2: a.seq2
                    }), h.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(h, a) {
                  for (var s = [], y = -1; (y = h.indexOf(a, y + 1)) !== -1; )
                    s.push(y);
                  return s;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(h) {
                  return this.getAllIndexes(h, Math.max.apply(null, h));
                }
              }]), r;
            }();
            p.exports = e;
          },
          /* 26 */
          /***/
          function(p, T, f) {
            var i = function() {
            };
            i.FDLayout = f(18), i.FDLayoutConstants = f(7), i.FDLayoutEdge = f(19), i.FDLayoutNode = f(20), i.DimensionD = f(21), i.HashMap = f(22), i.HashSet = f(23), i.IGeometry = f(8), i.IMath = f(9), i.Integer = f(10), i.Point = f(12), i.PointD = f(4), i.RandomSeed = f(16), i.RectangleD = f(13), i.Transform = f(17), i.UniqueIDGeneretor = f(14), i.Quicksort = f(24), i.LinkedList = f(11), i.LGraphObject = f(2), i.LGraph = f(5), i.LEdge = f(1), i.LGraphManager = f(6), i.LNode = f(3), i.Layout = f(15), i.LayoutConstants = f(0), i.NeedlemanWunsch = f(25), p.exports = i;
          },
          /* 27 */
          /***/
          function(p, T, f) {
            function i() {
              this.listeners = [];
            }
            var t = i.prototype;
            t.addListener = function(e, r) {
              this.listeners.push({
                event: e,
                callback: r
              });
            }, t.removeListener = function(e, r) {
              for (var h = this.listeners.length; h >= 0; h--) {
                var a = this.listeners[h];
                a.event === e && a.callback === r && this.listeners.splice(h, 1);
              }
            }, t.emit = function(e, r) {
              for (var h = 0; h < this.listeners.length; h++) {
                var a = this.listeners[h];
                e === a.event && a.callback(r);
              }
            }, p.exports = i;
          }
          /******/
        ])
      );
    });
  }(nt)), nt.exports;
}
var wt = rt.exports;
var ct;
function Rt() {
  return ct || (ct = 1, function(O, M) {
    (function(p, T) {
      O.exports = T(It());
    })(wt, function(p) {
      return (
        /******/
        function(T) {
          var f = {};
          function i(t) {
            if (f[t])
              return f[t].exports;
            var e = f[t] = {
              /******/
              i: t,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return T[t].call(e.exports, e, e.exports, i), e.l = true, e.exports;
          }
          return i.m = T, i.c = f, i.i = function(t) {
            return t;
          }, i.d = function(t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: r
              /******/
            });
          }, i.n = function(t) {
            var e = t && t.__esModule ? (
              /******/
              function() {
                return t.default;
              }
            ) : (
              /******/
              function() {
                return t;
              }
            );
            return i.d(e, "a", e), e;
          }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, i.p = "", i(i.s = 7);
        }([
          /* 0 */
          /***/
          function(T, f) {
            T.exports = p;
          },
          /* 1 */
          /***/
          function(T, f, i) {
            var t = i(0).FDLayoutConstants;
            function e() {
            }
            for (var r in t)
              e[r] = t[r];
            e.DEFAULT_USE_MULTI_LEVEL_SCALING = false, e.DEFAULT_RADIAL_SEPARATION = t.DEFAULT_EDGE_LENGTH, e.DEFAULT_COMPONENT_SEPERATION = 60, e.TILE = true, e.TILING_PADDING_VERTICAL = 10, e.TILING_PADDING_HORIZONTAL = 10, e.TREE_REDUCTION_ON_INCREMENTAL = false, T.exports = e;
          },
          /* 2 */
          /***/
          function(T, f, i) {
            var t = i(0).FDLayoutEdge;
            function e(h, a, s) {
              t.call(this, h, a, s);
            }
            e.prototype = Object.create(t.prototype);
            for (var r in t)
              e[r] = t[r];
            T.exports = e;
          },
          /* 3 */
          /***/
          function(T, f, i) {
            var t = i(0).LGraph;
            function e(h, a, s) {
              t.call(this, h, a, s);
            }
            e.prototype = Object.create(t.prototype);
            for (var r in t)
              e[r] = t[r];
            T.exports = e;
          },
          /* 4 */
          /***/
          function(T, f, i) {
            var t = i(0).LGraphManager;
            function e(h) {
              t.call(this, h);
            }
            e.prototype = Object.create(t.prototype);
            for (var r in t)
              e[r] = t[r];
            T.exports = e;
          },
          /* 5 */
          /***/
          function(T, f, i) {
            var t = i(0).FDLayoutNode, e = i(0).IMath;
            function r(a, s, y, o) {
              t.call(this, a, s, y, o);
            }
            r.prototype = Object.create(t.prototype);
            for (var h in t)
              r[h] = t[h];
            r.prototype.move = function() {
              var a = this.graphManager.getLayout();
              this.displacementX = a.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = a.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementX = a.coolingFactor * a.maxNodeDisplacement * e.sign(this.displacementX)), Math.abs(this.displacementY) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementY = a.coolingFactor * a.maxNodeDisplacement * e.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), a.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, r.prototype.propogateDisplacementToChildren = function(a, s) {
              for (var y = this.getChild().getNodes(), o, d = 0; d < y.length; d++)
                o = y[d], o.getChild() == null ? (o.moveBy(a, s), o.displacementX += a, o.displacementY += s) : o.propogateDisplacementToChildren(a, s);
            }, r.prototype.setPred1 = function(a) {
              this.pred1 = a;
            }, r.prototype.getPred1 = function() {
              return pred1;
            }, r.prototype.getPred2 = function() {
              return pred2;
            }, r.prototype.setNext = function(a) {
              this.next = a;
            }, r.prototype.getNext = function() {
              return next;
            }, r.prototype.setProcessed = function(a) {
              this.processed = a;
            }, r.prototype.isProcessed = function() {
              return processed;
            }, T.exports = r;
          },
          /* 6 */
          /***/
          function(T, f, i) {
            var t = i(0).FDLayout, e = i(4), r = i(3), h = i(5), a = i(2), s = i(1), y = i(0).FDLayoutConstants, o = i(0).LayoutConstants, d = i(0).Point, c = i(0).PointD, E = i(0).Layout, m = i(0).Integer, _ = i(0).IGeometry, N = i(0).LGraph, D = i(0).Transform;
            function g() {
              t.call(this), this.toBeTiled = {};
            }
            g.prototype = Object.create(t.prototype);
            for (var L in t)
              g[L] = t[L];
            g.prototype.newGraphManager = function() {
              var n = new e(this);
              return this.graphManager = n, n;
            }, g.prototype.newGraph = function(n) {
              return new r(null, this.graphManager, n);
            }, g.prototype.newNode = function(n) {
              return new h(this.graphManager, n);
            }, g.prototype.newEdge = function(n) {
              return new a(null, null, n);
            }, g.prototype.initParameters = function() {
              t.prototype.initParameters.call(this, arguments), this.isSubLayout || (s.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = y.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = y.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = y.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = y.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = y.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = y.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / y.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = y.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, g.prototype.layout = function() {
              var n = o.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, g.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (s.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var n = new Set(this.getAllNodes()), u = this.nodesWithGravity.filter(function(v) {
                    return n.has(v);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(u);
                }
              } else {
                var l = this.getFlatForest();
                if (l.length > 0)
                  this.positionNodesRadially(l);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var n = new Set(this.getAllNodes()), u = this.nodesWithGravity.filter(function(I) {
                    return n.has(I);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(u), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), true;
            }, g.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = true;
                else
                  return true;
              if (this.totalIterations % y.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = true;
                  else
                    return true;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var n = new Set(this.getAllNodes()), u = this.nodesWithGravity.filter(function(A) {
                      return n.has(A);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(u), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = y.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = false, this.isGrowthFinished = true;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return true;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = y.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var l = !this.isTreeGrowing && !this.isGrowthFinished, v = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(l, v), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
            }, g.prototype.getPositionsData = function() {
              for (var n = this.graphManager.getAllNodes(), u = {}, l = 0; l < n.length; l++) {
                var v = n[l].rect, A = n[l].id;
                u[A] = {
                  id: A,
                  x: v.getCenterX(),
                  y: v.getCenterY(),
                  w: v.width,
                  h: v.height
                };
              }
              return u;
            }, g.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var n = false;
              if (y.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !n; )
                  n = this.tick();
                this.graphManager.updateBounds();
              }
            }, g.prototype.calculateNodesToApplyGravitationTo = function() {
              var n = [], u, l = this.graphManager.getGraphs(), v = l.length, A;
              for (A = 0; A < v; A++)
                u = l[A], u.updateConnected(), u.isConnected || (n = n.concat(u.getNodes()));
              return n;
            }, g.prototype.createBendpoints = function() {
              var n = [];
              n = n.concat(this.graphManager.getAllEdges());
              var u = /* @__PURE__ */ new Set(), l;
              for (l = 0; l < n.length; l++) {
                var v = n[l];
                if (!u.has(v)) {
                  var A = v.getSource(), I = v.getTarget();
                  if (A == I)
                    v.getBendpoints().push(new c()), v.getBendpoints().push(new c()), this.createDummyNodesForBendpoints(v), u.add(v);
                  else {
                    var w = [];
                    if (w = w.concat(A.getEdgeListToNode(I)), w = w.concat(I.getEdgeListToNode(A)), !u.has(w[0])) {
                      if (w.length > 1) {
                        var R;
                        for (R = 0; R < w.length; R++) {
                          var S2 = w[R];
                          S2.getBendpoints().push(new c()), this.createDummyNodesForBendpoints(S2);
                        }
                      }
                      w.forEach(function(U) {
                        u.add(U);
                      });
                    }
                  }
                }
                if (u.size == n.length)
                  break;
              }
            }, g.prototype.positionNodesRadially = function(n) {
              for (var u = new d(0, 0), l = Math.ceil(Math.sqrt(n.length)), v = 0, A = 0, I = 0, w = new c(0, 0), R = 0; R < n.length; R++) {
                R % l == 0 && (I = 0, A = v, R != 0 && (A += s.DEFAULT_COMPONENT_SEPERATION), v = 0);
                var S2 = n[R], U = E.findCenterOfTree(S2);
                u.x = I, u.y = A, w = g.radialLayout(S2, U, u), w.y > v && (v = Math.floor(w.y)), I = Math.floor(w.x + s.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new c(o.WORLD_CENTER_X - w.x / 2, o.WORLD_CENTER_Y - w.y / 2));
            }, g.radialLayout = function(n, u, l) {
              var v = Math.max(this.maxDiagonalInTree(n), s.DEFAULT_RADIAL_SEPARATION);
              g.branchRadialLayout(u, null, 0, 359, 0, v);
              var A = N.calculateBounds(n), I = new D();
              I.setDeviceOrgX(A.getMinX()), I.setDeviceOrgY(A.getMinY()), I.setWorldOrgX(l.x), I.setWorldOrgY(l.y);
              for (var w = 0; w < n.length; w++) {
                var R = n[w];
                R.transform(I);
              }
              var S2 = new c(A.getMaxX(), A.getMaxY());
              return I.inverseTransformPoint(S2);
            }, g.branchRadialLayout = function(n, u, l, v, A, I) {
              var w = (v - l + 1) / 2;
              w < 0 && (w += 180);
              var R = (w + l) % 360, S2 = R * _.TWO_PI / 360, U = A * Math.cos(S2), G = A * Math.sin(S2);
              n.setCenter(U, G);
              var C = [];
              C = C.concat(n.getEdges());
              var x = C.length;
              u != null && x--;
              for (var F = 0, k = C.length, Y, X = n.getEdgesBetween(u); X.length > 1; ) {
                var P = X[0];
                X.splice(0, 1);
                var B = C.indexOf(P);
                B >= 0 && C.splice(B, 1), k--, x--;
              }
              u != null ? Y = (C.indexOf(X[0]) + 1) % k : Y = 0;
              for (var $ = Math.abs(v - l) / x, H = Y; F != x; H = ++H % k) {
                var V = C[H].getOtherEnd(n);
                if (V != u) {
                  var z = (l + F * $) % 360, j = (z + $) % 360;
                  g.branchRadialLayout(V, n, z, j, A + I, I), F++;
                }
              }
            }, g.maxDiagonalInTree = function(n) {
              for (var u = m.MIN_VALUE, l = 0; l < n.length; l++) {
                var v = n[l], A = v.getDiagonal();
                A > u && (u = A);
              }
              return u;
            }, g.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, g.prototype.groupZeroDegreeMembers = function() {
              var n = this, u = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var l = [], v = this.graphManager.getAllNodes(), A = 0; A < v.length; A++) {
                var I = v[A], w = I.getParent();
                this.getNodeDegreeWithChildren(I) === 0 && (w.id == null || !this.getToBeTiled(w)) && l.push(I);
              }
              for (var A = 0; A < l.length; A++) {
                var I = l[A], R = I.getParent().id;
                typeof u[R] > "u" && (u[R] = []), u[R] = u[R].concat(I);
              }
              Object.keys(u).forEach(function(S2) {
                if (u[S2].length > 1) {
                  var U = "DummyCompound_" + S2;
                  n.memberGroups[U] = u[S2];
                  var G = u[S2][0].getParent(), C = new h(n.graphManager);
                  C.id = U, C.paddingLeft = G.paddingLeft || 0, C.paddingRight = G.paddingRight || 0, C.paddingBottom = G.paddingBottom || 0, C.paddingTop = G.paddingTop || 0, n.idToDummyNode[U] = C;
                  var x = n.getGraphManager().add(n.newGraph(), C), F = G.getChild();
                  F.add(C);
                  for (var k = 0; k < u[S2].length; k++) {
                    var Y = u[S2][k];
                    F.remove(Y), x.add(Y);
                  }
                }
              });
            }, g.prototype.clearCompounds = function() {
              var n = {}, u = {};
              this.performDFSOnCompounds();
              for (var l = 0; l < this.compoundOrder.length; l++)
                u[this.compoundOrder[l].id] = this.compoundOrder[l], n[this.compoundOrder[l].id] = [].concat(this.compoundOrder[l].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[l].getChild()), this.compoundOrder[l].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(n, u);
            }, g.prototype.clearZeroDegreeMembers = function() {
              var n = this, u = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(l) {
                var v = n.idToDummyNode[l];
                u[l] = n.tileNodes(n.memberGroups[l], v.paddingLeft + v.paddingRight), v.rect.width = u[l].width, v.rect.height = u[l].height;
              });
            }, g.prototype.repopulateCompounds = function() {
              for (var n = this.compoundOrder.length - 1; n >= 0; n--) {
                var u = this.compoundOrder[n], l = u.id, v = u.paddingLeft, A = u.paddingTop;
                this.adjustLocations(this.tiledMemberPack[l], u.rect.x, u.rect.y, v, A);
              }
            }, g.prototype.repopulateZeroDegreeMembers = function() {
              var n = this, u = this.tiledZeroDegreePack;
              Object.keys(u).forEach(function(l) {
                var v = n.idToDummyNode[l], A = v.paddingLeft, I = v.paddingTop;
                n.adjustLocations(u[l], v.rect.x, v.rect.y, A, I);
              });
            }, g.prototype.getToBeTiled = function(n) {
              var u = n.id;
              if (this.toBeTiled[u] != null)
                return this.toBeTiled[u];
              var l = n.getChild();
              if (l == null)
                return this.toBeTiled[u] = false, false;
              for (var v = l.getNodes(), A = 0; A < v.length; A++) {
                var I = v[A];
                if (this.getNodeDegree(I) > 0)
                  return this.toBeTiled[u] = false, false;
                if (I.getChild() == null) {
                  this.toBeTiled[I.id] = false;
                  continue;
                }
                if (!this.getToBeTiled(I))
                  return this.toBeTiled[u] = false, false;
              }
              return this.toBeTiled[u] = true, true;
            }, g.prototype.getNodeDegree = function(n) {
              n.id;
              for (var u = n.getEdges(), l = 0, v = 0; v < u.length; v++) {
                var A = u[v];
                A.getSource().id !== A.getTarget().id && (l = l + 1);
              }
              return l;
            }, g.prototype.getNodeDegreeWithChildren = function(n) {
              var u = this.getNodeDegree(n);
              if (n.getChild() == null)
                return u;
              for (var l = n.getChild().getNodes(), v = 0; v < l.length; v++) {
                var A = l[v];
                u += this.getNodeDegreeWithChildren(A);
              }
              return u;
            }, g.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, g.prototype.fillCompexOrderByDFS = function(n) {
              for (var u = 0; u < n.length; u++) {
                var l = n[u];
                l.getChild() != null && this.fillCompexOrderByDFS(l.getChild().getNodes()), this.getToBeTiled(l) && this.compoundOrder.push(l);
              }
            }, g.prototype.adjustLocations = function(n, u, l, v, A) {
              u += v, l += A;
              for (var I = u, w = 0; w < n.rows.length; w++) {
                var R = n.rows[w];
                u = I;
                for (var S2 = 0, U = 0; U < R.length; U++) {
                  var G = R[U];
                  G.rect.x = u, G.rect.y = l, u += G.rect.width + n.horizontalPadding, G.rect.height > S2 && (S2 = G.rect.height);
                }
                l += S2 + n.verticalPadding;
              }
            }, g.prototype.tileCompoundMembers = function(n, u) {
              var l = this;
              this.tiledMemberPack = [], Object.keys(n).forEach(function(v) {
                var A = u[v];
                l.tiledMemberPack[v] = l.tileNodes(n[v], A.paddingLeft + A.paddingRight), A.rect.width = l.tiledMemberPack[v].width, A.rect.height = l.tiledMemberPack[v].height;
              });
            }, g.prototype.tileNodes = function(n, u) {
              var l = s.TILING_PADDING_VERTICAL, v = s.TILING_PADDING_HORIZONTAL, A = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: u,
                // assume minHeight equals to minWidth
                verticalPadding: l,
                horizontalPadding: v
              };
              n.sort(function(R, S2) {
                return R.rect.width * R.rect.height > S2.rect.width * S2.rect.height ? -1 : R.rect.width * R.rect.height < S2.rect.width * S2.rect.height ? 1 : 0;
              });
              for (var I = 0; I < n.length; I++) {
                var w = n[I];
                A.rows.length == 0 ? this.insertNodeToRow(A, w, 0, u) : this.canAddHorizontal(A, w.rect.width, w.rect.height) ? this.insertNodeToRow(A, w, this.getShortestRowIndex(A), u) : this.insertNodeToRow(A, w, A.rows.length, u), this.shiftToLastRow(A);
              }
              return A;
            }, g.prototype.insertNodeToRow = function(n, u, l, v) {
              var A = v;
              if (l == n.rows.length) {
                var I = [];
                n.rows.push(I), n.rowWidth.push(A), n.rowHeight.push(0);
              }
              var w = n.rowWidth[l] + u.rect.width;
              n.rows[l].length > 0 && (w += n.horizontalPadding), n.rowWidth[l] = w, n.width < w && (n.width = w);
              var R = u.rect.height;
              l > 0 && (R += n.verticalPadding);
              var S2 = 0;
              R > n.rowHeight[l] && (S2 = n.rowHeight[l], n.rowHeight[l] = R, S2 = n.rowHeight[l] - S2), n.height += S2, n.rows[l].push(u);
            }, g.prototype.getShortestRowIndex = function(n) {
              for (var u = -1, l = Number.MAX_VALUE, v = 0; v < n.rows.length; v++)
                n.rowWidth[v] < l && (u = v, l = n.rowWidth[v]);
              return u;
            }, g.prototype.getLongestRowIndex = function(n) {
              for (var u = -1, l = Number.MIN_VALUE, v = 0; v < n.rows.length; v++)
                n.rowWidth[v] > l && (u = v, l = n.rowWidth[v]);
              return u;
            }, g.prototype.canAddHorizontal = function(n, u, l) {
              var v = this.getShortestRowIndex(n);
              if (v < 0)
                return true;
              var A = n.rowWidth[v];
              if (A + n.horizontalPadding + u <= n.width) return true;
              var I = 0;
              n.rowHeight[v] < l && v > 0 && (I = l + n.verticalPadding - n.rowHeight[v]);
              var w;
              n.width - A >= u + n.horizontalPadding ? w = (n.height + I) / (A + u + n.horizontalPadding) : w = (n.height + I) / n.width, I = l + n.verticalPadding;
              var R;
              return n.width < u ? R = (n.height + I) / u : R = (n.height + I) / n.width, R < 1 && (R = 1 / R), w < 1 && (w = 1 / w), w < R;
            }, g.prototype.shiftToLastRow = function(n) {
              var u = this.getLongestRowIndex(n), l = n.rowWidth.length - 1, v = n.rows[u], A = v[v.length - 1], I = A.width + n.horizontalPadding;
              if (n.width - n.rowWidth[l] > I && u != l) {
                v.splice(-1, 1), n.rows[l].push(A), n.rowWidth[u] = n.rowWidth[u] - I, n.rowWidth[l] = n.rowWidth[l] + I, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                for (var w = Number.MIN_VALUE, R = 0; R < v.length; R++)
                  v[R].height > w && (w = v[R].height);
                u > 0 && (w += n.verticalPadding);
                var S2 = n.rowHeight[u] + n.rowHeight[l];
                n.rowHeight[u] = w, n.rowHeight[l] < A.height + n.verticalPadding && (n.rowHeight[l] = A.height + n.verticalPadding);
                var U = n.rowHeight[u] + n.rowHeight[l];
                n.height += U - S2, this.shiftToLastRow(n);
              }
            }, g.prototype.tilingPreLayout = function() {
              s.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, g.prototype.tilingPostLayout = function() {
              s.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, g.prototype.reduceTrees = function() {
              for (var n = [], u = true, l; u; ) {
                var v = this.graphManager.getAllNodes(), A = [];
                u = false;
                for (var I = 0; I < v.length; I++)
                  l = v[I], l.getEdges().length == 1 && !l.getEdges()[0].isInterGraph && l.getChild() == null && (A.push([l, l.getEdges()[0], l.getOwner()]), u = true);
                if (u == true) {
                  for (var w = [], R = 0; R < A.length; R++)
                    A[R][0].getEdges().length == 1 && (w.push(A[R]), A[R][0].getOwner().remove(A[R][0]));
                  n.push(w), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = n;
            }, g.prototype.growTree = function(n) {
              for (var u = n.length, l = n[u - 1], v, A = 0; A < l.length; A++)
                v = l[A], this.findPlaceforPrunedNode(v), v[2].add(v[0]), v[2].add(v[1], v[1].source, v[1].target);
              n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, g.prototype.findPlaceforPrunedNode = function(n) {
              var u, l, v = n[0];
              v == n[1].source ? l = n[1].target : l = n[1].source;
              var A = l.startX, I = l.finishX, w = l.startY, R = l.finishY, S2 = 0, U = 0, G = 0, C = 0, x = [S2, G, U, C];
              if (w > 0)
                for (var F = A; F <= I; F++)
                  x[0] += this.grid[F][w - 1].length + this.grid[F][w].length - 1;
              if (I < this.grid.length - 1)
                for (var F = w; F <= R; F++)
                  x[1] += this.grid[I + 1][F].length + this.grid[I][F].length - 1;
              if (R < this.grid[0].length - 1)
                for (var F = A; F <= I; F++)
                  x[2] += this.grid[F][R + 1].length + this.grid[F][R].length - 1;
              if (A > 0)
                for (var F = w; F <= R; F++)
                  x[3] += this.grid[A - 1][F].length + this.grid[A][F].length - 1;
              for (var k = m.MAX_VALUE, Y, X, P = 0; P < x.length; P++)
                x[P] < k ? (k = x[P], Y = 1, X = P) : x[P] == k && Y++;
              if (Y == 3 && k == 0)
                x[0] == 0 && x[1] == 0 && x[2] == 0 ? u = 1 : x[0] == 0 && x[1] == 0 && x[3] == 0 ? u = 0 : x[0] == 0 && x[2] == 0 && x[3] == 0 ? u = 3 : x[1] == 0 && x[2] == 0 && x[3] == 0 && (u = 2);
              else if (Y == 2 && k == 0) {
                var B = Math.floor(Math.random() * 2);
                x[0] == 0 && x[1] == 0 ? B == 0 ? u = 0 : u = 1 : x[0] == 0 && x[2] == 0 ? B == 0 ? u = 0 : u = 2 : x[0] == 0 && x[3] == 0 ? B == 0 ? u = 0 : u = 3 : x[1] == 0 && x[2] == 0 ? B == 0 ? u = 1 : u = 2 : x[1] == 0 && x[3] == 0 ? B == 0 ? u = 1 : u = 3 : B == 0 ? u = 2 : u = 3;
              } else if (Y == 4 && k == 0) {
                var B = Math.floor(Math.random() * 4);
                u = B;
              } else
                u = X;
              u == 0 ? v.setCenter(l.getCenterX(), l.getCenterY() - l.getHeight() / 2 - y.DEFAULT_EDGE_LENGTH - v.getHeight() / 2) : u == 1 ? v.setCenter(l.getCenterX() + l.getWidth() / 2 + y.DEFAULT_EDGE_LENGTH + v.getWidth() / 2, l.getCenterY()) : u == 2 ? v.setCenter(l.getCenterX(), l.getCenterY() + l.getHeight() / 2 + y.DEFAULT_EDGE_LENGTH + v.getHeight() / 2) : v.setCenter(l.getCenterX() - l.getWidth() / 2 - y.DEFAULT_EDGE_LENGTH - v.getWidth() / 2, l.getCenterY());
            }, T.exports = g;
          },
          /* 7 */
          /***/
          function(T, f, i) {
            var t = {};
            t.layoutBase = i(0), t.CoSEConstants = i(1), t.CoSEEdge = i(2), t.CoSEGraph = i(3), t.CoSEGraphManager = i(4), t.CoSELayout = i(6), t.CoSENode = i(5), T.exports = t;
          }
          /******/
        ])
      );
    });
  }(rt)), rt.exports;
}
var Mt = it.exports;
var gt;
function Ct() {
  return gt || (gt = 1, function(O, M) {
    (function(p, T) {
      O.exports = T(Rt());
    })(Mt, function(p) {
      return (
        /******/
        function(T) {
          var f = {};
          function i(t) {
            if (f[t])
              return f[t].exports;
            var e = f[t] = {
              /******/
              i: t,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return T[t].call(e.exports, e, e.exports, i), e.l = true, e.exports;
          }
          return i.m = T, i.c = f, i.i = function(t) {
            return t;
          }, i.d = function(t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: r
              /******/
            });
          }, i.n = function(t) {
            var e = t && t.__esModule ? (
              /******/
              function() {
                return t.default;
              }
            ) : (
              /******/
              function() {
                return t;
              }
            );
            return i.d(e, "a", e), e;
          }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, i.p = "", i(i.s = 1);
        }([
          /* 0 */
          /***/
          function(T, f) {
            T.exports = p;
          },
          /* 1 */
          /***/
          function(T, f, i) {
            var t = i(0).layoutBase.LayoutConstants, e = i(0).layoutBase.FDLayoutConstants, r = i(0).CoSEConstants, h = i(0).CoSELayout, a = i(0).CoSENode, s = i(0).layoutBase.PointD, y = i(0).layoutBase.DimensionD, o = {
              // Called on `layoutready`
              ready: function() {
              },
              // Called on `layoutstop`
              stop: function() {
              },
              // 'draft', 'default' or 'proof" 
              // - 'draft' fast cooling rate 
              // - 'default' moderate cooling rate 
              // - "proof" slow cooling rate
              quality: "default",
              // include labels in node dimensions
              nodeDimensionsIncludeLabels: false,
              // number of ticks per frame; higher is faster but more jerky
              refresh: 30,
              // Whether to fit the network view after when done
              fit: true,
              // Padding on fit
              padding: 10,
              // Whether to enable incremental mode
              randomize: true,
              // Node repulsion (non overlapping) multiplier
              nodeRepulsion: 4500,
              // Ideal edge (non nested) length
              idealEdgeLength: 50,
              // Divisor to compute edge forces
              edgeElasticity: 0.45,
              // Nesting factor (multiplier) to compute ideal edge length for nested edges
              nestingFactor: 0.1,
              // Gravity force (constant)
              gravity: 0.25,
              // Maximum number of iterations to perform
              numIter: 2500,
              // For enabling tiling
              tile: true,
              // Type of layout animation. The option set is {'during', 'end', false}
              animate: "end",
              // Duration for animate:end
              animationDuration: 500,
              // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingVertical: 10,
              // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingHorizontal: 10,
              // Gravity range (constant) for compounds
              gravityRangeCompound: 1.5,
              // Gravity force (constant) for compounds
              gravityCompound: 1,
              // Gravity range (constant)
              gravityRange: 3.8,
              // Initial cooling factor for incremental layout
              initialEnergyOnIncremental: 0.5
            };
            function d(_, N) {
              var D = {};
              for (var g in _)
                D[g] = _[g];
              for (var g in N)
                D[g] = N[g];
              return D;
            }
            function c(_) {
              this.options = d(o, _), E(this.options);
            }
            var E = function(_) {
              _.nodeRepulsion != null && (r.DEFAULT_REPULSION_STRENGTH = e.DEFAULT_REPULSION_STRENGTH = _.nodeRepulsion), _.idealEdgeLength != null && (r.DEFAULT_EDGE_LENGTH = e.DEFAULT_EDGE_LENGTH = _.idealEdgeLength), _.edgeElasticity != null && (r.DEFAULT_SPRING_STRENGTH = e.DEFAULT_SPRING_STRENGTH = _.edgeElasticity), _.nestingFactor != null && (r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = _.nestingFactor), _.gravity != null && (r.DEFAULT_GRAVITY_STRENGTH = e.DEFAULT_GRAVITY_STRENGTH = _.gravity), _.numIter != null && (r.MAX_ITERATIONS = e.MAX_ITERATIONS = _.numIter), _.gravityRange != null && (r.DEFAULT_GRAVITY_RANGE_FACTOR = e.DEFAULT_GRAVITY_RANGE_FACTOR = _.gravityRange), _.gravityCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e.DEFAULT_COMPOUND_GRAVITY_STRENGTH = _.gravityCompound), _.gravityRangeCompound != null && (r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = _.gravityRangeCompound), _.initialEnergyOnIncremental != null && (r.DEFAULT_COOLING_FACTOR_INCREMENTAL = e.DEFAULT_COOLING_FACTOR_INCREMENTAL = _.initialEnergyOnIncremental), _.quality == "draft" ? t.QUALITY = 0 : _.quality == "proof" ? t.QUALITY = 2 : t.QUALITY = 1, r.NODE_DIMENSIONS_INCLUDE_LABELS = e.NODE_DIMENSIONS_INCLUDE_LABELS = t.NODE_DIMENSIONS_INCLUDE_LABELS = _.nodeDimensionsIncludeLabels, r.DEFAULT_INCREMENTAL = e.DEFAULT_INCREMENTAL = t.DEFAULT_INCREMENTAL = !_.randomize, r.ANIMATE = e.ANIMATE = t.ANIMATE = _.animate, r.TILE = _.tile, r.TILING_PADDING_VERTICAL = typeof _.tilingPaddingVertical == "function" ? _.tilingPaddingVertical.call() : _.tilingPaddingVertical, r.TILING_PADDING_HORIZONTAL = typeof _.tilingPaddingHorizontal == "function" ? _.tilingPaddingHorizontal.call() : _.tilingPaddingHorizontal;
            };
            c.prototype.run = function() {
              var _, N, D = this.options;
              this.idToLNode = {};
              var g = this.layout = new h(), L = this;
              L.stopped = false, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
              var n = g.newGraphManager();
              this.gm = n;
              var u = this.options.eles.nodes(), l = this.options.eles.edges();
              this.root = n.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(u), g);
              for (var v = 0; v < l.length; v++) {
                var A = l[v], I = this.idToLNode[A.data("source")], w = this.idToLNode[A.data("target")];
                if (I !== w && I.getEdgesBetween(w).length == 0) {
                  var R = n.add(g.newEdge(), I, w);
                  R.id = A.id();
                }
              }
              var S2 = function(G, C) {
                typeof G == "number" && (G = C);
                var x = G.data("id"), F = L.idToLNode[x];
                return {
                  x: F.getRect().getCenterX(),
                  y: F.getRect().getCenterY()
                };
              }, U = function G() {
                for (var C = function() {
                  D.fit && D.cy.fit(D.eles, D.padding), _ || (_ = true, L.cy.one("layoutready", D.ready), L.cy.trigger({ type: "layoutready", layout: L }));
                }, x = L.options.refresh, F, k = 0; k < x && !F; k++)
                  F = L.stopped || L.layout.tick();
                if (F) {
                  g.checkLayoutSuccess() && !g.isSubLayout && g.doPostLayout(), g.tilingPostLayout && g.tilingPostLayout(), g.isLayoutFinished = true, L.options.eles.nodes().positions(S2), C(), L.cy.one("layoutstop", L.options.stop), L.cy.trigger({ type: "layoutstop", layout: L }), N && cancelAnimationFrame(N), _ = false;
                  return;
                }
                var Y = L.layout.getPositionsData();
                D.eles.nodes().positions(function(X, P) {
                  if (typeof X == "number" && (X = P), !X.isParent()) {
                    for (var B = X.id(), $ = Y[B], H = X; $ == null && ($ = Y[H.data("parent")] || Y["DummyCompound_" + H.data("parent")], Y[B] = $, H = H.parent()[0], H != null); )
                      ;
                    return $ != null ? {
                      x: $.x,
                      y: $.y
                    } : {
                      x: X.position("x"),
                      y: X.position("y")
                    };
                  }
                }), C(), N = requestAnimationFrame(G);
              };
              return g.addListener("layoutstarted", function() {
                L.options.animate === "during" && (N = requestAnimationFrame(U));
              }), g.runLayout(), this.options.animate !== "during" && (L.options.eles.nodes().not(":parent").layoutPositions(L, L.options, S2), _ = false), this;
            }, c.prototype.getTopMostNodes = function(_) {
              for (var N = {}, D = 0; D < _.length; D++)
                N[_[D].id()] = true;
              var g = _.filter(function(L, n) {
                typeof L == "number" && (L = n);
                for (var u = L.parent()[0]; u != null; ) {
                  if (N[u.id()])
                    return false;
                  u = u.parent()[0];
                }
                return true;
              });
              return g;
            }, c.prototype.processChildrenList = function(_, N, D) {
              for (var g = N.length, L = 0; L < g; L++) {
                var n = N[L], u = n.children(), l, v = n.layoutDimensions({
                  nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                });
                if (n.outerWidth() != null && n.outerHeight() != null ? l = _.add(new a(D.graphManager, new s(n.position("x") - v.w / 2, n.position("y") - v.h / 2), new y(parseFloat(v.w), parseFloat(v.h)))) : l = _.add(new a(this.graphManager)), l.id = n.data("id"), l.paddingLeft = parseInt(n.css("padding")), l.paddingTop = parseInt(n.css("padding")), l.paddingRight = parseInt(n.css("padding")), l.paddingBottom = parseInt(n.css("padding")), this.options.nodeDimensionsIncludeLabels && n.isParent()) {
                  var A = n.boundingBox({ includeLabels: true, includeNodes: false }).w, I = n.boundingBox({ includeLabels: true, includeNodes: false }).h, w = n.css("text-halign");
                  l.labelWidth = A, l.labelHeight = I, l.labelPos = w;
                }
                if (this.idToLNode[n.data("id")] = l, isNaN(l.rect.x) && (l.rect.x = 0), isNaN(l.rect.y) && (l.rect.y = 0), u != null && u.length > 0) {
                  var R;
                  R = D.getGraphManager().add(D.newGraph(), l), this.processChildrenList(R, u, D);
                }
              }
            }, c.prototype.stop = function() {
              return this.stopped = true, this;
            };
            var m = function(_) {
              _("layout", "cose-bilkent", c);
            };
            typeof cytoscape < "u" && m(cytoscape), T.exports = m;
          }
          /******/
        ])
      );
    });
  }(it)), it.exports;
}
var xt = Ct();
var St = Xq(xt);
var ot = function() {
  var O = S(function(D, g, L, n) {
    for (L = L || {}, n = D.length; n--; L[D[n]] = g) ;
    return L;
  }, "o"), M = [1, 4], p = [1, 13], T = [1, 12], f = [1, 15], i = [1, 16], t = [1, 20], e = [1, 19], r = [6, 7, 8], h = [1, 26], a = [1, 24], s = [1, 25], y = [6, 7, 11], o = [1, 6, 13, 15, 16, 19, 22], d = [1, 33], c = [1, 34], E = [1, 6, 7, 11, 13, 15, 16, 19, 22], m = {
    trace: S(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: S(function(D, g, L, n, u, l, v) {
      var A = l.length - 1;
      switch (u) {
        case 6:
        case 7:
          return n;
        case 8:
          n.getLogger().trace("Stop NL ");
          break;
        case 9:
          n.getLogger().trace("Stop EOF ");
          break;
        case 11:
          n.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          n.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          n.getLogger().info("Node: ", l[A].id), n.addNode(l[A - 1].length, l[A].id, l[A].descr, l[A].type);
          break;
        case 16:
          n.getLogger().trace("Icon: ", l[A]), n.decorateNode({ icon: l[A] });
          break;
        case 17:
        case 21:
          n.decorateNode({ class: l[A] });
          break;
        case 18:
          n.getLogger().trace("SPACELIST");
          break;
        case 19:
          n.getLogger().trace("Node: ", l[A].id), n.addNode(0, l[A].id, l[A].descr, l[A].type);
          break;
        case 20:
          n.decorateNode({ icon: l[A] });
          break;
        case 25:
          n.getLogger().trace("node found ..", l[A - 2]), this.$ = { id: l[A - 1], descr: l[A - 1], type: n.getType(l[A - 2], l[A]) };
          break;
        case 26:
          this.$ = { id: l[A], descr: l[A], type: n.nodeType.DEFAULT };
          break;
        case 27:
          n.getLogger().trace("node found ..", l[A - 3]), this.$ = { id: l[A - 3], descr: l[A - 1], type: n.getType(l[A - 2], l[A]) };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: M }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: M }, { 6: p, 7: [1, 10], 9: 9, 12: 11, 13: T, 14: 14, 15: f, 16: i, 17: 17, 18: 18, 19: t, 22: e }, O(r, [2, 3]), { 1: [2, 2] }, O(r, [2, 4]), O(r, [2, 5]), { 1: [2, 6], 6: p, 12: 21, 13: T, 14: 14, 15: f, 16: i, 17: 17, 18: 18, 19: t, 22: e }, { 6: p, 9: 22, 12: 11, 13: T, 14: 14, 15: f, 16: i, 17: 17, 18: 18, 19: t, 22: e }, { 6: h, 7: a, 10: 23, 11: s }, O(y, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: t, 22: e }), O(y, [2, 18]), O(y, [2, 19]), O(y, [2, 20]), O(y, [2, 21]), O(y, [2, 23]), O(y, [2, 24]), O(y, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: h, 7: a, 10: 32, 11: s }, { 1: [2, 7], 6: p, 12: 21, 13: T, 14: 14, 15: f, 16: i, 17: 17, 18: 18, 19: t, 22: e }, O(o, [2, 14], { 7: d, 11: c }), O(E, [2, 8]), O(E, [2, 9]), O(E, [2, 10]), O(y, [2, 15]), O(y, [2, 16]), O(y, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, O(o, [2, 13], { 7: d, 11: c }), O(E, [2, 11]), O(E, [2, 12]), { 21: [1, 37] }, O(y, [2, 25]), O(y, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: S(function(D, g) {
      if (g.recoverable)
        this.trace(D);
      else {
        var L = new Error(D);
        throw L.hash = g, L;
      }
    }, "parseError"),
    parse: S(function(D) {
      var g = this, L = [0], n = [], u = [null], l = [], v = this.table, A = "", I = 0, w = 0, R = 2, S2 = 1, U = l.slice.call(arguments, 1), G = Object.create(this.lexer), C = { yy: {} };
      for (var x in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, x) && (C.yy[x] = this.yy[x]);
      G.setInput(D, C.yy), C.yy.lexer = G, C.yy.parser = this, typeof G.yylloc > "u" && (G.yylloc = {});
      var F = G.yylloc;
      l.push(F);
      var k = G.options && G.options.ranges;
      typeof C.yy.parseError == "function" ? this.parseError = C.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Y(W) {
        L.length = L.length - 2 * W, u.length = u.length - W, l.length = l.length - W;
      }
      S(Y, "popStack");
      function X() {
        var W;
        return W = n.pop() || G.lex() || S2, typeof W != "number" && (W instanceof Array && (n = W, W = n.pop()), W = g.symbols_[W] || W), W;
      }
      S(X, "lex");
      for (var P, B, $, H, V = {}, z, j, ht, Z; ; ) {
        if (B = L[L.length - 1], this.defaultActions[B] ? $ = this.defaultActions[B] : ((P === null || typeof P > "u") && (P = X()), $ = v[B] && v[B][P]), typeof $ > "u" || !$.length || !$[0]) {
          var J = "";
          Z = [];
          for (z in v[B])
            this.terminals_[z] && z > R && Z.push("'" + this.terminals_[z] + "'");
          G.showPosition ? J = "Parse error on line " + (I + 1) + `:
` + G.showPosition() + `
Expecting ` + Z.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : J = "Parse error on line " + (I + 1) + ": Unexpected " + (P == S2 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(J, {
            text: G.match,
            token: this.terminals_[P] || P,
            line: G.yylineno,
            loc: F,
            expected: Z
          });
        }
        if ($[0] instanceof Array && $.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + B + ", token: " + P);
        switch ($[0]) {
          case 1:
            L.push(P), u.push(G.yytext), l.push(G.yylloc), L.push($[1]), P = null, w = G.yyleng, A = G.yytext, I = G.yylineno, F = G.yylloc;
            break;
          case 2:
            if (j = this.productions_[$[1]][1], V.$ = u[u.length - j], V._$ = {
              first_line: l[l.length - (j || 1)].first_line,
              last_line: l[l.length - 1].last_line,
              first_column: l[l.length - (j || 1)].first_column,
              last_column: l[l.length - 1].last_column
            }, k && (V._$.range = [
              l[l.length - (j || 1)].range[0],
              l[l.length - 1].range[1]
            ]), H = this.performAction.apply(V, [
              A,
              w,
              I,
              C.yy,
              $[1],
              u,
              l
            ].concat(U)), typeof H < "u")
              return H;
            j && (L = L.slice(0, -1 * j * 2), u = u.slice(0, -1 * j), l = l.slice(0, -1 * j)), L.push(this.productions_[$[1]][0]), u.push(V.$), l.push(V._$), ht = v[L[L.length - 2]][L[L.length - 1]], L.push(ht);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, _ = function() {
    var D = {
      EOF: 1,
      parseError: S(function(g, L) {
        if (this.yy.parser)
          this.yy.parser.parseError(g, L);
        else
          throw new Error(g);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: S(function(g, L) {
        return this.yy = L || this.yy || {}, this._input = g, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: S(function() {
        var g = this._input[0];
        this.yytext += g, this.yyleng++, this.offset++, this.match += g, this.matched += g;
        var L = g.match(/(?:\r\n?|\n).*/g);
        return L ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), g;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: S(function(g) {
        var L = g.length, n = g.split(/(?:\r\n?|\n)/g);
        this._input = g + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - L), this.offset -= L;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
        var l = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === u.length ? this.yylloc.first_column : 0) + u[u.length - n.length].length - n[0].length : this.yylloc.first_column - L
        }, this.options.ranges && (this.yylloc.range = [l[0], l[0] + this.yyleng - L]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: S(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: S(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: S(function(g) {
        this.unput(this.match.slice(g));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: S(function() {
        var g = this.matched.substr(0, this.matched.length - this.match.length);
        return (g.length > 20 ? "..." : "") + g.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: S(function() {
        var g = this.match;
        return g.length < 20 && (g += this._input.substr(0, 20 - g.length)), (g.substr(0, 20) + (g.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: S(function() {
        var g = this.pastInput(), L = new Array(g.length + 1).join("-");
        return g + this.upcomingInput() + `
` + L + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: S(function(g, L) {
        var n, u, l;
        if (this.options.backtrack_lexer && (l = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (l.yylloc.range = this.yylloc.range.slice(0))), u = g[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
        }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(g[0].length), this.matched += g[0], n = this.performAction.call(this, this.yy, this, L, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n)
          return n;
        if (this._backtrack) {
          for (var v in l)
            this[v] = l[v];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: S(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var g, L, n, u;
        this._more || (this.yytext = "", this.match = "");
        for (var l = this._currentRules(), v = 0; v < l.length; v++)
          if (n = this._input.match(this.rules[l[v]]), n && (!L || n[0].length > L[0].length)) {
            if (L = n, u = v, this.options.backtrack_lexer) {
              if (g = this.test_match(n, l[v]), g !== false)
                return g;
              if (this._backtrack) {
                L = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return L ? (g = this.test_match(L, l[u]), g !== false ? g : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: S(function() {
        var g = this.next();
        return g || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: S(function(g) {
        this.conditionStack.push(g);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: S(function() {
        var g = this.conditionStack.length - 1;
        return g > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: S(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: S(function(g) {
        return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: S(function(g) {
        this.begin(g);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: S(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: S(function(g, L, n, u) {
        switch (n) {
          case 0:
            return g.getLogger().trace("Found comment", L.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            g.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return g.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            g.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return g.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return g.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return g.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return g.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            g.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return g.getLogger().trace("description:", L.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), g.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), g.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), g.getLogger().trace("node end ...", L.yytext), "NODE_DEND";
          case 30:
            return this.popState(), g.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), g.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), g.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), g.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), g.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return g.getLogger().trace("Long description:", L.yytext), 20;
          case 36:
            return g.getLogger().trace("Long description:", L.yytext), 20;
        }
      }, "anonymous"),
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: false }, ICON: { rules: [8, 9], inclusive: false }, NSTR2: { rules: [22, 23], inclusive: false }, NSTR: { rules: [25, 26], inclusive: false }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: false }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: true } }
    };
    return D;
  }();
  m.lexer = _;
  function N() {
    this.yy = {};
  }
  return S(N, "Parser"), N.prototype = m, m.Parser = N, new N();
}();
ot.parser = ot;
var Gt = ot;
var bt = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
};
var tt;
var Ft = (tt = class {
  constructor() {
    this.nodes = [], this.count = 0, this.elements = {}, this.getLogger = this.getLogger.bind(this), this.nodeType = bt, this.clear(), this.getType = this.getType.bind(this), this.getMindmap = this.getMindmap.bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap.bind(this), this.addNode = this.addNode.bind(this), this.decorateNode = this.decorateNode.bind(this);
  }
  clear() {
    this.nodes = [], this.count = 0, this.elements = {};
  }
  getParent(O) {
    for (let M = this.nodes.length - 1; M >= 0; M--)
      if (this.nodes[M].level < O)
        return this.nodes[M];
    return null;
  }
  getMindmap() {
    return this.nodes.length > 0 ? this.nodes[0] : null;
  }
  addNode(O, M, p, T) {
    var _a, _b;
    ut.info("addNode", O, M, p, T);
    const f = me();
    let i = ((_a = f.mindmap) == null ? void 0 : _a.padding) ?? tw.mindmap.padding;
    switch (T) {
      case this.nodeType.ROUNDED_RECT:
      case this.nodeType.RECT:
      case this.nodeType.HEXAGON:
        i *= 2;
        break;
    }
    const t = {
      id: this.count++,
      nodeId: to(M, f),
      level: O,
      descr: to(p, f),
      type: T,
      children: [],
      width: ((_b = f.mindmap) == null ? void 0 : _b.maxNodeWidth) ?? tw.mindmap.maxNodeWidth,
      padding: i
    }, e = this.getParent(O);
    if (e)
      e.children.push(t), this.nodes.push(t);
    else if (this.nodes.length === 0)
      this.nodes.push(t);
    else
      throw new Error(
        `There can be only one root. No parent could be found for ("${t.descr}")`
      );
  }
  getType(O, M) {
    switch (ut.debug("In get type", O, M), O) {
      case "[":
        return this.nodeType.RECT;
      case "(":
        return M === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
      case "((":
        return this.nodeType.CIRCLE;
      case ")":
        return this.nodeType.CLOUD;
      case "))":
        return this.nodeType.BANG;
      case "{{":
        return this.nodeType.HEXAGON;
      default:
        return this.nodeType.DEFAULT;
    }
  }
  setElementForId(O, M) {
    this.elements[O] = M;
  }
  getElementById(O) {
    return this.elements[O];
  }
  decorateNode(O) {
    if (!O)
      return;
    const M = me(), p = this.nodes[this.nodes.length - 1];
    O.icon && (p.icon = to(O.icon, M)), O.class && (p.class = to(O.class, M));
  }
  type2Str(O) {
    switch (O) {
      case this.nodeType.DEFAULT:
        return "no-border";
      case this.nodeType.RECT:
        return "rect";
      case this.nodeType.ROUNDED_RECT:
        return "rounded-rect";
      case this.nodeType.CIRCLE:
        return "circle";
      case this.nodeType.CLOUD:
        return "cloud";
      case this.nodeType.BANG:
        return "bang";
      case this.nodeType.HEXAGON:
        return "hexgon";
      default:
        return "no-border";
    }
  }
  getLogger() {
    return ut;
  }
}, S(tt, "MindmapDB"), tt);
var Pt = 12;
var Ut = S(function(O, M, p, T) {
  M.append("path").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr(
    "d",
    `M0 ${p.height - 5} v${-p.height + 2 * 5} q0,-5 5,-5 h${p.width - 2 * 5} q5,0 5,5 v${p.height - 5} H0 Z`
  ), M.append("line").attr("class", "node-line-" + T).attr("x1", 0).attr("y1", p.height).attr("x2", p.width).attr("y2", p.height);
}, "defaultBkg");
var kt = S(function(O, M, p) {
  M.append("rect").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr("height", p.height).attr("width", p.width);
}, "rectBkg");
var Yt = S(function(O, M, p) {
  const T = p.width, f = p.height, i = 0.15 * T, t = 0.25 * T, e = 0.35 * T, r = 0.2 * T;
  M.append("path").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr(
    "d",
    `M0 0 a${i},${i} 0 0,1 ${T * 0.25},${-1 * T * 0.1}
      a${e},${e} 1 0,1 ${T * 0.4},${-1 * T * 0.1}
      a${t},${t} 1 0,1 ${T * 0.35},${1 * T * 0.2}

      a${i},${i} 1 0,1 ${T * 0.15},${1 * f * 0.35}
      a${r},${r} 1 0,1 ${-1 * T * 0.15},${1 * f * 0.65}

      a${t},${i} 1 0,1 ${-1 * T * 0.25},${T * 0.15}
      a${e},${e} 1 0,1 ${-1 * T * 0.5},0
      a${i},${i} 1 0,1 ${-1 * T * 0.25},${-1 * T * 0.15}

      a${i},${i} 1 0,1 ${-1 * T * 0.1},${-1 * f * 0.35}
      a${r},${r} 1 0,1 ${T * 0.1},${-1 * f * 0.65}

    H0 V0 Z`
  );
}, "cloudBkg");
var Xt = S(function(O, M, p) {
  const T = p.width, f = p.height, i = 0.15 * T;
  M.append("path").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr(
    "d",
    `M0 0 a${i},${i} 1 0,0 ${T * 0.25},${-1 * f * 0.1}
      a${i},${i} 1 0,0 ${T * 0.25},0
      a${i},${i} 1 0,0 ${T * 0.25},0
      a${i},${i} 1 0,0 ${T * 0.25},${1 * f * 0.1}

      a${i},${i} 1 0,0 ${T * 0.15},${1 * f * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${1 * f * 0.34}
      a${i},${i} 1 0,0 ${-1 * T * 0.15},${1 * f * 0.33}

      a${i},${i} 1 0,0 ${-1 * T * 0.25},${f * 0.15}
      a${i},${i} 1 0,0 ${-1 * T * 0.25},0
      a${i},${i} 1 0,0 ${-1 * T * 0.25},0
      a${i},${i} 1 0,0 ${-1 * T * 0.25},${-1 * f * 0.15}

      a${i},${i} 1 0,0 ${-1 * T * 0.1},${-1 * f * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${-1 * f * 0.34}
      a${i},${i} 1 0,0 ${T * 0.1},${-1 * f * 0.33}

    H0 V0 Z`
  );
}, "bangBkg");
var Bt = S(function(O, M, p) {
  M.append("circle").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr("r", p.width / 2);
}, "circleBkg");
function dt(O, M, p, T, f) {
  return O.insert("polygon", ":first-child").attr(
    "points",
    T.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + (f.width - M) / 2 + ", " + p + ")");
}
S(dt, "insertPolygonShape");
var $t = S(function(O, M, p) {
  const T = p.height, f = T / 4, i = p.width - p.padding + 2 * f, t = [
    { x: f, y: 0 },
    { x: i - f, y: 0 },
    { x: i, y: -T / 2 },
    { x: i - f, y: -T },
    { x: f, y: -T },
    { x: 0, y: -T / 2 }
  ];
  dt(M, i, T, t, p);
}, "hexagonBkg");
var Ht = S(function(O, M, p) {
  M.append("rect").attr("id", "node-" + p.id).attr("class", "node-bkg node-" + O.type2Str(p.type)).attr("height", p.height).attr("rx", p.padding).attr("ry", p.padding).attr("width", p.width);
}, "roundedRectBkg");
var Wt = S(async function(O, M, p, T, f) {
  const i = f.htmlLabels, t = T % (Pt - 1), e = M.append("g");
  p.section = t;
  let r = "section-" + t;
  t < 0 && (r += " section-root"), e.attr("class", (p.class ? p.class + " " : "") + "mindmap-node " + r);
  const h = e.append("g"), a = e.append("g"), s = p.descr.replace(/(<br\/*>)/g, `
`);
  await ys(
    a,
    s,
    {
      useHtmlLabels: i,
      width: p.width,
      classes: "mindmap-node-label"
    },
    f
  ), i || a.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  const y = a.node().getBBox(), [o] = R0(f.fontSize);
  if (p.height = y.height + o * 1.1 * 0.5 + p.padding, p.width = y.width + 2 * p.padding, p.icon)
    if (p.type === O.nodeType.CIRCLE)
      p.height += 50, p.width += 50, e.append("foreignObject").attr("height", "50px").attr("width", p.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + t + " " + p.icon), a.attr(
        "transform",
        "translate(" + p.width / 2 + ", " + (p.height / 2 - 1.5 * p.padding) + ")"
      );
    else {
      p.width += 50;
      const d = p.height;
      p.height = Math.max(d, 60);
      const c = Math.abs(p.height - d);
      e.append("foreignObject").attr("width", "60px").attr("height", p.height).attr("style", "text-align: center;margin-top:" + c / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + t + " " + p.icon), a.attr(
        "transform",
        "translate(" + (25 + p.width / 2) + ", " + (c / 2 + p.padding / 2) + ")"
      );
    }
  else if (i) {
    const d = (p.width - y.width) / 2, c = (p.height - y.height) / 2;
    a.attr("transform", "translate(" + d + ", " + c + ")");
  } else {
    const d = p.width / 2, c = p.padding / 2;
    a.attr("transform", "translate(" + d + ", " + c + ")");
  }
  switch (p.type) {
    case O.nodeType.DEFAULT:
      Ut(O, h, p, t);
      break;
    case O.nodeType.ROUNDED_RECT:
      Ht(O, h, p, t);
      break;
    case O.nodeType.RECT:
      kt(O, h, p, t);
      break;
    case O.nodeType.CIRCLE:
      h.attr("transform", "translate(" + p.width / 2 + ", " + +p.height / 2 + ")"), Bt(O, h, p, t);
      break;
    case O.nodeType.CLOUD:
      Yt(O, h, p, t);
      break;
    case O.nodeType.BANG:
      Xt(O, h, p, t);
      break;
    case O.nodeType.HEXAGON:
      $t(O, h, p, t);
      break;
  }
  return O.setElementForId(p.id, e), p.height;
}, "drawNode");
var jt = S(function(O, M) {
  const p = O.getElementById(M.id), T = M.x || 0, f = M.y || 0;
  p.attr("transform", "translate(" + T + "," + f + ")");
}, "positionNode");
Jn.use(St);
async function st(O, M, p, T, f) {
  await Wt(O, M, p, T, f), p.children && await Promise.all(
    p.children.map(
      (i, t) => st(O, M, i, T < 0 ? t : T, f)
    )
  );
}
S(st, "drawNodes");
function pt(O, M) {
  M.edges().map((p, T) => {
    const f = p.data();
    if (p[0]._private.bodyBounds) {
      const i = p[0]._private.rscratch;
      ut.trace("Edge: ", T, f), O.insert("path").attr(
        "d",
        `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `
      ).attr("class", "edge section-edge-" + f.section + " edge-depth-" + f.depth);
    }
  });
}
S(pt, "drawEdges");
function at(O, M, p, T) {
  M.add({
    group: "nodes",
    data: {
      id: O.id.toString(),
      labelText: O.descr,
      height: O.height,
      width: O.width,
      level: T,
      nodeId: O.id,
      padding: O.padding,
      type: O.type
    },
    position: {
      x: O.x,
      y: O.y
    }
  }), O.children && O.children.forEach((f) => {
    at(f, M, p, T + 1), M.add({
      group: "edges",
      data: {
        id: `${O.id}_${f.id}`,
        source: O.id,
        target: f.id,
        depth: T,
        section: f.section
      }
    });
  });
}
S(at, "addNodes");
function ft(O, M) {
  return new Promise((p) => {
    const T = ae("body").append("div").attr("id", "cy").attr("style", "display:none"), f = Jn({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    T.remove(), at(O, f, M, 0), f.nodes().forEach(function(i) {
      i.layoutDimensions = () => {
        const t = i.data();
        return { w: t.width, h: t.height };
      };
    }), f.layout({
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: false,
      animate: false
    }).run(), f.ready((i) => {
      ut.info("Ready", i), p(f);
    });
  });
}
S(ft, "layoutMindmap");
function yt(O, M) {
  M.nodes().map((p, T) => {
    const f = p.data();
    f.x = p.position().x, f.y = p.position().y, jt(O, f);
    const i = O.getElementById(f.nodeId);
    ut.info("id:", T, "Position: (", p.position().x, ", ", p.position().y, ")", f), i.attr(
      "transform",
      `translate(${p.position().x - f.width / 2}, ${p.position().y - f.height / 2})`
    ), i.attr("attr", `apa-${T})`);
  });
}
S(yt, "positionNodes");
var Vt = S(async (O, M, p, T) => {
  var _a, _b;
  ut.debug(`Rendering mindmap diagram
` + O);
  const f = T.db, i = f.getMindmap();
  if (!i)
    return;
  const t = me();
  t.htmlLabels = false;
  const e = TZ(M), r = e.append("g");
  r.attr("class", "mindmap-edges");
  const h = e.append("g");
  h.attr("class", "mindmap-nodes"), await st(f, h, i, -1, t);
  const a = await ft(i, t);
  pt(r, a), yt(f, a), oP(
    void 0,
    e,
    ((_a = t.mindmap) == null ? void 0 : _a.padding) ?? tw.mindmap.padding,
    ((_b = t.mindmap) == null ? void 0 : _b.useMaxWidth) ?? tw.mindmap.useMaxWidth
  );
}, "draw");
var zt2 = {
  draw: Vt
};
var qt = S((O) => {
  let M = "";
  for (let p = 0; p < O.THEME_COLOR_LIMIT; p++)
    O["lineColor" + p] = O["lineColor" + p] || O["cScaleInv" + p], hc(O["lineColor" + p]) ? O["lineColor" + p] = At(O["lineColor" + p], 20) : O["lineColor" + p] = zt(O["lineColor" + p], 20);
  for (let p = 0; p < O.THEME_COLOR_LIMIT; p++) {
    const T = "" + (17 - 3 * p);
    M += `
    .section-${p - 1} rect, .section-${p - 1} path, .section-${p - 1} circle, .section-${p - 1} polygon, .section-${p - 1} path  {
      fill: ${O["cScale" + p]};
    }
    .section-${p - 1} text {
     fill: ${O["cScaleLabel" + p]};
    }
    .node-icon-${p - 1} {
      font-size: 40px;
      color: ${O["cScaleLabel" + p]};
    }
    .section-edge-${p - 1}{
      stroke: ${O["cScale" + p]};
    }
    .edge-depth-${p - 1}{
      stroke-width: ${T};
    }
    .section-${p - 1} line {
      stroke: ${O["cScaleInv" + p]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return M;
}, "genSections");
var Zt = S((O) => `
  .edge {
    stroke-width: 3;
  }
  ${qt(O)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${O.git0};
  }
  .section-root text {
    fill: ${O.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles");
var Qt = Zt;
var te = {
  get db() {
    return new Ft();
  },
  renderer: zt2,
  parser: Gt,
  styles: Qt
};
export {
  te as diagram
};
//# sourceMappingURL=mindmap-definition-6CBA2TL7-CG7XFai2-B-ObmyZG-K73XCAOB.js.map
