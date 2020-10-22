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
      type: 'input',
      label: '单位类型:',
      prop: 'companyTyle',
      placeholder: '请填写单位类型'
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
      width: '',
      label: '单位层级'
    },
    {
      prop: 'companyNum',
      width: '',
      label: '单位编号'
    },
    {
      prop: 'company',
      width: '',
      label: '单位名称'
    },
    {
      prop: 'companyTyle',
      width: '',
      label: '单位类型'
    }
  ]
}
const companyBalance = {
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
      type: 'input',
      label: '账户号码:',
      prop: 'accountNum',
      placeholder: '请填写账户号码'
    },
    {
      type: 'input',
      label: '账户名称:',
      prop: 'accountName',
      placeholder: '请填写账户名称'
    },
    {
      type: 'daterange',
      label: '查询日期:',
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
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
  tableData: [
    {
      id: 1,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 2,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 3,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 4,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 5,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 6,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 7,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 8,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 9,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 10,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    },
    {
      id: 11,
      superiorCompany: '单位',
      accountCompany: '二级单位1',
      accountName: '二级单位1CNY直连账户',
      roadName: '北京分行',
      accountNum: '北京分行',
      balance: 12
    }
  ]
}

export default {
  companyInfo,
  companyBalance
}
