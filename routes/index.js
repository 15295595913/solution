var express = require('express');
var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
var request = require('request');

var router = express.Router();

var app = express();
/* GET home page. */
// router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express1',indexO:{"id": 1} });


// });
app.use(session({
    secret: 'hubwiz app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30} ,// 过期时间（毫秒）
    name: 'hch'
}));


router.get('/', function (req, res, next) {

    res.send('hello, session id:' + res.session + ' count:');
    // console.log(res.session);
    //数据
    // var data = {
    //     title: 'Map',
    //     time: (new Date).toString(),
    //     list: [
    //         {
    //             id: '1',
    //             name: '张三'
    //         },
    //         {
    //             id: '2',
    //             name: '李四'
    //         }
    //     ]
    // };
    // //渲染模板
    // res.render('index/index', data);
});

module.exports = router;
