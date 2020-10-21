/*
 * 使用方法
 * 数组对象 用于下拉选择项
 * 对象 用于 表格内容过滤
 */

//产品方法学
export const METHODOLOGY = {
  IHC: "IHC",
  "1NGS": "NGS",
  ARMS: "ARMS",
  PCR: "PCR",
  FISH: "FISH",
  "Super-ARMS": "Super-ARMS",
  ddPCR: "ddPCR"
};

export const METHODOLOGYLIST = [
  {
    id: "IHC",
    value: "IHC"
  },
  {
    id: "NGS",
    value: "NGS"
  },
  {
    id: "ARMS",
    value: "ARMS"
  },
  {
    id: "PCR",
    value: "PCR"
  },
  {
    id: "FISH",
    value: "FISH"
  },
  {
    id: "Super-ARMS",
    value: "Super-ARMS"
  },
  {
    id: "ddPCR",
    value: "ddPCR"
  }
];
//性别
export const SEX = {
  "0": "未知",
  "1": "男",
  "2": "女"
};

export const SEXLIST = [
  {
    id: 0,
    value: "未知"
  },
  {
    id: 1,
    value: "男"
  },
  {
    id: 2,
    value: "女"
  }
];

// 订单状态
export const ORDERSTATUS = {
  "0": "未付款",
  "1": "已付款",
  "2": "已取消"
};

export const ORDERSTATUSLIST = [
  {
    id: 0,
    value: "未付款"
  },
  {
    id: 1,
    value: "已付款"
  },
  {
    id: 2,
    value: "已取消"
  }
];

// 产品类型
export const PRODUCTTYPE = {
  "1": "非小细胞肺癌精准用药赋能包",
  "2": "乳腺癌精准用药赋能包",
  "3": "结直肠癌精准用药赋能包",
  "4": "胃癌精准用药赋能包",
  "5": "580全基因"
};

export const PRODUCTTYPELIST = [
  {
    id: 1,
    value: "非小细胞肺癌精准用药赋能包"
  },
  {
    id: 2,
    value: "乳腺癌精准用药赋能包"
  },
  {
    id: 3,
    value: "结直肠癌精准用药赋能包"
  },
  {
    id: 4,
    value: "胃癌精准用药赋能包"
  },
  {
    id: 5,
    value: "580全基因"
  }
];

// 产品样式类型
export const PRODUCTSAMPLETYPE = {
  "1": "蜡块/白片（推荐）",
  "2": "全血",
  "3": "蜡块/白片+全血",
  "4": "血液（冷链 样本离体＜7天）",
  "5": "蜡块/白片（常温）或新鲜组织（冷链 样本离体＜7天）"
};

export const PRODUCTSAMPLETYPELIST = [
  {
    id: 1,
    value: "蜡块/白片（推荐）"
  },
  {
    id: 2,
    value: "全血"
  },
  {
    id: 3,
    value: "蜡块/白片（推荐）+全血"
  },
  {
    id: 4,
    value: "血液（冷链 样本离体＜7天）"
  },
  {
    id: 5,
    value: "蜡块/白片（常温）或新鲜组织（冷链 样本离体＜7天）"
  }
];

//状态
export const STATUS = {
  "0": "上架",
  "1": "下架"
};

export const STATUSLIST = [
  {
    id: 0,
    value: "上架"
  },
  {
    id: 1,
    value: "下架"
  }
];

//用户状态
export const USERSTATUS = {
  "0": "正常",
  "1": "停用"
};
export const USERSTATUSLIST = [
  {
    id: 0,
    value: "正常"
  },
  {
    id: 1,
    value: "停用"
  }
];
// 处理状态
export const PROCESSSTATUS = {
  "1": "已处理",
  "2": "未处理"
};
export const PROCESSSTATUSLIST = [
  {
    id: 1,
    value: "已处理"
  },
  {
    id: 2,
    value: "未处理"
  }
];
