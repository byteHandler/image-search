(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{456:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),c=i(16),n=i.n(c),r=i(81),o=i.n(r),l=i(136),u=i(22),d=i(23),h=i(25),j=i(24),m=(i(143),i(1)),b=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(u.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={inputValue:e.props.inputValue,loading:"category"},e.onFormSubmit=function(t){t.preventDefault(),e.setState({loading:"loading"}),e.props.onSearchSubmit(e.state.inputValue)},e}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"ui segment",children:Object(m.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("div",{className:"ui fluid ".concat(this.state.loading," search"),children:Object(m.jsxs)("div",{className:"ui massive icon input",children:[Object(m.jsx)("input",{className:"prompt",type:"text",placeholder:this.state.inputValue,value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})}}),Object(m.jsx)("i",{className:"search icon"})]})})})})})}}]),i}(s.a.Component),p=i(80),g=i.n(p),v=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(u.a)(this,i),(a=t.call(this,e)).state={loaded:!1},a}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"ui placeholder",style:this.state.loaded?{display:"none"}:{},children:Object(m.jsx)("div",{className:"ui image",style:{width:this.props.width,height:this.props.height}})}),Object(m.jsx)("img",{src:this.props.source,style:this.state.loaded?{}:{display:"none"},onLoad:function(){e.setState({loaded:!0}),e.props.imageListRef.addLoadCount()},className:"ui fluid image",alt:"profile-pic"})]})}}]),i}(s.a.Component),O=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(u.a)(this,i),(a=t.call(this,e)).loadCount=0,a.state={images:[],view:"grid",inputValue:""},a}return Object(d.a)(i,[{key:"addLoadCount",value:function(){this.loadCount+=1,this.loadCount===this.props.images.length&&this.props.searchInputRef.current.setState({loading:"category"})}},{key:"render",value:function(){var e=this;this.loadCount=0;var t=this.state.images.map((function(t){return"grid"===e.state.view?Object(m.jsx)("div",{className:"eight wide column",children:Object(m.jsx)("div",{className:"ui fluid card",children:Object(m.jsx)(v,{imageListRef:e,source:t.largeImageURL,width:t.previewWidth,height:t.previewHeight})})},t.id):Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)("div",{className:"ui fluid card",children:[Object(m.jsx)(v,{source:t.largeImageURL,width:t.previewWidth,height:t.previewHeight}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"header",children:t.user}),Object(m.jsxs)("div",{className:"meta",children:[Object(m.jsx)("i",{className:"thumbs up outline icon"})," ",t.likes," ",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"arrow alternate circle down outline icon"})," ",t.downloads," ",Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{className:"description"})]})]})},t.id)}));return this.state.images.length>0?"grid"===this.state.view?Object(m.jsx)("div",{className:"ui grid",children:t}):Object(m.jsx)("div",{class:"ui divided items",children:t}):""===this.state.inputValue?Object(m.jsx)("div",{className:"ui placeholder segment",children:Object(m.jsxs)("div",{className:"ui icon header",children:[Object(m.jsx)("i",{className:"image outline icon"}),"Start by typing in the search bar,",Object(m.jsx)("br",{}),"then press ",Object(m.jsx)("em",{children:"ENTER"}),"."]})}):Object(m.jsx)("div",{className:"ui placeholder segment",children:Object(m.jsxs)("div",{className:"ui icon header",children:[Object(m.jsx)("i",{className:"frown outline icon"}),"No image named",Object(m.jsx)("br",{}),'"',Object(m.jsx)("em",{children:this.state.inputValue}),'"',Object(m.jsx)("br",{}),"was found."]})})}}]),i}(s.a.Component),f=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(u.a)(this,i),(a=t.call(this,e)).onGridClick=function(){a.setState({view:"grid",gridButton:"primary",listButton:"secondary"}),a.imageListRef.current.setState({view:"grid"})},a.onListClick=function(){a.setState({view:"list",gridButton:"secondary",listButton:"primary"}),a.imageListRef.current.setState({view:"list"})},a.onSearchSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,g.a.get("https://pixabay.com/api/?key=21844549-840acc6adaa37fac4e1186c8f&q=".concat(t.replace(" ","+"),"&image_type=photo"));case 3:i=e.sent,console.log(i.data.hits),a.imageListRef.current.setState({images:i.data.hits,view:"grid",inputValue:t}),a.setState({images:i.data.hits});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={images:[],inputValue:"",view:"grid",listButton:"secondary",gridButton:"primary"},a.searchInputRef=s.a.createRef(),a.imageListRef=s.a.createRef(),a}return Object(d.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ui container",style:{marginTop:"30px"},children:[Object(m.jsx)("div",{dataContent:"it works",className:"ui huge header",style:{marginLeft:"auto",marginRight:"auto"},children:"Image Search"}),Object(m.jsx)(b,{ref:this.searchInputRef,onSearchSubmit:this.onSearchSubmit,inputValue:this.state.inputValue,loading:"category"}),Object(m.jsxs)("div",{style:{marginBottom:"13px",zIndex:1},className:"ui fluid icon buttons",children:[Object(m.jsx)("button",{dataContent:"grid",onClick:this.onGridClick,className:"ui ".concat(this.state.gridButton," basic button"),children:Object(m.jsx)("i",{className:"grid layout icon"})}),Object(m.jsx)("button",{onClick:this.onListClick,className:"ui ".concat(this.state.listButton," basic button"),children:Object(m.jsx)("i",{className:"list layout icon"})})]}),Object(m.jsx)(O,{ref:this.imageListRef,searchInputRef:this.searchInputRef,images:this.state.images,inputValue:this.state.inputValue,view:this.state.view})]})}}]),i}(s.a.Component);n.a.render(Object(m.jsx)(f,{}),document.querySelector("#root"))}},[[456,1,2]]]);
//# sourceMappingURL=main.46c2f3f0.chunk.js.map