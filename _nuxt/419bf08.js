(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7],{315:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("364e4840",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(315)},317:function(t,e,r){var n=r(82)(!1);n.push([t.i,"a.nuxt-link-active{font-weight:700;color:#0ff}a.nuxt-link-exact-active{color:#00c58e}.nuxt-link-prefetched{color:#ff4500}",""]),t.exports=n},318:function(t,e,r){"use strict";r.r(e);r(316);var n=r(56),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[e("b-navbar-brand",[e("img",{staticClass:"d-inline-block align-text-top",attrs:{src:"https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n",alt:"",width:"140",height:"60"}})])],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),o=r(97),l=r(318);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={middleware:"auth",data:function(){return{profile:{username:"",agewise:null,length:""},data:{username:"Kim",age:90,height:"5'9"}}},computed:f({},Object(o.c)({userProfile:"userProfile"})),methods:f(f({},Object(o.b)({startPersistance:"startPersistance"})),{},{startPersistanceNow:function(){this.startPersistance(this.data)},refreshPage:function(){this.startPersistance(null),window.location.reload(),this.startPersistance(this.data)}}),mounted:function(){null!==this.userProfile?(console.log("Fetched from state!!"),this.profile.username=this.userProfile.username,this.profile.agewise=this.userProfile.age,this.profile.length=this.userProfile.height):(console.log("FAILED to fetch from state!!"),this.startPersistanceNow(this.data))},components:{Navbar:l.default}},d=r(56),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),t._v(" "),r("div",{staticClass:"container",staticStyle:{width:"400px"}},[r("div",{staticClass:"subheading1"},[t._v(t._s(this.profile.username))]),t._v(" "),r("div",{staticClass:"subheading1"},[t._v(t._s(this.profile.agewise))]),t._v(" "),r("div",{staticClass:"subheading1"},[t._v(t._s(this.profile.length))]),t._v(" "),r("button",{staticClass:"primary-button",on:{click:t.refreshPage}},[t._v("Refresh")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(318).default})}}]);