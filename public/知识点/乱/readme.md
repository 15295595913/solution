再分享一个生活小贴士，一点科学依据都没有，但是神准。如果你喜欢一个人，你谁都不能告诉，你告诉的人一多你俩就好不上了。如果你想做一件事，做成之前也不要大肆宣扬，否则就很难做成了。大家回忆一下自己的人生，摸着胸口告诉我，情况是不是就是这个情况！


套用目标：
组件抽象化（知道功能但不知道视觉表现）
模块具体化（使零散无序的组件拼凑成合理顺畅的完整页面）
框架通用化（各个场景都可使用）

计划表格：
笔试题。（难点呀）
日常任务：
（1）整理知识。
（2）css每日练习
（3）js逻辑题每日练习




1、解决ajaxPost的乱码问题.(图)

- 原因：
- 前台utf-8-> java代码转换(request) -> java需要的Unicode字符集
-      后台java需要的Unicode字符集 -> java代码转换(response) ->前台需要的utf-8

2、nodeType

                        12种
    node.element_node(1)
    node.attribute_node(2)
    node.text_node(3)
    node.cdata_section_node(4)
    node.entity_reference_node(5)
    node.entity_node(6)
    node.processing_instruction_node(7)
    node.comment_node(8)
    node.document_node(9)
    node.document_type_node(10)
    node.document_fragmbnt_node(11)
    node.notation_node(12)
3、使用md解析cdn服务
http://www.bootcdn.cn/marked/

方式获取md内容。使用marked函数。

4、git相关知识

5、
数据可视化  【canvas】 svg vml
视频播放器	【Jplayer】

6、css专项练习。
  js逻辑题。
  jquery源码。

7、框架构思。

