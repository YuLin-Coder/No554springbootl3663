export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"院校信息","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"备考经验","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"考研政策","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"课程资料","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"历年真题","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"考研倒计时","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"测评信息","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除","审核"],"menu":"在线测评","menuJump":"列表","tableName":"zaixianceping"}],"menu":"在线测评管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"打卡信息","menuJump":"列表","tableName":"dakaxinxi"}],"menu":"打卡信息管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"复试调剂","tableName":"news"},{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"院校信息列表","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"备考经验列表","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验模块"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看"],"menu":"考研政策列表","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"课程资料列表","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"历年真题列表","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"考研倒计时列表","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时模块"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","测评"],"menu":"测评信息列表","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除"],"menu":"在线测评","menuJump":"列表","tableName":"zaixianceping"}],"menu":"在线测评管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"打卡信息","menuJump":"列表","tableName":"dakaxinxi"}],"menu":"打卡信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"院校信息列表","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"备考经验列表","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验模块"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看"],"menu":"考研政策列表","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"课程资料列表","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"历年真题列表","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"考研倒计时列表","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时模块"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","测评"],"menu":"测评信息列表","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
