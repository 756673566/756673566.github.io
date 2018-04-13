// 为 jq  添加一个 插件
$.fn.extend({
	waterfall:function(){
		// alert('自己写的 瀑布流 插件 (⊙o⊙)哦');
		
		// 获取 一些 必须要知道的 参数
		 var $_this = this;
		 
		// 为了使用方便 保存为 一个变量
		/*
			1.方法中的 this 是什么对象 取决于 该方法 由谁点出来
			这里是 由 jq对象 点出来 所有是 jq对象
			
			2.为什么要定义一个 $_this的变量
				为了 让我们知道 他是一个 jq对象 不要 跟dom弄混了
		 */ 
		// console.log(this);
     
           // 获取总宽度
           var totalWidth =$_this.width();
           console.log(totalWidth);
           // 获取 子元素的宽度 
           var itemWidth =$_this.children(".item").width();
           console.log(itemWidth);
           // 计算 一行 能放多少个 子元素 
           var colNum = Math.floor((totalWidth/itemWidth));
           console.log(colNum);
           
           //  计算边距 
           var margin = (totalWidth-itemWidth*colNum)/(colNum+1);
           console.log(margin);
           
           // 准备一个数组    用来保存每一行的高度  默认是没有的  
           // 出于 美观 用 margin 
           var higthArr =[];
           for (var i=0;i<colNum;i++){
           	   higthArr[i]=margin;
           };
           
           //  jq 循环数组  
           $_this.children(".item").each(function(index,element){
           	// 获取当前子元素的高度
           	      var  currentHight =$(element).height(); 
           	      // 假设 索引为0 的 为最小高度
           	     var  minIndex =0;
           	      var minHight =higthArr[0];
           	      // 比较  计算元素 应该放在哪里 
           	      for(var i=0;i<higthArr.length;i++){
           	      	if(higthArr[i]<minHight){
           	      		// 替换 
           	      		minHight = higthArr[i];
           	      		minIndex = i;
           	      	}
           	      };
           	      // 循环完毕后得出 最小 高度值 和 索引 
           	      // 设置给当前循环的 子元素 
           	      // 修改 元素 的 css 属性 
           	      $(element).css({
           	      	top:minHight,
           	      	left:minIndex*margin + minIndex*itemWidth
           	      });
           	      // 修改 高度   
           	      // 给 下一行 设置高度 
           	      minHight+=currentHight;
           	      minHight+=margin;
           	      // 下个 数组 从 此 高度 开始  ， 所以赋值给高度 数组 
           	      higthArr[minIndex] = minHight;
           });
           //  为了 让 加载 标签  显示出来 
           //  要修改 父元素 的高度 
           //  获取 高度数组中最大的高度 
           // 赋值给父元素 即可 
           // 这里 也假设  最大值为索引 为 0 的 hightArr
            var  maxHeight = higthArr[0];
             for(var i=0;i<higthArr.length;i++){
             	if(maxHeight<higthArr[i]){
             		maxHeight = higthArr[i];
             	}
             }
             // 把获取到的高度赋值给 父元素
             $_this.height(maxHeight);
		// 动态 为数组 添加了 值



		// 设置 瀑布流中 子元素的 top 以及 left

			// 将dom 转化为 jq对象


			// 计算 数组中的 最小值
			// 假设 最小的索引为 0

			// 假设 最小的 高度为 第一个元素


			// 循环高度 数组 计算 最小的 索引值 以及 最小的高度值


			// 到这 就有了 最小的值


			// 修改 高度 数组中 对应 索引的 高度值


		// 找到 高度数组的 最大值 设置给 我们的 父容器 这里是 $_this 
		
		// 定义变量


		// 循环完毕 最高值 就有了
		// 将 作为 提示的 p标签 顶到下面去
   }
})