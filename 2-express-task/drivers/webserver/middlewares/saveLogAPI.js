const { addLog } = require('../../../data-access/log')
module.exports = async (req) => {
  await addLog({
    endpoint: req.route.path,
    createdat: new Date(),
    parameters: req.query
  })
}