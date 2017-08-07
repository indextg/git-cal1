$(function() {
    var calc = {};
    calc.init = function() { //初始化
        calc.val = "";
        calc.equation = "";
        $('.algol').html('');
        $('.result').html('');
    }
    calc.start = function() {
        $(".bottom li:not('.ts,.clear,.back,.calculate')").on('click', function() {
            var _that = this;
            if (calc.val && $(this).hasClass('sym')) {
                $('.algol').html(calc.val);
                // delete calc.val;
            }
            // console.log(calc.val);

            $('.algol').html(function(index, oldval) {
                // console.log(this);
                return oldval + $(_that).html();
            });
            calc.equation = $('.algol').html();
        });
        $('.calculate').on('click', calc.calc);
        $('.clear').on('click', function() {
            calc.init();
        });
        $('.back').on('click', calc.back);
    }
    calc.main = function() {
        calc.init();
        calc.start();
    }
    calc.calc = function() { //实现计算功能
        $('.result').html(function() {
            var num = eval(calc.equation);
            var result = 0;
            if (parseInt(num) === num) {
                result = eval(calc.equation);
            } else {
                result = parseFloat(eval(calc.equation).toFixed(14));
            }
            return result;
        });
        calc.val = $('.result').html();
    }
    calc.back = function() { //实现退格功能
        $('.algol').html(function(index, oldval) {
            return oldval.slice(0, -1);
        });
    }
    calc.main();
});