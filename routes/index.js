var express = require('express');
var session = require('express-session');

var request = require('request');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express1',indexO:{"id": 1} });


// });

router.get('/', function (req, res, next) {
    console.log('================start 拦截器 ====');
    console.log('拦截器');
    console.log('===============end=====');
    express.use(session({
        name: 'hch',
        psw: '123'
    }));
    console.log(req.session.name);
    //数据
    var data = {
        title: 'Map',
        time: (new Date).toString(),
        list: [
            {
                id: '1',
                name: '张三'
            },
            {
                id: '2',
                name: '李四'
            }
        ]
    };
    //渲染模板
    res.render('index/index', data);
});

module.exports = router;
