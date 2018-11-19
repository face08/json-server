const bodyParser = require('body-parser')

// bodyParser 中间件
module.exports = [
  bodyParser.json({ limit: '10mb', extended: false }),
  bodyParser.urlencoded({ extended: false })
]
