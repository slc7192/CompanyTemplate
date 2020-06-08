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
    pageSize:6,
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
    rns:''
  },
  created(){
    var id=pub._LinkParm('target_id1');//返回一个数组数据 获取栏目id
    console.log(id);
    // 头部信息
    pub._InitAxios({
			_url:pub._url,  //公共接口
			ur:pub._DetailApi.getHeader,
			data:{terminal_id:"81"},
			cbk:(res)=>{
        this.resImage=res.data["964948f0c43b46e6a83a5cc8491bc553"].children;
        this.banImage=res.data["7a04f2f410494716b79cee0aad63cf5d"].children[0]
			}
    }),
     
    // 判断跳转
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.wz,
      data:{column_id:`${id}`},
      cbk:(res)=>{
        this.rns=res.data.column_name;
        console.log(this.rns);
        // console.log(res.data);
        this.article_id=res.data.children[0].article_id;
        var article_id=this.article_id
        console.log(article_id);
        if(res.data.children.length==1){
           location.replace(`./main.html?column_id=${id}&article_id=${article_id}`);
            return;
          }
      }
    }),
    //Home内容
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.getHomePage,
      data:{terminal_id:"81"},
      cbk:(res)=>{
        // console.log(res.data);
        this.headerLogo=res.data.logo.data_img;
        this.resBody=res.data.param['81_pc_main_nav'].navigation_bar.children;
        this.resPody=res.data.param['81_pc_main_nav'].navigation_bar.children;
        // if(this.resPody.chldren)
        console.log(this.resPody)
        //页底内容
        this.foot=res.data.param['81_pc_bottom_nav'].navigation_bar.children;
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
    // pub._InitAxios({
    //   _url:pub._url,
    //   ur:pub._DetailApi.gaikuo,
    //   data:{column_id:`${id}`},
    //   cbk:(res)=>{
    //     console.log(res.data);
    //   }
    // }),
    this.getData();

  },
  methods:{
    // 分页  文章列表
    getData(){
    var id=pub._LinkParm('target_id1');  //返回一个数组数据 获取栏目id
    // console.log(id);
      pub._InitAxios({
        _url:pub._url,//公共接口
        ur:pub._DetailApi.getPart,
        data:{
          column_id:`${id}`,
          "pageNum":this.currentPage,
          "pageSize":this.pageSize,  
      },
        cbk:(res)=>{
          for(var value of res.page.list){
            // console.log(value);
          }
          this.list=res.page.list;
          console.log(this.list)
          this.pageSize=res.page.pageSize;//一页几条数据
          // console.log(this.pageSize)
          this.currentPage=res.page.currPage;//当前第几页
          this.total=res.page.totalCount;//总数据
        }
      })
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
    }
  }
})