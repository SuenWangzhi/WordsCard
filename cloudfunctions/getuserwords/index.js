// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const UserWords = db.collection('UserWords')
// 云函数入口函数
exports.main = async (event, context) => {
  const openid= cloud.getWXContext().OPENID
  return db.collection('UserWords').where({
    _openid:openid
  }).get()
}