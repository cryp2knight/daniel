(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(t,e,n){"use strict";e.a={tags:["is-black","is-dark","is-primary","is-link","is-info","is-success","is-warning","is-danger"]}},300:function(t,e){},302:function(t,e){},339:function(t,e,n){"use strict";n.r(e);n(29),n(111);var r=n(274),l=n(0).a.extend({props:{blog:{type:Object,default:function(){return{}}}},computed:{tags:function(){return r.a.tags},imageUrl:function(){var content=this.blog["content:encoded"];if(!content)return null;var img=content.match(/<img.+?src=[\'"]([^\'"]+)[\'"].*?>/i);return img.length>0?img[1]:null}}}),c=n(13),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"columns"},[t.imageUrl?n("div",{staticClass:"column is-one-quarter"},[n("img",{staticClass:"cover",attrs:{src:t.imageUrl,height:"100"}})]):t._e(),t._v(" "),n("div",{staticClass:"column"},[n("a",{attrs:{href:t.blog.link}},[n("h2",{staticClass:"title is-4"},[t._v(t._s(t.blog.title))])]),t._v(" "),n("p",[n("small",[t._v("Updated "+t._s(new Date(t.blog.pubDate).toDateString()))])]),t._v(" "),n("p",{staticClass:"subtitle is-5"},[t._v("\n        "+t._s(t.blog["content:encodedSnippet"]&&t.blog["content:encodedSnippet"].slice(0,200)+"...")+"\n      ")]),t._v("\n      Tags:\n      "),t._l(t.blog.categories,(function(e){return n("small",{key:e},[n("span",{staticClass:"tag mx-1",class:t.tags[Math.floor(8*Math.random())]},[t._v(t._s(e))])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);n(25);var r=n(3),l=n(0),c=n(110),o=n(295),d=new(n.n(o).a),f=l.a.extend({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,e.next=3,d.parseURL("https://medium.com/feed/@".concat(c.a.medium));case 3:return n=e.sent,r=n.items,e.abrupt("return",{items:r});case 6:case"end":return e.stop()}}),e)})))()}}),m=n(13),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container is-fluid pt-6 mt-6"},[e("h2",{staticClass:"title is-2"},[this._v("Blogs")]),this._v(" "),e("hr"),this._v(" "),this._l(this.items.filter((function(t){return t.categories})),(function(t){return e("BlogCard",{key:t.guid,attrs:{blog:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCard:n(339).default})}}]);