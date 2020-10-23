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
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 2,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 3,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 4,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 5,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 6,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 7,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 8,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 9,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 10,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 11,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    { width: '50', label: '', type: 'selection' },
    { label: '操作', type: 'btn', width: '' },
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
    }
  ],
  tableData: [
    {
      id: 1,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 7,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
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
      prop: 'status',
      width: '',
      label: '策略状态'
    },
    {
      prop: 'time',
      width: '',
      label: '激活/停止策略时间'
    }
  ]
}

const collsectionTask = {
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
    },
    {
      type: 'select',
      label: '任务状态:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '停止',
          id: 1
        },
        {
          value: '激活',
          id: 2
        }
      ],
      prop: 'taskStatus',
      placeholder: '请选择任务状态'
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
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    { label: '操作', type: 'btn', width: '' },
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
      label: '执行模式'
    },
    {
      prop: 'time',
      width: '',
      label: '激活/停止策略时间'
    },
    {
      prop: 'taskStatus',
      width: '',
      label: '任务状态'
    },
    {
      prop: 'status',
      width: '',
      label: '运行状态'
    }
  ]
}

const foundsCollsection = {
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
    }
  ],
  tableData: [
    {
      id: 1,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    {
      prop: 'number',
      width: '',
      label: '策略编号'
    },
    {
      prop: 'name',
      width: '',
      label: '策略名称'
    }
  ]
}

const selectCollsectionInfo = {
  searchFrom: [
    {
      type: 'select',
      label: '指令状态:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '撤销',
          id: 1
        },
        {
          value: '保存',
          id: 2
        },
        {
          value: '已发送',
          id: 3
        },
        {
          value: '成功',
          id: 4
        },
        {
          value: '失败',
          id: 5
        },
        {
          value: '未知',
          id: 6
        }
      ],
      prop: 'status',
      placeholder: '请选择指令状态'
    },
    {
      type: 'select',
      label: '指令接受银行:',
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
          value: '国家开发银行',
          id: 6
        }
      ],
      prop: 'status',
      placeholder: '请选择银行'
    },
    {
      type: 'daterange',
      label: '指令发送时间:',
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
    },
    {
      type: 'select',
      label: '策略编号:',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: 'ZJGJ20072011081832',
          id: 1
        },
        {
          value: 'ZJGJ20071411395892',
          id: 2
        },
        {
          value: 'ZJGJ20071514295001',
          id: 3
        }
      ],
      prop: 'number',
      placeholder: '请选择编号'
    },
    {
      type: 'input',
      label: '策略名称:',
      show: false,
      prop: 'name',
      placeholder: '请输入策略编号名称'
    },
    {
      type: 'select',
      label: '业务单位:',
      show: false,
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
      prop: 'number',
      placeholder: '请选择单位'
    },
    {
      type: 'checkbox',
      show: false,
      label: '包含下级业务单位:',
      prop: 'unitNo'
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
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 2,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 3,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 4,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 5,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 6,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    {
      prop: 'receiptsNumber',
      width: '',
      label: '单据编号'
    },
    {
      prop: 'receiptsTime',
      width: '',
      label: '单据日期'
    },
    {
      prop: 'money',
      width: '',
      label: '金额'
    },
    {
      prop: 'company',
      width: '',
      label: '付款申请单位'
    },
    {
      prop: 'status',
      width: '',
      label: '指令状态'
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
      prop: 'paymentAccountNum',
      width: '',
      label: '付款银行帐号'
    },
    {
      prop: 'paymentAccountName',
      width: '',
      label: '付款账户名称'
    },
    {
      prop: 'receiptAccountNum',
      width: '',
      label: '收款银行帐号'
    },
    {
      prop: 'receiptAccountName',
      width: '',
      label: '收款账户名称帐号'
    },
    {
      prop: 'acceptBank',
      width: '',
      label: '指令接受银行'
    },
    {
      prop: 'speed',
      width: '',
      label: '汇款速度'
    }
  ]
}

const accountRelation = {
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
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 2,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 3,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 4,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 5,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 6,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 7,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 8,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 9,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 10,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    },
    {
      id: 11,
      el: '',
      number: 'ZJGJ20072011081832',
      name: '052',
      pattern: '资金上划'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    { width: '50', label: '', type: 'selection' },
    { label: '操作', type: 'btn', width: '' },
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

const setSendCondition = {
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
    }
  ],
  tableData: [
    {
      id: 1,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '停止',
      time: '2020-09-28 14:10:27'
    },
    {
      id: 7,
      number: 'ZJGJ20072011081832',
      name: '412',
      status: '激活',
      time: '2020-09-28 14:10:27'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
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
      prop: 'status',
      width: '',
      label: '策略状态'
    },
    {
      prop: 'time',
      width: '',
      label: '激活/停止策略时间'
    }
  ]
}

