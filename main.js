var img = [];
img[1] = new Image();
img[1].src = "img/01.png";
img[2] = new Image();
img[2].src = "img/02.png";
img[3] = new Image();
img[3].src = "img/03.png";
img[4] = new Image();
img[4].src = "img/04.png";
img[5] = new Image();
img[5].src = "img/05.png";
img[6] = new Image();
img[6].src = "img/06.png";
img[7] = new Image();
img[7].src = "img/07.png";
img[8] = new Image();
img[8].src = "img/08.png";
img[9] = new Image();
img[9].src = "img/09.png";
img[10] = new Image();
img[10].src = "img/10.png";
img[11] = new Image();
img[11].src = "img/11.png";
img[12] = new Image();
img[12].src = "img/12.png";
img[13] = new Image();
img[13].src = "img/13.png";

const can = document.getElementById('result');
const ctx = can.getContext('2d');





function lockStageSelecter(){
	
}





function generateStageImg(){
	//フォームの内容を読み込み、変換
	let startDate = document.forms.info1.startDate.value;
	startDate = startDate.split('-');
	//入力された日付をDate形式に変換して曜日を簡単に特定、比較できるようにする
	let startFullDate = new Date( startDate[0], (startDate[1] - 1), startDate[2] );
	
	let dateCount = document.forms.info1.dateCount.value;
	//入力された日付にstartCountを加算して曜日をこれも特定する
	let thisDate = new Date( startDate[0], (startDate[1] - 1), (startDate[2] + dateCount - 1));
	let dayArray = ['日','月','火','水','木','金','土'];
	
	let detectDay = document.forms.info1.dateCount.value;
	let stageType = document.forms.info1.dateCount.value;
	
	let stage = [];
	stage[1] = document.forms.info1.stage1.value;
	stage[2] = document.forms.info1.stage2.value;
	stage[3] = document.forms.info1.stage3.value;
	
	let stageArray = [];
	let stageNames = document.forms.info1.stage1.innerText.split('\n');
	
	
	//フォームのロック作業などは下の方で行う（onChangeに組み込む）
	//ランダムの曜日かどうか判定（形式上）
	if( !document.forms.info1.detectDay.checked ){
		if( thisDate.getDay() == 0 || thisDate.getDay() == 6 ){
			stageType = 'random';
		} else {
			stageType = '3stages';
		}
	}
	
	//stageTypeの内容に応じてCanvasに描画（ランダムの場合は別途処理）
	if( stageType == '3stages' ){
		
		//選択ステージをソート
		stage.sort(function(a,b){
			if( a < b ) return -1;
			if( a > b ) return 1;
			return 0;
		});
		
		//

		ctx.drawImage( img[stage[1]], 0, 0 );
		ctx.drawImage( img[stage[2]], 828, 0 );
		console.log(stage[3]);
		ctx.drawImage( img[stage[3]], (828*2), 0 );
		
		//ステージを文字配列で記録
		stageArray.push(stageNames[stage[1]]);
		stageArray.push(stageNames[stage[2]]);
		stageArray.push(stageNames[stage[3]]);
				
	} else {
		
		//ランダムステージ
		stageArray.push('ランダム');
		
	}
	
	
	//ダウンロード可能な画像に変換
	can.hidden = true;
	let base64 = can.toDataURL();
	document.getElementById('resultImg').src = base64;
	
	//ダウンロードボタン開放
	
	
	//ツイートテキスト生成
	let tweetText 	= "#コンパス バトルアリーナ\n"
			+ (thisDate.getMonth + 1) + "月シーズン " + dateCount + "日目(" + dayArray[thisDate.getDate()] + ")です。\n"
			+ "本日のステージは\n\n";
	
	for( let i = 0, l = stageArray.length; i < l; i++ ){
		tweetText += "【" + stageArray[i] + "】\n";
	}
	
	tweetText	+= "\nです。\n\n#コンパス #コンパスステージローテ";
	
	document.forms.result.tweetText.value = tweetText;
	
}




