<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","backgroundColor":"0","alignItems":"center","backgroundImage":"url(http://codegen.caihongy.cn/20221026/dfa16b1e27da4aacaf5408c8a8adddab.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"0","margin":"0","borderRadius":"10px","top":"0","background":"#fff","width":"570px","position":"absolute","right":"0","height":"100%"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"20px  0 0 0","lineHeight":"1.5","fontSize":"32px","color":"rgba(51, 51, 51, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"100%","margin":"20px 0","lineHeight":"1.5","fontSize":"24px","color":"#ab85d3","textAlign":"center"}'>考研互助交流平台注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="yonghuzhanghao">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>用户账号：</div>
				<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="yonghuxingming">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>用户姓名：</div>
				<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="lianxifangshi">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"15px auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="false" :style='{"width":"110px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#666","borderRadius":"8px","background":"linear-gradient(90deg, rgba(255,233,100,1) 0%, rgba(194,248,126,1) 29%, rgba(181,233,252,1) 61%, rgba(246,172,218,1) 100%)","display":"block","width":"80%","fontSize":"20px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"2px solid #494592","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#000","borderRadius":"8px","background":"0","display":"block","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
            },
			rules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('yonghu' == this.tableName) {
        this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
      }
        this.yonghuxingbieOptions = "男,女".split(',');
      if ('yonghu' == this.tableName) {
        this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px;
						outline: none;
						color: rgba(64, 158, 255, 1);
						display: inline-block;
						width: 100%;
						font-size: 14px;
						border-color: #ab85d3;
						border-width:  0 0 1px 0;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0;
						padding: 0 10px;
						outline: none;
						color: #ccc;
						width: 100%;
						font-size: 14px;
						border-color: #ab85d3;
						border-width: 0 0 1px 0;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						outline: none;
						color: #ccc;
						width: 100%;
						font-size: 14px;
						border-color: #ab85d3;
						border-width: 0 0 1px 0;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0;
						padding: 0 10px 0 30px;
						outline: none;
						color: #ccc;
						width: 100%;
						font-size: 14px;
						border-color: #ab85d3;
						border-width: 0 0 1px 0;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed rgba(171, 133, 211, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed rgba(171, 133, 211, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed rgba(171, 133, 211, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #ccc;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 160px;
		  		  text-align: center;
		  		  height: 160px;
		  		}
	}
</style>
