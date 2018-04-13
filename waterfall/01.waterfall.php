<?php 
	// 读取 json 
   $data = file_get_contents('info/data.json');
   // 转化为 php 对象
   $phpArr =json_decode($data);
	 // 随机 取 10个数
   $randomKey = array_rand($phpArr,10);
   //  print_r($randomKey);
   
   // 准备一个新的数组 
    $newArr =array();
   // 使用随机的key 取随机的值 
    for($i=0;$i<count($randomKey);$i++){
    	// 获取索引数组中的 每一个key
    	$Key =$randomKey[$i];
    	// 使用key 从数组中 取值
    	$obj =$phpArr[$Key];
    	//放到一个新的数组中 
    	$newArr[$i]=$obj;

    };
    // print_r($newArr);
	//将取出来的数 转化为json的字符串格式  发回给浏览器 
  
    echo json_encode($newArr);



	


 ?>