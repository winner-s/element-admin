(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f18e1ac"],{"7d8d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v("收款人信息维护")])]),a("div",[a("Search",{attrs:{"search-data":e.searchData,"search-item":e.searchItem,"search-bto":e.searchBto,"show-all":e.showAll},on:{getDataList:e.getDataList,handleInsert:e.handleInsert,dropDown:e.dropDown,dropUp:e.dropUp}}),a("Table",{attrs:{"table-data":e.tableData,"table-list-data":e.tableListData,"table-btn":e.tableBtn,"current-data":e.currentData},on:{onPageChange:e.onPageChange,onSizeChange:e.onSizeChange,handleEdit:e.handleEdit,handleStatus:e.handleStatus,handleViewOther:e.handleViewOther,handleDelete:e.handleDelete}})],1)])],1)},l=[],n=(a("4160"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("2532"),a("159b"),a("9247")),d=a("9b18"),u=a("b7c0"),r={components:{Search:d["a"],Table:u["a"]},data:function(){return{showAll:!1,unitNoList:n["Q"],currentData:{currentPage:1,size:10,total:10},searchBto:[],dialogObj:{id:"",title:"",read:!1,show:!1,form:{}},list:[],tableData:[],tableBtn:[],searchItem:[],searchData:{nickname:"",documentNumber:""}}},computed:{},watch:{},created:function(){this.tableData=this.list.slice(0,this.currentData.size),this.currentData.total=this.list.length,this.searchBto=[{prop:"select",type:"primary",label:"查询"},{prop:"insert",type:"primary",label:"新增"},{prop:"commit",type:"primary",label:"提交"},{prop:"reset",type:"",label:"重置"}],this.searchItem=[{type:"input",label:"存款开立流水号:",prop:"ckkllsh",placeholder:"请填写存款开立流水号"},{type:"input",label:"存款期限:",prop:"ckqx",placeholder:"请选择存款期限"},{type:"select",label:"存款单位编号:",prop:"ckdwbh",placeholder:"请选择存款单位编号"},{type:"input",label:"存款单位名称:",prop:"ckdwmc",placeholder:"请填写存款单位名称"},{type:"time",label:"存款开立日期 从:",prop:"ckklrqks",placeholder:"请选择存款开立日期",show:this.showAll},{type:"time",label:"到:",prop:"ckklrqjs",placeholder:"请选择存款开立日期",show:this.showAll},{type:"select",label:"存款利率转换天数:",prop:"ckllzhts",placeholder:"请选择存款利率转换天数",show:this.showAll},{type:"select",label:"到期续存方式:",prop:"dqxcfs",placeholder:"请填写到期续存方式",show:this.showAll}],this.tableListData=[{width:"50",label:"",type:"index",fixed:"left"},{width:"50",label:"",type:"selection",fixed:"left"},{prop:"ckkllsh",width:"150",label:"存款开立流水号"},{prop:"ckzt",width:"150",label:"存款状态"},{prop:"ckdwmc",width:"",label:"存款单位名称"},{prop:"ckje",width:"",label:"存款金额"},{prop:"ckklrq",width:"",label:"存款开立日期"},{prop:"nbzh",width:"",label:"内部账号 "},{prop:"zt",width:"",label:"状态"},{prop:"ckqx",width:"",label:"存款期限"},{prop:"llzhts",width:"",label:"利率转换天数"},{prop:"dqxcfs",width:"",label:"到期续存方式"},{label:"操作",type:"btn",width:"",fixed:"right"}],this.tableBtn=[{name:"编 辑",btnType:"primary",handleFn:"handleEdit"},{name:"删 除",btnType:"danger",handleFn:"handleDelete"}]},mounted:function(){},methods:{dropUp:function(){this.showAll=!1,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!1)}))},dropDown:function(){this.showAll=!0,this.searchItem.forEach((function(e,t){void 0!==e.show&&(e.show=!0)}))},handleInsert:function(){},add:function(){this.dialogObj.id="",this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="添加账号"},getDataList:function(e){this.currentData.size=10,this.currentData.currentPage=1,this.searchData=e,this.getList()},onPageChange:function(e){this.currentData.currentPage=e,this.getList()},onSizeChange:function(e){this.currentData.size=e,this.currentData.currentPage=1,this.getList()},handleDelete:function(e){var t=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(),t.list.splice(t.list.indexOf(e),1),t.tableData=t.list,t.currentData.total=t.list.length}))},handleEdit:function(e){this.dialogObj.id=e.id,this.dialogObj.read=!1,this.dialogObj.show=!0,this.dialogObj.title="编辑账号",this.dialogObj.form=e},handleViewOther:function(e){this.dialogObj.id=e.id,this.dialogObj.read=!0,this.dialogObj.show=!0,this.dialogObj.title="查看账号",this.dialogObj.form=e},getList:function(){var e=this;console.log(this.searchData);var t=[],a=this;this.tableDataTwo.forEach((function(a,i){var l=!0;for(var n in e.searchData)""!=e.searchData[n]&&void 0!=e.searchData[n]&&("documentNumber"==n&&(l=!!a.documentNumber.includes(e.searchData[n])),"openApplicant"==n&&(l=!!a.openApplicant.includes(e.searchData[n])),"unitNo"==n&&(l=!!a.unitNo.includes(e.searchData[n])),"unitName"==n&&(l=!!a.unitName.includes(e.searchData[n])));1==l&&t.push(a)})),console.log(t),a.tableData=t}}},o=r,c=a("2877"),h=Object(c["a"])(o,i,l,!1,null,"db0c91be",null);t["default"]=h.exports},9247:function(e,t,a){"use strict";a.d(t,"P",(function(){return n})),a.d(t,"Q",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"i",(function(){return c})),a.d(t,"m",(function(){return h})),a.d(t,"n",(function(){return s})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"H",(function(){return w})),a.d(t,"G",(function(){return g})),a.d(t,"K",(function(){return D})),a.d(t,"j",(function(){return m})),a.d(t,"g",(function(){return k})),a.d(t,"N",(function(){return O})),a.d(t,"O",(function(){return y})),a.d(t,"R",(function(){return j})),a.d(t,"S",(function(){return x})),a.d(t,"L",(function(){return z})),a.d(t,"M",(function(){return A})),a.d(t,"I",(function(){return L})),a.d(t,"J",(function(){return B})),a.d(t,"v",(function(){return E})),a.d(t,"w",(function(){return I})),a.d(t,"k",(function(){return N})),a.d(t,"l",(function(){return q})),a.d(t,"E",(function(){return P})),a.d(t,"F",(function(){return S})),a.d(t,"r",(function(){return C})),a.d(t,"s",(function(){return T})),a.d(t,"A",(function(){return F})),a.d(t,"B",(function(){return J})),a.d(t,"o",(function(){return U})),a.d(t,"p",(function(){return V})),a.d(t,"x",(function(){return _})),a.d(t,"y",(function(){return Q})),a.d(t,"z",(function(){return $})),a.d(t,"C",(function(){return G})),a.d(t,"D",(function(){return H})),a.d(t,"t",(function(){return K})),a.d(t,"u",(function(){return M})),a.d(t,"q",(function(){return R}));var i,l=a("ade3"),n={1324:"单位1",546:"单位2",13265:"单位3"},d=[{id:1324,value:"单位1"},{id:546,value:"单位2"},{id:13265,value:"单位3"}],u={1:"北京银行",2:"工商银行",3:"中国银行"},r=[{id:1,value:"北京银行"},{id:2,value:"工商银行"},{id:3,value:"中国银行"}],o={1:"人民币",2:"美元",3:"日元"},c=[{id:1,value:"人民币"},{id:2,value:"美元"},{id:3,value:"日元"}],h={1:"直联",2:"非直联"},s=[{id:1,value:"直联"},{id:2,value:"非直联"}],v={1:"基本存款户-收支户",2:"一般存款户-收支户",3:"临时存款户-收支户",4:"专业存款户-收支户"},p=[{id:1,value:"基本存款户-收支户"},{id:2,value:"一般存款户-收支户"},{id:3,value:"临时存款户-收支户"},{id:4,value:"专业存款户-收支户"}],f={1:"正常",2:"销户"},b=[{id:1,value:"正常"},{id:2,value:"销户"}],w=[{id:1,value:"员工借款"},{id:2,value:"差旅报销"},{id:3,value:"差旅补助"}],g=[{id:1,value:"非直联支付"}],D=[{id:1,value:"是"},{id:2,value:"否"}],m=(i={1:"年",2:"季"},Object(l["a"])(i,"2","月"),Object(l["a"])(i,"2","周"),Object(l["a"])(i,"2","日"),[{id:1,value:"年"},{id:2,value:"季"},{id:3,value:"月"},{id:4,value:"周"},{id:5,value:"日"}]),k=[{id:1,value:"比例归集"},{id:2,value:"取整归集"},{id:3,value:"限额归集"},{id:4,value:"全额归集"},{id:5,value:"超限额全额归集"},{id:6,value:"自定义归集"}],O={1:"一级",2:"二级",3:"三级",4:"四级",5:"五级",6:"六级"},y=[{id:1,value:"一级"},{id:2,value:"二级"},{id:3,value:"三级"},{id:4,value:"四级"},{id:5,value:"五级"},{id:6,value:"六级"}],j={1:"国有企业",2:"私营企业",3:"中外合营企业",4:"外商投资企业",5:"单位类别"},x=[{id:1,value:"国有企业"},{id:2,value:"私营企业"},{id:3,value:"中外合营企业"},{id:4,value:"外商投资企业"},{id:5,value:"单位类别"}],z={1:"资金上划"},A=[{id:1,value:"资金上划"}],L={1:"存款",2:"贷款",3:"活期"},B=[{id:1,value:"存款"},{id:2,value:"贷款"},{id:3,value:"活期"}],E={1:"保存",2:"审批中",3:"审批拒绝",4:"审批通过",5:"退回"},I=[{id:1,value:"保存"},{id:2,value:"审批中"},{id:3,value:"审批拒绝"},{id:4,value:"审批通过"},{id:5,value:"退回"}],N={1:"3个月定期",2:"6个月定期",3:"1年定期",4:"2年定期",5:"3年定期",6:"5年定期"},q=[{id:1,value:"3个月定期"},{id:2,value:"6个月定期"},{id:3,value:"1年定期"},{id:4,value:"2年定期"},{id:5,value:"3年定期"},{id:6,value:"5年定期"}],P={1:"360天",2:"365天"},S=[{id:1,value:"360天"},{id:2,value:"365天"}],C={1:"到期本息转活期",2:"到期本息续存"},T=[{id:1,value:"到期本息转活期"},{id:2,value:"到期本息续存"}],F={1:"未执行",2:"执行中",3:"已结束"},J=[{id:1,value:"未执行"},{id:2,value:"执行中"},{id:3,value:"已结束"}],U={1:"已保存",2:"已提交",3:"已复核",4:"已退回"},V=[{id:1,value:"已保存"},{id:2,value:"已提交"},{id:3,value:"已复核"},{id:4,value:"已退回"}],_=[{id:1,value:"按季付息"},{id:2,value:"按年付息"},{id:3,value:"按月付息"},{id:4,value:"按计划还"},{id:5,value:"到期还"}],Q=[{id:1,value:"按计划还"},{id:2,value:"到期还"},{id:3,value:"年度"}],$=[{id:1,value:"还息"},{id:2,value:"还本"}],G={1:"固定利率",2:"浮动利率"},H=[{id:1,value:"固定利率"},{id:2,value:"固定利率"}],K={1:"内部交易冲销",2:"归集收款",3:"下拨付款",4:"联动支付",5:"余额调整",6:"内部活期结息",7:"内部借款放贷",8:"内部借款还本",9:"内部借款还息",10:"内部定期存款开立",11:"内部定期存款支取",12:"内部存款结息",13:"请款申请"},M=[{id:1,value:"内部交易冲销"},{id:2,value:"归集收款"},{id:3,value:"下拨付款"},{id:4,value:"联动支付"},{id:5,value:"余额调整"},{id:6,value:"内部活期结息"},{id:7,value:"内部借款放贷"},{id:8,value:"内部借款还本"},{id:9,value:"内部借款还息"},{id:10,value:"内部定期存款开立"},{id:11,value:"内部定期存款支取"},{id:12,value:"内部存款结息"},{id:13,value:"请款申请"}],R=[{id:1,value:"一年"},{id:2,value:"两年"},{id:3,value:"三年"},{id:4,value:"四年"},{id:5,value:"五年"},{id:6,value:"六年"},{id:7,value:"七年"},{id:8,value:"八年"},{id:9,value:"九年"},{id:10,value:"十年"},{id:11,value:"十一年"},{id:12,value:"十二年"}]}}]);