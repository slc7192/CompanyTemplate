var app=new Vue({
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
    doot:null,
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
    resPody:[],
    job_status:'',
    job_status_name:'',
    con_t:[],
    one:'true',
    two:'false',
    resData:[],
    job_label:'',
    job_address:'',
    job_number:'',
    job_msg:'',
    list:[]
  },
  created(){
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
        // console.log(res.data);
        this.headerLogo=res.data.logo.data_img;
        this.resBody=res.data.param['91_pc_main_nav'].navigation_bar.children;
        this.resPody=res.data.param['91_pc_main_nav'].navigation_bar.children;
        // if(this.resPody.chldren)
        console.log(this.resPody)
        //页底内容
        this.doot=res.data.param['91_pc_bottom_nav'].navigation_bar.children;
        console.log(typeof this.doot);
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
    pub._InitAxios({
      _url:pub._url,//公共接口
      ur:pub._DetailApi.getFind,
      data:{
        "job_id":'8'
      },
      cbk:(res)=>{
        console.log(res)
        this.job_label=res.data.job_label;
        console.log(this.job_label)
        this.job_address=res.data.job_address;
        this.job_number=res.data.job_number;
        //文章转为base64
        this.job_msg=Base64.decode(res.data.job_msg);
      }
    })
  }
  })