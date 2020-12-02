import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 在不刷新页面的情况下更新页面
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: '首页' }
      }
    ]
  },

  {
    path: '/accountManager',
    component: Layout,
    redirect: '/accountManager/openManager',
    name: '账户管理',
    meta: { title: '账户管理', icon: '账户' },
    children: [
      {
        path: 'openManager',
        name: '开户管理1',
        component: () => import('@/views/accountManager/openManager/index'),
        redirect: '/accountManager/openManager/accountOpen',
        meta: { title: '开户管理' },
        children: [
          {
            path: 'accountOpen',
            component: () =>
              import('@/views/accountManager/openManager/accountOpen/index'),
            name: '开户申请',
            meta: { title: '开户申请' }
          },
          {
            path: 'accountOpenSupplement',
            component: () =>
              import(
                '@/views/accountManager/openManager/accountOpenSupplement/index'
              ),
            name: '开户补录',
            meta: { title: '开户补录' }
          },
          {
            path: 'accountOpenReview',
            component: () =>
              import(
                '@/views/accountManager/openManager/accountOpenReview/index'
              ),
            name: '开户复核',
            meta: { title: '开户复核' }
          }
        ]
      },
      {
        path: 'changeManager',
        name: '变更管理s',
        component: () => import('@/views/accountManager/changeManager/index'),
        meta: { title: '变更管理' },
        children: [
          {
            path: 'changeOpen',
            component: () =>
              import('@/views/accountManager/changeManager/changeOpen/index'),
            name: '变更申请',
            meta: { title: '变更申请' }
          },

          {
            path: 'changeReview',
            component: () =>
              import('@/views/accountManager/changeManager/changeReview/index'),
            name: '变更复核',
            meta: { title: '变更复核' }
          }
        ]
      },
      {
        path: 'cancellationManager',
        name: '销户管理s',
        component: () =>
          import('@/views/accountManager/cancellationManager/index'),
        meta: { title: '销户管理' },
        children: [
          {
            path: 'cancellationOpen',
            component: () =>
              import(
                '@/views/accountManager/cancellationManager/cancellationOpen/index'
              ),
            name: '销户申请',
            meta: { title: '销户申请' }
          },

          {
            path: 'cancellationReview',
            component: () =>
              import(
                '@/views/accountManager/cancellationManager/cancellationReview/index'
              ),
            name: '销户复核',
            meta: { title: '销户复核' }
          }
        ]
      },
      {
        path: 'inquiryManager',
        name: '账户查询',
        component: () => import('@/views/accountManager/inquiryManager/index'),
        meta: { title: '账户查询' },
        children: [
          {
            path: 'inquirySelect',
            component: () =>
              import(
                '@/views/accountManager/inquiryManager/inquirySelect/index'
              ),
            name: '账户信息查询',
            meta: { title: '账户信息查询' }
          },

          {
            path: 'balanceSelect',
            component: () =>
              import(
                '@/views/accountManager/inquiryManager/balanceSelect/index'
              ),
            name: '当日余额查询',
            meta: { title: '当日余额查询' }
          },
          {
            path: 'transactionSelect',
            component: () =>
              import(
                '@/views/accountManager/inquiryManager/transactionSelect/index'
              ),
            name: '当日交易查询',
            meta: { title: '当日交易查询' }
          },
          {
            path: 'historyBalanceSelect',
            component: () =>
              import(
                '@/views/accountManager/inquiryManager/historyBalanceSelect/index'
              ),
            name: '历史余额查询',
            meta: { title: '历史余额查询' }
          },

          {
            path: 'historyTransactionSelect',
            component: () =>
              import(
                '@/views/accountManager/inquiryManager/historyTransactionSelect/index'
              ),
            name: '历史交易查询',
            meta: { title: '历史交易查询' }
          }
        ]
      },
      {
        path: 'BankInterface',
        name: '银企接口',
        component: () => import('@/views/accountManager/BankInterface/index'),
        meta: { title: '银企接口' },
        children: [
          {
            path: 'directAccountHistorical',
            component: () =>
              import(
                '@/views/accountManager/BankInterface/directAccountHistorical/index'
              ),
            name: '直联账户历史交易导入',
            meta: { title: '直联账户历史交易导入' }
          },

          {
            path: 'directAcountBalance',
            component: () =>
              import(
                '@/views/accountManager/BankInterface/directAcountBalance/index'
              ),
            name: '直联账户即时余额查询',
            meta: { title: '直联账户即时余额查询' }
          },
          {
            path: 'directAccountTransaction',
            component: () =>
              import(
                '@/views/accountManager/BankInterface/directAccountTransaction/index'
              ),
            name: '直联账户即时交易查询',
            meta: { title: '直联账户即时交易查询' }
          },
          {
            path: 'noDirectAccountHistorical',
            component: () =>
              import(
                '@/views/accountManager/BankInterface/noDirectAccountHistorical/index'
              ),
            name: '非直联账户历史数据导入',
            meta: { title: '非直联账户历史数据导入' }
          }
        ]
      }
    ]
  },
  {
    path: '/settlementManager',
    component: Layout,
    redirect: '/settlementManager/privatePayment',
    name: '结算管理',
    meta: { title: '结算管理', icon: '结算' },
    children: [
      {
        path: 'privatePayment',
        name: '对私付款',
        component: () =>
          import('@/views/settlementManager/privatePayment/index'),
        meta: { title: '对私付款' },
        redirect: '/settlementManager/privatePayment/paymentApplication',
        children: [
          {
            path: 'paymentApplication',
            component: () =>
              import(
                '@/views/settlementManager/privatePayment/paymentApplication/index'
              ),
            name: '对私付款申请',
            meta: { title: '对私付款申请' }
          },
          {
            path: 'paymentReview',
            component: () =>
              import(
                '@/views/settlementManager/privatePayment/paymentReview/index'
              ),
            name: '对私付款复核',
            meta: { title: '对私付款复核' }
          },
          {
            path: 'paymentInstruction',
            component: () =>
              import(
                '@/views/settlementManager/privatePayment/paymentInstruction/index'
              ),
            name: '对私付款指令发送',
            meta: { title: '对私付款指令发送' }
          },
          {
            path: 'paymentConfim',
            component: () =>
              import(
                '@/views/settlementManager/privatePayment/paymentConfim/index'
              ),
            name: '对私非直联支付确认',
            meta: { title: '对私非直联支付确认' }
          }
        ]
      },
      {
        path: 'corporatePayment',
        name: '对公付款',
        component: () =>
          import('@/views/settlementManager/corporatePayment/index'),
        meta: { title: '对公付款' },
        children: [
          {
            path: 'paymentApplication',
            component: () =>
              import(
                '@/views/settlementManager/corporatePayment/paymentApplication/index'
              ),
            name: '对公付款申请',
            meta: { title: '对公付款申请' }
          },
          {
            path: 'paymentReview',
            component: () =>
              import(
                '@/views/settlementManager/corporatePayment/paymentReview/index'
              ),
            name: '对公付款复核',
            meta: { title: '对公付款复核' }
          },
          {
            path: 'paymentInstruction',
            component: () =>
              import(
                '@/views/settlementManager/corporatePayment/paymentInstruction/index'
              ),
            name: '对公付款指令发送',
            meta: { title: '对公付款指令发送' }
          },
          {
            path: 'paymentConfim',
            component: () =>
              import(
                '@/views/settlementManager/corporatePayment/paymentConfim/index'
              ),
            name: '对公非直联支付确认',
            meta: { title: '对公非直联支付确认' }
          }
        ]
      },
      {
        path: 'transferSameName',
        name: '同名划转',
        component: () =>
          import('@/views/settlementManager/transferSameName/index'),
        meta: { title: '同名划转' },
        children: [
          {
            path: 'transferApplication',
            component: () =>
              import(
                '@/views/settlementManager/transferSameName/transferApplication/index'
              ),
            name: '同名划转申请',
            meta: { title: '同名划转申请' }
          },
          {
            path: 'transferReview',
            component: () =>
              import(
                '@/views/settlementManager/transferSameName/transferReview/index'
              ),
            name: '同名划转复核',
            meta: { title: '同名划转复核' }
          },
          {
            path: 'transferInstruction',
            component: () =>
              import(
                '@/views/settlementManager/transferSameName/transferInstruction/index'
              ),
            name: '同名划转指令发送',
            meta: { title: '同名划转指令发送' }
          },
          {
            path: 'transferConfim',
            component: () =>
              import(
                '@/views/settlementManager/transferSameName/transferConfim/index'
              ),
            name: '同名划转非直联支付确认',
            meta: { title: '同名划转非直联支付确认' }
          }
        ]
      },
      {
        path: 'salaryPayment',
        name: '薪资代发',
        component: () =>
          import('@/views/settlementManager/salaryPayment/index'),
        meta: { title: '薪资代发' },
        children: [
          {
            path: 'salaryPaymentImport',
            component: () =>
              import(
                '@/views/settlementManager/salaryPayment/salaryPaymentImport/index'
              ),
            name: '薪资代发导入',
            meta: { title: '薪资代发导入' }
          },
          {
            path: 'salaryPaymentAppliction',
            component: () =>
              import(
                '@/views/settlementManager/salaryPayment/salaryPaymentAppliction/index'
              ),
            name: '薪资代发申请',
            meta: { title: '薪资代发申请' }
          },
          {
            path: 'salaryPaymentReview',
            component: () =>
              import(
                '@/views/settlementManager/salaryPayment/salaryPaymentReview/index'
              ),
            name: '薪资代发复核',
            meta: { title: '薪资代发复核' }
          },
          {
            path: 'salaryPaymentInstruction',
            component: () =>
              import(
                '@/views/settlementManager/salaryPayment/salaryPaymentInstruction/index'
              ),
            name: '薪资代发指令发送',
            meta: { title: '薪资代发指令发送' }
          }
        ]
      },
      {
        path: 'instructionManager',
        name: '指令管理',
        component: () =>
          import('@/views/settlementManager/instructionManager/index'),
        meta: { title: '指令管理' },
        children: [
          {
            path: 'transferApplication',
            component: () =>
              import(
                '@/views/settlementManager/instructionManager/instructionSync/index'
              ),
            name: '指令同步',
            meta: { title: '指令同步' }
          },
          {
            path: 'transferReview',
            component: () =>
              import(
                '@/views/settlementManager/instructionManager/instructionUpdate/index'
              ),
            name: '指令修改',
            meta: { title: '指令修改' }
          },
          {
            path: 'transferInstruction',
            component: () =>
              import(
                '@/views/settlementManager/instructionManager/instructionReview/index'
              ),
            name: '指令复核',
            meta: { title: '指令复核' }
          }
        ]
      },
      {
        path: 'settlementInquiry',
        name: '结算查询',
        component: () =>
          import('@/views/settlementManager/settlementInquiry/index'),
        meta: { title: '结算查询' },
        children: [
          {
            path: 'paymentInquiry',
            component: () =>
              import(
                '@/views/settlementManager/settlementInquiry/paymentInquiry/index'
              ),
            name: '付款申请查询',
            meta: { title: '付款申请查询' }
          },
          {
            path: 'instructionInquiry',
            component: () =>
              import(
                '@/views/settlementManager/settlementInquiry/instructionInquiry/index'
              ),
            name: '付款指令查询',
            meta: { title: '付款指令查询' }
          }
        ]
      },
      {
        path: 'payeeMaintain',
        name: '收款人信息维护',
        component: () =>
          import('@/views/settlementManager/payeeMaintain/index'),
        meta: { title: '收款人信息维护' }
      },
      {
        path: 'tradeClaim',
        name: '交易认领',
        component: () => import('@/views/settlementManager/tradeClaim/index'),
        meta: { title: '交易认领' },
        children: [
          {
            path: 'systemMaintenance',
            component: () =>
              import(
                '@/views/settlementManager/tradeClaim/systemMaintenance/index'
              ),
            name: '交易认领系统维护',
            meta: { title: '交易认领系统维护' }
          },
          {
            path: 'ruleMaintenance',
            component: () =>
              import(
                '@/views/settlementManager/tradeClaim/ruleMaintenance/index'
              ),
            name: '交易认领规则维护',
            meta: { title: '交易认领规则维护' }
          },
          {
            path: 'pushQuery',
            component: () =>
              import('@/views/settlementManager/tradeClaim/pushQuery/index'),
            name: '推送查询',
            meta: { title: '推送查询' }
          },
          {
            path: 'entryConfirm',
            component: () =>
              import('@/views/settlementManager/tradeClaim/entryConfirm/index'),
            name: '线下入账确认',
            meta: { title: '线下入账确认' }
          }
        ]
      }
    ]
  },

  {
    path: '/budgetManager',
    component: Layout,
    redirect: '/budgetManager/basicSettings',
    name: '预算管理',
    meta: { title: '预算管理', icon: '预算' },
    children: [
      {
        path: 'basicSettings',
        name: '基础设置',
        component: () => import('@/views/budgetManager/basicSettings/index'),
        redirect: '/budgetManager/basicSettings/budgetSystemSetup',
        meta: { title: '基础设置' },
        children: [
          {
            path: 'budgetSystemSetup',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/budgetSystemSetup/index'
              ),
            name: '预算体系设置',
            meta: { title: '预算体系设置' }
          },
          {
            path: 'budgetCycleManager',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/budgetCycleManager/index'
              ),
            name: '预算周期管理',
            meta: { title: '预算周期管理' }
          },
          {
            path: 'projectPermissSetting',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/projectPermissSetting/index'
              ),
            name: '项目权限设置',
            meta: { title: '项目权限设置' }
          },
          {
            path: 'projectDetails',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/projectDetails/index'
              ),
            name: '项目明细模板设置',
            meta: { title: '项目明细模板设置' }
          },
          {
            path: 'projectControl',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/projectControl/index'
              ),
            name: '项目控制关系配置',
            meta: { title: '项目控制关系配置' }
          },
          {
            path: 'adjustmentItems',
            component: () =>
              import(
                '@/views/budgetManager/basicSettings/adjustmentItems/index'
              ),
            name: '调剂项目配置',
            meta: { title: '调剂项目配置' }
          }
        ]
      },
      {
        path: 'budgetManager',
        name: '预算管理',
        component: () => import('@/views/budgetManager/budgetManager/index'),
        meta: { title: '预算管理' },
        children: [
          {
            path: 'budgeting',
            component: () =>
              import('@/views/budgetManager/budgetManager/budgeting/index'),
            name: '预算编制',
            meta: { title: '预算编制' }
          },
          {
            path: 'budgetAdjustment',
            component: () =>
              import(
                '@/views/budgetManager/budgetManager/budgetAdjustment/index'
              ),
            name: '预算调整',
            meta: { title: '预算调整' }
          },
          {
            path: 'budgetTiaoJi',
            component: () =>
              import('@/views/budgetManager/budgetManager/budgetTiaoJi/index'),
            name: '预算调剂',
            meta: { title: '预算调剂' }
          },
          {
            path: 'budgetSum',
            component: () =>
              import('@/views/budgetManager/budgetManager/budgetSum/index'),
            name: '预算汇总',
            meta: { title: '预算汇总' }
          }
        ]
      },
      {
        path: 'budgetSelect',
        name: '预算查询',
        component: () => import('@/views/budgetManager/budgetSelect/index'),
        meta: { title: '预算查询' },
        children: [
          {
            path: 'budgetingSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetingSelect/index'
              ),
            name: '预算编制查询',
            meta: { title: '预算编制查询' }
          },
          {
            path: 'budgetAdjustmentSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetAdjustmentSelect/index'
              ),
            name: '预算调整查询',
            meta: { title: '预算调整查询' }
          },
          {
            path: 'budgetTiaoJiSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetTiaoJiSelect/index'
              ),
            name: '预算调剂查询',
            meta: { title: '预算调剂查询' }
          },
          {
            path: 'budgetSumSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetSumSelect/index'
              ),
            name: '预算汇总查询',
            meta: { title: '预算汇总查询' }
          },

          {
            path: 'budgetImplementSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetImplementSelect/index'
              ),
            name: '预算填报查询',
            meta: { title: '预算填报查询' }
          },
          {
            path: 'budgetFillSelect',
            component: () =>
              import(
                '@/views/budgetManager/budgetSelect/budgetFillSelect/index'
              ),
            name: '预算执行查询',
            meta: { title: '预算执行查询' }
          }
        ]
      }
    ]
  },

  // 资金池管理
  {
    path: '/fundsManagement',
    component: Layout,
    name: '资金池管理',
    meta: { title: '资金池管理', icon: '资金池' },
    children: [
      {
        path: 'setCollection',
        name: '资金归集设置',
        component: () => import('@/views/fundsManagement/setCollection/index'),

        meta: { title: '资金归集设置' },
        children: [
          {
            path: 'relation',
            meta: { title: '账户归集关系设置' },
            name: 'relation',
            component: () =>
              import('@/views/fundsManagement/setCollection/pages/relation')
          },
          {
            path: 'condition',
            meta: { title: '自动归集条件设置' },
            name: 'condition',
            component: () =>
              import('@/views/fundsManagement/setCollection/pages/condition')
          }
        ]
      },
      {
        path: 'selfCollsection',
        name: '自动归集管理',
        alwaysShow: true,
        component: () =>
          import('@/views/fundsManagement/selfCollsection/index'),

        meta: { title: '自动归集管理' },
        children: [
          {
            path: 'task',
            meta: { title: '自动归集任务管理' },
            name: 'task',
            component: () =>
              import('@/views/fundsManagement/selfCollsection/pages/task')
          }
        ]
      },
      {
        path: 'manualCollsection',
        name: '手动归集管理',
        alwaysShow: true,
        component: () =>
          import('@/views/fundsManagement/manualCollsection/index'),

        meta: { title: '手动归集管理' },
        children: [
          {
            path: 'fundsCollsection',
            meta: { title: '手动资金归集' },
            name: 'fundsCollsection',
            component: () =>
              import(
                '@/views/fundsManagement/manualCollsection/pages/fundsCollsection'
              )
          }
        ]
      },
      {
        path: 'selectCollection',
        name: '资金归集查询',
        alwaysShow: true,
        component: () =>
          import('@/views/fundsManagement/selectCollection/index'),

        meta: { title: '资金归集查询' },
        children: [
          {
            path: 'selectInfo',
            meta: { title: '归集信息查询' },
            name: 'selectInfo',
            component: () =>
              import(
                '@/views/fundsManagement/selectCollection/pages/selectInfo'
              )
          }
        ]
      },
      {
        path: 'setFundsSend',
        name: '资金下拨设置',
        component: () => import('@/views/fundsManagement/setFundsSend/index'),

        meta: { title: '资金下拨设置' },
        children: [
          {
            path: 'accountRelation',
            meta: { title: '账户下拨关系设置' },
            name: 'accountRelation',
            component: () =>
              import(
                '@/views/fundsManagement/setFundsSend/pages/accountRelation'
              )
          },
          {
            path: 'condition',
            meta: { title: '自动下拨条件设置' },
            name: 'condition',
            component: () =>
              import('@/views/fundsManagement/setFundsSend/pages/condition')
          }
        ]
      },
      {
        path: 'selfSend',
        name: '自动下拨管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selfSend/index'),

        meta: { title: '自动下拨管理' },
        children: [
          {
            path: 'tasks',
            meta: { title: '自动下拨任务管理' },
            name: 'tasks',
            component: () =>
              import('@/views/fundsManagement/selfSend/pages/tasks')
          }
        ]
      },
      {
        path: 'manualSend',
        name: '手动下拨管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/manualSend/index'),

        meta: { title: '手动下拨管理' },
        children: [
          {
            path: 'fundsSend',
            meta: { title: '手动资金下拨' },
            name: 'fundsSend',
            component: () =>
              import('@/views/fundsManagement/manualSend/pages/fundsSend')
          }
        ]
      },
      {
        path: 'selectSend',
        name: '资金下拨查询',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selectSend/index'),

        meta: { title: '资金下拨查询' },
        children: [
          {
            path: 'selectInfo',
            meta: { title: '下拨信息查询' },
            name: 'selectInfo',
            component: () =>
              import('@/views/fundsManagement/selectSend/pages/selectInfo')
          }
        ]
      }
    ]
  },
  // 内部金融
  {
    path: '/internalFinance',
    component: Layout,
    redirect: '/internalFinance/basicSetting',
    name: '内部金融',
    meta: { title: '内部金融', icon: '内部金融' },
    children: [
      {
        path: 'basicSetting',
        name: '基础设置',
        component: () => import('@/views/internalFinance/basicSetting/index'),
        redirect: '/internalFinance/basicSetting/interestRateSet',
        meta: { title: '基础设置' },
        children: [
          {
            path: 'interestRateSet',
            component: () =>
              import(
                '@/views/internalFinance/basicSetting/interestRateSet/index'
              ),
            name: '利率设置',
            meta: { title: '利率设置' }
          },
          {
            path: 'interestRatePlan',
            component: () =>
              import(
                '@/views/internalFinance/basicSetting/interestRatePlan/index'
              ),
            name: '利率计划',
            meta: { title: '利率计划' }
          }
        ]
      },
      {
        path: 'internalAccountManager',
        name: '内部账户管理',
        component: () =>
          import('@/views/internalFinance/internalAccountManager/index'),
        meta: { title: '内部账户管理' },
        children: [
          {
            path: 'openManager',
            component: () =>
              import(
                '@/views/internalFinance/internalAccountManager/openManager/index'
              ),
            name: '开户管理',
            meta: { title: '开户管理' }
          },
          {
            path: 'updateManager',
            component: () =>
              import(
                '@/views/internalFinance/internalAccountManager/updateManager/index'
              ),
            name: '变更管理',
            meta: { title: '变更管理' }
          },
          {
            path: 'accountCancellation',
            component: () =>
              import(
                '@/views/internalFinance/internalAccountManager/accountCancellation/index'
              ),
            name: '销户管理',
            meta: { title: '销户管理' }
          },
          {
            path: 'internalCurrentInterest',
            component: () =>
              import(
                '@/views/internalFinance/internalAccountManager/internalCurrentInterest/index'
              ),
            name: '内部活期计息',
            meta: { title: '内部活期计息' }
          }
        ]
      },
      {
        path: 'internalFixedDeposit',
        name: '内部定期存款',
        component: () =>
          import('@/views/internalFinance/internalFixedDeposit/index'),
        meta: { title: '内部定期存款' },
        children: [
          {
            path: 'internalDepositOpening',
            component: () =>
              import(
                '@/views/internalFinance/internalFixedDeposit/internalDepositOpening/index'
              ),
            name: '内部存款开立',
            meta: { title: '内部存款开立' }
          },
          {
            path: 'internalOpeningConfirm',
            component: () =>
              import(
                '@/views/internalFinance/internalFixedDeposit/internalOpeningConfirm/index'
              ),
            name: '内部开立确认',
            meta: { title: '内部开立确认' }
          },
          {
            path: 'internalDepositWithdrawal',
            component: () =>
              import(
                '@/views/internalFinance/internalFixedDeposit/internalDepositWithdrawal/index'
              ),
            name: '内部存款支取',
            meta: { title: '内部存款支取' }
          },
          {
            path: 'internalDepositWithdrawalConfirm',
            component: () =>
              import(
                '@/views/internalFinance/internalFixedDeposit/internalDepositWithdrawalConfirm/index'
              ),
            name: '内部支取确认',
            meta: { title: '内部支取确认' }
          },
          {
            path: 'internalFixedCalculation',
            component: () =>
              import(
                '@/views/internalFinance/internalFixedDeposit/internalFixedCalculation/index'
              ),
            name: '内部定期利息匡算',
            meta: { title: '内部定期利息匡算' }
          }
        ]
      },
      {
        path: 'statisticalQuery',
        name: '统计查询',
        component: () =>
          import('@/views/internalFinance/statisticalQuery/index'),
        meta: { title: '统计查询' },
        children: [
          {
            path: 'accountQuery',
            component: () =>
              import(
                '@/views/internalFinance/statisticalQuery/accountQuery/index'
              ),
            name: '账户信息查询s',
            meta: { title: '账户信息查询' }
          },
          {
            path: 'insideQuery',
            component: () =>
              import(
                '@/views/internalFinance/statisticalQuery/insideQuery/index'
              ),
            name: '内部贷款查询',
            meta: { title: '内部贷款查询' }
          },
          {
            path: 'transactionQuery',
            component: () =>
              import(
                '@/views/internalFinance/statisticalQuery/transactionQuery/index'
              ),
            name: '交易信息查询',
            meta: { title: '交易信息查询' }
          }
        ]
      },
      {
        path: 'internalLoan',
        name: '内部贷款',
        component: () => import('@/views/internalFinance/internalLoan/index'),
        redirect: '/internalFinance/internalLoan/jkhtlr',
        meta: { title: '内部贷款' },
        children: [
          {
            path: 'jkhtlr',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkhtlr/index'),
            name: '借款合同录入',
            meta: { title: '借款合同录入' }
          },
          {
            path: 'jkhtfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkhtfh/index'),
            name: '借款合同复核',
            meta: { title: '借款合同复核' }
          },
          {
            path: 'jkfklr',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkfklr/index'),
            name: '借款放款录入',
            meta: { title: '借款放款录入' }
          },
          {
            path: 'jkfkfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkfkfh/index'),
            name: '借款放款复核',
            meta: { title: '借款放款复核' }
          },
          {
            path: 'jkhkjh',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkhkjh/index'),
            name: '借款还款计划',
            meta: { title: '借款还款计划' }
          },
          {
            path: 'jkhkcl',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkhkcl/index'),
            name: '借款还款处理',
            meta: { title: '借款还款处理' }
          },
          {
            path: 'jkhkfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/jkhkfh/index'),
            name: '借款还款复核',
            meta: { title: '借款还款复核' }
          },
          {
            path: 'lltz',
            component: () =>
              import('@/views/internalFinance/internalLoan/lltz/index'),
            name: '利率调整',
            meta: { title: '利率调整' }
          },
          {
            path: 'lltzfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/lltzfh/index'),
            name: '利率调整复核',
            meta: { title: '利率调整复核' }
          },
          {
            path: 'yqlr',
            component: () =>
              import('@/views/internalFinance/internalLoan/yqlr/index'),
            name: '逾期录入',
            meta: { title: '逾期录入' }
          },
          {
            path: 'yqfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/yqfh/index'),
            name: '逾期复核',
            meta: { title: '逾期复核' }
          },
          {
            path: 'zqlr',
            component: () =>
              import('@/views/internalFinance/internalLoan/zqlr/index'),
            name: '展期录入',
            meta: { title: '展期录入' }
          },
          {
            path: 'zqfh',
            component: () =>
              import('@/views/internalFinance/internalLoan/zqfh/index'),
            name: '展期复核',
            meta: { title: '展期复核' }
          },
          {
            path: 'nbjkks',
            component: () =>
              import('@/views/internalFinance/internalLoan/nbjkks/index'),
            name: '内部借款匡算',
            meta: { title: '内部借款匡算' }
          }
        ]
      }
    ]
  },
  // 报表中心
  {
    path: '/form',
    component: Layout,
    redirect: '/form/companyInfo',
    name: '报表中心s',
    meta: { title: '报表中心', icon: '报表' },
    children: [
      {
        path: 'companyInfo',
        meta: { title: '单位基本信息表' },
        name: 'CompanyInfos',
        component: () => import('@/views/form/companyInfo/index')
      },
      {
        path: 'companyBalance',
        meta: { title: '单位账户余额统计表' },
        name: 'CompanyBalance',
        component: () => import('@/views/form/companyBalance/index')
      },
      {
        path: 'role',
        meta: { title: '用户角色' },
        name: 'Role',
        component: () => import('@/views/form/role/index')
      },
      {
        path: 'summary',
        meta: { title: '账户交易明细汇总表' },
        name: 'Summary',
        component: () => import('@/views/form/summary/index')
      },
      {
        path: 'flow',
        meta: { title: '银行账户余额流量表' },
        name: 'Flow',
        component: () => import('@/views/form/flow/index')
      },
      {
        path: 'analyse',
        meta: { title: '各行账户数量分析' },
        name: 'Analyse',
        component: () => import('@/views/form/analyse/index')
      }
    ]
  },
  // 对账管理
  {
    path: '/f',
    component: Layout,
    redirect: '/fundsManagem/sea',
    name: '对账管理',
    meta: {  icon: '对账管理' },
    children:[
      {
        path: 'sea',
        meta: { title: '对账管理' },
        name: 'c',
        component: () => import('@/views/f/index')
      }
    ]
  },
  
  // 操作帮助
  {
    path: '/fa',
    component: Layout,
    redirect: '/fa/s',
    name: '操作帮助',
    meta: {  icon: '操作帮助' },
    children:[
      {
        path: 's',
        meta: { title: '操作帮助' },
        name: 'co',
        component: () => import('@/views/f/index')
      }
    ]
  },
  // 资金监控
  {
    path: '/fae',
    component: Layout,
    redirect: '/fae/s',
    name: '资金监控',
    meta: {  icon: '监控' },
    children:[
      {
        path: 's',
        meta: { title: '资金监控' },
        name: 'com',
        component: () => import('@/views/f/index')
      }
    ]
  },
  // 融资管理
  {
    path: '/fun',
    component: Layout,
    redirect: '/fun/set',
    name: '融资管理',
    meta: {  icon: '形状结合' },
    children:[
      {
        path: 'set',
        meta: { title: '融资管理' },
        name: 'comp',
        component: () => import('@/views/f/index')
      }
    ]
  },
  // 投资管理
  {
    path: '/fund',
    component: Layout,
    redirect: '/fund/colle',
    name: '投资管理',
    meta: {  icon: '投资管理' },
    children:[
      {
        path: 'colle',
        meta: { title: '投资管理' },
        name: 'compa',
        component: () => import('@/views/f/index')
      }
    ]
  },
  // 票据管理
  {
    path: '/ma',
    component: Layout,
    redirect: '/ma/tion',
    name: '票据管理',
    meta: {  icon: '票据' },
    children:[
      {
        path: 'tion',
        meta: { title: '票据管理' },
        name: 'compay',
        component: () => import('@/views/f/index')
      }
    ]
  },
  // 银企平台
  {
    path: '/manafe',
    component: Layout,
    redirect: '/manafe/sstads',
    name: '银企平台',
    meta: {  icon: '平台' },
    children:[
      {
        path: 'sstads',
        meta: { title: '银企平台' },
        name: 'i',
        component: () => import('@/views/f/index')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = []

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
