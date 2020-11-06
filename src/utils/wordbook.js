/*
 * 使用方法
 * 数组对象 用于下拉选择项
 * 对象 用于 表格内容过滤
 */

// 单位编号
export const UNITNO = {
  '1324': '单位1',
  '546': '单位2',
  '13265': '单位3'
}

export const UNITNOLIST = [
  {
    id: 1324,
    value: '单位1'
  },
  {
    id: 546,
    value: '单位2'
  },
  {
    id: 13265,
    value: '单位3'
  }
]


// 银行名称
export const BACK = {
  '1': '北京银行',
  '2': '工商银行',
  '3': '中国银行'
}

export const BACKLIST = [
  {
    id: 1,
    value: '北京银行'
  },
  {
    id: 2,
    value: '工商银行'
  },
  {
    id: 3,
    value: '中国银行'
  }
]


// 币种
export const CURRENCY = {
  '1': '人民币',
  '2': '美元',
  '3': '日元'
}

export const CURRENCYLIST = [
  {
    id: 1,
    value: '人民币'
  },
  {
    id: 2,
    value: '美元'
  },
  {
    id: 3,
    value: '日元'
  }
]


// 是否直联
export const DIRECT = {
  '1': '直联',
  '2': '非直联'
}

export const DIRECTLIST = [
  {
    id: 1,
    value: '直联'
  },
  {
    id: 2,
    value: '非直联'
  }
]

// 账户用途
export const ACCOUNTUSAGE  = {
  '1': '基本存款户-收支户',
  '2': '一般存款户-收支户',
  '3': '临时存款户-收支户',
  '4': '专业存款户-收支户'
}

export const ACCOUNTUSAGELIST = [
  {
    id: 1,
    value: '基本存款户-收支户'
  },
  {
    id: 2,
    value: '一般存款户-收支户'
  },
  {
    id: 3,
    value: '临时存款户-收支户'
  },
  {
    id: 4,
    value: '专业存款户-收支户'
  }
]


// 账户状态
export const ACCOUNTSTATUS  = {
  '1': '正常',
  '2': '销户',
  
}

export const ACCOUNTSTATUSLIST = [
  {
    id: 1,
    value: '正常'
  },
  {
    id: 2,
    value: '销户'
  }
]

// 借贷方向
export const LENDING  = {
  '1': '借',
  '2': '贷',
  
}

export const LENDINGLIST = [
  {
    id: 1,
    value: '借'
  },
  {
    id: 2,
    value: '贷'
  }
]


// 付款用途
export const PURPOSE   = {
  '1': '员工借款',
  '2': '差旅报销',
  '3':'差旅补助'
  
}

export const PURPOSELIST = [
  {
    id: 1,
    value: '员工借款'
  },
  {
    id: 2,
    value: '差旅报销'
  },
  {
    id: 3,
    value: '差旅补助'
  }
]
 

// 支付方式
export const  PAYMENT   = {
  '1': '非直联支付'
  
}

export const PAYMENTLIST = [
  {
    id: 1,
    value: '非直联支付'
  }
]


// 是否滚动
export const  SCORLL   = {
  '1': '是',
  '2': '否'
  
}

export const SCORLLLIST = [
  {
    id: 1,
    value: '是'
  },
  {
    id:2,
    value:'否'
  }
]


// 周期类型  Cycle type
export const  CYCLETYPE   = {
  '1': '年',
  '2': '季',
  '2': '月',
  '2': '周',
  '2': '日'
  
}

export const CYCLETYPELIIST = [
  {
    id: 1,
    value: '年'
  },
  {
    id:2,
    value:'季'
  },
  {
    id:3,
    value:'月'
  },
  {
    id:4,
    value:'周'
  },
  {
    id:5,
    value:'日'
  }
]

// 归集方式  Cycle type
export const   COLLECTION   = {
  '1': '比例归集',
  '2': '取整归集',
  '3': '限额归集',
  '4': '全额归集',
  '5': '超限额全额归集',
  '6': '自定义归集'
}

export const COLLECTIONLIST = [
  {
    id: 1,
    value: '比例归集'
  },
  {
    id:2,
    value:'取整归集'
  },
  {
    id:3,
    value:'限额归集'
  },
  {
    id:4,
    value:'全额归集'
  },
  {
    id:5,
    value:'超限额全额归集'
  },
  {
    id:6,
    value:'自定义归集'
  }
]