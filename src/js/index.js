define(function() {
    return function() {
        var wrap = document.querySelector(".wrap");
        var left = document.querySelector(".left");
        var right = document.querySelector(".right");
        var list = document.querySelector(".list");
        var ols = document.querySelector(".ols");
        var olis = ols.children;
        var timer = null;
        var i = 0;
        autoPlay();
        leftBtn();
        rightBtn();
        smalltab();
        fn()

        function autoPlay() {
            timer = setInterval(function() {
                if (i > 3) {
                    i = 0;
                } else {
                    list.style.left = -i * 700 + "px";
                    list.style.transition = "1s"
                    i++;
                }
            }, 2000)
        }

        function fn() {
            wrap.onmouseover = function() {
                clearInterval(timer)
            }
            wrap.onmouseout = function() {
                autoPlay();
            }
        }


        function leftBtn() {
            left.onclick = function() {
                i--;
                if (i < 0) {
                    i = 3;
                } else {
                    list.style.left = -i * 700 + "px";
                    list.style.transition = "1s";
                }

            }
        }

        function rightBtn() {
            right.onclick = function() {
                i++;
                if (i > 3) {
                    i = 0;
                } else {
                    list.style.left = -i * 700 + "px";
                    list.style.transition = "1s";
                }
            }
        }

        function smalltab() {
            for (let j = 0; j < olis.length; j++) {
                olis[j].onclick = function() {
                    for (let t = 0; t < olis.length; t++) {
                        olis[t].className = "";
                    }
                    this.className = "active";
                    list.style.left = -j * 700 + "px";
                }
            }
        }
    }
})