<template>
<div class="home-preview" :style='{"width":"1200px","margin":"10px auto","flexWrap":"wrap","justifyContent":"space-between","display":"flex"}'>


	<!-- 关于我们 -->
	<div :style='{"padding":"0px","margin":"20px 0 0 0","borderColor":"#dbd9f4","borderRadius":"8px","background":"#fff","borderWidth":"2px 1px 1px 1px","display":"block","width":"30%","position":"relative","borderStyle":"solid","height":"500px","order":"2"}'>
	  <div :style='{"margin":"0 auto","color":"#333","borderRadius":"0px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","width":"260px","fontSize":"22px","lineHeight":"42px","height":"42px"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"4px auto 12px","color":"#999","textAlign":"center","background":"none","display":"none","width":"75%","fontSize":"16px","lineHeight":"24px","height":"24px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0 20px","margin":"20px 0 0 0","flexWrap":"wrap","display":"block","height":"200px"}'>
	    <img :style='{"width":"100%","margin":"0px","objectFit":"cover","borderRadius":"4px","display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"0","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px","boxShadow":"0px 0px 2px #e6e6e6","margin":"0 auto","color":"#333","textIndent":"2em","overflow":"hidden","borderRadius":"4px","top":"240px","left":"38px","background":"rgba(248,248,252,.8)","width":"280px","lineHeight":"2","fontSize":"14px","position":"absolute","height":"216px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	<!-- 系统简介 -->
	<div :style='{"padding":"0px 20px 40px 20px","margin":"20px 0 0 0","borderColor":"#dbd9f4","display":"flex","justifyContent":"space-between","borderRadius":"8px","flexWrap":"wrap","background":"#fff","borderWidth":"2px 1px 1px 1px","width":"100%","position":"relative","borderStyle":"solid","height":"auto","order":"5"}'>
	  <div :style='{"margin":"0 auto","color":"#333","textAlign":"center","left":"39%","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","width":"260px","lineHeight":"42px","fontSize":"22px","position":"absolute","height":"42px","order":"0"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px","height":"40px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"padding":"0px","margin":"70px 0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"61%","float":"left","height":"420px","order":"2"}'>
	    <img :style='{"margin":"0 10px 0 0","transform":"rotate(0deg)","objectFit":"cover","borderRadius":"4px","display":"block","width":"100%","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"width":"240px","margin":"0","transform":"rotate(4deg)","objectFit":"cover","display":"none","height":"180px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"12px","boxShadow":"0px 0px 2px #e0e0e0","margin":"62px 0 0 0","color":"#333","right":"50px","float":"right","textIndent":"2em","overflow":"hidden","top":"44px","borderRadius":"4px","background":"rgba(248,248,252,.8)","width":"56%","lineHeight":"24px","fontSize":"14px","position":"absolute","height":"352px","order":"3"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"transform":"rotate(5deg)","top":"74px","left":"140px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","width":"320px","position":"absolute","height":"240px","order":"4","zIndex":"99"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="recommend" :style='{"padding":"0px 10px 10px 10px","margin":"20px 0px 0px","borderColor":"#dbd9f4","borderRadius":"8px","background":"#fff","borderWidth":"2px 1px 1px 1px","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
	
    <div class="title" :style='{"width":"260px","margin":"0px auto","lineHeight":"42px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","height":"42px"}'>
		<span :style='{"color":"#333","fontSize":"22px"}'>院校信息推荐</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div :style='{"width":"100%","padding":"10px","margin":"12px 0 0px 0","borderRadius":"8px","background":"#fff","height":"auto"}' class="swiper-container" id="recommendyuanxiaoxinxi">
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","padding":"0 0 8px 0","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","fontSize":"0","position":"relative"}' v-for="(item,index) in yuanxiaoxinxiRecommend" :key="index" @click="toDetail('yuanxiaoxinxiDetail', item)">
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-if="item.yuanxiaotupian.substr(0,4)=='http'" :src="item.yuanxiaotupian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-else :src="baseUrl + (item.yuanxiaotupian?item.yuanxiaotupian.split(',')[0]:'')" alt="" />
					<div class="line1" :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"24px","color":"#333","background":"#f8f8fc"}'>{{item.yuanxiaomingcheng}}</div>
				</div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('yuanxiaoxinxi')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221025/e0decb7681914db296f8d7e15ca1fe48.gif)","justifyContent":"space-between","display":"flex","height":"100px"}'>
		<div class="box1" :style='{"width":"10%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>
