const Peer = window.Peer;

// *******************************************************************************
// var status = 0; // 0:停止中 1:動作中
// var time = 0;
// var timeold = 0;
// var startBtn = document.getElementById("startBtn");
// var timerLabel = document.getElementById('timerLabel');

// var timerLabel2 = document.getElementById('timerLabel2'); //追加
// var timercount = 0; // 追加 カウンタ用

// const bgm1 = document.querySelector("#bgm1");       // <audio>
// const bgm2 = document.querySelector("#bgm2");       // <audio>
// const bgm3 = document.querySelector("#bgm3");       // <audio>
// var Bel1TextForm1 = 0;
// var Bel1TextForm2 = 0;
// // var Bel1TextForm3 = 0;
// var Bel2TextForm1 = 0;
// var Bel2TextForm2 = 0;
// var Bel3TextForm1 = 0;
// var Bel3TextForm2 = 0;
// var min = 0;
// var sec = 0;
// var mSec = 0;

// // ボタンの要素を取得
// var button = document.getElementById("button");
// // ボタンをクリックした時の処理
// button.addEventListener("click", function(e) {

// e.preventDefault();

// // 2つの入力フォームの値を取得
// Bel1TextForm1 = document.getElementById("Bel1TextForm1").value;
// Bel1TextForm2 = document.getElementById("Bel1TextForm2").value;
// // Bel1TextForm3 = document.getElementById("Bel1TextForm3").value;
// Bel2TextForm1 = document.getElementById("Bel2TextForm1").value;
// Bel2TextForm2 = document.getElementById("Bel2TextForm2").value;
// Bel3TextForm1 = document.getElementById("Bel3TextForm1").value;
// Bel3TextForm2 = document.getElementById("Bel3TextForm2").value;

// // // 2つの数値を足す
// // var sum = parseInt(Bel1TextForm1, 10) + parseInt(Bel2TextForm2, 10);

// // 足し算の結果を別の入力フォームに表示
// // var resultForm = document.getElementById("resultForm");
// resultForm.value = '入力完了';
// });

// // var choseBel1TextForm1 = parseInt(Bel1TextForm1, 10); // 数値変換(10進数)
// // var choseBel1TextForm2 = parseInt(Bel1TextForm2, 10);
// // var choseBel1TextForm3 = parseInt(Bel1TextForm3, 10);
    

// // STARTボタン
// function start(){
//     // 動作中にする
//     status = 1;
//     // スタートボタンを押せないようにする
//     startBtn.disabled = true;

//     timer();
// }

// // STOPボタン
// function stop(){
//     // 停止中にする
//     status = 0;
//     // スタートボタンを押せるようにする
//     startBtn.disabled = false;
// }

// // RESETボタン
// function reset(){
//     // 停止中にする
//     status = 0;
//     // タイムを0に戻す
//     time = 0;
//     // タイマーラベルをリセット
//     timerLabel.innerHTML = '00:00:00';
//     timerLabel2.innerHTML = '00:00:00'; //追加
//     // スタートボタンを押せるようにする
//     startBtn.disabled = false;
// }

// function timer(){
//     // ステータスが動作中の場合のみ実行
//     if (status == 1) {
//         setTimeout(function() {
//             time++;

//             // 分・秒・ミリ秒を計算
//             // var min = Math.floor(time/100/60);
//             min = Math.floor(time/100/60);
//             // var sec = Math.floor(time/100);
//             sec = Math.floor(time/100);
//             // var mSec = time % 100;
//             mSec = time % 100;

//             // 分が１桁の場合は、先頭に０をつける
//             if (min < 10) min = "0" + min;

//             // 秒が６０秒以上の場合　例）89秒→29秒にする
//             if (sec >= 60) sec = sec % 60;

//             // 秒が１桁の場合は、先頭に０をつける
//             if (sec < 10) sec = "0" + sec;

