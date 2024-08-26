//題庫
question_lines = new Array(
  "態度堅決，毫不猶豫退縮;甘泉必竭;木雕泥塑,川流不息,毅然決然;"
, "連綿不絕或往返不斷;暮鼓晨鐘,木雕泥塑,川流不息,甘泉必竭;咄咄逼人,五顏六色,畫龍點睛,人多勢眾; "
, "比喻使人警醒的力量;木雕泥塑;川流不息,暮鼓晨鐘,毅然決然,甘泉必竭; "
, "比喻有才華的人容易早衰;甘泉必竭;木雕泥塑,毅然決然,暮鼓晨鐘; "


);


//基本設定
optionsTotal = 9;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項
holdTime = 2;			//暫停等候選取的時間(sec)
timerStartSeconds = 60;	//一題(關)有幾秒的作答時間

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	//取得題目
	var question = tools.getOneQuestion(question_lines);
	//更改一下題幹
	var cNumber = new Array(' ',' ',' ',' ');
	question['question'] = cNumber[Math.floor(Math.random()*cNumber.length)] + question['question'];
	
	return question;
};
