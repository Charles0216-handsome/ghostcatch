optionsTotal = 5;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項

//題庫
question_lines = new Array(
  " 活力充沛神色自得的樣子;神采飛揚;拯救,神采飛翔,來龍去脈,利潤; 。"
, "因不再有使用價值而捨棄;廢棄;熔解,紡紗,掩埋,焚化;"
, " 震驚不知道怎麼辦;錯愕;利潤,錯噁,媲美; 。"
, " 創作的人;創作者;搜尋,拯救,創傷,劇情,螢幕; 。"
, " 扣掉成本剩餘的利益;利潤;公司,違法,搜尋,媲美,授權; 。"
, " 援救救助;拯救;授權,媲美,神采飛揚,美侖美奐; 。"
, " 事情的由來和變化;來龍去脈;螢幕,媲美,搜尋,拯救,擩動; 。"
, " 違背法律規定;違法;公司,搜尋,媲美,密集; 。"
, " 美好的程度相當;媲美;拯救,搜尋,授權,劇情; 。"
, " 戲劇中的情節;劇情;媲美,授權,搜尋,拯救,神采飛揚; 。"
, " 將權力委託他人代為執行;授權;劇情,媲美,創作者,利潤; 。"
, " 電腦的顯示幕;螢幕;劇情,媲美,錯愕,利潤,公司; 。"


);

//基本設定
optionsTotal = 9;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項
holdTime = 5;			//暫停等候選取的時間(sec)
timerStartSeconds = 6;	//一題(關)有幾秒的作答時間

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	//取得題目
	var question = tools.getOneQuestion(question_lines);
	//更改一下題幹
	var cNumber = new Array(' ');
	question['question'] = cNumber[Math.floor(Math.random()*cNumber.length)] + question['question'];
	
	return question;
};