const selfSendTask = {
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
    },
    {
      type: 'select',
      label: '任务状态:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '停止',
          id: 1
        },
        {
          value: '激活',
          id: 2
        }
      ],
      prop: 'taskStatus',
      placeholder: '请选择任务状态'
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
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    { label: '操作', type: 'btn', width: '' },
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
      label: '执行模式'
    },
    {
      prop: 'taskStatus',
      width: '',
      label: '任务状态'
    },
    {
      prop: 'status',
      width: '',
      label: '运行状态'
    }
  ]
}

const fundsSend = {
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
    }
  ],
  tableData: [
    {
      id: 1,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 2,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 3,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 4,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    },
    {
      id: 5,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '激活',
      status: '未运行'
    },
    {
      id: 6,
      number: 'ZJGJ20072011081832',
      name: '412',
      pattern: '0 00 00 ** ?',
      time: '2020-09-28 14:10:27',
      taskStatus: '停止',
      status: '未运行'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    {
      prop: 'number',
      width: '',
      label: '策略编号'
    },
    {
      prop: 'name',
      width: '',
      label: '策略名称'
    }
  ]
}

const selectSendInfo = {
  searchFrom: [
    {
      type: 'select',
      label: '指令状态:',
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: '撤销',
          id: 1
        },
        {
          value: '保存',
          id: 2
        },
        {
          value: '已发送',
          id: 3
        },
        {
          value: '成功',
          id: 4
        },
        {
          value: '失败',
          id: 5
        },
        {
          value: '未知',
          id: 6
        }
      ],
      prop: 'status',
      placeholder: '请选择指令状态'
    },
    {
      type: 'select',
      label: '指令接受银行:',
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
          value: '国家开发银行',
          id: 6
        }
      ],
      prop: 'status',
      placeholder: '请选择银行'
    },
    {
      type: 'daterange',
      label: '指令发送时间:',
      timeList: ['', ''],
      timeFormat: 'yyyy-MM-dd',
      prop: 'selectDate',
      placeholder: '请选择日期'
    },
    {
      type: 'select',
      label: '策略编号:',
      show: false,
      selectList: [
        {
          value: '全部',
          id: 0
        },
        {
          value: 'ZJGJ20072011081832',
          id: 1
        },
        {
          value: 'ZJGJ20071411395892',
          id: 2
        },
        {
          value: 'ZJGJ20071514295001',
          id: 3
        }
      ],
      prop: 'number',
      placeholder: '请选择编号'
    },
    {
      type: 'input',
      label: '策略名称:',
      show: false,
      prop: 'name',
      placeholder: '请输入策略编号名称'
    },
    {
      type: 'select',
      label: '业务单位:',
      show: false,
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
      prop: 'number',
      placeholder: '请选择单位'
    },
    {
      type: 'checkbox',
      show: false,
      label: '包含下级业务单位:',
      prop: 'unitNo'
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
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 2,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 3,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 4,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 5,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    },
    {
      id: 6,
      receiptsNumber: 'ZJGJ20072011081832',
      receiptsTime: '2020-08-21',
      money: '1,222',
      company: '二级单位1',
      status: '失败',
      number: 'ZJGJ20072011081832',
      name: '412',
      paymentAccountNum: '2222334455667744',
      paymentAccountName: '工商银行',
      receiptAccountNum: '2222334455667744',
      receiptAccountName: '建设银行',
      acceptBank: 'ABC',
      speed: '普通'
    }
  ],
  tableListData: [
    { width: '50', label: '', type: 'index' },
    {
      prop: 'receiptsNumber',
      width: '',
      label: '单据编号'
    },
    {
      prop: 'receiptsTime',
      width: '',
      label: '单据日期'
    },
    {
      prop: 'money',
      width: '',
      label: '金额'
    },
    {
      prop: 'company',
      width: '',
      label: '付款申请单位'
    },
    {
      prop: 'status',
      width: '',
      label: '指令状态'
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
      prop: 'paymentAccountNum',
      width: '',
      label: '付款银行帐号'
    },
    {
      prop: 'paymentAccountName',
      width: '',
      label: '付款账户名称'
    },
    {
      prop: 'receiptAccountNum',
      width: '',
      label: '收款银行帐号'
    },
    {
      prop: 'receiptAccountName',
      width: '',
      label: '收款账户名称帐号'
    },
    {
      prop: 'acceptBank',
      width: '',
      label: '指令接受银行'
    },
    {
      prop: 'speed',
      width: '',
      label: '汇款速度'
    }
  ]
}

export default {
  relation,
  condition,
  collsectionTask,
  foundsCollsection,
  selectCollsectionInfo,
  accountRelation,
  setSendCondition,
  selfSendTask,
  fundsSend,
  selectSendInfo
}
