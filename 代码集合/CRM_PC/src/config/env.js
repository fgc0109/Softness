// 配置编译环境和线上环境之间的切换

const env = process.env
const baseUrl = ''
const imgBaseUrl = '//static-tst.wotao.com/'
// 图表库为avue和pig2套地址
const iconfontVersion = ['667895_v7uduh4zui','1638883_38cl38o35i2','26d8f168b49c-2070134']
const iconfontUrl = '//at.alicdn.com/t/font_$key.css'
const codeUrl = `${window.location.origin}/code`
const actUrl = `${window.location.origin}/act/modeler.html?modelId=`
if (env.NODE_ENV === 'development') {

} else if (env.NODE_ENV === 'production') {

} else if (env.NODE_ENV === 'test') {

}
export {
  baseUrl,
  imgBaseUrl,
  actUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env,
}
