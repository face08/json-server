module.exports = function write(db) {
  return (req, res, next) => {
    db.write() // 写回文件
    next()
  }
}
