const Peer = window.Peer;


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



  // Register join handler

  joinTrigger.addEventListener('click', () => {

    // Note that you need to ensure the peer has connected to signaling server

    // before using methods of peer instance.

    if (!peer.open) {

      return;

    }




    // const room = peer.joinRoom(roomId.value, { // roomIdはオブジェクトのため、value が値を持つ
    const room = peer.joinRoom(sessionRoomId, { // sessionRoomId はただの変数と定義した

      mode: getRoomModeByHash(),

      stream: localStream,

    });

    room.once('open', () => {

      // messages.textContent += '=== You joined ===\n';

    });

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

      // messages.textContent += `${src}: ${data}\n`;

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



      // messages.textContent += `=== ${peerId} left ===\n`;

    });



    // for closing myself

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
    // sendTrigger2.addEventListener('click', onClickSend2); //追加

    leaveTrigger.addEventListener('click', () => room.close(), { once: true });

    // *******************************************************************************************
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

    // function onClickSend() {

    //   // Send message to all of the peers in the room via websocket

    //   room.send(localText.value);



    //   messages.textContent += `${peer.id}: ${localText.value}\n`;

    //   localText.value = '';

    // }

  });


  peer.on('error', console.error);


})();