<div class="recommend" :style='{"padding":"0px 10px 10px 10px","margin":"20px 0px 0px","borderColor":"#dbd9f4","borderRadius":"8px","background":"#fff","borderWidth":"2px 1px 1px 1px","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
	
    <div class="title" :style='{"width":"260px","margin":"0px auto","lineHeight":"42px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","height":"42px"}'>
		<span :style='{"color":"#333","fontSize":"22px"}'>考研政策推荐</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div :style='{"width":"100%","padding":"10px","margin":"12px 0 0px 0","borderRadius":"8px","background":"#fff","height":"auto"}' class="swiper-container" id="recommendkaoyanzhengce">
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","padding":"0 0 8px 0","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","fontSize":"0","position":"relative"}' v-for="(item,index) in kaoyanzhengceRecommend" :key="index" @click="toDetail('kaoyanzhengceDetail', item)">
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-if="item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
					<div class="line1" :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"24px","color":"#333","background":"#f8f8fc"}'>{{item.biaoti}}</div>
				</div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('kaoyanzhengce')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221025/e0decb7681914db296f8d7e15ca1fe48.gif)","justifyContent":"space-between","display":"flex","height":"100px"}'>
		<div class="box1" :style='{"width":"10%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>
<div class="recommend" :style='{"padding":"0px 10px 10px 10px","margin":"20px 0px 0px","borderColor":"#dbd9f4","borderRadius":"8px","background":"#fff","borderWidth":"2px 1px 1px 1px","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
	
    <div class="title" :style='{"width":"260px","margin":"0px auto","lineHeight":"42px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","height":"42px"}'>
		<span :style='{"color":"#333","fontSize":"22px"}'>课程资料推荐</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div :style='{"width":"100%","padding":"10px","margin":"12px 0 0px 0","borderRadius":"8px","background":"#fff","height":"auto"}' class="swiper-container" id="recommendkechengziliao">
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","padding":"0 0 8px 0","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","fontSize":"0","position":"relative"}' v-for="(item,index) in kechengziliaoRecommend" :key="index" @click="toDetail('kechengziliaoDetail', item)">
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-if="item.kechengfengmian.substr(0,4)=='http'" :src="item.kechengfengmian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","width":"100%","borderRadius":"8px 8px 0 0","height":"220px"}' v-else :src="baseUrl + (item.kechengfengmian?item.kechengfengmian.split(',')[0]:'')" alt="" />
					<div class="line1" :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"24px","color":"#333","background":"#f8f8fc"}'>{{item.kechengmingcheng}}</div>
				</div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('kechengziliao')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221025/e0decb7681914db296f8d7e15ca1fe48.gif)","justifyContent":"space-between","display":"flex","height":"100px"}'>
		<div class="box1" :style='{"width":"10%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>

	
