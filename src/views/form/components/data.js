const companyInfo = {
  searchFrom: [
    {
      type: 'select',
      label: '单位层级:',
      prop: 'hierarchy',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '一级',
          id: 1
        },
        {
          value: '二级',
          id: 2
        },
        {
          value: '三级',
          id: 3
        },
        {
          value: '四级',
          id: 4
        },
        {
          value: '5级',
          id: 5
        },
        {
          value: '六级',
          id: 6
        }
      ],
      placeholder: '请选择单位层级'
    },
    {
      type: 'input',
      label: '单位名称:',
      prop: 'company',
      placeholder: '请填写单位名称'
    },
    {
      type: 'select',
      label: '单位类型:',
      prop: 'companyTyle',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '国有企业',
          id: 1
        },
        {
          value: '私营企业',
          id: 2
        },
        {
          value: '中外合营企业',
          id: 3
        },
        {
          value: '外商投资企业',
          id: 4
        },
        {
          value: '单位类别',
          id: 5
        },
        {
          value: '0806',
          id: 6
        }
      ],
      placeholder: '请选择单位类型'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      hierarchy: '一级',
      companyNum: '052',
      company: '二级单位234',
      companyTyle: '私营企业'
    },
    {
      id: 2,
      hierarchy: '二级',
      companyNum: '512',
      company: '二级单位234',
      companyTyle: '中外合营企业'
    },
    {
      id: 3,
      hierarchy: '三级',
      companyNum: '432',
      company: '上海xxxx公司',
      companyTyle: '外商投资企业'
    },
    {
      id: 4,
      hierarchy: '四级',
      companyNum: '430',
      company: '浙江xxxx公司',
      companyTyle: '随便一个'
    },
    {
      id: 5,
      hierarchy: '五级',
      companyNum: '224',
      company: '庐山xxxx公司',
      companyTyle: '航天'
    },
    {
      id: 6,
      hierarchy: '六级',
      companyNum: '503',
      company: '九江xxxx公司',
      companyTyle: '01717'
    },
    {
      id: 7,
      hierarchy: '七级',
      companyNum: '486',
      company: '棋联xxxx公司',
      companyTyle: '0806'
    },
    {
      id: 8,
      hierarchy: '八级',
      companyNum: '992',
      company: '北海xx公司',
      companyTyle: '单位类别'
    },
    {
      id: 9,
      hierarchy: '九级',
      companyNum: '452',
      company: '电子xxxx公司',
      companyTyle: '国有企业'
    },
    {
      id: 10,
      hierarchy: '十级',
      companyNum: '232',
      company: '上海xxxx公司',
      companyTyle: '外商投资企业'
    },
    {
      id: 11,
      hierarchy: '十一级',
      companyNum: '412',
      company: '上海xxxx公司',
      companyTyle: '外商投资企业'
    }
  ],
  tableListData: [
    {
      prop: 'hierarchy',
      width: '150',
      label: '单位层级'
    },
    {
      prop: 'companyNum',
      width: '150',
      label: '单位编号'
    },
    {
      prop: 'company',
      width: '150',
      label: '单位名称'
    },
    {
      prop: 'companyTyle',
      width: '150',
      label: '单位类型'
    }
  ]
}
const companyBalance = {
  searchFrom: [
    {
      type: 'select',
      label: '单位名称:',
      prop: 'company',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '二级单位1',
          id: 1
        }
      ],
      placeholder: '请填写单位名称'
    },
    {
      type: 'select',
      label: '是否包含下级:',
      prop: 'hasChildren',
      selectList: [
        {
          value: '是',
          id: 1
        },
        {
          value: '否',
          id: 0
        }
      ],
      placeholder: '请选择'
    },
    {
      type: 'select',
      label: '账户号码:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '20111006',
          id: 1
        },
        {
          value: '20111007',
          id: 2
        },
        {
          value: '20111008',
          id: 3
        },
        {
          value: '20111009',
          id: 4
        },
        {
          value: '20111010',
          id: 5
        },
        {
          value: '20111011',
          id: 6
        },
        {
          value: '20111012',
          id: 7
        }
      ],
      prop: 'accountNum',
      placeholder: '请填写账户号码'
    },
    {
      type: 'input',
      label: '账户名称:',
      show: false,
      prop: 'accountName',
      placeholder: '请填写账户名称'
    },
    {
      type: 'daterange',
      label: '查询日期:',
      show: false,
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
    },
    {
      type: 'select',
      label: '币种:',
      show: false,
      prop: 'coinType',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '人民币',
          id: 1
        },
        {
          value: '美元',
          id: 2
        },
        {
          value: '越南盾',
          id: 3
        },
        {
          value: '欧元',
          id: 4
        },
        {
          value: '泰国铢',
          id: 5
        },
        {
          value: '加元',
          id: 6
        }
      ],
      placeholder: '请选择币种'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111006',
      balance: 12
    },
    {
      id: 2,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111007',
      balance: 12
    },
    {
      id: 3,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111008',
      balance: 12
    },
    {
      id: 4,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111009',
      balance: 12
    },
    {
      id: 5,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111010',
      balance: 12
    },
    {
      id: 6,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111011',
      balance: 12
    },
    {
      id: 7,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111011',
      balance: 12
    },
    {
      id: 8,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111012',
      balance: 12
    },
    {
      id: 9,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111011',
      balance: 12
    },
    {
      id: 10,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111015',
      balance: 12
    },
    {
      id: 11,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '20111016',
      balance: 12
    }
  ]
}

