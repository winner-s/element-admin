(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5068d03c"],{"4aaa":function(t,e,a){"use strict";a("fb9f")},"80b0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("预算体系设置")])]),a("div",[a("Search",{attrs:{"search-data":t.searchData,"search-item":t.searchItem,"search-bto":t.searchBto,"show-all":t.showAll},on:{getDataList:t.getDataList,handleInsert:t.handleInsert,dropDown:t.dropDown,dropUp:t.dropUp}}),a("Table",{attrs:{"table-data":t.tableData,"table-list-data":t.tableListData,"table-btn":t.tableBtn,"current-data":t.currentData},on:{onPageChange:t.onPageChange,onSizeChange:t.onSizeChange,handleEdit:t.handleEdit,handleStatus:t.handleStatus,fzystx:t.fzystx,handleDelete:t.handleDelete}})],1)]),a("dialog-com",{attrs:{"dialog-obj":t.dialogObj},on:{addSub:t.addSub,updateSub:t.updateSub}})],1)},n=[],u=(a("4160"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("b64b"),a("2532"),a("159b"),a("ade3")),l=a("9247"),d=a("9b18"),r=a("b7c0"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"abow_dialog",attrs:{title:t.dialogObj.title,"append-to-body":"",visible:t.dialogObj.show,"close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){return t.$set(t.dialogObj,"show",e)}}},[t.dialogObj.show?a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"140px","label-position":"left",rules:t.rules,disabled:t.dialogObj.read,"status-icon":""}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"体系编号：",prop:"txbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.txbh,callback:function(e){t.$set(t.form,"txbh",e)},expression:"form.txbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"体系名称：",prop:"txmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:t.placeholderTips.content},model:{value:t.form.txmc,callback:function(e){t.$set(t.form,"txmc",e)},expression:"form.txmc"}})],1)],1)],1)],1):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogObj.show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("确 定")])],1)],1)},s=[],c=a("61f7"),h={components:{},props:["dialogObj"],data:function(){return{placeholderTips:c["b"],form:{txbh:"",txmc:"",txzt:"启用"},rules:{txmc:[{required:!0,message:"请填写单据编号",trigger:"blur"}]}}},computed:{},watch:{"dialogObj.show":function(t){t&&this.initDialog()}},created:function(){},mounted:function(){},methods:{initDialog:function(){for(var t=this,e="",a=0;a<16;a++)e+=Math.round(10*Math.random());this.dialogObj.id?Object.keys(this.form).forEach((function(e){t.form[e]=t.dialogObj.form[e]})):(Object.keys(this.form).forEach((function(e){return t.form[e]=""})),this.form.txbh=e,this.form.txzt="启用")},sub:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.dialogObj.id?t.updateSub():t.addSub())}))},updateSub:function(){this.$emit("updateSub",this.form),this.dialogObj.show=!1},addSub:function(){this.$emit("addSub",this.form),this.dialogObj.show=!1}}},f=h,v=(a("4aaa"),a("2877")),b=Object(v["a"])(f,o,s,!1,null,"9b98c4f8",null),p=b.exports,m={components:{Search:d["a"],Table:r["a"],dialogCom:p},data:function(){var t;return t={dialogObj:{id:"",title:"aaa",read:!1,show:!1,form:{}},showAll:1,unitNoList:l["Z"],currentData:{currentPage:1,size:10,total:10},searchBto:[]},Object(u["a"])(t,"dialogObj",{id:"",title:"",read:!1,show:!1,form:{}}),Object(u["a"])(t,"list",[{txbh:20082615093831,txmc:"福布斯排行榜",txzt:"启用"}]),Object(u["a"])(t,"tableData",[]),Object(u["a"])(t,"tableBtn",[]),Object(u["a"])(t,"searchItem",[]),Object(u["a"])(t,"searchData",{nickname:"",documentNumber:""}),t},computed:{},watch:{},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.searchBto=[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"},{prop:"reset",type:"",label:"重置"}],this.searchItem=[{type:"input",label:"预算体系编号:",prop:"unitNo",placeholder:"请填写预算体系编号",selectList:this.unitNoList},{type:"input",label:"预算体系名称:",prop:"unitName",placeholder:"请填写预算体系名称"},{type:"select",label:"预算体系状态:",prop:"bankName",placeholder:"请选择预算体系状态"}],this.tableListData=[{width:"50",label:"",type:"index"},{prop:"txbh",width:"150",label:"预算体系编号"},{prop:"txmc",width:"",label:"预算体系名称"},{prop:"txzt",width:"",label:"预算体系状态"},{label:"操作",type:"btn",width:"",fixed:"right"}],this.tableBtn=[{name:"编 辑",btnType:"primary",handleFn:"handleEdit"},{name:"删 除",btnType:"danger",handleFn:"handleDelete"},{name:"启 用",btnType:"danger",type:"isShow",isShowStatus:"txzt",isShowValue:"停用",handleFn:"handleStatus"},{name:"停 用",btnType:"danger",type:"isShow",isShowStatus:"txzt",isShowValue:"启用",handleFn:"handleStatus"},{name:"复制预算体系",btnType:"danger",handleFn:"fzystx"},{name:"编辑预算项目",btnType:"danger",handleFn:"handleDelete"}]},mounted:function(){},methods:{fzystx:function(t){var e=JSON.parse(JSON.stringify(t));e.txbh+=1,e.txmc="(复制)"+e.txmc,this.list.push(e),this.tableData.push(e)},updateSub:function(t){var e=0;this.tableData.forEach((function(a,i){a.documentNumber==t.documentNumber&&(e=i)})),console.log(e);var a=this.tableData[e];Object.keys(a).forEach((function(e){a[e]=t[e]})),this.tableData[e]=a,this.list[e]=a},addSub:function(t){this.list.push(t),this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length},dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!0)}))},handleInsert:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="新增"},getDataList:function(t){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=t,this.getList()},onPageChange:function(t){console.log(t);var e=t*this.currentData.size,a=(t-1)*this.currentData.size;this.tableData=this.list.slice(a,e),this.currentData.currentPage=t},onSizeChange:function(t){this.currentData.size=t,this.currentData.currentPage=1,this.getList()},handleDelete:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(),e.list.splice(e.list.indexOf(t),1),e.tableData=e.list,e.currentData.total=e.list.length}))},handleStatus:function(t){console.log(t),"启用"==t.txzt?this.$confirm("确定停用?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.txzt="停用"})):this.$confirm("确定启用?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.txzt="启用"}))},handleEdit:function(t){this.dialogObj.id=t.txbh,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑",this.dialogObj.form=JSON.parse(JSON.stringify(t))},getList:function(){var t=this;console.log(this.searchData);var e=[],a=this,i=JSON.parse(JSON.stringify(this.tableData));i.forEach((function(a,i){var n=!0;for(var u in t.searchData)""!=t.searchData[u]&&void 0!=t.searchData[u]&&("documentNumber"==u&&(n=!!a.documentNumber.includes(t.searchData[u])),"openApplicant"==u&&(n=!!a.openApplicant.includes(t.searchData[u])),"unitNo"==u&&(n=!!a.unitNo.includes(t.searchData[u])),"unitName"==u&&(n=!!a.unitName.includes(t.searchData[u])));1==n&&e.push(a)})),console.log(e),a.tableData=e}}},g=m,D=Object(v["a"])(g,i,n,!1,null,"57bd619e",null);e["default"]=D.exports},9247:function(t,e,a){"use strict";a.d(e,"Y",(function(){return u})),a.d(e,"Z",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"i",(function(){return s})),a.d(e,"m",(function(){return c})),a.d(e,"n",(function(){return h})),a.d(e,"cb",(function(){return f})),a.d(e,"c",(function(){return v})),a.d(e,"d",(function(){return b})),a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"L",(function(){return g})),a.d(e,"G",(function(){return D})),a.d(e,"H",(function(){return w})),a.d(e,"M",(function(){return x})),a.d(e,"K",(function(){return O})),a.d(e,"T",(function(){return j})),a.d(e,"j",(function(){return S})),a.d(e,"g",(function(){return y})),a.d(e,"W",(function(){return z})),a.d(e,"X",(function(){return N})),a.d(e,"ab",(function(){return T})),a.d(e,"bb",(function(){return k})),a.d(e,"U",(function(){return E})),a.d(e,"V",(function(){return B})),a.d(e,"N",(function(){return C})),a.d(e,"O",(function(){return L})),a.d(e,"v",(function(){return I})),a.d(e,"w",(function(){return $})),a.d(e,"k",(function(){return J})),a.d(e,"l",(function(){return _})),a.d(e,"I",(function(){return P})),a.d(e,"J",(function(){return A})),a.d(e,"y",(function(){return F})),a.d(e,"z",(function(){return U})),a.d(e,"R",(function(){return M})),a.d(e,"S",(function(){return V})),a.d(e,"P",(function(){return q})),a.d(e,"Q",(function(){return Z})),a.d(e,"r",(function(){return G})),a.d(e,"s",(function(){return H})),a.d(e,"C",(function(){return K})),a.d(e,"D",(function(){return Q})),a.d(e,"o",(function(){return R})),a.d(e,"p",(function(){return W})),a.d(e,"x",(function(){return X})),a.d(e,"A",(function(){return Y})),a.d(e,"B",(function(){return tt})),a.d(e,"E",(function(){return et})),a.d(e,"F",(function(){return at})),a.d(e,"t",(function(){return it})),a.d(e,"u",(function(){return nt})),a.d(e,"q",(function(){return ut}));var i,n=a("ade3"),u={1324:"单位1",546:"单位2",13265:"单位3"},l=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],d={1:"北京银行",2:"工商银行",3:"中国银行"},r=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],o={1:"人民币",2:"美元",3:"日元"},s=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],c={1:"直联",2:"非直联"},h=[{id:1,value:"直联"},{id:2,value:"非直联"}],f=[{id:1,value:"对公账户"},{id:2,value:"对私账户"}],v={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},b=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],p={1:"正常",2:"销户"},m=[{id:1,value:"正常"},{id:2,value:"销户"}],g=[{id:1,value:"摘要"},{id:2,value:"本方账号"},{id:3,value:"本方账户"},{id:4,value:"对方账号"},{id:5,value:"对方账户"}],D={1:"借",2:"贷"},w=[{id:1,value:"借"},{id:2,value:"贷"}],x=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],O=[{id:1,value:"非直联支付"}],j=[{id:1,value:"是"},{id:2,value:"否"}],S=(i={1:"年",2:"季"},Object(n["a"])(i,"2","月"),Object(n["a"])(i,"2","周"),Object(n["a"])(i,"2","日"),[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}]),y=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],z={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},N=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],T={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},k=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],E={1:"资金上划"},B=[{id:1,value:"资金上划"}],C={1:"存款",2:"贷款",3:"活期"},L=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],I={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},$=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],J={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},_=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],P={1:"360天",2:"365天"},A=[{id:1,value:"360天"},{id:2,value:"365天"}],F={1:"启用",2:"停用"},U=[{id:1,value:"启用"},{id:2,value:"停用"}],M={1:"待定",2:"未认领",3:"已认领"},V=[{id:1,value:"待定"},{id:2,value:"未认领"},{id:3,value:"已认领"}],q={1:"线下入账",2:"非线下入账"},Z=[{id:1,value:"线下入账"},{id:2,value:"非线下入账"}],G={1:"到期本息转活期",2:"到期本息续存"},H=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],K={1:"未执行",2:"执行中",3:"已结束"},Q=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],R={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},W=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],X=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],Y=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],tt=[{id:1,value:"还息"},{id:2,value:"还本"}],et={1:"固定利率",2:"浮动利率"},at=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],it={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},nt=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],ut=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]},fb9f:function(t,e,a){}}]);