$(function () {
    $("#button1").click(function () {
        // 他ユーザーのカメラ映像の位置
        $("#js-remote-streams").css({
            'display': 'block' //横並び display: inline-flex 解除
        });
        $("#js-remote-streams").css({
            'position': 'relative'
        });
        $("#js-remote-streams").css({
            'left': '600px'
        });
        $("#js-remote-streams").css({
            'top': '-40px'
        });

        // チャット表示部
        $(".messages").css({
            'position': 'relative'
        });
        $(".messages").css({
            'right': '900px'
        });
        $(".messages").css({
            'top': '250px'
        });

        // チャット入力部
        $("#js-local-text").css({
            'position': 'relative'
        });
        $("#js-local-text").css({
            'right': '900px'
        });
        $("#js-local-text").css({
            'top': '250px'
        });

        // チャット送信ボタン
        $("#js-send-trigger").css({
            'position': 'relative'
        });
        $("#js-send-trigger").css({
            'right': '900px'
        });
        $("#js-send-trigger").css({
            'top': '250px'
        });

        // スライド表示
        $(".bxslider").css({
            'position': 'relative'
        });
        $(".bxslider").css({
            'left': '350px'
        });
        $(".bxslider").css({
            'top': '-400px'
        });

        // プログラム表
        $("table").css({
            'position': 'relative'
        });
        $("table").css({
            'left': '420px'
        });
        $("table").css({
            'top': '100px'
        });


    });

    $("#button2").click(function () {
        $("#js-local-stream").css({
            'height': '180px'
        });
    });

});