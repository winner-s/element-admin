import axios from "axios";
// import store from '@/store'
import router from "../router";
import { Loading } from "element-ui"; //引用element-ui的加载提示组件
import store from "@/store";
import crypto from "crypto";
let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "努力加载中……",
    background: "rgba(0, 0, 0, 0.1)"
  });
}

function endLoading() {
  loading.close();
}
// loading互不冲突调用
let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}

// 默认超时设置
/* eslint-disable */

// axios.defaults.timeout = 60000 * 10
axios.defaults.timeout = 60000 * 2
// 相对路径设置
axios.defaults.baseURL = ''
// loading图

// ASCII排序
// eslint-disable-next-line camelcase
let sort_ascii = (obj) => {
  let arr = []
  let num = 0
  for (let i in obj) {
    arr[num] = i
    num++
  }
  let sortArr = arr.sort()
  // let sortObj = {};    //完成排序值
  let str = '' // 自定义排序字符串
  for (let i in sortArr) {
    str += sortArr[i] + '=' + obj[sortArr[i]] + '&'
    // sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  // 去除两侧字符串
  let char = '&'
  str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')

  return str
  // return sortObj;
}

// md5加密
let setMd5 = (password) => {
  let md5 = crypto.createHash('md5')
  md5.update(password)// this.pw2这是你要加密的密码
  let pw = md5.digest('hex')// this.pw这就是你加密完的密码，这个往后台传就行了
  return pw
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    
    // 判断ie加时间戳防止不请求接口
    if (window.ActiveXObject || 'ActiveXObject' in window) {
      config.url = `${config.url}?time=${new Date().getTime()}`
    }
    showFullScreenLoading()

    
    if (  config.url !== "/api/gene/web/admin/getSessionId") {
      
        // 获取随机数
        let nonce = Math.floor(Math.random() * (100 - 1)) + 1
        // 获取当前日期的时间戳
        let timestamp = new Date().getTime()
        let sign = ''
        // let nonce = 74;
        // let timestamp = 1594721284449;
        


        let list = {
          sessionId: store.getters.sessionId,
          secretKey: store.getters.secretKey,
          nonce: nonce,
          timestamp: timestamp
        }
        let formdata = new FormData();

        if(config.method == "post"){
          
          for (let item in config.data) {
            
            
            if(config.data[item] == "" || config.data[item] == null || config.data[item] == undefined ){

            }else{
              list[item] = config.data[item]
              formdata.append(item,config.data[item]);
            }
            
           
          }
          config.data = formdata;
        }else if(config.method=="get"){
          let formdata = []
          for (let item in config.params) {
            
              
            if(config.params[item] === "" || config.params[item] === null || config.params[item] === undefined ){

            }else{
              list[item] = config.params[item]
              formdata.push(item,config.params[item]);
            }
            
          }
          config.data = formdata;
        }

       
        sign = sort_ascii(list)
        console.log(sign)
        sign = setMd5(sign)
        console.log(sign)
        sign = sign.toUpperCase()
        console.log(sign)
        let data = {}
        data.sign = sign
        data.nonce = nonce
        data.timestamp = timestamp
        data.sessionId = store.getters.sessionId
        
        

       
        config.headers = {
          'sign':data.sign,
          'nonce':data.nonce,
          'timestamp':data.timestamp,
          'sessionId':data.sessionId
        }
        
    }else{
      
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    return response
  },
  error => {
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)

/**
 * 封装upload方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function upload (url, data={}) {
  return new Promise((resolve, reject) => {
      axios.post(url,data )
      .then(response => {
         if (response.data.msg == 'token失效，请重新登录'){
          router.push({name:"login"});
        }
        if(response.data.code == 200){
          resolve(response.data.data)
        }else{
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        this.$message({
          message: '请求失败！请检查网络',
          type: 'warning'
        })
      })
  })
}

/**
 * 封装export方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function exportExcel (url, data={},stringName='excel') {
  return new Promise((resolve, reject) => {
      axios.post(url,data,{responseType:'blob'})
      .then(response => {
        console.log(response)
          let fileName=response.headers["content-disposition"].split(";")[1].split("=");  //filename名称截取
          console.log(fileName)
          if(window.navigator.msSaveBlob){
            window.navigator.msSaveBlob(response.data,"订单信息.xls");
          }
          let url = window.URL.createObjectURL(response.data); //表示一个指定的file对象或Blob对象
          let a = document.createElement("a"); 
          document.body.appendChild(a);
          a.href = url;
          a.download = "订单信息.xls"; //命名下载名称
          a.click(); //点击触发下载  
          window.URL.revokeObjectURL(url);  //下载完成进行释放
          document.body.removeChild(a)
      })
      .catch(err => {
        console.log(err)
        reject(err)
        if(window.navigator.msSaveBlob){
          window.console.log('IE')
        }else{
          this.$message({
            message: '请求失败！请检查网络',
            type: 'warning'
          })
        }
      
      })
  })
}
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    return  axios.get(url, {
      params: params
    })
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
       router.push({name:"login"});
     }
     
     if(response.data.status ==true){
       resolve(response.data.data)
     }else if(response.data.data.errorCode==="10005" ||  response.data.data.errorCode==="10004" ){
      this.$message({
        message: '登录状态过期，请重新登录！',
        type: 'warning'
      })  
      store.dispatch("user/delToken");
      store.dispatch("permission/delIsFindRouter");
      router.push({name:"login"})
     }else{
       this.$message({
         message: response.data.data.errorMsg,
         type: 'warning'
       })
     }
   })
      .catch(err => {
        console.log(err)
        reject(err)
        this.$message({
          message: '请求失败！请检查网络',
          type: 'warning'
        })
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.status ==true){
       if(response.data.data.errorMsg !== undefined && response.data.data.errorMsg !== null && response.data.data.errorMsg !== ''){
        this.$message({
          message: response.data.data.errorMsg,
          type: 'success'
        })
       }
       resolve(response.data.data)
     }else if(response.data.data.errorCode==="10005" ||  response.data.data.errorCode==="10004" ){
      this.$message({
        message: '登录状态过期，请重新登录！',
        type: 'warning'
      })    
      store.dispatch("user/delToken");
      store.dispatch("permission/delIsFindRouter");
      router.push({name:"login"})
     }else{
       this.$message({
         message: response.data.data.errorMsg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.code ==200){
       resolve(response.data.data)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,{data:data})
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.code ==200){
       resolve(response.data.data)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}

/* eslint-disable */
