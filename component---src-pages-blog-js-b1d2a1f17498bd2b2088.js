(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0vyq":function(e,t,a){},vx99:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),s=a.n(l),r=a("Wbzz"),c=a("7oih"),o=a("vrFN"),i=(a("p3AD"),a("0vyq"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.site.siteMetadata.title,e.allMdx.edges);return s.a.createElement(c.a,{location:this.props.location},s.a.createElement(o.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement("div",{className:"blog-main"},s.a.createElement("h2",{className:"page-heading"}," Blog "),s.a.createElement("div",{className:"blog-items"},t.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug,className:"blog-item"},s.a.createElement("div",{className:"bg1"}," "),s.a.createElement("div",{className:"bg2"}," "),s.a.createElement("div",{className:"blog-item-content"},s.a.createElement("div",{className:"categories"},t.frontmatter.categories.map((function(e){return s.a.createElement("span",{className:"category"},e)}))),s.a.createElement("small",{className:"date"},t.frontmatter.date),s.a.createElement("h3",null,s.a.createElement(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},s.a.createElement("p",{className:"except",dangerouslySetInnerHTML:{__html:t.excerpt}}))))})))))},t}(s.a.Component));t.default=i}}]);
//# sourceMappingURL=component---src-pages-blog-js-b1d2a1f17498bd2b2088.js.map