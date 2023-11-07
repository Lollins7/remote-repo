/*
 * lizheng 于 2014 02 17 第四版本
 * 此效果包为各种小效果集合
 * 不同效果请选择不同 方法
 *
 * 效果一：左侧导航栏收缩、展开
 * 效果二：点击查看更多，再点收起
 * 效果三：tab标签切换
 *
 *效果四：回到顶部2014 02 17
 *效果五：图片滚动2014 03 19
 *效果六：弹出视频（可拖动缩放）2014 03 26
 */


;(function($){
    $.fn.extend({
//        效果一
//        左侧导航栏收缩、展开
//        例子：js_test_toggle.html
        "zhankai":function (options){
            options= $.extend({
                zhankai1:"index2",
                zhankai2:"active",
                zhankai3:"index_aa"
            },options);
            var self = $(this);
            $("."+options.zhankai1).removeClass(options.zhankai2);
            self.addClass(options.zhankai2);

            $("."+options.zhankai3).slideUp();
            var content_show = self.attr("tab");
            $("."+content_show).slideDown();
        },

//        效果二
//        点击查看更多，再点收起
//        例子：js_test_toggle.html
        "togg":function(options){
            options= $.extend({
                togg1:"更多",                         //点击状态1
                togg2:"收起",                          //点击状态2
                tab_togga:"tab_togga",              //显示更多
                tab_toggb:"tab_toggb"              //显示收起
            },options);
            var $introduce = $(".lz_togg");         //被隐藏部分
//            $introduce.after("<a href='javascript:;' class='lz_togg_btn'>↓展开更多说明</a>");
            var $zhankai = $(".lz_togg_btn")         //操作按钮

            $(this).click(function(){
                if($(this).parent().prev().hasClass('lz_togg_xianshi')){
                    $(this).parent().prev().removeClass('lz_togg_xianshi');
    //                $(this).parent().prev().css("display","none");
                    if($(this).attr("tab_togga")){$(this).text($(this).attr(options.tab_togga));}
                    else{$(this).html(options.togg1);}
                }else{
                    $(this).parent().prev().addClass('lz_togg_xianshi');
    //                $(this).parent().prev().css("display","block");
                    if($(this).attr("tab_toggb")){$(this).text($(this).attr(options.tab_toggb));}
                    else{$(this).html(options.togg2);}
                }
            })
        },

//        效果三
//        tab标签切换
//        例子：js_test_tab.html
        "tabqh":function(options){
            options= $.extend({
                tab_title:"tab_title",                              //标签切换按钮类名
                tab_title_content:"tab_title_content",           //标签切换标题类名
                tab_content:"tab_content",                          //标签切换标题父级类名
                tab_content_nr:"tab_content_nr",                    //点击标签后出现的具体内容类名
                tab:"tab",
                active:"active"
            },options);
            var $this=$(this);
            $(this).parent().children().removeClass(options.active);
            $this.addClass(options.active);

            var otab=$this.attr(options.tab);
            $("."+options.tab_content_nr).css("display","none");
            $("."+otab).css("display","block");
        },



//        效果四
//        lz_backtop回到顶部
        "lz_backtop":function(options){
            options= $.extend({
//                left:"left",
//                top:"top",
                bottom:"0px",//按钮距离浏览器可视范围底部距离
                width:"48px",//按钮宽度
                height:"49px",//按钮高度
                background:"url('img/top_backtop.png') no-repeat",//按钮背景图
                center_right:"500px",//距离浏览器中线右侧距离
                back_top:"300"//超出限定后回到顶端按钮出现

            },options);
            var ohtml="<div class='lz_backtop' style='display: none;'><a href='###'></a></div>"
            $("body").prepend(ohtml)
            $(".lz_backtop a").css({
                "display":"block",
                "width":options.width,
                "height":options.height,
                "background":options.background
            })
            $(".lz_backtop a").hover(
                function(){$(this).css("background-position","-"+options.width+" "+"0px")},
                function(){$(this).css("background-position","0px 0px")}
            )

//            $(document).ready(lz_dingwei())
            $(window).resize(
                function(){
                $(".lz_backtop").css({
                    "position":"fixed",
                    "bottom":options.bottom,
                    "left":$(document).width()/2,
                    "marginLeft":options.center_right,
                    "width":options.height
                })
            })
            $(document).ready($(window).resize())
            $(window).scroll(function(){
//                $(".lz_backtop").css({
//                    "position":"fixed",
//                    "bottom":"0px",
//                    "top":parseInt($(window).height())+parseInt($(window).scrollTop())-parseInt(options.height)+"px"
//                })
                if(parseInt($(window).scrollTop())>options.back_top){$(".lz_backtop").css("display","block")}
                if(parseInt($(window).scrollTop())<options.back_top){$(".lz_backtop").css("display","none")}
            })
            $(".lz_backtop a").click(function(){
                clearInterval(otime)
                var otime=setInterval(function(){
                    if($(document).scrollTop()<=0){clearInterval(otime)}
                    if(parseInt($(document).scrollTop())>0&&parseInt($(document).scrollTop())<8){clearInterval(otime);parseInt($(document).scrollTop("0px"));}
                    $(document).scrollTop(parseInt($(document).scrollTop())-parseInt($(document).scrollTop())/8)

                    var otop=$(document).scrollTop();
//                    alert(otop)
                    $(document).scroll(function(){
//                        alert($(document).scrollTop())
                        if(parseInt($(document).scrollTop())>otop){clearInterval(otime)}
                    })
                },"30")
            })

        },

//        效果五：图片滚动
        "photo_flicking":function(options){
            options= $.extend({
                viewport_width:"190px",//视口宽度
                viewport_height:"150px",//视口高度
                viewport_border:"0px",//视口border
                viewoport_border_solid:"solid",//视口border线形
                viewoport_border_color:"red",//视口border颜色
                photo_wight:"190px",//单个图片宽度
                photo_height:"150px",//单个图片高度
                ospeaddh:"1000",//图片条滚动一次时间
                opacitys:"0.6",//介绍底纹透明度
                yinying_width:"100%",//阴影区域宽度
                yinying_height:"30px",//阴影区域高度
                xsgs:"1",//默认图片显示个数
                ospead:"3000",//图片滚动间隔时间（定时器时间）
                paddingleft:"0px",//单个图片块左边padding
                paddingright:"0px",//单个图片块右边padding
                paddingtop:"0px",//单个图片块顶边padding
                paddingbottom:"0px",//单个图片块底边padding
                tpgd_shikou_pdl:"0px",//图片条padding-left
                tpgd_shikou_pdr:"0px",//图片条padding-right
                fanye_width:"25px",//按钮宽度
                fanye_height:"70px",//按钮高度
                next_right:"0px",//右边按钮位置
                prew_left:"0px",//左边按钮位置
                tanchu:"0"//是否弹出放大图片
            },options);

//            把所有内容外层嵌套一层div，用于定位基准
            var owrap="<div class='lz_tpgd_wrap' style='position: relative'></div>"
            $(this).wrapAll(owrap)
            var ocount=$(this).children().length;//获取图片个数
            if(ocount<options.xsgs){alert("图片数量相对过少，请修改视口显示图片数量等！");return false;}
            if(options.ospead <= options.ospeaddh){alert("定时器时间相对图片条动画时间过短，请调整相关参数！");return false;}
            var ohtml="<div class='tpgd_shikou'></div>";//视口结构
            var oarray_quanju=new Array();
            var oarray_quanju2=new Array();
            var oarray_quanju3=new Array();
            $(this).children().each(function(){
                oarray_quanju.push($(this).attr("src"));
                oarray_quanju2.push($(this).attr("tar_p"));
                oarray_quanju3.push($(this).attr("tab_a"));
            })
            $(this).html(ohtml);
            var ohtmls="<div class='tupian_wrap'><div class='lz_yinying'></div><p></p><a href='###' style='display:inline-block;overflow:hidden;'><img src='' /></a></div>";
            for(var i=0;i<ocount;i++){
                $(".tpgd_shikou").append(ohtmls);
            };

//            视口窗样式
            $(this).css({
                overflow:"hidden",
                position:"relative",
                width:parseInt(options.viewport_width)*(options.xsgs)+(parseInt(options.paddingleft)+parseInt(options.paddingleft))*options.xsgs+parseInt(options.tpgd_shikou_pdl)+parseInt(options.tpgd_shikou_pdr),
                height:options.viewport_height,
                border:options.viewport_border+" "+options.viewoport_border_solid+" "+options.viewoport_border_color
            });
//            图片条样式
            $(".tpgd_shikou").css({
                overflow:"hidden",
                position:"absolute",
                top:"0px",
                left:"0px",
                width:((parseInt(options.photo_wight))*ocount*2)+((parseInt(options.paddingleft)+parseInt(options.paddingright))*ocount*2)+'px',
                paddingLeft:options.tpgd_shikou_pdl,
                paddingRight:options.tpgd_shikou_pdr,
                zIndex:9
            })
//            单个图片样式
            $(".tupian_wrap").css({
                paddingTop:options.paddingtop,
                paddingbottom:options.paddingbottom,
                width:parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingleft),
                height:options.photo_height+parseInt(options.paddingtop)+parseInt(options.paddingbottom),
                float:"left",
                position:"relative"
            })
            $(".tupian_wrap img").css({
                width:options.photo_wight,
                height:options.photo_height,
                float:"left",
                position:"relative",
                marginLeft:options.paddingleft,
                marginRight:options.paddingright,
                border:"0px"
            })
//            阴影区域样式
            $(".lz_yinying").css({
                width:options.photo_wight,
                height:options.yinying_height,
                opacity:"1",
                position:"absolute",
                bottom:"0px",
                left:"50%",
                background:"#000",
                zIndex:"9",
                marginLeft:-parseInt(options.photo_wight)/2
//                marginRight:options.paddingright
            })
//            图片文字样式
            $(".tupian_wrap p").css({
                position:"absolute",
                bottom:"0px",
                left:"0px",
                width:options.yinying_width,
                height:options.yinying_height,
                lineHeight:options.yinying_height,
                textAlign:"center",
                zIndex:"10",
                color:"#fff"
            })

//            生成的html结构依次添加图片地址
            for(var i = 0;i<ocount;i++){
                $(".tupian_wrap").each(function(){
                    if($(this).index()==i){
                        $(this).find("img").attr("src",oarray_quanju[i])
                        $(this).find("p").text(oarray_quanju2[i])
                        $(this).find("a").attr("href",oarray_quanju3[i])
                    }
                })
            }

//            复制视口内所有元素一遍
            var ofuzhi=$(".tpgd_shikou").html();
            $(".tpgd_shikou").append(ofuzhi)

//            图片运动效果
            var oleft
            var owidth
            var otime=setInterval(function(){

                var oleft=parseInt($(".tpgd_shikou").css("left"));
                var owidth=-parseInt(ocount*parseInt(options.photo_wight)*2)+parseInt(options.photo_wight)*options.xsgs;
                if(oleft>owidth){$(".tpgd_shikou").animate({left:'-='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
                if(oleft<=owidth){$(".tpgd_shikou").css("left",-parseInt(options.photo_wight)*(ocount-options.xsgs)+'px');$(".tpgd_shikou").animate({left:'-='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
            },options.ospead)

//            插入向左向右翻页按钮结构html代码
            var ofanye="<div class='fanye_wrap'><div class='fanye prev'><a href='###'></a></div><div class='fanye next'><a href='###'></a></div></div>";
            $(this).after(ofanye)
//            翻页样式
            $(".fanye_wrap").css({
                position:"absolute",
                top:"0px",
                marginTop:(parseInt(options.viewport_height)-parseInt(options.fanye_height))/2+parseInt(options.viewport_border),
                height:options.fanye_height,
                width:$(".lz_tpgd").css("width"),
                marginLeft:parseInt(options.viewport_border)+parseInt($(this).css("margin-left"))+parseInt($(this).css("padding-left"))
            })
            $(".fanye").css({
                position:"absolute",
                top:"50%",
                width:"20px",
                height:"70px",
                marginTop:"-35px",
                opacity:"0.6",
                background:"#333",
				zIndex:"9999",
            }).hover(function(){$(this).css({
                    background:"#333",
                    opacity:"1"
                })},function(){$(this).css({
                    background:"#333",
                    opacity:"0.6"
                })})
            $(".fanye a").css({
                position:"absolute",
                top:"50%",
                left:"50%",
                display:"block",
                width:"7px",
                height:"13px",
                margin:"-6px 0 0 -3px"
            })
            $(".prev").css({
                left:options.prew_left
            })
            $(".next").css({
                right:options.next_right
            })
            $(".prev a").css({
                background:"url(img/fanye.png) no-repeat"
            })
            $(".next a").css({
                background:"url(img/fanye.png) 0px -17px no-repeat"
            })

//            判断动画是否正在进行中
            $(".prev").click(function(){
                if(!$(".tpgd_shikou").is(":animated")){
                    var oleft=parseInt($(".tpgd_shikou").css("left"));
                    var owidth=-parseInt(ocount*parseInt(options.photo_wight)*2)+parseInt(options.photo_wight)*options.xsgs;
                    clearInterval(otime);

    //                图片条第一个的时候
                    if(oleft >= 0){$(".tpgd_shikou").css("left",-(parseInt(options.photo_wight)+(parseInt(options.paddingleft)+parseInt(options.paddingright)))*ocount+"px").animate({left:'+='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
                    else{$(".tpgd_shikou").animate({left:'+='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
                }
            })
            $(".next").click(function(){
                if(!$(".tpgd_shikou").is(":animated")){
                    var oleft=parseInt($(".tpgd_shikou").css("left"));
                    var owidth=-parseInt(ocount*parseInt(options.photo_wight)*2)+parseInt(options.photo_wight)*options.xsgs;
                    clearInterval(otime);

                    if(oleft>owidth){$(".tpgd_shikou").animate({left:'-='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
                    if(oleft<=owidth){$(".tpgd_shikou").css("left",-parseInt(options.photo_wight)*(ocount-options.xsgs)+'px');$(".tpgd_shikou").animate({left:'-='+(parseInt(options.photo_wight)+parseInt(options.paddingleft)+parseInt(options.paddingright))+'px'},options.ospeaddh)}
                }
            })

//            图片点击时弹出原始图片
                $(this).find("img").click(function(){

                    if(options.tanchu=="0"){
                        var owidth=this.width;
                        var oheight=this.height;
                        var osrc=$(this).attr("src");
                        var oyuantu_bg="<div id='img_bg'></div>";
                        if($("#img_bg").html() != ""){$("body").append(oyuantu_bg)}
                        $("#img_bg").css({
                            position:"absolute",
                            top:"0px",
                            left:"0px",
                            width:"100%",
                            height:$("body").height(),
                            background:"#000",
                            zIndex:9999999,
                            opacity:"0.3"
                        })
                        var oyuantu="<div id='yuantu'><img src='' /><div id='close'><a href='###'></a></div></div>"
                        if($("#yuantu").html() != ""){$("#img_bg").after(oyuantu)}
                        $("#yuantu img").attr("src",osrc).animate({
                            width:owidth*2,
                            height:oheight*2
                        })
                        $("#yuantu").css({
                            position:"fixed",
                            top:"200px",
                            left:"50%",
                            zIndex:"10000000",
                            padding:"10px",
                            background:"#fff",
                            marginLeft:-parseInt(owidth),
                            textAlign:"right"
                        })
                        $("#close a").css({
                            display:"block",
                            height:"30px",
                            width:"100%",
                            background:"url(img/close.gif) right bottom no-repeat"
                        }).click(function(){
                                $("#yuantu").remove();
                                $("#img_bg").remove();
                            })
                    }

                })
        },

        "tcsp":function(options){
            options= $.extend({
                owidth:"640px",//弹出口宽度
                oheight:"360px",//弹出口高度
                obackground:"img/white.png",//弹出口背景图
                oclose:"url(img/close.png) center 1px no-repeat",//弹出口关闭按钮
                opadding:"2px;",
                tuodongbg:"url(img/tuodong.png) 40px center no-repeat",
                tuodongbg2:"url(img/tuodong2.png) 0px center no-repeat",
                tuodongbg3:"url(img/tuodong3.png) 0px 1px no-repeat",
                oalert:"请先关闭当前视频！",
                osuofang:"url(img/suofang.png) center no-repeat",
                osuofang2:"url(img/suofang2.png) center no-repeat"
            },options)
            $(this).each(function(){

                    $(this).click(function(){

                        if($("#shipin").length <= "0"){
                            if($("#shipin").length=="0" & $("#mengban").length<"2"){
                                var ohtml="<div id='shipin'><div id='close' href='###'></div><div id='tuodong' href='###'></div><div id='video_wrap' style='padding: +"+options.opadding+"+'><div id='suofang'></div></div></div>"
                                $("body").append(ohtml)
                            }

                            var url=$(this).attr("dizhi")
        //                    视频代码
                            var htmlstr ="<video id='spx1' preload='auto' controls='controls' width='auto' height='auto' autoplay='autoplay'>";
                            htmlstr +="<source type='video/mp4' src='"+url+"'>";
                            htmlstr +="<object id='sps1' width='auto' height= 'auto' classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6'>";
                            htmlstr +="<param name='AutoStart' value='1'><!--是否自动播放-->";
                            htmlstr +="<param name='AutoSize' value='0'><!--是否自动调整大小-->";
                            htmlstr +="<param name='Balance' value='0'><!--调整左右声道平衡,同上面旧播放器代码-->";
                            htmlstr +="<param name='enabled' value='-1'><!--播放器是否可人为控制-->";
                            htmlstr +="<param name='EnableContextMenu' value='-1'><!--是否启用上下文菜单-->";
                            htmlstr +="<param name='url' value='"+url+"'>";
                            htmlstr +="<param name='PlayCount' value='1'><!--播放次数控制,为整数-->";
                            htmlstr +="<param name='rate' value='1'><!--播放速率控制,1为正常,允许小数,1.0-2.0-->";
                            htmlstr +="<param name='currentPosition' value='0'><!--控件设置:当前位置-->";
                            htmlstr +="<param name='currentMarker' value='0'><!--控件设置:当前标记-->";
                            htmlstr +="<param name='defaultFrame' value=''><!--显示默认框架-->";
                            htmlstr +="<param name='invokeURLs' value='0'><!--脚本命令设置:是否调用URL-->";
                            htmlstr +="<param name='baseURL' value=''><!--脚本命令设置:被调用的URL-->";
                            htmlstr +="<param name='stretchToFit' value='0'><!--是否按比例伸展-->";
                            htmlstr +="<param name='volume' value='50'><!--默认声音大小0%-100%,50则为50%-->";
                            htmlstr +="<param name='mute' value='0'><!--是否静音-->";
                            htmlstr +="<param name='uiMode' value='Full'><!--播放器显示模式:Full显示全部;mini最简化;None不显示播放控制,只显示视频窗口;invisible全部不显示-->";
                            htmlstr +="<param name='windowlessVideo' value='0'><!--如果是0可以允许全屏,否则只能在窗口中查看-->";
                            htmlstr +="<param name='fullScreen' value='0'><!--开始播放是否自动全屏-->";
                            htmlstr +="<param name='enableErrorDialogs' value='-1'><!--是否启用错误提示报告-->";
                            htmlstr +="<param name='SAMIStyle' value=''><!--SAMI样式-->";
                            htmlstr +="<param name='SAMILang' value=''><!--SAMI语言-->";
                            htmlstr +="<param name='SAMIFilename' value=''><!--字幕ID-->";
                            htmlstr +="</object>";
                            htmlstr +="</video>";

                            $("#video_wrap").append(htmlstr)


        //                    设置蒙板及弹出口样式
                            $("#shipin").css({
                                position:"fixed",
                                textAlign:"center",
        //                        width:parseInt(options.owidth)-parseInt(options.opadding),
                                height:"auto !important",
                                background:options.obackground,
                                margin:"0 auto",
                                top:parseInt($(window).height())/2,
                                left:parseInt($(window).width())/2,
                                width:"auto"
                            })

                            if( $.support.leadingWhitespace ){
                                $("#shipin").css({
                                    display:"none"
                                })
//                                alert("您的浏览器版本过低，请尽快升级，否则会影响网页性能和操作！");
                                var video = $('#spx1').get(0)
                                video.addEventListener("canplay",function(){
                                    $("#shipin").css({
                                        marginLeft:-parseInt($(this).parent().parent().width()/2),
                                        marginTop:-parseInt($(this).parent().parent().height()/2),
                                        display:"block"
                                    })
                                    var owidth=$("#shipin").css("width")
                                    var oheight=$("#shipin").css("height")
                                    $("#shipin").css({
                                        width:"0px",
                                        height:"0px"
                                    })
                                    $("#shipin").animate({
                                        width:owidth,
                                        height:oheight
                                    })
                                })
                            }

                            if( !$.support.leadingWhitespace ){

//                                if(sps1.CurrentPosition){alert("a")}
                                $("#shipin").css({
//                                    display:"none"
                                })
                                $("#suofang").css({
                                    display:"none"
                                })

//                                alert(parseInt($("#sps1").width()))
                                setInterval(function(){if(parseInt($("#sps1").width()) >'10'){

                                    var owidth=$("#shipin").css("width")
                                    var oheight=$("#shipin").css("height")
                                    $("#shipin").css({
                                        marginLeft:-parseInt(owidth)/2,
                                        marginTop:-parseInt(oheight)/2,
                                        display:"block"
                                    })
                                }},2)
                            }

                            $("#close").css({
                                position:"absolute",
                                top:"-26px",
                                right:"0px",
                                width:"30px",
                                height:"26px",
                                background:"#e5e1e1"+' '+options.oclose,
                                zIndex:"99",
                                cursor:"pointer"
                            }).click(function(){
                                    $("#shipin").remove()
                                })
                            $("#tuodong").css({
                                position:"absolute",
                                top:"-26px",
                                left:"0px",
                                height:"26px",
                                lineHeight:"26px",
        //                        background:options.oclose,
                                textAlign:"left",
                                zIndex:"9",
                                cursor:"move",
                                userSelect:"none",
                                width:"100%",
//                                background:"#e5e1e1",
                                background:"#e5e1e1"+" "+options.tuodongbg3,
                                textIndent:"10px"
                            }).mousedown(function(event){
        //                            event.preventDefault();
        //                            window.event.cancelBubble = true;
                                    var obool=true;
                                    var abs_x= event.pageX-$("#shipin").offset().left;
                                    var abs_y= event.pageY-$("#shipin").offset().top;
                                    $(document).mousemove(function(event){
                                        if(obool){

                                            var obj=$("#shipin");
                                            obj.css({
                                                "left":event.pageX-abs_x-parseInt($("#shipin").css("marginLeft")),
                                                "top":event.pageY-abs_y-parseInt($("#shipin").css("marginTop"))
                                            })
                                        }
                                    }).mouseup(function(){
                                            obool=false
                                        })
                                })

                            $("#shipin img").attr("src",options.obackground)
                            $("#shipin img").css({
                                position:"absolute",
                                top:"0px",
                                left:"0px"
                            })

        //                    视频区域样式
                            $("#video_wrap").css({
                                position:"relative",
                                border:"2px solid #ccc",
//                                boxShadow:"4px 4px 4px #ccc",
                                overflow:"hidden",
                                zIndex:"2",
                                textAlign:"center"
                            })
                            $("#sps1").css({
                                position:"relative",
                                zIndex:"2",
                                float:"left"
//                                width:"800px"
//                                minHeight:"300px"

                            })
//                            var userAgent = window.navigator.userAgent.toLowerCase();
//                            alert(userAgent)
//                            var version = $.browser.version;
                            $("#spx1").css({
                                width:"100%",
                                height:"auto"

                            })
                            $("#suofang").css({
                                position:"absolute",
                                bottom:"0px",
                                right:"0px",
                                zIndex:"9",
                                width:"20px",
                                height:"20px",
                                background:options.osuofang,
                                cursor:"pointer",
                                "display":"block\\9\\0"
                            }).mousedown(function(event){
                                    event.preventDefault();
                                    var obool=true;
                                    var abs_x2= event.pageX;
                                    options.owidth=parseInt($("#shipin").css("width"))
                                    $(document).mousemove(function(event){
                                        if(obool){
//                                            if(parseInt($("#shipin").css("width")) >= "200" & (parseInt(options.owidth)+parseInt(event.pageX)-parseInt(abs_x2))-parseInt(options.opadding) > "200"){
                                                var obj=$("#shipin");

                                                obj.css({
                                                    "width":(parseInt(options.owidth)+parseInt(event.pageX)-parseInt(abs_x2))-parseInt(options.opadding)
                                                })
//                                            }
//                                            else{
//                                                obj.css({
//                                                    "width":"200px"
//                                                })
//                                            }

                                        }
                                    }).mouseup(function(){

                                            options.owidth=parseInt($("#shipin").css("width"))+parseInt(options.opadding)
                                            obool=false
                                        })
                                }).hover(function(){$(this).css({background:options.osuofang2})},function(){$(this).css({background:options.osuofang})})
                        }
                        else{alert(options.oalert)}


                    })

            })
        }


    });
})(jQuery);



