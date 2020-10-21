import Vue from "vue";
import { post, get, del, put, upload, exportExcel } from "./index";
const _baseUrl = process.env.VUE_APP_URL;
/* eslint-disable */
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$put = put
Vue.prototype.$upload = upload
Vue.prototype.$exportExcel = exportExcel

// 登录  默认自带
const loginInURL = `${_baseUrl}/login`
export const loginInApi = function (json) {
  return Vue.prototype.$post(loginInURL, json)
}

//账号登录
const loginAdminURl = `${_baseUrl}/admin/loginAdmin`
export const loginAdmin = function (json) {
  return Vue.prototype.$post(loginAdminURl, json)
}

//添加用户
const addAdminURL = `${_baseUrl}/admin/addAdmin`
export const addAdmin = function (json) {
  return Vue.prototype.$post(addAdminURL, json)
}


//用户注销
const logoutAdminURL = `${_baseUrl}/admin/logoutAdmin`
export const logoutAdmin = function (json) {
  return Vue.prototype.$post(logoutAdminURL, json)
}

//获取sessionId及服务端公钥
const getSessionIdURL = `${_baseUrl}/admin/getSessionId`
export const getSessionId = function (json) {
  return Vue.prototype.$get(getSessionIdURL, json)
}

//更新账号信息
const updateAdminURL = `${_baseUrl}/admin/updateAdmin`
export const updateAdmin = function (json) {
  return Vue.prototype.$post(updateAdminURL, json)
}

//修改账号状态(停用/启用)
const updateAdminStatusURL = `${_baseUrl}/admin/updateAdminStatus`
export const updateAdminStatus = function (json) {
  return Vue.prototype.$post(updateAdminStatusURL, json)
}

//分页显示账号
const selectAdminPageURL = `${_baseUrl}/admin/selectAdminPage`
export const selectAdminPage = function (json) {
  return Vue.prototype.$get(selectAdminPageURL, json)
}

//添加角色
const addRoleURL = `${_baseUrl}/role/addRole`
export const addRole = function (json) {
  return Vue.prototype.$post(addRoleURL, json)
}

//更新角色
const updateRoleURL = `${_baseUrl}/role/updateRole`
export const updateRole = function (json) {
  return Vue.prototype.$post(updateRoleURL, json)
}

//分页显示角色
const selectRolePageURL = `${_baseUrl}/role/selectRolePage`
export const selectRolePage = function (json) {
  return Vue.prototype.$get(selectRolePageURL, json)
}

//查看角色权限
const selectRolePermissionURL = `${_baseUrl}/role/selectRolePermission`
export const selectRolePermission = function (json) {
  return Vue.prototype.$get(selectRolePermissionURL, json)
}

//修改角色权限
const saveRolePermissionURL = `${_baseUrl}/role/saveRolePermission`
export const saveRolePermission = function (json) {
  return Vue.prototype.$post(saveRolePermissionURL, json)
}

//分页显示用户
const selectUserPageURL = `${_baseUrl}/user/selectUserPage`
export const selectUserPage = function (json) {
  return Vue.prototype.$get(selectUserPageURL, json)
}

//分页显示banner图
const selectBannerPageURL = `${_baseUrl}/banner/selectBannerPage`
export const selectBannerPage = function (json) {
  return Vue.prototype.$get(selectBannerPageURL, json)
}

//修改banner的显示状态
const updateBannerStatusURL = `${_baseUrl}/banner/updateBannerStatus`
export const updateBannerStatus = function (json) {
  return Vue.prototype.$post(updateBannerStatusURL, json)
}

//删除banner图
const deleteBannerURL = `${_baseUrl}/banner/deleteBanner`
export const deleteBanner = function (json) {
  return Vue.prototype.$post(deleteBannerURL, json)
}

//添加banner图
const addBannerURL = `${_baseUrl}/banner/addBanner`
export const addBanner = function (json) {
  return Vue.prototype.$post(addBannerURL, json)
}

//更新产品
const updateProductURL = `${_baseUrl}/product/updateProduct`
export const updateProduct = function (json) {
  return Vue.prototype.$post(updateProductURL, json)
}

//添加产品
const addProductURL = `${_baseUrl}/product/addProduct`
export const addProduct = function (json) {
  return Vue.prototype.$post(addProductURL, json)
}

//添加产品详情内容图片
const uploadProductContentFileURL = `${_baseUrl}/product/uploadProductContentFile`
export const uploadProductContentFile = function (json) {
  return Vue.prototype.$post(uploadProductContentFileURL, json)
}

//删除产品
const deleteProductURL = `${_baseUrl}/product/deleteProduct`
export const deleteProduct = function (json) {
  return Vue.prototype.$post(deleteProductURL, json)
}

//修改产品状态[上架/下架]
const updateProductStatusURL = `${_baseUrl}/product/updateProductStatus`
export const updateProductStatus = function (json) {
  return Vue.prototype.$post(updateProductStatusURL, json)
}

//分页显示产品
const selectProductPageURL = `${_baseUrl}/product/selectProductPage`
export const selectProductPage = function (json) {
  return Vue.prototype.$get(selectProductPageURL, json)
}

//分页显示产品
const uploadProductImgUrl = `${_baseUrl}/product/uploadProductImgurl`
export const uploadProductImgurl = function (json) {
  return Vue.prototype.$post(uploadProductImgUrl, json)
}


//显示所有角色
const selectRoleAllURL = `${_baseUrl}/role/selectRoleAll`
export const selectRoleAll = function (json) {
  return Vue.prototype.$get(selectRoleAllURL, json)
}

//删除账号
const deleteAdminURL = `${_baseUrl}/admin/deleteAdmin`
export const deleteAdmin = function (json) {
  return Vue.prototype.$post(deleteAdminURL, json)
}

//分页显示订单详情
const selectOrderPageURL = `${_baseUrl}/order/selectOrderPage`
export const selectOrderPage = function (json) {
  return Vue.prototype.$get(selectOrderPageURL, json)
}

//删除角色
const deleteRoleURL = `${_baseUrl}/role/deleteRole`
export const deleteRole = function (json) {
  return Vue.prototype.$post(deleteRoleURL, json)
}

//权限树
const selectPermissionAllURL = `${_baseUrl}/permission/selectPermissionAll`
export const selectPermissionAll = function (json) {
  return Vue.prototype.$get(selectPermissionAllURL, json)
}

//更新用户密码
const updateAdminPasswordURL = `${_baseUrl}/admin/updateAdminPassword`
export const updateAdminPassword = function (json) {
  return Vue.prototype.$post(updateAdminPasswordURL, json)
}

 // 导出订单信息 
 const exportOrderURL =  `${_baseUrl}/order/exportOrder`
 export const exportOrder = function (json,excelName) {
   return Vue.prototype.$exportExcel(exportOrderURL,json,excelName)
 }


  // 获取首页统计数据 
  const getIndexDataURL =  `${_baseUrl}/admin/getIndexData`
  export const expogetIndexDatartOrder = function (json,excelName) {
    return Vue.prototype.$get(getIndexDataURL,json,excelName)
  }



