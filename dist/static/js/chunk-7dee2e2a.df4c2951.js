(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dee2e2a"],{"1b74":function(t,e,a){"use strict";a("74a0")},"585e":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("展期录入")])]),a("div",[a("Search",{attrs:{"search-data":t.searchData,"search-item":t.searchItem,"search-bto":t.searchBto,"show-all":t.showAll},on:{getDataList:t.getDataList,handleInsert:t.handleInsert,dropDown:t.dropDown,dropUp:t.dropUp,handleCommit:t.handleCommit}}),a("Table",{attrs:{"table-data":t.tableData,"table-list-data":t.tableListData,"table-btn":t.tableBtn,"current-data":t.currentData},on:{onPageChange:t.onPageChange,onSizeChange:t.onSizeChange,handleEdit:t.handleEdit,handleStatus:t.handleStatus,handleViewOther:t.handleViewOther,handleDelete:t.handleDelete,handleSelectionChange:t.handleSelectionChange}})],1)]),a("dialog-com",{attrs:{"dialog-obj":t.dialogObj},on:{addSub:t.addSub,updateSub:t.updateSub}})],1)},i=[],s=(a("4160"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("b64b"),a("2532"),a("159b"),a("ade3")),r=a("9247"),o=a("9b18"),n=a("b7c0"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"abow_dialog",attrs:{title:t.dialogObj.title,"append-to-body":"",visible:t.dialogObj.show,"close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){return t.$set(t.dialogObj,"show",e)}}},[t.dialogObj.show?a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"140px","label-position":"left",rules:t.rules,disabled:t.dialogObj.read,"status-icon":""}},[a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),t._v("借款合同信息")]),a("div",{staticClass:"mb-10"}),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"合同流水号：",prop:"htlsh"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:t.htlshChange},model:{value:t.form.htlsh,callback:function(e){t.$set(t.form,"htlsh",e)},expression:"form.htlsh"}},t._l(t.htlshList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.htlsh,value:t.htlsh}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"合同名称：",prop:"htmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.htmc,callback:function(e){t.$set(t.form,"htmc",e)},expression:"form.htmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"借款币种：",prop:"jkbz"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jkbz,callback:function(e){t.$set(t.form,"jkbz",e)},expression:"form.jkbz"}})],1)],1),a("el-col",{attrs:{span:12}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"债权人：",prop:"zqr"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.zqr,callback:function(e){t.$set(t.form,"zqr",e)},expression:"form.zqr"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"债务人：",prop:"zwr"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.zwr,callback:function(e){t.$set(t.form,"zwr",e)},expression:"form.zwr"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"开始日期：",prop:"ksrq"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.ksrq,callback:function(e){t.$set(t.form,"ksrq",e)},expression:"form.ksrq"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"结束日期：",prop:"jsrq"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jsrq,callback:function(e){t.$set(t.form,"jsrq",e)},expression:"form.jsrq"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"借款金额(元)：",prop:"jkje"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jkje,callback:function(e){t.$set(t.form,"jkje",e)},expression:"form.jkje"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"金额大写：",prop:"jedx"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jedx,callback:function(e){t.$set(t.form,"jedx",e)},expression:"form.jedx"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"借款期限：",prop:"jkqx"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jkqx,callback:function(e){t.$set(t.form,"jkqx",e)},expression:"form.jkqx"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"利率转换天数：",prop:"llzhts"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.llzhts,callback:function(e){t.$set(t.form,"llzhts",e)},expression:"form.llzhts"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"计息方式：",prop:"jxfs"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.jxfs,callback:function(e){t.$set(t.form,"jxfs",e)},expression:"form.jxfs"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"合同签订利率(%)：",prop:"htqdll"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.htqdll,callback:function(e){t.$set(t.form,"htqdll",e)},expression:"form.htqdll"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"付息方式：",prop:"fxfs"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.fxfs,callback:function(e){t.$set(t.form,"fxfs",e)},expression:"form.fxfs"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"还本方式：",prop:"hbfs"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.hbfs,callback:function(e){t.$set(t.form,"hbfs",e)},expression:"form.hbfs"}})],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{staticClass:"formItem",attrs:{label:"备注：",prop:"bz"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.bz,callback:function(e){t.$set(t.form,"bz",e)},expression:"form.bz"}})],1)],1)],1),a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),t._v("展期信息")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"展期单据编号：",prop:"zqdjbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.zqdjbh,callback:function(e){t.$set(t.form,"zqdjbh",e)},expression:"form.zqdjbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"展期结束日期：",prop:"zqjsrq"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择开户日期",size:"mini"},model:{value:t.form.zqjsrq,callback:function(e){t.$set(t.form,"zqjsrq",e)},expression:"form.zqjsrq"}})],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{staticClass:"formItem",attrs:{label:"展期说明：",prop:"zqsm"}},[a("el-input",{staticStyle:{width:"83%"},attrs:{type:"textarea",rows:3,size:"mini",maxlength:"50","show-word-limit":"",placeholder:t.placeholderTips.content},model:{value:t.form.zqsm,callback:function(e){t.$set(t.form,"zqsm",e)},expression:"form.zqsm"}})],1)],1)],1),a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),t._v("附件")]),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"附件：",prop:"sysFamilyAddress"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"",limit:3,"on-exceed":t.handleExceed}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件(0)条")])],1)],1)],1)],1)],1):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogObj.show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("确 定")])],1)],1)},c=[],u=a("61f7"),h={components:{},props:["dialogObj"],data:function(){return{htlshList:[{htlsh:"DK2000046448",htmc:"抵押担保",jkbz:"人民币",zqr:"顶级单位",zwr:"二级单位1",ksrq:"2020-06-01",jsrq:"2020-06-27",jkje:"1000",jedx:"1000",jkqx:"一年",llzhts:"360天",jxfs:"固定利率",htqdll:"5.0",fxfs:"按季付息",hbfs:"按计划还",bz:""}],placeholderTips:u["b"],form:{htlsh:"",htmc:"",jkbz:"",zqr:"",zwr:"",ksrq:"",jsrq:"",jkje:"",jedx:"",jkqx:"",llzhts:"",jxfs:"",htqdll:"",fxfs:"",bz:"",zqdjbh:"",zqjsrq:"",zqsm:""},rules:{htlsh:[{required:!0,message:"请填写合同流水号",trigger:"blur"}],zqdjbh:[{required:!0,message:"请填写展期单据编号",trigger:"blur"}],zqjsrq:[{required:!0,message:"请填写展期结束日期",trigger:"blur"}]}}},computed:{},watch:{"dialogObj.show":function(t){t&&this.initDialog()}},created:function(){},mounted:function(){},methods:{htlshChange:function(t){var e=this;this.htlshList.forEach((function(a,l){a.htlsh==t&&Object.keys(a).forEach((function(t){e.form[t]=a[t]}))}))},initDialog:function(){var t=this;this.dialogObj.id?Object.keys(this.form).forEach((function(e){t.form[e]=t.dialogObj.form[e]})):(Object.keys(this.form).forEach((function(e){t.form[e]=""})),this.form.zqdjbh="DK2020112414285910")},sub:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.dialogObj.id?t.updateSub():(t.form.djzt=1,t.addSub()))}))},updateSub:function(){this.$emit("updateSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1},addSub:function(){this.$emit("addSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1}}},f=h,p=(a("1b74"),a("2877")),m=Object(p["a"])(f,d,c,!1,null,"d53d2026",null),b=m.exports,v={components:{Search:o["a"],Table:n["a"],dialogCom:b},data:function(){var t;return t={djztList:r["p"],dialogObj:{id:"",title:"aaa",read:!1,show:!1,form:{}},showAll:!1,currentData:{currentPage:1,size:10,total:10},searchBto:[]},Object(s["a"])(t,"dialogObj",{id:"",title:"",read:!1,show:!1,form:{}}),Object(s["a"])(t,"list",[]),Object(s["a"])(t,"tableData",[]),Object(s["a"])(t,"tableBtn",[]),Object(s["a"])(t,"searchItem",[]),Object(s["a"])(t,"searchData",{nickname:"",documentNumber:""}),Object(s["a"])(t,"selectChange",[]),t},computed:{},watch:{},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.searchBto=[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"},{prop:"commit",type:"primary",label:"提交"},{prop:"reset",type:"",label:"重置"}],this.searchItem=[{type:"input",label:"合同名称:",prop:"htmc",placeholder:"请填写合同名称"},{type:"select",label:"债权人:",prop:"zqr",placeholder:"请选择债权人"},{type:"time",label:"展期结束日期从:",prop:"zqjsrqc",placeholder:"请选择展期结束日期",show:this.showAll},{type:"time",label:"到:",prop:"zqjsrqd",placeholder:"请选择展期结束日期",show:this.showAll},{type:"select",label:"单据状态:",prop:"djzt",selectList:this.djztList,placeholder:"请选择单据状态",show:this.showAll}],this.tableListData=[{width:"50",label:"",type:"index",fixed:"left"},{width:"50",label:"",type:"selection",fixed:"left"},{label:"操作",type:"btn",width:"",fixed:"left"},{prop:"zqdjbh",width:"150",type:"a",label:"展期单据编号"},{prop:"htlsh",width:"150",label:"合同编号"},{prop:"htmc",width:"",label:"合同名称"},{prop:"zqr",width:"",label:"债权人"},{prop:"zwr",width:"",label:"债务人"},{prop:"zqjsrq",width:"",label:"展期结束日期"},{prop:"djzt",width:"",label:"单据状态",type:"wordbook",wordbookList:this.djzt}],this.tableBtn=[{name:"编 辑",btnType:"primary",handleFn:"handleEdit"},{name:"删 除",btnType:"danger",handleFn:"handleDelete"}]},mounted:function(){},methods:{handleCommit:function(){var t=this;0!=this.selectChange.length?this.selectChange.forEach((function(e,a){t.list.forEach((function(t,a){t.zqdjbh==e.zqdjbh&&(t.djzt=2)}))})):this.$message({message:"请选择数据再进行提交操作！",type:"warning"})},handleSelectionChange:function(t){this.selectChange=t},djzt:function(t){return r["o"][t]},updateSub:function(t){var e=0;this.tableData.forEach((function(a,l){a.documentNumber==t.documentNumber&&(e=l)})),console.log(e);var a=this.tableData[e];Object.keys(a).forEach((function(e){t[e]&&(a[e]=t[e])})),this.tableData[e]=a,this.list[e]=a},addSub:function(t){console.log(t),this.list.push(t),this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length},dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!0)}))},handleInsert:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="新增"},add:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="添加账号"},getDataList:function(t){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=t,this.getList()},onPageChange:function(t){this.currentData.currentPage=t,this.getList()},onSizeChange:function(t){this.currentData.size=t,this.currentData.currentPage=1,this.getList()},handleDelete:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(),e.list.splice(e.list.indexOf(t),1),e.tableData=e.list,e.currentData.total=e.list.length}))},handleEdit:function(t){this.dialogObj.id=t.zqdjbh,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑",this.dialogObj.form=JSON.parse(JSON.stringify(t))},handleViewOther:function(t){this.dialogObj.id=t.zqdjbh,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看",this.dialogObj.form=JSON.parse(JSON.stringify(t))},getList:function(){var t=this;console.log(this.searchData);var e=[],a=this,l=JSON.parse(JSON.stringify(this.list));l.forEach((function(a,l){var i=!0;for(var s in t.searchData)""!=t.searchData[s]&&void 0!=t.searchData[s]&&("htmc"==s&&(i=!!a.htmc.includes(t.searchData[s])),"djzt"==s&&(i=a.djzt==t.searchData[s]),"zqr"==s&&(i=!!a.zqr.includes(t.searchData[s])),"zqjsrqc"==s&&(i=Date.parse(a.zqjsrq)>=Date.parse(t.searchData[s])),"zqjsrqd"==s&&(i=Date.parse(a.zqjsrq)<=Date.parse(t.searchData[s])));1==i&&e.push(a)})),console.log(e),a.tableData=e}}},j=v,z=Object(p["a"])(j,l,i,!1,null,"7285e874",null);e["default"]=z.exports},"74a0":function(t,e,a){},9247:function(t,e,a){"use strict";a.d(e,"P",(function(){return s})),a.d(e,"Q",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return n})),a.d(e,"h",(function(){return d})),a.d(e,"i",(function(){return c})),a.d(e,"m",(function(){return u})),a.d(e,"n",(function(){return h})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return p})),a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return b})),a.d(e,"H",(function(){return v})),a.d(e,"G",(function(){return j})),a.d(e,"K",(function(){return z})),a.d(e,"j",(function(){return w})),a.d(e,"g",(function(){return g})),a.d(e,"N",(function(){return q})),a.d(e,"O",(function(){return x})),a.d(e,"R",(function(){return y})),a.d(e,"S",(function(){return O})),a.d(e,"L",(function(){return k})),a.d(e,"M",(function(){return D})),a.d(e,"I",(function(){return S})),a.d(e,"J",(function(){return C})),a.d(e,"v",(function(){return I})),a.d(e,"w",(function(){return $})),a.d(e,"k",(function(){return T})),a.d(e,"l",(function(){return E})),a.d(e,"E",(function(){return L})),a.d(e,"F",(function(){return N})),a.d(e,"r",(function(){return _})),a.d(e,"s",(function(){return J})),a.d(e,"A",(function(){return A})),a.d(e,"B",(function(){return B})),a.d(e,"o",(function(){return P})),a.d(e,"p",(function(){return F})),a.d(e,"x",(function(){return K})),a.d(e,"y",(function(){return M})),a.d(e,"z",(function(){return R})),a.d(e,"C",(function(){return U})),a.d(e,"D",(function(){return V})),a.d(e,"t",(function(){return G})),a.d(e,"u",(function(){return H})),a.d(e,"q",(function(){return Q}));var l,i=a("ade3"),s={1324:"单位1",546:"单位2",13265:"单位3"},r=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],o={1:"北京银行",2:"工商银行",3:"中国银行"},n=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],d={1:"人民币",2:"美元",3:"日元"},c=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],u={1:"直联",2:"非直联"},h=[{id:1,value:"直联"},{id:2,value:"非直联"}],f={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},p=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],m={1:"正常",2:"销户"},b=[{id:1,value:"正常"},{id:2,value:"销户"}],v=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],j=[{id:1,value:"非直联支付"}],z=[{id:1,value:"是"},{id:2,value:"否"}],w=(l={1:"年",2:"季"},Object(i["a"])(l,"2","月"),Object(i["a"])(l,"2","周"),Object(i["a"])(l,"2","日"),[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}]),g=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],q={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},x=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],y={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},O=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],k={1:"资金上划"},D=[{id:1,value:"资金上划"}],S={1:"存款",2:"贷款",3:"活期"},C=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],I={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},$=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],T={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},E=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],L={1:"360天",2:"365天"},N=[{id:1,value:"360天"},{id:2,value:"365天"}],_={1:"到期本息转活期",2:"到期本息续存"},J=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],A={1:"未执行",2:"执行中",3:"已结束"},B=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],P={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},F=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],K=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],M=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],R=[{id:1,value:"还息"},{id:2,value:"还本"}],U={1:"固定利率",2:"浮动利率"},V=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],G={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},H=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],Q=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]}}]);