const role = {
  searchFrom: [
    {
      type: 'select',
      label: '单位编号:',
      prop: 'companyNum',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '0813',
          id: 1
        },
        {
          value: '1213',
          id: 2
        },
        {
          value: '002',
          id: 3
        }
      ],
      placeholder: '请选择单位编号'
    },
    {
      type: 'input',
      label: '单位名称:',
      prop: 'company',
      placeholder: '请填写单位名称'
    },
    {
      type: 'input',
      label: '真实姓名:',
      prop: 'userName',
      placeholder: '请填写真实姓名'
    },
    {
      type: 'input',
      label: '登录用户名:',
      show: false,
      prop: 'accountName',
      placeholder: '请填写用户名'
    },
    {
      type: 'select',
      label: '用户状态:',
      show: false,
      prop: 'userSatus',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '未复核',
          id: 1
        },
        {
          value: '已复核',
          id: 2
        }
      ],
      placeholder: '请选择用户状态'
    },
    {
      type: 'select',
      label: '角色:',
      show: false,
      prop: 'role',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '测试1',
          id: 1
        },
        {
          value: '测试2',
          id: 2
        },
        {
          value: '测试3',
          id: 3
        },
        {
          value: '测试4',
          id: 4
        },
        {
          value: '测试5',
          id: 5
        }
      ],
      placeholder: '请选择用户状态'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 2,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 3,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 4,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 5,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 6,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 7,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 8,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 9,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 10,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    },
    {
      id: 11,
      accountName: 'lizhihua',
      userName: '李志华',
      role: '测试1',
      company: '二级单位1',
      userSatus: '已复核'
    }
  ],
  tableListData: [
    {
      prop: 'accountName',
      width: '150',
      label: '登陆用户名'
    },
    {
      prop: 'userName',
      width: '150',
      label: '真实姓名'
    },
    {
      prop: 'role',
      width: '150',
      label: '角色'
    },
    {
      prop: 'company',
      width: '150',
      label: '单位名称'
    },
    {
      prop: 'userSatus',
      width: '150',
      label: '用户状态'
    }
  ]
}

