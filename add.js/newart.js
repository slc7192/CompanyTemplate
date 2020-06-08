var newart=new Vue({
  el:"#app",
  data:{
    imgHeight:'',
    activeIndex: '1',
    headerLogo:"",
    resBody:[],
    resImage:[],
    svideo:"",
    mainTitle:'',
    maintit:'',
    article:[],
    foot:[],
    footer:[],
    handleSelect:'',
    banImage:[],
    list:[],
    id:'',
    column_id:'',
    article_id:'',
     /*分页 */
    total:500,
    currentPage:1,
    pageSize:9,
    list:[],
    bottom:'',
    bot:'',
    b_i:'',
    t_i:'',
    weibo:'',
    weib:'',
    weix:'',
    weixin:'',
    fileList: [],
    form:{
      file:'',
      age:'',
      recruit_name: null,
      phone: '',
      regist: null,
      ts_email:null,
      fileUrl:null
    },
    resPody:[],
    position:'',
    job_status:'',
    job_status_name:'',
    con_t:[],
    resData:[],
    job_label:'',
    job_address:'',
    job_number:'',
    fileUrl:'',
    job_msg:'',
    isHide:true,
    isHi:false,
    param:null,
    dfr:null,
    activeName:null,
    imageUrl: '',
    dialogTableVisible: false,
    dialogFormVisible: false,
    formLabelWidth: '120px',
    getRowKeys(row) {
      return row.id
    },
    file:'',
    job_id:'',
    ruleForm: {
      name:'',
      desc: '',
      domains: [{
        value: ''
      }],
      email: '',
      phone_number:''
    },
    ruleForm2:{
      u_name:'',
      phone_number:'',
      pass: '',
      checkPass: '',
      age: '',
      e_email:''
    },
    rules: {
      desc: [
        { required: true, message: '请填写留言内容', trigger: 'blur' }
      ],
      name: [
        { required: true, message: '请输入您的名字', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    rules2:{
      
      desgin: [
        { required: true, message: '请填写留言内容', trigger: 'blur' }
      ],
      u_name: [
        { required: true, message: '请输入您的名字', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      // pass: [
      //   { validator: validatePass, trigger: 'blur' }
      // ],
      // checkPass: [
      //   { validator: validatePass2, trigger: 'blur' }
      // ],
      // age: [
      //   { validator: checkAge, trigger: 'blur' }
      // ]
    }
  },
  created(){
    var id=pub._LinkParm('target_id1');//返回一个数组数据 获取栏目id
    var p_id=pub._LinkParm('job_id');
          console.log(p_id);
    // console.log(id);
    // 头部信息
    pub._InitAxios({
			_url:pub._url,  //公共接口
			ur:pub._DetailApi.getHeader,
			data:{terminal_id:"91"},
			cbk:(res)=>{
        this.resImage=res.data["964948f0c43b46e6a83a5cc8491bc553"].children;
        this.banImage=res.data["7a04f2f410494716b79cee0aad63cf5d"].children[0]
			}
    }),
     
    //Home内容
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.getHomePage,
      data:{terminal_id:"91"},
      cbk:(res)=>{
        console.log(res.data);
        this.headerLogo=res.data.logo.data_img;
        this.resBody=res.data.param['91_pc_main_nav'].navigation_bar.children;
        this.resData=res.data.param['91_pc_main_nav'].navigation_bar.children[5];
        console.log(this.resData);
        var newArr=[];
        for(var i=0;i<this.resData.children.length;i++){
            var targe=this.resData.children[i];
            newArr.push(targe);
            this.newArr=newArr;
        }
        this.con_t=this.newArr;
        
        console.log(this.con_t)
        this.resPody=res.data.param['91_pc_main_nav'].navigation_bar.children;
        // if(this.resPody.chldren)
        // console.log(this.resPody.children[0].target_name)
        //页底内容
        this.foot=res.data.param['91_pc_bottom_nav'].navigation_bar.children;
        this.weib=res.data.webdata.micro_blog.data_img;
        this.weibo=res.data.webdata.micro_blog.data_name;
        this.weix=res.data.webdata.wechat.data_img;
        this.weixin=res.data.webdata.wechat.data_name;
        this.bottom=res.data.webdata.record_number1;
        this.b_i=res.data.webdata.record_number1.data_img;
        this.bot=res.data.webdata.record_number2;
        this.t_i=res.data.webdata.record_number2.data_img;
        // console.log(this.foot);
      }
    }),
    this.getData();
  },
  methods:{
    roleupdate:function(i){
      // var target_id1=pub._LinkParm('target_id1');
      // console.log(target_id1)
      console.log(typeof i)
      this.activeName=`${i}`;
      console.log(this.activeName);
    },
    addClass(ind){
      this.position=ind;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    setparam(id){
      this.param = id
      console.log(this.param);
      pub._InitAxios({
        _url:pub._url,//公共接口
        ur:pub._DetailApi.getFind,
        data:{
          "job_id":`${id}`
        },
        cbk:(res)=>{
          console.log(res)
          this.job_label=res.data.job_label;
          this.job_address=res.data.job_address;
          this.job_number=res.data.job_number;
          //文章转为base64
          this.job_msg=Base64.decode(res.data.job_msg);
          this.job_id=res.data.job_id;
          console.log(job_id);
        }
      });
    },
    // 分页  文章列表
    getData(){
    var id=pub._LinkParm('target_id1');  //返回一个数组数据 获取栏目id
    // console.log(id);
      pub._InitAxios({
        _url:pub._url,//公共接口
        ur:pub._DetailApi.getXinxi,
        data:{
          column_id:`${id}`,
          "pageNum":this.currentPage,
          "pageSize":this.pageSize,  
      },
        cbk:(res)=>{
          var newArr=[];    //①先在外部创建一个数组
          for(var i=0;i<res.page.list.length;i++){//进行for循环   res.data是循环的内容
              var targe=res.page.list[i].job_id; 
              // console.log(targe)  
              newArr.push(targe);     //把获取到的循环后的结果push进数组中
              this.newArr = newArr
          }
          this.jiuzhen=this.newArr;   //在外部获取
          console.log(this.jiuzhen) 
          this.list=res.page.list;

          
          // this.job_status=this.list;
          // console.log(this.job_status);
          console.log(this.list)
          
          this.pageSize=res.page.pageSize;//一页几条数据
          this.currentPage=res.page.currPage;//当前第几页
          this.total=res.page.totalCount;//总数据
        }
      })
     
    },
    one:function(){
      this.isHide=false;
      this.isHi=true;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
      this.getData();
    },
    handleCurrentChange(val) {
      this.currentPage= val;
      // console.log(`当前页: ${val}`);
      this.getData();
    },
    //上传文件前，参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
    handlePreview:function(file){
      // console.log('before upload')
      // console.log(file)
      let extension = file.name.substring(file.name.lastIndexOf('.')+1);
      const isJPG=(extension === "docx" || extension === "docx" )
            const isLt2M = file.size / 1024 / 1024 < 5;
            if (!isJPG) {
                this.$message.error('上传文件只能是doc或者docx格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 5MB!');
            }
            return isJPG && isLt2M;
    },
    //删除
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    //文件上传成功
    handleAvatarSuccess(res, file) {
      var fileUrl =res;
      console.log('上传成功'+res);
      // console.log(res);
      this.$notify.success({        
        title: '成功',
        message: `文件上传成功`
      });
      this.fileUrl=fileUrl
      console.log(this.fileUrl);
    },
    // 文件上传失败
    handleError(err, file, fileList) {
      this.$notify.error({
        title: '错误',
        message: `文件上传失败`
      });
    },
    handleRemove(file, fileList) {
      console.log(file);
    },
    //文件超出个数限制
    handleExceed(files, fileList) {
      this.$notify.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    //文件状态改变
    fileChange(file,fileList){
      console.log('change')
      // console.log(file)
      this.fiu=file.response;
      // console.log(this.fiu);
     this.wfile=file.raw;
      console.log(this.wfile);
    },
    update:function(){
      newart.dialogFormVisible = true;
    },
    makesure:function(job_id){
      this.job_id = job_id;
      var file=newart.form.file;
      newart.dialogFormVisible = false;
      var recruit_name=newart.form.recruit_name;
      var recruit_tel=newart.form.ts_number;
      // var fileUrl=newart.form.fileUrl;
      // console.log(fileUrl);
      var recruit_email=newart.form.ts_email;
      var fileUrl=this.fileUrl;
      var json={recruit_name:recruit_name,recruit_tel:recruit_tel,recruit_url:fileUrl,recruit_email:recruit_email,job_id:job_id};
      console.log(json);
      $.ajax({
        type: "POST",
        url:  pub._url + pub._DetailApi.newart,
        contentType: "application/json",
        data: JSON.stringify(json),

        success: function(res){
          console.log(res);
            if(res.stateCode === "200"){
                // alert('操作成功');
                  // su.dialogFormVisible = false,
                  JSON.stringify(res.stateMsg)
                  // su.list_data(res.msg);
            }else{
              alert('上传失败,请补全信息');
              return;
            }
        }
    });
    },
    // submitForm:function(){
      
    // },
    detalForm:function(ruleForm){
      location.replace(location.href)
    },
    submitForm:function(){
      // this.job_id = job_id
      // console.log(this.job_id);
      var user_tel=newart.ruleForm.phone_number;
      var user_email=newart.ruleForm.email;
      var user_massgae=newart.ruleForm.desc;
      var json={user_tel:user_tel,user_massgae:user_massgae,user_email:user_email}
      console.log(json);
      var phoneReg=/^1[3456789]\d{9}$/;
      if(!user_tel || !phoneReg){
        alert('请填写正确的手机号码')
        return;
      }

      if(!user_email){
        alert('请填写邮箱地址')
        return;
      }
      if(!user_massgae){
        alert('请填写留言信息')
        return;
      }
      $.ajax({
        type: "POST",
        url: pub._url + pub._DetailApi.newliuyan,
        contentType: "application/json",
        data: JSON.stringify(json),
        success: function(res){
          console.log(res);
            if(res.stateCode === "200"){
                // alert('操作成功');
                  // su.dialogFormVisible = false,
                  // JSON.stringify(res.stateMsg)
                  // su.list_data(res.msg);
            }else{
              alert('操失败,请补全信息');
              return;
            }
        }
      })
    },
    submitForm2:function(){
      // this.job_id = job_id
      // console.log(this.job_id);
      var user_name=newart.ruleForm2.u_name;
      var user_tel=newart.ruleForm2.phone_number;
      var user_email=newart.ruleForm2.e_email;
      var user_password=newart.ruleForm2.pass;
      var json={user_name:user_name,user_tel:user_tel,user_password:user_password,user_email:user_email}
      console.log(json);
      $.ajax({
        type: "POST",
        url: pub._url + pub._DetailApi.newhuiyuan,
        contentType: "application/json",
        data: JSON.stringify(json),
        success: function(res){
          console.log(res);
            // if(res.stateCode === "200"){
            //     // alert('操作成功');
            //       // su.dialogFormVisible = false,
            //       JSON.stringify(res.stateMsg)
            //       // su.list_data(res.msg);
            // }
        }

      })
    }
  }
})