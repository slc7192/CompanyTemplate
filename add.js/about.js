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
    ueditor_text:''
  },
  created(){
    var about_id=pub._LinkParm('about_column_id');
    console.log(about_id);
    var article_id=pub._LinkParm('article_id'); 
    console.log(article_id);
    pub._InitAxios({
			_url:pub._url,  //公共接口
			ur:pub._DetailApi.getHeader,
			data:{terminal_id:"81"},
			cbk:(res)=>{
				// console.log(res);//打印数据
        this.headerLogo=res.data.logo.data_img;//顶部logo赋值
        this.resBody=res.data.main_navigation.children;
        this.resImage=res.data["964948f0c43b46e6a83a5cc8491bc553"].children;
        this.banImage=res.data["7a04f2f410494716b79cee0aad63cf5d"].children[0]
        console.log(this.banImage)
        // console.log(this.resImage);
        // console.log(this.resBody);
        for(var i=0;i<this.resBody.length;i++){
          this.oneTitle=this.resBody[i].navigation_name;
        }
			}
    }),
    //页底内容
    pub._InitAxios({
      _url:pub._url,
      ur:pub._DetailApi.getHomePage,
      data:{terminal_id:"81"},
      cbk:(res)=>{
        // console.log(res.data);
        this.foot=res.data.param.pc_bottom_nav.navigation_bar.children;
        console.log(this.foot);
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
      }
    })
    
  },
  methods:{}
})