<div class="news" :style='{"margin":"20px 0 0 0","borderColor":"#dbd9f4","borderRadius":"8px","background":"#fff","borderWidth":"2px 1px 1px 1px","width":"68%","borderStyle":"solid","height":"auto","order":"1"}'>
	
	<div class="title" :style='{"margin":"0px auto","borderRadius":"0 0 30px 30px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/bb1ea9437beb4e1da8fcd1583db2f111.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","width":"260px","lineHeight":"42px","height":"42px"}'>
		<span :style='{"color":"#333","fontSize":"22px"}'>复试调剂</span>
	</div>
	
	
	
	
	
	
	
	
	
	
	<!-- 样式九 -->
	<div v-if="newsList.length" class="list list9 index-pv1" :style='{"width":"100%","padding":"16px 20px 0 20px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>
	  <div v-for="(item,index) in newsList" v-if="index<6" :key="index" @click="toDetail('newsDetail', item)" :style='{"cursor":"pointer","padding":"0 20px 8px","margin":"0px auto 0","borderColor":"#ccc","background":"#f8f8fc","borderWidth":"0 0 1px 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}' class="new9-list-item animation-box">
		<div :style='{"margin":"0 30px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","background":"none","width":"86%","fontSize":"16px","lineHeight":"34px","textOverflow":"ellipsis"}' class="new9-list-item-title line1">{{ item.title }}</div>
		<div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"10px","color":"#999","top":"4px"}' class="new9-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
	    <div :style='{"margin":"0 0 0 30px","overflow":"hidden","color":"#666","background":"none","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"48px"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
		<div :style='{"padding":"5px 10px","color":"#333","top":"8px","left":"8px","background":"#dbd9f4","display":"inline-block","width":"30px","fontSize":"12px","position":"absolute"}' class="new9-list-item-identification">新闻动态</div>
	  </div>
	</div>
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","cursor":"pointer","margin":"16px auto 0","borderRadius":"16px","textAlign":"center","background":"#dbd9f4","display":"block","width":"80px","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221025/e0decb7681914db296f8d7e15ca1fe48.gif)","justifyContent":"space-between","display":"flex","height":"100px"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>


<div class="lists" :style='{"margin":"20px 0 0","borderColor":"#dbd9f4","borderRadius":"8px","flexWrap":"wrap","background":"#fff","borderWidth":"1px 1px 1px 2px","display":"flex","borderStyle":"solid","justifyContent":"space-between","order":"4"}'>
	
	<div class="title" :style='{"margin":"auto 0","alignItems":"center","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/8dd5408f3db747ada55008950b9a3902.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","display":"flex","width":"42px","lineHeight":"1.1","height":"260px"}'>
	  <span :style='{"color":"#333","fontSize":"22px"}'>备考经验展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"calc(100% - 42px)","padding":"10px 10px 0 10px","borderRadius":"8px","background":"#fff","height":"auto"}'>
		<div :style='{"cursor":"pointer","padding":"0 0 8px 0","margin":"10px 1%","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","display":"inline-block","width":"18%","position":"relative","height":"auto"}' v-for="(item,index) in beikaojingyanList" :key="index" @click="toDetail('beikaojingyanDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-if="item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0px","color":"#666","textAlign":"center","background":"#f8f8fc","lineHeight":"24px","fontSize":"14px","height":"24px"}'>{{item.biaoti}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('beikaojingyan')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>

</div>
<div class="lists" :style='{"margin":"20px 0 0","borderColor":"#dbd9f4","borderRadius":"8px","flexWrap":"wrap","background":"#fff","borderWidth":"1px 1px 1px 2px","display":"flex","borderStyle":"solid","justifyContent":"space-between","order":"4"}'>
	
	<div class="title" :style='{"margin":"auto 0","alignItems":"center","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/8dd5408f3db747ada55008950b9a3902.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","display":"flex","width":"42px","lineHeight":"1.1","height":"260px"}'>
	  <span :style='{"color":"#333","fontSize":"22px"}'>历年真题展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"calc(100% - 42px)","padding":"10px 10px 0 10px","borderRadius":"8px","background":"#fff","height":"auto"}'>
		<div :style='{"cursor":"pointer","padding":"0 0 8px 0","margin":"10px 1%","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","display":"inline-block","width":"18%","position":"relative","height":"auto"}' v-for="(item,index) in linianzhentiList" :key="index" @click="toDetail('linianzhentiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-if="item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0px","color":"#666","textAlign":"center","background":"#f8f8fc","lineHeight":"24px","fontSize":"14px","height":"24px"}'>{{item.biaoti}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('linianzhenti')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>

