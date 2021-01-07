$(function () {
    $("#js-join-trigger").click(function () {
        // 背景色
        $("body").css({
            'background': '#808080'
        });
        // セッション表示部
        $("#js-session-number").css({
            'left': '0px'
        });
        $("#js-session-number").css({
            'top': '0px'
        });
        // 自分のカメラ映像の大きさ
        $("#js-local-stream").css({
            'width': '240px'
        });
        $("#js-local-stream").css({
            'height': '180px'
        });
        // 他ユーザーのカメラ映像を表示させる
        $(".hidden_remote-stream").css({
            'opacity': '1'
        });
        // $(".hidden_remote-stream").css({
        //     'height': 'auto'
        // });
        // 他ユーザーのカメラ映像の位置設定
        // $("#js-remote-streams").css({
        //     'display': 'block' //横並び display: inline-flex 解除
        // });
        // $("#js-remote-streams").css({
        //     'position': 'relative'
        // });
        // $("#js-remote-streams").css({
        //     'left': '600px'
        // });
        // $("#js-remote-streams").css({
        //     'top': '-40px'
        // });
        $(".hidden_remote-stream").css({
            'height': 'auto'
        });
        // 横並びにする
        $(".hidden_remote-stream").css({
            'display': 'inline-flex'
        });
        $(".hidden_remote-stream").css({
            'width': '240px'
        });
        $(".hidden_remote-stream").css({
            'height': '180px;'
        });
        $(".hidden_remote-stream").css({
            'position': 'relative;'
        });
        $(".hidden_remote-stream").css({
            'left': '40px;'
        });
        $(".hidden_remote-stream").css({
            'top': '0px;'
        });

        // チャット表示部
        $(".messages").css({
            'position': 'relative'
        });
        $(".messages").css({
            'left': '-900px'
        });
        $(".messages").css({
            'top': '250px'
        });

        // チャット入力部
        $("#js-local-text").css({
            'position': 'relative'
        });
        $("#js-local-text").css({
            'left': '-900px'
        });
        $("#js-local-text").css({
            'top': '250px'
        });

        // チャット送信ボタン
        $("#js-send-trigger").css({
            'position': 'relative'
        });
        $("#js-send-trigger").css({
            'left': '-900px'
        });
        $("#js-send-trigger").css({
            'top': '250px'
        });

    });


});