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

function generateStageImg(){
	//フォームの内容を読み込み
	let startDate = document.forms.info1.startDate.value;
	let startCount = document.forms.info1.startCount.value;
	let detectDay = document.forms.info1.startCount.value;
	let stageType = document.forms.info1.startCount.value;
	
	let stage1 = document.forms.info1.stage1.value;
	let stage2 = document.forms.info2.stage1.value;
	let stage3 = document.forms.info3.stage1.value;
	
	//フォームの内容に応じてCanvasに描画（ランダムの場合は別途処理）
	
	//ダウンロード可能な画像に変換
	
	//ダウンロードボタン開放
	
	//ツイートテキスト生成
	
}




