(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,l,"next",e)}function l(e){n(i,a,o,s,l,"throw",e)}s(void 0)}))}}},5895:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("div",{staticStyle:{"margin-top":"15px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:this.getUsers},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:this.getUsers},slot:"append"})],1)],1),r("el-col",{attrs:{span:3}},[r("el-button",{attrs:{type:"primary"},on:{click:e.addDialog}},[e._v(" 添加用户 ")])],1)],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.userReset}},[r("el-form",{ref:"addUserRef",staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:e.rules,model:e.addUser}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addUser.username,callback:function(t){e.$set(e.addUser,"username",t)},expression:"addUser.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.addUser.password,callback:function(t){e.$set(e.addUser,"password",t)},expression:"addUser.password"}})],1),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[r("el-input",{model:{value:e.addUser.email,callback:function(t){e.$set(e.addUser,"email",t)},expression:"addUser.email"}})],1),r("el-form-item",{attrs:{label:"用户电话",prop:"mobile"}},[r("el-input",{model:{value:e.addUser.mobile,callback:function(t){e.$set(e.addUser,"mobile",t)},expression:"addUser.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1),[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{prop:"mg_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.changeState(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(r){return e.editing(t.row.id)}}}),r("el-dialog",{attrs:{title:"添加用户",visible:e.editVisible,width:"50%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"editUserRef",staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:e.rules,model:e.editUser}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editUser.username,callback:function(t){e.$set(e.editUser,"username",t)},expression:"editUser.username"}})],1),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[r("el-input",{model:{value:e.editUser.email,callback:function(t){e.$set(e.editUser,"email",t)},expression:"editUser.email"}})],1),r("el-form-item",{attrs:{label:"用户电话",prop:"mobile"}},[r("el-input",{model:{value:e.editUser.mobile,callback:function(t){e.$set(e.editUser,"mobile",t)},expression:"editUser.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.editClose(t.row.id)}}},[e._v(" 确 定 ")])],1)],1),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(r){return e.delVisible(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top"}},[r("el-button",{attrs:{type:"success",icon:"el-icon-s-tools",circle:""},on:{click:function(r){return e.editRoles(t.row)}}})],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.roleVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.roleVisible=t},close:e.closeDialog}},[r("p",[r("b",[e._v("用户名 :")]),e._v(e._s(e.userlist.username))]),r("p",[r("b",[e._v("用户角色 : ")]),e._v(e._s(e.userlist.role_name))]),r("p",[e._v(" 角色分配: "),[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectRoleId,callback:function(t){e.selectRoleId=t},expression:"selectRoleId"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)]],2),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.roleVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitRoles(t.row.id)}}},[e._v("确 定")])],1)])]}}])})],1)],r("div",{staticClass:"block"},[r("el-pagination",{attrs:{"current-page":+e.queryInfo.pagenum,"page-sizes":[1,2,3,5],"page-size":+e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:+e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2)])],1)},a=[],o=(r("99af"),r("96cf"),r("1da1")),i={data:function(){var e=function(e,t,r){var n=/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;if(n.test(t))return r();r(new Error("手机号不符合规范"))};return{users:[],queryInfo:{query:"",pagenum:1,pagesize:2},total:"",dialogVisible:!1,addUser:{username:"",password:"",email:"",mobile:""},editUser:{},editVisible:!1,roleVisible:!1,userlist:{},roleList:[],selectRoleId:"",rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:6,message:"长度在 3 到 6 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],mobile:[{required:!0,message:"号码不能为空"},{validator:e,trigger:"blur"}]}}},created:function(){window.sessionStorage.getItem("pagesize")&&(this.queryInfo.pagesize=window.sessionStorage.getItem("pagesize"))},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,200===r.meta.status){t.next=5;break}return t.abrupt("return",e.$message.error("获取管理员列表失败"));case 5:e.users=r.data.users,e.total=r.data.total;case 7:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,window.sessionStorage.setItem("pagesize",e),this.getUsers()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUsers()},changeState:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:n=r.sent,200!==n.meta.status&&(t.$message.error("用户状态更新失败!"),t.users.mg_state=!t.users.mg_state),t.getUsers(),t.$message.success("更新用户状态成功");case 6:case"end":return r.stop()}}),r)})))()},handleClose:function(){var e=this;this.$refs.addUserRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addUser);case 4:if(n=t.sent,201===n.meta.status){t.next=7;break}return t.abrupt("return",e.$message.error("添加失败!"));case 7:e.dialogVisible=!1,e.$message.success("添加成功!"),e.getUsers();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDialog:function(){this.dialogVisible=!0},userReset:function(){this.$refs.addUserRef.resetFields()},editing:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.editVisible=!0,r.next=3,t.$http.get("users/"+e);case 3:if(n=r.sent,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("加载用户信息失败!"));case 6:t.editUser=n.data;case 7:case"end":return r.stop()}}),r)})))()},editClose:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/"+e,t.editUser);case 2:if(n=r.sent,200===n.meta.status){r.next=5;break}return r.abrupt("return",t.$message.error("修改用户信息失败!"));case 5:t.$message.success("修改用户信息成功!"),t.editVisible=!1,t.getUsers();case 8:case"end":return r.stop()}}),r)})))()},delVisible:function(e){var t=this;this.$confirm("删除后将无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("users/"+e);case 2:if(n=r.sent,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("删除失败!"));case 7:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"error",message:"已取消删除"})}))},editRoles:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles");case 2:if(n=r.sent,200===n.meta.status){r.next=5;break}return r.abrupt("return",t.$message.error("角色列表加载失败"));case 5:t.roleList=n.data,t.roleVisible=!0,t.userlist=e;case 8:case"end":return r.stop()}}),r)})))()},closeDialog:function(){this.selectRoleId=""},submitRoles:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e,"/role"),{rid:t.selectRoleId});case 2:if(n=r.sent,200===n.meta.status){r.next=5;break}return r.abrupt("return",t.$message.error("角色分配失败!"));case 5:t.$message.success("角色分配成功!"),t.getUsers(),t.roleVisible=!1;case 8:case"end":return r.stop()}}),r)})))()}}},s=i,l=r("2877"),u=Object(l["a"])(s,n,a,!1,null,"1218fceb",null);t["default"]=u.exports},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(V){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=$(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(V){return{type:"throw",arg:V}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function g(){}function b(){}function v(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,o)&&(y=x);var k=v.prototype=g.prototype=Object.create(y);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function U(e,t){function r(a,o,i,s){var l=c(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var a;function o(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function $(e,t,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return O()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=c(e,t,r);if("normal"===l.type){if(n=r.done?h:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=c(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return b.prototype=k.constructor=v,v.constructor=b,b.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(U.prototype),U.prototype[i]=function(){return this},e.AsyncIterator=U,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new U(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),l(k,s,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=user.d7a0a4bf.js.map