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
       // 为了 方便使用 
        var $_this = this;
        // 计算一下必要的 参数 
        // 获取 父盒子的宽度 
        var totalWidth = $_this.width();
        console.log(totalWidth);
        // 获取 子元素的宽度 
        var itemWidth = $_this.children(".item").width();
        console.log(itemWidth);
        // 获取 每一行的 个数  向下 取整 
        var colNum =Math.floor(totalWidth/itemWidth);
        console.log(colNum);
        // 获取 间距 
        var margin =(totalWidth-itemWidth*colNum)/(colNum+1);
        console.log(margin);
        // 准备添加一个数组   用来保存第一行的 高度   默认是没有高度的  
        // 为了美观 把margin 给 默认高度数组 
        var hightArr = [];
        for(var i=0;i<colNum;i++){
        	hightArr[i] =margin;
        }
         
        //  jq 循环数组     找出 高度最小的部分
        $_this.children(".item").each(function(index,element){
        	// 获取当前元素的 高度
        	var currentHeight = $(element).height();
        	// 假设 索引为0 的高度最小
        	var minIdex = 0;
        	var minHeight = hightArr[0];
        	for(var i=0;i<hightArr.length;i++){
        		if(hightArr[i]<minHeight){
        			minHeight =hightArr[i];
        			minIdex =i;
        		}
        	}
        	// 循环完毕 得到 高度最小值  和 对应的索引值 
        	// 把值设置给 该元素的css
        	$(element).css({
        		top:minHeight,
        		left:itemWidth*minIdex+minIdex*margin
        	});
        	// 此时 最小高度 改变  要重新给 minHeight 赋值
        	  minHeight += currentHeight;
        	  minHeight += margin;
        	  // 下一行数组要在当前的高度值继续 添加内容    所以把当前高度要  赋值给高度数组
        	  hightArr[minIdex] =minHeight;
        })
        // 为了要让 父 标签 不被 显示 出来  （即不被内容挡住）
        // 要给父标签 设置 高度
         // 高度 即为 高度数组中 最大的高度
         // 这里假设  最大高度为 索引为0 的高度数组
         var maxHeight = hightArr[0];
         for(var i=0;i<hightArr.length;i++){
         	if(maxHeight<hightArr[i]){
         		maxHeight=hightArr[i]
         	}
         };
         // 赋值给 父元素
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