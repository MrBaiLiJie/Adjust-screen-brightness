<template>
  <div class="hello"   ref='pageDiv'
        @mousemove="onmousemove($event)" @touchmove="onmousemove($event)"
        @mouseup="onmouseup($event)" @touchend="onmouseup($event)">
        <div class="bg"></div>
    <div class="moban">
        <a class="back">
            <div class="backicon"></div>
        </a>
        <a class="scenario">
          <img src="../../static/images/scenario.png" alt="">
        </a>
        <a class="more">
            <img src="../../static/images/more.png" />
        </a>
        <span class="moban_title">小管家智能照明</span>
        <div class="xiala">
            <a href="#">关于我们</a>
            <a href="#">设备管理</a>
        </div>
    </div>
    <div class="disable"></div>
    <span id="zhineng-select" class="none"></span>
    <div class="main">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-no-swiping">
                <div class="box">
                   <div class="top">
                        <h1 class="thetitle">设备关闭</h1>
                    </div>
                </div>
            </div>
            <div class="swiper-slide swiper-no-swiping">
                <div class="box">
                    <div class="disable"></div>
                     <span id="trigger2" class="none"></span>
                            <div class="top">
                                <span class="iconfont icon-dingshi dingshiguanji "></span>
                                <h1 class="thetitle 11">调光</h1>
                            </div>
                    <div class="box_bg"></div>
                    <div class="zhuti">
                       <div class="zhuti_huang"></div>
                    </div>
                    <div class="finger"></div>
                    <div id="controlbox">
                        <div id="control">
                            <div class="tb">
                                <div class="tbflag"></div>
                                <div class="tbbg"></div>

                         </div>
                           <!--  <div class="lr">
                                <div class="lrflag"></div>
                                <div class="lrbg"></div>
                        </div> -->
                      </div>
                       <div id="contro2">
                           <!--  <div class="tb" style="display:block">
                                <div class="tbflag"></div>
                                <div class="tbbg"></div>

                         </div> -->
                            <div class="lr">
                                <div class="lrflag"></div>
                                <div class="lrbg"></div>
                        </div>
                      </div>
                    </div>
                        <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                            </div>                        
                    </div>
            </div>
               <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">月光</h1>
                        </div>
                        <div class="icon-father">
                            <span id="icon" class="icon-yueguang"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>         
                                      
                </div>
            </div>
            <!-- 阅读 -->
               <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
              
                    <div class="disable"></div>
                        <span id="" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">阅读</h1>  
                        </div>
                         <div class="icon-father">
                         <span id="icon" class="icon-yuedu"></span>
                </div>
                         <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>  
                                            
                </div>
            </div>
            <!-- 夜灯 -->
               <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">夜灯</h1>
                        </div>  
                       <div class="icon-father">
                          <span id="icon" class="icon-yedeng"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>
                                          
                </div>
            </div>
            <!-- 会客 -->
             <div class="swiper-slide">
                <div class="box">
                    <div class="disable"></div>
                    <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle 222">会客</h1>
                        </div>  
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
                   <div class="icon-father">
                        <span id="icon" class="icon-huike"></span>
                </div>
                         <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>                  
                </div>
            </div>
          <!-- 起床 -->
                <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
             
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">起床</h1>       
                        </div>
                        <div class="icon-father">
                            <span id="icon" class="icon-jiaoxing"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>   
                       
                         <!-- 起床弹框 -->
                        <div class="qichuang tongyong">
                            <div class="fr">
                                <span id="trigger4" class="zhixiang">
                                    <div class="right"></div>
                                </span>
                            </div>
                            <span class="wenzi">起床<span>5分钟</span></span>
                        </div>          
                </div>
            </div>
            <!-- 助眠 -->

             <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">助眠</h1>
                              
                        </div>   
                         <div class="icon-father">
                            <span id="icon" class="icon-shuimian"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div> 
                      
                    <!-- 睡眠弹框 -->
                        <div class="shuimian tongyong">
                            <div class="fr">
                                <span id="trigger3" class="zhixiang">
                                    <div class="right"></div>
                                </span>
                            </div>
                            <span class="wenzi">助眠<span>30分钟</span></span>
                        </div>
                </div>
            </div>
            <!-- 观影 -->
             <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
               
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">观影</h1>
                        </div>  
                      <div class="icon-father">
                        <span id="icon" class="icon-guanying"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>
                                             
                </div>
            </div>
            <!-- 就餐 -->
             <div class="swiper-slide">
                <div class="box">
                      <div class="box_bg"></div>
                 <div class="zhuti">
                   <div class="zhuti_huang"></div>
                </div>
                <div class="finger"></div>
            
                    <div class="disable"></div>
                        <span id="trigger2" class="none"></span>
                        <div class="top">
                            <span class="iconfont icon-dingshi dingshiguanji "></span>
                            <h1 class="thetitle">就餐</h1>  
                        </div>
                        <div class="icon-father">
                       <span id="icon" class="icon-jiucan"></span>
                  </div>
                       <div class="yanshi-box">
                                已开启延时<br />
                                距离关机还有
                                <p>10</p>
                                <span>分钟</span>
                         </div>
                                            
                </div>
            </div>        
          </div>
        </div>
    </div>
    <!-- 右上角定时 -->
      <!--  <div class="dingshi tongyong">
            <div class="fr">
                <span class="switch-off " themecolor="#1989fa"></span><span id="trigger1" class="zhixiang">
                    <div class="right"></div>
                </span>
            </div>
            <span class="wenzi">自定义休息<span>工作45分钟,休息30分钟,循环2次</span></span>
    </div> -->
   <!-- 底部按钮 -->
    <div class="menu">
       <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">

                <div class="swiper-slide kaiguan" alt="0">
                    <div class="yuan ">
                        <span class="iconfont icon-kaiguan "></span>

                    </div>
                    <span class="zhuangtai">开关</span>
                </div>
                <div class="swiper-slide" alt="3">
                    <div class="yuan">
                        <span class="iconfont icon-tiaoguang "></span>

                    </div>
                    <span class="zhuangtai">调光</span>

                </div>
                   <div class="swiper-slide" alt="13">
                    <div class="yuan">
                        <span class="iconfont  icon-yueguang"></span>

                    </div>
                    <span class="zhuangtai">月光</span>
                </div>
                  <div class="swiper-slide" alt="5">
                    <div class="yuan">
                        <span class="iconfont icon-yuedu "></span>

                    </div>
                    <span class="zhuangtai">阅读</span>
                </div>
                 <div class="swiper-slide" alt="9">
                    <div class="yuan">
                        <span class="iconfont icon-yedeng "></span>

                    </div>
                    <span class="zhuangtai">夜灯</span>
                </div>
                <div class="swiper-slide" alt="4">
                    <div class="yuan">
                        <span class="iconfont icon-huike "></span>

                    </div>
                    <span class="zhuangtai">会客</span>

                </div>
                <div class="swiper-slide" alt="12">
                    <div class="yuan">
                        <span class="iconfont icon-jiaoxing"></span>

                    </div>
                    <span class="zhuangtai">起床</span>
                </div>
                 <div class="swiper-slide" alt="10">
                    <div class="yuan">
                        <span class="iconfont icon-shuimian "></span>

                    </div>
                    <span class="zhuangtai">助眠</span>
                </div>
                <div class="swiper-slide" alt="6">
                    <div class="yuan">
                        <span class="iconfont icon-guanying "></span>

                    </div>
                    <span class="zhuangtai">观影</span>
                </div>
                <div class="swiper-slide" alt="7">
                    <div class="yuan">
                        <span class="iconfont icon-jiucan "></span>

                    </div>
                    <span class="zhuangtai">就餐</span>
                </div>
              
              

            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!-- 弹出框 -->
    <div class="displayBox">
      
    </div>

    <!-- 脱拽机器人 -->
    <div class="action-mgr  active" ref='actionMgr' @click="mgrState=!mgrState"  @mousedown="onmousedown($event)" 
    @touchstart="onmousedown($event)">
      <img src="../../static/images/moveIcon.png" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello,vue',
      mgrState: false,
      mousedownState: false, //鼠标默认抬起
      iX: 0,//鼠标坐标 与 拖拽按钮 间距 x
      iY: 0//鼠标坐标 与 拖拽按钮 间距 y
    }
  },
  methods: {
      send() {
      console.log("send");
    },
    edit() {
      console.log("edit");
    },
    /* 鼠标按下事件 */
    onmousedown(event) {
      /* 此处判断  pc 或 移动端 得到 event 事件 */
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      // 鼠标点击 面向页面 的 x坐标 y坐标
      let { clientX, clientY } = touch;
      // 鼠标x坐标 - 拖拽按钮x坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iX = clientX - this.$refs.actionMgr.offsetLeft;
      // 鼠标y坐标 - 拖拽按钮y坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iY = clientY - this.$refs.actionMgr.offsetTop;
      // 设置当前 状态为 鼠标按下
      this.mousedownState = true;
    },
    /* 鼠标移动事件 */
    onmousemove(event) {
      //鼠标按下 切移动中
      if (this.mousedownState) {
        /* 此处判断  pc 或 移动端 得到 event 事件 */
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        // 鼠标移动时 面向页面 的 x坐标 y坐标
        let { clientX, clientY } = touch;
        //当前页面全局容器 dom 元素  获取容器 宽高
        let {
          clientHeight: pageDivY,
          clientWidth: pageDivX
        } = this.$refs.pageDiv;
        /* 鼠标坐标 - 鼠标与拖拽按钮的 间距坐标  得到 拖拽按钮的 左上角 x轴y轴坐标 */
        let [x, y] = [clientX - this.iX, clientY - this.iY];

        //拖拽按钮 dom 元素  获取 宽高 style 对象
        let {
          clientHeight: actionMgrY,
          clientWidth: actionMgrX,
          style: actionMgrStyle
        } = this.$refs.actionMgr;
        /* 此处判断 拖拽按钮 如果超出 屏幕宽高 或者 小于  
           设置 屏幕最大 x=全局容器x y=全局容器y 否则 设置 为 x=0 y=0 
        */
        if (x > pageDivX - actionMgrX) x = pageDivX - actionMgrX;
        else if (x < 0) x = 0;
        if (y > pageDivY - actionMgrY) y = pageDivY - actionMgrY;
        else if (y < 0) y = 0;
        // 计算后坐标  设置 按钮位置
        actionMgrStyle.left = `${x}px`;
        actionMgrStyle.top = `${y}px`;
        actionMgrStyle.bottom = "auto";
        actionMgrStyle.right = "auto";
        //当按下键滑动时， 阻止屏幕滑动事件
        event.preventDefault();
      }
    },
    /* 鼠标抬起事件 */
    onmouseup(event) {
      // 设置当前状态为鼠标抬起
      this.mousedownState = false;
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../static/css/base.css';
@import '../../static/css/main.css';
@import '../../static/css/swiper.min.css';
@import '../../static/css/iconfont.css';
@import '../../static/css/mobileSelect.css';
@import '../../static/css/honeySwitch.css';
</style>
