
//題庫
question_lines = new Array(
  "形容毛多而柔細;毛茸茸;毛耳耳,軟綿綿,髒兮兮,亂糟糟;"
  "流淚而將哭泣的樣子;泫然欲泣;淚潸潸,淚涓涓,淚啼啼,炫然欲泣;"
  "抓住;攫住;覺住,掘住,崛住,貨住;"
  "僵硬;僵直;驚蟄,務實,哽住,塞住;"
  "形容建築物高大華美;美輪美奐;美崙美換,美輪美煥,美侖美幻,美侖美奐;"
  "稀少零落;疏落;繁盛,茂密,聚集,密集;"
  "緩慢爬行;蠕動;扭動,搖動,顫動,儒動;"
  "代替人民說話表達意見;為民喉舌;杏壇之光,春風化雨,鐵樹銀鉤,黃鶯出谷;"
  "謙虛說自己學問不深;才疏學淺;學富五車,汗牛充棟,一枝獨秀,出類拔萃;"
  "代替人受過;李代桃僵;桃代李僵,梅代李僵,火樹銀花,松代柏僵;"
);


//基本設定
optionsTotal = 5;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項
holdTime = 2;			//暫停等候選取的時間(sec)
timerStartSeconds = 50;	//一題(關)有幾秒的作答時間

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	//取得題目
	var question = tools.getOneQuestion(question_lines, ";,", "QOX");
	//更改一下題幹
	question['question'] = '(?)' + question['question'];
	//更改一下對的答案
	for(var i=0; i<question['optionsOK'].length; i++) {
		question['optionsOK'][i] = '一'+question['optionsOK'][i];
	}
	//更改一下錯的答案
	for(var i=0; i<question['optionsNG'].length; i++) {
		question['optionsNG'][i] = '一'+question['optionsNG'][i];
	}
	
	return question;	
};
