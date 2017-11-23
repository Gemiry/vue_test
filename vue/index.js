	var app = new Vue({
		el:'#tel_1',
		data:{
			msg:"基本测试"
		}
	});
	//v-bind 测试
	var app_2 = new Vue({
		el:'#tel_2',
		data:{
			msg2:"这里是hover测试"
		}
	});
	// v-if 测试
	var app_3 = new Vue({
		el:'#tel_3',
		data:{
			sure:true,
		}
	});
	var btn_3 = document.getElementById('tel_3');
	console.log(btn_3);
	btn_3.onclick=function(){
		if (app_3.sure) 
			app_3.sure = false;
		else
			app_3.sure = true;		
	}
	//循环测试
	var app_4 = new Vue({
		el:"#tel_4",
		data:{
			lists:[
				{text:'内容1'},
				{text:'内容2'},
				{text:'内容3'},
			]
		}
	});
	//事件绑定测试
	var app_5 = new Vue({
		el:"#tel_5",
		data:{
			msg:"消息"
		},
		methods: {
			layer11:function(){
				alert("绑定事件生效了");
			}
		}
	});
	//model事件
	var app_6 = new Vue({
		el:"#tel_6",
		data:{
			msg:'电话'
		}
	});
	//模块

	Vue.component('todo-item',{
		props:['todo'],
		template:'<li>{{todo.text}}</li>'
	});
	var app_7 = new Vue({
		el:"#tel_7",
		data:{
			lists:[
				{id:0,text:'内容1'},
				{id:1,text:'内容2'},
				{id:2,text:'内容3'}
			]
		}
	});
