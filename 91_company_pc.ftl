<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>让全球沟通更简单</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/preindex.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/element.css" />
    <style>
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }
        .service-detail-wrap a:hover{
            color:aliceblue!important;
        }
        [v-cloak]{
            display: none!important;
        }
        .home_nav_top{
            height: 80px;
            width: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 1000;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
<div id="app" v-cloak >
    <header class="home_nav_top">
        <div class="header_nav" id="onediv" style="position: static; margin: 0px; top: -15px; left: 0px; height: 87px; background: rgb(255, 255, 255);">
            <div class="container" style="width: 100%; margin: 0 25%;">
                <!-- 头部信息 -->
                <#if logo ??>
                <div class="logo"><a href="preIndex.html"><img style="width: 200px;" src="${logo.data_img}" alt=""></a></div>
                </#if>
                <!-- 导航栏 -->
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
                <#if param['91_pc_main_nav'].navigation_bar.children ??>
                <#list param['91_pc_main_nav'].navigation_bar.children as item>
                <el-submenu index="${item_index}">
                    <template slot="title">${item.navigation_name}</template>
                    <#--<#if item.children   ??>-->
                        <#list item.children as itm>
                    <el-menu-item  index="${itm_index}"><a href="articale.html?target_id1=${itm.target_id1}">${itm.navigation_name}</a></el-menu-item>
                        </#list>
                    <#--</#if>-->
                </el-submenu>
                </#list>
                </#if>
                </el-menu>
                <!-- <div class="line"></div> -->
                <!-- <div class="clear"></div> -->
            </div>
        </div>
    </header>
    <!-- 轮播图 -->
    <div id="slideBox" class="slideBox">
        <div class="block">
        <#if param['91_pc_main_carousel'].carousel_msg ??>
            <el-carousel :interval="4000" type="card" height="408px">
            <#list param['91_pc_main_carousel'].carousel_msg as vl>
                <el-carousel-item>
                    <img  class="carouse_img" src="${vl.event_img}" style="width: 100%; height: 360px;" alt="" />
                </el-carousel-item>
            </#list>
            </el-carousel>
        </#if>
        </div>
    </div>
    <!-- 关于中业 -->
    <div class="s1" style="padding-top: 26px;">
        <div class="container">
            <div class="s1_l f_l">
            <#if param['91_pc_about_us'].columns.column_video ??>
                <video controls="" width="335" height="230" src="${param['91_pc_about_us'].columns.column_video}" type="video/mp4">
                </video>
            </#if>
            </div>
            <div class="s1_r f_r">
                <div class="s1_rt">
            <#if param['91_pc_about_us'].columns.column_title ??>
            <big>${param['91_pc_about_us'].columns.column_title}</big>
            </#if>
        <#if param['91_pc_about_us'].columns.column_name ??>
        <a href="articale.html?target_id1=${param['91_pc_about_us'].columns.column_id}">${param['91_pc_about_us'].columns.column_name}</a>
        </#if>
                </div>
<#if param['91_pc_about_us'].columns.column_remarks ??>
<p>${param['91_pc_about_us'].columns.column_remarks}
    <a href="articale.html?target_id1=${param['91_pc_about_us'].columns.column_id}">了解更多→</a>
</p>
</#if>
</div>
<div class="clear"></div>
</div>
</div>

<!-- 产品与服务 -->
<div class="main-item-content-wrap">
    <div style="margin:0 auto;width:990px;text-align:center">
        <#if param['91_pc_products_services'].columns.column_title ??>
        <p style="color: #053596;margin-bottom: 10px;font-size: 26px;font-weight: bold;">${param['91_pc_products_services'].columns.column_title}</p>
    </#if>
    <#if param['91_pc_products_services'].columns.column_name ??>
    <p style="color: #053596;margin-bottom: 58px;font-size: 16px;font-weight: bold;">${param['91_pc_products_services'].columns.column_name}</p>
</#if>
</div>
<ul class="main-item-content">
    <#if param['91_pc_products_services'].columns.children ??>
    <#list param['91_pc_products_services'].columns.children as item>
    <li class="ai-teck-item ai-teck-voice-synch" style="background-image:url(${item.additional_background})" >
                <div class="service-part-wrap" >
                    <div class="service-part-desc">
                        <i class="icons service-part-logo icons-part-voice-synch"></i>
                        <div class="service-part-title"></div>
                        <div class="service-part-info">
                            <img src="${item.additional_thumbnail}">
                        </div>
                        <h2>${item.article_name}</h2>
                    </div>
                </div>
                <div class="service-detail-wrap">
                    <div>${item.article_describe}</div>
                <p><a href="main.html?column_id=${item.column_id}&article_id=${item.article_id}" target="_blank">查看详情</a></p>
            </div>
            </li>
        </#list>
        </#if>
            </ul>
        </div>
        <!-- 页脚部分 -->
        <div class="footer">
            <div class="container">
                <ul>
                <#if param['91_pc_bottom_nav'].navigation_bar.children ??>
                <#list param['91_pc_bottom_nav'].navigation_bar.children as item>
                    <li>
                        <h2>${item.navigation_name}</h2>
                    <#if item.children ??>
                    <#list item.children as value>
                        <p>
                        <#if (value.navigation_img=='')>
                            <a href="articale.html?target_id1=${value.target_id1}">
                                <span>•</span>${value.navigation_name}
                            </a>
                        <#else>
                            <a href="" style="background:url(${value.navigation_img}) no-repeat left center; padding-left:25px;">${value.navigation_name}
                            </a>
                        </#if>
                        </p>
                    </#list>
                    </#if>
                    </li>
                </#list>
                </#if>
                    <div class="clear"></div>
                </ul>
                <div class="wx">
                <#if webdata.micro_blog.data_img ??>
                    <p ><img src="${webdata.micro_blog.data_img}">${webdata.micro_blog.data_name}</p>
                </#if>
                <#if webdata.wechat.data_img ??>
                    <p><img src="${webdata.wechat.data_img}">${webdata.wechat.data_name}</p>
                </#if>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                <ul>
                <#if webdata.record_number1.data_img ??>
                    <p style="background:url(${webdata.record_number1.data_img}) no-repeat left center;">${webdata.record_number1.data_remark} </p>
                </#if>
                <#if webdata.record_number2.data_img ??>
                    <span style="background:url(${webdata.record_number2.data_img}) no-repeat left center;">${webdata.record_number2.data_remark}</span>
                </#if>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>
    </div>
    <script src="./js/jquery-1.12.4.js"></script>
    <script src="./add.js/footer.js"></script>
    <script src="./js/vue.js"></script>
    <script src="./js/element.js"></script>
    <script src="./js/axios.js"></script>
    <script src="./js/pub.js"></script>
    <script src="./add.js/preindex.js"></script>
</body>
</html>