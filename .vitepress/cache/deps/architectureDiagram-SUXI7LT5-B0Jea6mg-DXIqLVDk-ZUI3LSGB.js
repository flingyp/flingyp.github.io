import {
  Jn
} from "./chunk-7YXX2ZQA.js";
import {
  i
} from "./chunk-MZGMHC6D.js";
import {
  e
} from "./chunk-YXP4Z2OC.js";
import {
  Iy
} from "./chunk-7MGNJ6NO.js";
import "./chunk-5H7L3GAH.js";
import "./chunk-HFG3CCC5.js";
import "./chunk-CSA5CQKO.js";
import {
  DY,
  FR,
  HR,
  Hr,
  LY,
  N6,
  PR,
  RR,
  WR,
  _,
  ae,
  fe,
  fs,
  gc,
  jR,
  qR,
  sg,
  tZ,
  ut,
  vq,
  zR
} from "./chunk-XXGV6SHG.js";
import "./chunk-ZNML7WN5.js";
import "./chunk-EQCVQC35.js";

// node_modules/.pnpm/vitepress-plugin-legend@1.0.2_jiti@1.21.7_markmap-common@0.18.9_typescript@5.4.3_yaml@2.7.0/node_modules/vitepress-plugin-legend/dist/architectureDiagram-SUXI7LT5-B0Jea6mg-DXIqLVDk.js
var fe2 = { exports: {} };
var pe = { exports: {} };
var ve = { exports: {} };
var ui = ve.exports;
var xe;
function fi() {
  return xe || (xe = 1, function(w, X) {
    (function(_2, k) {
      w.exports = k();
    })(ui, function() {
      return (
        /******/
        function(_2) {
          var k = {};
          function T(u) {
            if (k[u])
              return k[u].exports;
            var d = k[u] = {
              /******/
              i: u,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return _2[u].call(d.exports, d, d.exports, T), d.l = true, d.exports;
          }
          return T.m = _2, T.c = k, T.i = function(u) {
            return u;
          }, T.d = function(u, d, o) {
            T.o(u, d) || Object.defineProperty(u, d, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: o
              /******/
            });
          }, T.n = function(u) {
            var d = u && u.__esModule ? (
              /******/
              function() {
                return u.default;
              }
            ) : (
              /******/
              function() {
                return u;
              }
            );
            return T.d(d, "a", d), d;
          }, T.o = function(u, d) {
            return Object.prototype.hasOwnProperty.call(u, d);
          }, T.p = "", T(T.s = 28);
        }([
          /* 0 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.QUALITY = 1, u.DEFAULT_CREATE_BENDS_AS_NEEDED = false, u.DEFAULT_INCREMENTAL = false, u.DEFAULT_ANIMATION_ON_LAYOUT = true, u.DEFAULT_ANIMATION_DURING_LAYOUT = false, u.DEFAULT_ANIMATION_PERIOD = 50, u.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, u.DEFAULT_GRAPH_MARGIN = 15, u.NODE_DIMENSIONS_INCLUDE_LABELS = false, u.SIMPLE_NODE_SIZE = 40, u.SIMPLE_NODE_HALF_SIZE = u.SIMPLE_NODE_SIZE / 2, u.EMPTY_COMPOUND_NODE_SIZE = 40, u.MIN_EDGE_LENGTH = 1, u.WORLD_BOUNDARY = 1e6, u.INITIAL_WORLD_BOUNDARY = u.WORLD_BOUNDARY / 1e3, u.WORLD_CENTER_X = 1200, u.WORLD_CENTER_Y = 900, _2.exports = u;
          },
          /* 1 */
          /***/
          function(_2, k, T) {
            var u = T(2), d = T(8), o = T(9);
            function i2(s, n, f) {
              u.call(this, f), this.isOverlapingSourceAndTarget = false, this.vGraphObject = f, this.bendpoints = [], this.source = s, this.target = n;
            }
            i2.prototype = Object.create(u.prototype);
            for (var e2 in u)
              i2[e2] = u[e2];
            i2.prototype.getSource = function() {
              return this.source;
            }, i2.prototype.getTarget = function() {
              return this.target;
            }, i2.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, i2.prototype.getLength = function() {
              return this.length;
            }, i2.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, i2.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, i2.prototype.getLca = function() {
              return this.lca;
            }, i2.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, i2.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, i2.prototype.getOtherEnd = function(s) {
              if (this.source === s)
                return this.target;
              if (this.target === s)
                return this.source;
              throw "Node is not incident with this edge";
            }, i2.prototype.getOtherEndInGraph = function(s, n) {
              for (var f = this.getOtherEnd(s), t = n.getGraphManager().getRoot(); ; ) {
                if (f.getOwner() == n)
                  return f;
                if (f.getOwner() == t)
                  break;
                f = f.getOwner().getParent();
              }
              return null;
            }, i2.prototype.updateLength = function() {
              var s = new Array(4);
              this.isOverlapingSourceAndTarget = d.getIntersection(this.target.getRect(), this.source.getRect(), s), this.isOverlapingSourceAndTarget || (this.lengthX = s[0] - s[2], this.lengthY = s[1] - s[3], Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, i2.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, _2.exports = i2;
          },
          /* 2 */
          /***/
          function(_2, k, T) {
            function u(d) {
              this.vGraphObject = d;
            }
            _2.exports = u;
          },
          /* 3 */
          /***/
          function(_2, k, T) {
            var u = T(2), d = T(10), o = T(13), i2 = T(0), e2 = T(16), s = T(5);
            function n(t, a, l, c) {
              l == null && c == null && (c = a), u.call(this, c), t.graphManager != null && (t = t.graphManager), this.estimatedSize = d.MIN_VALUE, this.inclusionTreeDepth = d.MAX_VALUE, this.vGraphObject = c, this.edges = [], this.graphManager = t, l != null && a != null ? this.rect = new o(a.x, a.y, l.width, l.height) : this.rect = new o();
            }
            n.prototype = Object.create(u.prototype);
            for (var f in u)
              n[f] = u[f];
            n.prototype.getEdges = function() {
              return this.edges;
            }, n.prototype.getChild = function() {
              return this.child;
            }, n.prototype.getOwner = function() {
              return this.owner;
            }, n.prototype.getWidth = function() {
              return this.rect.width;
            }, n.prototype.setWidth = function(t) {
              this.rect.width = t;
            }, n.prototype.getHeight = function() {
              return this.rect.height;
            }, n.prototype.setHeight = function(t) {
              this.rect.height = t;
            }, n.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, n.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, n.prototype.getCenter = function() {
              return new s(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, n.prototype.getLocation = function() {
              return new s(this.rect.x, this.rect.y);
            }, n.prototype.getRect = function() {
              return this.rect;
            }, n.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, n.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, n.prototype.setRect = function(t, a) {
              this.rect.x = t.x, this.rect.y = t.y, this.rect.width = a.width, this.rect.height = a.height;
            }, n.prototype.setCenter = function(t, a) {
              this.rect.x = t - this.rect.width / 2, this.rect.y = a - this.rect.height / 2;
            }, n.prototype.setLocation = function(t, a) {
              this.rect.x = t, this.rect.y = a;
            }, n.prototype.moveBy = function(t, a) {
              this.rect.x += t, this.rect.y += a;
            }, n.prototype.getEdgeListToNode = function(t) {
              var a = [], l = this;
              return l.edges.forEach(function(c) {
                if (c.target == t) {
                  if (c.source != l) throw "Incorrect edge source!";
                  a.push(c);
                }
              }), a;
            }, n.prototype.getEdgesBetween = function(t) {
              var a = [], l = this;
              return l.edges.forEach(function(c) {
                if (!(c.source == l || c.target == l)) throw "Incorrect edge source and/or target";
                (c.target == t || c.source == t) && a.push(c);
              }), a;
            }, n.prototype.getNeighborsList = function() {
              var t = /* @__PURE__ */ new Set(), a = this;
              return a.edges.forEach(function(l) {
                if (l.source == a)
                  t.add(l.target);
                else {
                  if (l.target != a)
                    throw "Incorrect incidency!";
                  t.add(l.source);
                }
              }), t;
            }, n.prototype.withChildren = function() {
              var t = /* @__PURE__ */ new Set(), a, l;
              if (t.add(this), this.child != null)
                for (var c = this.child.getNodes(), h = 0; h < c.length; h++)
                  a = c[h], l = a.withChildren(), l.forEach(function(N) {
                    t.add(N);
                  });
              return t;
            }, n.prototype.getNoOfChildren = function() {
              var t = 0, a;
              if (this.child == null)
                t = 1;
              else
                for (var l = this.child.getNodes(), c = 0; c < l.length; c++)
                  a = l[c], t += a.getNoOfChildren();
              return t == 0 && (t = 1), t;
            }, n.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == d.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, n.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, n.prototype.scatter = function() {
              var t, a, l = -i2.INITIAL_WORLD_BOUNDARY, c = i2.INITIAL_WORLD_BOUNDARY;
              t = i2.WORLD_CENTER_X + e2.nextDouble() * (c - l) + l;
              var h = -i2.INITIAL_WORLD_BOUNDARY, N = i2.INITIAL_WORLD_BOUNDARY;
              a = i2.WORLD_CENTER_Y + e2.nextDouble() * (N - h) + h, this.rect.x = t, this.rect.y = a;
            }, n.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t = this.getChild();
                if (t.updateBounds(true), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), i2.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var a = t.getRight() - t.getLeft(), l = t.getBottom() - t.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(a + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > a ? (this.rect.x -= (this.labelWidth - a) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(a + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(l + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > l ? (this.rect.y -= (this.labelHeight - l) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(l + this.labelHeight));
                }
              }
            }, n.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == d.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, n.prototype.transform = function(t) {
              var a = this.rect.x;
              a > i2.WORLD_BOUNDARY ? a = i2.WORLD_BOUNDARY : a < -i2.WORLD_BOUNDARY && (a = -i2.WORLD_BOUNDARY);
              var l = this.rect.y;
              l > i2.WORLD_BOUNDARY ? l = i2.WORLD_BOUNDARY : l < -i2.WORLD_BOUNDARY && (l = -i2.WORLD_BOUNDARY);
              var c = new s(a, l), h = t.inverseTransformPoint(c);
              this.setLocation(h.x, h.y);
            }, n.prototype.getLeft = function() {
              return this.rect.x;
            }, n.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, n.prototype.getTop = function() {
              return this.rect.y;
            }, n.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, n.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, _2.exports = n;
          },
          /* 4 */
          /***/
          function(_2, k, T) {
            var u = T(0);
            function d() {
            }
            for (var o in u)
              d[o] = u[o];
            d.MAX_ITERATIONS = 2500, d.DEFAULT_EDGE_LENGTH = 50, d.DEFAULT_SPRING_STRENGTH = 0.45, d.DEFAULT_REPULSION_STRENGTH = 4500, d.DEFAULT_GRAVITY_STRENGTH = 0.4, d.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, d.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, d.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, d.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, d.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, d.COOLING_ADAPTATION_FACTOR = 0.33, d.ADAPTATION_LOWER_NODE_LIMIT = 1e3, d.ADAPTATION_UPPER_NODE_LIMIT = 5e3, d.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, d.MAX_NODE_DISPLACEMENT = d.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, d.MIN_REPULSION_DIST = d.DEFAULT_EDGE_LENGTH / 10, d.CONVERGENCE_CHECK_PERIOD = 100, d.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, d.MIN_EDGE_LENGTH = 1, d.GRID_CALCULATION_CHECK_PERIOD = 10, _2.exports = d;
          },
          /* 5 */
          /***/
          function(_2, k, T) {
            function u(d, o) {
              d == null && o == null ? (this.x = 0, this.y = 0) : (this.x = d, this.y = o);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setX = function(d) {
              this.x = d;
            }, u.prototype.setY = function(d) {
              this.y = d;
            }, u.prototype.getDifference = function(d) {
              return new DimensionD(this.x - d.x, this.y - d.y);
            }, u.prototype.getCopy = function() {
              return new u(this.x, this.y);
            }, u.prototype.translate = function(d) {
              return this.x += d.width, this.y += d.height, this;
            }, _2.exports = u;
          },
          /* 6 */
          /***/
          function(_2, k, T) {
            var u = T(2), d = T(10), o = T(0), i2 = T(7), e2 = T(3), s = T(1), n = T(13), f = T(12), t = T(11);
            function a(c, h, N) {
              u.call(this, N), this.estimatedSize = d.MIN_VALUE, this.margin = o.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = c, h != null && h instanceof i2 ? this.graphManager = h : h != null && h instanceof Layout && (this.graphManager = h.graphManager);
            }
            a.prototype = Object.create(u.prototype);
            for (var l in u)
              a[l] = u[l];
            a.prototype.getNodes = function() {
              return this.nodes;
            }, a.prototype.getEdges = function() {
              return this.edges;
            }, a.prototype.getGraphManager = function() {
              return this.graphManager;
            }, a.prototype.getParent = function() {
              return this.parent;
            }, a.prototype.getLeft = function() {
              return this.left;
            }, a.prototype.getRight = function() {
              return this.right;
            }, a.prototype.getTop = function() {
              return this.top;
            }, a.prototype.getBottom = function() {
              return this.bottom;
            }, a.prototype.isConnected = function() {
              return this.isConnected;
            }, a.prototype.add = function(c, h, N) {
              if (h == null && N == null) {
                var g = c;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(g) > -1)
                  throw "Node already in graph!";
                return g.owner = this, this.getNodes().push(g), g;
              } else {
                var y = c;
                if (!(this.getNodes().indexOf(h) > -1 && this.getNodes().indexOf(N) > -1))
                  throw "Source or target not in graph!";
                if (!(h.owner == N.owner && h.owner == this))
                  throw "Both owners must be this graph!";
                return h.owner != N.owner ? null : (y.source = h, y.target = N, y.isInterGraph = false, this.getEdges().push(y), h.edges.push(y), N != h && N.edges.push(y), y);
              }
            }, a.prototype.remove = function(c) {
              var h = c;
              if (c instanceof e2) {
                if (h == null)
                  throw "Node is null!";
                if (!(h.owner != null && h.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var N = h.edges.slice(), g, y = N.length, A = 0; A < y; A++)
                  g = N[A], g.isInterGraph ? this.graphManager.remove(g) : g.source.owner.remove(g);
                var I = this.nodes.indexOf(h);
                if (I == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(I, 1);
              } else if (c instanceof s) {
                var g = c;
                if (g == null)
                  throw "Edge is null!";
                if (!(g.source != null && g.target != null))
                  throw "Source and/or target is null!";
                if (!(g.source.owner != null && g.target.owner != null && g.source.owner == this && g.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var P = g.source.edges.indexOf(g), Y = g.target.edges.indexOf(g);
                if (!(P > -1 && Y > -1))
                  throw "Source and/or target doesn't know this edge!";
                g.source.edges.splice(P, 1), g.target != g.source && g.target.edges.splice(Y, 1);
                var I = g.source.owner.getEdges().indexOf(g);
                if (I == -1)
                  throw "Not in owner's edge list!";
                g.source.owner.getEdges().splice(I, 1);
              }
            }, a.prototype.updateLeftTop = function() {
              for (var c = d.MAX_VALUE, h = d.MAX_VALUE, N, g, y, A = this.getNodes(), I = A.length, P = 0; P < I; P++) {
                var Y = A[P];
                N = Y.getTop(), g = Y.getLeft(), c > N && (c = N), h > g && (h = g);
              }
              return c == d.MAX_VALUE ? null : (A[0].getParent().paddingLeft != null ? y = A[0].getParent().paddingLeft : y = this.margin, this.left = h - y, this.top = c - y, new f(this.left, this.top));
            }, a.prototype.updateBounds = function(c) {
              for (var h = d.MAX_VALUE, N = -d.MAX_VALUE, g = d.MAX_VALUE, y = -d.MAX_VALUE, A, I, P, Y, S, H = this.nodes, Z = H.length, x = 0; x < Z; x++) {
                var ot = H[x];
                c && ot.child != null && ot.updateBounds(), A = ot.getLeft(), I = ot.getRight(), P = ot.getTop(), Y = ot.getBottom(), h > A && (h = A), N < I && (N = I), g > P && (g = P), y < Y && (y = Y);
              }
              var r = new n(h, g, N - h, y - g);
              h == d.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), H[0].getParent().paddingLeft != null ? S = H[0].getParent().paddingLeft : S = this.margin, this.left = r.x - S, this.right = r.x + r.width + S, this.top = r.y - S, this.bottom = r.y + r.height + S;
            }, a.calculateBounds = function(c) {
              for (var h = d.MAX_VALUE, N = -d.MAX_VALUE, g = d.MAX_VALUE, y = -d.MAX_VALUE, A, I, P, Y, S = c.length, H = 0; H < S; H++) {
                var Z = c[H];
                A = Z.getLeft(), I = Z.getRight(), P = Z.getTop(), Y = Z.getBottom(), h > A && (h = A), N < I && (N = I), g > P && (g = P), y < Y && (y = Y);
              }
              var x = new n(h, g, N - h, y - g);
              return x;
            }, a.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, a.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == d.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, a.prototype.calcEstimatedSize = function() {
              for (var c = 0, h = this.nodes, N = h.length, g = 0; g < N; g++) {
                var y = h[g];
                c += y.calcEstimatedSize();
              }
              return c == 0 ? this.estimatedSize = o.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = c / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, a.prototype.updateConnected = function() {
              var c = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var h = new t(), N = /* @__PURE__ */ new Set(), g = this.nodes[0], y, A, I = g.withChildren();
              for (I.forEach(function(x) {
                h.push(x), N.add(x);
              }); h.length !== 0; ) {
                g = h.shift(), y = g.getEdges();
                for (var P = y.length, Y = 0; Y < P; Y++) {
                  var S = y[Y];
                  if (A = S.getOtherEndInGraph(g, this), A != null && !N.has(A)) {
                    var H = A.withChildren();
                    H.forEach(function(x) {
                      h.push(x), N.add(x);
                    });
                  }
                }
              }
              if (this.isConnected = false, N.size >= this.nodes.length) {
                var Z = 0;
                N.forEach(function(x) {
                  x.owner == c && Z++;
                }), Z == this.nodes.length && (this.isConnected = true);
              }
            }, _2.exports = a;
          },
          /* 7 */
          /***/
          function(_2, k, T) {
            var u, d = T(1);
            function o(i2) {
              u = T(6), this.layout = i2, this.graphs = [], this.edges = [];
            }
            o.prototype.addRoot = function() {
              var i2 = this.layout.newGraph(), e2 = this.layout.newNode(null), s = this.add(i2, e2);
              return this.setRootGraph(s), this.rootGraph;
            }, o.prototype.add = function(i2, e2, s, n, f) {
              if (s == null && n == null && f == null) {
                if (i2 == null)
                  throw "Graph is null!";
                if (e2 == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(i2) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(i2), i2.parent != null)
                  throw "Already has a parent!";
                if (e2.child != null)
                  throw "Already has a child!";
                return i2.parent = e2, e2.child = i2, i2;
              } else {
                f = s, n = e2, s = i2;
                var t = n.getOwner(), a = f.getOwner();
                if (!(t != null && t.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(a != null && a.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t == a)
                  return s.isInterGraph = false, t.add(s, n, f);
                if (s.isInterGraph = true, s.source = n, s.target = f, this.edges.indexOf(s) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(s), !(s.source != null && s.target != null))
                  throw "Edge source and/or target is null!";
                if (!(s.source.edges.indexOf(s) == -1 && s.target.edges.indexOf(s) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return s.source.edges.push(s), s.target.edges.push(s), s;
              }
            }, o.prototype.remove = function(i2) {
              if (i2 instanceof u) {
                var e2 = i2;
                if (e2.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(e2 == this.rootGraph || e2.parent != null && e2.parent.graphManager == this))
                  throw "Invalid parent node!";
                var s = [];
                s = s.concat(e2.getEdges());
                for (var n, f = s.length, t = 0; t < f; t++)
                  n = s[t], e2.remove(n);
                var a = [];
                a = a.concat(e2.getNodes());
                var l;
                f = a.length;
                for (var t = 0; t < f; t++)
                  l = a[t], e2.remove(l);
                e2 == this.rootGraph && this.setRootGraph(null);
                var c = this.graphs.indexOf(e2);
                this.graphs.splice(c, 1), e2.parent = null;
              } else if (i2 instanceof d) {
                if (n = i2, n == null)
                  throw "Edge is null!";
                if (!n.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(n.source != null && n.target != null))
                  throw "Source and/or target is null!";
                if (!(n.source.edges.indexOf(n) != -1 && n.target.edges.indexOf(n) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var c = n.source.edges.indexOf(n);
                if (n.source.edges.splice(c, 1), c = n.target.edges.indexOf(n), n.target.edges.splice(c, 1), !(n.source.owner != null && n.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (n.source.owner.getGraphManager().edges.indexOf(n) == -1)
                  throw "Not in owner graph manager's edge list!";
                var c = n.source.owner.getGraphManager().edges.indexOf(n);
                n.source.owner.getGraphManager().edges.splice(c, 1);
              }
            }, o.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, o.prototype.getGraphs = function() {
              return this.graphs;
            }, o.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var i2 = [], e2 = this.getGraphs(), s = e2.length, n = 0; n < s; n++)
                  i2 = i2.concat(e2[n].getNodes());
                this.allNodes = i2;
              }
              return this.allNodes;
            }, o.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, o.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, o.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, o.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var i2 = [], e2 = this.getGraphs();
                e2.length;
                for (var s = 0; s < e2.length; s++)
                  i2 = i2.concat(e2[s].getEdges());
                i2 = i2.concat(this.edges), this.allEdges = i2;
              }
              return this.allEdges;
            }, o.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, o.prototype.setAllNodesToApplyGravitation = function(i2) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = i2;
            }, o.prototype.getRoot = function() {
              return this.rootGraph;
            }, o.prototype.setRootGraph = function(i2) {
              if (i2.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = i2, i2.parent == null && (i2.parent = this.layout.newNode("Root node"));
            }, o.prototype.getLayout = function() {
              return this.layout;
            }, o.prototype.isOneAncestorOfOther = function(i2, e2) {
              if (!(i2 != null && e2 != null))
                throw "assert failed";
              if (i2 == e2)
                return true;
              var s = i2.getOwner(), n;
              do {
                if (n = s.getParent(), n == null)
                  break;
                if (n == e2)
                  return true;
                if (s = n.getOwner(), s == null)
                  break;
              } while (true);
              s = e2.getOwner();
              do {
                if (n = s.getParent(), n == null)
                  break;
                if (n == i2)
                  return true;
                if (s = n.getOwner(), s == null)
                  break;
              } while (true);
              return false;
            }, o.prototype.calcLowestCommonAncestors = function() {
              for (var i2, e2, s, n, f, t = this.getAllEdges(), a = t.length, l = 0; l < a; l++) {
                if (i2 = t[l], e2 = i2.source, s = i2.target, i2.lca = null, i2.sourceInLca = e2, i2.targetInLca = s, e2 == s) {
                  i2.lca = e2.getOwner();
                  continue;
                }
                for (n = e2.getOwner(); i2.lca == null; ) {
                  for (i2.targetInLca = s, f = s.getOwner(); i2.lca == null; ) {
                    if (f == n) {
                      i2.lca = f;
                      break;
                    }
                    if (f == this.rootGraph)
                      break;
                    if (i2.lca != null)
                      throw "assert failed";
                    i2.targetInLca = f.getParent(), f = i2.targetInLca.getOwner();
                  }
                  if (n == this.rootGraph)
                    break;
                  i2.lca == null && (i2.sourceInLca = n.getParent(), n = i2.sourceInLca.getOwner());
                }
                if (i2.lca == null)
                  throw "assert failed";
              }
            }, o.prototype.calcLowestCommonAncestor = function(i2, e2) {
              if (i2 == e2)
                return i2.getOwner();
              var s = i2.getOwner();
              do {
                if (s == null)
                  break;
                var n = e2.getOwner();
                do {
                  if (n == null)
                    break;
                  if (n == s)
                    return n;
                  n = n.getParent().getOwner();
                } while (true);
                s = s.getParent().getOwner();
              } while (true);
              return s;
            }, o.prototype.calcInclusionTreeDepths = function(i2, e2) {
              i2 == null && e2 == null && (i2 = this.rootGraph, e2 = 1);
              for (var s, n = i2.getNodes(), f = n.length, t = 0; t < f; t++)
                s = n[t], s.inclusionTreeDepth = e2, s.child != null && this.calcInclusionTreeDepths(s.child, e2 + 1);
            }, o.prototype.includesInvalidEdge = function() {
              for (var i2, e2 = [], s = this.edges.length, n = 0; n < s; n++)
                i2 = this.edges[n], this.isOneAncestorOfOther(i2.source, i2.target) && e2.push(i2);
              for (var n = 0; n < e2.length; n++)
                this.remove(e2[n]);
              return false;
            }, _2.exports = o;
          },
          /* 8 */
          /***/
          function(_2, k, T) {
            var u = T(12);
            function d() {
            }
            d.calcSeparationAmount = function(o, i2, e2, s) {
              if (!o.intersects(i2))
                throw "assert failed";
              var n = new Array(2);
              this.decideDirectionsForOverlappingNodes(o, i2, n), e2[0] = Math.min(o.getRight(), i2.getRight()) - Math.max(o.x, i2.x), e2[1] = Math.min(o.getBottom(), i2.getBottom()) - Math.max(o.y, i2.y), o.getX() <= i2.getX() && o.getRight() >= i2.getRight() ? e2[0] += Math.min(i2.getX() - o.getX(), o.getRight() - i2.getRight()) : i2.getX() <= o.getX() && i2.getRight() >= o.getRight() && (e2[0] += Math.min(o.getX() - i2.getX(), i2.getRight() - o.getRight())), o.getY() <= i2.getY() && o.getBottom() >= i2.getBottom() ? e2[1] += Math.min(i2.getY() - o.getY(), o.getBottom() - i2.getBottom()) : i2.getY() <= o.getY() && i2.getBottom() >= o.getBottom() && (e2[1] += Math.min(o.getY() - i2.getY(), i2.getBottom() - o.getBottom()));
              var f = Math.abs((i2.getCenterY() - o.getCenterY()) / (i2.getCenterX() - o.getCenterX()));
              i2.getCenterY() === o.getCenterY() && i2.getCenterX() === o.getCenterX() && (f = 1);
              var t = f * e2[0], a = e2[1] / f;
              e2[0] < a ? a = e2[0] : t = e2[1], e2[0] = -1 * n[0] * (a / 2 + s), e2[1] = -1 * n[1] * (t / 2 + s);
            }, d.decideDirectionsForOverlappingNodes = function(o, i2, e2) {
              o.getCenterX() < i2.getCenterX() ? e2[0] = -1 : e2[0] = 1, o.getCenterY() < i2.getCenterY() ? e2[1] = -1 : e2[1] = 1;
            }, d.getIntersection2 = function(o, i2, e2) {
              var s = o.getCenterX(), n = o.getCenterY(), f = i2.getCenterX(), t = i2.getCenterY();
              if (o.intersects(i2))
                return e2[0] = s, e2[1] = n, e2[2] = f, e2[3] = t, true;
              var a = o.getX(), l = o.getY(), c = o.getRight(), h = o.getX(), N = o.getBottom(), g = o.getRight(), y = o.getWidthHalf(), A = o.getHeightHalf(), I = i2.getX(), P = i2.getY(), Y = i2.getRight(), S = i2.getX(), H = i2.getBottom(), Z = i2.getRight(), x = i2.getWidthHalf(), ot = i2.getHeightHalf(), r = false, E = false;
              if (s === f) {
                if (n > t)
                  return e2[0] = s, e2[1] = l, e2[2] = f, e2[3] = H, false;
                if (n < t)
                  return e2[0] = s, e2[1] = N, e2[2] = f, e2[3] = P, false;
              } else if (n === t) {
                if (s > f)
                  return e2[0] = a, e2[1] = n, e2[2] = Y, e2[3] = t, false;
                if (s < f)
                  return e2[0] = c, e2[1] = n, e2[2] = I, e2[3] = t, false;
              } else {
                var p = o.height / o.width, v = i2.height / i2.width, m = (t - n) / (f - s), O = void 0, M = void 0, C = void 0, F = void 0, U = void 0, z = void 0;
                if (-p === m ? s > f ? (e2[0] = h, e2[1] = N, r = true) : (e2[0] = c, e2[1] = l, r = true) : p === m && (s > f ? (e2[0] = a, e2[1] = l, r = true) : (e2[0] = g, e2[1] = N, r = true)), -v === m ? f > s ? (e2[2] = S, e2[3] = H, E = true) : (e2[2] = Y, e2[3] = P, E = true) : v === m && (f > s ? (e2[2] = I, e2[3] = P, E = true) : (e2[2] = Z, e2[3] = H, E = true)), r && E)
                  return false;
                if (s > f ? n > t ? (O = this.getCardinalDirection(p, m, 4), M = this.getCardinalDirection(v, m, 2)) : (O = this.getCardinalDirection(-p, m, 3), M = this.getCardinalDirection(-v, m, 1)) : n > t ? (O = this.getCardinalDirection(-p, m, 1), M = this.getCardinalDirection(-v, m, 3)) : (O = this.getCardinalDirection(p, m, 2), M = this.getCardinalDirection(v, m, 4)), !r)
                  switch (O) {
                    case 1:
                      F = l, C = s + -A / m, e2[0] = C, e2[1] = F;
                      break;
                    case 2:
                      C = g, F = n + y * m, e2[0] = C, e2[1] = F;
                      break;
                    case 3:
                      F = N, C = s + A / m, e2[0] = C, e2[1] = F;
                      break;
                    case 4:
                      C = h, F = n + -y * m, e2[0] = C, e2[1] = F;
                      break;
                  }
                if (!E)
                  switch (M) {
                    case 1:
                      z = P, U = f + -ot / m, e2[2] = U, e2[3] = z;
                      break;
                    case 2:
                      U = Z, z = t + x * m, e2[2] = U, e2[3] = z;
                      break;
                    case 3:
                      z = H, U = f + ot / m, e2[2] = U, e2[3] = z;
                      break;
                    case 4:
                      U = S, z = t + -x * m, e2[2] = U, e2[3] = z;
                      break;
                  }
              }
              return false;
            }, d.getCardinalDirection = function(o, i2, e2) {
              return o > i2 ? e2 : 1 + e2 % 4;
            }, d.getIntersection = function(o, i2, e2, s) {
              if (s == null)
                return this.getIntersection2(o, i2, e2);
              var n = o.x, f = o.y, t = i2.x, a = i2.y, l = e2.x, c = e2.y, h = s.x, N = s.y, g = void 0, y = void 0, A = void 0, I = void 0, P = void 0, Y = void 0, S = void 0, H = void 0, Z = void 0;
              return A = a - f, P = n - t, S = t * f - n * a, I = N - c, Y = l - h, H = h * c - l * N, Z = A * Y - I * P, Z === 0 ? null : (g = (P * H - Y * S) / Z, y = (I * S - A * H) / Z, new u(g, y));
            }, d.angleOfVector = function(o, i2, e2, s) {
              var n = void 0;
              return o !== e2 ? (n = Math.atan((s - i2) / (e2 - o)), e2 < o ? n += Math.PI : s < i2 && (n += this.TWO_PI)) : s < i2 ? n = this.ONE_AND_HALF_PI : n = this.HALF_PI, n;
            }, d.doIntersect = function(o, i2, e2, s) {
              var n = o.x, f = o.y, t = i2.x, a = i2.y, l = e2.x, c = e2.y, h = s.x, N = s.y, g = (t - n) * (N - c) - (h - l) * (a - f);
              if (g === 0)
                return false;
              var y = ((N - c) * (h - n) + (l - h) * (N - f)) / g, A = ((f - a) * (h - n) + (t - n) * (N - f)) / g;
              return 0 < y && y < 1 && 0 < A && A < 1;
            }, d.findCircleLineIntersections = function(o, i2, e2, s, n, f, t) {
              var a = (e2 - o) * (e2 - o) + (s - i2) * (s - i2), l = 2 * ((o - n) * (e2 - o) + (i2 - f) * (s - i2)), c = (o - n) * (o - n) + (i2 - f) * (i2 - f) - t * t, h = l * l - 4 * a * c;
              if (h >= 0) {
                var N = (-l + Math.sqrt(l * l - 4 * a * c)) / (2 * a), g = (-l - Math.sqrt(l * l - 4 * a * c)) / (2 * a), y = null;
                return N >= 0 && N <= 1 ? [N] : g >= 0 && g <= 1 ? [g] : y;
              } else return null;
            }, d.HALF_PI = 0.5 * Math.PI, d.ONE_AND_HALF_PI = 1.5 * Math.PI, d.TWO_PI = 2 * Math.PI, d.THREE_PI = 3 * Math.PI, _2.exports = d;
          },
          /* 9 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.sign = function(d) {
              return d > 0 ? 1 : d < 0 ? -1 : 0;
            }, u.floor = function(d) {
              return d < 0 ? Math.ceil(d) : Math.floor(d);
            }, u.ceil = function(d) {
              return d < 0 ? Math.floor(d) : Math.ceil(d);
            }, _2.exports = u;
          },
          /* 10 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.MAX_VALUE = 2147483647, u.MIN_VALUE = -2147483648, _2.exports = u;
          },
          /* 11 */
          /***/
          function(_2, k, T) {
            var u = /* @__PURE__ */ function() {
              function n(f, t) {
                for (var a = 0; a < t.length; a++) {
                  var l = t[a];
                  l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(f, l.key, l);
                }
              }
              return function(f, t, a) {
                return t && n(f.prototype, t), a && n(f, a), f;
              };
            }();
            function d(n, f) {
              if (!(n instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function(n) {
              return { value: n, next: null, prev: null };
            }, i2 = function(n, f, t, a) {
              return n !== null ? n.next = f : a.head = f, t !== null ? t.prev = f : a.tail = f, f.prev = n, f.next = t, a.length++, f;
            }, e2 = function(n, f) {
              var t = n.prev, a = n.next;
              return t !== null ? t.next = a : f.head = a, a !== null ? a.prev = t : f.tail = t, n.prev = n.next = null, f.length--, n;
            }, s = function() {
              function n(f) {
                var t = this;
                d(this, n), this.length = 0, this.head = null, this.tail = null, f == null ? void 0 : f.forEach(function(a) {
                  return t.push(a);
                });
              }
              return u(n, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(f, t) {
                  return i2(t.prev, o(f), t, this);
                }
              }, {
                key: "insertAfter",
                value: function(f, t) {
                  return i2(t, o(f), t.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(f, t) {
                  return i2(t.prev, f, t, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(f, t) {
                  return i2(t, f, t.next, this);
                }
              }, {
                key: "push",
                value: function(f) {
                  return i2(this.tail, o(f), null, this);
                }
              }, {
                key: "unshift",
                value: function(f) {
                  return i2(null, o(f), this.head, this);
                }
              }, {
                key: "remove",
                value: function(f) {
                  return e2(f, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return e2(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return e2(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return e2(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return e2(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(f) {
                  if (f <= this.length()) {
                    for (var t = 1, a = this.head; t < f; )
                      a = a.next, t++;
                    return a.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(f, t) {
                  if (f <= this.length()) {
                    for (var a = 1, l = this.head; a < f; )
                      l = l.next, a++;
                    l.value = t;
                  }
                }
              }]), n;
            }();
            _2.exports = s;
          },
          /* 12 */
          /***/
          function(_2, k, T) {
            function u(d, o, i2) {
              this.x = null, this.y = null, d == null && o == null && i2 == null ? (this.x = 0, this.y = 0) : typeof d == "number" && typeof o == "number" && i2 == null ? (this.x = d, this.y = o) : d.constructor.name == "Point" && o == null && i2 == null && (i2 = d, this.x = i2.x, this.y = i2.y);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.getLocation = function() {
              return new u(this.x, this.y);
            }, u.prototype.setLocation = function(d, o, i2) {
              d.constructor.name == "Point" && o == null && i2 == null ? (i2 = d, this.setLocation(i2.x, i2.y)) : typeof d == "number" && typeof o == "number" && i2 == null && (parseInt(d) == d && parseInt(o) == o ? this.move(d, o) : (this.x = Math.floor(d + 0.5), this.y = Math.floor(o + 0.5)));
            }, u.prototype.move = function(d, o) {
              this.x = d, this.y = o;
            }, u.prototype.translate = function(d, o) {
              this.x += d, this.y += o;
            }, u.prototype.equals = function(d) {
              if (d.constructor.name == "Point") {
                var o = d;
                return this.x == o.x && this.y == o.y;
              }
              return this == d;
            }, u.prototype.toString = function() {
              return new u().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, _2.exports = u;
          },
          /* 13 */
          /***/
          function(_2, k, T) {
            function u(d, o, i2, e2) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, d != null && o != null && i2 != null && e2 != null && (this.x = d, this.y = o, this.width = i2, this.height = e2);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.setX = function(d) {
              this.x = d;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setY = function(d) {
              this.y = d;
            }, u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(d) {
              this.width = d;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(d) {
              this.height = d;
            }, u.prototype.getRight = function() {
              return this.x + this.width;
            }, u.prototype.getBottom = function() {
              return this.y + this.height;
            }, u.prototype.intersects = function(d) {
              return !(this.getRight() < d.x || this.getBottom() < d.y || d.getRight() < this.x || d.getBottom() < this.y);
            }, u.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, u.prototype.getMinX = function() {
              return this.getX();
            }, u.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, u.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, u.prototype.getMinY = function() {
              return this.getY();
            }, u.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, u.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, u.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, _2.exports = u;
          },
          /* 14 */
          /***/
          function(_2, k, T) {
            var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
              return typeof o;
            } : function(o) {
              return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            };
            function d() {
            }
            d.lastID = 0, d.createID = function(o) {
              return d.isPrimitive(o) ? o : (o.uniqueID != null || (o.uniqueID = d.getString(), d.lastID++), o.uniqueID);
            }, d.getString = function(o) {
              return o == null && (o = d.lastID), "Object#" + o;
            }, d.isPrimitive = function(o) {
              var i2 = typeof o > "u" ? "undefined" : u(o);
              return o == null || i2 != "object" && i2 != "function";
            }, _2.exports = d;
          },
          /* 15 */
          /***/
          function(_2, k, T) {
            function u(l) {
              if (Array.isArray(l)) {
                for (var c = 0, h = Array(l.length); c < l.length; c++)
                  h[c] = l[c];
                return h;
              } else
                return Array.from(l);
            }
            var d = T(0), o = T(7), i2 = T(3), e2 = T(1), s = T(6), n = T(5), f = T(17), t = T(29);
            function a(l) {
              t.call(this), this.layoutQuality = d.QUALITY, this.createBendsAsNeeded = d.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = d.DEFAULT_INCREMENTAL, this.animationOnLayout = d.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = d.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = d.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = d.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, l != null && (this.isRemoteUse = l);
            }
            a.RANDOM_SEED = 1, a.prototype = Object.create(t.prototype), a.prototype.getGraphManager = function() {
              return this.graphManager;
            }, a.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, a.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, a.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, a.prototype.newGraphManager = function() {
              var l = new o(this);
              return this.graphManager = l, l;
            }, a.prototype.newGraph = function(l) {
              return new s(null, this.graphManager, l);
            }, a.prototype.newNode = function(l) {
              return new i2(this.graphManager, l);
            }, a.prototype.newEdge = function(l) {
              return new e2(null, null, l);
            }, a.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, a.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var l;
              return this.checkLayoutSuccess() ? l = false : l = this.layout(), d.ANIMATE === "during" ? false : (l && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, l);
            }, a.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, a.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var l = this.graphManager.getAllEdges(), c = 0; c < l.length; c++)
                  l[c];
                for (var h = this.graphManager.getRoot().getNodes(), c = 0; c < h.length; c++)
                  h[c];
                this.update(this.graphManager.getRoot());
              }
            }, a.prototype.update = function(l) {
              if (l == null)
                this.update2();
              else if (l instanceof i2) {
                var c = l;
                if (c.getChild() != null)
                  for (var h = c.getChild().getNodes(), N = 0; N < h.length; N++)
                    update(h[N]);
                if (c.vGraphObject != null) {
                  var g = c.vGraphObject;
                  g.update(c);
                }
              } else if (l instanceof e2) {
                var y = l;
                if (y.vGraphObject != null) {
                  var A = y.vGraphObject;
                  A.update(y);
                }
              } else if (l instanceof s) {
                var I = l;
                if (I.vGraphObject != null) {
                  var P = I.vGraphObject;
                  P.update(I);
                }
              }
            }, a.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = d.QUALITY, this.animationDuringLayout = d.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = d.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = d.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = d.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = d.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = d.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, a.prototype.transform = function(l) {
              if (l == null)
                this.transform(new n(0, 0));
              else {
                var c = new f(), h = this.graphManager.getRoot().updateLeftTop();
                if (h != null) {
                  c.setWorldOrgX(l.x), c.setWorldOrgY(l.y), c.setDeviceOrgX(h.x), c.setDeviceOrgY(h.y);
                  for (var N = this.getAllNodes(), g, y = 0; y < N.length; y++)
                    g = N[y], g.transform(c);
                }
              }
            }, a.prototype.positionNodesRandomly = function(l) {
              if (l == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var c, h, N = l.getNodes(), g = 0; g < N.length; g++)
                  c = N[g], h = c.getChild(), h == null || h.getNodes().length == 0 ? c.scatter() : (this.positionNodesRandomly(h), c.updateBounds());
            }, a.prototype.getFlatForest = function() {
              for (var l = [], c = true, h = this.graphManager.getRoot().getNodes(), N = true, g = 0; g < h.length; g++)
                h[g].getChild() != null && (N = false);
              if (!N)
                return l;
              var y = /* @__PURE__ */ new Set(), A = [], I = /* @__PURE__ */ new Map(), P = [];
              for (P = P.concat(h); P.length > 0 && c; ) {
                for (A.push(P[0]); A.length > 0 && c; ) {
                  var Y = A[0];
                  A.splice(0, 1), y.add(Y);
                  for (var S = Y.getEdges(), g = 0; g < S.length; g++) {
                    var H = S[g].getOtherEnd(Y);
                    if (I.get(Y) != H)
                      if (!y.has(H))
                        A.push(H), I.set(H, Y);
                      else {
                        c = false;
                        break;
                      }
                  }
                }
                if (!c)
                  l = [];
                else {
                  var Z = [].concat(u(y));
                  l.push(Z);
                  for (var g = 0; g < Z.length; g++) {
                    var x = Z[g], ot = P.indexOf(x);
                    ot > -1 && P.splice(ot, 1);
                  }
                  y = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map();
                }
              }
              return l;
            }, a.prototype.createDummyNodesForBendpoints = function(l) {
              for (var c = [], h = l.source, N = this.graphManager.calcLowestCommonAncestor(l.source, l.target), g = 0; g < l.bendpoints.length; g++) {
                var y = this.newNode(null);
                y.setRect(new Point(0, 0), new Dimension(1, 1)), N.add(y);
                var A = this.newEdge(null);
                this.graphManager.add(A, h, y), c.add(y), h = y;
              }
              var A = this.newEdge(null);
              return this.graphManager.add(A, h, l.target), this.edgeToDummyNodes.set(l, c), l.isInterGraph() ? this.graphManager.remove(l) : N.remove(l), c;
            }, a.prototype.createBendpointsFromDummyNodes = function() {
              var l = [];
              l = l.concat(this.graphManager.getAllEdges()), l = [].concat(u(this.edgeToDummyNodes.keys())).concat(l);
              for (var c = 0; c < l.length; c++) {
                var h = l[c];
                if (h.bendpoints.length > 0) {
                  for (var N = this.edgeToDummyNodes.get(h), g = 0; g < N.length; g++) {
                    var y = N[g], A = new n(y.getCenterX(), y.getCenterY()), I = h.bendpoints.get(g);
                    I.x = A.x, I.y = A.y, y.getOwner().remove(y);
                  }
                  this.graphManager.add(h, h.source, h.target);
                }
              }
            }, a.transform = function(l, c, h, N) {
              if (h != null && N != null) {
                var g = c;
                if (l <= 50) {
                  var y = c / h;
                  g -= (c - y) / 50 * (50 - l);
                } else {
                  var A = c * N;
                  g += (A - c) / 50 * (l - 50);
                }
                return g;
              } else {
                var I, P;
                return l <= 50 ? (I = 9 * c / 500, P = c / 10) : (I = 9 * c / 50, P = -8 * c), I * l + P;
              }
            }, a.findCenterOfTree = function(l) {
              var c = [];
              c = c.concat(l);
              var h = [], N = /* @__PURE__ */ new Map(), g = false, y = null;
              (c.length == 1 || c.length == 2) && (g = true, y = c[0]);
              for (var A = 0; A < c.length; A++) {
                var I = c[A], P = I.getNeighborsList().size;
                N.set(I, I.getNeighborsList().size), P == 1 && h.push(I);
              }
              var Y = [];
              for (Y = Y.concat(h); !g; ) {
                var S = [];
                S = S.concat(Y), Y = [];
                for (var A = 0; A < c.length; A++) {
                  var I = c[A], H = c.indexOf(I);
                  H >= 0 && c.splice(H, 1);
                  var Z = I.getNeighborsList();
                  Z.forEach(function(r) {
                    if (h.indexOf(r) < 0) {
                      var E = N.get(r), p = E - 1;
                      p == 1 && Y.push(r), N.set(r, p);
                    }
                  });
                }
                h = h.concat(Y), (c.length == 1 || c.length == 2) && (g = true, y = c[0]);
              }
              return y;
            }, a.prototype.setGraphManager = function(l) {
              this.graphManager = l;
            }, _2.exports = a;
          },
          /* 16 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.seed = 1, u.x = 0, u.nextDouble = function() {
              return u.x = Math.sin(u.seed++) * 1e4, u.x - Math.floor(u.x);
            }, _2.exports = u;
          },
          /* 17 */
          /***/
          function(_2, k, T) {
            var u = T(5);
            function d(o, i2) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            d.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, d.prototype.setWorldOrgX = function(o) {
              this.lworldOrgX = o;
            }, d.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, d.prototype.setWorldOrgY = function(o) {
              this.lworldOrgY = o;
            }, d.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, d.prototype.setWorldExtX = function(o) {
              this.lworldExtX = o;
            }, d.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, d.prototype.setWorldExtY = function(o) {
              this.lworldExtY = o;
            }, d.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, d.prototype.setDeviceOrgX = function(o) {
              this.ldeviceOrgX = o;
            }, d.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, d.prototype.setDeviceOrgY = function(o) {
              this.ldeviceOrgY = o;
            }, d.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, d.prototype.setDeviceExtX = function(o) {
              this.ldeviceExtX = o;
            }, d.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, d.prototype.setDeviceExtY = function(o) {
              this.ldeviceExtY = o;
            }, d.prototype.transformX = function(o) {
              var i2 = 0, e2 = this.lworldExtX;
              return e2 != 0 && (i2 = this.ldeviceOrgX + (o - this.lworldOrgX) * this.ldeviceExtX / e2), i2;
            }, d.prototype.transformY = function(o) {
              var i2 = 0, e2 = this.lworldExtY;
              return e2 != 0 && (i2 = this.ldeviceOrgY + (o - this.lworldOrgY) * this.ldeviceExtY / e2), i2;
            }, d.prototype.inverseTransformX = function(o) {
              var i2 = 0, e2 = this.ldeviceExtX;
              return e2 != 0 && (i2 = this.lworldOrgX + (o - this.ldeviceOrgX) * this.lworldExtX / e2), i2;
            }, d.prototype.inverseTransformY = function(o) {
              var i2 = 0, e2 = this.ldeviceExtY;
              return e2 != 0 && (i2 = this.lworldOrgY + (o - this.ldeviceOrgY) * this.lworldExtY / e2), i2;
            }, d.prototype.inverseTransformPoint = function(o) {
              var i2 = new u(this.inverseTransformX(o.x), this.inverseTransformY(o.y));
              return i2;
            }, _2.exports = d;
          },
          /* 18 */
          /***/
          function(_2, k, T) {
            function u(t) {
              if (Array.isArray(t)) {
                for (var a = 0, l = Array(t.length); a < t.length; a++)
                  l[a] = t[a];
                return l;
              } else
                return Array.from(t);
            }
            var d = T(15), o = T(4), i2 = T(0), e2 = T(8), s = T(9);
            function n() {
              d.call(this), this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = o.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o.MAX_ITERATIONS;
            }
            n.prototype = Object.create(d.prototype);
            for (var f in d)
              n[f] = d[f];
            n.prototype.initParameters = function() {
              d.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, n.prototype.calcIdealEdgeLengths = function() {
              for (var t, a, l, c, h, N, g, y = this.getGraphManager().getAllEdges(), A = 0; A < y.length; A++)
                t = y[A], a = t.idealLength, t.isInterGraph && (c = t.getSource(), h = t.getTarget(), N = t.getSourceInLca().getEstimatedSize(), g = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += N + g - 2 * i2.SIMPLE_NODE_SIZE), l = t.getLca().getInclusionTreeDepth(), t.idealLength += a * o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + h.getInclusionTreeDepth() - 2 * l));
            }, n.prototype.initSpringEmbedder = function() {
              var t = this.getAllNodes().length;
              this.incremental ? (t > o.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - o.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > o.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o.COOLING_ADAPTATION_FACTOR, 1 - (t - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, n.prototype.calcSpringForces = function() {
              for (var t = this.getAllEdges(), a, l = 0; l < t.length; l++)
                a = t[l], this.calcSpringForce(a, a.idealLength);
            }, n.prototype.calcRepulsionForces = function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, l, c, h, N, g = this.getAllNodes(), y;
              if (this.useFRGridVariant)
                for (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && t && this.updateGrid(), y = /* @__PURE__ */ new Set(), l = 0; l < g.length; l++)
                  h = g[l], this.calculateRepulsionForceOfANode(h, y, t, a), y.add(h);
              else
                for (l = 0; l < g.length; l++)
                  for (h = g[l], c = l + 1; c < g.length; c++)
                    N = g[c], h.getOwner() == N.getOwner() && this.calcRepulsionForce(h, N);
            }, n.prototype.calcGravitationalForces = function() {
              for (var t, a = this.getAllNodesToApplyGravitation(), l = 0; l < a.length; l++)
                t = a[l], this.calcGravitationalForce(t);
            }, n.prototype.moveNodes = function() {
              for (var t = this.getAllNodes(), a, l = 0; l < t.length; l++)
                a = t[l], a.move();
            }, n.prototype.calcSpringForce = function(t, a) {
              var l = t.getSource(), c = t.getTarget(), h, N, g, y;
              if (this.uniformLeafNodeSizes && l.getChild() == null && c.getChild() == null)
                t.updateLengthSimple();
              else if (t.updateLength(), t.isOverlapingSourceAndTarget)
                return;
              h = t.getLength(), h != 0 && (N = t.edgeElasticity * (h - a), g = N * (t.lengthX / h), y = N * (t.lengthY / h), l.springForceX += g, l.springForceY += y, c.springForceX -= g, c.springForceY -= y);
            }, n.prototype.calcRepulsionForce = function(t, a) {
              var l = t.getRect(), c = a.getRect(), h = new Array(2), N = new Array(4), g, y, A, I, P, Y, S;
              if (l.intersects(c)) {
                e2.calcSeparationAmount(l, c, h, o.DEFAULT_EDGE_LENGTH / 2), Y = 2 * h[0], S = 2 * h[1];
                var H = t.noOfChildren * a.noOfChildren / (t.noOfChildren + a.noOfChildren);
                t.repulsionForceX -= H * Y, t.repulsionForceY -= H * S, a.repulsionForceX += H * Y, a.repulsionForceY += H * S;
              } else
                this.uniformLeafNodeSizes && t.getChild() == null && a.getChild() == null ? (g = c.getCenterX() - l.getCenterX(), y = c.getCenterY() - l.getCenterY()) : (e2.getIntersection(l, c, N), g = N[2] - N[0], y = N[3] - N[1]), Math.abs(g) < o.MIN_REPULSION_DIST && (g = s.sign(g) * o.MIN_REPULSION_DIST), Math.abs(y) < o.MIN_REPULSION_DIST && (y = s.sign(y) * o.MIN_REPULSION_DIST), A = g * g + y * y, I = Math.sqrt(A), P = (t.nodeRepulsion / 2 + a.nodeRepulsion / 2) * t.noOfChildren * a.noOfChildren / A, Y = P * g / I, S = P * y / I, t.repulsionForceX -= Y, t.repulsionForceY -= S, a.repulsionForceX += Y, a.repulsionForceY += S;
            }, n.prototype.calcGravitationalForce = function(t) {
              var a, l, c, h, N, g, y, A;
              a = t.getOwner(), l = (a.getRight() + a.getLeft()) / 2, c = (a.getTop() + a.getBottom()) / 2, h = t.getCenterX() - l, N = t.getCenterY() - c, g = Math.abs(h) + t.getWidth() / 2, y = Math.abs(N) + t.getHeight() / 2, t.getOwner() == this.graphManager.getRoot() ? (A = a.getEstimatedSize() * this.gravityRangeFactor, (g > A || y > A) && (t.gravitationForceX = -this.gravityConstant * h, t.gravitationForceY = -this.gravityConstant * N)) : (A = a.getEstimatedSize() * this.compoundGravityRangeFactor, (g > A || y > A) && (t.gravitationForceX = -this.gravityConstant * h * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * N * this.compoundGravityConstant));
            }, n.prototype.isConverged = function() {
              var t, a = false;
              return this.totalIterations > this.maxIterations / 3 && (a = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || a;
            }, n.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, n.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t, a = this.graphManager.getAllNodes(), l = 0; l < a.length; l++)
                t = a[l], t.noOfChildren = t.getNoOfChildren();
            }, n.prototype.calcGrid = function(t) {
              var a = 0, l = 0;
              a = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), l = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
              for (var c = new Array(a), h = 0; h < a; h++)
                c[h] = new Array(l);
              for (var h = 0; h < a; h++)
                for (var N = 0; N < l; N++)
                  c[h][N] = new Array();
              return c;
            }, n.prototype.addNodeToGrid = function(t, a, l) {
              var c = 0, h = 0, N = 0, g = 0;
              c = parseInt(Math.floor((t.getRect().x - a) / this.repulsionRange)), h = parseInt(Math.floor((t.getRect().width + t.getRect().x - a) / this.repulsionRange)), N = parseInt(Math.floor((t.getRect().y - l) / this.repulsionRange)), g = parseInt(Math.floor((t.getRect().height + t.getRect().y - l) / this.repulsionRange));
              for (var y = c; y <= h; y++)
                for (var A = N; A <= g; A++)
                  this.grid[y][A].push(t), t.setGridCoordinates(c, h, N, g);
            }, n.prototype.updateGrid = function() {
              var t, a, l = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < l.length; t++)
                a = l[t], this.addNodeToGrid(a, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, n.prototype.calculateRepulsionForceOfANode = function(t, a, l, c) {
              if (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && l || c) {
                var h = /* @__PURE__ */ new Set();
                t.surrounding = new Array();
                for (var N, g = this.grid, y = t.startX - 1; y < t.finishX + 2; y++)
                  for (var A = t.startY - 1; A < t.finishY + 2; A++)
                    if (!(y < 0 || A < 0 || y >= g.length || A >= g[0].length)) {
                      for (var I = 0; I < g[y][A].length; I++)
                        if (N = g[y][A][I], !(t.getOwner() != N.getOwner() || t == N) && !a.has(N) && !h.has(N)) {
                          var P = Math.abs(t.getCenterX() - N.getCenterX()) - (t.getWidth() / 2 + N.getWidth() / 2), Y = Math.abs(t.getCenterY() - N.getCenterY()) - (t.getHeight() / 2 + N.getHeight() / 2);
                          P <= this.repulsionRange && Y <= this.repulsionRange && h.add(N);
                        }
                    }
                t.surrounding = [].concat(u(h));
              }
              for (y = 0; y < t.surrounding.length; y++)
                this.calcRepulsionForce(t, t.surrounding[y]);
            }, n.prototype.calcRepulsionRange = function() {
              return 0;
            }, _2.exports = n;
          },
          /* 19 */
          /***/
          function(_2, k, T) {
            var u = T(1), d = T(4);
            function o(e2, s, n) {
              u.call(this, e2, s, n), this.idealLength = d.DEFAULT_EDGE_LENGTH, this.edgeElasticity = d.DEFAULT_SPRING_STRENGTH;
            }
            o.prototype = Object.create(u.prototype);
            for (var i2 in u)
              o[i2] = u[i2];
            _2.exports = o;
          },
          /* 20 */
          /***/
          function(_2, k, T) {
            var u = T(3), d = T(4);
            function o(e2, s, n, f) {
              u.call(this, e2, s, n, f), this.nodeRepulsion = d.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            o.prototype = Object.create(u.prototype);
            for (var i2 in u)
              o[i2] = u[i2];
            o.prototype.setGridCoordinates = function(e2, s, n, f) {
              this.startX = e2, this.finishX = s, this.startY = n, this.finishY = f;
            }, _2.exports = o;
          },
          /* 21 */
          /***/
          function(_2, k, T) {
            function u(d, o) {
              this.width = 0, this.height = 0, d !== null && o !== null && (this.height = o, this.width = d);
            }
            u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(d) {
              this.width = d;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(d) {
              this.height = d;
            }, _2.exports = u;
          },
          /* 22 */
          /***/
          function(_2, k, T) {
            var u = T(14);
            function d() {
              this.map = {}, this.keys = [];
            }
            d.prototype.put = function(o, i2) {
              var e2 = u.createID(o);
              this.contains(e2) || (this.map[e2] = i2, this.keys.push(o));
            }, d.prototype.contains = function(o) {
              return u.createID(o), this.map[o] != null;
            }, d.prototype.get = function(o) {
              var i2 = u.createID(o);
              return this.map[i2];
            }, d.prototype.keySet = function() {
              return this.keys;
            }, _2.exports = d;
          },
          /* 23 */
          /***/
          function(_2, k, T) {
            var u = T(14);
            function d() {
              this.set = {};
            }
            d.prototype.add = function(o) {
              var i2 = u.createID(o);
              this.contains(i2) || (this.set[i2] = o);
            }, d.prototype.remove = function(o) {
              delete this.set[u.createID(o)];
            }, d.prototype.clear = function() {
              this.set = {};
            }, d.prototype.contains = function(o) {
              return this.set[u.createID(o)] == o;
            }, d.prototype.isEmpty = function() {
              return this.size() === 0;
            }, d.prototype.size = function() {
              return Object.keys(this.set).length;
            }, d.prototype.addAllTo = function(o) {
              for (var i2 = Object.keys(this.set), e2 = i2.length, s = 0; s < e2; s++)
                o.push(this.set[i2[s]]);
            }, d.prototype.size = function() {
              return Object.keys(this.set).length;
            }, d.prototype.addAll = function(o) {
              for (var i2 = o.length, e2 = 0; e2 < i2; e2++) {
                var s = o[e2];
                this.add(s);
              }
            }, _2.exports = d;
          },
          /* 24 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.multMat = function(d, o) {
              for (var i2 = [], e2 = 0; e2 < d.length; e2++) {
                i2[e2] = [];
                for (var s = 0; s < o[0].length; s++) {
                  i2[e2][s] = 0;
                  for (var n = 0; n < d[0].length; n++)
                    i2[e2][s] += d[e2][n] * o[n][s];
                }
              }
              return i2;
            }, u.transpose = function(d) {
              for (var o = [], i2 = 0; i2 < d[0].length; i2++) {
                o[i2] = [];
                for (var e2 = 0; e2 < d.length; e2++)
                  o[i2][e2] = d[e2][i2];
              }
              return o;
            }, u.multCons = function(d, o) {
              for (var i2 = [], e2 = 0; e2 < d.length; e2++)
                i2[e2] = d[e2] * o;
              return i2;
            }, u.minusOp = function(d, o) {
              for (var i2 = [], e2 = 0; e2 < d.length; e2++)
                i2[e2] = d[e2] - o[e2];
              return i2;
            }, u.dotProduct = function(d, o) {
              for (var i2 = 0, e2 = 0; e2 < d.length; e2++)
                i2 += d[e2] * o[e2];
              return i2;
            }, u.mag = function(d) {
              return Math.sqrt(this.dotProduct(d, d));
            }, u.normalize = function(d) {
              for (var o = [], i2 = this.mag(d), e2 = 0; e2 < d.length; e2++)
                o[e2] = d[e2] / i2;
              return o;
            }, u.multGamma = function(d) {
              for (var o = [], i2 = 0, e2 = 0; e2 < d.length; e2++)
                i2 += d[e2];
              i2 *= -1 / d.length;
              for (var s = 0; s < d.length; s++)
                o[s] = i2 + d[s];
              return o;
            }, u.multL = function(d, o, i2) {
              for (var e2 = [], s = [], n = [], f = 0; f < o[0].length; f++) {
                for (var t = 0, a = 0; a < o.length; a++)
                  t += -0.5 * o[a][f] * d[a];
                s[f] = t;
              }
              for (var l = 0; l < i2.length; l++) {
                for (var c = 0, h = 0; h < i2.length; h++)
                  c += i2[l][h] * s[h];
                n[l] = c;
              }
              for (var N = 0; N < o.length; N++) {
                for (var g = 0, y = 0; y < o[0].length; y++)
                  g += o[N][y] * n[y];
                e2[N] = g;
              }
              return e2;
            }, _2.exports = u;
          },
          /* 25 */
          /***/
          function(_2, k, T) {
            var u = /* @__PURE__ */ function() {
              function e2(s, n) {
                for (var f = 0; f < n.length; f++) {
                  var t = n[f];
                  t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(s, t.key, t);
                }
              }
              return function(s, n, f) {
                return n && e2(s.prototype, n), f && e2(s, f), s;
              };
            }();
            function d(e2, s) {
              if (!(e2 instanceof s))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = T(11), i2 = function() {
              function e2(s, n) {
                d(this, e2), (n !== null || n !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var f = void 0;
                s instanceof o ? f = s.size() : f = s.length, this._quicksort(s, 0, f - 1);
              }
              return u(e2, [{
                key: "_quicksort",
                value: function(s, n, f) {
                  if (n < f) {
                    var t = this._partition(s, n, f);
                    this._quicksort(s, n, t), this._quicksort(s, t + 1, f);
                  }
                }
              }, {
                key: "_partition",
                value: function(s, n, f) {
                  for (var t = this._get(s, n), a = n, l = f; ; ) {
                    for (; this.compareFunction(t, this._get(s, l)); )
                      l--;
                    for (; this.compareFunction(this._get(s, a), t); )
                      a++;
                    if (a < l)
                      this._swap(s, a, l), a++, l--;
                    else return l;
                  }
                }
              }, {
                key: "_get",
                value: function(s, n) {
                  return s instanceof o ? s.get_object_at(n) : s[n];
                }
              }, {
                key: "_set",
                value: function(s, n, f) {
                  s instanceof o ? s.set_object_at(n, f) : s[n] = f;
                }
              }, {
                key: "_swap",
                value: function(s, n, f) {
                  var t = this._get(s, n);
                  this._set(s, n, this._get(s, f)), this._set(s, f, t);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(s, n) {
                  return n > s;
                }
              }]), e2;
            }();
            _2.exports = i2;
          },
          /* 26 */
          /***/
          function(_2, k, T) {
            function u() {
            }
            u.svd = function(d) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = d.length, this.n = d[0].length;
              var o = Math.min(this.m, this.n);
              this.s = function(Lt) {
                for (var At = []; Lt-- > 0; )
                  At.push(0);
                return At;
              }(Math.min(this.m + 1, this.n)), this.U = function(Lt) {
                var At = function Ht(Yt) {
                  if (Yt.length == 0)
                    return 0;
                  for (var Rt = [], kt = 0; kt < Yt[0]; kt++)
                    Rt.push(Ht(Yt.slice(1)));
                  return Rt;
                };
                return At(Lt);
              }([this.m, o]), this.V = function(Lt) {
                var At = function Ht(Yt) {
                  if (Yt.length == 0)
                    return 0;
                  for (var Rt = [], kt = 0; kt < Yt[0]; kt++)
                    Rt.push(Ht(Yt.slice(1)));
                  return Rt;
                };
                return At(Lt);
              }([this.n, this.n]);
              for (var i2 = function(Lt) {
                for (var At = []; Lt-- > 0; )
                  At.push(0);
                return At;
              }(this.n), e2 = function(Lt) {
                for (var At = []; Lt-- > 0; )
                  At.push(0);
                return At;
              }(this.m), s = true, n = Math.min(this.m - 1, this.n), f = Math.max(0, Math.min(this.n - 2, this.m)), t = 0; t < Math.max(n, f); t++) {
                if (t < n) {
                  this.s[t] = 0;
                  for (var a = t; a < this.m; a++)
                    this.s[t] = u.hypot(this.s[t], d[a][t]);
                  if (this.s[t] !== 0) {
                    d[t][t] < 0 && (this.s[t] = -this.s[t]);
                    for (var l = t; l < this.m; l++)
                      d[l][t] /= this.s[t];
                    d[t][t] += 1;
                  }
                  this.s[t] = -this.s[t];
                }
                for (var c = t + 1; c < this.n; c++) {
                  if (/* @__PURE__ */ function(Lt, At) {
                    return Lt && At;
                  }(t < n, this.s[t] !== 0)) {
                    for (var h = 0, N = t; N < this.m; N++)
                      h += d[N][t] * d[N][c];
                    h = -h / d[t][t];
                    for (var g = t; g < this.m; g++)
                      d[g][c] += h * d[g][t];
                  }
                  i2[c] = d[t][c];
                }
                if (/* @__PURE__ */ function(Lt, At) {
                  return At;
                }(s, t < n))
                  for (var y = t; y < this.m; y++)
                    this.U[y][t] = d[y][t];
                if (t < f) {
                  i2[t] = 0;
                  for (var A = t + 1; A < this.n; A++)
                    i2[t] = u.hypot(i2[t], i2[A]);
                  if (i2[t] !== 0) {
                    i2[t + 1] < 0 && (i2[t] = -i2[t]);
                    for (var I = t + 1; I < this.n; I++)
                      i2[I] /= i2[t];
                    i2[t + 1] += 1;
                  }
                  if (i2[t] = -i2[t], /* @__PURE__ */ function(Lt, At) {
                    return Lt && At;
                  }(t + 1 < this.m, i2[t] !== 0)) {
                    for (var P = t + 1; P < this.m; P++)
                      e2[P] = 0;
                    for (var Y = t + 1; Y < this.n; Y++)
                      for (var S = t + 1; S < this.m; S++)
                        e2[S] += i2[Y] * d[S][Y];
                    for (var H = t + 1; H < this.n; H++)
                      for (var Z = -i2[H] / i2[t + 1], x = t + 1; x < this.m; x++)
                        d[x][H] += Z * e2[x];
                  }
                  for (var ot = t + 1; ot < this.n; ot++)
                    this.V[ot][t] = i2[ot];
                }
              }
              var r = Math.min(this.n, this.m + 1);
              n < this.n && (this.s[n] = d[n][n]), this.m < r && (this.s[r - 1] = 0), f + 1 < r && (i2[f] = d[f][r - 1]), i2[r - 1] = 0;
              {
                for (var E = n; E < o; E++) {
                  for (var p = 0; p < this.m; p++)
                    this.U[p][E] = 0;
                  this.U[E][E] = 1;
                }
                for (var v = n - 1; v >= 0; v--)
                  if (this.s[v] !== 0) {
                    for (var m = v + 1; m < o; m++) {
                      for (var O = 0, M = v; M < this.m; M++)
                        O += this.U[M][v] * this.U[M][m];
                      O = -O / this.U[v][v];
                      for (var C = v; C < this.m; C++)
                        this.U[C][m] += O * this.U[C][v];
                    }
                    for (var F = v; F < this.m; F++)
                      this.U[F][v] = -this.U[F][v];
                    this.U[v][v] = 1 + this.U[v][v];
                    for (var U = 0; U < v - 1; U++)
                      this.U[U][v] = 0;
                  } else {
                    for (var z = 0; z < this.m; z++)
                      this.U[z][v] = 0;
                    this.U[v][v] = 1;
                  }
              }
              for (var W = this.n - 1; W >= 0; W--) {
                if (/* @__PURE__ */ function(Lt, At) {
                  return Lt && At;
                }(W < f, i2[W] !== 0))
                  for (var B = W + 1; B < o; B++) {
                    for (var $ = 0, G = W + 1; G < this.n; G++)
                      $ += this.V[G][W] * this.V[G][B];
                    $ = -$ / this.V[W + 1][W];
                    for (var D = W + 1; D < this.n; D++)
                      this.V[D][B] += $ * this.V[D][W];
                  }
                for (var b = 0; b < this.n; b++)
                  this.V[b][W] = 0;
                this.V[W][W] = 1;
              }
              for (var q = r - 1, et = Math.pow(2, -52), vt = Math.pow(2, -966); r > 0; ) {
                var j = void 0, Dt = void 0;
                for (j = r - 2; j >= -1 && j !== -1; j--)
                  if (Math.abs(i2[j]) <= vt + et * (Math.abs(this.s[j]) + Math.abs(this.s[j + 1]))) {
                    i2[j] = 0;
                    break;
                  }
                if (j === r - 2)
                  Dt = 4;
                else {
                  var J = void 0;
                  for (J = r - 1; J >= j && J !== j; J--) {
                    var nt = (J !== r ? Math.abs(i2[J]) : 0) + (J !== j + 1 ? Math.abs(i2[J - 1]) : 0);
                    if (Math.abs(this.s[J]) <= vt + et * nt) {
                      this.s[J] = 0;
                      break;
                    }
                  }
                  J === j ? Dt = 3 : J === r - 1 ? Dt = 1 : (Dt = 2, j = J);
                }
                switch (j++, Dt) {
                  case 1:
                    {
                      var mt = i2[r - 2];
                      i2[r - 2] = 0;
                      for (var ht = r - 2; ht >= j; ht--) {
                        var _t = u.hypot(this.s[ht], mt), Mt = this.s[ht] / _t, Tt = mt / _t;
                        this.s[ht] = _t, ht !== j && (mt = -Tt * i2[ht - 1], i2[ht - 1] = Mt * i2[ht - 1]);
                        for (var wt = 0; wt < this.n; wt++)
                          _t = Mt * this.V[wt][ht] + Tt * this.V[wt][r - 1], this.V[wt][r - 1] = -Tt * this.V[wt][ht] + Mt * this.V[wt][r - 1], this.V[wt][ht] = _t;
                      }
                    }
                    break;
                  case 2:
                    {
                      var Wt = i2[j - 1];
                      i2[j - 1] = 0;
                      for (var bt = j; bt < r; bt++) {
                        var Pt = u.hypot(this.s[bt], Wt), St = this.s[bt] / Pt, zt = Wt / Pt;
                        this.s[bt] = Pt, Wt = -zt * i2[bt], i2[bt] = St * i2[bt];
                        for (var Gt = 0; Gt < this.m; Gt++)
                          Pt = St * this.U[Gt][bt] + zt * this.U[Gt][j - 1], this.U[Gt][j - 1] = -zt * this.U[Gt][bt] + St * this.U[Gt][j - 1], this.U[Gt][bt] = Pt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var jt = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[r - 1]), Math.abs(this.s[r - 2])), Math.abs(i2[r - 2])), Math.abs(this.s[j])), Math.abs(i2[j])), gt = this.s[r - 1] / jt, L = this.s[r - 2] / jt, R = i2[r - 2] / jt, V = this.s[j] / jt, Q = i2[j] / jt, K = ((L + gt) * (L - gt) + R * R) / 2, pt = gt * R * (gt * R), lt = 0;
                      /* @__PURE__ */ (function(Lt, At) {
                        return Lt || At;
                      })(K !== 0, pt !== 0) && (lt = Math.sqrt(K * K + pt), K < 0 && (lt = -lt), lt = pt / (K + lt));
                      for (var tt = (V + gt) * (V - gt) + lt, ct = V * Q, rt = j; rt < r - 1; rt++) {
                        var Nt = u.hypot(tt, ct), yt = tt / Nt, Ct = ct / Nt;
                        rt !== j && (i2[rt - 1] = Nt), tt = yt * this.s[rt] + Ct * i2[rt], i2[rt] = yt * i2[rt] - Ct * this.s[rt], ct = Ct * this.s[rt + 1], this.s[rt + 1] = yt * this.s[rt + 1];
                        for (var dt = 0; dt < this.n; dt++)
                          Nt = yt * this.V[dt][rt] + Ct * this.V[dt][rt + 1], this.V[dt][rt + 1] = -Ct * this.V[dt][rt] + yt * this.V[dt][rt + 1], this.V[dt][rt] = Nt;
                        if (Nt = u.hypot(tt, ct), yt = tt / Nt, Ct = ct / Nt, this.s[rt] = Nt, tt = yt * i2[rt] + Ct * this.s[rt + 1], this.s[rt + 1] = -Ct * i2[rt] + yt * this.s[rt + 1], ct = Ct * i2[rt + 1], i2[rt + 1] = yt * i2[rt + 1], rt < this.m - 1)
                          for (var at = 0; at < this.m; at++)
                            Nt = yt * this.U[at][rt] + Ct * this.U[at][rt + 1], this.U[at][rt + 1] = -Ct * this.U[at][rt] + yt * this.U[at][rt + 1], this.U[at][rt] = Nt;
                      }
                      i2[r - 2] = tt;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[j] <= 0) {
                        this.s[j] = this.s[j] < 0 ? -this.s[j] : 0;
                        for (var st = 0; st <= q; st++)
                          this.V[st][j] = -this.V[st][j];
                      }
                      for (; j < q && !(this.s[j] >= this.s[j + 1]); ) {
                        var It = this.s[j];
                        if (this.s[j] = this.s[j + 1], this.s[j + 1] = It, j < this.n - 1)
                          for (var ut2 = 0; ut2 < this.n; ut2++)
                            It = this.V[ut2][j + 1], this.V[ut2][j + 1] = this.V[ut2][j], this.V[ut2][j] = It;
                        if (j < this.m - 1)
                          for (var Ot = 0; Ot < this.m; Ot++)
                            It = this.U[Ot][j + 1], this.U[Ot][j + 1] = this.U[Ot][j], this.U[Ot][j] = It;
                        j++;
                      }
                      r--;
                    }
                    break;
                }
              }
              var Ut = { U: this.U, V: this.V, S: this.s };
              return Ut;
            }, u.hypot = function(d, o) {
              var i2 = void 0;
              return Math.abs(d) > Math.abs(o) ? (i2 = o / d, i2 = Math.abs(d) * Math.sqrt(1 + i2 * i2)) : o != 0 ? (i2 = d / o, i2 = Math.abs(o) * Math.sqrt(1 + i2 * i2)) : i2 = 0, i2;
            }, _2.exports = u;
          },
          /* 27 */
          /***/
          function(_2, k, T) {
            var u = /* @__PURE__ */ function() {
              function i2(e2, s) {
                for (var n = 0; n < s.length; n++) {
                  var f = s[n];
                  f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(e2, f.key, f);
                }
              }
              return function(e2, s, n) {
                return s && i2(e2.prototype, s), n && i2(e2, n), e2;
              };
            }();
            function d(i2, e2) {
              if (!(i2 instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function() {
              function i2(e2, s) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                d(this, i2), this.sequence1 = e2, this.sequence2 = s, this.match_score = n, this.mismatch_penalty = f, this.gap_penalty = t, this.iMax = e2.length + 1, this.jMax = s.length + 1, this.grid = new Array(this.iMax);
                for (var a = 0; a < this.iMax; a++) {
                  this.grid[a] = new Array(this.jMax);
                  for (var l = 0; l < this.jMax; l++)
                    this.grid[a][l] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var c = 0; c < this.iMax; c++) {
                  this.tracebackGrid[c] = new Array(this.jMax);
                  for (var h = 0; h < this.jMax; h++)
                    this.tracebackGrid[c][h] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return u(i2, [{
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
                  for (var e2 = 1; e2 < this.jMax; e2++)
                    this.grid[0][e2] = this.grid[0][e2 - 1] + this.gap_penalty, this.tracebackGrid[0][e2] = [false, false, true];
                  for (var s = 1; s < this.iMax; s++)
                    this.grid[s][0] = this.grid[s - 1][0] + this.gap_penalty, this.tracebackGrid[s][0] = [false, true, false];
                  for (var n = 1; n < this.iMax; n++)
                    for (var f = 1; f < this.jMax; f++) {
                      var t = void 0;
                      this.sequence1[n - 1] === this.sequence2[f - 1] ? t = this.grid[n - 1][f - 1] + this.match_score : t = this.grid[n - 1][f - 1] + this.mismatch_penalty;
                      var a = this.grid[n - 1][f] + this.gap_penalty, l = this.grid[n][f - 1] + this.gap_penalty, c = [t, a, l], h = this.arrayAllMaxIndexes(c);
                      this.grid[n][f] = c[h[0]], this.tracebackGrid[n][f] = [h.includes(0), h.includes(1), h.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var e2 = [];
                  for (e2.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); e2[0]; ) {
                    var s = e2[0], n = this.tracebackGrid[s.pos[0]][s.pos[1]];
                    n[0] && e2.push({
                      pos: [s.pos[0] - 1, s.pos[1] - 1],
                      seq1: this.sequence1[s.pos[0] - 1] + s.seq1,
                      seq2: this.sequence2[s.pos[1] - 1] + s.seq2
                    }), n[1] && e2.push({
                      pos: [s.pos[0] - 1, s.pos[1]],
                      seq1: this.sequence1[s.pos[0] - 1] + s.seq1,
                      seq2: "-" + s.seq2
                    }), n[2] && e2.push({
                      pos: [s.pos[0], s.pos[1] - 1],
                      seq1: "-" + s.seq1,
                      seq2: this.sequence2[s.pos[1] - 1] + s.seq2
                    }), s.pos[0] === 0 && s.pos[1] === 0 && this.alignments.push({
                      sequence1: s.seq1,
                      sequence2: s.seq2
                    }), e2.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(e2, s) {
                  for (var n = [], f = -1; (f = e2.indexOf(s, f + 1)) !== -1; )
                    n.push(f);
                  return n;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(e2) {
                  return this.getAllIndexes(e2, Math.max.apply(null, e2));
                }
              }]), i2;
            }();
            _2.exports = o;
          },
          /* 28 */
          /***/
          function(_2, k, T) {
            var u = function() {
            };
            u.FDLayout = T(18), u.FDLayoutConstants = T(4), u.FDLayoutEdge = T(19), u.FDLayoutNode = T(20), u.DimensionD = T(21), u.HashMap = T(22), u.HashSet = T(23), u.IGeometry = T(8), u.IMath = T(9), u.Integer = T(10), u.Point = T(12), u.PointD = T(5), u.RandomSeed = T(16), u.RectangleD = T(13), u.Transform = T(17), u.UniqueIDGeneretor = T(14), u.Quicksort = T(25), u.LinkedList = T(11), u.LGraphObject = T(2), u.LGraph = T(6), u.LEdge = T(1), u.LGraphManager = T(7), u.LNode = T(3), u.Layout = T(15), u.LayoutConstants = T(0), u.NeedlemanWunsch = T(27), u.Matrix = T(24), u.SVD = T(26), _2.exports = u;
          },
          /* 29 */
          /***/
          function(_2, k, T) {
            function u() {
              this.listeners = [];
            }
            var d = u.prototype;
            d.addListener = function(o, i2) {
              this.listeners.push({
                event: o,
                callback: i2
              });
            }, d.removeListener = function(o, i2) {
              for (var e2 = this.listeners.length; e2 >= 0; e2--) {
                var s = this.listeners[e2];
                s.event === o && s.callback === i2 && this.listeners.splice(e2, 1);
              }
            }, d.emit = function(o, i2) {
              for (var e2 = 0; e2 < this.listeners.length; e2++) {
                var s = this.listeners[e2];
                o === s.event && s.callback(i2);
              }
            }, _2.exports = u;
          }
          /******/
        ])
      );
    });
  }(ve)), ve.exports;
}
var pi = pe.exports;
var Ce;
function vi() {
  return Ce || (Ce = 1, function(w, X) {
    (function(_2, k) {
      w.exports = k(fi());
    })(pi, function(_2) {
      return (
        /******/
        (() => {
          var k = {
            /***/
            45: (
              /***/
              (o, i2, e2) => {
                var s = {};
                s.layoutBase = e2(551), s.CoSEConstants = e2(806), s.CoSEEdge = e2(767), s.CoSEGraph = e2(880), s.CoSEGraphManager = e2(578), s.CoSELayout = e2(765), s.CoSENode = e2(991), s.ConstraintHandler = e2(902), o.exports = s;
              }
            ),
            /***/
            806: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).FDLayoutConstants;
                function n() {
                }
                for (var f in s)
                  n[f] = s[f];
                n.DEFAULT_USE_MULTI_LEVEL_SCALING = false, n.DEFAULT_RADIAL_SEPARATION = s.DEFAULT_EDGE_LENGTH, n.DEFAULT_COMPONENT_SEPERATION = 60, n.TILE = true, n.TILING_PADDING_VERTICAL = 10, n.TILING_PADDING_HORIZONTAL = 10, n.TRANSFORM_ON_CONSTRAINT_HANDLING = true, n.ENFORCE_CONSTRAINTS = true, n.APPLY_LAYOUT = true, n.RELAX_MOVEMENT_ON_CONSTRAINTS = true, n.TREE_REDUCTION_ON_INCREMENTAL = true, n.PURE_INCREMENTAL = n.DEFAULT_INCREMENTAL, o.exports = n;
              }
            ),
            /***/
            767: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).FDLayoutEdge;
                function n(t, a, l) {
                  s.call(this, t, a, l);
                }
                n.prototype = Object.create(s.prototype);
                for (var f in s)
                  n[f] = s[f];
                o.exports = n;
              }
            ),
            /***/
            880: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).LGraph;
                function n(t, a, l) {
                  s.call(this, t, a, l);
                }
                n.prototype = Object.create(s.prototype);
                for (var f in s)
                  n[f] = s[f];
                o.exports = n;
              }
            ),
            /***/
            578: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).LGraphManager;
                function n(t) {
                  s.call(this, t);
                }
                n.prototype = Object.create(s.prototype);
                for (var f in s)
                  n[f] = s[f];
                o.exports = n;
              }
            ),
            /***/
            765: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).FDLayout, n = e2(578), f = e2(880), t = e2(991), a = e2(767), l = e2(806), c = e2(902), h = e2(551).FDLayoutConstants, N = e2(551).LayoutConstants, g = e2(551).Point, y = e2(551).PointD, A = e2(551).DimensionD, I = e2(551).Layout, P = e2(551).Integer, Y = e2(551).IGeometry, S = e2(551).LGraph, H = e2(551).Transform, Z = e2(551).LinkedList;
                function x() {
                  s.call(this), this.toBeTiled = {}, this.constraints = {};
                }
                x.prototype = Object.create(s.prototype);
                for (var ot in s)
                  x[ot] = s[ot];
                x.prototype.newGraphManager = function() {
                  var r = new n(this);
                  return this.graphManager = r, r;
                }, x.prototype.newGraph = function(r) {
                  return new f(null, this.graphManager, r);
                }, x.prototype.newNode = function(r) {
                  return new t(this.graphManager, r);
                }, x.prototype.newEdge = function(r) {
                  return new a(null, null, r);
                }, x.prototype.initParameters = function() {
                  s.prototype.initParameters.call(this, arguments), this.isSubLayout || (l.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = l.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = l.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = h.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = h.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = h.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
                }, x.prototype.initSpringEmbedder = function() {
                  s.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / h.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
                }, x.prototype.layout = function() {
                  var r = N.DEFAULT_CREATE_BENDS_AS_NEEDED;
                  return r && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, x.prototype.classicLayout = function() {
                  if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                    if (l.TREE_REDUCTION_ON_INCREMENTAL) {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var r = new Set(this.getAllNodes()), E = this.nodesWithGravity.filter(function(v) {
                        return r.has(v);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(E);
                    }
                  } else {
                    var p = this.getFlatForest();
                    if (p.length > 0)
                      this.positionNodesRadially(p);
                    else {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var r = new Set(this.getAllNodes()), E = this.nodesWithGravity.filter(function(O) {
                        return r.has(O);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(E), this.positionNodesRandomly();
                    }
                  }
                  return Object.keys(this.constraints).length > 0 && (c.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), l.APPLY_LAYOUT && this.runSpringEmbedder(), true;
                }, x.prototype.tick = function() {
                  if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                    if (this.prunedNodesAll.length > 0)
                      this.isTreeGrowing = true;
                    else
                      return true;
                  if (this.totalIterations % h.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
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
                        var r = new Set(this.getAllNodes()), E = this.nodesWithGravity.filter(function(m) {
                          return r.has(m);
                        });
                        this.graphManager.setAllNodesToApplyGravitation(E), this.graphManager.updateBounds(), this.updateGrid(), l.PURE_INCREMENTAL ? this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                      } else
                        this.isTreeGrowing = false, this.isGrowthFinished = true;
                    this.growTreeIterations++;
                  }
                  if (this.isGrowthFinished) {
                    if (this.isConverged())
                      return true;
                    this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), l.PURE_INCREMENTAL ? this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                  }
                  var p = !this.isTreeGrowing && !this.isGrowthFinished, v = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                  return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(p, v), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                }, x.prototype.getPositionsData = function() {
                  for (var r = this.graphManager.getAllNodes(), E = {}, p = 0; p < r.length; p++) {
                    var v = r[p].rect, m = r[p].id;
                    E[m] = {
                      id: m,
                      x: v.getCenterX(),
                      y: v.getCenterY(),
                      w: v.width,
                      h: v.height
                    };
                  }
                  return E;
                }, x.prototype.runSpringEmbedder = function() {
                  this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                  var r = false;
                  if (h.ANIMATE === "during")
                    this.emit("layoutstarted");
                  else {
                    for (; !r; )
                      r = this.tick();
                    this.graphManager.updateBounds();
                  }
                }, x.prototype.moveNodes = function() {
                  for (var r = this.getAllNodes(), E, p = 0; p < r.length; p++)
                    E = r[p], E.calculateDisplacement();
                  Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                  for (var p = 0; p < r.length; p++)
                    E = r[p], E.move();
                }, x.prototype.initConstraintVariables = function() {
                  var r = this;
                  this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                  for (var E = this.graphManager.getAllNodes(), p = 0; p < E.length; p++) {
                    var v = E[p];
                    this.idToNodeMap.set(v.id, v);
                  }
                  var m = function D(b) {
                    for (var q = b.getChild().getNodes(), et, vt = 0, j = 0; j < q.length; j++)
                      et = q[j], et.getChild() == null ? r.fixedNodeSet.has(et.id) && (vt += 100) : vt += D(et);
                    return vt;
                  };
                  if (this.constraints.fixedNodeConstraint) {
                    this.constraints.fixedNodeConstraint.forEach(function(D) {
                      r.fixedNodeSet.add(D.nodeId);
                    });
                    for (var E = this.graphManager.getAllNodes(), v, p = 0; p < E.length; p++)
                      if (v = E[p], v.getChild() != null) {
                        var O = m(v);
                        O > 0 && (v.fixedNodeWeight = O);
                      }
                  }
                  if (this.constraints.relativePlacementConstraint) {
                    var M = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
                    if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(D) {
                      r.fixedNodesOnHorizontal.add(D), r.fixedNodesOnVertical.add(D);
                    }), this.constraints.alignmentConstraint) {
                      if (this.constraints.alignmentConstraint.vertical)
                        for (var F = this.constraints.alignmentConstraint.vertical, p = 0; p < F.length; p++)
                          this.dummyToNodeForVerticalAlignment.set("dummy" + p, []), F[p].forEach(function(b) {
                            M.set(b, "dummy" + p), r.dummyToNodeForVerticalAlignment.get("dummy" + p).push(b), r.fixedNodeSet.has(b) && r.fixedNodesOnHorizontal.add("dummy" + p);
                          });
                      if (this.constraints.alignmentConstraint.horizontal)
                        for (var U = this.constraints.alignmentConstraint.horizontal, p = 0; p < U.length; p++)
                          this.dummyToNodeForHorizontalAlignment.set("dummy" + p, []), U[p].forEach(function(b) {
                            C.set(b, "dummy" + p), r.dummyToNodeForHorizontalAlignment.get("dummy" + p).push(b), r.fixedNodeSet.has(b) && r.fixedNodesOnVertical.add("dummy" + p);
                          });
                    }
                    if (l.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.shuffle = function(D) {
                        var b, q, et;
                        for (et = D.length - 1; et >= 2 * D.length / 3; et--)
                          b = Math.floor(Math.random() * (et + 1)), q = D[et], D[et] = D[b], D[b] = q;
                        return D;
                      }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(D) {
                        if (D.left) {
                          var b = M.has(D.left) ? M.get(D.left) : D.left, q = M.has(D.right) ? M.get(D.right) : D.right;
                          r.nodesInRelativeHorizontal.includes(b) || (r.nodesInRelativeHorizontal.push(b), r.nodeToRelativeConstraintMapHorizontal.set(b, []), r.dummyToNodeForVerticalAlignment.has(b) ? r.nodeToTempPositionMapHorizontal.set(b, r.idToNodeMap.get(r.dummyToNodeForVerticalAlignment.get(b)[0]).getCenterX()) : r.nodeToTempPositionMapHorizontal.set(b, r.idToNodeMap.get(b).getCenterX())), r.nodesInRelativeHorizontal.includes(q) || (r.nodesInRelativeHorizontal.push(q), r.nodeToRelativeConstraintMapHorizontal.set(q, []), r.dummyToNodeForVerticalAlignment.has(q) ? r.nodeToTempPositionMapHorizontal.set(q, r.idToNodeMap.get(r.dummyToNodeForVerticalAlignment.get(q)[0]).getCenterX()) : r.nodeToTempPositionMapHorizontal.set(q, r.idToNodeMap.get(q).getCenterX())), r.nodeToRelativeConstraintMapHorizontal.get(b).push({ right: q, gap: D.gap }), r.nodeToRelativeConstraintMapHorizontal.get(q).push({ left: b, gap: D.gap });
                        } else {
                          var et = C.has(D.top) ? C.get(D.top) : D.top, vt = C.has(D.bottom) ? C.get(D.bottom) : D.bottom;
                          r.nodesInRelativeVertical.includes(et) || (r.nodesInRelativeVertical.push(et), r.nodeToRelativeConstraintMapVertical.set(et, []), r.dummyToNodeForHorizontalAlignment.has(et) ? r.nodeToTempPositionMapVertical.set(et, r.idToNodeMap.get(r.dummyToNodeForHorizontalAlignment.get(et)[0]).getCenterY()) : r.nodeToTempPositionMapVertical.set(et, r.idToNodeMap.get(et).getCenterY())), r.nodesInRelativeVertical.includes(vt) || (r.nodesInRelativeVertical.push(vt), r.nodeToRelativeConstraintMapVertical.set(vt, []), r.dummyToNodeForHorizontalAlignment.has(vt) ? r.nodeToTempPositionMapVertical.set(vt, r.idToNodeMap.get(r.dummyToNodeForHorizontalAlignment.get(vt)[0]).getCenterY()) : r.nodeToTempPositionMapVertical.set(vt, r.idToNodeMap.get(vt).getCenterY())), r.nodeToRelativeConstraintMapVertical.get(et).push({ bottom: vt, gap: D.gap }), r.nodeToRelativeConstraintMapVertical.get(vt).push({ top: et, gap: D.gap });
                        }
                      });
                    else {
                      var z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
                      this.constraints.relativePlacementConstraint.forEach(function(D) {
                        if (D.left) {
                          var b = M.has(D.left) ? M.get(D.left) : D.left, q = M.has(D.right) ? M.get(D.right) : D.right;
                          z.has(b) ? z.get(b).push(q) : z.set(b, [q]), z.has(q) ? z.get(q).push(b) : z.set(q, [b]);
                        } else {
                          var et = C.has(D.top) ? C.get(D.top) : D.top, vt = C.has(D.bottom) ? C.get(D.bottom) : D.bottom;
                          W.has(et) ? W.get(et).push(vt) : W.set(et, [vt]), W.has(vt) ? W.get(vt).push(et) : W.set(vt, [et]);
                        }
                      });
                      var B = function(D, b) {
                        var q = [], et = [], vt = new Z(), j = /* @__PURE__ */ new Set(), Dt = 0;
                        return D.forEach(function(J, nt) {
                          if (!j.has(nt)) {
                            q[Dt] = [], et[Dt] = false;
                            var mt = nt;
                            for (vt.push(mt), j.add(mt), q[Dt].push(mt); vt.length != 0; ) {
                              mt = vt.shift(), b.has(mt) && (et[Dt] = true);
                              var ht = D.get(mt);
                              ht.forEach(function(_t) {
                                j.has(_t) || (vt.push(_t), j.add(_t), q[Dt].push(_t));
                              });
                            }
                            Dt++;
                          }
                        }), { components: q, isFixed: et };
                      }, $ = B(z, r.fixedNodesOnHorizontal);
                      this.componentsOnHorizontal = $.components, this.fixedComponentsOnHorizontal = $.isFixed;
                      var G = B(W, r.fixedNodesOnVertical);
                      this.componentsOnVertical = G.components, this.fixedComponentsOnVertical = G.isFixed;
                    }
                  }
                }, x.prototype.updateDisplacements = function() {
                  var r = this;
                  if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(G) {
                    var D = r.idToNodeMap.get(G.nodeId);
                    D.displacementX = 0, D.displacementY = 0;
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var E = this.constraints.alignmentConstraint.vertical, p = 0; p < E.length; p++) {
                        for (var v = 0, m = 0; m < E[p].length; m++) {
                          if (this.fixedNodeSet.has(E[p][m])) {
                            v = 0;
                            break;
                          }
                          v += this.idToNodeMap.get(E[p][m]).displacementX;
                        }
                        for (var O = v / E[p].length, m = 0; m < E[p].length; m++)
                          this.idToNodeMap.get(E[p][m]).displacementX = O;
                      }
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var M = this.constraints.alignmentConstraint.horizontal, p = 0; p < M.length; p++) {
                        for (var C = 0, m = 0; m < M[p].length; m++) {
                          if (this.fixedNodeSet.has(M[p][m])) {
                            C = 0;
                            break;
                          }
                          C += this.idToNodeMap.get(M[p][m]).displacementY;
                        }
                        for (var F = C / M[p].length, m = 0; m < M[p].length; m++)
                          this.idToNodeMap.get(M[p][m]).displacementY = F;
                      }
                  }
                  if (this.constraints.relativePlacementConstraint)
                    if (l.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(G) {
                        if (!r.fixedNodesOnHorizontal.has(G)) {
                          var D = 0;
                          r.dummyToNodeForVerticalAlignment.has(G) ? D = r.idToNodeMap.get(r.dummyToNodeForVerticalAlignment.get(G)[0]).displacementX : D = r.idToNodeMap.get(G).displacementX, r.nodeToRelativeConstraintMapHorizontal.get(G).forEach(function(b) {
                            if (b.right) {
                              var q = r.nodeToTempPositionMapHorizontal.get(b.right) - r.nodeToTempPositionMapHorizontal.get(G) - D;
                              q < b.gap && (D -= b.gap - q);
                            } else {
                              var q = r.nodeToTempPositionMapHorizontal.get(G) - r.nodeToTempPositionMapHorizontal.get(b.left) + D;
                              q < b.gap && (D += b.gap - q);
                            }
                          }), r.nodeToTempPositionMapHorizontal.set(G, r.nodeToTempPositionMapHorizontal.get(G) + D), r.dummyToNodeForVerticalAlignment.has(G) ? r.dummyToNodeForVerticalAlignment.get(G).forEach(function(b) {
                            r.idToNodeMap.get(b).displacementX = D;
                          }) : r.idToNodeMap.get(G).displacementX = D;
                        }
                      }), this.nodesInRelativeVertical.forEach(function(G) {
                        if (!r.fixedNodesOnHorizontal.has(G)) {
                          var D = 0;
                          r.dummyToNodeForHorizontalAlignment.has(G) ? D = r.idToNodeMap.get(r.dummyToNodeForHorizontalAlignment.get(G)[0]).displacementY : D = r.idToNodeMap.get(G).displacementY, r.nodeToRelativeConstraintMapVertical.get(G).forEach(function(b) {
                            if (b.bottom) {
                              var q = r.nodeToTempPositionMapVertical.get(b.bottom) - r.nodeToTempPositionMapVertical.get(G) - D;
                              q < b.gap && (D -= b.gap - q);
                            } else {
                              var q = r.nodeToTempPositionMapVertical.get(G) - r.nodeToTempPositionMapVertical.get(b.top) + D;
                              q < b.gap && (D += b.gap - q);
                            }
                          }), r.nodeToTempPositionMapVertical.set(G, r.nodeToTempPositionMapVertical.get(G) + D), r.dummyToNodeForHorizontalAlignment.has(G) ? r.dummyToNodeForHorizontalAlignment.get(G).forEach(function(b) {
                            r.idToNodeMap.get(b).displacementY = D;
                          }) : r.idToNodeMap.get(G).displacementY = D;
                        }
                      });
                    else {
                      for (var p = 0; p < this.componentsOnHorizontal.length; p++) {
                        var U = this.componentsOnHorizontal[p];
                        if (this.fixedComponentsOnHorizontal[p])
                          for (var m = 0; m < U.length; m++)
                            this.dummyToNodeForVerticalAlignment.has(U[m]) ? this.dummyToNodeForVerticalAlignment.get(U[m]).forEach(function(b) {
                              r.idToNodeMap.get(b).displacementX = 0;
                            }) : this.idToNodeMap.get(U[m]).displacementX = 0;
                        else {
                          for (var z = 0, W = 0, m = 0; m < U.length; m++)
                            if (this.dummyToNodeForVerticalAlignment.has(U[m])) {
                              var B = this.dummyToNodeForVerticalAlignment.get(U[m]);
                              z += B.length * this.idToNodeMap.get(B[0]).displacementX, W += B.length;
                            } else
                              z += this.idToNodeMap.get(U[m]).displacementX, W++;
                          for (var $ = z / W, m = 0; m < U.length; m++)
                            this.dummyToNodeForVerticalAlignment.has(U[m]) ? this.dummyToNodeForVerticalAlignment.get(U[m]).forEach(function(b) {
                              r.idToNodeMap.get(b).displacementX = $;
                            }) : this.idToNodeMap.get(U[m]).displacementX = $;
                        }
                      }
                      for (var p = 0; p < this.componentsOnVertical.length; p++) {
                        var U = this.componentsOnVertical[p];
                        if (this.fixedComponentsOnVertical[p])
                          for (var m = 0; m < U.length; m++)
                            this.dummyToNodeForHorizontalAlignment.has(U[m]) ? this.dummyToNodeForHorizontalAlignment.get(U[m]).forEach(function(q) {
                              r.idToNodeMap.get(q).displacementY = 0;
                            }) : this.idToNodeMap.get(U[m]).displacementY = 0;
                        else {
                          for (var z = 0, W = 0, m = 0; m < U.length; m++)
                            if (this.dummyToNodeForHorizontalAlignment.has(U[m])) {
                              var B = this.dummyToNodeForHorizontalAlignment.get(U[m]);
                              z += B.length * this.idToNodeMap.get(B[0]).displacementY, W += B.length;
                            } else
                              z += this.idToNodeMap.get(U[m]).displacementY, W++;
                          for (var $ = z / W, m = 0; m < U.length; m++)
                            this.dummyToNodeForHorizontalAlignment.has(U[m]) ? this.dummyToNodeForHorizontalAlignment.get(U[m]).forEach(function(et) {
                              r.idToNodeMap.get(et).displacementY = $;
                            }) : this.idToNodeMap.get(U[m]).displacementY = $;
                        }
                      }
                    }
                }, x.prototype.calculateNodesToApplyGravitationTo = function() {
                  var r = [], E, p = this.graphManager.getGraphs(), v = p.length, m;
                  for (m = 0; m < v; m++)
                    E = p[m], E.updateConnected(), E.isConnected || (r = r.concat(E.getNodes()));
                  return r;
                }, x.prototype.createBendpoints = function() {
                  var r = [];
                  r = r.concat(this.graphManager.getAllEdges());
                  var E = /* @__PURE__ */ new Set(), p;
                  for (p = 0; p < r.length; p++) {
                    var v = r[p];
                    if (!E.has(v)) {
                      var m = v.getSource(), O = v.getTarget();
                      if (m == O)
                        v.getBendpoints().push(new y()), v.getBendpoints().push(new y()), this.createDummyNodesForBendpoints(v), E.add(v);
                      else {
                        var M = [];
                        if (M = M.concat(m.getEdgeListToNode(O)), M = M.concat(O.getEdgeListToNode(m)), !E.has(M[0])) {
                          if (M.length > 1) {
                            var C;
                            for (C = 0; C < M.length; C++) {
                              var F = M[C];
                              F.getBendpoints().push(new y()), this.createDummyNodesForBendpoints(F);
                            }
                          }
                          M.forEach(function(U) {
                            E.add(U);
                          });
                        }
                      }
                    }
                    if (E.size == r.length)
                      break;
                  }
                }, x.prototype.positionNodesRadially = function(r) {
                  for (var E = new g(0, 0), p = Math.ceil(Math.sqrt(r.length)), v = 0, m = 0, O = 0, M = new y(0, 0), C = 0; C < r.length; C++) {
                    C % p == 0 && (O = 0, m = v, C != 0 && (m += l.DEFAULT_COMPONENT_SEPERATION), v = 0);
                    var F = r[C], U = I.findCenterOfTree(F);
                    E.x = O, E.y = m, M = x.radialLayout(F, U, E), M.y > v && (v = Math.floor(M.y)), O = Math.floor(M.x + l.DEFAULT_COMPONENT_SEPERATION);
                  }
                  this.transform(new y(N.WORLD_CENTER_X - M.x / 2, N.WORLD_CENTER_Y - M.y / 2));
                }, x.radialLayout = function(r, E, p) {
                  var v = Math.max(this.maxDiagonalInTree(r), l.DEFAULT_RADIAL_SEPARATION);
                  x.branchRadialLayout(E, null, 0, 359, 0, v);
                  var m = S.calculateBounds(r), O = new H();
                  O.setDeviceOrgX(m.getMinX()), O.setDeviceOrgY(m.getMinY()), O.setWorldOrgX(p.x), O.setWorldOrgY(p.y);
                  for (var M = 0; M < r.length; M++) {
                    var C = r[M];
                    C.transform(O);
                  }
                  var F = new y(m.getMaxX(), m.getMaxY());
                  return O.inverseTransformPoint(F);
                }, x.branchRadialLayout = function(r, E, p, v, m, O) {
                  var M = (v - p + 1) / 2;
                  M < 0 && (M += 180);
                  var C = (M + p) % 360, F = C * Y.TWO_PI / 360, U = m * Math.cos(F), z = m * Math.sin(F);
                  r.setCenter(U, z);
                  var W = [];
                  W = W.concat(r.getEdges());
                  var B = W.length;
                  E != null && B--;
                  for (var $ = 0, G = W.length, D, b = r.getEdgesBetween(E); b.length > 1; ) {
                    var q = b[0];
                    b.splice(0, 1);
                    var et = W.indexOf(q);
                    et >= 0 && W.splice(et, 1), G--, B--;
                  }
                  E != null ? D = (W.indexOf(b[0]) + 1) % G : D = 0;
                  for (var vt = Math.abs(v - p) / B, j = D; $ != B; j = ++j % G) {
                    var Dt = W[j].getOtherEnd(r);
                    if (Dt != E) {
                      var J = (p + $ * vt) % 360, nt = (J + vt) % 360;
                      x.branchRadialLayout(Dt, r, J, nt, m + O, O), $++;
                    }
                  }
                }, x.maxDiagonalInTree = function(r) {
                  for (var E = P.MIN_VALUE, p = 0; p < r.length; p++) {
                    var v = r[p], m = v.getDiagonal();
                    m > E && (E = m);
                  }
                  return E;
                }, x.prototype.calcRepulsionRange = function() {
                  return 2 * (this.level + 1) * this.idealEdgeLength;
                }, x.prototype.groupZeroDegreeMembers = function() {
                  var r = this, E = {};
                  this.memberGroups = {}, this.idToDummyNode = {};
                  for (var p = [], v = this.graphManager.getAllNodes(), m = 0; m < v.length; m++) {
                    var O = v[m], M = O.getParent();
                    this.getNodeDegreeWithChildren(O) === 0 && (M.id == null || !this.getToBeTiled(M)) && p.push(O);
                  }
                  for (var m = 0; m < p.length; m++) {
                    var O = p[m], C = O.getParent().id;
                    typeof E[C] > "u" && (E[C] = []), E[C] = E[C].concat(O);
                  }
                  Object.keys(E).forEach(function(F) {
                    if (E[F].length > 1) {
                      var U = "DummyCompound_" + F;
                      r.memberGroups[U] = E[F];
                      var z = E[F][0].getParent(), W = new t(r.graphManager);
                      W.id = U, W.paddingLeft = z.paddingLeft || 0, W.paddingRight = z.paddingRight || 0, W.paddingBottom = z.paddingBottom || 0, W.paddingTop = z.paddingTop || 0, r.idToDummyNode[U] = W;
                      var B = r.getGraphManager().add(r.newGraph(), W), $ = z.getChild();
                      $.add(W);
                      for (var G = 0; G < E[F].length; G++) {
                        var D = E[F][G];
                        $.remove(D), B.add(D);
                      }
                    }
                  });
                }, x.prototype.clearCompounds = function() {
                  var r = {}, E = {};
                  this.performDFSOnCompounds();
                  for (var p = 0; p < this.compoundOrder.length; p++)
                    E[this.compoundOrder[p].id] = this.compoundOrder[p], r[this.compoundOrder[p].id] = [].concat(this.compoundOrder[p].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[p].getChild()), this.compoundOrder[p].child = null;
                  this.graphManager.resetAllNodes(), this.tileCompoundMembers(r, E);
                }, x.prototype.clearZeroDegreeMembers = function() {
                  var r = this, E = this.tiledZeroDegreePack = [];
                  Object.keys(this.memberGroups).forEach(function(p) {
                    var v = r.idToDummyNode[p];
                    if (E[p] = r.tileNodes(r.memberGroups[p], v.paddingLeft + v.paddingRight), v.rect.width = E[p].width, v.rect.height = E[p].height, v.setCenter(E[p].centerX, E[p].centerY), v.labelMarginLeft = 0, v.labelMarginTop = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var m = v.rect.width, O = v.rect.height;
                      v.labelWidth && (v.labelPosHorizontal == "left" ? (v.rect.x -= v.labelWidth, v.setWidth(m + v.labelWidth), v.labelMarginLeft = v.labelWidth) : v.labelPosHorizontal == "center" && v.labelWidth > m ? (v.rect.x -= (v.labelWidth - m) / 2, v.setWidth(v.labelWidth), v.labelMarginLeft = (v.labelWidth - m) / 2) : v.labelPosHorizontal == "right" && v.setWidth(m + v.labelWidth)), v.labelHeight && (v.labelPosVertical == "top" ? (v.rect.y -= v.labelHeight, v.setHeight(O + v.labelHeight), v.labelMarginTop = v.labelHeight) : v.labelPosVertical == "center" && v.labelHeight > O ? (v.rect.y -= (v.labelHeight - O) / 2, v.setHeight(v.labelHeight), v.labelMarginTop = (v.labelHeight - O) / 2) : v.labelPosVertical == "bottom" && v.setHeight(O + v.labelHeight));
                    }
                  });
                }, x.prototype.repopulateCompounds = function() {
                  for (var r = this.compoundOrder.length - 1; r >= 0; r--) {
                    var E = this.compoundOrder[r], p = E.id, v = E.paddingLeft, m = E.paddingTop, O = E.labelMarginLeft, M = E.labelMarginTop;
                    this.adjustLocations(this.tiledMemberPack[p], E.rect.x, E.rect.y, v, m, O, M);
                  }
                }, x.prototype.repopulateZeroDegreeMembers = function() {
                  var r = this, E = this.tiledZeroDegreePack;
                  Object.keys(E).forEach(function(p) {
                    var v = r.idToDummyNode[p], m = v.paddingLeft, O = v.paddingTop, M = v.labelMarginLeft, C = v.labelMarginTop;
                    r.adjustLocations(E[p], v.rect.x, v.rect.y, m, O, M, C);
                  });
                }, x.prototype.getToBeTiled = function(r) {
                  var E = r.id;
                  if (this.toBeTiled[E] != null)
                    return this.toBeTiled[E];
                  var p = r.getChild();
                  if (p == null)
                    return this.toBeTiled[E] = false, false;
                  for (var v = p.getNodes(), m = 0; m < v.length; m++) {
                    var O = v[m];
                    if (this.getNodeDegree(O) > 0)
                      return this.toBeTiled[E] = false, false;
                    if (O.getChild() == null) {
                      this.toBeTiled[O.id] = false;
                      continue;
                    }
                    if (!this.getToBeTiled(O))
                      return this.toBeTiled[E] = false, false;
                  }
                  return this.toBeTiled[E] = true, true;
                }, x.prototype.getNodeDegree = function(r) {
                  r.id;
                  for (var E = r.getEdges(), p = 0, v = 0; v < E.length; v++) {
                    var m = E[v];
                    m.getSource().id !== m.getTarget().id && (p = p + 1);
                  }
                  return p;
                }, x.prototype.getNodeDegreeWithChildren = function(r) {
                  var E = this.getNodeDegree(r);
                  if (r.getChild() == null)
                    return E;
                  for (var p = r.getChild().getNodes(), v = 0; v < p.length; v++) {
                    var m = p[v];
                    E += this.getNodeDegreeWithChildren(m);
                  }
                  return E;
                }, x.prototype.performDFSOnCompounds = function() {
                  this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                }, x.prototype.fillCompexOrderByDFS = function(r) {
                  for (var E = 0; E < r.length; E++) {
                    var p = r[E];
                    p.getChild() != null && this.fillCompexOrderByDFS(p.getChild().getNodes()), this.getToBeTiled(p) && this.compoundOrder.push(p);
                  }
                }, x.prototype.adjustLocations = function(r, E, p, v, m, O, M) {
                  E += v + O, p += m + M;
                  for (var C = E, F = 0; F < r.rows.length; F++) {
                    var U = r.rows[F];
                    E = C;
                    for (var z = 0, W = 0; W < U.length; W++) {
                      var B = U[W];
                      B.rect.x = E, B.rect.y = p, E += B.rect.width + r.horizontalPadding, B.rect.height > z && (z = B.rect.height);
                    }
                    p += z + r.verticalPadding;
                  }
                }, x.prototype.tileCompoundMembers = function(r, E) {
                  var p = this;
                  this.tiledMemberPack = [], Object.keys(r).forEach(function(v) {
                    var m = E[v];
                    if (p.tiledMemberPack[v] = p.tileNodes(r[v], m.paddingLeft + m.paddingRight), m.rect.width = p.tiledMemberPack[v].width, m.rect.height = p.tiledMemberPack[v].height, m.setCenter(p.tiledMemberPack[v].centerX, p.tiledMemberPack[v].centerY), m.labelMarginLeft = 0, m.labelMarginTop = 0, l.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var O = m.rect.width, M = m.rect.height;
                      m.labelWidth && (m.labelPosHorizontal == "left" ? (m.rect.x -= m.labelWidth, m.setWidth(O + m.labelWidth), m.labelMarginLeft = m.labelWidth) : m.labelPosHorizontal == "center" && m.labelWidth > O ? (m.rect.x -= (m.labelWidth - O) / 2, m.setWidth(m.labelWidth), m.labelMarginLeft = (m.labelWidth - O) / 2) : m.labelPosHorizontal == "right" && m.setWidth(O + m.labelWidth)), m.labelHeight && (m.labelPosVertical == "top" ? (m.rect.y -= m.labelHeight, m.setHeight(M + m.labelHeight), m.labelMarginTop = m.labelHeight) : m.labelPosVertical == "center" && m.labelHeight > M ? (m.rect.y -= (m.labelHeight - M) / 2, m.setHeight(m.labelHeight), m.labelMarginTop = (m.labelHeight - M) / 2) : m.labelPosVertical == "bottom" && m.setHeight(M + m.labelHeight));
                    }
                  });
                }, x.prototype.tileNodes = function(r, E) {
                  var p = this.tileNodesByFavoringDim(r, E, true), v = this.tileNodesByFavoringDim(r, E, false), m = this.getOrgRatio(p), O = this.getOrgRatio(v), M;
                  return O < m ? M = v : M = p, M;
                }, x.prototype.getOrgRatio = function(r) {
                  var E = r.width, p = r.height, v = E / p;
                  return v < 1 && (v = 1 / v), v;
                }, x.prototype.calcIdealRowWidth = function(r, E) {
                  var p = l.TILING_PADDING_VERTICAL, v = l.TILING_PADDING_HORIZONTAL, m = r.length, O = 0, M = 0, C = 0;
                  r.forEach(function(G) {
                    O += G.getWidth(), M += G.getHeight(), G.getWidth() > C && (C = G.getWidth());
                  });
                  var F = O / m, U = M / m, z = Math.pow(p - v, 2) + 4 * (F + v) * (U + p) * m, W = (v - p + Math.sqrt(z)) / (2 * (F + v)), B;
                  E ? (B = Math.ceil(W), B == W && B++) : B = Math.floor(W);
                  var $ = B * (F + v) - v;
                  return C > $ && ($ = C), $ += v * 2, $;
                }, x.prototype.tileNodesByFavoringDim = function(r, E, p) {
                  var v = l.TILING_PADDING_VERTICAL, m = l.TILING_PADDING_HORIZONTAL, O = l.TILING_COMPARE_BY, M = {
                    rows: [],
                    rowWidth: [],
                    rowHeight: [],
                    width: 0,
                    height: E,
                    // assume minHeight equals to minWidth
                    verticalPadding: v,
                    horizontalPadding: m,
                    centerX: 0,
                    centerY: 0
                  };
                  O && (M.idealRowWidth = this.calcIdealRowWidth(r, p));
                  var C = function(G) {
                    return G.rect.width * G.rect.height;
                  }, F = function(G, D) {
                    return C(D) - C(G);
                  };
                  r.sort(function(G, D) {
                    var b = F;
                    return M.idealRowWidth ? (b = O, b(G.id, D.id)) : b(G, D);
                  });
                  for (var U = 0, z = 0, W = 0; W < r.length; W++) {
                    var B = r[W];
                    U += B.getCenterX(), z += B.getCenterY();
                  }
                  M.centerX = U / r.length, M.centerY = z / r.length;
                  for (var W = 0; W < r.length; W++) {
                    var B = r[W];
                    if (M.rows.length == 0)
                      this.insertNodeToRow(M, B, 0, E);
                    else if (this.canAddHorizontal(M, B.rect.width, B.rect.height)) {
                      var $ = M.rows.length - 1;
                      M.idealRowWidth || ($ = this.getShortestRowIndex(M)), this.insertNodeToRow(M, B, $, E);
                    } else
                      this.insertNodeToRow(M, B, M.rows.length, E);
                    this.shiftToLastRow(M);
                  }
                  return M;
                }, x.prototype.insertNodeToRow = function(r, E, p, v) {
                  var m = v;
                  if (p == r.rows.length) {
                    var O = [];
                    r.rows.push(O), r.rowWidth.push(m), r.rowHeight.push(0);
                  }
                  var M = r.rowWidth[p] + E.rect.width;
                  r.rows[p].length > 0 && (M += r.horizontalPadding), r.rowWidth[p] = M, r.width < M && (r.width = M);
                  var C = E.rect.height;
                  p > 0 && (C += r.verticalPadding);
                  var F = 0;
                  C > r.rowHeight[p] && (F = r.rowHeight[p], r.rowHeight[p] = C, F = r.rowHeight[p] - F), r.height += F, r.rows[p].push(E);
                }, x.prototype.getShortestRowIndex = function(r) {
                  for (var E = -1, p = Number.MAX_VALUE, v = 0; v < r.rows.length; v++)
                    r.rowWidth[v] < p && (E = v, p = r.rowWidth[v]);
                  return E;
                }, x.prototype.getLongestRowIndex = function(r) {
                  for (var E = -1, p = Number.MIN_VALUE, v = 0; v < r.rows.length; v++)
                    r.rowWidth[v] > p && (E = v, p = r.rowWidth[v]);
                  return E;
                }, x.prototype.canAddHorizontal = function(r, E, p) {
                  if (r.idealRowWidth) {
                    var v = r.rows.length - 1, m = r.rowWidth[v];
                    return m + E + r.horizontalPadding <= r.idealRowWidth;
                  }
                  var O = this.getShortestRowIndex(r);
                  if (O < 0)
                    return true;
                  var M = r.rowWidth[O];
                  if (M + r.horizontalPadding + E <= r.width) return true;
                  var C = 0;
                  r.rowHeight[O] < p && O > 0 && (C = p + r.verticalPadding - r.rowHeight[O]);
                  var F;
                  r.width - M >= E + r.horizontalPadding ? F = (r.height + C) / (M + E + r.horizontalPadding) : F = (r.height + C) / r.width, C = p + r.verticalPadding;
                  var U;
                  return r.width < E ? U = (r.height + C) / E : U = (r.height + C) / r.width, U < 1 && (U = 1 / U), F < 1 && (F = 1 / F), F < U;
                }, x.prototype.shiftToLastRow = function(r) {
                  var E = this.getLongestRowIndex(r), p = r.rowWidth.length - 1, v = r.rows[E], m = v[v.length - 1], O = m.width + r.horizontalPadding;
                  if (r.width - r.rowWidth[p] > O && E != p) {
                    v.splice(-1, 1), r.rows[p].push(m), r.rowWidth[E] = r.rowWidth[E] - O, r.rowWidth[p] = r.rowWidth[p] + O, r.width = r.rowWidth[instance.getLongestRowIndex(r)];
                    for (var M = Number.MIN_VALUE, C = 0; C < v.length; C++)
                      v[C].height > M && (M = v[C].height);
                    E > 0 && (M += r.verticalPadding);
                    var F = r.rowHeight[E] + r.rowHeight[p];
                    r.rowHeight[E] = M, r.rowHeight[p] < m.height + r.verticalPadding && (r.rowHeight[p] = m.height + r.verticalPadding);
                    var U = r.rowHeight[E] + r.rowHeight[p];
                    r.height += U - F, this.shiftToLastRow(r);
                  }
                }, x.prototype.tilingPreLayout = function() {
                  l.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, x.prototype.tilingPostLayout = function() {
                  l.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, x.prototype.reduceTrees = function() {
                  for (var r = [], E = true, p; E; ) {
                    var v = this.graphManager.getAllNodes(), m = [];
                    E = false;
                    for (var O = 0; O < v.length; O++)
                      if (p = v[O], p.getEdges().length == 1 && !p.getEdges()[0].isInterGraph && p.getChild() == null) {
                        if (l.PURE_INCREMENTAL) {
                          var M = p.getEdges()[0].getOtherEnd(p), C = new A(p.getCenterX() - M.getCenterX(), p.getCenterY() - M.getCenterY());
                          m.push([p, p.getEdges()[0], p.getOwner(), C]);
                        } else
                          m.push([p, p.getEdges()[0], p.getOwner()]);
                        E = true;
                      }
                    if (E == true) {
                      for (var F = [], U = 0; U < m.length; U++)
                        m[U][0].getEdges().length == 1 && (F.push(m[U]), m[U][0].getOwner().remove(m[U][0]));
                      r.push(F), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                    }
                  }
                  this.prunedNodesAll = r;
                }, x.prototype.growTree = function(r) {
                  for (var E = r.length, p = r[E - 1], v, m = 0; m < p.length; m++)
                    v = p[m], this.findPlaceforPrunedNode(v), v[2].add(v[0]), v[2].add(v[1], v[1].source, v[1].target);
                  r.splice(r.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, x.prototype.findPlaceforPrunedNode = function(r) {
                  var E, p, v = r[0];
                  if (v == r[1].source ? p = r[1].target : p = r[1].source, l.PURE_INCREMENTAL)
                    v.setCenter(p.getCenterX() + r[3].getWidth(), p.getCenterY() + r[3].getHeight());
                  else {
                    var m = p.startX, O = p.finishX, M = p.startY, C = p.finishY, F = 0, U = 0, z = 0, W = 0, B = [F, z, U, W];
                    if (M > 0)
                      for (var $ = m; $ <= O; $++)
                        B[0] += this.grid[$][M - 1].length + this.grid[$][M].length - 1;
                    if (O < this.grid.length - 1)
                      for (var $ = M; $ <= C; $++)
                        B[1] += this.grid[O + 1][$].length + this.grid[O][$].length - 1;
                    if (C < this.grid[0].length - 1)
                      for (var $ = m; $ <= O; $++)
                        B[2] += this.grid[$][C + 1].length + this.grid[$][C].length - 1;
                    if (m > 0)
                      for (var $ = M; $ <= C; $++)
                        B[3] += this.grid[m - 1][$].length + this.grid[m][$].length - 1;
                    for (var G = P.MAX_VALUE, D, b, q = 0; q < B.length; q++)
                      B[q] < G ? (G = B[q], D = 1, b = q) : B[q] == G && D++;
                    if (D == 3 && G == 0)
                      B[0] == 0 && B[1] == 0 && B[2] == 0 ? E = 1 : B[0] == 0 && B[1] == 0 && B[3] == 0 ? E = 0 : B[0] == 0 && B[2] == 0 && B[3] == 0 ? E = 3 : B[1] == 0 && B[2] == 0 && B[3] == 0 && (E = 2);
                    else if (D == 2 && G == 0) {
                      var et = Math.floor(Math.random() * 2);
                      B[0] == 0 && B[1] == 0 ? et == 0 ? E = 0 : E = 1 : B[0] == 0 && B[2] == 0 ? et == 0 ? E = 0 : E = 2 : B[0] == 0 && B[3] == 0 ? et == 0 ? E = 0 : E = 3 : B[1] == 0 && B[2] == 0 ? et == 0 ? E = 1 : E = 2 : B[1] == 0 && B[3] == 0 ? et == 0 ? E = 1 : E = 3 : et == 0 ? E = 2 : E = 3;
                    } else if (D == 4 && G == 0) {
                      var et = Math.floor(Math.random() * 4);
                      E = et;
                    } else
                      E = b;
                    E == 0 ? v.setCenter(p.getCenterX(), p.getCenterY() - p.getHeight() / 2 - h.DEFAULT_EDGE_LENGTH - v.getHeight() / 2) : E == 1 ? v.setCenter(p.getCenterX() + p.getWidth() / 2 + h.DEFAULT_EDGE_LENGTH + v.getWidth() / 2, p.getCenterY()) : E == 2 ? v.setCenter(p.getCenterX(), p.getCenterY() + p.getHeight() / 2 + h.DEFAULT_EDGE_LENGTH + v.getHeight() / 2) : v.setCenter(p.getCenterX() - p.getWidth() / 2 - h.DEFAULT_EDGE_LENGTH - v.getWidth() / 2, p.getCenterY());
                  }
                }, o.exports = x;
              }
            ),
            /***/
            991: (
              /***/
              (o, i2, e2) => {
                var s = e2(551).FDLayoutNode, n = e2(551).IMath;
                function f(a, l, c, h) {
                  s.call(this, a, l, c, h);
                }
                f.prototype = Object.create(s.prototype);
                for (var t in s)
                  f[t] = s[t];
                f.prototype.calculateDisplacement = function() {
                  var a = this.graphManager.getLayout();
                  this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += a.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += a.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += a.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += a.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementX = a.coolingFactor * a.maxNodeDisplacement * n.sign(this.displacementX)), Math.abs(this.displacementY) > a.coolingFactor * a.maxNodeDisplacement && (this.displacementY = a.coolingFactor * a.maxNodeDisplacement * n.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                }, f.prototype.propogateDisplacementToChildren = function(a, l) {
                  for (var c = this.getChild().getNodes(), h, N = 0; N < c.length; N++)
                    h = c[N], h.getChild() == null ? (h.displacementX += a, h.displacementY += l) : h.propogateDisplacementToChildren(a, l);
                }, f.prototype.move = function() {
                  var a = this.graphManager.getLayout();
                  (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), a.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, f.prototype.setPred1 = function(a) {
                  this.pred1 = a;
                }, f.prototype.getPred1 = function() {
                  return pred1;
                }, f.prototype.getPred2 = function() {
                  return pred2;
                }, f.prototype.setNext = function(a) {
                  this.next = a;
                }, f.prototype.getNext = function() {
                  return next;
                }, f.prototype.setProcessed = function(a) {
                  this.processed = a;
                }, f.prototype.isProcessed = function() {
                  return processed;
                }, o.exports = f;
              }
            ),
            /***/
            902: (
              /***/
              (o, i2, e2) => {
                function s(c) {
                  if (Array.isArray(c)) {
                    for (var h = 0, N = Array(c.length); h < c.length; h++)
                      N[h] = c[h];
                    return N;
                  } else
                    return Array.from(c);
                }
                var n = e2(806), f = e2(551).LinkedList, t = e2(551).Matrix, a = e2(551).SVD;
                function l() {
                }
                l.handleConstraints = function(c) {
                  var h = {};
                  h.fixedNodeConstraint = c.constraints.fixedNodeConstraint, h.alignmentConstraint = c.constraints.alignmentConstraint, h.relativePlacementConstraint = c.constraints.relativePlacementConstraint;
                  for (var N = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = [], A = [], I = c.getAllNodes(), P = 0, Y = 0; Y < I.length; Y++) {
                    var S = I[Y];
                    S.getChild() == null && (g.set(S.id, P++), y.push(S.getCenterX()), A.push(S.getCenterY()), N.set(S.id, S));
                  }
                  h.relativePlacementConstraint && h.relativePlacementConstraint.forEach(function(L) {
                    !L.gap && L.gap != 0 && (L.left ? L.gap = n.DEFAULT_EDGE_LENGTH + N.get(L.left).getWidth() / 2 + N.get(L.right).getWidth() / 2 : L.gap = n.DEFAULT_EDGE_LENGTH + N.get(L.top).getHeight() / 2 + N.get(L.bottom).getHeight() / 2);
                  });
                  var H = function(L, R) {
                    return { x: L.x - R.x, y: L.y - R.y };
                  }, Z = function(L) {
                    var R = 0, V = 0;
                    return L.forEach(function(Q) {
                      R += y[g.get(Q)], V += A[g.get(Q)];
                    }), { x: R / L.size, y: V / L.size };
                  }, x = function(L, R, V, Q, K) {
                    function pt(dt, at) {
                      var st = new Set(dt), It = true, ut2 = false, Ot = void 0;
                      try {
                        for (var Ut = at[Symbol.iterator](), Lt; !(It = (Lt = Ut.next()).done); It = true) {
                          var At = Lt.value;
                          st.add(At);
                        }
                      } catch (Ht) {
                        ut2 = true, Ot = Ht;
                      } finally {
                        try {
                          !It && Ut.return && Ut.return();
                        } finally {
                          if (ut2)
                            throw Ot;
                        }
                      }
                      return st;
                    }
                    var lt = /* @__PURE__ */ new Map();
                    L.forEach(function(dt, at) {
                      lt.set(at, 0);
                    }), L.forEach(function(dt, at) {
                      dt.forEach(function(st) {
                        lt.set(st.id, lt.get(st.id) + 1);
                      });
                    });
                    var tt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), rt = new f();
                    lt.forEach(function(dt, at) {
                      dt == 0 ? (rt.push(at), V || (R == "horizontal" ? tt.set(at, g.has(at) ? y[g.get(at)] : Q.get(at)) : tt.set(at, g.has(at) ? A[g.get(at)] : Q.get(at)))) : tt.set(at, Number.NEGATIVE_INFINITY), V && ct.set(at, /* @__PURE__ */ new Set([at]));
                    }), V && K.forEach(function(dt) {
                      var at = [];
                      if (dt.forEach(function(ut2) {
                        V.has(ut2) && at.push(ut2);
                      }), at.length > 0) {
                        var st = 0;
                        at.forEach(function(ut2) {
                          R == "horizontal" ? (tt.set(ut2, g.has(ut2) ? y[g.get(ut2)] : Q.get(ut2)), st += tt.get(ut2)) : (tt.set(ut2, g.has(ut2) ? A[g.get(ut2)] : Q.get(ut2)), st += tt.get(ut2));
                        }), st = st / at.length, dt.forEach(function(ut2) {
                          V.has(ut2) || tt.set(ut2, st);
                        });
                      } else {
                        var It = 0;
                        dt.forEach(function(ut2) {
                          R == "horizontal" ? It += g.has(ut2) ? y[g.get(ut2)] : Q.get(ut2) : It += g.has(ut2) ? A[g.get(ut2)] : Q.get(ut2);
                        }), It = It / dt.length, dt.forEach(function(ut2) {
                          tt.set(ut2, It);
                        });
                      }
                    });
                    for (var Nt = function() {
                      var dt = rt.shift(), at = L.get(dt);
                      at.forEach(function(st) {
                        if (tt.get(st.id) < tt.get(dt) + st.gap)
                          if (V && V.has(st.id)) {
                            var It = void 0;
                            if (R == "horizontal" ? It = g.has(st.id) ? y[g.get(st.id)] : Q.get(st.id) : It = g.has(st.id) ? A[g.get(st.id)] : Q.get(st.id), tt.set(st.id, It), It < tt.get(dt) + st.gap) {
                              var ut2 = tt.get(dt) + st.gap - It;
                              ct.get(dt).forEach(function(Ot) {
                                tt.set(Ot, tt.get(Ot) - ut2);
                              });
                            }
                          } else
                            tt.set(st.id, tt.get(dt) + st.gap);
                        lt.set(st.id, lt.get(st.id) - 1), lt.get(st.id) == 0 && rt.push(st.id), V && ct.set(st.id, pt(ct.get(dt), ct.get(st.id)));
                      });
                    }; rt.length != 0; )
                      Nt();
                    if (V) {
                      var yt = /* @__PURE__ */ new Set();
                      L.forEach(function(dt, at) {
                        dt.length == 0 && yt.add(at);
                      });
                      var Ct = [];
                      ct.forEach(function(dt, at) {
                        if (yt.has(at)) {
                          var st = false, It = true, ut2 = false, Ot = void 0;
                          try {
                            for (var Ut = dt[Symbol.iterator](), Lt; !(It = (Lt = Ut.next()).done); It = true) {
                              var At = Lt.value;
                              V.has(At) && (st = true);
                            }
                          } catch (Rt) {
                            ut2 = true, Ot = Rt;
                          } finally {
                            try {
                              !It && Ut.return && Ut.return();
                            } finally {
                              if (ut2)
                                throw Ot;
                            }
                          }
                          if (!st) {
                            var Ht = false, Yt = void 0;
                            Ct.forEach(function(Rt, kt) {
                              Rt.has([].concat(s(dt))[0]) && (Ht = true, Yt = kt);
                            }), Ht ? dt.forEach(function(Rt) {
                              Ct[Yt].add(Rt);
                            }) : Ct.push(new Set(dt));
                          }
                        }
                      }), Ct.forEach(function(dt, at) {
                        var st = Number.POSITIVE_INFINITY, It = Number.POSITIVE_INFINITY, ut2 = Number.NEGATIVE_INFINITY, Ot = Number.NEGATIVE_INFINITY, Ut = true, Lt = false, At = void 0;
                        try {
                          for (var Ht = dt[Symbol.iterator](), Yt; !(Ut = (Yt = Ht.next()).done); Ut = true) {
                            var Rt = Yt.value, kt = void 0;
                            R == "horizontal" ? kt = g.has(Rt) ? y[g.get(Rt)] : Q.get(Rt) : kt = g.has(Rt) ? A[g.get(Rt)] : Q.get(Rt);
                            var Zt = tt.get(Rt);
                            kt < st && (st = kt), kt > ut2 && (ut2 = kt), Zt < It && (It = Zt), Zt > Ot && (Ot = Zt);
                          }
                        } catch (Kt) {
                          Lt = true, At = Kt;
                        } finally {
                          try {
                            !Ut && Ht.return && Ht.return();
                          } finally {
                            if (Lt)
                              throw At;
                          }
                        }
                        var he = (st + ut2) / 2 - (It + Ot) / 2, re = true, Qt = false, Jt = void 0;
                        try {
                          for (var $t = dt[Symbol.iterator](), te; !(re = (te = $t.next()).done); re = true) {
                            var oe = te.value;
                            tt.set(oe, tt.get(oe) + he);
                          }
                        } catch (Kt) {
                          Qt = true, Jt = Kt;
                        } finally {
                          try {
                            !re && $t.return && $t.return();
                          } finally {
                            if (Qt)
                              throw Jt;
                          }
                        }
                      });
                    }
                    return tt;
                  }, ot = function(L) {
                    var R = 0, V = 0, Q = 0, K = 0;
                    if (L.forEach(function(ct) {
                      ct.left ? y[g.get(ct.left)] - y[g.get(ct.right)] >= 0 ? R++ : V++ : A[g.get(ct.top)] - A[g.get(ct.bottom)] >= 0 ? Q++ : K++;
                    }), R > V && Q > K)
                      for (var pt = 0; pt < g.size; pt++)
                        y[pt] = -1 * y[pt], A[pt] = -1 * A[pt];
                    else if (R > V)
                      for (var lt = 0; lt < g.size; lt++)
                        y[lt] = -1 * y[lt];
                    else if (Q > K)
                      for (var tt = 0; tt < g.size; tt++)
                        A[tt] = -1 * A[tt];
                  }, r = function(L) {
                    var R = [], V = new f(), Q = /* @__PURE__ */ new Set(), K = 0;
                    return L.forEach(function(pt, lt) {
                      if (!Q.has(lt)) {
                        R[K] = [];
                        var tt = lt;
                        for (V.push(tt), Q.add(tt), R[K].push(tt); V.length != 0; ) {
                          tt = V.shift();
                          var ct = L.get(tt);
                          ct.forEach(function(rt) {
                            Q.has(rt.id) || (V.push(rt.id), Q.add(rt.id), R[K].push(rt.id));
                          });
                        }
                        K++;
                      }
                    }), R;
                  }, E = function(L) {
                    var R = /* @__PURE__ */ new Map();
                    return L.forEach(function(V, Q) {
                      R.set(Q, []);
                    }), L.forEach(function(V, Q) {
                      V.forEach(function(K) {
                        R.get(Q).push(K), R.get(K.id).push({ id: Q, gap: K.gap, direction: K.direction });
                      });
                    }), R;
                  }, p = function(L) {
                    var R = /* @__PURE__ */ new Map();
                    return L.forEach(function(V, Q) {
                      R.set(Q, []);
                    }), L.forEach(function(V, Q) {
                      V.forEach(function(K) {
                        R.get(K.id).push({ id: Q, gap: K.gap, direction: K.direction });
                      });
                    }), R;
                  }, v = [], m = [], O = false, M = false, C = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), z = [];
                  if (h.fixedNodeConstraint && h.fixedNodeConstraint.forEach(function(L) {
                    C.add(L.nodeId);
                  }), h.relativePlacementConstraint && (h.relativePlacementConstraint.forEach(function(L) {
                    L.left ? (F.has(L.left) ? F.get(L.left).push({ id: L.right, gap: L.gap, direction: "horizontal" }) : F.set(L.left, [{ id: L.right, gap: L.gap, direction: "horizontal" }]), F.has(L.right) || F.set(L.right, [])) : (F.has(L.top) ? F.get(L.top).push({ id: L.bottom, gap: L.gap, direction: "vertical" }) : F.set(L.top, [{ id: L.bottom, gap: L.gap, direction: "vertical" }]), F.has(L.bottom) || F.set(L.bottom, []));
                  }), U = E(F), z = r(U)), n.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                    if (h.fixedNodeConstraint && h.fixedNodeConstraint.length > 1)
                      h.fixedNodeConstraint.forEach(function(L, R) {
                        v[R] = [L.position.x, L.position.y], m[R] = [y[g.get(L.nodeId)], A[g.get(L.nodeId)]];
                      }), O = true;
                    else if (h.alignmentConstraint)
                      (function() {
                        var L = 0;
                        if (h.alignmentConstraint.vertical) {
                          for (var R = h.alignmentConstraint.vertical, V = function(tt) {
                            var ct = /* @__PURE__ */ new Set();
                            R[tt].forEach(function(yt) {
                              ct.add(yt);
                            });
                            var rt = new Set([].concat(s(ct)).filter(function(yt) {
                              return C.has(yt);
                            })), Nt = void 0;
                            rt.size > 0 ? Nt = y[g.get(rt.values().next().value)] : Nt = Z(ct).x, R[tt].forEach(function(yt) {
                              v[L] = [Nt, A[g.get(yt)]], m[L] = [y[g.get(yt)], A[g.get(yt)]], L++;
                            });
                          }, Q = 0; Q < R.length; Q++)
                            V(Q);
                          O = true;
                        }
                        if (h.alignmentConstraint.horizontal) {
                          for (var K = h.alignmentConstraint.horizontal, pt = function(tt) {
                            var ct = /* @__PURE__ */ new Set();
                            K[tt].forEach(function(yt) {
                              ct.add(yt);
                            });
                            var rt = new Set([].concat(s(ct)).filter(function(yt) {
                              return C.has(yt);
                            })), Nt = void 0;
                            rt.size > 0 ? Nt = y[g.get(rt.values().next().value)] : Nt = Z(ct).y, K[tt].forEach(function(yt) {
                              v[L] = [y[g.get(yt)], Nt], m[L] = [y[g.get(yt)], A[g.get(yt)]], L++;
                            });
                          }, lt = 0; lt < K.length; lt++)
                            pt(lt);
                          O = true;
                        }
                        h.relativePlacementConstraint && (M = true);
                      })();
                    else if (h.relativePlacementConstraint) {
                      for (var W = 0, B = 0, $ = 0; $ < z.length; $++)
                        z[$].length > W && (W = z[$].length, B = $);
                      if (W < U.size / 2)
                        ot(h.relativePlacementConstraint), O = false, M = false;
                      else {
                        var G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), b = [];
                        z[B].forEach(function(L) {
                          F.get(L).forEach(function(R) {
                            R.direction == "horizontal" ? (G.has(L) ? G.get(L).push(R) : G.set(L, [R]), G.has(R.id) || G.set(R.id, []), b.push({ left: L, right: R.id })) : (D.has(L) ? D.get(L).push(R) : D.set(L, [R]), D.has(R.id) || D.set(R.id, []), b.push({ top: L, bottom: R.id }));
                          });
                        }), ot(b), M = false;
                        var q = x(G, "horizontal"), et = x(D, "vertical");
                        z[B].forEach(function(L, R) {
                          m[R] = [y[g.get(L)], A[g.get(L)]], v[R] = [], q.has(L) ? v[R][0] = q.get(L) : v[R][0] = y[g.get(L)], et.has(L) ? v[R][1] = et.get(L) : v[R][1] = A[g.get(L)];
                        }), O = true;
                      }
                    }
                    if (O) {
                      for (var vt = void 0, j = t.transpose(v), Dt = t.transpose(m), J = 0; J < j.length; J++)
                        j[J] = t.multGamma(j[J]), Dt[J] = t.multGamma(Dt[J]);
                      var nt = t.multMat(j, t.transpose(Dt)), mt = a.svd(nt);
                      vt = t.multMat(mt.V, t.transpose(mt.U));
                      for (var ht = 0; ht < g.size; ht++) {
                        var _t = [y[ht], A[ht]], Mt = [vt[0][0], vt[1][0]], Tt = [vt[0][1], vt[1][1]];
                        y[ht] = t.dotProduct(_t, Mt), A[ht] = t.dotProduct(_t, Tt);
                      }
                      M && ot(h.relativePlacementConstraint);
                    }
                  }
                  if (n.ENFORCE_CONSTRAINTS) {
                    if (h.fixedNodeConstraint && h.fixedNodeConstraint.length > 0) {
                      var wt = { x: 0, y: 0 };
                      h.fixedNodeConstraint.forEach(function(L, R) {
                        var V = { x: y[g.get(L.nodeId)], y: A[g.get(L.nodeId)] }, Q = L.position, K = H(Q, V);
                        wt.x += K.x, wt.y += K.y;
                      }), wt.x /= h.fixedNodeConstraint.length, wt.y /= h.fixedNodeConstraint.length, y.forEach(function(L, R) {
                        y[R] += wt.x;
                      }), A.forEach(function(L, R) {
                        A[R] += wt.y;
                      }), h.fixedNodeConstraint.forEach(function(L) {
                        y[g.get(L.nodeId)] = L.position.x, A[g.get(L.nodeId)] = L.position.y;
                      });
                    }
                    if (h.alignmentConstraint) {
                      if (h.alignmentConstraint.vertical)
                        for (var Wt = h.alignmentConstraint.vertical, bt = function(L) {
                          var R = /* @__PURE__ */ new Set();
                          Wt[L].forEach(function(K) {
                            R.add(K);
                          });
                          var V = new Set([].concat(s(R)).filter(function(K) {
                            return C.has(K);
                          })), Q = void 0;
                          V.size > 0 ? Q = y[g.get(V.values().next().value)] : Q = Z(R).x, R.forEach(function(K) {
                            C.has(K) || (y[g.get(K)] = Q);
                          });
                        }, Pt = 0; Pt < Wt.length; Pt++)
                          bt(Pt);
                      if (h.alignmentConstraint.horizontal)
                        for (var St = h.alignmentConstraint.horizontal, zt = function(L) {
                          var R = /* @__PURE__ */ new Set();
                          St[L].forEach(function(K) {
                            R.add(K);
                          });
                          var V = new Set([].concat(s(R)).filter(function(K) {
                            return C.has(K);
                          })), Q = void 0;
                          V.size > 0 ? Q = A[g.get(V.values().next().value)] : Q = Z(R).y, R.forEach(function(K) {
                            C.has(K) || (A[g.get(K)] = Q);
                          });
                        }, Gt = 0; Gt < St.length; Gt++)
                          zt(Gt);
                    }
                    h.relativePlacementConstraint && function() {
                      var L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Set(), tt = /* @__PURE__ */ new Set();
                      if (C.forEach(function(ft) {
                        lt.add(ft), tt.add(ft);
                      }), h.alignmentConstraint) {
                        if (h.alignmentConstraint.vertical)
                          for (var ct = h.alignmentConstraint.vertical, rt = function(ft) {
                            V.set("dummy" + ft, []), ct[ft].forEach(function(xt) {
                              L.set(xt, "dummy" + ft), V.get("dummy" + ft).push(xt), C.has(xt) && lt.add("dummy" + ft);
                            }), K.set("dummy" + ft, y[g.get(ct[ft][0])]);
                          }, Nt = 0; Nt < ct.length; Nt++)
                            rt(Nt);
                        if (h.alignmentConstraint.horizontal)
                          for (var yt = h.alignmentConstraint.horizontal, Ct = function(ft) {
                            Q.set("dummy" + ft, []), yt[ft].forEach(function(xt) {
                              R.set(xt, "dummy" + ft), Q.get("dummy" + ft).push(xt), C.has(xt) && tt.add("dummy" + ft);
                            }), pt.set("dummy" + ft, A[g.get(yt[ft][0])]);
                          }, dt = 0; dt < yt.length; dt++)
                            Ct(dt);
                      }
                      var at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), It = function(ft) {
                        F.get(ft).forEach(function(xt) {
                          var Bt = void 0, Vt = void 0;
                          xt.direction == "horizontal" ? (Bt = L.get(ft) ? L.get(ft) : ft, L.get(xt.id) ? Vt = { id: L.get(xt.id), gap: xt.gap, direction: xt.direction } : Vt = xt, at.has(Bt) ? at.get(Bt).push(Vt) : at.set(Bt, [Vt]), at.has(Vt.id) || at.set(Vt.id, [])) : (Bt = R.get(ft) ? R.get(ft) : ft, R.get(xt.id) ? Vt = { id: R.get(xt.id), gap: xt.gap, direction: xt.direction } : Vt = xt, st.has(Bt) ? st.get(Bt).push(Vt) : st.set(Bt, [Vt]), st.has(Vt.id) || st.set(Vt.id, []));
                        });
                      }, ut2 = true, Ot = false, Ut = void 0;
                      try {
                        for (var Lt = F.keys()[Symbol.iterator](), At; !(ut2 = (At = Lt.next()).done); ut2 = true) {
                          var Ht = At.value;
                          It(Ht);
                        }
                      } catch (ft) {
                        Ot = true, Ut = ft;
                      } finally {
                        try {
                          !ut2 && Lt.return && Lt.return();
                        } finally {
                          if (Ot)
                            throw Ut;
                        }
                      }
                      var Yt = E(at), Rt = E(st), kt = r(Yt), Zt = r(Rt), he = p(at), re = p(st), Qt = [], Jt = [];
                      kt.forEach(function(ft, xt) {
                        Qt[xt] = [], ft.forEach(function(Bt) {
                          he.get(Bt).length == 0 && Qt[xt].push(Bt);
                        });
                      }), Zt.forEach(function(ft, xt) {
                        Jt[xt] = [], ft.forEach(function(Bt) {
                          re.get(Bt).length == 0 && Jt[xt].push(Bt);
                        });
                      });
                      var $t = x(at, "horizontal", lt, K, Qt), te = x(st, "vertical", tt, pt, Jt), oe = function(ft) {
                        V.get(ft) ? V.get(ft).forEach(function(xt) {
                          y[g.get(xt)] = $t.get(ft);
                        }) : y[g.get(ft)] = $t.get(ft);
                      }, Kt = true, Ae = false, we = void 0;
                      try {
                        for (var le = $t.keys()[Symbol.iterator](), Ie; !(Kt = (Ie = le.next()).done); Kt = true) {
                          var de = Ie.value;
                          oe(de);
                        }
                      } catch (ft) {
                        Ae = true, we = ft;
                      } finally {
                        try {
                          !Kt && le.return && le.return();
                        } finally {
                          if (Ae)
                            throw we;
                        }
                      }
                      var je = function(ft) {
                        Q.get(ft) ? Q.get(ft).forEach(function(xt) {
                          A[g.get(xt)] = te.get(ft);
                        }) : A[g.get(ft)] = te.get(ft);
                      }, ge = true, Le = false, _e = void 0;
                      try {
                        for (var ce = te.keys()[Symbol.iterator](), Me; !(ge = (Me = ce.next()).done); ge = true) {
                          var de = Me.value;
                          je(de);
                        }
                      } catch (ft) {
                        Le = true, _e = ft;
                      } finally {
                        try {
                          !ge && ce.return && ce.return();
                        } finally {
                          if (Le)
                            throw _e;
                        }
                      }
                    }();
                  }
                  for (var jt = 0; jt < I.length; jt++) {
                    var gt = I[jt];
                    gt.getChild() == null && gt.setCenter(y[g.get(gt.id)], A[g.get(gt.id)]);
                  }
                }, o.exports = l;
              }
            ),
            /***/
            551: (
              /***/
              (o) => {
                o.exports = _2;
              }
            )
            /******/
          }, T = {};
          function u(o) {
            var i2 = T[o];
            if (i2 !== void 0)
              return i2.exports;
            var e2 = T[o] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return k[o](e2, e2.exports, u), e2.exports;
          }
          var d = u(45);
          return d;
        })()
      );
    });
  }(pe)), pe.exports;
}
var mi = fe2.exports;
var De;
function yi() {
  return De || (De = 1, function(w, X) {
    (function(_2, k) {
      w.exports = k(vi());
    })(mi, function(_2) {
      return (
        /******/
        (() => {
          var k = {
            /***/
            658: (
              /***/
              (o) => {
                o.exports = Object.assign != null ? Object.assign.bind(Object) : function(i2) {
                  for (var e2 = arguments.length, s = Array(e2 > 1 ? e2 - 1 : 0), n = 1; n < e2; n++)
                    s[n - 1] = arguments[n];
                  return s.forEach(function(f) {
                    Object.keys(f).forEach(function(t) {
                      return i2[t] = f[t];
                    });
                  }), i2;
                };
              }
            ),
            /***/
            548: (
              /***/
              (o, i2, e2) => {
                var s = /* @__PURE__ */ function() {
                  function t(a, l) {
                    var c = [], h = true, N = false, g = void 0;
                    try {
                      for (var y = a[Symbol.iterator](), A; !(h = (A = y.next()).done) && (c.push(A.value), !(l && c.length === l)); h = true)
                        ;
                    } catch (I) {
                      N = true, g = I;
                    } finally {
                      try {
                        !h && y.return && y.return();
                      } finally {
                        if (N) throw g;
                      }
                    }
                    return c;
                  }
                  return function(a, l) {
                    if (Array.isArray(a))
                      return a;
                    if (Symbol.iterator in Object(a))
                      return t(a, l);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  };
                }(), n = e2(140).layoutBase.LinkedList, f = {};
                f.getTopMostNodes = function(t) {
                  for (var a = {}, l = 0; l < t.length; l++)
                    a[t[l].id()] = true;
                  var c = t.filter(function(h, N) {
                    typeof h == "number" && (h = N);
                    for (var g = h.parent()[0]; g != null; ) {
                      if (a[g.id()])
                        return false;
                      g = g.parent()[0];
                    }
                    return true;
                  });
                  return c;
                }, f.connectComponents = function(t, a, l, c) {
                  var h = new n(), N = /* @__PURE__ */ new Set(), g = [], y = void 0, A = void 0, I = void 0, P = false, Y = 1, S = [], H = [], Z = function() {
                    var x = t.collection();
                    H.push(x);
                    var ot = l[0], r = t.collection();
                    r.merge(ot).merge(ot.descendants().intersection(a)), g.push(ot), r.forEach(function(v) {
                      h.push(v), N.add(v), x.merge(v);
                    });
                    for (var E = function() {
                      ot = h.shift();
                      var v = t.collection();
                      ot.neighborhood().nodes().forEach(function(C) {
                        a.intersection(ot.edgesWith(C)).length > 0 && v.merge(C);
                      });
                      for (var m = 0; m < v.length; m++) {
                        var O = v[m];
                        if (y = l.intersection(O.union(O.ancestors())), y != null && !N.has(y[0])) {
                          var M = y.union(y.descendants());
                          M.forEach(function(C) {
                            h.push(C), N.add(C), x.merge(C), l.has(C) && g.push(C);
                          });
                        }
                      }
                    }; h.length != 0; )
                      E();
                    if (x.forEach(function(v) {
                      a.intersection(v.connectedEdges()).forEach(function(m) {
                        x.has(m.source()) && x.has(m.target()) && x.merge(m);
                      });
                    }), g.length == l.length && (P = true), !P || P && Y > 1) {
                      A = g[0], I = A.connectedEdges().length, g.forEach(function(v) {
                        v.connectedEdges().length < I && (I = v.connectedEdges().length, A = v);
                      }), S.push(A.id());
                      var p = t.collection();
                      p.merge(g[0]), g.forEach(function(v) {
                        p.merge(v);
                      }), g = [], l = l.difference(p), Y++;
                    }
                  };
                  do
                    Z();
                  while (!P);
                  return c && S.length > 0 && c.set("dummy" + (c.size + 1), S), H;
                }, f.relocateComponent = function(t, a, l) {
                  if (!l.fixedNodeConstraint) {
                    var c = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, N = Number.POSITIVE_INFINITY, g = Number.NEGATIVE_INFINITY;
                    if (l.quality == "draft") {
                      var y = true, A = false, I = void 0;
                      try {
                        for (var P = a.nodeIndexes[Symbol.iterator](), Y; !(y = (Y = P.next()).done); y = true) {
                          var S = Y.value, H = s(S, 2), Z = H[0], x = H[1], ot = l.cy.getElementById(Z);
                          if (ot) {
                            var r = ot.boundingBox(), E = a.xCoords[x] - r.w / 2, p = a.xCoords[x] + r.w / 2, v = a.yCoords[x] - r.h / 2, m = a.yCoords[x] + r.h / 2;
                            E < c && (c = E), p > h && (h = p), v < N && (N = v), m > g && (g = m);
                          }
                        }
                      } catch (U) {
                        A = true, I = U;
                      } finally {
                        try {
                          !y && P.return && P.return();
                        } finally {
                          if (A)
                            throw I;
                        }
                      }
                      var O = t.x - (h + c) / 2, M = t.y - (g + N) / 2;
                      a.xCoords = a.xCoords.map(function(U) {
                        return U + O;
                      }), a.yCoords = a.yCoords.map(function(U) {
                        return U + M;
                      });
                    } else {
                      Object.keys(a).forEach(function(U) {
                        var z = a[U], W = z.getRect().x, B = z.getRect().x + z.getRect().width, $ = z.getRect().y, G = z.getRect().y + z.getRect().height;
                        W < c && (c = W), B > h && (h = B), $ < N && (N = $), G > g && (g = G);
                      });
                      var C = t.x - (h + c) / 2, F = t.y - (g + N) / 2;
                      Object.keys(a).forEach(function(U) {
                        var z = a[U];
                        z.setCenter(z.getCenterX() + C, z.getCenterY() + F);
                      });
                    }
                  }
                }, f.calcBoundingBox = function(t, a, l, c) {
                  for (var h = Number.MAX_SAFE_INTEGER, N = Number.MIN_SAFE_INTEGER, g = Number.MAX_SAFE_INTEGER, y = Number.MIN_SAFE_INTEGER, A = void 0, I = void 0, P = void 0, Y = void 0, S = t.descendants().not(":parent"), H = S.length, Z = 0; Z < H; Z++) {
                    var x = S[Z];
                    A = a[c.get(x.id())] - x.width() / 2, I = a[c.get(x.id())] + x.width() / 2, P = l[c.get(x.id())] - x.height() / 2, Y = l[c.get(x.id())] + x.height() / 2, h > A && (h = A), N < I && (N = I), g > P && (g = P), y < Y && (y = Y);
                  }
                  var ot = {};
                  return ot.topLeftX = h, ot.topLeftY = g, ot.width = N - h, ot.height = y - g, ot;
                }, f.calcParentsWithoutChildren = function(t, a) {
                  var l = t.collection();
                  return a.nodes(":parent").forEach(function(c) {
                    var h = false;
                    c.children().forEach(function(N) {
                      N.css("display") != "none" && (h = true);
                    }), h || l.merge(c);
                  }), l;
                }, o.exports = f;
              }
            ),
            /***/
            816: (
              /***/
              (o, i2, e2) => {
                var s = e2(548), n = e2(140).CoSELayout, f = e2(140).CoSENode, t = e2(140).layoutBase.PointD, a = e2(140).layoutBase.DimensionD, l = e2(140).layoutBase.LayoutConstants, c = e2(140).layoutBase.FDLayoutConstants, h = e2(140).CoSEConstants, N = function(g, y) {
                  var A = g.cy, I = g.eles, P = I.nodes(), Y = I.edges(), S = void 0, H = void 0, Z = void 0, x = {};
                  g.randomize && (S = y.nodeIndexes, H = y.xCoords, Z = y.yCoords);
                  var ot = function(C) {
                    return typeof C == "function";
                  }, r = function(C, F) {
                    return ot(C) ? C(F) : C;
                  }, E = s.calcParentsWithoutChildren(A, I), p = function C(F, U, z, W) {
                    for (var B = U.length, $ = 0; $ < B; $++) {
                      var G = U[$], D = null;
                      G.intersection(E).length == 0 && (D = G.children());
                      var b = void 0, q = G.layoutDimensions({
                        nodeDimensionsIncludeLabels: W.nodeDimensionsIncludeLabels
                      });
                      if (G.outerWidth() != null && G.outerHeight() != null)
                        if (W.randomize)
                          if (!G.isParent())
                            b = F.add(new f(z.graphManager, new t(H[S.get(G.id())] - q.w / 2, Z[S.get(G.id())] - q.h / 2), new a(parseFloat(q.w), parseFloat(q.h))));
                          else {
                            var et = s.calcBoundingBox(G, H, Z, S);
                            G.intersection(E).length == 0 ? b = F.add(new f(z.graphManager, new t(et.topLeftX, et.topLeftY), new a(et.width, et.height))) : b = F.add(new f(z.graphManager, new t(et.topLeftX, et.topLeftY), new a(parseFloat(q.w), parseFloat(q.h))));
                          }
                        else
                          b = F.add(new f(z.graphManager, new t(G.position("x") - q.w / 2, G.position("y") - q.h / 2), new a(parseFloat(q.w), parseFloat(q.h))));
                      else
                        b = F.add(new f(this.graphManager));
                      if (b.id = G.data("id"), b.nodeRepulsion = r(W.nodeRepulsion, G), b.paddingLeft = parseInt(G.css("padding")), b.paddingTop = parseInt(G.css("padding")), b.paddingRight = parseInt(G.css("padding")), b.paddingBottom = parseInt(G.css("padding")), W.nodeDimensionsIncludeLabels && (b.labelWidth = G.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, b.labelHeight = G.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, b.labelPosVertical = G.css("text-valign"), b.labelPosHorizontal = G.css("text-halign")), x[G.data("id")] = b, isNaN(b.rect.x) && (b.rect.x = 0), isNaN(b.rect.y) && (b.rect.y = 0), D != null && D.length > 0) {
                        var vt = void 0;
                        vt = z.getGraphManager().add(z.newGraph(), b), C(vt, D, z, W);
                      }
                    }
                  }, v = function(C, F, U) {
                    for (var z = 0, W = 0, B = 0; B < U.length; B++) {
                      var $ = U[B], G = x[$.data("source")], D = x[$.data("target")];
                      if (G && D && G !== D && G.getEdgesBetween(D).length == 0) {
                        var b = F.add(C.newEdge(), G, D);
                        b.id = $.id(), b.idealLength = r(g.idealEdgeLength, $), b.edgeElasticity = r(g.edgeElasticity, $), z += b.idealLength, W++;
                      }
                    }
                    g.idealEdgeLength != null && (W > 0 ? h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = z / W : ot(g.idealEdgeLength) ? h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = 50 : h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = g.idealEdgeLength, h.MIN_REPULSION_DIST = c.MIN_REPULSION_DIST = c.DEFAULT_EDGE_LENGTH / 10, h.DEFAULT_RADIAL_SEPARATION = c.DEFAULT_EDGE_LENGTH);
                  }, m = function(C, F) {
                    F.fixedNodeConstraint && (C.constraints.fixedNodeConstraint = F.fixedNodeConstraint), F.alignmentConstraint && (C.constraints.alignmentConstraint = F.alignmentConstraint), F.relativePlacementConstraint && (C.constraints.relativePlacementConstraint = F.relativePlacementConstraint);
                  };
                  g.nestingFactor != null && (h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = g.nestingFactor), g.gravity != null && (h.DEFAULT_GRAVITY_STRENGTH = c.DEFAULT_GRAVITY_STRENGTH = g.gravity), g.numIter != null && (h.MAX_ITERATIONS = c.MAX_ITERATIONS = g.numIter), g.gravityRange != null && (h.DEFAULT_GRAVITY_RANGE_FACTOR = c.DEFAULT_GRAVITY_RANGE_FACTOR = g.gravityRange), g.gravityCompound != null && (h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH = g.gravityCompound), g.gravityRangeCompound != null && (h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = g.gravityRangeCompound), g.initialEnergyOnIncremental != null && (h.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.DEFAULT_COOLING_FACTOR_INCREMENTAL = g.initialEnergyOnIncremental), g.tilingCompareBy != null && (h.TILING_COMPARE_BY = g.tilingCompareBy), g.quality == "proof" ? l.QUALITY = 2 : l.QUALITY = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS = c.NODE_DIMENSIONS_INCLUDE_LABELS = l.NODE_DIMENSIONS_INCLUDE_LABELS = g.nodeDimensionsIncludeLabels, h.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = !g.randomize, h.ANIMATE = c.ANIMATE = l.ANIMATE = g.animate, h.TILE = g.tile, h.TILING_PADDING_VERTICAL = typeof g.tilingPaddingVertical == "function" ? g.tilingPaddingVertical.call() : g.tilingPaddingVertical, h.TILING_PADDING_HORIZONTAL = typeof g.tilingPaddingHorizontal == "function" ? g.tilingPaddingHorizontal.call() : g.tilingPaddingHorizontal, h.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = l.DEFAULT_INCREMENTAL = true, h.PURE_INCREMENTAL = !g.randomize, l.DEFAULT_UNIFORM_LEAF_NODE_SIZES = g.uniformNodeDimensions, g.step == "transformed" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = true, h.ENFORCE_CONSTRAINTS = false, h.APPLY_LAYOUT = false), g.step == "enforced" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = true, h.APPLY_LAYOUT = false), g.step == "cose" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = false, h.APPLY_LAYOUT = true), g.step == "all" && (g.randomize ? h.TRANSFORM_ON_CONSTRAINT_HANDLING = true : h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = true, h.APPLY_LAYOUT = true), g.fixedNodeConstraint || g.alignmentConstraint || g.relativePlacementConstraint ? h.TREE_REDUCTION_ON_INCREMENTAL = false : h.TREE_REDUCTION_ON_INCREMENTAL = true;
                  var O = new n(), M = O.newGraphManager();
                  return p(M.addRoot(), s.getTopMostNodes(P), O, g), v(O, M, Y), m(O, g), O.runLayout(), x;
                };
                o.exports = { coseLayout: N };
              }
            ),
            /***/
            212: (
              /***/
              (o, i2, e2) => {
                var s = /* @__PURE__ */ function() {
                  function y(A, I) {
                    for (var P = 0; P < I.length; P++) {
                      var Y = I[P];
                      Y.enumerable = Y.enumerable || false, Y.configurable = true, "value" in Y && (Y.writable = true), Object.defineProperty(A, Y.key, Y);
                    }
                  }
                  return function(A, I, P) {
                    return I && y(A.prototype, I), P && y(A, P), A;
                  };
                }();
                function n(y, A) {
                  if (!(y instanceof A))
                    throw new TypeError("Cannot call a class as a function");
                }
                var f = e2(658), t = e2(548), a = e2(657), l = a.spectralLayout, c = e2(816), h = c.coseLayout, N = Object.freeze({
                  // 'draft', 'default' or 'proof' 
                  // - 'draft' only applies spectral layout 
                  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
                  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
                  quality: "default",
                  // Use random node positions at beginning of layout
                  // if this is set to false, then quality option must be "proof"
                  randomize: true,
                  // Whether or not to animate the layout
                  animate: true,
                  // Duration of animation in ms, if enabled
                  animationDuration: 1e3,
                  // Easing of animation, if enabled
                  animationEasing: void 0,
                  // Fit the viewport to the repositioned nodes
                  fit: true,
                  // Padding around layout
                  padding: 30,
                  // Whether to include labels in node dimensions. Valid in "proof" quality
                  nodeDimensionsIncludeLabels: false,
                  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
                  uniformNodeDimensions: false,
                  // Whether to pack disconnected components - valid only if randomize: true
                  packComponents: true,
                  // Layout step - all, transformed, enforced, cose - for debug purpose only
                  step: "all",
                  /* spectral layout options */
                  // False for random, true for greedy
                  samplingType: true,
                  // Sample size to construct distance matrix
                  sampleSize: 25,
                  // Separation amount between nodes
                  nodeSeparation: 75,
                  // Power iteration tolerance
                  piTol: 1e-7,
                  /* CoSE layout options */
                  // Node repulsion (non overlapping) multiplier
                  nodeRepulsion: function(y) {
                    return 4500;
                  },
                  // Ideal edge (non nested) length
                  idealEdgeLength: function(y) {
                    return 50;
                  },
                  // Divisor to compute edge forces
                  edgeElasticity: function(y) {
                    return 0.45;
                  },
                  // Nesting factor (multiplier) to compute ideal edge length for nested edges
                  nestingFactor: 0.1,
                  // Gravity force (constant)
                  gravity: 0.25,
                  // Maximum number of iterations to perform
                  numIter: 2500,
                  // For enabling tiling
                  tile: true,
                  // The function that specifies the criteria for comparing nodes while sorting them during tiling operation.
                  // Takes the node id as a parameter and the default tiling operation is perfomed when this option is not set.
                  tilingCompareBy: void 0,
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
                  initialEnergyOnIncremental: 0.3,
                  /* constraint options */
                  // Fix required nodes to predefined positions
                  // [{nodeId: 'n1', position: {x: 100, y: 200}, {...}]
                  fixedNodeConstraint: void 0,
                  // Align required nodes in vertical/horizontal direction
                  // {vertical: [['n1', 'n2')], ['n3', 'n4']], horizontal: ['n2', 'n4']}
                  alignmentConstraint: void 0,
                  // Place two nodes relatively in vertical/horizontal direction 
                  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}]
                  relativePlacementConstraint: void 0,
                  /* layout event callbacks */
                  ready: function() {
                  },
                  // on layoutready
                  stop: function() {
                  }
                  // on layoutstop
                }), g = function() {
                  function y(A) {
                    n(this, y), this.options = f({}, N, A);
                  }
                  return s(y, [{
                    key: "run",
                    value: function() {
                      var A = this, I = this.options, P = I.cy, Y = I.eles, S = [], H = [], Z = void 0, x = [];
                      I.fixedNodeConstraint && (!Array.isArray(I.fixedNodeConstraint) || I.fixedNodeConstraint.length == 0) && (I.fixedNodeConstraint = void 0), I.alignmentConstraint && (I.alignmentConstraint.vertical && (!Array.isArray(I.alignmentConstraint.vertical) || I.alignmentConstraint.vertical.length == 0) && (I.alignmentConstraint.vertical = void 0), I.alignmentConstraint.horizontal && (!Array.isArray(I.alignmentConstraint.horizontal) || I.alignmentConstraint.horizontal.length == 0) && (I.alignmentConstraint.horizontal = void 0)), I.relativePlacementConstraint && (!Array.isArray(I.relativePlacementConstraint) || I.relativePlacementConstraint.length == 0) && (I.relativePlacementConstraint = void 0);
                      var ot = I.fixedNodeConstraint || I.alignmentConstraint || I.relativePlacementConstraint;
                      ot && (I.tile = false, I.packComponents = false);
                      var r = void 0, E = false;
                      if (P.layoutUtilities && I.packComponents && (r = P.layoutUtilities("get"), r || (r = P.layoutUtilities()), E = true), Y.nodes().length > 0)
                        if (E) {
                          var p = t.getTopMostNodes(I.eles.nodes());
                          if (Z = t.connectComponents(P, I.eles, p), Z.forEach(function(J) {
                            var nt = J.boundingBox();
                            x.push({ x: nt.x1 + nt.w / 2, y: nt.y1 + nt.h / 2 });
                          }), I.randomize && Z.forEach(function(J) {
                            I.eles = J, S.push(l(I));
                          }), I.quality == "default" || I.quality == "proof") {
                            var v = P.collection();
                            if (I.tile) {
                              var m = /* @__PURE__ */ new Map(), O = [], M = [], C = 0, F = { nodeIndexes: m, xCoords: O, yCoords: M }, U = [];
                              if (Z.forEach(function(J, nt) {
                                J.edges().length == 0 && (J.nodes().forEach(function(mt, ht) {
                                  v.merge(J.nodes()[ht]), mt.isParent() || (F.nodeIndexes.set(J.nodes()[ht].id(), C++), F.xCoords.push(J.nodes()[0].position().x), F.yCoords.push(J.nodes()[0].position().y));
                                }), U.push(nt));
                              }), v.length > 1) {
                                var z = v.boundingBox();
                                x.push({ x: z.x1 + z.w / 2, y: z.y1 + z.h / 2 }), Z.push(v), S.push(F);
                                for (var W = U.length - 1; W >= 0; W--)
                                  Z.splice(U[W], 1), S.splice(U[W], 1), x.splice(U[W], 1);
                              }
                            }
                            Z.forEach(function(J, nt) {
                              I.eles = J, H.push(h(I, S[nt])), t.relocateComponent(x[nt], H[nt], I);
                            });
                          } else
                            Z.forEach(function(J, nt) {
                              t.relocateComponent(x[nt], S[nt], I);
                            });
                          var B = /* @__PURE__ */ new Set();
                          if (Z.length > 1) {
                            var $ = [], G = Y.filter(function(J) {
                              return J.css("display") == "none";
                            });
                            Z.forEach(function(J, nt) {
                              var mt = void 0;
                              if (I.quality == "draft" && (mt = S[nt].nodeIndexes), J.nodes().not(G).length > 0) {
                                var ht = {};
                                ht.edges = [], ht.nodes = [];
                                var _t = void 0;
                                J.nodes().not(G).forEach(function(Mt) {
                                  if (I.quality == "draft")
                                    if (!Mt.isParent())
                                      _t = mt.get(Mt.id()), ht.nodes.push({ x: S[nt].xCoords[_t] - Mt.boundingbox().w / 2, y: S[nt].yCoords[_t] - Mt.boundingbox().h / 2, width: Mt.boundingbox().w, height: Mt.boundingbox().h });
                                    else {
                                      var Tt = t.calcBoundingBox(Mt, S[nt].xCoords, S[nt].yCoords, mt);
                                      ht.nodes.push({ x: Tt.topLeftX, y: Tt.topLeftY, width: Tt.width, height: Tt.height });
                                    }
                                  else
                                    H[nt][Mt.id()] && ht.nodes.push({ x: H[nt][Mt.id()].getLeft(), y: H[nt][Mt.id()].getTop(), width: H[nt][Mt.id()].getWidth(), height: H[nt][Mt.id()].getHeight() });
                                }), J.edges().forEach(function(Mt) {
                                  var Tt = Mt.source(), wt = Mt.target();
                                  if (Tt.css("display") != "none" && wt.css("display") != "none")
                                    if (I.quality == "draft") {
                                      var Wt = mt.get(Tt.id()), bt = mt.get(wt.id()), Pt = [], St = [];
                                      if (Tt.isParent()) {
                                        var zt = t.calcBoundingBox(Tt, S[nt].xCoords, S[nt].yCoords, mt);
                                        Pt.push(zt.topLeftX + zt.width / 2), Pt.push(zt.topLeftY + zt.height / 2);
                                      } else
                                        Pt.push(S[nt].xCoords[Wt]), Pt.push(S[nt].yCoords[Wt]);
                                      if (wt.isParent()) {
                                        var Gt = t.calcBoundingBox(wt, S[nt].xCoords, S[nt].yCoords, mt);
                                        St.push(Gt.topLeftX + Gt.width / 2), St.push(Gt.topLeftY + Gt.height / 2);
                                      } else
                                        St.push(S[nt].xCoords[bt]), St.push(S[nt].yCoords[bt]);
                                      ht.edges.push({ startX: Pt[0], startY: Pt[1], endX: St[0], endY: St[1] });
                                    } else
                                      H[nt][Tt.id()] && H[nt][wt.id()] && ht.edges.push({ startX: H[nt][Tt.id()].getCenterX(), startY: H[nt][Tt.id()].getCenterY(), endX: H[nt][wt.id()].getCenterX(), endY: H[nt][wt.id()].getCenterY() });
                                }), ht.nodes.length > 0 && ($.push(ht), B.add(nt));
                              }
                            });
                            var D = r.packComponents($, I.randomize).shifts;
                            if (I.quality == "draft")
                              S.forEach(function(J, nt) {
                                var mt = J.xCoords.map(function(_t) {
                                  return _t + D[nt].dx;
                                }), ht = J.yCoords.map(function(_t) {
                                  return _t + D[nt].dy;
                                });
                                J.xCoords = mt, J.yCoords = ht;
                              });
                            else {
                              var b = 0;
                              B.forEach(function(J) {
                                Object.keys(H[J]).forEach(function(nt) {
                                  var mt = H[J][nt];
                                  mt.setCenter(mt.getCenterX() + D[b].dx, mt.getCenterY() + D[b].dy);
                                }), b++;
                              });
                            }
                          }
                        } else {
                          var q = I.eles.boundingBox();
                          if (x.push({ x: q.x1 + q.w / 2, y: q.y1 + q.h / 2 }), I.randomize) {
                            var et = l(I);
                            S.push(et);
                          }
                          I.quality == "default" || I.quality == "proof" ? (H.push(h(I, S[0])), t.relocateComponent(x[0], H[0], I)) : t.relocateComponent(x[0], S[0], I);
                        }
                      var vt = function(J, nt) {
                        if (I.quality == "default" || I.quality == "proof") {
                          typeof J == "number" && (J = nt);
                          var mt = void 0, ht = void 0, _t = J.data("id");
                          return H.forEach(function(Tt) {
                            _t in Tt && (mt = { x: Tt[_t].getRect().getCenterX(), y: Tt[_t].getRect().getCenterY() }, ht = Tt[_t]);
                          }), I.nodeDimensionsIncludeLabels && (ht.labelWidth && (ht.labelPosHorizontal == "left" ? mt.x += ht.labelWidth / 2 : ht.labelPosHorizontal == "right" && (mt.x -= ht.labelWidth / 2)), ht.labelHeight && (ht.labelPosVertical == "top" ? mt.y += ht.labelHeight / 2 : ht.labelPosVertical == "bottom" && (mt.y -= ht.labelHeight / 2))), mt == null && (mt = { x: J.position("x"), y: J.position("y") }), {
                            x: mt.x,
                            y: mt.y
                          };
                        } else {
                          var Mt = void 0;
                          return S.forEach(function(Tt) {
                            var wt = Tt.nodeIndexes.get(J.id());
                            wt != null && (Mt = { x: Tt.xCoords[wt], y: Tt.yCoords[wt] });
                          }), Mt == null && (Mt = { x: J.position("x"), y: J.position("y") }), {
                            x: Mt.x,
                            y: Mt.y
                          };
                        }
                      };
                      if (I.quality == "default" || I.quality == "proof" || I.randomize) {
                        var j = t.calcParentsWithoutChildren(P, Y), Dt = Y.filter(function(J) {
                          return J.css("display") == "none";
                        });
                        I.eles = Y.not(Dt), Y.nodes().not(":parent").not(Dt).layoutPositions(A, I, vt), j.length > 0 && j.forEach(function(J) {
                          J.position(vt(J));
                        });
                      } else
                        console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                    }
                  }]), y;
                }();
                o.exports = g;
              }
            ),
            /***/
            657: (
              /***/
              (o, i2, e2) => {
                var s = e2(548), n = e2(140).layoutBase.Matrix, f = e2(140).layoutBase.SVD, t = function(a) {
                  var l = a.cy, c = a.eles, h = c.nodes(), N = c.nodes(":parent"), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), I = [], P = [], Y = [], S = [], H = [], Z = [], x = [], ot = [], r = void 0, E = 1e8, p = 1e-9, v = a.piTol, m = a.samplingType, O = a.nodeSeparation, M = void 0, C = function() {
                    for (var gt = 0, L = 0, R = false; L < M; ) {
                      gt = Math.floor(Math.random() * r), R = false;
                      for (var V = 0; V < L; V++)
                        if (S[V] == gt) {
                          R = true;
                          break;
                        }
                      if (!R)
                        S[L] = gt, L++;
                      else
                        continue;
                    }
                  }, F = function(gt, L, R) {
                    for (var V = [], Q = 0, K = 0, pt = 0, lt = void 0, tt = [], ct = 0, rt = 1, Nt = 0; Nt < r; Nt++)
                      tt[Nt] = E;
                    for (V[K] = gt, tt[gt] = 0; K >= Q; ) {
                      pt = V[Q++];
                      for (var yt = I[pt], Ct = 0; Ct < yt.length; Ct++)
                        lt = y.get(yt[Ct]), tt[lt] == E && (tt[lt] = tt[pt] + 1, V[++K] = lt);
                      Z[pt][L] = tt[pt] * O;
                    }
                    if (R) {
                      for (var dt = 0; dt < r; dt++)
                        Z[dt][L] < H[dt] && (H[dt] = Z[dt][L]);
                      for (var at = 0; at < r; at++)
                        H[at] > ct && (ct = H[at], rt = at);
                    }
                    return rt;
                  }, U = function(gt) {
                    var L = void 0;
                    if (gt) {
                      L = Math.floor(Math.random() * r);
                      for (var R = 0; R < r; R++)
                        H[R] = E;
                      for (var V = 0; V < M; V++)
                        S[V] = L, L = F(L, V, gt);
                    } else {
                      C();
                      for (var Q = 0; Q < M; Q++)
                        F(S[Q], Q, gt);
                    }
                    for (var K = 0; K < r; K++)
                      for (var pt = 0; pt < M; pt++)
                        Z[K][pt] *= Z[K][pt];
                    for (var lt = 0; lt < M; lt++)
                      x[lt] = [];
                    for (var tt = 0; tt < M; tt++)
                      for (var ct = 0; ct < M; ct++)
                        x[tt][ct] = Z[S[ct]][tt];
                  }, z = function() {
                    for (var gt = f.svd(x), L = gt.S, R = gt.U, V = gt.V, Q = L[0] * L[0] * L[0], K = [], pt = 0; pt < M; pt++) {
                      K[pt] = [];
                      for (var lt = 0; lt < M; lt++)
                        K[pt][lt] = 0, pt == lt && (K[pt][lt] = L[pt] / (L[pt] * L[pt] + Q / (L[pt] * L[pt])));
                    }
                    ot = n.multMat(n.multMat(V, K), n.transpose(R));
                  }, W = function() {
                    for (var gt = void 0, L = void 0, R = [], V = [], Q = [], K = [], pt = 0; pt < r; pt++)
                      R[pt] = Math.random(), V[pt] = Math.random();
                    R = n.normalize(R), V = n.normalize(V);
                    for (var lt = p, tt = p, ct = void 0; ; ) {
                      for (var rt = 0; rt < r; rt++)
                        Q[rt] = R[rt];
                      if (R = n.multGamma(n.multL(n.multGamma(Q), Z, ot)), gt = n.dotProduct(Q, R), R = n.normalize(R), lt = n.dotProduct(Q, R), ct = Math.abs(lt / tt), ct <= 1 + v && ct >= 1)
                        break;
                      tt = lt;
                    }
                    for (var Nt = 0; Nt < r; Nt++)
                      Q[Nt] = R[Nt];
                    for (tt = p; ; ) {
                      for (var yt = 0; yt < r; yt++)
                        K[yt] = V[yt];
                      if (K = n.minusOp(K, n.multCons(Q, n.dotProduct(Q, K))), V = n.multGamma(n.multL(n.multGamma(K), Z, ot)), L = n.dotProduct(K, V), V = n.normalize(V), lt = n.dotProduct(K, V), ct = Math.abs(lt / tt), ct <= 1 + v && ct >= 1)
                        break;
                      tt = lt;
                    }
                    for (var Ct = 0; Ct < r; Ct++)
                      K[Ct] = V[Ct];
                    P = n.multCons(Q, Math.sqrt(Math.abs(gt))), Y = n.multCons(K, Math.sqrt(Math.abs(L)));
                  };
                  s.connectComponents(l, c, s.getTopMostNodes(h), g), N.forEach(function(gt) {
                    s.connectComponents(l, c, s.getTopMostNodes(gt.descendants().intersection(c)), g);
                  });
                  for (var B = 0, $ = 0; $ < h.length; $++)
                    h[$].isParent() || y.set(h[$].id(), B++);
                  var G = true, D = false, b = void 0;
                  try {
                    for (var q = g.keys()[Symbol.iterator](), et; !(G = (et = q.next()).done); G = true) {
                      var vt = et.value;
                      y.set(vt, B++);
                    }
                  } catch (gt) {
                    D = true, b = gt;
                  } finally {
                    try {
                      !G && q.return && q.return();
                    } finally {
                      if (D)
                        throw b;
                    }
                  }
                  for (var j = 0; j < y.size; j++)
                    I[j] = [];
                  N.forEach(function(gt) {
                    for (var L = gt.children().intersection(c); L.nodes(":childless").length == 0; )
                      L = L.nodes()[0].children().intersection(c);
                    var R = 0, V = L.nodes(":childless")[0].connectedEdges().length;
                    L.nodes(":childless").forEach(function(Q, K) {
                      Q.connectedEdges().length < V && (V = Q.connectedEdges().length, R = K);
                    }), A.set(gt.id(), L.nodes(":childless")[R].id());
                  }), h.forEach(function(gt) {
                    var L = void 0;
                    gt.isParent() ? L = y.get(A.get(gt.id())) : L = y.get(gt.id()), gt.neighborhood().nodes().forEach(function(R) {
                      c.intersection(gt.edgesWith(R)).length > 0 && (R.isParent() ? I[L].push(A.get(R.id())) : I[L].push(R.id()));
                    });
                  });
                  var Dt = function(gt) {
                    var L = y.get(gt), R = void 0;
                    g.get(gt).forEach(function(V) {
                      l.getElementById(V).isParent() ? R = A.get(V) : R = V, I[L].push(R), I[y.get(R)].push(gt);
                    });
                  }, J = true, nt = false, mt = void 0;
                  try {
                    for (var ht = g.keys()[Symbol.iterator](), _t; !(J = (_t = ht.next()).done); J = true) {
                      var Mt = _t.value;
                      Dt(Mt);
                    }
                  } catch (gt) {
                    nt = true, mt = gt;
                  } finally {
                    try {
                      !J && ht.return && ht.return();
                    } finally {
                      if (nt)
                        throw mt;
                    }
                  }
                  r = y.size;
                  var Tt = void 0;
                  if (r > 2) {
                    M = r < a.sampleSize ? r : a.sampleSize;
                    for (var wt = 0; wt < r; wt++)
                      Z[wt] = [];
                    for (var Wt = 0; Wt < M; Wt++)
                      ot[Wt] = [];
                    return a.quality == "draft" || a.step == "all" ? (U(m), z(), W(), Tt = { nodeIndexes: y, xCoords: P, yCoords: Y }) : (y.forEach(function(gt, L) {
                      P.push(l.getElementById(L).position("x")), Y.push(l.getElementById(L).position("y"));
                    }), Tt = { nodeIndexes: y, xCoords: P, yCoords: Y }), Tt;
                  } else {
                    var bt = y.keys(), Pt = l.getElementById(bt.next().value), St = Pt.position(), zt = Pt.outerWidth();
                    if (P.push(St.x), Y.push(St.y), r == 2) {
                      var Gt = l.getElementById(bt.next().value), jt = Gt.outerWidth();
                      P.push(St.x + zt / 2 + jt / 2 + a.idealEdgeLength), Y.push(St.y);
                    }
                    return Tt = { nodeIndexes: y, xCoords: P, yCoords: Y }, Tt;
                  }
                };
                o.exports = { spectralLayout: t };
              }
            ),
            /***/
            579: (
              /***/
              (o, i2, e2) => {
                var s = e2(212), n = function(f) {
                  f && f("layout", "fcose", s);
                };
                typeof cytoscape < "u" && n(cytoscape), o.exports = n;
              }
            ),
            /***/
            140: (
              /***/
              (o) => {
                o.exports = _2;
              }
            )
            /******/
          }, T = {};
          function u(o) {
            var i2 = T[o];
            if (i2 !== void 0)
              return i2.exports;
            var e2 = T[o] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return k[o](e2, e2.exports, u), e2.exports;
          }
          var d = u(579);
          return d;
        })()
      );
    });
  }(fe2)), fe2.exports;
}
var Ei = yi();
var Ni = vq(Ei);
var Oe = {
  L: "left",
  R: "right",
  T: "top",
  B: "bottom"
};
var Re = {
  L: _((w) => `${w},${w / 2} 0,${w} 0,0`, "L"),
  R: _((w) => `0,${w / 2} ${w},0 ${w},${w}`, "R"),
  T: _((w) => `0,0 ${w},0 ${w / 2},${w}`, "T"),
  B: _((w) => `${w / 2},0 ${w},${w} 0,${w}`, "B")
};
var ae2 = {
  L: _((w, X) => w - X + 2, "L"),
  R: _((w, X) => w - 2, "R"),
  T: _((w, X) => w - X + 2, "T"),
  B: _((w, X) => w - 2, "B")
};
var Ti = _(function(w) {
  return Xt(w) ? w === "L" ? "R" : "L" : w === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection");
var be = _(function(w) {
  const X = w;
  return X === "L" || X === "R" || X === "T" || X === "B";
}, "isArchitectureDirection");
var Xt = _(function(w) {
  const X = w;
  return X === "L" || X === "R";
}, "isArchitectureDirectionX");
var qt = _(function(w) {
  const X = w;
  return X === "T" || X === "B";
}, "isArchitectureDirectionY");
var Te = _(function(w, X) {
  const _2 = Xt(w) && qt(X), k = qt(w) && Xt(X);
  return _2 || k;
}, "isArchitectureDirectionXY");
var Ai = _(function(w) {
  const X = w[0], _2 = w[1], k = Xt(X) && qt(_2), T = qt(X) && Xt(_2);
  return k || T;
}, "isArchitecturePairXY");
var wi = _(function(w) {
  return w !== "LL" && w !== "RR" && w !== "TT" && w !== "BB";
}, "isValidArchitectureDirectionPair");
var me = _(function(w, X) {
  const _2 = `${w}${X}`;
  return wi(_2) ? _2 : void 0;
}, "getArchitectureDirectionPair");
var Ii = _(function([w, X], _2) {
  const k = _2[0], T = _2[1];
  return Xt(k) ? qt(T) ? [w + (k === "L" ? -1 : 1), X + (T === "T" ? 1 : -1)] : [w + (k === "L" ? -1 : 1), X] : Xt(T) ? [w + (T === "L" ? 1 : -1), X + (k === "T" ? 1 : -1)] : [w, X + (k === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair");
var Li = _(function(w) {
  return w === "LT" || w === "TL" ? [1, 1] : w === "BL" || w === "LB" ? [1, -1] : w === "BR" || w === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors");
var _i = _(function(w, X) {
  return Te(w, X) ? "bend" : Xt(w) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment");
var Mi = _(function(w) {
  return w.type === "service";
}, "isArchitectureService");
var xi = _(function(w) {
  return w.type === "junction";
}, "isArchitectureJunction");
var Fe = _((w) => w.data(), "edgeData");
var ie = _((w) => w.data(), "nodeData");
var Se = N6.architecture;
var Et = new e(() => ({
  nodes: {},
  groups: {},
  edges: [],
  registeredIds: {},
  config: Se,
  dataStructures: void 0,
  elements: {}
}));
var Ci = _(() => {
  Et.reset(), zR();
}, "clear");
var Di = _(function({
  id: w,
  icon: X,
  in: _2,
  title: k,
  iconText: T
}) {
  if (Et.records.registeredIds[w] !== void 0)
    throw new Error(
      `The service id [${w}] is already in use by another ${Et.records.registeredIds[w]}`
    );
  if (_2 !== void 0) {
    if (w === _2)
      throw new Error(`The service [${w}] cannot be placed within itself`);
    if (Et.records.registeredIds[_2] === void 0)
      throw new Error(
        `The service [${w}]'s parent does not exist. Please make sure the parent is created before this service`
      );
    if (Et.records.registeredIds[_2] === "node")
      throw new Error(`The service [${w}]'s parent is not a group`);
  }
  Et.records.registeredIds[w] = "node", Et.records.nodes[w] = {
    id: w,
    type: "service",
    icon: X,
    iconText: T,
    title: k,
    edges: [],
    in: _2
  };
}, "addService");
var Oi = _(() => Object.values(Et.records.nodes).filter(Mi), "getServices");
var Ri = _(function({ id: w, in: X }) {
  Et.records.registeredIds[w] = "node", Et.records.nodes[w] = {
    id: w,
    type: "junction",
    edges: [],
    in: X
  };
}, "addJunction");
var bi = _(() => Object.values(Et.records.nodes).filter(xi), "getJunctions");
var Pi = _(() => Object.values(Et.records.nodes), "getNodes");
var ye = _((w) => Et.records.nodes[w], "getNode");
var Gi = _(function({ id: w, icon: X, in: _2, title: k }) {
  if (Et.records.registeredIds[w] !== void 0)
    throw new Error(
      `The group id [${w}] is already in use by another ${Et.records.registeredIds[w]}`
    );
  if (_2 !== void 0) {
    if (w === _2)
      throw new Error(`The group [${w}] cannot be placed within itself`);
    if (Et.records.registeredIds[_2] === void 0)
      throw new Error(
        `The group [${w}]'s parent does not exist. Please make sure the parent is created before this group`
      );
    if (Et.records.registeredIds[_2] === "node")
      throw new Error(`The group [${w}]'s parent is not a group`);
  }
  Et.records.registeredIds[w] = "group", Et.records.groups[w] = {
    id: w,
    icon: X,
    title: k,
    in: _2
  };
}, "addGroup");
var Fi = _(() => Object.values(Et.records.groups), "getGroups");
var Si = _(function({
  lhsId: w,
  rhsId: X,
  lhsDir: _2,
  rhsDir: k,
  lhsInto: T,
  rhsInto: u,
  lhsGroup: d,
  rhsGroup: o,
  title: i2
}) {
  if (!be(_2))
    throw new Error(
      `Invalid direction given for left hand side of edge ${w}--${X}. Expected (L,R,T,B) got ${_2}`
    );
  if (!be(k))
    throw new Error(
      `Invalid direction given for right hand side of edge ${w}--${X}. Expected (L,R,T,B) got ${k}`
    );
  if (Et.records.nodes[w] === void 0 && Et.records.groups[w] === void 0)
    throw new Error(
      `The left-hand id [${w}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  if (Et.records.nodes[X] === void 0 && Et.records.groups[w] === void 0)
    throw new Error(
      `The right-hand id [${X}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  const e2 = Et.records.nodes[w].in, s = Et.records.nodes[X].in;
  if (d && e2 && s && e2 == s)
    throw new Error(
      `The left-hand id [${w}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  if (o && e2 && s && e2 == s)
    throw new Error(
      `The right-hand id [${X}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  const n = {
    lhsId: w,
    lhsDir: _2,
    lhsInto: T,
    lhsGroup: d,
    rhsId: X,
    rhsDir: k,
    rhsInto: u,
    rhsGroup: o,
    title: i2
  };
  Et.records.edges.push(n), Et.records.nodes[w] && Et.records.nodes[X] && (Et.records.nodes[w].edges.push(Et.records.edges[Et.records.edges.length - 1]), Et.records.nodes[X].edges.push(Et.records.edges[Et.records.edges.length - 1]));
}, "addEdge");
var Ui = _(() => Et.records.edges, "getEdges");
var ki = _(() => {
  if (Et.records.dataStructures === void 0) {
    const w = {}, X = Object.entries(Et.records.nodes).reduce((o, [i2, e2]) => (o[i2] = e2.edges.reduce((s, n) => {
      var _a, _b;
      const f = (_a = ye(n.lhsId)) == null ? void 0 : _a.in, t = (_b = ye(n.rhsId)) == null ? void 0 : _b.in;
      if (f && t && f !== t) {
        const a = _i(n.lhsDir, n.rhsDir);
        a !== "bend" && (w[f] ?? (w[f] = {}), w[f][t] = a, w[t] ?? (w[t] = {}), w[t][f] = a);
      }
      if (n.lhsId === i2) {
        const a = me(n.lhsDir, n.rhsDir);
        a && (s[a] = n.rhsId);
      } else {
        const a = me(n.rhsDir, n.lhsDir);
        a && (s[a] = n.lhsId);
      }
      return s;
    }, {}), o), {}), _2 = Object.keys(X)[0], k = { [_2]: 1 }, T = Object.keys(X).reduce(
      (o, i2) => i2 === _2 ? o : { ...o, [i2]: 1 },
      {}
    ), u = _((o) => {
      const i2 = { [o]: [0, 0] }, e2 = [o];
      for (; e2.length > 0; ) {
        const s = e2.shift();
        if (s) {
          k[s] = 1, delete T[s];
          const n = X[s], [f, t] = i2[s];
          Object.entries(n).forEach(([a, l]) => {
            k[l] || (i2[l] = Ii(
              [f, t],
              a
            ), e2.push(l));
          });
        }
      }
      return i2;
    }, "BFS"), d = [u(_2)];
    for (; Object.keys(T).length > 0; )
      d.push(u(Object.keys(T)[0]));
    Et.records.dataStructures = {
      adjList: X,
      spatialMaps: d,
      groupAlignments: w
    };
  }
  return Et.records.dataStructures;
}, "getDataStructures");
var Yi = _((w, X) => {
  Et.records.elements[w] = X;
}, "setElementForId");
var Xi = _((w) => Et.records.elements[w], "getElementById");
var Ue = _(() => sg({
  ...Se,
  ...Hr().architecture
}), "getConfig");
var se = {
  clear: Ci,
  setDiagramTitle: WR,
  getDiagramTitle: HR,
  setAccTitle: qR,
  getAccTitle: RR,
  setAccDescription: PR,
  getAccDescription: jR,
  getConfig: Ue,
  addService: Di,
  getServices: Oi,
  addJunction: Ri,
  getJunctions: bi,
  getNodes: Pi,
  getNode: ye,
  addGroup: Gi,
  getGroups: Fi,
  addEdge: Si,
  getEdges: Ui,
  setElementForId: Yi,
  getElementById: Xi,
  getDataStructures: ki
};
function Ft(w) {
  return Ue()[w];
}
_(Ft, "getConfigField");
var Hi = _((w, X) => {
  i(w, X), w.groups.map(X.addGroup), w.services.map((_2) => X.addService({ ..._2, type: "service" })), w.junctions.map((_2) => X.addJunction({ ..._2, type: "junction" })), w.edges.map(X.addEdge);
}, "populateDb");
var Bi = {
  parse: _(async (w) => {
    const X = await Iy("architecture", w);
    ut.debug(X), Hi(X, se);
  }, "parse")
};
var Wi = _((w) => `
  .edge {
    stroke-width: ${w.archEdgeWidth};
    stroke: ${w.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${w.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${w.archGroupBorderColor};
    stroke-width: ${w.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles");
var zi = Wi;
var ee = _((w) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${w}</g>`, "wrapIcon");
var ne = {
  prefix: "mermaid-architecture",
  height: 80,
  width: 80,
  icons: {
    database: {
      body: ee(
        '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    server: {
      body: ee(
        '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>'
      )
    },
    disk: {
      body: ee(
        '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>'
      )
    },
    internet: {
      body: ee(
        '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    cloud: {
      body: ee(
        '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    unknown: LY,
    blank: {
      body: ee("")
    }
  }
};
var Vi = _(async function(w, X) {
  const _2 = Ft("padding"), k = Ft("iconSize"), T = k / 2, u = k / 6, d = u / 2;
  await Promise.all(
    X.edges().map(async (o) => {
      var _a, _b;
      const {
        source: i2,
        sourceDir: e2,
        sourceArrow: s,
        sourceGroup: n,
        target: f,
        targetDir: t,
        targetArrow: a,
        targetGroup: l,
        label: c
      } = Fe(o);
      let { x: h, y: N } = o[0].sourceEndpoint();
      const { x: g, y } = o[0].midpoint();
      let { x: A, y: I } = o[0].targetEndpoint();
      const P = _2 + 4;
      if (n && (Xt(e2) ? h += e2 === "L" ? -P : P : N += e2 === "T" ? -P : P + 18), l && (Xt(t) ? A += t === "L" ? -P : P : I += t === "T" ? -P : P + 18), !n && ((_a = se.getNode(i2)) == null ? void 0 : _a.type) === "junction" && (Xt(e2) ? h += e2 === "L" ? T : -T : N += e2 === "T" ? T : -T), !l && ((_b = se.getNode(f)) == null ? void 0 : _b.type) === "junction" && (Xt(t) ? A += t === "L" ? T : -T : I += t === "T" ? T : -T), o[0]._private.rscratch) {
        const Y = w.insert("g");
        if (Y.insert("path").attr("d", `M ${h},${N} L ${g},${y} L${A},${I} `).attr("class", "edge"), s) {
          const S = Xt(e2) ? ae2[e2](h, u) : h - d, H = qt(e2) ? ae2[e2](N, u) : N - d;
          Y.insert("polygon").attr("points", Re[e2](u)).attr("transform", `translate(${S},${H})`).attr("class", "arrow");
        }
        if (a) {
          const S = Xt(t) ? ae2[t](A, u) : A - d, H = qt(t) ? ae2[t](I, u) : I - d;
          Y.insert("polygon").attr("points", Re[t](u)).attr("transform", `translate(${S},${H})`).attr("class", "arrow");
        }
        if (c) {
          const S = Te(e2, t) ? "XY" : Xt(e2) ? "X" : "Y";
          let H = 0;
          S === "X" ? H = Math.abs(h - A) : S === "Y" ? H = Math.abs(N - I) / 1.5 : H = Math.abs(h - A) / 2;
          const Z = Y.append("g");
          if (await fs(
            Z,
            c,
            {
              useHtmlLabels: false,
              width: H,
              classes: "architecture-service-label"
            },
            fe()
          ), Z.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), S === "X")
            Z.attr("transform", "translate(" + g + ", " + y + ")");
          else if (S === "Y")
            Z.attr("transform", "translate(" + g + ", " + y + ") rotate(-90)");
          else if (S === "XY") {
            const x = me(e2, t);
            if (x && Ai(x)) {
              const ot = Z.node().getBoundingClientRect(), [r, E] = Li(x);
              Z.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * r * E * 45})`);
              const p = Z.node().getBoundingClientRect();
              Z.attr(
                "transform",
                `
                translate(${g}, ${y - ot.height / 2})
                translate(${r * p.width / 2}, ${E * p.height / 2})
                rotate(${-1 * r * E * 45}, 0, ${ot.height / 2})
              `
              );
            }
          }
        }
      }
    })
  );
}, "drawEdges");
var ji = _(async function(w, X) {
  const _2 = Ft("padding") * 0.75, k = Ft("fontSize"), T = Ft("iconSize") / 2;
  await Promise.all(
    X.nodes().map(async (u) => {
      const d = ie(u);
      if (d.type === "group") {
        const { h: o, w: i2, x1: e2, y1: s } = u.boundingBox();
        w.append("rect").attr("x", e2 + T).attr("y", s + T).attr("width", i2).attr("height", o).attr("class", "node-bkg");
        const n = w.append("g");
        let f = e2, t = s;
        if (d.icon) {
          const a = n.append("g");
          a.html(
            `<g>${await gc(d.icon, { height: _2, width: _2, fallbackPrefix: ne.prefix })}</g>`
          ), a.attr(
            "transform",
            "translate(" + (f + T + 1) + ", " + (t + T + 1) + ")"
          ), f += _2, t += k / 2 - 1 - 2;
        }
        if (d.label) {
          const a = n.append("g");
          await fs(
            a,
            d.label,
            {
              useHtmlLabels: false,
              width: i2,
              classes: "architecture-service-label"
            },
            fe()
          ), a.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), a.attr(
            "transform",
            "translate(" + (f + T + 4) + ", " + (t + T + 2) + ")"
          );
        }
      }
    })
  );
}, "drawGroups");
var qi = _(async function(w, X, _2) {
  for (const k of _2) {
    const T = X.append("g"), u = Ft("iconSize");
    if (k.title) {
      const e2 = T.append("g");
      await fs(
        e2,
        k.title,
        {
          useHtmlLabels: false,
          width: u * 1.5,
          classes: "architecture-service-label"
        },
        fe()
      ), e2.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e2.attr("transform", "translate(" + u / 2 + ", " + u + ")");
    }
    const d = T.append("g");
    if (k.icon)
      d.html(
        `<g>${await gc(k.icon, { height: u, width: u, fallbackPrefix: ne.prefix })}</g>`
      );
    else if (k.iconText) {
      d.html(
        `<g>${await gc("blank", { height: u, width: u, fallbackPrefix: ne.prefix })}</g>`
      );
      const e2 = d.append("g").append("foreignObject").attr("width", u).attr("height", u).append("div").attr("class", "node-icon-text").attr("style", `height: ${u}px;`).append("div").html(k.iconText), s = parseInt(
        window.getComputedStyle(e2.node(), null).getPropertyValue("font-size").replace(/\D/g, "")
      ) ?? 16;
      e2.attr("style", `-webkit-line-clamp: ${Math.floor((u - 2) / s)};`);
    } else
      d.append("path").attr("class", "node-bkg").attr("id", "node-" + k.id).attr(
        "d",
        `M0 ${u} v${-u} q0,-5 5,-5 h${u} q5,0 5,5 v${u} H0 Z`
      );
    T.attr("class", "architecture-service");
    const { width: o, height: i2 } = T._groups[0][0].getBBox();
    k.width = o, k.height = i2, w.setElementForId(k.id, T);
  }
  return 0;
}, "drawServices");
var $i = _(function(w, X, _2) {
  _2.forEach((k) => {
    const T = X.append("g"), u = Ft("iconSize");
    T.append("g").append("rect").attr("id", "node-" + k.id).attr("fill-opacity", "0").attr("width", u).attr("height", u), T.attr("class", "architecture-junction");
    const { width: d, height: o } = T._groups[0][0].getBBox();
    T.width = d, T.height = o, w.setElementForId(k.id, T);
  });
}, "drawJunctions");
DY([
  {
    name: ne.prefix,
    icons: ne
  }
]);
Jn.use(Ni);
function ke(w, X) {
  w.forEach((_2) => {
    X.add({
      group: "nodes",
      data: {
        type: "service",
        id: _2.id,
        icon: _2.icon,
        label: _2.title,
        parent: _2.in,
        width: Ft("iconSize"),
        height: Ft("iconSize")
      },
      classes: "node-service"
    });
  });
}
_(ke, "addServices");
function Ye(w, X) {
  w.forEach((_2) => {
    X.add({
      group: "nodes",
      data: {
        type: "junction",
        id: _2.id,
        parent: _2.in,
        width: Ft("iconSize"),
        height: Ft("iconSize")
      },
      classes: "node-junction"
    });
  });
}
_(Ye, "addJunctions");
function Xe(w, X) {
  X.nodes().map((_2) => {
    const k = ie(_2);
    k.type !== "group" && (k.x = _2.position().x, k.y = _2.position().y, w.getElementById(k.id).attr("transform", "translate(" + (k.x || 0) + "," + (k.y || 0) + ")"));
  });
}
_(Xe, "positionNodes");
function He(w, X) {
  w.forEach((_2) => {
    X.add({
      group: "nodes",
      data: {
        type: "group",
        id: _2.id,
        icon: _2.icon,
        label: _2.title,
        parent: _2.in
      },
      classes: "node-group"
    });
  });
}
_(He, "addGroups");
function Be(w, X) {
  w.forEach((_2) => {
    const { lhsId: k, rhsId: T, lhsInto: u, lhsGroup: d, rhsInto: o, lhsDir: i2, rhsDir: e2, rhsGroup: s, title: n } = _2, f = Te(_2.lhsDir, _2.rhsDir) ? "segments" : "straight", t = {
      id: `${k}-${T}`,
      label: n,
      source: k,
      sourceDir: i2,
      sourceArrow: u,
      sourceGroup: d,
      sourceEndpoint: i2 === "L" ? "0 50%" : i2 === "R" ? "100% 50%" : i2 === "T" ? "50% 0" : "50% 100%",
      target: T,
      targetDir: e2,
      targetArrow: o,
      targetGroup: s,
      targetEndpoint: e2 === "L" ? "0 50%" : e2 === "R" ? "100% 50%" : e2 === "T" ? "50% 0" : "50% 100%"
    };
    X.add({
      group: "edges",
      data: t,
      classes: f
    });
  });
}
_(Be, "addEdges");
function We(w, X, _2) {
  const k = _((o, i2) => Object.entries(o).reduce(
    (e2, [s, n]) => {
      var _a;
      let f = 0;
      const t = Object.entries(n);
      if (t.length === 1)
        return e2[s] = t[0][1], e2;
      for (let a = 0; a < t.length - 1; a++)
        for (let l = a + 1; l < t.length; l++) {
          const [c, h] = t[a], [N, g] = t[l];
          if (((_a = _2[c]) == null ? void 0 : _a[N]) === i2)
            e2[s] ?? (e2[s] = []), e2[s] = [...e2[s], ...h, ...g];
          else if (c === "default" || N === "default")
            e2[s] ?? (e2[s] = []), e2[s] = [...e2[s], ...h, ...g];
          else {
            const y = `${s}-${f++}`;
            e2[y] = h;
            const A = `${s}-${f++}`;
            e2[A] = g;
          }
        }
      return e2;
    },
    {}
  ), "flattenAlignments"), T = X.map((o) => {
    const i2 = {}, e2 = {};
    return Object.entries(o).forEach(([s, [n, f]]) => {
      var _a, _b, _c;
      const t = ((_a = w.getNode(s)) == null ? void 0 : _a.in) ?? "default";
      i2[f] ?? (i2[f] = {}), (_b = i2[f])[t] ?? (_b[t] = []), i2[f][t].push(s), e2[n] ?? (e2[n] = {}), (_c = e2[n])[t] ?? (_c[t] = []), e2[n][t].push(s);
    }), {
      horiz: Object.values(k(i2, "horizontal")).filter(
        (s) => s.length > 1
      ),
      vert: Object.values(k(e2, "vertical")).filter(
        (s) => s.length > 1
      )
    };
  }), [u, d] = T.reduce(
    ([o, i2], { horiz: e2, vert: s }) => [
      [...o, ...e2],
      [...i2, ...s]
    ],
    [[], []]
  );
  return {
    horizontal: u,
    vertical: d
  };
}
_(We, "getAlignments");
function ze(w) {
  const X = [], _2 = _((T) => `${T[0]},${T[1]}`, "posToStr"), k = _((T) => T.split(",").map((u) => parseInt(u)), "strToPos");
  return w.forEach((T) => {
    const u = Object.fromEntries(
      Object.entries(T).map(([e2, s]) => [_2(s), e2])
    ), d = [_2([0, 0])], o = {}, i2 = {
      L: [-1, 0],
      R: [1, 0],
      T: [0, 1],
      B: [0, -1]
    };
    for (; d.length > 0; ) {
      const e2 = d.shift();
      if (e2) {
        o[e2] = 1;
        const s = u[e2];
        if (s) {
          const n = k(e2);
          Object.entries(i2).forEach(([f, t]) => {
            const a = _2([n[0] + t[0], n[1] + t[1]]), l = u[a];
            l && !o[a] && (d.push(a), X.push({
              [Oe[f]]: l,
              [Oe[Ti(f)]]: s,
              gap: 1.5 * Ft("iconSize")
            }));
          });
        }
      }
    }
  }), X;
}
_(ze, "getRelativeConstraints");
function Ve(w, X, _2, k, T, { spatialMaps: u, groupAlignments: d }) {
  return new Promise((o) => {
    const i2 = ae("body").append("div").attr("id", "cy").attr("style", "display:none"), e2 = Jn({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "straight",
            label: "data(label)",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [0.5],
            // @ts-ignore Incorrect library types
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "node",
          style: {
            // @ts-ignore Incorrect library types
            "compound-sizing-wrt-labels": "include"
          }
        },
        {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${Ft("fontSize")}px`
          }
        },
        {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-group",
          style: {
            // @ts-ignore Incorrect library types
            padding: `${Ft("padding")}px`
          }
        }
      ],
      layout: {
        name: "grid",
        boundingBox: {
          x1: 0,
          x2: 100,
          y1: 0,
          y2: 100
        }
      }
    });
    i2.remove(), He(_2, e2), ke(w, e2), Ye(X, e2), Be(k, e2);
    const s = We(T, u, d), n = ze(u), f = e2.layout({
      name: "fcose",
      quality: "proof",
      styleEnabled: false,
      animate: false,
      nodeDimensionsIncludeLabels: false,
      // Adjust the edge parameters if it passes through the border of a group
      // Hacky fix for: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose/issues/67
      idealEdgeLength(t) {
        const [a, l] = t.connectedNodes(), { parent: c } = ie(a), { parent: h } = ie(l);
        return c === h ? 1.5 * Ft("iconSize") : 0.5 * Ft("iconSize");
      },
      edgeElasticity(t) {
        const [a, l] = t.connectedNodes(), { parent: c } = ie(a), { parent: h } = ie(l);
        return c === h ? 0.45 : 1e-3;
      },
      alignmentConstraint: s,
      relativePlacementConstraint: n
    });
    f.one("layoutstop", () => {
      var _a;
      function t(a, l, c, h) {
        let N, g;
        const { x: y, y: A } = a, { x: I, y: P } = l;
        g = (h - A + (y - c) * (A - P) / (y - I)) / Math.sqrt(1 + Math.pow((A - P) / (y - I), 2)), N = Math.sqrt(Math.pow(h - A, 2) + Math.pow(c - y, 2) - Math.pow(g, 2));
        const Y = Math.sqrt(Math.pow(I - y, 2) + Math.pow(P - A, 2));
        N = N / Y;
        let S = (I - y) * (h - A) - (P - A) * (c - y);
        switch (true) {
          case S >= 0:
            S = 1;
            break;
          case S < 0:
            S = -1;
            break;
        }
        let H = (I - y) * (c - y) + (P - A) * (h - A);
        switch (true) {
          case H >= 0:
            H = 1;
            break;
          case H < 0:
            H = -1;
            break;
        }
        return g = Math.abs(g) * S, N = N * H, {
          distances: g,
          weights: N
        };
      }
      _(t, "getSegmentWeights"), e2.startBatch();
      for (const a of Object.values(e2.edges()))
        if ((_a = a.data) == null ? void 0 : _a.call(a)) {
          const { x: l, y: c } = a.source().position(), { x: h, y: N } = a.target().position();
          if (l !== h && c !== N) {
            const g = a.sourceEndpoint(), y = a.targetEndpoint(), { sourceDir: A } = Fe(a), [I, P] = qt(A) ? [g.x, y.y] : [y.x, g.y], { weights: Y, distances: S } = t(g, y, I, P);
            a.style("segment-distances", S), a.style("segment-weights", Y);
          }
        }
      e2.endBatch(), f.run();
    }), f.run(), e2.ready((t) => {
      ut.info("Ready", t), o(e2);
    });
  });
}
_(Ve, "layoutArchitecture");
var Ki = _(async (w, X, _2, k) => {
  const T = k.db, u = T.getServices(), d = T.getJunctions(), o = T.getGroups(), i2 = T.getEdges(), e2 = T.getDataStructures(), s = tZ(X), n = s.append("g");
  n.attr("class", "architecture-edges");
  const f = s.append("g");
  f.attr("class", "architecture-services");
  const t = s.append("g");
  t.attr("class", "architecture-groups"), await qi(T, f, u), $i(T, f, d);
  const a = await Ve(u, d, o, i2, T, e2);
  await Vi(n, a), await ji(t, a), Xe(T, a), FR(void 0, s, Ft("padding"), Ft("useMaxWidth"));
}, "draw");
var Zi = { draw: Ki };
var rr = {
  parser: Bi,
  db: se,
  renderer: Zi,
  styles: zi
};
export {
  rr as diagram
};
//# sourceMappingURL=architectureDiagram-SUXI7LT5-B0Jea6mg-DXIqLVDk-ZUI3LSGB.js.map
