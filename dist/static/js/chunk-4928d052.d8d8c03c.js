(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4928d052"],{"32cc":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[e._v("变更管理")])]),i("div",[i("Search",{attrs:{"search-data":e.searchData,"search-item":e.searchItem,"search-bto":e.searchBto,"show-all":e.showAll},on:{getDataList:e.getDataList,handleInsert:e.handleInsert,dropDown:e.dropDown,dropUp:e.dropUp,handleCommit:e.handleCommit}}),i("Table",{attrs:{"table-data":e.tableData,"table-list-data":e.tableListData,"table-btn":e.tableBtn,"current-data":e.currentData},on:{onPageChange:e.onPageChange,onSizeChange:e.onSizeChange,handleEdit:e.handleEdit,handleSelectionChange:e.handleSelectionChange,handleViewOther:e.handleViewOther,handleDelete:e.handleDelete}})],1)]),i("dialog-com",{attrs:{"dialog-obj":e.dialogObj},on:{addSub:e.addSub,updateSub:e.updateSub}})],1)},l=[],r=(i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("b64b"),i("d3b7"),i("25f0"),i("2532"),i("159b"),i("9247")),n=i("9b18"),o=i("b7c0"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"abow_dialog",attrs:{title:e.dialogObj.title,"append-to-body":"",visible:e.dialogObj.show,"close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(t){return e.$set(e.dialogObj,"show",t)}}},[e.dialogObj.show?i("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"140px","label-position":"left",rules:e.rules,disabled:e.dialogObj.read,"status-icon":"","inline-message":!0}},[i("div",{staticClass:"title"},[i("i",{staticClass:"el-icon-user"}),e._v(" 基本信息")]),i("div",{staticClass:"mb-10"}),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{staticClass:"formItem",attrs:{label:"单位编号：",prop:"dwbh"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:e.placeholderTips.content},model:{value:e.form.dwbh,callback:function(t){e.$set(e.form,"dwbh",t)},expression:"form.dwbh"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{staticClass:"formItem",attrs:{label:"单位名称：",prop:"dwmc"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:!0,placeholder:e.placeholderTips.content},model:{value:e.form.dwmc,callback:function(t){e.$set(e.form,"dwmc",t)},expression:"form.dwmc"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"账户编号：",prop:"zhbh"}},[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:e.zhbhChange},model:{value:e.form.zhbh,callback:function(t){e.$set(e.form,"zhbh",t)},expression:"form.zhbh"}},e._l(e.zhbhList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.zhbh,value:e.zhbh}})})),1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"账户名称：",prop:"zhmc"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:""!=e.dialogObj.id,placeholder:e.placeholderTips.content},model:{value:e.form.zhmc,callback:function(t){e.$set(e.form,"zhmc",t)},expression:"form.zhmc"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"账户类型：",prop:"zhlx"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:""!=e.dialogObj.id,placeholder:e.placeholderTips.content},model:{value:e.form.zhlx,callback:function(t){e.$set(e.form,"zhlx",t)},expression:"form.zhlx"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"开户日期：",prop:"khrq"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",disabled:""!=e.dialogObj.id,placeholder:e.placeholderTips.content},model:{value:e.form.khrq,callback:function(t){e.$set(e.form,"khrq",t)},expression:"form.khrq"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"币种：",prop:"bz"}},[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择币种",size:"mini"},model:{value:e.form.bz,callback:function(t){e.$set(e.form,"bz",t)},expression:"form.bz"}},e._l(e.currencyList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"计息：",prop:"jx"}},[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.jx,callback:function(t){e.$set(e.form,"jx",t)},expression:"form.jx"}},e._l(e.scorllList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1)],1),i("div",{staticClass:"title"},[i("i",{staticClass:"el-icon-user"}),e._v(" 附加信息")]),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"变更说明：",prop:"bgsm"}},[i("el-input",{staticStyle:{width:"83%"},attrs:{type:"textarea",rows:3,size:"mini",maxlength:"50","show-word-limit":"",placeholder:e.placeholderTips.content},model:{value:e.form.bgsm,callback:function(t){e.$set(e.form,"bgsm",t)},expression:"form.bgsm"}})],1)],1)],1),i("el-row",[i("el-col",[i("el-form-item",{attrs:{label:"备注：",prop:"bzhu"}},[i("el-input",{staticStyle:{width:"83%"},attrs:{type:"textarea",rows:3,size:"mini",maxlength:"50","show-word-limit":"",placeholder:e.placeholderTips.content},model:{value:e.form.bzhu,callback:function(t){e.$set(e.form,"bzhu",t)},expression:"form.bzhu"}})],1)],1)],1)],1):e._e(),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogObj.show=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.sub}},[e._v("确 定")])],1)],1)},s=[],u=i("61f7"),c={components:{},props:["dialogObj"],data:function(){return{placeholderTips:u["b"],currencyList:r["i"],scorllList:r["T"],zhbhList:[{dwbh:"0813",dwmc:"0813001",zhbh:"08131003",zhmc:"123",zhlx:1,khrq:"2020-10-10"},{dwbh:"123",dwmc:"123",zhbh:"123",zhmc:"123",zhlx:1,khrq:"2020-10-10"}],rules:{bgsm:[{required:!0,message:"请填写单据编号",trigger:"blur"}],dwbh:[{required:!0,message:"请填写单据编号",trigger:"blur"}],dwmc:[{required:!0,message:"请填写单位名称",trigger:"blur"}],zhbh:[{required:!0,message:"请填写账户编号",trigger:"blur"}],zhmc:[{required:!0,message:"请填写账户名称",trigger:"blur"}],zhlx:[{required:!0,message:"请填写账户类型",trigger:"blur"}],khrq:[{required:!0,message:"请填写开户日期",trigger:"blur"}],bz:[{required:!0,message:"请选择币种",trigger:"blur"}],jx:[{required:!0,message:"请选择jix",trigger:"blur"}],csje:[{required:!0,message:"请填写初始金额",trigger:"blur"}]},form:{dwbh:"",dwmc:"",zhbh:"",zhmc:"",zhlx:"",khrq:"",bz:"",jx:"",csye:"",bzhu:"",sqdzt:"",bgsm:""}}},computed:{},watch:{"dialogObj.show":function(e){e&&this.initDialog()}},created:function(){},mounted:function(){},methods:{zhbhChange:function(e){var t=this;this.zhbhList.forEach((function(i,a){i.zhbh==e&&(t.form.dwmc=i.dwmc,t.form.zhbh=i.zhbh,t.form.dwbh=i.dwbh,t.form.zhmc=i.zhmc,t.form.zhlx=i.zhlx,t.form.khrq=i.khrq)}))},initDialog:function(){var e=this;this.dialogObj.id?Object.keys(this.form).forEach((function(t){e.form[t]=e.dialogObj.form[t]})):Object.keys(this.form).forEach((function(t){e.form[t]=""}))},sub:function(){var e=this;this.$refs["form"].validate((function(t){t&&(e.dialogObj.id?e.updateSub():(e.form.sqdzt=1,e.addSub()))}))},updateSub:function(){this.$emit("updateSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1},addSub:function(){this.$emit("addSub",JSON.parse(JSON.stringify(this.form))),this.dialogObj.show=!1}}},h=c,b=(i("348f"),i("2877")),f=Object(b["a"])(h,d,s,!1,null,"250b2267",null),m=f.exports,p={components:{Search:n["a"],Table:o["a"],dialogCom:m},data:function(){return{formStatusList:r["w"],currencyList:r["i"],showAll:1,unitNoList:r["Z"],currentData:{currentPage:1,size:10,total:10},searchBto:[],dialogObj:{id:"",title:"",read:!1,show:!1,form:{}},list:[{zhbh:"0813001",dwmc:"0813001",zhmc:"123",khrq:"2020-10-10",zhlx:"活期户",bz:1,jxksr:"",sqdzt:1,bzhu:"二级单位1内部账户"}],tableData:[],tableBtn:[],searchItem:[],searchData:{nickname:"",documentNumber:""},selectChangeList:[]}},computed:{},watch:{},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.searchBto=[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"},{prop:"commit",type:"primary",label:"提交"},{prop:"reset",type:"",label:"重置"}],this.searchItem=[{type:"input",label:"单位编号:",prop:"dwbh",placeholder:"请选择单位编号"},{type:"select",label:"申请单状态:",prop:"sqdzt",placeholder:"请选择申请单状态",selectList:this.formStatusList},{type:"select",label:"币种:",prop:"bz",placeholder:"请选择币种",selectList:this.currencyList},{type:"checkbox",label:"包含下级业务单位:",prop:"xjywdw"}],this.tableListData=[{width:"50",label:"",type:"index",fixed:"left"},{width:"50",label:"",type:"selection",fixed:"left"},{prop:"zhbh",width:"150",label:"账号编号",type:"a"},{prop:"dwmc",width:"150",label:"单位名称"},{prop:"zhmc",width:"",label:"账户名称"},{prop:"khrq",width:"",label:"开户日期"},{prop:"zhlx",width:"",label:"账户类型"},{prop:"bz",width:"",label:"币种",type:"wordbook",wordbookList:this.currency},{prop:"jxksr",width:"",label:"计息开始日"},{prop:"sqdzt",width:"",label:"申请单状态",type:"wordbook",wordbookList:this.formStatus},{prop:"bzhu",width:"",label:"备注"},{label:"操作",type:"btn",width:"",fixed:"right"}],this.tableBtn=[{name:"修 改",btnType:"primary",type:"isNoShow",isShowStatus:"sqdzt",isShowValue:"2",handleFn:"handleEdit"},{name:"删 除",btnType:"danger",type:"isNoShow",isShowStatus:"sqdzt",isShowValue:"2",handleFn:"handleDelete"}]},mounted:function(){},methods:{handleCommit:function(){var e=this;0!=this.selectChangeList.length?this.selectChangeList.forEach((function(t,i){e.list.forEach((function(e,i){e.zhbh==t.zhbh&&(e.sqdzt=2)}))})):this.$message({message:"请选择数据再进行提交操作！",type:"warning"})},handleSelectionChange:function(e){this.selectChangeList=e},currency:function(e){return r["h"][e]},formStatus:function(e){return r["v"][e]},updateSub:function(e){var t=0;this.tableData.forEach((function(i,a){i.documentNumber==e.documentNumber&&(t=a)})),console.log(t);var i=this.tableData[t];Object.keys(i).forEach((function(t){e[t]&&(i[t]=e[t])})),this.tableData[t]=i,this.list[t]=i},addSub:function(e){console.log(e),this.list.push(e),this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length},dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!0)}))},handleInsert:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="新增"},getDataList:function(e){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=e,this.getList()},onPageChange:function(e){var t=e*this.currentData.size,i=(e-1)*this.currentData.size;this.tableData=this.list.slice(i,t),this.currentData.currentPage=e},onSizeChange:function(e){this.currentData.size=e,this.currentData.currentPage=1,this.getList()},handleDelete:function(e){var t=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.list.splice(t.list.indexOf(e),1),t.tableData=t.list,t.currentData.total=t.list.length}))},handleEdit:function(e){this.dialogObj.id=e.zhbh,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑",this.dialogObj.form=e},handleViewOther:function(e){this.dialogObj.id=e.zhbh,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看",this.dialogObj.form=e},getList:function(){var e=this,t=[],i=this,a=JSON.parse(JSON.stringify(this.list));a.forEach((function(i,a){var l=!0;for(var r in e.searchData)""!=e.searchData[r]&&void 0!=e.searchData[r]&&("dwbh"==r&&(l=!!i.dwbh.includes(e.searchData[r])),"sqdzt"==r&&(l=!!i.sqdzt.toString().includes(e.searchData[r])),"bz"==r&&(l=!!i.bz.toString().includes(e.searchData[r])));1==l&&t.push(i)})),i.tableData=t}}},v=p,g=Object(b["a"])(v,a,l,!1,null,"7da197b6",null);t["default"]=g.exports},"348f":function(e,t,i){"use strict";i("e5fc")},9247:function(e,t,i){"use strict";i.d(t,"Y",(function(){return r})),i.d(t,"Z",(function(){return n})),i.d(t,"e",(function(){return o})),i.d(t,"f",(function(){return d})),i.d(t,"h",(function(){return s})),i.d(t,"i",(function(){return u})),i.d(t,"m",(function(){return c})),i.d(t,"n",(function(){return h})),i.d(t,"cb",(function(){return b})),i.d(t,"c",(function(){return f})),i.d(t,"d",(function(){return m})),i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return v})),i.d(t,"L",(function(){return g})),i.d(t,"G",(function(){return w})),i.d(t,"H",(function(){return z})),i.d(t,"M",(function(){return x})),i.d(t,"K",(function(){return y})),i.d(t,"T",(function(){return j})),i.d(t,"j",(function(){return O})),i.d(t,"g",(function(){return S})),i.d(t,"W",(function(){return D})),i.d(t,"X",(function(){return k})),i.d(t,"ab",(function(){return q})),i.d(t,"bb",(function(){return C})),i.d(t,"U",(function(){return L})),i.d(t,"V",(function(){return $})),i.d(t,"N",(function(){return E})),i.d(t,"O",(function(){return T})),i.d(t,"v",(function(){return _})),i.d(t,"w",(function(){return N})),i.d(t,"k",(function(){return I})),i.d(t,"l",(function(){return B})),i.d(t,"I",(function(){return J})),i.d(t,"J",(function(){return P})),i.d(t,"y",(function(){return V})),i.d(t,"z",(function(){return A})),i.d(t,"R",(function(){return U})),i.d(t,"S",(function(){return F})),i.d(t,"P",(function(){return Z})),i.d(t,"Q",(function(){return G})),i.d(t,"r",(function(){return H})),i.d(t,"s",(function(){return K})),i.d(t,"C",(function(){return M})),i.d(t,"D",(function(){return Q})),i.d(t,"o",(function(){return R})),i.d(t,"p",(function(){return W})),i.d(t,"x",(function(){return X})),i.d(t,"A",(function(){return Y})),i.d(t,"B",(function(){return ee})),i.d(t,"E",(function(){return te})),i.d(t,"F",(function(){return ie})),i.d(t,"t",(function(){return ae})),i.d(t,"u",(function(){return le})),i.d(t,"q",(function(){return re}));var a,l=i("ade3"),r={1324:"单位1",546:"单位2",13265:"单位3"},n=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],o={1:"北京银行",2:"工商银行",3:"中国银行"},d=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],s={1:"人民币",2:"美元",3:"日元"},u=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],c={1:"直联",2:"非直联"},h=[{id:1,value:"直联"},{id:2,value:"非直联"}],b=[{id:1,value:"对公账户"},{id:2,value:"对私账户"}],f={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},m=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],p={1:"正常",2:"销户"},v=[{id:1,value:"正常"},{id:2,value:"销户"}],g=[{id:1,value:"摘要"},{id:2,value:"本方账号"},{id:3,value:"本方账户"},{id:4,value:"对方账号"},{id:5,value:"对方账户"}],w={1:"借",2:"贷"},z=[{id:1,value:"借"},{id:2,value:"贷"}],x=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],y=[{id:1,value:"非直联支付"}],j=[{id:1,value:"是"},{id:2,value:"否"}],O=(a={1:"年",2:"季"},Object(l["a"])(a,"2","月"),Object(l["a"])(a,"2","周"),Object(l["a"])(a,"2","日"),[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}]),S=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],D={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},k=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],q={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},C=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],L={1:"资金上划"},$=[{id:1,value:"资金上划"}],E={1:"存款",2:"贷款",3:"活期"},T=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],_={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},N=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],I={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},B=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],J={1:"360天",2:"365天"},P=[{id:1,value:"360天"},{id:2,value:"365天"}],V={1:"启用",2:"停用"},A=[{id:1,value:"启用"},{id:2,value:"停用"}],U={1:"待定",2:"未认领",3:"已认领"},F=[{id:1,value:"待定"},{id:2,value:"未认领"},{id:3,value:"已认领"}],Z={1:"线下入账",2:"非线下入账"},G=[{id:1,value:"线下入账"},{id:2,value:"非线下入账"}],H={1:"到期本息转活期",2:"到期本息续存"},K=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],M={1:"未执行",2:"执行中",3:"已结束"},Q=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],R={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},W=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],X=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],Y=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],ee=[{id:1,value:"还息"},{id:2,value:"还本"}],te={1:"固定利率",2:"浮动利率"},ie=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],ae={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},le=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],re=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]},e5fc:function(e,t,i){}}]);