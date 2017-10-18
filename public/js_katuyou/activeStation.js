/*global $, console, alert*/

//メニュー項目切り替え
function showAreaImg(contentsName) {
    "use strict";
    var itemEle, imgEle;
    itemEle = document.getElementById("area1");
    imgEle = document.getElementById("area1Img");

    switch (contentsName) {
    case "mekurin":
        itemEle.href = "./mekurin/";
        imgEle.src = "./images/01mekurin.png";
        imgEle.alt = "めくりん";
        imgEle.title = "めくりんへ";
        break;
    case "anaume":
        itemEle.href = "./anaume/";
        imgEle.src = "./images/02anaumekun.png";
        imgEle.alt = "あなうめ君";
        imgEle.title = "あなうめ君へ";
        break;
    case "tamatebako":
        itemEle.href = "#";
        imgEle.src = "./images/03tamatebako.png";
        imgEle.alt = "玉手箱";
        imgEle.title = "玉手箱へ";
        break;
    case "funyan":
        itemEle.href = "#";
        imgEle.src = "./images/04funyan.png";
        imgEle.alt = "ふーにゃん";
        imgEle.title = "ふーにゃんへ";
        break;
    case "hourensou":
        itemEle.href = "./hourensou/";
        imgEle.src = "./images/05hourensou.png";
        imgEle.alt = "ほうれんそう名人";
        imgEle.title = "ほうれんそう名人へ";
        break;
    case "chemistry":
        itemEle.href = "#";
        imgEle.src = "./images/06chemistry.png";
        imgEle.alt = "Dr.ケミストリーへ";
        imgEle.title = "Dr.ケミストリーへ";
        break;
    default:
        console.log(contentsName + ":を取得できません。");
    }
}

var sebesseg = 50;
var rublikszama = 28;

function szinez(mettol, pluszbavagyminuszba) {
    "use strict";

    function torol() {
        var i, il;
        for (i = 1, il = rublikszama; i <= il; i += 1) {
            document.getElementById("MetaMorfozisDotHu_" + i).className = "pici_1";
        }
    }

    var itemEle, i, il;
    torol();

    if (pluszbavagyminuszba === "pluszba") {
        for (i = 1, il = 5; i <= il; i += 1) {
            itemEle = document.getElementById("MetaMorfozisDotHu_" + mettol);
            if (itemEle) {
                itemEle.className = "pici_" + i;
            }
            mettol += 1;
        }
    } else if (pluszbavagyminuszba === "minuszba") {
        for (i = 1, il = 5; i <= il; i += 1) {
            itemEle = document.getElementById("MetaMorfozisDotHu_" + mettol);
            if (itemEle) {
                itemEle.className = "pici_" + i;
            }
            mettol -= 1;
        }
    } else {
        console.log(mettol, pluszbavagyminuszba, "=szinez:Error");
    }
}

function start(honnan) {
    "use strict";
    if (honnan <= rublikszama + 4) {
        szinez(honnan, 'pluszba');
        honnan = honnan + 1;
        setTimeout("start(" + honnan + ");", sebesseg);
    } else {
        bekk(honnan);
    }
}

function bekk(honnan) {
    "use strict";
    if (honnan >= -3) {
        szinez(honnan, 'minuszba');
        honnan = honnan - 1;
        setTimeout("bekk(" + honnan + ");", sebesseg);
    } else {
        start(honnan);
    }
}


function printkit() {
    "use strict";
    var itemEle, tableEle, trEle, tdEle, i, il;
    itemEle = document.getElementById("metaMorfozisDotHu");

    tableEle = document.createElement("table");
    tableEle.setAttribute("align", "center");
    tableEle.setAttribute("width", "580px");
    tableEle.setAttribute("cellspacing", "0");
    tableEle.setAttribute("cellpadding", "0");
    tableEle.setAttribute("border", "0");
    trEle = document.createElement("tr");

    for (i = 1, il = rublikszama; i <= il; i += 1) {
        tdEle = document.createElement("td");
        tdEle.id = "MetaMorfozisDotHu_" + i;
        tdEle.className = "pici_1";
        tdEle.height = 1;

        trEle.appendChild(tdEle);
    }

    tableEle.appendChild(trEle);
    itemEle.appendChild(tableEle);

    start(-3);
}

$(function () {
    "use strict";
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function () {
        var speed, href, target, position;
        // スクロールの速度
        speed = 400; // ミリ秒
        // アンカーの値取得
        href = $(this).attr("href");
        // 移動先を取得
        target = $(href === "#" || href === "" ? 'html' : href);
        // 移動先を数値で取得
        position = target.offset().top;
        // スムーススクロール
        $($.browser.safari ? 'body' : 'html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});

function loadEvent() {
    "use strict";
    //showAreaImg("chemistry");
    printkit();
    //modalOpen("loginModal");
}
window.addEventListener("load", loadEvent, false);