//             // ミリ秒が１桁の場合は、先頭に０をつける
//             if (mSec < 10) mSec = "0" + mSec;

//             // タイマーラベルを更新
//             timerLabel.innerHTML = min + ":" + sec + ":" + mSec;
//             timerLabel2.innerHTML = min + ":" + sec + ":" + mSec; //追加

//             console.log(sec); // デバッグ用
            
            
//             // 再びtimer()を呼び出す
//             timer();

//             // pausedがtrue=>停止, false=>再生中
//             if( min == parseInt(Bel1TextForm1, 10) && sec == parseInt(Bel1TextForm2, 10) && mSec == 0) {
//                     timeold = time;
//                     bgm1.play();
//             }
//             if(time > timeold + 18000){
//                     bgm1.pause();
//             }
//             /**
//              * [event] 再生終了時に実行
//              */
//             bgm1.addEventListener("ended", ()=>{
//                 // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
//                 // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
//             });

//             // pausedがtrue=>停止, false=>再生中
//             if( min == parseInt(Bel2TextForm1, 10) && sec == parseInt(Bel2TextForm2, 10) && mSec == 0) {
//                     timeold = time;
//                     bgm2.play();
//             }
//             if(time > timeold + 18000){
//                     bgm2.pause();
//             }
//             /**
//              * [event] 再生終了時に実行
//              */
//             bgm2.addEventListener("ended", ()=>{
//                 // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
//                 // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
//             });

//             // pausedがtrue=>停止, false=>再生中
//             if( min == parseInt(Bel3TextForm1, 10) && sec == parseInt(Bel3TextForm2, 10) && mSec == 0) {
//                     timeold = time;
//                     bgm3.play();
//             }
//             if(time > timeold + 18000){
//                     bgme.pause();
//             }
//             /**
//              * [event] 再生終了時に実行
//              */
//             bgm3.addEventListener("ended", ()=>{
//                 // bgm1.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
//                 // btn1.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
//             });


//         }, 10);
//     }
// }

// document.onkeydown = function(event) { 
//     if (event) {
//         if (event.keyCode == 32 || event.which == 32) {
//             if(status == 1) {
//                 stop();
//             } else if (status == 0) {
//                 start();
//             }
//         }
//     }
// };

// *******************************************************************************


