(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b93c3"],{"31a0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"selectSendInfo"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("下拨信息查询")])]),a("div",[a("Search",{attrs:{"search-data":e.searchData,"search-item":e.searchItem,"search-bto":e.searchBto,"show-all":e.showAll},on:{getDataList:e.getDataList,dropDown:e.dropDown,dropUp:e.dropUp}}),a("Table",{attrs:{"table-data":e.tableData,"table-list-data":e.tableListData,"current-data":e.currentData},on:{onPageChange:e.onPageChange,onSizeChange:e.onSizeChange}})],1)])],1)},s=[],c=(a("4160"),a("caad"),a("fb6a"),a("b0c0"),a("2532"),a("159b"),a("9b18")),n=a("b7c0"),r={name:"SelectSendInfo",components:{Search:c["a"],Table:n["a"]},data:function(){return{searchItem:[],searchData:{},searchBto:[],showAll:!1,tableData:[],tableListData:[],list:[{id:1,receiptsNumber:"ZJGJ20071514295001",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20071514295001",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"},{id:2,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"},{id:3,receiptsNumber:"ZJGJ20071514295001",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20071514295001",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"},{id:4,receiptsNumber:"ZJGJ20071411395892",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20071411395892",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"},{id:5,receiptsNumber:"ZJGJ20071411395892",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20071411395892",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"},{id:6,receiptsNumber:"ZJGJ20072011081832",receiptsTime:"2020-08-21",money:"1,222",company:"二级单位1",status:"失败",number:"ZJGJ20072011081832",name:"412",paymentAccountNum:"2222334455667744",paymentAccountName:"工商银行",receiptAccountNum:"2222334455667744",receiptAccountName:"建设银行",acceptBank:"ABC",zlfssj:"2020-12-08",speed:"普通"}],tableBtn:[],currentData:{currentPage:1,size:10,total:0}}},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.getList(),this.searchItem=[{type:"select",label:"指令状态:",selectList:[{value:"撤销",id:"撤销"},{value:"保存",id:"保存"},{value:"已发送",id:"已发送"},{value:"成功",id:"成功"},{value:"失败",id:"失败"},{value:"未知",id:"未知"}],prop:"zlzt",placeholder:"请选择指令状态"},{type:"select",label:"指令接受银行:",selectList:[{value:"中国人民银行营业处",id:"中国人民银行营业处"},{value:"中国人民银行国库处",id:"中国人民银行国库处"},{value:"中国工商银行",id:"中国工商银行"},{value:"中国农业银行",id:"中国农业银行"},{value:"中国银行",id:"中国银行"},{value:"国家开发银行",id:"国家开发银行"}],prop:"zljsyh",placeholder:"请选择银行"},{type:"daterange",label:"指令发送时间:",timeList:["zlfssjks","zlfssjjs"],timeFormat:"yyyy-MM-dd",prop:"zlfssj",placeholder:"请选择日期"},{type:"select",label:"策略编号:",show:!1,selectList:[{value:"ZJGJ20072011081832",id:"ZJGJ20072011081832"},{value:"ZJGJ20071411395892",id:"ZJGJ20071411395892"},{value:"ZJGJ20071514295001",id:"ZJGJ20071514295001"}],prop:"clbh",placeholder:"请选择编号"},{type:"input",label:"策略名称:",show:!1,prop:"clmc",placeholder:"请输入策略编号名称"},{type:"select",label:"业务单位:",show:!1,selectList:[{value:"全部",id:0},{value:"二级单位1",id:1}],prop:"ywdw",placeholder:"请选择单位"},{type:"checkbox",show:!1,label:"包含下级业务单位:",prop:"ywdw"}],this.searchBto=[{prop:"select",type:"primary",label:"查询"}],this.tableListData=[{width:"50",label:"",type:"index"},{prop:"receiptsNumber",width:"150",label:"单据编号"},{prop:"receiptsTime",width:"150",label:"单据日期"},{prop:"money",width:"150",label:"金额"},{prop:"company",width:"150",label:"付款申请单位"},{prop:"status",width:"150",label:"指令状态"},{prop:"number",width:"150",label:"策略编号"},{prop:"name",width:"150",label:"策略名称"},{prop:"paymentAccountNum",width:"150",label:"付款银行帐号"},{prop:"paymentAccountName",width:"150",label:"付款账户名称"},{prop:"receiptAccountNum",width:"150",label:"收款银行帐号"},{prop:"receiptAccountName",width:"150",label:"收款账户名称帐号"},{prop:"acceptBank",width:"150",label:"指令接受银行"},{prop:"speed",width:"150",label:"汇款速度"}]},methods:{dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!0)}))},getDataList:function(e){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=e,this.getList()},onPageChange:function(e){var t=e*this.currentData.size,a=(e-1)*this.currentData.size;this.tableData=this.list.slice(a,t),this.currentData.currentPage=e},onSizeChange:function(e){this.currentData.size=e,this.currentData.currentPage=1,this.getList()},handleEdit:function(e){this.dialogObj.id=e.id,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑账号",this.dialogObj.form=e},handleViewOther:function(e){this.dialogObj.id=e.id,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看账号",this.dialogObj.form=e},handleStatus:function(e){},handleDelete:function(e){},getList:function(){var e=this;console.log(this.searchData);var t=[],a=this,i=JSON.parse(JSON.stringify(this.list));i.forEach((function(a,i){var s=!0;for(var c in e.searchData)if(""!==e.searchData[c]&&void 0!==e.searchData[c]){if("zlzt"===c){if(!a.status.includes(e.searchData[c]))return void(s=!1);s=!0}if("zljsyh"===c){if(!a.acceptBank.includes(e.searchData[c]))return void(s=!1);s=!0}if("zlfssjks"===c){if(!(Date.parse(a.zlfssj)>=Date.parse(e.searchData[c])))return void(s=!1);s=!0}if("zlfssjjs"===c){if(!(Date.parse(a.zlfssj)<=Date.parse(e.searchData[c])))return void(s=!1);s=!0}if("clbh"===c){if(!a.number.includes(e.searchData[c]))return void(s=!1);s=!0}if("clmc"===c){if(!a.name.includes(e.searchData[c]))return void(s=!1);s=!0}if("ywdw"===c){if(!a.company.includes(e.searchData[c]))return void(s=!1);s=!0}}!0===s&&t.push(a)})),console.log(t),a.tableData=t}}},l=r,o=a("2877"),p=Object(o["a"])(l,i,s,!1,null,null,null);t["default"]=p.exports}}]);