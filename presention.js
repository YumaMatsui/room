// 発表用ボタンをクリックして発表用スタイルに変更する
$(function () {
    $("#button_happyou").click(function () {
        // $("#button_happyou").css({
        //     'position': 'fixed'
        // });

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

        // スライド表示
        $(".bxslider").css({
            'position': 'relative'
        });
        $(".bxslider").css({
            'width': 'auto'
        });
        $(".bxslider").css({
            'height': 'auto'
        });
        $(".bxslider").css({
            'top': '-400px'
        });
        $(".bxslider").css({
            'left': '330px'
        });
        $(".bxslider").css({
            'opacity': '1'
        });

        // プログラム表
        $("table").css({
            'position': 'relative'
        });
        $("table").css({
            'background-color': '#fff'
        });
        $("table").css({
            'padding': '2px'
        });
        $("table").css({
            'left': '420px'
        });
        $("table").css({
            'top': '150px'
        });
        $("table").css({
            'opacity': '1'
        });


    });

});