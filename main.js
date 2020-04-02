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

img[1].onload = function(){
	can.width = img[1].width / 3 * 3;
	can.height = Math.round(can.width * 9 / 16);
	//can.height = img[1].height / 3;
}




function autoDetect(){
	if( !document.forms.info1.detectDay.checked ){
		
		document.forms.info1.blackchipEnabled.disabled = true;
		document.forms.info1.stageType.disabled = true;
		
		//判定に必要な値が未入力なら処理を終える
		if(!document.forms.info1.startDate.value){ console.log('startDate is undefined'); return; }
		if(!document.forms.info1.dateCount.value){ console.log('dateCount is undefined'); return; }
		
		//以下判定材料取得
		let startDate = document.forms.info1.startDate.value;
		startDate = startDate.split('-');
		//入力された日付をDate形式に変換して曜日を簡単に特定、比較できるようにする
		let startFullDate = new Date( startDate[0], (startDate[1] - 1), startDate[2] );
		
		let dateCount = document.forms.info1.dateCount.value;
		dateCount = Number(dateCount);
		//入力された日付にstartCountを加算して曜日をこれも特定する
		let thisDate = startFullDate.setDate( startFullDate.getDate() + dateCount - 1 );
		thisDate = new Date(thisDate);
		
		
		//判定を行う
		//ブラチ期間判定
		if( dateCount <= 5 ){
			console.log('bc is true');
			document.forms.info1.blackchipEnabled.checked = true;
		}else{
			console.log('bc is false');
			document.forms.info1.blackchipEnabled.checked = false;
		}
		
		//ステージタイプ判定
		if( thisDate.getDay() == 0 || thisDate.getDay() == 6 ){
			document.forms.info1.stageType.value = 'random';
			document.forms.info1.stage1.disabled = true;
			document.forms.info1.stage2.disabled = true;
			document.forms.info1.stage3.disabled = true;
			console.log('stageSelectors are disabled');
		}else{
			document.forms.info1.stageType.value = '3stages';
			document.forms.info1.stage1.disabled = false;
			document.forms.info1.stage2.disabled = false;
			document.forms.info1.stage3.disabled = false;
			console.log('stageSelectors are enabled');
		}
		
	} else {
		document.forms.info1.blackchipEnabled.disabled = false;
		document.forms.info1.stageType.disabled = false;
		
		if( document.forms.info1.stageType.value == 'random' ){
			document.forms.info1.stage1.disabled = true;
			document.forms.info1.stage2.disabled = true;
			document.forms.info1.stage3.disabled = true;
			console.log('stageSelectors are disabled');
		}else{
			document.forms.info1.stage1.disabled = false;
			document.forms.info1.stage2.disabled = false;
			document.forms.info1.stage3.disabled = false;
			console.log('stageSelectors are enabled');
		}
	}
}





function generateStageImg(){
	//フォームの内容を読み込み、変換
	let startDate = document.forms.info1.startDate.value;
	startDate = startDate.split('-');
	//入力された日付をDate形式に変換して曜日を簡単に特定、比較できるようにする
	let startFullDate = new Date( startDate[0], (startDate[1] - 1), startDate[2] );
	
	let dateCount = document.forms.info1.dateCount.value;
	dateCount = Number(dateCount);
	//入力された日付にstartCountを加算して曜日をこれも特定する
	let thisDate = startFullDate.setDate( startFullDate.getDate() + dateCount - 1 );
	thisDate = new Date(thisDate);
	let dayArray = ['日','月','火','水','木','金','土'];
	
	//let detectDay = document.forms.info1.dateCount.checked;
	let blackchipEnabled = document.forms.info1.blackchipEnabled.checked;
	let stageType = document.forms.info1.stageType.value;
	
	let stage = [];
	stage[1] = document.forms.info1.stage1.value;
	stage[2] = document.forms.info1.stage2.value;
	stage[3] = document.forms.info1.stage3.value;
	
	let stageArray = [];
	let stageNames = document.forms.info1.stage1.innerText.split('\n');
	
	
	//フォームのロック作業などは下の方で行う（onChangeに組み込む）
	//ランダムの曜日かどうか判定（形式上）
	/*
	if( !document.forms.info1.detectDay.checked ){
		if( thisDate.getDay() == 0 || thisDate.getDay() == 6 ){
			stageType = 'random';
		} else {
			stageType = '3stages';
		}
	}
	*/
	
	console.log(stageType);
	
	//stageTypeの内容に応じてCanvasに描画（ランダムの場合は別途処理）
	if( stageType == '3stages' ){
		
		//選択ステージをソート
		/*stage.sort(function(a,b){
			if( a < b ) return -1;
			if( a > b ) return 1;
			return 0;
		});*/
		
		//実際よりちょっと上寄りに描画する
		ctx.drawImage( img[stage[1]], (img[stage[1]].width / 3 * 0), -60, (img[stage[1]].width / 3), (img[stage[1]].height / 3) );
		ctx.drawImage( img[stage[2]], (img[stage[2]].width / 3 * 1), -60, (img[stage[2]].width / 3), (img[stage[2]].height / 3) );
		ctx.drawImage( img[stage[3]], (img[stage[3]].width / 3 * 2), -60, (img[stage[3]].width / 3), (img[stage[3]].height / 3) );
		
		//ステージを文字配列で記録
		stageArray.push(stageNames[stage[1] - 1]);
		stageArray.push(stageNames[stage[2] - 1]);
		stageArray.push(stageNames[stage[3] - 1]);
				
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
	let tweetText 	= "#コンパス #バトルアリーナ\n"
			+ thisDate.getFullYear() + "年" + (thisDate.getMonth() + 1) + "月シーズン "
			+ dateCount + "日目(" + dayArray[thisDate.getDay()] + "曜日)です。\n\n"
			+ "本日のステージは\n\n";
	
	for( let i = 0, l = stageArray.length; i < l; i++ ){
		tweetText += "【" + stageArray[i] + "】\n";
	}
	
	tweetText	+= "\nです。";
	if(blackchipEnabled){
		tweetText += "\n（ブラックチップ期間です）";
	}
	tweetText	+= "\n\n#コンパスステージローテ";
	
	document.forms.result.tweetText.value = tweetText;
	
}




