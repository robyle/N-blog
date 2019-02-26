////3.2
// const express = require('express')
// const router = express.Router()

// router.get('/:name', function (req, res) {
//   res.send('hello, ' + req.params.name)
// })

// module.exports = router


////3.3
const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.render('users', {
    name: req.params.name
  })
})

module.exports = router