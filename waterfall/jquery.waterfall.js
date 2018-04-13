// 为 jq  添加一个 插件
$.fn.extend({
	waterfall:function(){
		// alert('自己写的 瀑布流 插件 (⊙o⊙)哦');
		
		// 获取 一些 必须要知道的 参数
		
		// 为了使用方便 保存为 一个变量
		/*
			1.方法中的 this 是什么对象 取决于 该方法 由谁点出来
			这里是 由 jq对象 点出来 所有是 jq对象
			
			2.为什么要定义一个 $_this的变量
				为了 让我们知道 他是一个 jq对象 不要 跟dom弄混了
		 */ 
		// console.log(this);
       var $_this = this;

		// 总宽度
        var totalWidth =$_this.width(); 
		//console.log(totalWidth);
		// 子元素宽度
       var itemsWidth =$_this.children(".item").width();
      // console.log(itemsWidth)
		// 计算每一行 元素的个数
		//  3.1 3.8 3.9 可能除不尽,直接去掉小数即可
       var colNum =Math.floor(totalWidth/itemsWidth);
     // console.log(colNum);
		// 计算间距
      var margin = (totalWidth-itemsWidth*colNum)/(colNum-1);
	//  console.log(margin)
		// 准备 数组 用来 保存 上一行的 高度 默认 是 没有高度的
		// 数组的长度 和 每一行元素的个数相同   里面默认值是 margin 
		// 出于美观考虑 我们数组的 默认值 都是 margin
         var hightArr = [];
         for(var i=0;i<colNum;i++){
         	 hightArr[i]=margin;
         }
       //  console.log(hightArr);
         //jq中 循环数组的方法 
         $_this.children(".item").each(function(index,element){
         	// 获取当前子元素的高度  
         	var currentHight =$(element).height();
         	// 假设 索引为0的是最小值 
         	var minIndex =0;
         	var minHeight =hightArr[0];
         	// 计算 元素 应该放在哪个位置 
         	for (var i=0;i<hightArr.length;i++){
         		 if(hightArr[i]<minHeight){
         		 	//替换一下
         		 	minHeight =hightArr[i];
         		 	minIndex =i;
         		 }
         	}
         	
         	//循环完毕 最小的高度 以及最小的索引值 
         	// 设置给 当前循环的子元素 即可 
         	//  top 高度为 计算出来的 最小高度 
         	// left 左间距 为 宽度*索引 + 索引 *间距 
         	$(element).css({
         		top:minHeight,
         		left:minIndex*itemsWidth + minIndex*margin
         	});
         	         //  修改minIndex 对应的值 即可 
             minHeight+=currentHight;
             minHeight+=margin;
             // 赋值给高度数组 
             hightArr[minIndex]=minHeight;
             
          
         });
           //步骤三
           /*
            *  修改  父盒子的高度即可 
            * 获取高度数组中 最大的值
            * 修改父盒子的高度为 计算出来的 最大值即可
            */
           var maxHeigh = hightArr[0];
     
           for(var i=0;i<hightArr.length;i++){
           	    if(maxHeigh<hightArr[i]){
           	    	// 将更大的值保存起来 
           	    	maxHeigh = hightArr[i];
           	    }
           }
           // 循环完毕后 最大的值 就有了 
           $_this.height(maxHeigh);
           
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