8、jquery的扩展

    (function ($) {
    Slide.renders = {
    "default": "<div class='p-Carousel'><div class='main'>" +
    "<section class='sectionLeft'><img style='width: 22px;height: 22px;display:block;' src='/Carousel/left.png'/></section>" +
    "<section class='sectionRight'><img style='width: 22px;height: 22px;display:block;' src='/Carousel/right.png'/></section>" +
    "<ul>" +
    "<li class='homePage-pics-title'><img src='/Carousel/sanwei.png' data='项目可视化平台' title='项目可视化平台'/></li>" +
    "<li class='HomePage-MapClick homePage-pics-title'><img src='/Carousel/map.png' data='项目地图' title='项目地图'/></li>" +
    "<li class='HomePage-MapClick homePage-pics-title'><img src='/Carousel/tubiao.png' data='决策支持平台' title='决策支持平台'/></li>" +
    "</ul>" +
    "<div id='HomePage-PTitle' style='position: absolute;bottom: -20px;width: 200px;width: 100%;height: 36px;background: #f4f9fb;text-align: center;line-height: 36px;color: black;font-size: 20px;font-weight: bold;'></div>" +
    "</div></div>"
    };
    // 创建构造函数
    function Slide(ele, options) {
    var self = this;
    this.body = $("body");
    this.$ele = $(ele)//this. 构造函数的实例对象
    this.options = $.extend({
    speed: 1000,
    delay: 3000
    }, options)//拓展
    
    
    
    
    var jParent = $(options.wrap);
    var renderHtml = juicer(Slide.renders['default'], {name: 'hello22s'});
    console.log(renderHtml);
    jParent.html(renderHtml);
    
    
    this.reset();
    this.play();
    $(window).resize(function() {
    self.reset();
    });
    
    }
    
    
    Slide.prototype = {
    reset: function () {
    var centerWidth, rightWidth;
    var width1, height1;
    var width2, height2;
    
    
    if (parseInt(this.body.outerWidth()) > 1440) {
    $('.p-Carousel').width(1366);
    $('.p-Carousel .main').height(360);
    $('.p-Carousel .main .sectionLeft').css({
    left: 200,
    top: 372
    });
    $('.p-Carousel .main .sectionRight').css({
    right: 200,
    top: 372
    });
    centerWidth = 190;
    rightWidth = 622;
    width1 = 755;
    height1 = 266;
    width2 = 979;
    height2 = 363;
    } else if (parseInt(this.body.outerWidth()) > 1255 || navigator.userAgent.indexOf('iPad') !== -1) {
    $('.p-Carousel').width(1190);
    $('.p-Carousel .main').height(306);
    $('.p-Carousel .main .sectionLeft').css({
    left: 200,
    top: 314
    });
    $('.p-Carousel .main .sectionRight').css({
    right: 200,
    top: 314
    });
    
    centerWidth = 156;
    rightWidth = 565;
    width1 = 636;
    height1 = 236;
    width2 = 880;
    height2 = 300;
    
    }
    else {
    $('.p-Carousel').width(960);
    $('.p-Carousel .main-pics').height(280);
    $('.p-Carousel .main .sectionLeft').css({
    left: 200,
    top: 288
    });
    $('.p-Carousel .main .sectionRight').css({
    right: 200,
    top: 288
    });
    centerWidth = 160;
    rightWidth = 339;
    width1 = 630;
    height1 = 212;
    width2 = 638;
    height2 = 276;
    }
    this.states = [
    // { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 },
    // { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },
    // { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 },
    // { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },
    // { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 }
    // { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },
    // { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }
    {'&zIndex': 3, width: width1, height: height1, top: 37, left: 0, $opacity: 0.7},
    {'&zIndex': 4, width: width2, height: height2, top: 0, left: centerWidth, $opacity: 1},
    // { '&zIndex': 3, width: 170, height: 218, top: 37, left: 830, $opacity: 0.7 }
    {'&zIndex': 3, width: width1, height: height1, top: 37, left: rightWidth, $opacity: 0.7}
    ]
    this.lis = this.$ele.find('li')
    this.interval
    // 点击切换到下一张
    
    this.$ele.find('section:nth-child(2)').on('click', function () {
    this.stop()
    this.next()
    this.play()
    }.bind(this))
    // 点击切换到上一张
    this.$ele.find('section:nth-child(1)').on('click', function () {
    this.stop()
    this.prev()
    this.play()
    }.bind(this))
    this.move()
    // 让轮播图开始自动播放
    // this.play()
    },
    
    // 原型是一个对象，所以写成一个花括号
    
    // move()方法让轮播图到达states指定的状态
    // <1>当页面打开时将轮播图从中心点展开
    // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
    move: function () {
    
    this.lis.each(function (i, el) {
    $(el)
    .css('z-index', this.states[i]['&zIndex'])
    .finish().animate(this.states[i], this.options.speed)
    // .stop(true,true).animate(states[i], 1000)
    .find('img').css('opacity', this.states[i].$opacity);
    //
    if (this.states[i]['&zIndex'] == 4) {
    var title = $(el).find('img').attr('data');
    //
    $('#HomePage-PTitle').html(title);
    
    }
    //
    }.bind(this));
    //
    //
    },
    // 让轮播图切换到下一张
    next: function () {
    
    this.states.unshift(this.states.pop())
    this.move()
    },
    // 让轮播图滚动到上一张
    prev: function () {
    
    this.states.push(this.states.shift())
    this.move()
    },
    play: function () {
    this.interval = setInterval(function () {//这个this指window
    // setInterval、setTimeOut 中的this指向window
    
    // states.unshift(states.pop())   //从后往前走
    // states.push(states.shift()) //从前往后走
    this.next()
    }.bind(this), this.options.delay)
    },
    // 停止自动播放
    stop: function () {
    // var _this = this
    clearInterval(this.interval)
    }
    
    }
    $.fn.zySlide = function (options) {
    this.each(function (i, ele) {
    new Slide(ele, options)
    })
    return this
    }
    })(jQuery)
