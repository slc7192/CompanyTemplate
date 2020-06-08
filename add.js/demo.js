var demo=new Vue({
  el:"#demo",
  data:{
    q:{
      uname:"",
      upwd:"",
      cpwd:"",
      email:"",
      phone:"",
      sex:0
  }
  },
  methods:{
    focus(e){//获得焦点事件
        var that=e.target;
        if(this.id=="uname"){
            $("#name").css("color","#fff")
            .html("请输入3~12位数字、字母或下划线，不能以数字开头")
            return;
        }else if(this.id=="upwd"){
            $("#pwd").css("color","#fff")
            .html("请输入6~12位数字或字母")
            return;
        }else if(this.id=="cpwd"){
            $("#tpwd").css("color","#fff")
            .html("请输入6~12位数字或字母")
            return;
        }
    },
    blur(e){
        var input=e.target;
        if(input.id=="uname"){
            var u=this.uname;
            if(!u){
                this.$toast("用户名不能为空");
                return;
            };
            var reg=/^[a-z]\w{2,11}$/i;
            if(!reg.test(u)){
                this.uname="";
                $("#name").css("color","red")
                .html("×");
                return;
            }else{
                var url="user/check";
                var obj={params:{uname:this.uname}};
                console.log(obj)
                this.axios.get(url,obj).then(res=>{
                    console.log(res.data)
                    if(res.data.code==1){
                        $("#name").css("color","red").html("×");
                        this.uname="";
                        return;
                    }else{
                        $("#name").css("color","green").html("√")
                        return;
                    }
                })
            }
        }else if(input.id=="upwd"){
            var p=this.upwd;
            if(!p){
                this.$toast("密码不能为空！");
                return;
            }
            var reg=/^[0-9a-z]{6,12}$/i;
            if(!reg.test(p)){
                this.upwd="";
                $("#pwd").css("color","red")
                .html("×");
                return;
            }else{
                $("#pwd").css("color","green")
                .html("√");
                return;
            }
        }else if(input.id=="cpwd"){
            var p=this.upwd;
            var t=this.cpwd;
            if(!t){
                this.$toast("密码验证不能为空！");
                return;
            }
            if(p!=t){
                this.cpwd="";
                $("#tpwd").css("color","red")
                .html("×");
                return;
            }else{
                $("#tpwd").css("color","green")
                .html("√");
                return;
            }
        }else if(input.id=="email"){
            var e=this.email;
            if(!e){
                this.$toast("邮箱不能为空！");
                return;
            }
            var reg=/^[0-9a-z]\w*@\w+\.\w+(\.cn)?$/i;
            if(!reg.test(e)){
                $("#mail").css("color","red")
                .html("×");
                return;
            }else{
                $("#mail").css("color","green").html("√");
                return;
            }
        }else if(input.id=="phone"){
            var ph=this.phone;
            if(!ph){
                this.$toast("电话不能为空！");
                return;
            }
            var reg=/^1[3-9]\d{9}$/;
            if(!reg.test(ph)){
                $("#tel").css("color","red")
                .html("×");
                return;
            }else{
                $("#tel").css("color","green").html("√");
                return;
            }
        }
    },
    reg(){
        var name=this.uname;
        var pwd=this.upwd;
        var cp=this.cpwd;
        var em=this.email;
        var ph=this.phone;
        var sex=document.getElementsByName("sex");
        if(sex[0].checked){
            this.sex=1
        }else{
            this.sex=0
        }
        var gender=this.sex;
        if(name==""){
            this.$messagebox("消息","用户名不能为空");
            uname.focus();
            return;
        }
        if(pwd==""){
            this.$messagebox("消息","密码不能为空");
            upwd.focus();
            return;
        }
        if(cp==""){
            this.$messagebox("消息","请进行密码验证");
            cpwd.focus();
            return;
        }
        if(em==""){
            this.$messagebox("消息","请输入您的邮箱");
            email.focus();
            return;
        }
        if(ph==""){
            this.$messagebox("消息","请输入您的联系方式");
            phone.focus();
            return;
        }
        var url="user/reg";
        var obj={params:{uname:name,upwd:pwd,email:em,phone:ph,gender}};
        this.axios.get(url,obj).then(res=>{
            if(res.data.code==-1){
                this.$messagebox.alert("注册失败,请重试").then(()=>{
                    this.$router.push("Reg");
                    $("#uname").focus(); 
                })
            }else{
                this.$messagebox.alert("注册成功").then(this.$router.push("Index") ) 
            }
        })
    }
}
})