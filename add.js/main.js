var app=new Vue({
  el:"#app",
  data:{
    imgHeight:'',
    activeIndex: '1',
    headerLogo:"",
    resBody:[],
    resImage:[],
    svideo:"",
    aboutTitle:'',
    about:'',
    aboutWen:'',
    mainTitle:'',
    maintit:'',
    article:[],
    foot:[],
    footer:[],
    handleSelect:'',
    banImage:[],
    list:[],
    title:'',
    update_time:'',
    ueditor_text:'',
    bottom:'',
    bot:'',
    b_i:'',
    t_i:'',
    weibo:'',
    weib:'',
    weix:'',
    weixin:'',
    art_pic:[]
  },
  created(){
    var column_id=pub._LinkParm('column_id');
    console.log(column_id);
    var article_id=pub._LinkParm('article_id'); 
    console.log(article_id);
    pub._InitAxios({
			_url:pub._url,  //公共接口
			ur:pub._DetailApi.getHeader,
			data:{terminal_id:"81"},
			cbk:(res)=>{
				// console.log(res);//打印数据
        this.resImage=res.data["964948f0c43b46e6a83a5cc8491bc553"].children;
        this.banImage=res.data["7a04f2f410494716b79cee0aad63cf5d"].children[0]
        console.log(this.banImage)
        // console.log(this.resImage);
        // console.log(this.resBody);
			}
    }),
    //页底内容
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.getHomePage,
      data:{terminal_id:"81"},
      cbk:(res)=>{
        // console.log(res.data);
        this.headerLogo=res.data.logo.data_img;

        this.resBody=res.data.param['81_pc_main_nav'].navigation_bar.children;
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
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.article,
      data:{
        "column_id":`${column_id}`,
        "article_id":`${article_id}`
      },
      cbk:(res)=>{
        console.log(res.data);
        this.title=res.data.article_name;
        this.update_time=res.data.update_time;
        this.additional_cover=res.data.additional_cover;
        this.ueditor_text=Base64.decode(res.data.ueditor_text);
        this.art_pic=res.data.article_picture;
        console.log(this.art_pic)
      }
    })
    
  },
  methods:{}
})