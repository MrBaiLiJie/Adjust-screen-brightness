 document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, { passive: false });
        $(document).ready(function () {
            //当前活动页面
            var active = 0;
            //延时关灯
            var dingshi = 30;
            //助眠
            var shuimian = 30;
            //起床
            var qichuang = 30;
            //设定文件
            var setting = {
                open: "0",//0是关灯，1是开灯，如果开灯，那么要付给一些按钮的active状态,-1 是离线

                bantype: "1",//底板 分别是 0台灯 1顶灯  2全部按钮显示
                ban: [{
                    name: "台灯",
                    data: [0, 3, 5, 8, 9, 10, 11, 12,13]
                }, {
                    name: "顶灯",
                    data: [0, 3, 4, 5, 6, 7, 9, 10, 12,13]
                }, {
                    name: "55",
                    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13]
                }
                ],
                active: [3],
                data: [{
                    //代号
                    alt: "0",
                    color: "#f8c067",
                    moshi: "开灯",
                    icon: '',
                    display: "block",
                    brightness: "1",//亮度0-1
                    RGB: "0",//颜色0-1 1最黄
                    zidingyi: "0",//自定义休息
                    tiaoguang: "0",//暂时不用这个参数了
                    shuimian: "0",//助眠功能
                    qichuang: "0",//起床功能
                    guangquan: "0",//光圈的透明度
                    control: "0",//0 无调光 1 亮度调光 2色彩调光 3亮度和色彩调光
                }, {
                    alt: "1",
                    color: "#fdc743",
                    moshi: "日光",
                    icon: 'icon-taiyang',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0",
                    control: "0",
                }, {
                    alt: "2",
                    color: "#32b5e6",
                    moshi: "月光",
                    icon: 'icon-yueguang',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0",
                    control: "0",
                }, {
                    alt: "3",
                    color: "#fdc743",
                    moshi: "调光",
                    icon: '',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "1",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0.8",
                    control: "1",

                }, {
                    alt: "4",
                    color: "#2283e2",
                    moshi: "会客",
                    icon: 'icon-huike',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0", control: "0",

                }, {
                    alt: "5",
                    color: "#69cb63",
                    moshi: "阅读",
                    icon: 'icon-yuedu',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0", control: "0",
                }, {
                    alt: "6",
                    color: "#f5a623",
                    moshi: "观影",
                    icon: 'icon-guanying',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0", control: "0",

                }, {
                    alt: "7",
                    color: "#f5a623",
                    moshi: "就餐",
                    icon: 'icon-jiucan',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0", control: "0",

                }, {
                    alt: "8",
                    color: "#5bc4eb",
                    moshi: "电脑",
                    icon: 'icon-diannao',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0",
                    control: "3",

                }, {
                    alt: "9",
                    color: "#2283e2",
                    moshi: "夜灯",
                    icon: 'icon-yedeng',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0", control: "0",

                }, {
                    alt: "10",
                    color: "#8fd88a",
                    moshi: "睡眠",
                    icon: 'icon-shuimian',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "1",
                    qichuang: "0",
                    guangquan: "0",
                    control: "0",

                }, {
                    alt: "11",
                    color: "#f49601",
                    moshi: "智能调光",
                    icon: 'icon-zhinengtiaoguang',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0",
                    control: "0",

                }, {
                    alt: "12",
                    color: "#f5a623",
                    moshi: "起床",
                    icon: 'icon-jiaoxing',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "1",
                    guangquan: "0",
                    control: "0",

                },
                {
                    alt: "13",
                    color: "#f5a623",
                    moshi: "月光",
                    icon: 'icon-yueguang',
                    display: "block",
                    brightness: "1",
                    RGB: "0",
                    zidingyi: "0",
                    tiaoguang: "0",
                    shuimian: "0",
                    qichuang: "0",
                    guangquan: "0",
                    control: "0",

                },
                ]
            }

            //自定义

            var mobileSelect1 = new MobileSelect({
                trigger: '#trigger1',
                title: '自定义休息',
                wheels: [
                            { data: ['30分钟', '45分钟', '60分钟', '90分钟'] },
                            { data: ['10分钟', '15分钟', '20分钟', '30分钟'] },
                             { data: ['1次', '2次', '3次', '4次'] }
                ],
                triggerDisplayData: false,
                flag: 1,
                position: [1, 1, 1],
                callback: function (indexArr, data) {

                    $(".dingshi >.wenzi>span").html("工作" + data[0] + ",休息" + data[1] + ",循环" + data[2])
                }//初始化定位 两个轮子都选中在索引1的选项
            });

            //延时关灯
            var mobileSelect2 = new MobileSelect({
                trigger: '#trigger2',
                title: '延时关灯',
                wheels: [{ data: ['120分钟', '110分钟', '100分钟', '90分钟', '80分钟', '70分钟', '60分钟', '50分钟', '40分钟', '30分钟', '20分钟', '10分钟'] }
                ],
                triggerDisplayData: false,
                flag: 0,
                position: [1, 1, 1],
                callback: function (indexArr, data) {
                    dingshi = parseInt(data[0]);

                }//初始化定位 两个轮子都选中在索引1的选项
            });

            //助眠
            var mobileSelect3 = new MobileSelect({
                trigger: '#trigger3',
                title: '助眠定时',
                wheels: [{ data: ['120分钟', '110分钟', '100分钟', '90分钟', '80分钟', '70分钟', '60分钟', '50分钟', '40分钟', '30分钟', '20分钟', '10分钟'] }
                ],
                triggerDisplayData: false,
                flag: 0,
                position: [9],
                callback: function (indexArr, data) {

                    shuimian = parseInt(data[0]);
                    $(".shuimian >.wenzi>span").html(data[0])
                }//初始化定位 两个轮子都选中在索引1的选项
            });
            //起床
            var mobileSelect4 = new MobileSelect({
                trigger: '#trigger4',
                title: '唤醒时长',
                wheels: [{ data: ['1分钟', '2分钟', '3分钟', '4分钟', '5分钟'] }
                ],
                triggerDisplayData: false,
                flag: 0,
                position: [3],
                callback: function (indexArr, data) {
                    qichuang = parseInt(data[0]);
                    $(".qichuang >.wenzi>span").html(data[0])
                }//初始化定位 两个轮子都选中在索引1的选项
            });

            //开灯
            var kaiji = function (flag) {
                $(".kaiguan").addClass("active");
                $(".thetitle").html("开灯");
                
                $(".box_bg").animate({ "background-color": setting.data[0].color }, 500);
                $("#controlbox").swipe("disable");
                $(".dingshiguanji").show();
                $(".menu .swiper-slide").eq(0).children("span").html("关灯");
                $(".box").animate({ "background-color": "#000" }, 500);
            }
            //关灯
            var guanji = function () {
                $(".swiper-slide").removeClass("active");


                $(".thetitle").html("设备关闭");
                $(".shengtime").html("关灯");
                $("#icon").attr("class", "");
                $("#controlbox").swipe("disable");
                $(".dingshiguanji").removeClass("active");
                $(".zhuti").css("opacity", 0);
                $(".zhuti_huang").css("opacity", 0);
                $(".dingshiguanji").hide();
                $(".tongyong").hide(); $(".menu .swiper-slide ").eq(0).children("span").html("开灯");
                $(".box_bg").animate({ "background-color": "transparent" }, 500);
                $(".box").animate({ "background-color": "transparent" }, 500);
            }

            //激活按钮
            var jihuo = function (el) {
                var index = el.attr("alt");
                $(".swiper-slide ").removeClass("active");
                $(".kaiguan ").addClass("active");
                active = index;
                el.addClass("active");
                $(".thetitle").html(setting.data[index].moshi);
                $("#icon").attr("class", setting.data[index].icon);
                $(".box_bg").css("opacity", setting.data[index].brightness);
                $(".zhuti").css({ "opacity": setting.data[index].guangquan });
                $(".zhuti_huang").css("opacity", setting.data[index].RGB);
                $(".box_bg").animate({ "background-color": setting.data[index].color }, 500);

                if (setting.data[index].control == "0") {
                    $("#controlbox").swipe("disable");
                } else { $("#controlbox").swipe("enable"); }

                if (setting.data[index].zidingyi == "0") { $(".dingshi").hide() } else { $(".dingshi").show() }

                if (setting.data[index].shuimian == "0") { $(".shuimian").hide() } else { $(".shuimian").show() }
                if (setting.data[index].qichuang == "0") { $(".qichuang").hide() } else { $(".qichuang").show() }

            }
            //关闭按钮
            var guanbi = function (el) {
                var index = el.attr("alt");
                el.removeClass("active");
                if (active == index) {

                    $("#icon").attr("class", "")
                    $(".box_bg").animate({ "background-color": setting.data[0].color }, 500);
                }
            }


            //延时关灯
            var myVar;

            $(".dingshiguanji").click(function () {
                mobileSelect2.show();
            })

            var list = $(".gallery-thumbs .swiper-slide");
            //点击按钮
            list.click(function () {
                //判断按钮是否激活，如果激活状态下判断是不是开关，如果是开关，就关闭程序
                if ($(this).hasClass("active")) {
                    //如果运行状态下点击开关，就关灯
                    if ($(this).hasClass("kaiguan")) {
                        guanji();
                    }
                        //如果运行状态下，激活中点击，就关闭此按钮
                    else {
                        guanbi($(this));
                    }
                }
                    //按钮没有激活
                else {
                    //如果是开关，就开灯
                    if ($(this).hasClass("kaiguan")) {
                        kaiji(0);
                        //开灯默认激活调光
                        jihuo(list.eq(3));
                    }
                        //如果不是开关
                    else {
                        //让播放的延时动画停止
                        // me.stop();
                        //判断是否是开灯状态，如果是开灯状态，就激活按钮
                        if ($(".kaiguan").hasClass("active")) {
                            jihuo($(this));
                        }
                            // 不是开灯状态，就开灯+激活按钮
                        else {
                            kaiji(1);
                            jihuo($(this));

                        }
                    }
                }
            })
        
            //延时
            $(".ensure").toggle(function () {
                $(".yanshi").addClass("active");
                $(".icon-father").hide();

                $(".yanshi-box").show();
            }, function () {
                $(".yanshi").removeClass("active");
                $(".icon-father").show();

                $(".yanshi-box").hide();
            })
            //下拉
            $(".more").click(function () {
                $(".xiala").show();$(".bg").show();

            })
            $(".bg").click(function () {
                $(".xiala").hide(); $(".bg").hide();
            })
            //按钮处理
            var button = function () {
                //取得哪些按钮显示
                var blockArry = setting.ban[setting.bantype].data;
                //取得哪些按钮激活
                var activeArry = setting.active;
                //处理按钮
                $(".gallery-thumbs .swiper-slide").each(function () {
                    var display = false;
                    for (i in blockArry) {
                        if ($(this).attr("alt") == blockArry[i]) {
                            if (setting.open == "1") {
                                if (activeArry.indexOf(blockArry[i]) != -1) {
                                    $(this).addClass("active");

                                    jihuo($(this));
                                }
                            }
                            display = true;
                        }
                    }
                    if (!display) {
                        $(this).remove();
                    }
                })

                //生成底部
                var galleryThumbs = new Swiper('.gallery-thumbs ', {
                    slidesPerView: 5,
                    spaceBetween: 0,
                    slidesPerGroup: 5,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    loop: false,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
                //头部页面切换
            var galleryTop = new Swiper('.gallery-top', {

                    spaceBetween: 0,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    thumbs: {
                        swiper: galleryThumbs
                    },
                    noSwiping: true,

                    on: {
                        touchStart: function (event) {
                            if (this.activeIndex == 1) {
                                galleryTop.allowSlidePrev = false;
                            } else { galleryTop.allowSlidePrev = true; }
                        },
                        slideChange: function () {
                            galleryThumbs.slideTo(this.activeIndex)
                            //得到当前页
                            active = this.activeIndex;

                        }

                    },
                });
            }
            //页面加载-------------------------------------------------------------------------------
            if (setting.open == "0") {
                //显示关灯状态
                button();
                $(".thetitle").html("设备关闭");
                $("body").removeClass("lixian"); $("body").addClass("boot");

            } else if (setting.open == "-1") {
                button();
                $(".thetitle").html("设备已离线");
                $(".swiper-slide").removeClass("active");
                $("body").addClass("lixian"); $("body").removeClass("boot");
            }
            else {
                $("body").removeClass("lixian"); $("body").removeClass("boot");
                //开灯
                kaiji();
                button();

            }
                //调节亮度和颜色
            //adjust代表是 有没有开调节，0 没有开调节， 1 左右调节（颜色） 2  上下调节（亮度）
            var adjust = 0;
            var brightness = 0;
            var RGB = 0;
            var r = 10;
            var tbcontrol = function () {
                adjust = 1;
                $("#controlbox").swipe("disable");
                $("#control").swipe("enable");
                $("#control").show();
                $(".tb").show();
                brightness = setting.data[active].brightness;
                RGB = setting.data[active].RGB;
            }
            tbcontrol();
            var lrcontrol = function () {
                adjust = 2;
                $("#controlbox").swipe("disable");
                $("#control").swipe("enable");
                $("#control").show();
                $(".lr").show();
                brightness = setting.data[active].brightness;
                RGB = setting.data[active].RGB;
            }
            lrcontrol();
            $("#controlbox").swipe({
                swipe: function (event, direction, distance, duration, fingerCount) {
                    var x = setting.data[active].control;
                    if (x == "1") {

                        tbcontrol();
                    } else if (x == "2") {
                        lrcontrol();
                    } else if (x == "3") {

                        if (direction == "up" || direction == "down") {
                            tbcontrol();
                        }
                        else {
                            lrcontrol();
                        }
                    }
                },
            });

            $("#control").swipe({
                swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection, fingerCount) {


                    if (phase == "end") {
                        //$(".finger").fadeOut();
                        $(".tb").fadeOut(); $(".lr").fadeOut();
                        $("#control").swipe("disable");
                        $("#controlbox").swipe("enable");
                        brightness = parseInt($(".tbflag").css("margin-top") + r + 0.1);

                        RGB = parseInt($(".lrflag").css("margin-top") + r + 0.1);

                        setting.data[active].brightness = $(".box_bg").css("opacity");

                        setting.data[active].RGB = $(".zhuti_huang").css("opacity");
                    } else {
                        $(".tbflag").css("margin-top", brightness + "px"); $(".lrflag").css("margin-left", RGB + "px");
                        //上下调节
                        if (adjust == 1) {
                            var i = 240 - (brightness * 240);
                            var j = 0;
                            if (direction == "down") {
                                j = distance
                            }
                            else if (direction == "up")
                            { j = -distance; }
                            j = i + j;
                            if (j > 228) { j = 228; }
                            else if (j < 0) { j = 0; }

                            $(".tbflag").css({ "margin-top": j + "px" });
                            $(".box_bg").css("opacity", 1 - j / 480); $(".box_bg").attr("opacity", 1 - j / 240);
                            $(".zhuti").css("opacity", 1 - j / 480); $(".zhuti").attr("opacity", 1 - j / 240);

                        }
                            //左右调节
                        else if (adjust == 2) {

                            var i = (RGB * 240);
                            var j = 0;
                            if (direction == "right") {
                                j = distance
                            }
                            else if (direction == "left")
                            { j = -distance; }
                            j = i + j;
                            if (j > 240) { j = 240; }
                            else if (j < 0) { j = 0; }
                            $(".lrflag").css({ "margin-left": j + "px" })
                            $(".zhuti_huang").css("opacity", j / 240);


                        }
                        //$(".finger").css({ "left": fingerData[0].end.x, "top": fingerData[0].end.y, display: "block" });
                    }
                },
                threshold: 20,
                maxTimeThreshold: 50,
                fingers: 1
            });
        })