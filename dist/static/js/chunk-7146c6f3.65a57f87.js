(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7146c6f3"],{"38fb":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"selectCollsectionInfo"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("归集信息查询")])]),a("div",[a("Search",{attrs:{"search-data":e.searchData,"search-item":e.searchItem,"search-bto":e.searchBto,"show-all":e.showAll},on:{getDataList:e.getDataList,dropDown:e.dropDown,dropUp:e.dropUp}}),a("Table",{attrs:{"table-data":e.tableData,"table-list-data":e.tableListData,"current-data":e.currentData},on:{onPageChange:e.onPageChange,onSizeChange:e.onSizeChange,handleViewOther:e.handleViewOther}})],1)]),a("dialog-com",{attrs:{"dialog-obj":e.dialogObj}})],1)},i=[],r=(a("4160"),a("fb6a"),a("159b"),a("9b18")),n=a("b7c0"),s=a("567a"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"abow_dialog",attrs:{title:e.dialogObj.title,"append-to-body":"",visible:e.dialogObj.show,"close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(t){return e.$set(e.dialogObj,"show",t)}}},[e.dialogObj.show?a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"140px","label-position":"left",disabled:e.dialogObj.read,"status-icon":"","inline-message":!0}},[a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),e._v(" 付款主单")]),a("div",{staticClass:"mb-10"}),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"单据编号：",prop:"djbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:e.placeholderTips.content},model:{value:e.form.djbh,callback:function(t){e.$set(e.form,"djbh",t)},expression:"form.djbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"单据日期：",prop:"djrq"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"请选择单据日期",size:"mini",disabled:!0},model:{value:e.form.djrq,callback:function(t){e.$set(e.form,"djrq",t)},expression:"form.djrq"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"付款公司编号：",prop:"fkgsbh"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.fkgsbh,callback:function(t){e.$set(e.form,"fkgsbh",t)},expression:"form.fkgsbh"}},e._l(e.unitNoList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"付款公司名称：",prop:"fkgsmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:e.placeholderTips.content},model:{value:e.form.fkgsmc,callback:function(t){e.$set(e.form,"fkgsmc",t)},expression:"form.fkgsmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"业务类型：",prop:"ywlx"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.ywlx,callback:function(t){e.$set(e.form,"ywlx",t)},expression:"form.ywlx"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"汇总金额(元)：",prop:"hzje"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.hzje,callback:function(t){e.$set(e.form,"hzje",t)},expression:"form.hzje"}})],1)],1)],1),a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),e._v(" 收款方信息")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司编号：",prop:"gsbh"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.gsbh,callback:function(t){e.$set(e.form,"gsbh",t)},expression:"form.gsbh"}},e._l(e.backList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称：",prop:"gsmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.gsmc,callback:function(t){e.$set(e.form,"gsmc",t)},expression:"form.gsmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行编号：",prop:"yhbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.yhbh,callback:function(t){e.$set(e.form,"yhbh",t)},expression:"form.yhbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行名称：",prop:"yhmc"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.yhmc,callback:function(t){e.$set(e.form,"yhmc",t)},expression:"form.yhmc"}},e._l(e.accountUsageList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户编号：",prop:"zhbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.zhbh,callback:function(t){e.$set(e.form,"zhbh",t)},expression:"form.zhbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户名称：",prop:"zhmc"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.zhmc,callback:function(t){e.$set(e.form,"zhmc",t)},expression:"form.zhmc"}},e._l(e.currencyList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"支付类型：",prop:"zflx"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.zflx,callback:function(t){e.$set(e.form,"zflx",t)},expression:"form.zflx"}},e._l(e.directList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"期望日期：",prop:"qwrq"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.qwrq,callback:function(t){e.$set(e.form,"qwrq",t)},expression:"form.qwrq"}})],1)],1)],1),a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),e._v(" 收款方信息")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司编号：",prop:"skgsbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skgsbh,callback:function(t){e.$set(e.form,"skgsbh",t)},expression:"form.skgsbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称：",prop:"skgsmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skgsmc,callback:function(t){e.$set(e.form,"skgsmc",t)},expression:"form.skgsmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行编号：",prop:"skyhbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skyhbh,callback:function(t){e.$set(e.form,"skyhbh",t)},expression:"form.skyhbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行名称：",prop:"skyhmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skyhmc,callback:function(t){e.$set(e.form,"skyhmc",t)},expression:"form.skyhmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户编号：",prop:"skzhbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skzhbh,callback:function(t){e.$set(e.form,"skzhbh",t)},expression:"form.skzhbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"账户名称：",prop:"skzhmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.skzhmc,callback:function(t){e.$set(e.form,"skzhmc",t)},expression:"form.skzhmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"金额(元)：",prop:"je"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.je,callback:function(t){e.$set(e.form,"je",t)},expression:"form.je"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"摘要：",prop:"zy"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.zy,callback:function(t){e.$set(e.form,"zy",t)},expression:"form.zy"}})],1)],1)],1),a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),e._v("指令详情")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"策略编号：",prop:"clbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.clbh,callback:function(t){e.$set(e.form,"clbh",t)},expression:"form.clbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"策略名称：",prop:"clmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.clmc,callback:function(t){e.$set(e.form,"clmc",t)},expression:"form.clmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"指令状态：",prop:"zlzt"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.zlzt,callback:function(t){e.$set(e.form,"zlzt",t)},expression:"form.zlzt"}})],1)],1),a("el-col",{attrs:{span:12}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"指令发送时间：",prop:"zlfssj"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.zlfssj,callback:function(t){e.$set(e.form,"zlfssj",t)},expression:"form.zlfssj"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"指令撤销时间：",prop:"zlcxsj"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.zlcxsj,callback:function(t){e.$set(e.form,"zlcxsj",t)},expression:"form.zlcxsj"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行返回信息：",prop:"yhfhxx"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.placeholderTips.content},model:{value:e.form.yhfhxx,callback:function(t){e.$set(e.form,"yhfhxx",t)},expression:"form.yhfhxx"}})],1)],1),a("el-col",{attrs:{span:12}})],1)],1):e._e(),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.dialogObj.show=!1}}},[e._v("返 回")])],1)],1)},c=[],p=(a("b64b"),a("61f7")),u=a("9247"),m={components:{},props:["dialogObj"],data:function(){return{placeholderTips:p["b"],form:{djbh:"",djrq:"",fkgsbh:"",fkgsmc:"",ywlx:"",hzje:"",gsbh:"",gsmc:"",yhzh:"",yhmc:"",zhbh:"",zhmc:"",zflx:"",qwrq:"",skgsbh:"",skgsmc:"",skyhbh:"",skyhmc:"",skzhbh:"",skzhmc:"",je:"",zy:"",clbh:"",clmc:"",zlzt:"",zlfssj:"",zlcxsj:"",yhfhxx:""},unitNoList:u["Z"],backList:u["f"],currencyList:u["i"],accountUsageList:u["d"],directList:u["n"]}},computed:{},watch:{"dialogObj.show":function(e){e&&this.initDialog()}},created:function(){},mounted:function(){},methods:{initDialog:function(){var e=this;this.dialogObj.id?Object.keys(this.form).forEach((function(t){e.form[t]=e.dialogObj.form[t]})):Object.keys(this.form).forEach((function(t){e.form[t]=""}))}}},d=m,b=(a("60ae"),a("2877")),h=Object(b["a"])(d,o,c,!1,null,"4934ea22",null),f=h.exports,y={name:"SelectCollsectionInfo",components:{Search:r["a"],Table:n["a"],dialogCom:f},data:function(){return{dialogObj:{id:"",title:"aaa",read:!1,show:!1,form:{}},searchItem:s["a"].selectCollsectionInfo.searchFrom,searchData:{nickname:""},searchBto:s["a"].selectCollsectionInfo.searchBto,showAll:!1,tableData:[],tableListData:[],list:[{djbh:"GJ20102914003603220",djrq:"2020-10-29",fkgsbh:"002",fkgsmc:"二级单位1",ywlx:"资金归集",hzje:"1.00",gsbh:"002",gsmc:"二级单位1",yhzh:"104",yhmc:"中国银行株洲市分行",zhbh:"2222334455667711",zhmc:"二级单位1CNY直联账户2",zflx:"直联支付",qwrq:"2020-10-29",skgsbh:"002",skgsmc:"二级单位1",skyhzh:"104",skyhmc:"中国银行株洲市分行",skzhbh:"2222334455667700",skzhmc:"二级单位1CNY直联账户1",je:"1.00",zy:"手动归集",clbh:"ZJGJ20072011081832",clmc:"11",zlzt:"失败",zlfssj:"2020-10-29 14:00:36",zlcxsj:"",yhfhxx:'创建"BOC_2019112101"对应的服务时出错',hksd:"普通"}],tableBtn:[],currentData:{currentPage:1,size:10,total:0}}},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.tableListData=[{width:"50",label:"",type:"index",fixed:"left"},{type:"a",prop:"djbh",fixed:"left",width:"150",label:"单据编号"},{prop:"djrq",width:"150",fixed:"left",label:"单据日期"},{prop:"je",width:"150",label:"金额"},{prop:"gsmc",width:"150",label:"付款申请单位"},{prop:"zlzt",width:"150",label:"指令状态"},{prop:"clbh",width:"150",label:"策略编号"},{prop:"clmc",width:"150",label:"策略名称"},{prop:"yhzh",width:"150",label:"付款银行帐号"},{prop:"yhmc",width:"150",label:"付款账户名称"},{prop:"skyhzh",width:"150",label:"收款银行帐号"},{prop:"skzhmc",width:"150",label:"收款账户名称"},{prop:"skyhmc",width:"150",label:"指令接受银行"},{prop:"hksd",width:"150",label:"汇款速度"}]},methods:{handleViewOther:function(e){console.log(e),this.dialogObj.id=e.djbh,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看",this.dialogObj.form=JSON.parse(JSON.stringify(e))},dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!0)}))},getDataList:function(e){console.log(e),this.searchData=e},onPageChange:function(e){var t=e*this.currentData.size,a=(e-1)*this.currentData.size;this.tableData=this.list.slice(a,t),this.currentData.currentPage=e},onSizeChange:function(e){this.currentData.size=e,this.currentData.currentPage=1,this.getList()},getList:function(){}}},v=y,w=Object(b["a"])(v,l,i,!1,null,null,null);t["default"]=w.exports},"567a":function(e,t,a){"use strict";var l={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"}],tableData:[{id:1,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:2,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:3,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:4,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:5,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:6,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:7,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:8,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:9,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:10,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:11,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"}],tableListData:[{width:"50",label:"",type:"index"},{width:"50",label:"",type:"selection"},{label:"操作",type:"btn",width:""},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"pattern",width:"150",label:"策略模式"}]},i={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:2,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"},{id:3,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:4,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"},{id:5,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:6,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:7,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"status",width:"150",label:"策略状态"},{prop:"time",width:"150",label:"激活/停止策略时间"}]},r={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"},{type:"select",label:"任务状态:",selectList:[{value:"全部",id:0},{value:"停止",id:1},{value:"激活",id:2}],prop:"taskStatus",placeholder:"请选择任务状态"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:2,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:3,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:4,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"},{id:5,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:6,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"}],tableListData:[{width:"50",label:"",type:"index"},{label:"操作",type:"btn",width:""},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"pattern",width:"150",label:"执行模式"},{prop:"time",width:"150",label:"激活/停止策略时间"},{prop:"taskStatus",width:"150",label:"任务状态"},{prop:"status",width:"150",label:"运行状态"}]},n={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:2,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:3,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:4,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"},{id:5,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:6,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"}],tableDetailData:[{id:1,company:"XXXXX公司",accountNum:"413344555532",accountName:"二级单位",bank:"中国银行",balance:0,money:""},{id:2,company:"XXXXX公司",accountNum:"413344555532",accountName:"二级单位",bank:"中国银行",balance:0,money:""},{id:3,company:"XXXXX公司",accountNum:"413344555532",accountName:"二级单位",bank:"中国银行",balance:0,money:""},{id:4,company:"XXXXX公司",accountNum:"413344555532",accountName:"二级单位",bank:"中国银行",balance:0,money:""}],tableListDetailData:[{width:"50",label:"",type:"index"},{prop:"company",width:"120px",label:"单位名称"},{prop:"accountNum",width:"120px",label:"银行帐号"},{prop:"accountName",width:"150",label:"账户名称"},{prop:"bank",width:"150",label:"银行类型"},{prop:"balance",width:"150",label:"账户余额"},{type:"input",prop:"money",width:"150",label:"归集金额"}]},s={searchFrom:[{type:"select",label:"指令状态:",selectList:[{value:"全部",id:0},{value:"撤销",id:1},{value:"保存",id:2},{value:"已发送",id:3},{value:"成功",id:4},{value:"失败",id:5},{value:"未知",id:6}],prop:"status",placeholder:"请选择指令状态"},{type:"select",label:"指令接受银行:",selectList:[{value:"全部",id:0},{value:"中国人民银行营业处",id:1},{value:"中国人民银行国库处",id:2},{value:"中国工商银行",id:3},{value:"中国农业银行",id:4},{value:"中国银行",id:5},{value:"国家开发银行",id:6}],prop:"status",placeholder:"请选择银行"},{type:"daterange",label:"指令发送时间:",timeList:["",""],timeFormat:"yyyy-MM-dd",prop:"selectDate",placeholder:"请选择日期"},{type:"select",label:"策略编号:",show:!1,selectList:[{value:"全部",id:0},{value:"ZJGJ20072011081832",id:1},{value:"ZJGJ20071411395892",id:2},{value:"ZJGJ20071514295001",id:3}],prop:"number",placeholder:"请选择编号"},{type:"input",label:"策略名称:",show:!1,prop:"name",placeholder:"请输入策略编号名称"},{type:"select",label:"业务单位:",show:!1,selectList:[{value:"全部",id:0},{value:"二级单位1",id:1}],prop:"number",placeholder:"请选择单位"},{type:"checkbox",show:!1,label:"包含下级业务单位:",prop:"unitNo"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:2,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:3,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:4,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:5,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:6,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"receiptsNumber",width:"150",label:"单据编号"},{prop:"receiptsTime",width:"150",label:"单据日期"},{prop:"money",width:"150",label:"金额"},{prop:"company",width:"150",label:"付款申请单位"},{prop:"status",width:"150",label:"指令状态"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"paymentAccountNum",width:"150",label:"付款银行帐号"},{prop:"paymentAccountName",width:"150",label:"付款账户名称"},{prop:"receiptAccountNum",width:"150",label:"收款银行帐号"},{prop:"receiptAccountName",width:"150",label:"收款账户名称帐号"},{prop:"acceptBank",width:"150",label:"指令接受银行"},{prop:"speed",width:"150",label:"汇款速度"}]},o={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"}],tableData:[{id:1,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:2,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:3,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:4,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:5,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:6,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:7,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:8,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:9,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:10,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"},{id:11,el:"",number:"ZJGJ20072011081832",name:"052",pattern:"资金上划"}],tableListData:[{width:"50",label:"",type:"index"},{width:"50",label:"",type:"selection"},{label:"操作",type:"btn",width:""},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"pattern",width:"150",label:"策略模式"}]},c={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:2,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"},{id:3,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:4,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"},{id:5,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:6,number:"ZJGJ20072011081832",name:"412",status:"停止",time:"2020-09-28 14:10:27"},{id:7,number:"ZJGJ20072011081832",name:"412",status:"激活",time:"2020-09-28 14:10:27"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"status",width:"150",label:"策略状态"},{prop:"time",width:"150",label:"激活/停止策略时间"}]},p={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"},{type:"select",label:"任务状态:",selectList:[{value:"全部",id:0},{value:"停止",id:1},{value:"激活",id:2}],prop:"taskStatus",placeholder:"请选择任务状态"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:2,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:3,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:4,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"},{id:5,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:6,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"}],tableListData:[{width:"50",label:"",type:"index"},{label:"操作",type:"btn",width:""},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"pattern",width:"150",label:"执行模式"},{prop:"taskStatus",width:"150",label:"任务状态"},{prop:"status",width:"150",label:"运行状态"}]},u={searchFrom:[{type:"input",label:"策略编号:",prop:"number",placeholder:"请填写策略编号"},{type:"input",label:"策略名称:",prop:"name",placeholder:"请填写策略名称"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:2,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:3,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:4,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"},{id:5,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"激活",status:"未运行"},{id:6,number:"ZJGJ20072011081832",name:"412",pattern:"0 00 00 ** ?",time:"2020-09-28 14:10:27",taskStatus:"停止",status:"未运行"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"}]},m={searchFrom:[{type:"select",label:"指令状态:",selectList:[{value:"全部",id:0},{value:"撤销",id:1},{value:"保存",id:2},{value:"已发送",id:3},{value:"成功",id:4},{value:"失败",id:5},{value:"未知",id:6}],prop:"status",placeholder:"请选择指令状态"},{type:"select",label:"指令接受银行:",selectList:[{value:"全部",id:0},{value:"中国人民银行营业处",id:1},{value:"中国人民银行国库处",id:2},{value:"中国工商银行",id:3},{value:"中国农业银行",id:4},{value:"中国银行",id:5},{value:"国家开发银行",id:6}],prop:"status",placeholder:"请选择银行"},{type:"daterange",label:"指令发送时间:",timeList:["",""],timeFormat:"yyyy-MM-dd",prop:"selectDate",placeholder:"请选择日期"},{type:"select",label:"策略编号:",show:!1,selectList:[{value:"全部",id:0},{value:"ZJGJ20072011081832",id:1},{value:"ZJGJ20071411395892",id:2},{value:"ZJGJ20071514295001",id:3}],prop:"number",placeholder:"请选择编号"},{type:"input",label:"策略名称:",show:!1,prop:"name",placeholder:"请输入策略编号名称"},{type:"select",label:"业务单位:",show:!1,selectList:[{value:"全部",id:0},{value:"二级单位1",id:1}],prop:"number",placeholder:"请选择单位"},{type:"checkbox",show:!1,label:"包含下级业务单位:",prop:"unitNo"}],searchBto:[{prop:"select",type:"primary",label:"查询"}],tableData:[{id:1,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:2,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:3,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:4,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:5,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"},{id:6,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",speed:"普通"}],tableListData:[{width:"50",label:"",type:"index"},{prop:"receiptsNumber",width:"150",label:"单据编号"},{prop:"receiptsTime",width:"150",label:"单据日期"},{prop:"money",width:"150",label:"金额"},{prop:"company",width:"150",label:"付款申请单位"},{prop:"status",width:"150",label:"指令状态"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"paymentAccountNum",width:"150",label:"付款银行帐号"},{prop:"paymentAccountName",width:"150",label:"付款账户名称"},{prop:"receiptAccountNum",width:"150",label:"收款银行帐号"},{prop:"receiptAccountName",width:"150",label:"收款账户名称帐号"},{prop:"acceptBank",width:"150",label:"指令接受银行"},{prop:"speed",width:"150",label:"汇款速度"}]};t["a"]={relation:l,condition:i,collsectionTask:r,foundsCollsection:n,selectCollsectionInfo:s,accountRelation:o,setSendCondition:c,selfSendTask:p,fundsSend:u,selectSendInfo:m}},"60ae":function(e,t,a){"use strict";a("a658")},9247:function(e,t,a){"use strict";a.d(t,"Y",(function(){return l})),a.d(t,"Z",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return n})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return o})),a.d(t,"m",(function(){return c})),a.d(t,"n",(function(){return p})),a.d(t,"cb",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h})),a.d(t,"L",(function(){return f})),a.d(t,"G",(function(){return y})),a.d(t,"H",(function(){return v})),a.d(t,"M",(function(){return w})),a.d(t,"K",(function(){return J})),a.d(t,"T",(function(){return k})),a.d(t,"j",(function(){return z})),a.d(t,"g",(function(){return x})),a.d(t,"W",(function(){return G})),a.d(t,"X",(function(){return Z})),a.d(t,"ab",(function(){return g})),a.d(t,"bb",(function(){return N})),a.d(t,"U",(function(){return A})),a.d(t,"V",(function(){return S})),a.d(t,"N",(function(){return j})),a.d(t,"O",(function(){return D})),a.d(t,"v",(function(){return C})),a.d(t,"w",(function(){return B})),a.d(t,"k",(function(){return L})),a.d(t,"l",(function(){return T})),a.d(t,"I",(function(){return $})),a.d(t,"J",(function(){return O})),a.d(t,"y",(function(){return X})),a.d(t,"z",(function(){return q})),a.d(t,"R",(function(){return _})),a.d(t,"S",(function(){return F})),a.d(t,"P",(function(){return I})),a.d(t,"Q",(function(){return E})),a.d(t,"r",(function(){return P})),a.d(t,"s",(function(){return U})),a.d(t,"C",(function(){return M})),a.d(t,"D",(function(){return V})),a.d(t,"o",(function(){return Y})),a.d(t,"p",(function(){return R})),a.d(t,"x",(function(){return H})),a.d(t,"A",(function(){return K})),a.d(t,"B",(function(){return Q})),a.d(t,"E",(function(){return W})),a.d(t,"F",(function(){return ee})),a.d(t,"t",(function(){return te})),a.d(t,"u",(function(){return ae})),a.d(t,"q",(function(){return le}));var l={1324:"单位1",546:"单位2",13265:"单位3"},i=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],r={1:"北京银行",2:"工商银行",3:"中国银行"},n=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],s={1:"人民币",2:"美元",3:"日元"},o=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],c={1:"直联",2:"非直联"},p=[{id:1,value:"直联"},{id:2,value:"非直联"}],u=[{id:1,value:"对公账户"},{id:2,value:"对私账户"}],m={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},d=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],b={1:"正常",2:"销户"},h=[{id:1,value:"正常"},{id:2,value:"销户"}],f=[{id:1,value:"摘要"},{id:2,value:"本方账号"},{id:3,value:"本方账户"},{id:4,value:"对方账号"},{id:5,value:"对方账户"}],y={1:"借",2:"贷"},v=[{id:1,value:"借"},{id:2,value:"贷"}],w=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],J=[{id:1,value:"非直联支付"}],k=[{id:1,value:"是"},{id:2,value:"否"}],z=[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}],x=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],G={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},Z=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],g={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},N=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],A={1:"资金上划"},S=[{id:1,value:"资金上划"}],j={1:"存款",2:"贷款",3:"活期"},D=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],C={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},B=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],L={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},T=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],$={1:"360天",2:"365天"},O=[{id:1,value:"360天"},{id:2,value:"365天"}],X={1:"启用",2:"停用"},q=[{id:1,value:"启用"},{id:2,value:"停用"}],_={1:"待定",2:"未认领",3:"已认领"},F=[{id:1,value:"待定"},{id:2,value:"未认领"},{id:3,value:"已认领"}],I={1:"线下入账",2:"非线下入账"},E=[{id:1,value:"线下入账"},{id:2,value:"非线下入账"}],P={1:"到期本息转活期",2:"到期本息续存"},U=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],M={1:"未执行",2:"执行中",3:"已结束"},V=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],Y={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},R=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],H=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],K=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],Q=[{id:1,value:"还息"},{id:2,value:"还本"}],W={1:"固定利率",2:"浮动利率"},ee=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],te={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},ae=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],le=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]},a658:function(e,t,a){}}]);