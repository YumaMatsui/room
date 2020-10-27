var status = 0; // 0:停止中 1:動作中
var time = 0;
var timeold = 0;
var startBtn = document.getElementById("startBtn");
var timerLabel = document.getElementById('timerLabel');
const bgm1 = document.querySelector("#bgm1");       // <audio>
const bgm2 = document.querySelector("#bgm2");       // <audio>
const bgm3 = document.querySelector("#bgm3");       // <audio>
var Bel1TextForm1 = 0;
var Bel1TextForm2 = 0;
// var Bel1TextForm3 = 0;
var Bel2TextForm1 = 0;
var Bel2TextForm2 = 0;
var Bel3TextForm1 = 0;
var Bel3TextForm2 = 0;
var min = 0;
var sec = 0;
var mSec = 0;

// ボタンの要素を取得
var button = document.getElementById("button");
// ボタンをクリックした時の処理
button.addEventListener("click", function(e) {

e.preventDefault();

// 2つの入力フォームの値を取得
Bel1TextForm1 = document.getElementById("Bel1TextForm1").value;
Bel1TextForm2 = document.getElementById("Bel1TextForm2").value;
// Bel1TextForm3 = document.getElementById("Bel1TextForm3").value;
Bel2TextForm1 = document.getElementById("Bel2TextForm1").value;
Bel2TextForm2 = document.getElementById("Bel2TextForm2").value;
Bel3TextForm1 = document.getElementById("Bel3TextForm1").value;
Bel3TextForm2 = document.getElementById("Bel3TextForm2").value;

// // 2つの数値を足す
// var sum = parseInt(Bel1TextForm1, 10) + parseInt(Bel2TextForm2, 10);

// 足し算の結果を別の入力フォームに表示
// var resultForm = document.getElementById("resultForm");
resultForm.value = '入力完了';
});

// var choseBel1TextForm1 = parseInt(Bel1TextForm1, 10); // 数値変換(10進数)
// var choseBel1TextForm2 = parseInt(Bel1TextForm2, 10);
// var choseBel1TextForm3 = parseInt(Bel1TextForm3, 10);
    

// STARTボタン
function start(){
    // 動作中にする
    status = 1;
    // スタートボタンを押せないようにする
    startBtn.disabled = true;

    timer();
}

// STOPボタン
function stop(){
    // 停止中にする
    status = 0;
    // スタートボタンを押せるようにする
    startBtn.disabled = false;
}

// RESETボタン
function reset(){
    // 停止中にする
    status = 0;
    // タイムを0に戻す
    time = 0;
    // タイマーラベルをリセット
    timerLabel.innerHTML = '00:00:00';
    // スタートボタンを押せるようにする
    startBtn.disabled = false;
}

function timer(){
    // ステータスが動作中の場合のみ実行
    if (status == 1) {
        setTimeout(function() {
            time++;

            // 分・秒・ミリ秒を計算
            // var min = Math.floor(time/100/60);
            min = Math.floor(time/100/60);
            // var sec = Math.floor(time/100);
            sec = Math.floor(time/100);
            // var mSec = time % 100;
            mSec = time % 100;

            // 分が１桁の場合は、先頭に０をつける
            if (min < 10) min = "0" + min;

            // 秒が６０秒以上の場合　例）89秒→29秒にする
            if (sec >= 60) sec = sec % 60;

            // 秒が１桁の場合は、先頭に０をつける
            if (sec < 10) sec = "0" + sec;

            // ミリ秒が１桁の場合は、先頭に０をつける
            if (mSec < 10) mSec = "0" + mSec;

            // タイマーラベルを更新
            timerLabel.innerHTML = min + ":" + sec + ":" + mSec;

            console.log(sec); // 追加 デバッグ用
            
            // 再びtimer()を呼び出す
            timer();

            // pausedがtrue=>停止, false=>再生中
            if( min == parseInt(Bel1TextForm1, 10) && sec == parseInt(Bel1TextForm2, 10) && mSec == 0) {
                    timeold = time;
                    bgm1.play();
            }
            if(time > timeold + 18000){
                    bgm1.pause();
            }
            /**
             * [event] 再生終了時に実行
             */
            bgm1.addEventListener("ended", ()=>{
                // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
                // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
            });

            // pausedがtrue=>停止, false=>再生中
            if( min == parseInt(Bel2TextForm1, 10) && sec == parseInt(Bel2TextForm2, 10) && mSec == 0) {
                    timeold = time;
                    bgm2.play();
            }
            if(time > timeold + 18000){
                    bgm2.pause();
            }
            /**
             * [event] 再生終了時に実行
             */
            bgm2.addEventListener("ended", ()=>{
                // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
                // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
            });

            // pausedがtrue=>停止, false=>再生中
            if( min == parseInt(Bel3TextForm1, 10) && sec == parseInt(Bel3TextForm2, 10) && mSec == 0) {
                    timeold = time;
                    bgm3.play();
            }
            if(time > timeold + 18000){
                    bgme.pause();
            }
            /**
             * [event] 再生終了時に実行
             */
            bgm3.addEventListener("ended", ()=>{
                // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
                // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
            });


        }, 10);
    }
}

document.onkeydown = function(event) { 
    if (event) {
        if (event.keyCode == 32 || event.which == 32) {
            if(status == 1) {
                stop();
            } else if (status == 0) {
                start();
            }
        }
    }
};

//   function Send() {

//     // Send message to all of the peers in the room via websocket

//     room.send(sec);

//   }
