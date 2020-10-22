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
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/form/select',
    name: '报表中心',
    meta: { title: '报表中心', icon: 'form' },
    children: [
      {
        path: 'select',
        name: '报表查询',
        redirect: '/form/select/companyInfo',
        component: () => import('@/views/form/select/index'),
        meta: { title: '报表查询' },
        children: [
          {
            path: 'companyInfo',
            meta: { title: '单位基本信息表' },
            name: 'CompanyInfo',
            component: () => import('@/views/form/select/companyInfo/index')
          },
          {
            path: 'companyBalance',
            meta: { title: '单位账户余额统计表' },
            name: 'CompanyBalance',
            component: () => import('@/views/form/select/companyBalance/index')
          },
          {
            path: 'role',
            meta: { title: '用户角色' },
            name: 'Role',
            component: () => import('@/views/form/select/role/index')
          },
          {
            path: 'summary',
            meta: { title: '账户交易明细汇总表' },
            name: 'Summary',
            component: () => import('@/views/form/select/summary/index')
          },
          {
            path: 'flow',
            meta: { title: '银行账户余额流量表' },
            name: 'Flow',
            component: () => import('@/views/form/select/flow/index')
          },
          {
            path: 'analyse',
            meta: { title: '各行账户数量分析' },
            name: 'Analyse',
            component: () => import('@/views/form/select/analyse/index')
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
