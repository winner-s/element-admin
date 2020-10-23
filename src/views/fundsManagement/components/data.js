const relation = {
  searchFrom: [
    {
      type: 'input',
      label: '策略编号:',
      prop: 'number',
      placeholder: '请填写策略编号'
    },
    {
      type: 'input',
      label: '策略名称:',
      prop: 'name',
      placeholder: '请填写策略名称'
    }
  ],
  searchBto: [
    {
      prop: 'select',
      type: 'primary',
      label: '查询'
    },
    {
      prop: 'insert',
      type: 'primary',
      label: '新增'
    }
  ],
  tableData: [
    {
      id: 1,
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    }
  ],
  tableListData: [
    {
      prop: 'number',
      width: '',
      label: '操作'
    },
    {
      prop: 'number',
      width: '',
      label: '策略编号'
    },
    {
      prop: 'name',
      width: '',
      label: '策略名称'
    },
    {
      prop: 'pattern',
      width: '',
      label: '策略模式'
    }
  ]
}
const condition = {
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

export default {
  relation,
  condition
}
