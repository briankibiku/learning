(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,7,8],{315:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("364e4840",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(315)},317:function(t,e,n){var r=n(82)(!1);r.push([t.i,"a.nuxt-link-active{font-weight:700;color:#0ff}a.nuxt-link-exact-active{color:#00c58e}.nuxt-link-prefetched{color:#ff4500}",""]),t.exports=r},318:function(t,e,n){"use strict";n.r(e);n(316);var r=n(56),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[e("b-navbar-brand",[e("img",{staticClass:"d-inline-block align-text-top",attrs:{src:"https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n",alt:"",width:"140",height:"60"}})])],1)}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var r=n(56),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"curved-div"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,85.3C672,64,768,32,864,48C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}})])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("974eb28a",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);var r=n(27),l=(n(64),n(1),n(34),{data:function(){return{mountains:[],triviaQuestions:[]}},activated:function(){this.$fetchState.timestamp<=Date.now()-3e3&&this.fetch()},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nuxtjs.dev/mountains").then((function(t){return t.json()}));case 2:return t.mountains=e.sent,e.next=5,fetch("http://csm.mswali.co.ke/mswali/mswali_app/backend/web/index.php?r=api/fetch-all-questions").then((function(t){return t.json()}));case 5:t.triviaQuestions=e.sent,console.log(t.triviaQuestions.data[0].question);case 7:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(56),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?n("p",[n("span",{staticClass:"spinner-border m-5 visually-hidden"})]):t.$fetchState.error?n("p",[t._v("An error occurred :(")]):n("ul",[t._l(t.mountains,(function(e,r){return n("li",{key:r},[t._v("\n    "+t._s(e.title)+"\n  ")])})),t._v(" "),n("br"),t._v(" "),n("p",[t._v("New Question")]),t._v(" "),n("li",[t._v("\n    "+t._s(this.triviaQuestions.data[0].question)+"\n  ")])],2)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n(321)},328:function(t,e,n){var r=n(82)(!1);r.push([t.i,"h6[data-v-e3402c38]{font-family:Circular,Arial,sans-serif}",""]),t.exports=r},335:function(t,e,n){"use strict";n.r(e);n(39);var r={head:function(){return{script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto&display=swap"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},l=(n(327),n(56)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("br"),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("Networkdata"),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mx-auto",staticStyle:{width:"400px",padding:"0px 20px 0px 20px"}},[n("br"),t._v(" "),n("h4",[t._v("Say hi :-)")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}}),t._v(" "),n("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[n("h6",[t._v("We'll never share your email with anyone else.")])])]),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Comments")]),t._v(" "),n("textarea",{staticClass:"md-textarea form-control",attrs:{id:"form7",rows:"3"}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])}],!1,null,"e3402c38",null);e.default=component.exports;installComponents(component,{Navbar:n(318).default,Networkdata:n(324).default,Footer:n(319).default})}}]);