const summary = {
  searchFrom: [
    {
      type: 'select',
      label: '单位编号:',
      prop: 'companyNum',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '002',
          id: 1
        }
      ],
      placeholder: '请选择单位编号'
    },
    {
      type: 'input',
      label: '单位名称:',
      prop: 'company',
      placeholder: '请填写单位名称'
    },
    {
      type: 'select',
      label: '银行编号:',
      prop: 'bankNum',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: 'hhhh',
          id: 1
        },
        {
          value: '011',
          id: 3
        },
        {
          value: '102',
          id: 4
        },
        {
          value: '103',
          id: 5
        },
        {
          value: '104',
          id: 6
        },
        {
          value: '105',
          id: 7
        }
      ],
      placeholder: '请选择'
    },
    {
      type: 'input',
      label: '银行名称:',
      show: false,
      prop: 'bankName',
      placeholder: '请填写银行名称'
    },
    {
      type: 'select',
      label: '账户号码:',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '20111006',
          id: 1
        },
        {
          value: '20111007',
          id: 2
        },
        {
          value: '20111008',
          id: 3
        },
        {
          value: '20111009',
          id: 4
        },
        {
          value: '20111010',
          id: 5
        },
        {
          value: '20111011',
          id: 6
        },
        {
          value: '20111012',
          id: 7
        }
      ],
      prop: 'accountNum',
      placeholder: '请填写账户号码'
    },
    {
      type: 'input',
      label: '账户名称:',
      show: false,
      prop: 'accountName',
      placeholder: '请填写账户名称'
    },
    {
      type: 'daterange',
      label: '查询日期:',
      show: false,
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
    },
    {
      type: 'input',
      label: '金额开始:',
      show: false,
      prop: 'startMoney',
      placeholder: '请填写金额'
    },
    {
      type: 'input',
      label: '金额结束:',
      show: false,
      prop: 'endMoney',
      placeholder: '请填写金额'
    },
    {
      type: 'select',
      label: '币种:',
      prop: 'coinType',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '人民币',
          id: 1
        },
        {
          value: '美元',
          id: 2
        },
        {
          value: '越南盾',
          id: 3
        },
        {
          value: '欧元',
          id: 4
        },
        {
          value: '泰国铢',
          id: 5
        },
        {
          value: '加元',
          id: 6
        }
      ],
      placeholder: '请选择币种'
    },
    {
      type: 'select',
      label: '收付方向:',
      show: false,
      prop: 'receiptOrPayment',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '借',
          id: 1
        },
        {
          value: '贷',
          id: 2
        }
      ],
      placeholder: '请选择收付方向'
    },
    {
      type: 'select',
      label: '是否包含下级:',
      show: false,
      prop: 'hasChildren',
      selectList: [
        {
          value: '是',
          id: 1
        },
        {
          value: '否',
          id: 0
        }
      ],
      placeholder: '请选择'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 2,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 3,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 4,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 5,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 6,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 7,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 8,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 9,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 10,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    },
    {
      id: 11,
      superiorCompany: '上级单位',
      organizationName: '组织名称',
      accountNum: '20111006',
      reciprocalCompany: 'xxx公司',
      reciprocalAccount: '20121006',
      coinType: '人民币',
      receiptCoin: '1200',
      paymentCoin: '0',
      coinDifference: '1200',
      dis: 'gggg',
      receiptOrPayment: '借',
      money: '1200',
      bankName: '建行'
    }
  ],
  tableListData: [
    {
      prop: 'superiorCompany',
      width: '150',
      label: '上级单位'
    },
    {
      prop: 'organizationName',
      width: '150',
      label: '组织名称'
    },
    {
      prop: 'accountNum',
      width: '150',
      label: '银行帐号'
    },
    {
      prop: 'reciprocalCompany',
      width: '150',
      label: '对方单位'
    },
    {
      prop: 'reciprocalAccount',
      width: '150',
      label: '对方帐号'
    },
    {
      prop: 'coinType',
      width: '150',
      label: '币种'
    },
    {
      prop: 'receiptCoin',
      width: '150',
      label: '收入原币'
    },
    {
      prop: 'paymentCoin',
      width: '150',
      label: '支出原币'
    },
    {
      prop: 'coinDifference',
      width: '150',
      label: '原币差额'
    },
    {
      prop: 'dis',
      width: '150',
      label: '摘要'
    },
    {
      prop: 'receiptOrPayment',
      width: '150',
      label: '收付方向'
    },
    {
      prop: 'money',
      width: '150',
      label: '交易金额'
    },
    {
      prop: 'bankName',
      width: '150',
      label: '银行名称'
    }
  ]
}

