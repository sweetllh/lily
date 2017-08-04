$(function(){
	//banner高度
	$("#section-1st").css("height",$(window).height());
	
	$("#section-1st").mousemove(function(e){
	    var n = (e.pageX - $(document).width()/2)/150;
	   $("#section-1st .sec-1st-bg").css("transform", "rotateY("+n+"deg)");
	});
	
	
	
	//导航条 返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop() > 300){
			$(".navbar").slideDown();
			$(".toTop").fadeIn();
		}
		else{
			$(".navbar").slideUp();
			$(".toTop").fadeOut();
		}
	})
	
	$(".toTop").click(function(){
		$("body").animate({
			scrollTop:0
		},500)
	})
	
	
	
	
	
	//瀑布流
	var margin = 22; //间距
	var li = $("#imgs li");
	var li_W = li[0].offsetWidth;
	
	function waterfall(){
		h = [];   //放高度
		n = $("#imgs").width()/li_W|0;    //每排放的图片个数
		for(var i=0; i<li.length;i++){
			li_H = li[i].offsetHeight;   //获取每个li的高度
			if(i<n){
				h[i] = li_H;
				li.eq(i).css("top",0);   //设置第一行的高度
				li.eq(i).css("left",li_W*i);
			}
			else{
				min_H = Math.min.apply(null,h);   //获取最小高度
				minkey = getkey(h,min_H);  		 //获取最小高度的指针
				h[minkey] += li_H+margin;         //加上新高度后更新高度值
				li.eq(i).css("top",min_H+margin);   
				li.eq(i).css("left",minkey*li_W);
			}
		}
		$("#imgs").height(h.max() + "px");
		
	};
	
	
	//使用for in运算返回数组中某一值的对应项数
	function getkey(s,v){
		for(k in s){
			if(s[k]==v){
				return k;
			}
		}
	};
	
	//获取最长高度
	Array.prototype.max = function(){
		var maxH = 0;
		for(var i=0;i<this.length;i++){
			maxH = Math.max(maxH,this[i]);
		}
		return maxH;
	};
	
	
	/*这里一定要用onload，因为图片不加载完就不知道高度值*/
	window.onload = function() {waterfall();};
	/*浏览器窗口改变时也运行函数*/
	window.onresize = function() {waterfall();};
	
	
	
	//音乐播放控制
	

	

});





// skills chart
	$(document).ready(function(e) {
	var index=0;
	$(document).scroll(function(){
		var top = $(window).scrollTop() + $('#process1').height();
		if($('#process1').offset().top < top){
			if(index==0){	
				$('.chart').easyPieChart({	
					barColor: '#E87E04',
					trackColor:'#fff',
					easing: 'easeOutBounce',
					lineCap: 'butt',  
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	});








/*

	$(function(){
	
	//	技能
	var c = document.getElementById("process1");
	var	ctx = c.getContext('2d');
	var	centerX = c.width/2;   //Canvas中心点x轴坐标
	var centerY = c.height/2;  //Canvas中心点y轴坐标
	var rad = Math.PI*2/100; //将360度分成100份，那么每一份就是rad度
    var speed = 0.4;         //加载的快慢就靠它了
    var sec = document.getElementById("section-5th");
    window.onscroll = function(){
        	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度 
        	if(sec.offsetTop < scrollTop + 100 && speed < 80){
    			animate();
    			
    		} 
    		
    	}
    
    function animate(){
    	window.requestAnimationFrame(function(){
    		if(speed < 80 ){
    			animate();
    		}
    	});	
    	ctx.clearRect(0, 0, c.width, c.height);
		speed += 0.4;
		drawCircle(ctx,speed);
    };
    
  

	



	function drawCircle(ctx,percent){
		//画白色的静态圆
    	ctx.save();  
		ctx.strokeStyle = "#D8CCBE";  
		ctx.lineWidth = 12;	
		ctx.beginPath();
		ctx.arc(centerX, centerY, 68, 0, Math.PI*2, false);  
		ctx.stroke();     
		ctx.closePath(); 
		ctx.restore();
		
		
		//画进度环
		ctx.save();
		ctx.strokeStyle = "#E87E04";
		ctx.lineWidth = 12;
		ctx.beginPath();
		ctx.arc(centerX, centerY, 68, -Math.PI/2, -Math.PI/2 +percent*rad, false);
		ctx.stroke();     
		ctx.closePath();  
		ctx.restore();

		//百分比文字绘制
		ctx.save();
		ctx.fillStyle = "#474d5d";
		ctx.font = "bold 21px Arial";
        
		//绘制字体并指定位置
		ctx.fillText(percent.toFixed(0), centerX-20, centerY+10);
		ctx.restore();
	}
	
});
	
	*/