(async function main() {

  const localVideo = document.getElementById('js-local-stream');

  const joinTrigger = document.getElementById('js-join-trigger');

  const leaveTrigger = document.getElementById('js-leave-trigger');

  const remoteVideos = document.getElementById('js-remote-streams');

  const roomId = document.getElementById('js-room-id');

  const roomMode = document.getElementById('js-room-mode');

  const localText = document.getElementById('js-local-text');
  // const localText2 = document.getElementById('js-local-text2'); //追加

  const sendTrigger = document.getElementById('js-send-trigger');
  // const sendTrigger2 = document.getElementById('js-send-trigger2'); //追加

  const messages = document.getElementById('js-messages');
  // const messages2 = document.getElementById('js-messages2'); //追加

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



  // Render local stream

  localVideo.muted = true;

  localVideo.srcObject = localStream;

  localVideo.playsInline = true;

  await localVideo.play().catch(console.error);



  // eslint-disable-next-line require-atomic-updates

  const peer = (window.peer = new Peer({

    key: window.__SKYWAY_KEY__,

    debug: 3,

  }));



  // Register join handler

  joinTrigger.addEventListener('click', () => {

    // Note that you need to ensure the peer has connected to signaling server

    // before using methods of peer instance.

    if (!peer.open) {

      return;

    }



    const room = peer.joinRoom(roomId.value, {

      mode: getRoomModeByHash(),

      stream: localStream,

    });



    room.once('open', () => {

      messages.textContent += '=== You joined ===\n';

    });

    //追加
    // room.once('open', () => {

    //   messages2.textContent += '=== You joined2 ===\n';

    // });
    //ここまで

    room.on('peerJoin', peerId => {

      messages.textContent += `=== ${peerId} joined ===\n`;

    });

    //追加
    // room.on('peerJoin', peerId => {

    //   messages2.textContent += `=== ${peerId} joined2 ===\n`;

    // });
    //ここまで



    // Render remote stream for new peer join in the room

    room.on('stream', async stream => {

      const newVideo = document.createElement('video');

      newVideo.srcObject = stream;

      newVideo.playsInline = true;

      // mark peerId to find it later at peerLeave event

      newVideo.setAttribute('data-peer-id', stream.peerId);

      remoteVideos.append(newVideo);

      await newVideo.play().catch(console.error);

    });



    room.on('data', ({ data, src }) => {

      // Show a message sent to the room and who sent

      messages.textContent += `${src}: ${data}\n`;

    });


    //追加
    // room.on('data', ({ data, src }) => {

    //   // Show a message sent to the room and who sent


    //   // messages2.textContent += `${data} : `;
    //   // timercount++;
    //   // if(timercount == 3) {
    //   //   messages2.textContent += '\n';
    //   //   timercount = 0;
    //   // }

    //   // timerLabel2.innerHTML = ``;
    //   // if(timercount == 3){
    //   //   timerLabel2.innerHTML = ``;
    //   //   timercount = 0;
    //   // }
    //   // timerLabel2.innerHTML += `${data}:`;
    //   // timercount++;
      
    //   // timercount++;
    //   // if(timercount == 3) {
    //   //   messages2.textContent += '\n';
    //   //   timercount = 0;
    //   // }

    // });
    //ここまで



    // for closing room members

    room.on('peerLeave', peerId => {

      const remoteVideo = remoteVideos.querySelector(

        `[data-peer-id=${peerId}]`

      );

      remoteVideo.srcObject.getTracks().forEach(track => track.stop());

      remoteVideo.srcObject = null;

      remoteVideo.remove();



      messages.textContent += `=== ${peerId} left ===\n`;

    });



    // for closing myself

    room.once('close', () => {

      sendTrigger.removeEventListener('click', onClickSend);

      messages.textContent += '== You left ===\n';

      Array.from(remoteVideos.children).forEach(remoteVideo => {

        remoteVideo.srcObject.getTracks().forEach(track => track.stop());

        remoteVideo.srcObject = null;

        remoteVideo.remove();

      });

    });

    sendTrigger.addEventListener('click', onClickSend);
    // sendTrigger2.addEventListener('click', onClickSend2); //追加

    leaveTrigger.addEventListener('click', () => room.close(), { once: true });

// *******************************************************************************************



/********************************************************************************************/
//カメラマイクonoff追加
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
const localVideo = document.getElementById('js-local-stream');

localVideo.srcObject = localStream;
localVideo.muted = true; // 自分の音声を自分のスピーカーから聞こえなくする。相手には届く。
localVideo.playsInline = true;
localVideo.autoplay = true;
/********************************************************************************************/

    function onClickSend() {

      // Send message to all of the peers in the room via websocket

      room.send(localText.value);



      messages.textContent += `${peer.id}: ${localText.value}\n`;

      localText.value = '';

    }

    //追加
    // function onClickSend2() {

    //   // Send message to all of the peers in the room via websocket

    //   room.send(min);
    //   room.send(sec);
    //   room.send(mSec);
    //   console.log(sec);
      
    //   messages2.textContent += `${min} : ${sec} : ${mSec}\n`; //自分側のテキスト表示
    //   // messages2.innerHTML += `${min} ":" ${sec} ":" ${mSec}\n`;
    //   // timerLabel2.innerHTML = min + ":" + sec + ":" + mSec;

    //   // room.send(localText2.value);


    //   // messages2.textContent += `${peer.id}: ${localText2.value}\n`;

    //   // localText2.value = '';

    // }
    //ここまで

  });


  peer.on('error', console.error);


})();