</div>
<div class="lists" :style='{"margin":"20px 0 0","borderColor":"#dbd9f4","borderRadius":"8px","flexWrap":"wrap","background":"#fff","borderWidth":"1px 1px 1px 2px","display":"flex","borderStyle":"solid","justifyContent":"space-between","order":"4"}'>
	
	<div class="title" :style='{"margin":"auto 0","alignItems":"center","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/8dd5408f3db747ada55008950b9a3902.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","display":"flex","width":"42px","lineHeight":"1.1","height":"260px"}'>
	  <span :style='{"color":"#333","fontSize":"22px"}'>考研倒计时展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"calc(100% - 42px)","padding":"10px 10px 0 10px","borderRadius":"8px","background":"#fff","height":"auto"}'>
		<div :style='{"cursor":"pointer","padding":"0 0 8px 0","margin":"10px 1%","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","display":"inline-block","width":"18%","position":"relative","height":"auto"}' v-for="(item,index) in kaoyandaojishiList" :key="index" @click="toDetail('kaoyandaojishiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-if="item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0px","color":"#666","textAlign":"center","background":"#f8f8fc","lineHeight":"24px","fontSize":"14px","height":"24px"}'>{{item.biaoti}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('kaoyandaojishi')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>

</div>
<div class="lists" :style='{"margin":"20px 0 0","borderColor":"#dbd9f4","borderRadius":"8px","flexWrap":"wrap","background":"#fff","borderWidth":"1px 1px 1px 2px","display":"flex","borderStyle":"solid","justifyContent":"space-between","order":"4"}'>
	
	<div class="title" :style='{"margin":"auto 0","alignItems":"center","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221105/8dd5408f3db747ada55008950b9a3902.png) no-repeat,radial-gradient(circle, rgba(219,217,244,1) 0%, rgba(181,177,240,1) 100%)","display":"flex","width":"42px","lineHeight":"1.1","height":"260px"}'>
	  <span :style='{"color":"#333","fontSize":"22px"}'>测评信息展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"calc(100% - 42px)","padding":"10px 10px 0 10px","borderRadius":"8px","background":"#fff","height":"auto"}'>
		<div :style='{"cursor":"pointer","padding":"0 0 8px 0","margin":"10px 1%","borderRadius":"8px","background":"rgba(242, 242, 242,.6)","display":"inline-block","width":"18%","position":"relative","height":"auto"}' v-for="(item,index) in cepingxinxiList" :key="index" @click="toDetail('cepingxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-if="item.tupian.substr(0,4)=='http'" :src="item.tupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"8px 8px 0 0","display":"block","height":"210px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0px","color":"#666","textAlign":"center","background":"#f8f8fc","lineHeight":"24px","fontSize":"14px","height":"24px"}'>{{item.biaoti}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('cepingxinxi')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","borderRadius":"30%","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%),#dbd9f4","display":"block","width":"18%","lineHeight":"32px"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#666","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        yuanxiaoxinxiRecommend: [],
        kaoyanzhengceRecommend: [],
        kechengziliaoRecommend: [],

        beikaojingyanList: [],
        linianzhentiList: [],
        kaoyandaojishiList: [],
        cepingxinxiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 4,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "yuanxiaoxinxi/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 10,
			}}).then(res => {
				if (res.data.code == 0) {
					this.yuanxiaoxinxiRecommend = res.data.data.list;
					
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"5","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper('#recommendyuanxiaoxinxi', options)
					})
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "kaoyanzhengce/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 10,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kaoyanzhengceRecommend = res.data.data.list;
					
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"5","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper('#recommendkaoyanzhengce', options)
					})
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "kechengziliao/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 10,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kechengziliaoRecommend = res.data.data.list;
					
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"5","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper('#recommendkechengziliao', options)
					})
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('beikaojingyan/list', {params: {
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.beikaojingyanList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('linianzhenti/list', {params: {
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.linianzhentiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('kaoyandaojishi/list', {params: {
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kaoyandaojishiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('cepingxinxi/list', {params: {
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.cepingxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #ab93dd;
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: #ab93dd;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0) scale(0.99) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: 0;
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
