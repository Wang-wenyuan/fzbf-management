import http from './../../../base/api/public'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.fzbfApiUrlPre;
export const page_list = (page,size,params)=>{
  return http.requestQuickGet(apiUrl+'/user/list/'+page+'/'+size)
}