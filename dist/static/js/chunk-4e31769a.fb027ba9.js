(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e31769a"],{4927:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("调剂项目配置")])]),a("div",[a("Search",{attrs:{"search-data":t.searchData,"search-item":t.searchItem,"search-bto":t.searchBto,"show-all":t.showAll},on:{getDataList:t.getDataList,handleInsert:t.handleInsert,dropDown:t.dropDown,dropUp:t.dropUp}}),a("Table",{attrs:{"table-data":t.tableData,"table-list-data":t.tableListData,"table-btn":t.tableBtn,"current-data":t.currentData},on:{onPageChange:t.onPageChange,onSizeChange:t.onSizeChange,handleEdit:t.handleEdit,handleSelect:t.handleSelect,handleDelete:t.handleDelete}})],1)]),a("dialog-com",{attrs:{"dialog-obj":t.dialogObj},on:{addSub:t.addSub,updateSub:t.updateSub}})],1)},l=[],n=(a("4160"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("b64b"),a("2532"),a("159b"),a("ade3")),r=a("9247"),u=a("9b18"),o=a("b7c0"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"abow_dialog",attrs:{title:t.dialogObj.title,"append-to-body":"",visible:t.dialogObj.show,"close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){return t.$set(t.dialogObj,"show",e)}}},[t.dialogObj.show?a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"140px","label-position":"left",rules:t.rules,disabled:t.dialogObj.read,"status-icon":""}},[a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-user"}),t._v(" 基本信息")]),a("div",{staticClass:"mb-10"}),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"调剂类型编号：",prop:"tjlxbh"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:t.placeholderTips.content},model:{value:t.form.tjlxbh,callback:function(e){t.$set(t.form,"tjlxbh",e)},expression:"form.tjlxbh"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"formItem",attrs:{label:"调剂类型名称：",prop:"tjlxmc"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:""!=t.dialogObj.id,placeholder:t.placeholderTips.content},model:{value:t.form.tjlxmc,callback:function(e){t.$set(t.form,"tjlxmc",e)},expression:"form.tjlxmc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"体系名称：",prop:"txmc"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:t.form.txmc,callback:function(e){t.$set(t.form,"txmc",e)},expression:"form.txmc"}},t._l(t.txmcList,(function(t){return a("el-option",{key:t.txmc,attrs:{label:t.txmc,value:t.txmc}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"周期名称：",prop:"zqmc"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:t.form.zqmc,callback:function(e){t.$set(t.form,"zqmc",e)},expression:"form.zqmc"}},t._l(t.zqmcList,(function(t){return a("el-option",{key:t.zqmc,attrs:{label:t.zqmc,value:t.zqmc}})})),1)],1)],1)],1)],1):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogObj.show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sub}},[t._v("确 定")])],1)],1)},s=[],c=a("61f7"),h={components:{},props:["dialogObj"],data:function(){return{placeholderTips:c["b"],form:{tjlxbh:"",tjlxmc:"",txmc:"",zqmc:""},zqmcList:[{zqbh:"2020027",zqmc:"名称1",zqlx:"月"},{zqbh:"2020063",zqmc:"名称2",zqlx:"月"}],txmcList:[{txbh:"2020098",txmc:"20201体系"},{txbh:"2020001",txmc:"20202体系"}],rules:{tjlxbh:[{required:!0,message:"请输入调剂类型编号",trigger:"blur"}],tjlxmc:[{required:!0,message:"请输入调剂类型名称",trigger:"blur"}],txmc:[{required:!0,message:"请选择体系名称",trigger:"blur"}],zqmc:[{required:!0,message:"请选择周期名称",trigger:"blur"}]}}},computed:{},watch:{"dialogObj.show":function(t){t&&this.initDialog()}},created:function(){},mounted:function(){},methods:{initDialog:function(){var t=this;if(this.dialogObj.id)Object.keys(this.form).forEach((function(e){t.form[e]=t.dialogObj.form[e]}));else{for(var e="",a=0;a<16;a++)e+=Math.round(10*Math.random());Object.keys(this.form).forEach((function(e){t.form[e]=""})),this.form.tjlxbh=e}},sub:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.dialogObj.id?t.updateSub():t.addSub())}))},updateSub:function(){this.$emit("updateSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1},addSub:function(){console.log(this.form),this.$emit("addSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1}}},f=h,b=(a("eb19"),a("2877")),v=Object(b["a"])(f,d,s,!1,null,"7ad8d1b2",null),m=v.exports,p={components:{Search:u["a"],Table:o["a"],dialogCom:m},data:function(){var t;return t={dialogObj:{id:"",title:"aaa",read:!1,show:!1,form:{}},showAll:1,unitNoList:r["Q"],currentData:{currentPage:1,size:10,total:10},searchBto:[]},Object(n["a"])(t,"dialogObj",{id:"",title:"",read:!1,show:!1,form:{}}),Object(n["a"])(t,"list",[{tjlxbh:"201105101710",tjlxmc:"text",txmc:"777",zqmc:"年"}]),Object(n["a"])(t,"tableData",[]),Object(n["a"])(t,"tableBtn",[]),Object(n["a"])(t,"searchItem",[]),Object(n["a"])(t,"searchData",{nickname:"",documentNumber:""}),t},computed:{},watch:{},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.searchBto=[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"},{prop:"reset",type:"",label:"重置"}],this.searchItem=[{type:"input",label:"体系名称:",prop:"unitNo",placeholder:"请填写体系名称",selectList:this.unitNoList},{type:"select",label:"周期名称:",prop:"unitName",placeholder:"请选择周期名称"}],this.tableListData=[{width:"50",label:"",type:"index"},{prop:"tjlxbh",width:"150",label:"调剂类型编号"},{prop:"tjlxmc",width:"",label:"调剂类型名称"},{prop:"txmc",width:"",label:"体系名称"},{prop:"zqmc",width:"",label:"周期名称"},{label:"操作",type:"btn",width:"",fixed:"right"}],this.tableBtn=[{name:"修 改",btnType:"primary",handleFn:"handleEdit"},{name:"查 看",btnType:"primary",handleFn:"handleSelect"},{name:"删 除",btnType:"danger",handleFn:"handleDelete"}]},mounted:function(){},methods:{updateSub:function(t){var e=0;this.tableData.forEach((function(a,i){a.tjlxbh==t.tjlxbh&&(e=i)})),console.log(e);var a=this.tableData[e];Object.keys(a).forEach((function(e){a[e]=t[e]})),this.tableData[e]=a,this.list[e]=a},addSub:function(t){this.list.push(t),this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length},dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(t,e){void 0!==t.show&&(t.show=!0)}))},handleInsert:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="新增"},getDataList:function(t){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=t,this.getList()},onPageChange:function(t){console.log(t);var e=t*this.currentData.size,a=(t-1)*this.currentData.size;this.tableData=this.list.slice(a,e),this.currentData.currentPage=t},onSizeChange:function(t){this.currentData.size=t,this.currentData.currentPage=1,this.getList()},handleDelete:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(),e.list.splice(e.list.indexOf(t),1),e.tableData=e.list,e.currentData.total=e.list.length}))},handleSelect:function(t){this.dialogObj.id=t.tjlxbh,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看",this.dialogObj.form=JSON.parse(JSON.stringify(t))},handleEdit:function(t){this.dialogObj.id=t.tjlxbh,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑",this.dialogObj.form=JSON.parse(JSON.stringify(t))},getList:function(){var t=this;console.log(this.searchData);var e=[],a=this,i=JSON.parse(JSON.stringify(this.tableData));i.forEach((function(a,i){var l=!0;for(var n in t.searchData)""!=t.searchData[n]&&void 0!=t.searchData[n]&&("documentNumber"==n&&(l=!!a.documentNumber.includes(t.searchData[n])),"openApplicant"==n&&(l=!!a.openApplicant.includes(t.searchData[n])),"unitNo"==n&&(l=!!a.unitNo.includes(t.searchData[n])),"unitName"==n&&(l=!!a.unitName.includes(t.searchData[n])));1==l&&e.push(a)})),console.log(e),a.tableData=e}}},g=p,j=Object(b["a"])(g,i,l,!1,null,"0f2dec4b",null);e["default"]=j.exports},9247:function(t,e,a){"use strict";a.d(e,"P",(function(){return n})),a.d(e,"Q",(function(){return r})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return o})),a.d(e,"h",(function(){return d})),a.d(e,"i",(function(){return s})),a.d(e,"m",(function(){return c})),a.d(e,"n",(function(){return h})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return b})),a.d(e,"a",(function(){return v})),a.d(e,"b",(function(){return m})),a.d(e,"H",(function(){return p})),a.d(e,"G",(function(){return g})),a.d(e,"K",(function(){return j})),a.d(e,"j",(function(){return x})),a.d(e,"g",(function(){return O})),a.d(e,"N",(function(){return D})),a.d(e,"O",(function(){return w})),a.d(e,"R",(function(){return S})),a.d(e,"S",(function(){return z})),a.d(e,"L",(function(){return y})),a.d(e,"M",(function(){return q})),a.d(e,"I",(function(){return N})),a.d(e,"J",(function(){return k})),a.d(e,"v",(function(){return C})),a.d(e,"w",(function(){return L})),a.d(e,"k",(function(){return E})),a.d(e,"l",(function(){return J})),a.d(e,"E",(function(){return _})),a.d(e,"F",(function(){return I})),a.d(e,"r",(function(){return $})),a.d(e,"s",(function(){return T})),a.d(e,"A",(function(){return B})),a.d(e,"B",(function(){return P})),a.d(e,"o",(function(){return A})),a.d(e,"p",(function(){return F})),a.d(e,"x",(function(){return M})),a.d(e,"y",(function(){return U})),a.d(e,"z",(function(){return Q})),a.d(e,"C",(function(){return G})),a.d(e,"D",(function(){return H})),a.d(e,"t",(function(){return K})),a.d(e,"u",(function(){return R})),a.d(e,"q",(function(){return V}));var i,l=a("ade3"),n={1324:"单位1",546:"单位2",13265:"单位3"},r=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],u={1:"北京银行",2:"工商银行",3:"中国银行"},o=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],d={1:"人民币",2:"美元",3:"日元"},s=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],c={1:"直联",2:"非直联"},h=[{id:1,value:"直联"},{id:2,value:"非直联"}],f={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},b=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],v={1:"正常",2:"销户"},m=[{id:1,value:"正常"},{id:2,value:"销户"}],p=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],g=[{id:1,value:"非直联支付"}],j=[{id:1,value:"是"},{id:2,value:"否"}],x=(i={1:"年",2:"季"},Object(l["a"])(i,"2","月"),Object(l["a"])(i,"2","周"),Object(l["a"])(i,"2","日"),[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}]),O=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],D={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},w=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],S={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},z=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],y={1:"资金上划"},q=[{id:1,value:"资金上划"}],N={1:"存款",2:"贷款",3:"活期"},k=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],C={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},L=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],E={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},J=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],_={1:"360天",2:"365天"},I=[{id:1,value:"360天"},{id:2,value:"365天"}],$={1:"到期本息转活期",2:"到期本息续存"},T=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],B={1:"未执行",2:"执行中",3:"已结束"},P=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],A={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},F=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],M=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],U=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],Q=[{id:1,value:"还息"},{id:2,value:"还本"}],G={1:"固定利率",2:"浮动利率"},H=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],K={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},R=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],V=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]},acf8:function(t,e,a){},eb19:function(t,e,a){"use strict";a("acf8")}}]);