function lastpack(typecase, numpack, caseClass) {

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function randRange(data) {
           var newTime = data[Math.floor(data.length * Math.random())];
           return newTime;
    }

    var minNumPack = 3; 
    var maxNumPack = 999; 
    var lastClass = $('.'+caseClass);
    var numpackCookie = getCookie("lastpack");
    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

    if(numpack > maxNumPack) numpack = maxNumPack;

    function intervalStart(numpack) {
        
        if(numpackCookie == undefined) {
            document.cookie = numpack;
        } else {
            var numpack =  numpackCookie;
        }
        
        if (numpack > minNumPack) {
            numpack--;
            document.cookie = "lastpack="+numpack;

            if(typecase == 1) {
                var num = String(numpack).split("");

                if(!num[num.length-3]) {
                    num[num.length-3] = 0;
                }

                if(!num[num.length-2]) {
                    num[num.length-2] = 0;
                }

                lastClass.html("<span>"+num[num.length-3]+"</span><span>"+num[num.length-2]+"</span><span>"+num[num.length-1]+"</span>");
                
            } else {
                lastClass.text(numpack);
            }

        } else {
            if(typecase == 1) {
                lastClass.html("<span>0</span><span>0</span><span>"+minNumPack+"</span>");
            } else {
                lastClass.text(minNumPack);
            }
        }
        clearInterval(timer);
        timer = setInterval(intervalStart, randRange(timeArray), numpack);
    }

    var timer = setInterval(intervalStart, 0, numpack);
}

function checkCode(event) {
    // проверка кода подлинности
    event.preventDefault();

    var code = document.querySelector(".check__field").value,
        msg = document.querySelector(".check__result");

    if (code.length === 15) {
        msg.innerHTML = 'Данный код верен. Спасибо, что выбрали нашу продукцию!';
    }
    else if (code.length === 0) {
        msg.innerHTML = 'Введите, пожалуйста, код.';
    } else {
        msg.innerHTML = 'К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.';
    }
}


$(document).ready(function() {    
    $('.check__btn').click(function checkCode(event) {
        // проверка кода подлинности
        event.preventDefault();

        var code = document.querySelector(".check__field").value,
            msg = document.querySelector(".check__result");

        if (code.length === 15) {
            msg.innerHTML = 'Данный код верен. Спасибо, что выбрали нашу продукцию!';
        }
        else if (code.length === 0) {
            msg.innerHTML = 'Введите, пожалуйста, код.';
        } else {
            msg.innerHTML = 'К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.';
        }
    });

    $(".owl-carousel").owlCarousel({
        loop: !0,
        center: !0,
        nav: !0,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
                nav: !1
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $(".section7-item .main-text-btn").click(function() {
        $(this).parent(".section7-item").toggleClass("active"), $(this).parent(".section7-item").hasClass("active") ? $(this).text("-") : $(this).text("+")
    });

    $(".section8-item .main-text-btn").click(function() {
        $(this).parent(".section8-item").toggleClass("active"), $(this).parent(".section8-item").hasClass("active") ? $(this).text("-") : $(this).text("+")
    });

    $(".hover-block").hover(function() {
        $(".top-block").toggleClass("active")
    });

    $(".section8 .main-text-btn").hover(function() {
        $(this).parent(".section8-item").toggleClass("show-circle")
    });

    $(".scroll-to").on("click", function(t) {
        t.preventDefault();
        var e = this.getAttribute("href"),
            i = $(e).offset().top;
        $("body,html").animate({
            scrollTop: i
        }, 600)
    });

    /*
    $('.ever-popup__close').click(function() {
        $('.ever-popup').removeClass('show');
    });
    */
    /*
    var flag = true;
    $(window).mouseout(function(e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.ever-popup').addClass('show');
            flag = false;
        }
    });
    */
    /*
    $('.ever-popup-btn').click(function() {
        $('.ever-popup').addClass('show');
    });
    */

    var endAndStartTimer = (function () {
        var timer; // variable persisted here
        return function () {
            window.clearTimeout(timer);
            timer = window.setTimeout(function() {
                $('.ever-popup').addClass('show')
            },15000); 
        };
    })();

    endAndStartTimer()



    $('.ever-popup-btn').on("click", function() {
        $('.ever-popup').addClass('show');
    }); 

    $('.ever-popup__close').on("click", function() {
        $('.ever-popup').removeClass('show');
    });  


    /*
    $('.ever-popup__inner').bind("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false
    });

    $('.ever-popup').bind("click", function(e) {
        $('.ever-popup').removeClass('show');
    });
    */

    lastpack(2, 60, 'lastpack');
});    






