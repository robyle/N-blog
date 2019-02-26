////简单的启动express 站点服务
// const express = require('express')
// const app = express()

// app.get('/',function(req,res){
// 	res.send('Hello, Express!')
// })

// app.listen(3000)

// console.log('Express Starting ...')

////路由引用文件路径
// const express = require('express')
// const app = express()
// const indexRouter = require('./routes/index')
// const userRouter = require('./routes/users')

// app.use('/', indexRouter)
// app.use('/users', userRouter)

// app.listen(3000)


const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)