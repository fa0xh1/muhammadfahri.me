(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7Qib":function(t,e,n){"use strict";function a(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c}));var i={home:"",blog:"Blog",about:"About",portfolio:"Portfolio",contact:"Contact"},o=function(t){var e=/([^/]+)$/g.exec(t);return e.length>=1?"https://github.com/gh0zialfat1h/muhammadfahri.me/blob/master/content/blog/"+e[e.length-1]:""},c=function(t){for(var e,n=a(t);!(e=n()).done;){var r=e.value;if(!r.includes(" "))return r}return t[0]}},EYWl:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("qhky"),c=n("ku9C"),m=n.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.image,n=t.url,a=t.description,r=t.isPost,c=(""===this.props.title?"":this.props.title+" · ")+"Muhammad Fahri",m=[{"@context":"http://schema.org","@type":"WebSite",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],url:n,name:c,alternateName:a}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:c,image:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",sameAs:["https://twitter.com/muhammdfahrim","https://www.facebook.com/muhammdfahrim","https://www.instagram.com/muhammadfahrim_","https://www.github.com/gh0zialfat1h","https://www.linkedin.com/in/muhammad-fahri-60038716a/"],url:n,name:c,alternateName:n+" | Muhammad Fahri",headline:c,image:{"@type":"ImageObject",url:e},description:a}]),i.a.createElement(o.a,null,i.a.createElement("title",null,c),i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:e}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.a.createElement("meta",{property:"fb:app_id",content:"2362615167377525"}),i.a.createElement("meta",{property:"og:url",content:n}),i.a.createElement("meta",{property:"og:type",content:r?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:c}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:e}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:n}),i.a.createElement("meta",{name:"twitter:creator",content:"@muhammdfahrim"}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:a}),i.a.createElement("meta",{name:"twitter:image",content:e}))},e}(r.PureComponent);l.defaultProps={title:"Muhammad Fahri",image:"https://muhammadfahri.me"+m.a,url:"https://muhammadfahri.me/",description:"Muhammad Fahri - Backend Developer",isPost:!1}},QS3V:function(t,e,n){"use strict";var a=n("MUpH"),r=n("Wbzz"),i=n("9eSz"),o=n.n(i),c=n("q1tI"),m=n.n(c),l=n("vOnD"),d=n("InJ6");function s(){var t=Object(a.a)(["\n    font-size: 0.9rem;\n  "]);return s=function(){return t},t}function p(){var t=Object(a.a)(["\n    font-size: 1.1rem;\n  "]);return p=function(){return t},t}function u(){var t=Object(a.a)(["\n    padding: 0 0 0 50px;\n    width: 75%;\n    max-width: 100%;\n  "]);return u=function(){return t},t}function h(){var t=Object(a.a)(["\n    width: 25%;\n  "]);return h=function(){return t},t}function f(){var t=Object(a.a)(["\n      flex-direction: row;\n    "]);return f=function(){return t},t}var g=Object(l.d)(r.Link).withConfig({displayName:"Card__Container",componentId:"sc-1tjm9fw-0"})(["& > div{display:flex;align-items:center;text-align:left;flex-direction:column;border-bottom:1px solid rgb(221,221,221);padding:2rem 0px;"," *{margin:0;}}&:first-child{& > div{border-top:1px solid rgb(221,221,221);}}text-decoration:none;"],d.c.md(f())),x=l.d.div.withConfig({displayName:"Card__ImageWrapper",componentId:"sc-1tjm9fw-1"})(["border-radius:4px;overflow:hidden;width:100%;max-width:500px;",";"],d.c.md(h())),b=l.d.div.withConfig({displayName:"Card__Info",componentId:"sc-1tjm9fw-2"})(["width:100%;max-width:560px;padding-top:12px;",";"],d.c.md(u())),w=l.d.h3.withConfig({displayName:"Card__Title",componentId:"sc-1tjm9fw-3"})(["font-family:'Open Sans',sans-serif;color:#282a2d;transition:0.3s;font-size:17px;"," ",":hover &{color:#1976d2;}"],d.c.sm(p()),g),v=l.d.p.withConfig({displayName:"Card__Time",componentId:"sc-1tjm9fw-4"})(["color:#757575;font-size:14px;text-align:right;padding:6px 6px 6px;"]),y=l.d.p.withConfig({displayName:"Card__Excerpt",componentId:"sc-1tjm9fw-5"})(["color:#757575;font-size:15px;",";"],d.c.sm(s()));e.a=function(t){return m.a.createElement(g,{to:t.data.path},m.a.createElement("div",null,m.a.createElement(x,null,m.a.createElement(o.a,{sizes:t.data.thumbnail})),m.a.createElement(b,null,m.a.createElement(w,null,t.data.title),m.a.createElement(v,null,m.a.createElement("time",{dateTime:"2008-02-14 20:00"},t.data.date," "),"· ",t.data.timeToRead," min read"),m.a.createElement(y,null,t.data.excerpt))))}},keEt:function(t,e,n){"use strict";n.r(e),n.d(e,"queryBlog",(function(){return P}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("QS3V"),c=n("rY4l"),m=n("7oih"),l=n("zLVn"),d=n("KQm4"),s=n("Wbzz"),p=Object(i.d)(s.Link).withConfig({displayName:"PaginationItem__ButtonPage",componentId:"d7syap-0"})(["width:36px;height:36px;color:#4d4d4d;display:flex;align-items:center;justify-content:center;text-decoration:none;font-weight:bold;font-size:16px;transition:0.3s;border-radius:50%;&:hover{background:#91caf75e;}",";span{line-height:14px;position:relative;}"],(function(t){return t.selected&&Object(i.c)(["&&{background:#3f86f5;color:white;}"])}));function u(t){var e=t.selected,n=t.index;return r.a.createElement("div",null,r.a.createElement(p,{selected:e,to:"/blog"+(n?"/page/"+n:""),disabled:e},r.a.createElement("span",null,n)))}var h=Object(i.d)("div").withConfig({displayName:"PaginationSeparator___StyledDiv",componentId:"tyejtj-0"})(["display:flex;width:16px;height:36px;margin:0;align-items:center;justify-content:center;"]),f=Object(i.d)("img").withConfig({displayName:"PaginationSeparator___StyledImg",componentId:"tyejtj-1"})(["margin:0;top:5px;position:relative;"]),g=r.a.memo((function(){return r.a.createElement(h,null,r.a.createElement(f,{alt:"ellipsis",src:"https://icongr.am/clarity/ellipsis-horizontal.svg?size=16&color=4d4d4d"}))})),x="https://icongr.am/clarity/arrow.svg?size=24&color=bebebe",b=Object(i.d)(s.Link).withConfig({displayName:"ButtonNextPrev__Button",componentId:"sc-1y4zzcb-0"})(["text-decoration:none;display:flex;margin:0 20px;transition:0.3s;visibility:",";p{font-weight:bold;margin:0;color:#4d4d4d;}img{transition:0.4s;transform:rotate(",");margin:0 3px;}&:hover{img{transform:rotate(",") translateY(-3px);}}"],(function(t){return t.hide?"hidden":"inherit"}),(function(t){return"true"===t.isnext?"90deg":"-90deg"}),(function(t){return"true"===t.isnext?"90deg":"-90deg"})),w=function(t){var e=t.isnext,n=void 0===e||e,a=t.toIndex,i=t.hide;return r.a.createElement(b,{isnext:n.toString(),hide:i?1:0,to:"/blog"+(a?"/page/"+a:"")},!n&&r.a.createElement("img",{alt:"Prev Page",src:x}),r.a.createElement("p",null,n?"NEXT":"PREV"),n&&r.a.createElement("img",{alt:"Next Page",src:x}))};var v=Object(i.d)("div").withConfig({displayName:"Pagination___StyledDiv",componentId:"sc-1cxkjjg-0"})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;border-radius:4px;box-shadow:0px 0px 12px 1px #d5d0d0eb;padding:","px 0;"],(function(t){return t._css})),y=Object(i.d)("div").withConfig({displayName:"Pagination___StyledDiv2",componentId:"sc-1cxkjjg-1"})(["display:flex;align-items:center;justify-content:center;& > div + div{margin:0 3px;}"]),E=r.a.memo((function(t){var e=t.pages,n=t.selected,a=t.onChange,i=t.touchMode,o=t.hasNextPage,c=t.hasPrevPage,m=Object(l.a)(t,["pages","selected","onChange","touchMode","hasNextPage","hasPrevPage"]),s=function(t,e){var n=Object(d.a)(Array(t)).map((function(t,e){return e}));if(n.length<6)return n;var a=n.length-1,r=Math.min(n.length,Math.max(0,e-1)),i=Math.min(n.length,Math.max(0,e+1)),o=[];return o.push.apply(o,Object(d.a)(n.slice(r,i+1))),e===a&&o.unshift(a-2),0===e&&o.push(2),r>1&&o.unshift(-1),i<a-1&&o.push(-1),r>=1&&o.unshift(n[0]),i<=a-1&&o.push(n[n.length-1]),o}(e,n);return r.a.createElement(v,Object.assign({},m,{_css:16}),r.a.createElement(w,{hide:!c,toIndex:n-1,isnext:!1}),r.a.createElement(y,null,s.map((function(t,e){return-1===t?r.a.createElement(g,{key:"separator-"+e}):r.a.createElement(u,{key:t,index:t,selected:n===t,onChange:a,touchMode:i})}))),r.a.createElement(w,{hide:!o,toIndex:n+1,isnext:!0}))}));E.defaultProps={pages:0,selected:0,touchMode:!1};var j=E,_=n("EYWl"),I=n("7Qib"),C=i.d.div.withConfig({displayName:"BlogListTemplate__PostsWrapper",componentId:"sc-1o2n9z9-0"})(["padding:0 15px;max-width:900px;margin:0 auto 35px;"]),P="2298554535";e.default=function(t){var e=t.data.allMdx.edges||[],n=t.data.site.siteMetadata.siteUrl,a=t.pageContext,i=a.currentPage,l=a.numPages,d=a.hasNextPage,s=a.hasPrevPage;return r.a.createElement(m.a,{location:t.location,active:I.b.blog},r.a.createElement("div",{className:"Blog"},r.a.createElement(_.a,{title:"Blog",url:n+"/blog"}),r.a.createElement(c.a,{title:"Blog",color:"#3fabbb"}),r.a.createElement(C,null,e.map((function(t,e){var n=t.node;return!!n.frontmatter.published&&r.a.createElement(o.a,{data:{title:n.frontmatter.title,thumbnail:n.frontmatter.image.childImageSharp.sizes,excerpt:n.excerpt,date:n.frontmatter.date,path:"/"+n.fields.slug,timeToRead:n.timeToRead},key:e})})),r.a.createElement(j,{pages:l,selected:i,hasNextPage:d,hasPrevPage:s}))))}},ku9C:function(t,e,n){t.exports=n.p+"static/avatar-a2e9fd8e8b00fa2ccc3c13d0df12b917.jpg"},rY4l:function(t,e,n){"use strict";var a=n("MUpH"),r=n("q1tI"),i=n.n(r),o=n("vOnD"),c=n("InJ6");function m(){var t=Object(a.a)(["\n\t\tfont-size: 16px;\n\t"]);return m=function(){return t},t}function l(){var t=Object(a.a)(["\n\t\tfont-size: 78px;\n\t"]);return l=function(){return t},t}var d=o.d.div.withConfig({displayName:"Header__Container",componentId:"n00xvb-0"})(["margin-left:auto;margin-right:auto;margin-top:",";margin-bottom:",";max-width:820px;padding:0 13px;"],(function(t){return t.top?t.top:"100px"}),(function(t){return t.bottom?t.bottom:"10px"})),s=o.d.h1.withConfig({displayName:"Header__Title",componentId:"n00xvb-1"})(["font-family:'Open Sans',sans-serif;color:",";font-size:11vw;"," text-align:center;line-height:100%;font-weight:900;letter-spacing:-1px;text-transform:uppercase;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:2px;-webkit-text-stroke-color:",";"],(function(t){return t.color?t.color:"#f06668"}),c.c.md(l()),(function(t){return t.color?t.color:"#f06668"})),p=o.d.p.withConfig({displayName:"Header__Description",componentId:"n00xvb-2"})(["color:#353535;text-align:center;margin:0;a{text-decoration:none;color:#3384a0;}font-size:15px;",";"],c.c.sm(m()));e.a=function(t){return i.a.createElement(d,{top:t.top,bottom:t.bottom},i.a.createElement(s,{color:t.color},t.title),t.description&&i.a.createElement(p,null,t.description))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-a9eae10ffc83b81f4337.js.map