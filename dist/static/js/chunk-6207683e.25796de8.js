(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6207683e"],{2017:function(t,e,o){"use strict";o("cafe")},"4a2a":function(t,e,o){},"72c7":function(t,e,o){"use strict";o("4a2a")},"9ed6":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-container"},[t._m(0),o("div",{staticClass:"content"},[o("div",{staticClass:"left-box"}),o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[t._v("用户登录")])]),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container user"}),o("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container pws"}),o("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),o("el-form-item",{attrs:{prop:"code"}},[o("span",{staticClass:"svg-container code"}),o("el-input",{ref:"code",attrs:{placeholder:"验证码",name:"username",type:"text",tabindex:"1"},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}}),o("div",{staticClass:"ValidCode disabled-select",on:{click:t.refreshCode}},t._l(t.codeList,(function(e,r){return o("span",{key:r,style:t.getStyle(e)},[t._v(t._s(e.code))])})),0)],1),o("el-button",{attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1)],1),t._m(1)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",[o("div",{staticClass:"left"}),o("div",{staticClass:"right"},[t._v("脱机版用户注册")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",[o("div",{staticClass:"logo"}),o("div",{staticClass:"text"},[o("p",[o("span",[t._v("c")]),t._v("版权所有中国建设银行京ICP备13030780号")]),o("p",[t._v("总行地址: 中国北京西城区金融大街25号")])]),o("div",{staticClass:"text"},[o("p",[t._v("京公网安备: 110102000450")]),o("p",[t._v("邮编：100033")])]),o("div",{staticClass:"text"},[o("p",[t._v("服务热线: 0731-96511")]),o("p",[t._v("客服与投诉热线：95533")])])])])}],a=(o("99af"),o("a15b"),o("d81d"),o("13d5"),o("b64b"),{name:"Login",data:function(){var t=this,e=function(t,e,o){e?o():o(new Error("请输入用户名"))},o=function(t,e,o){e.length<6?o(new Error("密码不能少于6位")):o()},r=function(e,o,r){console.log(t.codeList);var n=[];t.codeList.map((function(t){n.push(t.code)})),n=n.join(""),o?o.toLowerCase()!==n.toLowerCase()?r(new Error("验证码错误")):r():r(new Error("请输入验证码"))};return{loginForm:{username:"",password:"",code:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:o}],code:[{required:!0,trigger:"blur",validator:r}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},codeList:[],length:4}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus(),this.createdCode()},destroyed:function(){},methods:{refreshCode:function(){this.createdCode()},createdCode:function(){for(var t=this.length,e=[],o="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",r=o.length,n=0;n<t;n++){var a=[Math.round(220*Math.random()),Math.round(240*Math.random()),Math.round(200*Math.random())];e.push({code:o.charAt(Math.floor(Math.random()*r)),color:"rgb(".concat(a,")"),fontSize:"2".concat([Math.floor(10*Math.random())],"px"),padding:"".concat([Math.floor(10*Math.random())],"px"),transform:"rotate(".concat(Math.floor(90*Math.random())-Math.floor(90*Math.random()),"deg)")})}this.codeList=e,this.$emit("update:value",e.map((function(t){return t.code})).join(""))},getStyle:function(t){return"color: ".concat(t.color,"; font-size: ").concat(t.fontSize,"; padding: ").concat(t.padding,"; transform: ").concat(t.transform)},checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;console.log(this.codeList),this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,o){return"redirect"!==o&&(e[o]=t[o]),e}),{})}}}),s=a,i=(o("2017"),o("72c7"),o("2877")),c=Object(i["a"])(s,r,n,!1,null,"1b353ef6",null);e["default"]=c.exports},cafe:function(t,e,o){}}]);