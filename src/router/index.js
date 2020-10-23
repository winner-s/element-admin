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
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/accountManager',
    component: Layout,
    redirect: '/accountManager/openManager',
    name: '账号管理',
    meta: { title: '账号管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'openManager',
        name: '开户管理',
        component: () => import('@/views/accountManager/openManager/index'),
        meta: { title: '开户管理', icon: 'table' },
        children: [
          {
            path: '开户申请',
            component: () => import('@/views/accountManager/openManager/accountOpen/index'),
            name: '开户申请',
            meta: { title: '开户申请' }
          },
          {
            path: '开户补录',
            component: () => import('@/views/accountManager/openManager/accountOpenSupplement/index'),
            name: '开户补录',
            meta: { title: '开户补录' }

          },
          {
            path: '开户复核',
            component: () => import('@/views/accountManager/openManager/accountOpenReview/index'),
            name: '开户复核',
            meta: { title: '开户复核' }
          }
        ]
      },
      {
        path: 'changeManager',
        name: '变更管理',
        component: () => import('@/views/accountManager/changeManager/index'),
        meta: { title: '变更管理', icon: 'tree' },
        children: [
          {
            path: '变更申请',
            component: () => import('@/views/accountManager/changeManager/changeOpen/index'),
            name: '变更申请',
            meta: { title: '变更申请' }
          },

          {
            path: '变更复核',
            component: () => import('@/views/accountManager/changeManager/changeReview/index'),
            name: '变更复核',
            meta: { title: '变更复核' }
          }
        ]
      },
      {
        path: 'cancellationManager',
        name: '销户管理',
        component: () => import('@/views/accountManager/cancellationManager/index'),
        meta: { title: '销户管理', icon: 'tree' },
        children: [
          {
            path: '销户申请',
            component: () => import('@/views/accountManager/cancellationManager/cancellationOpen/index'),
            name: '销户申请',
            meta: { title: '销户申请' }
          },

          {
            path: '销户复核',
            component: () => import('@/views/accountManager/cancellationManager/cancellationReview/index'),
            name: '销户复核',
            meta: { title: '销户复核' }
          }
        ]
      },
      {
        path: 'inquiryManager',
        name: '账户查询',
        component: () => import('@/views/accountManager/inquiryManager/index'),
        meta: { title: '账户查询', icon: 'tree' },
        children: [
          {
            path: '账户信息查询',
            component: () => import('@/views/accountManager/inquiryManager/inquirySelect/index'),
            name: '账户信息查询',
            meta: { title: '账户信息查询' }
          },

          {
            path: '当日余额查询',
            component: () => import('@/views/accountManager/inquiryManager/balanceSelect/index'),
            name: '当日余额查询',
            meta: { title: '当日余额查询' }
          },

          {
            path: '当日交易查询',
            component: () => import('@/views/accountManager/inquiryManager/transactionSelect/index'),
            name: '当日交易查询',
            meta: { title: '当日交易查询' }
          },

          {
            path: '历史余额查询',
            component: () => import('@/views/accountManager/inquiryManager/historyBalanceSelect/index'),
            name: '历史余额查询',
            meta: { title: '历史余额查询' }
          },

          {
            path: '历史交易查询',
            component: () => import('@/views/accountManager/inquiryManager/historyTransactionSelect/index'),
            name: '历史交易查询',
            meta: { title: '历史交易查询' }
          }
        ]
      },
      {
        path: 'BankInterface',
        name: '银企接口',
        component: () => import('@/views/accountManager/BankInterface/index'),
        meta: { title: '银企接口', icon: 'tree' },
        children: [
          {
            path: '直联账户历史交易导入',
            component: () => import('@/views/accountManager/BankInterface/directAccountHistorical/index'),
            name: '直联账户历史交易导入',
            meta: { title: '直联账户历史交易导入' }
          },

          {
            path: '直联账户即时余额查询',
            component: () => import('@/views/accountManager/BankInterface/directAcountBalance/index'),
            name: '直联账户即时余额查询',
            meta: { title: '直联账户即时余额查询' }
          },

          {
            path: '直联账户即时交易查询',
            component: () => import('@/views/accountManager/BankInterface/directAccountTransaction/index'),
            name: '直联账户即时余额查询',
            meta: { title: '直联账户即时余额查询' }
          },

          {
            path: '非直联账户历史数据导入',
            component: () => import('@/views/accountManager/BankInterface/noDirectAccountHistorical/index'),
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
    meta: { title: '结算管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'privatePayment',
        name: '对私付款',
        component: () => import('@/views/settlementManager/privatePayment/index'),
        meta: { title: '对私付款', icon: 'table' },
        children: [
          {
            path: 'paymentApplication',
            component: () => import('@/views/settlementManager/privatePayment/paymentApplication/index'),
            name: '对私付款申请',
            meta: { title: '对私付款申请' }
          },
          {
            path: 'paymentReview',
            component: () => import('@/views/settlementManager/privatePayment/paymentReview/index'),
            name: '对私付款复核',
            meta: { title: '对私付款复核' }

          },
          {
            path: 'paymentInstruction',
            component: () => import('@/views/settlementManager/privatePayment/paymentInstruction/index'),
            name: '对私付款指令发送',
            meta: { title: '对私付款指令发送' }
          },
          {
            path: 'paymentConfim',
            component: () => import('@/views/settlementManager/privatePayment/paymentConfim/index'),
            name: '对私非直联支付确认',
            meta: { title: '对私非直联支付确认' }
          }
        ]
      },
      {
        path: 'corporatePayment',
        name: '对公付款',
        component: () => import('@/views/settlementManager/corporatePayment/index'),
        meta: { title: '对私付款', icon: 'table' },
        children: [
          {
            path: 'paymentApplication',
            component: () => import('@/views/settlementManager/corporatePayment/paymentApplication/index'),
            name: '对公付款申请',
            meta: { title: '对公付款申请' }
          },
          {
            path: 'paymentReview',
            component: () => import('@/views/settlementManager/corporatePayment/paymentReview/index'),
            name: '对公付款复核',
            meta: { title: '对公付款复核' }

          },
          {
            path: 'paymentInstruction',
            component: () => import('@/views/settlementManager/corporatePayment/paymentInstruction/index'),
            name: '对公付款指令发送',
            meta: { title: '对公付款指令发送' }
          },
          {
            path: 'paymentConfim',
            component: () => import('@/views/settlementManager/corporatePayment/paymentConfim/index'),
            name: '对公非直联支付确认',
            meta: { title: '对公非直联支付确认' }
          }
        ]
      },
      {
        path: 'transferSameName',
        name: '同名划转',
        component: () => import('@/views/settlementManager/transferSameName/index'),
        meta: { title: '同名划转', icon: 'table' },
        children: [
          {
            path: 'transferApplication',
            component: () => import('@/views/settlementManager/transferSameName/transferApplication/index'),
            name: '同名划转申请',
            meta: { title: '同名划转申请' }
          },
          {
            path: 'transferReview',
            component: () => import('@/views/settlementManager/transferSameName/transferReview/index'),
            name: '同名划转复核',
            meta: { title: '同名划转复核' }

          },
          {
            path: 'transferInstruction',
            component: () => import('@/views/settlementManager/transferSameName/transferInstruction/index'),
            name: '同名划转指令发送',
            meta: { title: '同名划转指令发送' }
          },
          {
            path: 'transferConfim',
            component: () => import('@/views/settlementManager/transferSameName/transferConfim/index'),
            name: '同名划转非直联支付确认',
            meta: { title: '同名划转非直联支付确认' }
          }
        ]
      },
      {
        path: 'salaryPayment',
        name: '薪资代发',
        component: () => import('@/views/settlementManager/salaryPayment/index'),
        meta: { title: '薪资代发', icon: 'table' },
        children: [
          {
            path: 'transferApplication',
            component: () => import('@/views/settlementManager/salaryPayment/salaryPaymentImport/index'),
            name: '薪资代发导入',
            meta: { title: '薪资代发导入' }
          },
          {
            path: 'transferReview',
            component: () => import('@/views/settlementManager/salaryPayment/salaryPaymentAppliction/index'),
            name: '薪资代发申请',
            meta: { title: '薪资代发申请' }

          },
          {
            path: 'transferInstruction',
            component: () => import('@/views/settlementManager/salaryPayment/salaryPaymentReview/index'),
            name: '薪资代发复核',
            meta: { title: '薪资代发复核' }
          },
          {
            path: 'transferConfim',
            component: () => import('@/views/settlementManager/salaryPayment/salaryPaymentInstruction/index'),
            name: '薪资代发指令发送',
            meta: { title: '薪资代发指令发送' }
          }
        ]
      },
      {
        path: 'instructionManager',
        name: '指令管理',
        component: () => import('@/views/settlementManager/instructionManager/index'),
        meta: { title: '指令管理', icon: 'table' },
        children: [
          {
            path: 'transferApplication',
            component: () => import('@/views/settlementManager/instructionManager/instructionSync/index'),
            name: '指令同步',
            meta: { title: '指令同步' }
          },
          {
            path: 'transferReview',
            component: () => import('@/views/settlementManager/instructionManager/instructionUpdate/index'),
            name: '指令修改',
            meta: { title: '指令修改' }

          },
          {
            path: 'transferInstruction',
            component: () => import('@/views/settlementManager/instructionManager/instructionReview/index'),
            name: '指令复核',
            meta: { title: '指令复核' }
          }

        ]
      },
      {
        path: 'settlementInquiry',
        name: '结算查询',
        component: () => import('@/views/settlementManager/settlementInquiry/index'),
        meta: { title: '结算查询', icon: 'table' },
        children: [
          {
            path: 'paymentInquiry',
            component: () => import('@/views/settlementManager/settlementInquiry/paymentInquiry/index'),
            name: '付款申请查询',
            meta: { title: '付款申请查询' }
          },
          {
            path: 'instructionInquiry',
            component: () => import('@/views/settlementManager/settlementInquiry/instructionInquiry/index'),
            name: '付款指令查询',
            meta: { title: '付款指令查询' }

          }

        ]
      },
      {
        path: 'payeeMaintain',
        name: '收款人信息维护',
        component: () => import('@/views/settlementManager/payeeMaintain/index'),
        meta: { title: '收款人信息维护', icon: 'table' }

      },
      {
        path: 'tradeClaim',
        name: '交易认领',
        component: () => import('@/views/settlementManager/tradeClaim/index'),
        meta: { title: '交易认领', icon: 'table' },
        children: [
          {
            path: 'paymentInquiry',
            component: () => import('@/views/settlementManager/tradeClaim/systemMaintenance/index'),
            name: '交易认领系统维护',
            meta: { title: '交易认领系统维护' }
          },
          {
            path: 'ruleMaintenance',
            component: () => import('@/views/settlementManager/tradeClaim/ruleMaintenance/index'),
            name: '交易认领规则维护',
            meta: { title: '交易认领规则维护' }

          },
          {
            path: 'pushQuery',
            component: () => import('@/views/settlementManager/tradeClaim/pushQuery/index'),
            name: '推送查询',
            meta: { title: '推送查询' }

          },
          {
            path: 'entryConfirm',
            component: () => import('@/views/settlementManager/tradeClaim/entryConfirm/index'),
            name: '线下入账确认',
            meta: { title: '线下入账确认' }

          }

        ]
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/companyInfo',
    name: '报表中心',
    meta: { title: '报表中心', icon: 'form' },
    children: [
      {
        path: 'companyInfo',
        meta: { title: '单位基本信息表' },
        name: 'CompanyInfo',
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
  {
    path: '/fundsManagement',
    component: Layout,
    redirect: '/fundsManagement/setCollection',
    name: '资金池管理',
    meta: { title: '资金池管理', icon: 'form' },
    children: [
      {
        path: 'setCollection',
        name: '资金归集设置',
        component: () => import('@/views/fundsManagement/setCollection/index'),
        redirect: '/fundsManagement/setCollection/relation',
        meta: { title: '资金归集设置' },
        children: [
          {
            path: 'relation',
            meta: { title: '账户归集关系设置' },
            name: 'relation',
            component: () => import('@/views/fundsManagement/setCollection/pages/relation')
          },
          {
            path: 'condition',
            meta: { title: '自动归集条件设置' },
            name: 'condition',
            component: () => import('@/views/fundsManagement/setCollection/pages/condition')
          }
        ]
      },
      {
        path: 'selfCollsection',
        name: '自动归集管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selfCollsection/index'),
        redirect: '/fundsManagement/selfCollsection/task',
        meta: { title: '自动归集管理' },
        children: [
          {
            path: 'task',
            meta: { title: '自动归集任务管理' },
            name: 'task',
            component: () => import('@/views/fundsManagement/selfCollsection/pages/task')
          }
        ]
      },
      {
        path: 'manualCollsection',
        name: '手动归集管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/manualCollsection/index'),
        redirect: '/fundsManagement/manualCollsection/fundsCollsection',
        meta: { title: '手动归集管理' },
        children: [
          {
            path: 'fundsCollsection',
            meta: { title: '手动资金归集' },
            name: 'fundsCollsection',
            component: () => import('@/views/fundsManagement/manualCollsection/pages/fundsCollsection')
          }
        ]
      },
      {
        path: 'selectCollection',
        name: '资金归集查询',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selectCollection/index'),
        redirect: '/fundsManagement/selectCollection/selectInfo',
        meta: { title: '资金归集查询' },
        children: [
          {
            path: 'selectInfo',
            meta: { title: '归集信息查询' },
            name: 'selectInfo',
            component: () => import('@/views/fundsManagement/selectCollection/pages/selectInfo')
          }
        ]
      },
      {
        path: 'setFundsSend',
        name: '资金下拨设置',
        component: () => import('@/views/fundsManagement/setFundsSend/index'),
        redirect: '/fundsManagement/setFundsSend/accountRelation',
        meta: { title: '资金下拨设置' },
        children: [
          {
            path: 'accountRelation',
            meta: { title: '账户下拨关系设置' },
            name: 'accountRelation',
            component: () => import('@/views/fundsManagement/setFundsSend/pages/accountRelation')
          },
          {
            path: 'condition',
            meta: { title: '自动下拨条件设置' },
            name: 'condition',
            component: () => import('@/views/fundsManagement/setFundsSend/pages/condition')
          }
        ]
      },
      {
        path: 'selfSend',
        name: '自动下拨管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selfSend/index'),
        redirect: '/fundsManagement/selfSend/task',
        meta: { title: '自动下拨管理' },
        children: [
          {
            path: 'task',
            meta: { title: '自动下拨任务管理' },
            name: 'task',
            component: () => import('@/views/fundsManagement/selfSend/pages/task')
          }
        ]
      },
      {
        path: 'manualSend',
        name: '手动下拨管理',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/manualSend/index'),
        redirect: '/fundsManagement/manualSend/fundsSend',
        meta: { title: '手动下拨管理' },
        children: [
          {
            path: 'fundsSend',
            meta: { title: '手动资金下拨' },
            name: 'fundsSend',
            component: () => import('@/views/fundsManagement/manualSend/pages/fundsSend')
          }
        ]
      },
      {
        path: 'selectSend',
        name: '资金下拨查询',
        alwaysShow: true,
        component: () => import('@/views/fundsManagement/selectSend/index'),
        redirect: '/fundsManagement/selectSend/selectInfo',
        meta: { title: '资金下拨查询' },
        children: [
          {
            path: 'selectInfo',
            meta: { title: '下拨信息查询' },
            name: 'selectInfo',
            component: () => import('@/views/fundsManagement/selectSend/pages/selectInfo')
          }
        ]
      }
    ]

  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested',
      roles: ['admin']
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true, roles: ['admin'] }
      }
    ]
  }
]

const createRouter = () => new Router({
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
