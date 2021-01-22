const Peer = window.Peer;

// *******************************************************************************
var status = 0; // 0:停止中 1:動作中
var time = 0;
var timeold = 0;
var startBtn = document.getElementById("startBtn");

var stopBtn = document.getElementById("stopBtn"); //追加

var timerLabel = document.getElementById('timerLabel');

var timerLabel2 = document.getElementById('timerLabel2'); //追加
var timercount = 0; // 追加 カウンタ用

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
var bsec = 0;
var count = 0;
var countup = function () {
  console.log(count++);
}

// ボタンの要素を取得
var button = document.getElementById("button");
// ボタンをクリックした時の処理
button.addEventListener("click", function (e) {

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
function start() {
  // 動作中にする
  status = 1;
  // スタートボタンを押せないようにする
  startBtn.disabled = true;
  // 追加 ストップボタンを押せるようにする
  stopBtn.disabled = false;
  timer();
}

// STOPボタン
function stop() {
  // 停止中にする
  status = 0;
  // スタートボタンを押せるようにする
  startBtn.disabled = false;
  // 追加 ストップボタンを押せないようにする
  stopBtn.disabled = true;
}

// RESETボタン
function reset() {
  // 停止中にする
  status = 0;
  // タイムを0に戻す
  time = 0;
  // タイマーラベルをリセット
  timerLabel.innerHTML = '00:00:00';
  timerLabel2.innerHTML = '00:00:00'; //追加
  // スタートボタンを押せるようにする
  startBtn.disabled = false;
  // 追加 ストップボタンを押せるようにする
  stopBtn.disabled = true;
}

function timer() {
  // ステータスが動作中の場合のみ実行
  if (status == 1) {
    setTimeout(function () {
      time++;

      // 分・秒・ミリ秒を計算
      // var min = Math.floor(time/100/60);
      min = Math.floor(time / 100 / 60);
      // var sec = Math.floor(time/100);
      sec = Math.floor(time / 100);

      bsec = Math.floor(time / 100) - 1; //追加

      // var mSec = time % 100;
      mSec = time % 100;


      // 分が１桁の場合は、先頭に０をつける
      if (min < 10) min = "0" + min;

      // 秒が６０秒以上の場合　例）89秒→29秒にする
      if (sec >= 60) sec = sec % 60;
      if (bsec >= 60) bsec = bsec % 60; //追加

      // 秒が１桁の場合は、先頭に０をつける
      if (sec < 10) sec = "0" + sec;
      if (bsec < 10) bsec = "0" + bsec; //追加

      // ミリ秒が１桁の場合は、先頭に０をつける
      if (mSec < 10) mSec = "0" + mSec;

      // タイマーラベルを更新
      timerLabel.innerHTML = min + ":" + sec + ":" + mSec;
      timerLabel2.innerHTML = min + ":" + sec + ":" + mSec; //追加

      // console.log(sec); // デバッグ用
      // console.log(bsec); // デバッグ用

      // 再びtimer()を呼び出す
      timer();

      // pausedがtrue=>停止, false=>再生中
      if (min == parseInt(Bel1TextForm1, 10) && sec == parseInt(Bel1TextForm2, 10) && mSec == 0) {
        timeold = time;
        bgm1.play();
      }
      if (time > timeold + 18000) {
        bgm1.pause();
      }
      /**
       * [event] 再生終了時に実行
       */
      bgm1.addEventListener("ended", () => {
        // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫)
        // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
      });

      // pausedがtrue=>停止, false=>再生中
      if (min == parseInt(Bel2TextForm1, 10) && sec == parseInt(Bel2TextForm2, 10) && mSec == 0) {
        timeold = time;
        bgm2.play();
      }
      if (time > timeold + 18000) {
        bgm2.pause();
      }
      /**
       * [event] 再生終了時に実行
       */
      bgm2.addEventListener("ended", () => {
        // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫)
        // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
      });

      // pausedがtrue=>停止, false=>再生中
      if (min == parseInt(Bel3TextForm1, 10) && sec == parseInt(Bel3TextForm2, 10) && mSec == 0) {
        timeold = time;
        bgm3.play();
      }
      if (time > timeold + 18000) {
        bgme.pause();
      }
      /**
       * [event] 再生終了時に実行
       */
      bgm3.addEventListener("ended", () => {
        // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫)
        // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
      });


    }, 10);
  }
}

document.onkeydown = function (event) {
  if (event) {
    if (event.keyCode == 32 || event.which == 32) {
      if (status == 1) {
        stop();
      } else if (status == 0) {
        start();
      }
    }
  }
};

// *******************************************************************************


(async function main() {

  const localVideo = document.getElementById('js-local-stream');

  const joinTrigger = document.getElementById('js-join-trigger');

  const leaveTrigger = document.getElementById('js-leave-trigger');

  const remoteVideos = document.getElementById('js-remote-streams');

  const roomId = document.getElementById('js-room-id');
  let sessionRoomId = null;
  let sessionRoomId1 = document.getElementById('button_session1');
  let sessionRoomId2 = document.getElementById('button_session2');

  const roomMode = document.getElementById('js-room-mode');

  // const localText = document.getElementById('js-local-text');
  // const localText2 = document.getElementById('js-local-text2'); //追加

  // const sendTrigger = document.getElementById('js-send-trigger');
  // const sendTrigger2 = document.getElementById('js-send-trigger2'); //追加

  // const messages = document.getElementById('js-messages');
  // const messages2 = document.getElementById('js-messages2'); //追加

  var sessionNumber = document.getElementById('js-session-number');
  // const meta = document.getElementById('js-meta');

  const sdkSrc = document.querySelector('script[src*=skyway]');

  // meta.innerText = `

  //   UA: ${navigator.userAgent}

  //   SDK: ${sdkSrc ? sdkSrc.src : 'unknown'}

  // `.trim();





  const getRoomModeByHash = () => (location.hash === '#sfu' ? 'sfu' : 'mesh');



  roomMode.textContent = getRoomModeByHash();

  window.addEventListener(

    'hashchange',

    () => (roomMode.textContent = getRoomModeByHash())

  );



  const localStream = await navigator.mediaDevices

    .getUserMedia({


      audio: true,

      video: true,

    })

    .catch(console.error);




  localVideo.muted = true;

  localVideo.srcObject = localStream;

  localVideo.playsInline = true;

  await localVideo.play().catch(console.error);

  // *******************************************************************************************
  //カメラマイクonoff追加 この位置で入室前から切り替え可能、タイム共有中も切り替え可能
  //ミュート
  const toggleCamera = document.getElementById('js-toggle-camera');
  const toggleMicrophone = document.getElementById('js-toggle-microphone');
  const cameraStatus = document.getElementById('camera-status');
  const microphoneStatus = document.getElementById('microphone-status');

  toggleCamera.addEventListener('click', () => {
    const videoTracks = localStream.getVideoTracks()[0];
    videoTracks.enabled = !videoTracks.enabled;
    // cameraStatus.textContent = `カメラ${videoTracks.enabled ? 'ON' : 'OFF'}`;
    cameraStatus.textContent = `${videoTracks.enabled ? 'ON' : 'OFF'}`;
  });

  toggleMicrophone.addEventListener('click', () => {
    const audioTracks = localStream.getAudioTracks()[0];
    audioTracks.enabled = !audioTracks.enabled;
    // microphoneStatus.textContent = `マイク${audioTracks.enabled ? 'ON' : 'OFF'}`;
    microphoneStatus.textContent = `${audioTracks.enabled ? 'ON' : 'OFF'}`;
  });

  //videoタグの要素
  // const localVideo = document.getElementById('js-local-stream');

  localVideo.srcObject = localStream;
  localVideo.muted = true; // 自分の音声を自分のスピーカーから聞こえなくする。相手には届く。
  localVideo.playsInline = true;
  localVideo.autoplay = true;

  // *******************************************************************************************


  const peer = (window.peer = new Peer({

    key: window.__SKYWAY_KEY__,

    debug: 3,

  }));

  sessionNumber.innerHTML = "セッション番号を選択してください"

  sessionRoomId1.addEventListener('click', () => {
    sessionRoomId = 1;
    console.log(sessionRoomId);
    sessionNumber.innerHTML = "セッション 1";
  });

  sessionRoomId2.addEventListener('click', () => {
    sessionRoomId = 2;
    console.log(sessionRoomId);
    sessionNumber.innerHTML = "セッション 2";
  });

  joinTrigger.addEventListener('click', () => {



    if (!peer.open) {

      return;

    }


    // const room = peer.joinRoom(roomId.value, { // roomIdはオブジェクトのため、value が値を持つ
    const room = peer.joinRoom(sessionRoomId, { // sessionRoomId はただの変数と定義した

      mode: getRoomModeByHash(),

      stream: localStream,

    });

    // room.once('open', () => {

    //   // messages.textContent += '=== You joined ===\n';

    // });

    //追加
    // room.once('open', () => {

    //   messages2.textContent += '=== You joined2 ===\n';

    // });
    //ここまで

    room.on('peerJoin', peerId => {

      // messages.textContent += `=== ${peerId} joined ===\n`;

    });

    //追加
    // room.on('peerJoin', peerId => {

    //   messages2.textContent += `=== ${peerId} joined2 ===\n`;

    // });
    //ここまで





    room.on('stream', async stream => {

      const newVideo = document.createElement('video');

      newVideo.srcObject = stream;

      newVideo.playsInline = true;



      newVideo.setAttribute('data-peer-id', stream.peerId);

      remoteVideos.append(newVideo);

      await newVideo.play().catch(console.error);

    });



    // room.on('data', ({ data, src }) => {

    //   // Show a message sent to the room and who sent

    //   // messages.textContent += `${src}: ${data}\n`;

    // });




    room.on('data', ({ data, src }) => {

      // data が3つ(分,秒,m秒)送信されたら``により初期化を行う
      if (timercount == 3) {
        timerLabel2.innerHTML = ``;
        timercount = 0;
      }
      // data は、ここではそれぞれ min, sec, mSecである
      timerLabel2.innerHTML += `${data}:`; // data を順番に画面に表示
      timercount += 1; // dataが一つ送られたらcount++する

    });
    //ここまで





    room.on('peerLeave', peerId => {

      const remoteVideo = remoteVideos.querySelector(

        `[data-peer-id=${peerId}]`

      );

      remoteVideo.srcObject.getTracks().forEach(track => track.stop());

      remoteVideo.srcObject = null;

      remoteVideo.remove();



      // messages.textContent += `=== ${peerId} left ===\n`;

    });





    room.once('close', () => {

      sendTrigger.removeEventListener('click', onClickSend);

      // messages.textContent += '== You left ===\n';

      Array.from(remoteVideos.children).forEach(remoteVideo => {

        remoteVideo.srcObject.getTracks().forEach(track => track.stop());

        remoteVideo.srcObject = null;

        remoteVideo.remove();

      });

    });

    // sendTrigger.addEventListener('click', onClickSend);
    startBtn.addEventListener('click', setInterval(onClickSend2, 1000)); //追加ボタン スタートボタンクリックで時間変数送信

    leaveTrigger.addEventListener('click', () => room.close(), { once: true });

    // *******************************************************************************************

    // 追加 
    // 相手のroom に min sec mSec を送る関数
    function onClickSend2() {

      room.send(min);
      room.send(sec);
      room.send(mSec);
      // console.log(sec);

    }
    //ここまで

  });


  peer.on('error', console.error);


})();