const flow = {
  searchFrom: [
    {
      type: 'input',
      label: '单位名称:',
      prop: 'company',
      placeholder: '请填写单位名称'
    },
    {
      type: 'select',
      label: '是否包含下级:',
      prop: 'hasChildren',
      selectList: [
        {
          value: '是',
          id: 1
        },
        {
          value: '否',
          id: 0
        }
      ],
      placeholder: '请选择'
    },
    {
      type: 'select',
      label: '账户号码:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '20111006',
          id: 1
        },
        {
          value: '20111007',
          id: 2
        },
        {
          value: '20111008',
          id: 3
        },
        {
          value: '20111009',
          id: 4
        },
        {
          value: '20111010',
          id: 5
        },
        {
          value: '20111011',
          id: 6
        },
        {
          value: '20111012',
          id: 7
        }
      ],
      prop: 'accountNum',
      placeholder: '请填写账户号码'
    },
    {
      type: 'input',
      label: '账户名称:',
      show: false,
      prop: 'accountName',
      placeholder: '请填写账户名称'
    },
    {
      type: 'daterange',
      label: '查询日期:',
      show: false,
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
    },
    {
      type: 'select',
      label: '币种:',
      prop: 'coinType',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '人民币',
          id: 1
        },
        {
          value: '美元',
          id: 2
        },
        {
          value: '越南盾',
          id: 3
        },
        {
          value: '欧元',
          id: 4
        },
        {
          value: '泰国铢',
          id: 5
        },
        {
          value: '加元',
          id: 6
        }
      ],
      placeholder: '请选择币种'
    },
    {
      type: 'select',
      label: '账户用途名称:',
      prop: 'useType',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '基本存款户-收支户',
          id: 1
        },
        {
          value: '一般存款户-收支户',
          id: 2
        },
        {
          value: '临时存款户-收支户',
          id: 3
        },
        {
          value: '专业存款户-收支户',
          id: 4
        }
      ],
      placeholder: '请选择账户用途名称'
    },
    {
      type: 'num',
      label: '期初余额:',
      prop: 'startBalance',
      show: false,
      numList: ['', ''],
      placeholder: '请输入金额'
    },
    {
      type: 'num',
      label: '期末余额:',
      prop: 'endBalance',
      show: false,
      numList: ['', ''],
      placeholder: '请输入金额'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 2,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 3,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 4,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 5,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 6,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 7,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 8,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 9,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 10,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    },
    {
      id: 11,
      superiorCompany: '顶级单位',
      companyName: '二级单位1',
      bankName: '中国农业银行',
      accountNum: '20121006',
      useType: '基本存款户-收支户',
      startBalance: 0,
      receipt: 0,
      payment: 0,
      endBalance: 0,
      difference: 0
    }
  ],
  tableListData: [
    {
      prop: 'superiorCompany',
      width: '150',
      label: '上级单位名称'
    },
    {
      prop: 'companyName',
      width: '150',
      label: '项目公司名称'
    },
    {
      prop: 'bankName',
      width: '150',
      label: '开户行名称'
    },
    {
      prop: 'accountNum',
      width: '150',
      label: '帐户号码'
    },
    {
      prop: 'useType',
      width: '150',
      label: '账户用途'
    },
    {
      prop: 'startBalance',
      width: '150',
      label: '初期余额（元）'
    },
    {
      prop: 'receipt',
      width: '150',
      label: '流入（元）'
    },
    {
      prop: 'payment',
      width: '150',
      label: '流出（元）'
    },
    {
      prop: 'endBalance',
      width: '150',
      label: '期末余额（元）'
    },
    {
      prop: 'difference',
      width: '150',
      label: '差额（元）'
    }
  ]
}

const analyse = {
  searchFrom: [
    {
      type: 'select',
      label: '银行名称:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '中国人民银行营业处',
          id: 1
        },
        {
          value: '中国人民银行国库处',
          id: 2
        },
        {
          value: '中国工商银行',
          id: 3
        },
        {
          value: '中国农业银行',
          id: 4
        },
        {
          value: '中国银行',
          id: 5
        },
        {
          value: '中国建设银行',
          id: 6
        },
        {
          value: '国家开发银行',
          id: 7
        }
      ],
      prop: 'bankName',
      placeholder: '请选择银行名称'
    },
    {
      type: 'select',
      label: '币种:',
      prop: 'coinType',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '人民币',
          id: 1
        },
        {
          value: '美元',
          id: 2
        },
        {
          value: '越南盾',
          id: 3
        },
        {
          value: '欧元',
          id: 4
        },
        {
          value: '泰国铢',
          id: 5
        },
        {
          value: '加元',
          id: 6
        }
      ],
      placeholder: '请选择币种'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    }
  ],
  tableData: [
    {
      id: 1,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 2,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 3,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 4,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 5,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 6,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 7,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 8,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 19,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 10,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    },
    {
      id: 11,
      bankName: '建行',
      accountNum: '1',
      balance: 0,
      percentage: '0'
    }
  ],
  tableListData: [
    {
      prop: 'bankName',
      width: '150',
      label: '银行名称'
    },
    {
      prop: 'accountNum',
      width: '150',
      label: '账户数量'
    },
    {
      prop: 'balance',
      width: '150',
      label: '当前余额'
    },
    {
      prop: 'percentage',
      width: '150',
      label: '时点余额占比'
    }
  ]
}

export default {
  companyInfo,
  companyBalance,
  role,
  summary,
  flow,
  analyse
}
