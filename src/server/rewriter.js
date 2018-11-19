const express = require('express')
const rewrite = require('express-urlrewrite')

module.exports = routes => {
  const router = express.Router()

  // __rules 返回所有路由
  router.get('/__rules', (req, res) => {
    res.json(routes)
  })

  // 路由 重定向
  Object.keys(routes).forEach(key => {
    router.use(rewrite(key, routes[key]))
  })

  return router
}
