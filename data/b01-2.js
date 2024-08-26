optionsTotal = 9;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項

//題庫
question_lines = new Array(
  "透過什麼，目前臭氧層不再持續被破壞？;蒙特婁議定書;鄉村銀行,國際公平貿易組織,綠帶運動;。"
, "哪個地方是成功運用綠能科技的範例？;德國南方鄉村;日本琵琶湖,菲律賓依富高,拉斯維加斯;。"
, "利用手機找到自己現在的所在位置，可見手機裡有？;GPS;ABS,自拍鏡頭,人臉辨識系統,WIFI,喇叭;。"
, "全球文盲中，約多少比例是婦女？;三分之二;三分之一,二分之一,十分之三,四分之一;。"
, "關於德國南方農村的敘述何者正確？;把牛糞轉為生物沼氣與液態肥料;蓋很多發電機,設置離岸風電，利用地熱發電;。"
, "珍珠耐久煮，還很有彈性口感，可能添加了？;毒澱粉;海藻,三聚氰胺,小蘇打粉;。"
, "老闆選擇在東南亞各國增建工廠的原因？;人力成本較低;降低產品產量,比較容易找到接班人,不用繳稅;。"
, "上高速公路前使用app查詢即時路況，屬於？;e化公共服務;e化學習,e化商務,e化汽車;。"
, "何者屬於食品添加劑？;玉米糖漿;糖,抹茶粉,牛奶;。"
, "印度和哪一國對水資源分配的協商與共同整治計畫？;巴基斯坦;德國,臺灣,韓國,法國,英國,南非;。"
, "關於國際公平貿易組織，何者錯誤?;獲得世界銀行的貸款;農民可以獲得合理報酬,農民可以避免商人剝削,消費者可買到比較便宜商品;。"
, "貢寮區居民透過砌石修築水圳，重現下列何種地景?;水梯田;魚梯,水壩,旱田,太陽能發電廠;。"
, "種植在田埂上的綠籬植物有什麼作用？;可以防治蟲害;可以防止小鳥偷吃,可以過濾水中殘留的農藥,沒有作用;。"
, "飼牛場的老闆，可以把什麼轉為沼氣，並將沼氣用來發電;牛糞;雞屎,人大便,豬糞,狗糞;。"
, "「占領華爾街運動」是在哪裡發起？;美國;臺灣,中國,德國,法國,英國;。"
);



/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	if(typeof questionCurrendIndex == 'undefined' 
		|| typeof questionIndexRandom == 'undefined'
		|| questionCurrendIndex >= question_lines.length	) {
		
		questionIndexRandom = tools.makeRandomIndex(0, question_lines.length-1);
		questionCurrendIndex = 0;
	}
	//以亂數取得一筆題庫
	var line = question_lines[questionIndexRandom[questionCurrendIndex++]];
	//以分號將各欄分開
	var q = line.split(';');
	//題幹
	var cNumber = new Array(' ',' ',' ',' ');
	var question = cNumber[Math.floor(Math.random()*cNumber.length)] + q[0] + '(?)';
	//對的答案
	var okArray = q[1].split(',');
	var okRandom = tools.makeRandomIndex(0, okArray.length-1);
	var answer = okArray[okRandom[0]];	//對得答案只取一個
	//錯的答案
	var ngArray = q[2].split(',');
	
	//重組成物件,準備回傳
	var op = new Object();
	op.question = question;		//題幹
	op.optionsOK = new Array();	
	op.optionsOK[0] = answer;
	op.optionsNG = ngArray;
	
	return op;
};
