var isTopopen = !1;
var resourcesopen = !1;
var hovericn = !1;
var tokenizeopen = !1;
var tokenizeopen = !1;
var timebar1 = new TimelineMax();
var timebar2 = new TimelineMax();
var tlbox = new TimelineMax();
var tokentlOpen = new TimelineMax();
var tokentlClose = new TimelineMax();
var tokentlOpen = new TimelineMax();
var tokentlClose = new TimelineMax();
var ellineBot = document.getElementById("line-csbot");
var ellineTop = document.getElementById("line-cstop");
var ellineMid = document.getElementById("line-csmid");
var elcirc1 = document.getElementById("circular");
var elcirc2 = document.getElementById("circular-2");
var tlLine = new TimelineMax();
var $arlefttop = $('.shad_resources .line.top');
var $arleftleft = $('.shad_resources .line.left');
var $arleftright = $('.shad_resources .line.right');
var $arleftbot = $('.shad_resources .line.bottom');
var $arlefticonX = $('.shad_resources .icon-close');
var $arleft_labelre = $('.shad_label_resources');
var $arleftbase = $('.shad_resources');
var is_mobile = isMobile.any;
var delgo_iso = new ScrollMagic.Controller();
var slicetl = new TimelineMax({
    onStart: slicerbg
});
var wbaseanim = new TimelineMax({
    onStart: showuptitle
});
var tlstag = new TimelineMax();
var chartitleI = $("span.let_char .char_title, span.let_char .info_icn, span.let_char .char_title2, span.let_char span.info_icn2");
var charthoverI = new SplitText(chartitleI, {
    type: "chars"
});
var charjadiI = charthoverI.chars;
var menuOpen = new TimelineMax({
    paused: !0
});
var menuClose = new TimelineMax({
    paused: !0
})
var menuChar = new SplitText(".section-left nav.menu a span.let_char", {
    type: "words"
});
var menuCharsub = menuChar.words;
var bxl2 = new SplitText(".box-l-2 span.let_char", {
    type: "words"
});
var bxl2sub = bxl2.words;
var menC = $("#menu-container");
var tokentitle = new SplitText("#holder_token .section-left.this_onboard span.let_char", {
    type: "chars",
    charsClass: "this_chars"
});
var $tokenbasetitle = $(".token_header_inner span.let_char .this_chars, span.section__tag .let_char .this_chars");

$('.social span a').on('mouseenter', function () {
    TweenMax.to(this, 0.5, {
        background: "#121212",
        borderBottom: "17px solid rgb(40, 228, 18)",
        ease: Power2.easeInOut,
        force3D: !0,
        yoyo: !0,
        repeat: -1
    })
});
$('.social span a').on('mouseleave', function () {
    TweenMax.to(this, 0.5, {
        background: "#2d2d2d",
        borderBottom: "2px solid rgb(250, 118, 10)",
        ease: Power2.easeInOut,
        yoyo: !1,
        repeat: !1,
        clearProps: "all"
    })
});
$("#hamb-icon").on('click', function (e) {
    e.preventDefault();
    if (!isTopopen) {
        topRopen();
        TweenMax.set(".icon-one", {
            className: "+=active-one"
        });
        soundManager.play('thisclick')
    } else {
        topRclose();
        resources_cls();
        TweenMax.set(".icon-one", {
            className: "-=active-one"
        });

        soundManager.play('thisclick')
    }
});
$("#hamb-icon-buy").on('click', function (e) {
    e.preventDefault();
    if (!tokenizeopen) {
        setuptokenizeOpen();
        soundManager.play('thisclick')
    } else {
        setuptokenizeClose();
        soundManager.play('thisclick')
    }
});
$(".main_tab button.this_resources, #ar_left").on("click", function () {
    if (!resourcesopen) {
        resources_opn();
        soundManager.play('thishover');

    } else {
        resources_cls();
        soundManager.play('thishover');

    }
});
$("#ar_left").mouseenter(function () {
    TweenMax.to($arleftbase, .4, {
        force3D: !0,
        scale: 1.1,
        ease: Power2.easeInOut
    }, .03);
    TweenMax.to([$arlefttop, $arleftbot], .4, {
        force3D: !0,
        scale: 2,
        color: "rgb(230, 71, 8)",
        ease: Power2.easeInOut
    }, .03);
    TweenMax.to([$arleftleft, $arleftright], .4, {
        force3D: !0,
        scale: .7,
        yoyo: !0,
        repeat: -1,
        ease: Power2.easeInOut
    }, .03);
    TweenMax.to($arlefticonX, 0.5, {
        force3D: !0,
        rotation: 90,
        ease: Power2.easeInOut
    }, .03);
    TweenMax.to($arleft_labelre, 1, {
        force3D: !0,
        color: "rgb(230, 71, 8)",
        xPercent: -25,
        ease: Power4.easeInOut
    }, .03)
});
$("#ar_left").mouseleave(function () {
    TweenMax.to($arleftbase, .4, {
        force3D: !0,
        scale: 1,
        clearProps: "all"
    }, .03);
    TweenMax.to([$arlefttop, $arleftbot], .4, {
        force3D: !0,
        scale: 1,
        color: "#fdfdfd",
        ease: Power2.easeInOut,
        clearProps: "all"
    }, .03);
    TweenMax.to([$arleftleft, $arleftright], .4, {
        force3D: !0,
        scale: 1,
        yoyo: !1,
        repeat: !1,
        ease: Power2.easeInOut,
        clearProps: "all"
    }, .03);
    TweenMax.to($arlefticonX, 0.5, {
        force3D: !0,
        rotation: 0,
        ease: Power2.easeInOut,
        clearProps: "all"
    }, .03);
    TweenMax.to($arleft_labelre, 1, {
        force3D: !0,
        color: "#fdfdfd",
        xPercent: 0,
        ease: Power4.easeInOut,
        clearProps: "all"
    }, .03)
});
$(".info_icn").on("mouseenter mouseleave", function () {
    if (!hovericn) {
        showtitleicn()
    } else {
        closetitleicn()
    }
});
$(".info_icn2").on("mouseenter mouseleave", function () {
    if (!hovericn) {
        showtitleicn2()
    } else {
        closetitleicn2()
    }
});



function stopScrolling(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
    document.addEventListener('touchstart', function () {}, {
        passive: false
    })


}




function atchmentvector() {

    var t = $(".delgoplus_vision");
    var susvector = new TimelineMax();
    var tleft1 = new TimelineLite();
    var susvector2 = new TimelineMax();
    var polyleft = document.querySelectorAll("#polyleft");
    var polyright = document.querySelectorAll("#polyright");
    var polytop = document.querySelectorAll("#polytop");
    var circe1 = document.querySelectorAll("#circe1");
    var circe2 = document.querySelectorAll("#circe2");
    var circe3 = document.querySelectorAll("#circe3");
    var circe4 = document.querySelectorAll("#circe4");
    var crypto1 = $("#crypt1");
    var crypto2 = $("#crypt2");
    var crypto3 = $("#crypt3");
    var crypto4 = $("#crypt4");
    var crypto5 = $("#crypt5");
    var crypto6 = $("#delgoplus_logo");
    var trsbase = 0 ? "100% 50%" : "0% 50%";
    var trscrypto = 0 ? "50% 0%" : "50% 100%";
    // 
    var mdtop = document.querySelectorAll(".last_C #md-top");
    var mdright = document.querySelectorAll(".last_C #md-right");
    var mdleft = document.querySelectorAll(".last_C #md-left");
    // 



    if (0 < t.length) {


        function susvec() {

            var susvector = new TimelineMax({
                repeat: -1,
                repeatDelay: 0,
            });

            function grouping(type, lines, toX, toY) {
                var dur = 1.2;
                var tl = new TimelineMax();

                var trFrom = type == 0 ? "80% 50%" : "30% 50%";
                var trTo = type == 0 ? "5% 50%" : "95% 50%";

                tl
                    .set(lines, {
                        transformOrigin: trFrom,
                        force3D: true
                    })
                    .from(lines, dur, {
                        scale: 0,
                        ease: Power4.easeIn
                    })
                    .set(lines, {
                        transformOrigin: trTo,
                        force3D: true
                    })
                    .to(lines, dur, {
                        scale: 0,
                        x: toX,
                        y: toY,
                        ease: Power4.easeOut
                    });
                return tl;
            }
            susvector
                .set([polyleft, polyright, circe1, circe2, circe3, circe4, polytop, crypto1, crypto2, crypto3, crypto4, crypto6, crypto5], {
                    transformOrigin: "50% 50%"
                })
                .add("start")
                .add(grouping(0, $("#line_c3"), "-50", "+0"), "start+=0")
                .add(grouping(0, $("#line_c3b"), "-50", "+0"), "start+=0.1")
                .add(grouping(2, $("#line_c3a"), "+50", "+0"), "start+=0")
                .add(grouping(3, $("#line_c3c"), "+50", "+0"), "start+=0.1")
                // 
                .add("vecPlay", "start+=0")
                .to([circe1, circe3], 1, {
                    fill: "rgb(20, 25, 76)",
                    scale: 1
                }, "vecPlay+=0")
                .to([circe2, circe4], 1, {
                    fill: "rgb(20, 25, 76)",
                    scale: 1
                }, "vecPlay+=.1")
                // 
                .to(polytop, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=.2")
                .to(polyright, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=.3")
                .to(polyleft, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=.4")
                // 
                .add("vecRev", "start+=1")
                //TODO: check morphing crypto
                .to(crypto4, 2, {
                    morphSVG: {
                        shape: crypto1,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=0")
                .to(crypto3, 2, {
                    morphSVG: {
                        shape: crypto2,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=.1")
                .to(crypto5, 2, {
                    morphSVG: {
                        shape: crypto6,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=.2")
                .add("vecRev", "start+=1")
                .to(crypto2, 2, {
                    morphSVG: {
                        shape: crypto3,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=0")
                .to(crypto1, 2, {
                    morphSVG: {
                        shape: crypto4,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=.1")
                .to(crypto6, 2, {
                    morphSVG: {
                        shape: crypto5,
                        transformOrigin: trscrypto,
                        type: "rotational"
                    },
                    ease: Circ.easeInOut
                }, "vecPlay+=.2") // 
                .add("vecRev", "start+=1")
                // 
                .to([circe1, circe3], 1, {
                    fill: "hsl(27, 96%, 51%)",
                    scale: .5
                }, "vecPlay+=0")
                .to([circe2, circe4], 1, {
                    fill: "hsl(27, 96%, 51%)",
                    scale: .5
                }, "vecPlay+=.1")
                .to(polytop, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=.3")
                .to(polyright, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=.4")
                .to(polyleft, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=.5");
            // 


        }
        susvec();
        // ========================================================== //
        function susvec2() {

            var susvector2 = new TimelineMax({
                repeat: -1,
                repeatDelay: 0
            });

            function grouping(type, lines, toX, toY) {
                var dur = 1.2;
                var tl = new TimelineMax();

                var trFrom = type == 0 ? "20% 50%" : "72% 50%";
                var trTo = type == 0 ? "20% 50%" : "100% 50%";

                tl
                    .set(lines, {
                        transformOrigin: trFrom,
                        force3D: true,
                        autoALpha: 0
                    })
                    .from(lines, dur, {
                        scale: 0,
                        ease: Power4.easeIn
                    })
                    .set(lines, {
                        transformOrigin: trTo,
                        force3D: true
                    })
                    .to(lines, dur, {
                        scale: 0,
                        x: toX,
                        y: toY,
                        ease: Power4.easeOut
                    });
                return tl;
            }
            // 
            function grouping2(type, lines, toX, toY) {
                var dur = 1.2;
                var tl = new TimelineMax();

                var mdTo = type == 0 ? "80% 50%" : "5% 0%";

                tl
                    .set(lines, {
                        transformOrigin: mdTo,
                        force3D: true,
                        autoALpha: 0
                    })
                    .to(lines, dur, {
                        scale: 0,
                        x: toX,
                        y: toY,
                        ease: Power2.easeOut
                    });
                return tl;
            }


            susvector2
                .set([mdleft, mdright, mdtop], {
                    transformOrigin: "50% 50%"
                })
                .set("#lineTM, #lineTL, #lineTR", {
                    transformOrigin: "0% 50%"
                })
                .add("start")
                // 
                .add(grouping(0, $("#line-l1"), "+50", "+0"), "start+=0")
                .add(grouping(0, $("#line-l2"), "+100", "+0"), "start+=0.1")
                .add(grouping2(0, $("#lineTL"), "+0", "-50"), "start+=0")
                .add(grouping2(0, $("#lineTM"), "+0", "-50"), "start+=0.1")
                .add(grouping2(0, $("#lineTR"), "+0", "-50"), "start+=0.2")
                .add(grouping(1, $("#line-r1"), "+80", "+0"), "start+=0")
                .add(grouping(1, $("#line-r2"), "+120", "+0"), "start+=0.1")
                // 

                // 
                .add("vecPlay", "start+=0")
                // 
                .to(mdtop, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=0")
                .to(mdright, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=.1")
                .to(mdleft, 1, {
                    scale: .8,
                    ease: Power4.easeIn
                }, "vecPlay+=.2")
                // 
                .add("vecRev", "start+=1")
                // 
                .to(mdtop, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=0")
                .to(mdright, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=.1")
                .to(mdleft, 1, {
                    scale: 1,
                    ease: Power4.easeOut
                }, "vecRev+=.2");
            // 


        }
        susvec2();

        function animatedotstager() {
            var dtsatger = $('.dot_stagger.left'),
                dtsatgesub = $('.dot_stagger.left ul li'),
                dtsatgesubArray = dtsatgesub.toArray();
            // 
            var dtsatger1 = $('.dot_stagger.right'),
                dtsatgesub1 = $('.dot_stagger.right ul li'),
                dtsatgesubArray1 = dtsatgesub1.toArray();
            //  
            var tleft1 = new TimelineLite();
            tleft1.staggerTo(dtsatgesubArray, 1, {
                    backgroundColor: "#2d2dff",
                    repeat: -1,
                    yPercent: 15,
                    yoyo: true,
                    ease: Quad.easeInOut
                }, .2)
                .staggerTo(dtsatger, 1, {
                    scale: 1.2,
                    repeat: -1,
                    yoyo: true,
                    xPercent: 5,
                    ease: Quad.easeInOut
                }, .2);
            // return tl;
            tleft1.play();
            // 
            var tleft2 = new TimelineLite();

            tleft2.staggerTo(dtsatgesubArray1, 1.5, {
                    backgroundColor: "#2d2dff",
                    repeat: -1,
                    xPercent: 25,
                    yoyo: true,
                    ease: Power2.easeInOut
                }, .2)
                .staggerTo(dtsatger1, 1.5, {
                    scale: 0.1,
                    backgroundColor: "#2d2dff",
                    xPercent: 60,
                    yoyo: true,
                    repeat: 1,
                    ease: Power1.easeInOut
                }, .2);
            tleft2.play();
        }
        animatedotstager();
    } else {
        TweenMax.killChildTweensOf("#this_oxer, svg#first_case, svg#last_case");
        susvector.kill();
        tleft1.kill();


    }



}





function susvec3(e) {


    var cbr = document.querySelectorAll("#double_case1 #cube_right");
    var cbl = document.querySelectorAll("#double_case1 #cube_left");
    var cohiji = document.querySelectorAll("#double_case1 #cube_oranges");
    var codua = document.querySelectorAll("#double_case1 #cube_oranges-2");
    var dab_bt = document.querySelectorAll("#lcs_dab_bot");
    var dab_md = document.querySelectorAll("#lcs_dab_mid");
    var dab_tp = document.querySelectorAll("#lcs_dab_top");


    var susvector3 = new TimelineMax({
        repeat: -1
    });

    function grouping(type, lines, toX, toY) {
        var dur = 1;
        var tlLine = new TimelineMax({
            yoyo: !0
        });
        var trimTo = type == 0 ? "5% 95%" : "5% 5%";
        tlLine.set(lines, {
            transformOrigin: trimTo,
            autoALpha: 0
        }).to(lines, dur, {
            scale: 0,
            ease: Power4.easeOut,
            x: toX,
            y: toY
        });
        return tlLine
    }
    susvector3
        .set([cbr, cbl, cohiji, codua], {
            transformOrigin: "50% 50%"
        }).set("#circular, #circular-2", {
            transformOrigin: "50% 50%"
        }).set([dab_bt, dab_md, dab_tp], {
            transformOrigin: "20% 60%"
        })
        .add("start")
        .add(grouping(0, dab_bt, "-10", "+4"), "start+=0")
        .add(grouping(0, dab_md, "-10", "+4"), "start+=0.4")
        .add(grouping(0, dab_tp, "-10", "+4"), "start+=0.6")
        .add("vecPlay", "start+=0").to("#circular, #circular-2", 1, {
            rotation: 360
        }, "vecPlay+=0").to(cbr, 1, {
            scale: .8,
            ease: Power4.easeIn
        }, "vecPlay+=.1").to(cbl, 1, {
            scale: .8,
            ease: Power4.easeIn
        }, "vecPlay+=.2").to(cohiji, 1, {
            scale: .8,
            ease: Power4.easeIn
        }, "vecPlay+=.3").to(codua, 1, {
            scale: .8,
            ease: Power4.easeIn
        }, "vecPlay+=.4")
        .add("vecRev", "start+=1").to("#circular, #circular-2", 1, {
            rotation: -360
        }, "vecPlay+=0").to(cbr, 1, {
            scale: 1,
            ease: Power4.easeOut
        }, "vecRev+=.1").to(cbl, 1, {
            scale: 1,
            ease: Power4.easeOut
        }, "vecRev+=.2").to(cohiji, 1, {
            scale: 1,
            ease: Power4.easeOut
        }, "vecRev+=.3").to(codua, 1, {
            scale: 1,
            ease: Power4.easeOut
        }, "vecRev+=.4");
}





function whenMenuopen() {
    TweenMax.set(".cursor-container .cursor-text", {
        opacity: 0
    });
    TweenMax.staggerTo("#hamb-icon .hit-area span.let_char#menubase", 2, {
        opacity: 0,
        y: 100,
        ease: Expo.easeInOut
    });
    TweenMax.staggerTo("#hamb-icon .hit-area span.let_char#baseclose", 2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
    });
    TweenMax.fromTo("#hamb-icon #menu-icon", .8, {
        opacity: 1,
        scaleX: 1,
        yPercent: 0,
        ease: Power2.easeOut
    }, {
        opacity: 0,
        scaleX: 2,
        yPercent: 50,
        ease: Power2.easeInOut
    });
    TweenMax.fromTo("#hamb-icon #close-icon", .8, {
        opacity: 0,
        scaleX: 2,
        yPercent: 50,
        ease: Power2.easeInOut
    }, {
        opacity: 1,
        scaleX: 1,
        yPercent: 0,
        ease: Power2.easeOut
    });
}

function whenMenuclose() {
    TweenMax.set(".cursor-container .cursor-text", {
        opacity: 1
    });
    TweenMax.staggerTo("#hamb-icon .hit-area span.let_char#menubase", 2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
    });
    TweenMax.staggerTo("#hamb-icon .hit-area span.let_char#baseclose", 2, {
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut
    });
    TweenMax.fromTo("#hamb-icon #menu-icon", .8, {
        opacity: 0,
        scaleX: 2,
        yPercent: 50,
        ease: Power2.easeInOut
    }, {
        opacity: 1,
        scaleX: 1,
        yPercent: 0,
        ease: Power2.easeOut
    });
    TweenMax.fromTo("#hamb-icon #close-icon", .8, {
        opacity: 1,
        scaleX: 1,
        yPercent: 0,
        ease: Power2.easeOut
    }, {
        opacity: 0,
        scaleX: 2,
        yPercent: 50,
        ease: Power2.easeInOut
    })
}

function topRopen() {
    var menuOpen = new TimelineMax();
    isTopopen = !0;
    whenMenuopen();
    menuOpen.add("start")
        .set(menC, {
            visibility: "visible"
        })
        .set("#hamb-icon .nav-icon", {
            className: "+=open"
        })
        .to(".projects__headline-enter", 0.5, {
            opacity: 0,
            visibility: "hidden",
            zIndex: -1
        })
        .to(".inner-header2", 1, {
            visibility: "hidden",
            ease: Cubic.easeOut
        })
        .to("#baseMenu a span.do_open", 0.8, {
            autoAlpha: 0,
            ease: Cubic.easeInOut
        }, "start")
        .to("#baseMenu a span.do_close", 0.8, {
            autoAlpha: 1,
            ease: Cubic.easeOut
        }, "start")

        .to("#menu-container .section-right", 0.8, {
            yPercent: 0,
            ease: Cubic.easeOut
        }, "start")

        .fromTo(".box-r-2 svg#double_case1", 1.2, {
            autoAlpha: 0,
            yPercent: 90,
            ease: Back.easeInOut
        }, {
            autoAlpha: 1,
            yPercent: 0,
            ease: Back.easeOut
        }, "start")
        .staggerFromTo("a.app-btn, charjadiI, .box-l-2 span.let_char", 0.8, {
            autoAlpha: 0,
            yPercent: 90,
            ease: Power2.easeOut,
            force3D: !0
        }, {
            autoAlpha: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            force3D: !0
        }, "start")
        .staggerFromTo("span.info_icn, span.info_icn2, .social span a", 0.8, {
            autoAlpha: 0,
            yPercent: 150,
            ease: Power2.easeOut
        }, {
            autoAlpha: 1,
            yPercent: 0,
            ease: Power2.easeOut
        }, "start")
        .to("#menu-container .section-left", 0.8, {
            xPercent: 0,
            ease: Power2.easeInOut
        }, "start+=0.3")

        .to("#menu-container .section-right .divider.horizontal_link", 0.8, {
            scaleY: 1,
            ease: Cubic.easeOut,
            transformOrigin: "0% 50%",
            xPercent: 0,
            opacity: 1
        }, .3, "start+=1")
        .fromTo(menuCharsub, 0.8, {
            autoAlpha: 0,
            yPercent: 90,
            ease: Cubic.easeOut
        }, {
            autoAlpha: 1,
            yPercent: 0,
            ease: Cubic.easeOut
        }, "start+=1")
        .to("#menu-container .section-right .divider.vertical_link", 1, {
            scaleX: 1,
            ease: Cubic.easeOut,
            transformOrigin: "0% 100%",
            yPercent: 0,
            opacity: 1
        }, .3, "start+=1")
        .to(".vertical_link_right", 1, {
            scaleX: 1,
            ease: Cubic.easeOut,
            transformOrigin: "0% 100%",
            yPercent: 0,
            opacity: 1
        }, .3, "start+=1")
        .to("#menu-container .section-right .divider.vertical_link_right", 1, {
            scaleY: 1,
            ease: Cubic.easeOut,
            transformOrigin: "0% 50%",
            xPercent: 0,
            opacity: 1
        }, .3, "start+=1");

    if (is_mobile) {
        TweenMax.set(".section-middle", {
            xPercent: -100,
            visibility: "hidden"
        });
        TweenMax.set("#menu-container .section-right", {
            xPercent: 100
        });
        TweenMax.to("#menu-container .section-middle", .8, {
            xPercent: 0,
            ease: Power2.easeInOut,
            visibility: "visible"
        }, 0.5, "RtopPlay+=0.2");
        TweenMax.to("#menu-container .section-right", .8, {
            xPercent: 0,
            ease: Power2.easeInOut
        }, 0.5, "RtopPlay+=0.3")
    }
    $('body').on('scroll mousewheel wheel touchmove', stopScrolling);

}

function topRclose() {
    isTopopen = !1;
    whenMenuclose();
    TweenMax.set("#hamb-icon .nav-icon", {
        className: "-=open"
    });
    TweenMax.to(".projects__headline-enter", 0.5, {
        opacity: 1,
        visibility: "visible",
        zIndex: 100
    });
    TweenMax.to(".inner-header2", 1, {
        visibility: "visible",
        ease: Cubic.easeOut
    });
    TweenMax.to("#baseMenu a span.do_open", 1, {
        autoAlpha: 1,
        ease: Cubic.easeOut
    });
    TweenMax.to("#baseMenu a span.do_close", 1, {
        autoAlpha: 0,
        ease: Cubic.easeInOut
    });
    initstagmenu();
    if (is_mobile) {
        TweenMax.to("#menu-container .section-middle", 1, {
            xPercent: -100,
            ease: Cubic.easeOut,
            visibility: "hidden"
        });
        TweenMax.to("#menu-container .section-right", 1, {
            xPercent: 100,
            ease: Cubic.easeOut
        })
    }
    $('body').off('scroll mousewheel wheel touchmove', stopScrolling);
}



// ===init this later //
function setuptokenizeOpen() {

    var tokentlOpen = new TimelineMax();
    tokenizeopen = !0;
    tokentlOpen.set("#holder_token", {
            opacity: 1,
            visibility: "visible",
            zIndex: 77
        })
        .set("#hamb-icon-buy .nav-icon", {
            className: "+=open"
        })
        .set(".projects__headline-enter, #hamb-icon", {
            autoALpha: 0,
            visibility: "hidden"
        }).to("#hamb-icon-buy", 1, {
            ease: Expo.easeOut,
            marginRight: "8vw"
        }, 0, "+=1").fromTo("#rightboard", 1, {
            y: "-100%",
            autoALpha: 0,
            ease: Power4.easeOut
        }, {
            y: "0%",
            autoALpha: 1,
            ease: Power4.easeOut
        }, 0.5).fromTo("#leftboard", 1, {
            x: "-100%",
            scaleX: 1.2,
            autoALpha: 0,
            ease: Power4.easeIn
        }, {
            x: "0%",
            scaleX: 1,
            autoALpha: 1,
            ease: Power4.easeOut
        }, 0, "-=1").staggerFromTo($tokenbasetitle, 1, {
            autoALpha: 0,
            yPercent: 90,
            xPercent: 25,
            ease: Power4.easeIn
        }, {
            autoALpha: 1,
            yPercent: 0,
            xPercent: 0,
            ease: Power4.easeOut
        }, 0, "-=0.8").staggerFromTo("#holder_token .section-left .box-l-2 .token_header_list li", 1, {
            autoALpha: 0,
            yPercent: 100,
            cycle: {
                yPercent: [100, -100]
            },
            ease: Power4.easeIn
        }, {
            autoALpha: 1,
            yPercent: 0,
            cycle: {
                yPercent: [0, -0]
            },
            ease: Power4.easeOut
        }, 0, "-=0.8").fromTo(".works__tab-link .button", 1, {
            autoALpha: 0,
            yPercent: 100,
            ease: Power4.easeInOut
        }, {
            autoALpha: 1,
            yPercent: 0,
            ease: Power4.easeOut
        }, 0, "+=1");

    function whenOpentokenize() {
        TweenMax.set(".cursor-container .cursor-text", {
            opacity: 0
        });
        TweenMax.staggerTo("#hamb-icon-buy .hit-area span.let_char#menubase", 2, {
            opacity: 0,
            y: 100,
            ease: Expo.easeInOut
        });
        TweenMax.staggerTo("#hamb-icon-buy .hit-area span.let_char#baseclose", 2, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
        });

        function thistabsOpen() {

            $('.tab_sesions').each(function () {
                $(this).find('.tab-link').eq(0)
                TweenMax.set(this, {
                    className: "+=is-active"
                });
            });


            $('.tabs').each(function () {
                $(this).find('.tab').eq(0)
                TweenMax.set(this, {
                    className: "+=is-active"
                });
            });


            $('.tab-link').on('click', function (e) {

                var tabLink = $(this).attr('data-tab-link');
                TweenMax.set('.tab-link', {
                    className: "-=is-active"
                });

                TweenMax.set(this, {
                    className: "+=is-active"
                });

                TweenMax.set('.tab', {
                    className: "-=is-active"
                });

                TweenMax.set('.tab[data-tab="' + tabLink + '"]', {
                    className: "+=is-active"
                });

            });
        }
        thistabsOpen();
        $('body').on('scroll mousewheel wheel touchmove', stopScrolling);

        // TweenMax.killChildTweensOf("#hamb-icon-buy .icon-line-1, #hamb-icon-buy .icon-line-2, #hamb-icon-buy .icon-line-3");

    }
    whenOpentokenize();
    progBar();
    doterwarn();
    barbutton();
    timelinebar();
}

function setuptokenizeClose() {
    tokenizeopen = !1;
    var is_mobile = isMobile.any;
    var tokentlClose = new TimelineMax();
    tokentlClose
        .set(".projects__headline-enter, #hamb-icon", {
            autoALpha: 1,
            visibility: "visible"
        })
        .to("#hamb-icon-buy", 1, {
            ease: Expo.easeOut,
            marginRight: "20vw"
        }, 0, "+=1")
        .set("#hamb-icon-buy .nav-icon", {
            className: "-=open"
        })
        .fromTo(".works__tab-link .button", 1, {
            autoALpha: 1,
            yPercent: 0,
            ease: Power4.easeOut
        }, {
            autoALpha: 0,
            yPercent: 100,
            ease: Power4.easeInOut
        }, 0, "+=1").staggerFromTo("#holder_token .section-left .box-l-2 .token_header_list li", 1, {
            autoALpha: 1,
            yPercent: 0,
            cycle: {
                yPercent: [0, -0]
            },
            ease: Power4.easeIn
        }, {
            autoALpha: 0,
            yPercent: 100,
            cycle: {
                yPercent: [100, -100]
            },
            ease: Power4.easeOut
        }, 0, "-=0.8").staggerFromTo($tokenbasetitle, 1, {
            autoALpha: 1,
            yPercent: 0,
            xPercent: 0,
            ease: Power4.easeOut,
            cycle: {
                yPercent: [0, -0]
            }
        }, {
            autoALpha: 0,
            yPercent: 90,
            xPercent: 25,
            ease: Power4.easeIn,
            cycle: {
                yPercent: [90, -90]
            }
        }, 0, "-=0.8").fromTo("#rightboard", 1, {
            yPercent: 0,
            autoALpha: 1,
            ease: Power4.easeOut
        }, {
            yPercent: -100,
            autoALpha: 0,
            ease: Power4.easeIn
        }, 0, "-=1").fromTo("#leftboard", 1, {
            x: "0%",
            autoALpha: 1,
            scaleX: 1,
            ease: Power4.easeOut
        }, {
            x: "-100%",
            scaleX: 1.2,
            autoALpha: 0,
            ease: Power4.easeIn,
            onComplete: function () {
                TweenMax.set("#holder_token", {
                    opacity: 0,
                    visibility: "hidden",
                    zIndex: -1
                });
            }
        }, 0);
    // 
    TweenMax.killChildTweensOf(".progressbar");
    TweenMax.killChildTweensOf(document.getElementById("lemmekill"));
    $("#lemmekill").remove();
    $('body').off('scroll mousewheel wheel touchmove', stopScrolling);

    if (is_mobile) {
        TweenMax.to("#hamb-icon-buy", 1, {
            ease: Expo.easeOut
        }, 0, "+=1");
    }
    // ================== //
    function whenClosetokenize() {
        TweenMax.set(".cursor-container .cursor-text", {
            opacity: 1
        });
        TweenMax.killChildTweensOf(".count");
        TweenMax.staggerTo("#hamb-icon-buy .hit-area span.let_char#menubase", 2, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
        });
        TweenMax.staggerTo("#hamb-icon-buy  .hit-area span.let_char#baseclose", 2, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut
        });
    }

    whenClosetokenize();
}






function thistabsOpen() {
    $('.tab_sesions').each(function () {
        $(this).find('.tab-link').eq(0)
        TweenMax.set(this, {
            className: "+=is-active"
        });
    });
    $('.tabs').each(function () {
        $(this).find('.tab').eq(0)
        TweenMax.set(this, {
            className: "+=is-active"
        });
    });
    $('.tab-link').on('click', function (e) {
        var tabLink = $(this).attr('data-tab-link');
        TweenMax.set(this, {
            className: "+=is-active"
        });
        TweenMax.set('.tab-link', {
            className: "-=is-active"
        });
        TweenMax.set('.tab', {
            className: "-=is-active"
        });
        TweenMax.set('.tab[data-tab="' + tabLink + '"]', {
            className: "+=is-active"
        })
    })
}

function doterwarn() {
    TweenMax.fromTo('.label_guaranted .bullet_style', 0.6, {
        scale: .8
    }, {
        scale: 1.1,
        transformOrigin: "center center",
        repeat: -1,
        yoyo: !0
    })
}

function barbutton() {
    var timebar1 = new TimelineMax({
        repeat: -1
    });
    $(".works__tab-link .banner_btn").each(function () {
        var thisbSpark = $(".delgo_spark");
        timebar1.fromTo(thisbSpark, 1.5, {
            backgroundPosition: "0px 0px"
        }, {
            backgroundPosition: "0px -64px",
            ease: Linear.easeNone
        })
    });
    return timebar1;
    timebar1.play()
}

function progBar() {
    $('.progressbar').each(function () {
        var elbar = $(this);
        var dataperc = elbar.attr('data-perc'),
            barperc = Math.round(dataperc * 5);
        TweenMax.set('.thisbar', {
            width: barperc,
            dataperc: barperc
        });
        elbar.find('.label').append('<div class="perc" id="lemmekill"></div>');

        function perc() {
            var length = elbar.find('.thisbar').css('width'),
                perc = Math.round(parseInt(length) / 5),
                labelpos = (parseInt(length) - 2);
            elbar.find('.label').css('left', labelpos);
            elbar.find('.perc').text(perc + '%')
        }
        perc();
        setInterval(perc, 0)
    })
}

function timelinebar() {
    var timebar2 = new TimelineMax({
        repeat: -1
    });
    timebar2.fromTo(".thisbar span", 1.5, {
        backgroundPosition: "0px 0px"
    }, {
        backgroundPosition: "0px -64px",
        ease: Linear.easeNone
    });
    return timebar2;
    timebar2.play()
}


function eventscrollmagic() {
    var scenesecond = new TimelineMax();
    var timefive = new TimelineMax();
    var seslima = new TimelineMax();
    var proj_1 = new TimelineMax();
    var proj_1_A = new TimelineMax();
    var scenefirst = new TimelineMax();
    var skewAnimation = new TimelineMax();
    var project_b = new TimelineMax();
    var tldestop = new TimelineMax();
    var is_mobile = isMobile.any;
    var $vg = $(" .sesi_dua, .sesi_tilu, .sesi_lima, .is--main--project");
    var delgo_iso = new ScrollMagic.Controller();
    if (!is_mobile) {
        thisboxswiper();
        var projicoleft = new ScrollMagic.Scene({
            triggerElement: '.vision_title_section.right',
            triggerHook: "0.1",
            duration: $('.vision_title_section').outerHeight() - ($('#is_posed').outerHeight() - 150)
        }).setPin('.hook_on_vision').addTo(delgo_iso);
        var $icmo1 = $(".img_cls_mid01"),
            $icmo2 = $(".img_cls_mid02"),
            $icmo3 = $(".img_cls_mid03"),
            $icmo5 = $(".img_cls_mid05"),
            $icmo6 = $(".img_cls_mid06"),
            $icmoxt = $(".text_3s");
        scenesecond.to($icmo1, 4, {
            force3D: !0,
            y: -150,
            autoAlpha: 1,
            zIndex: 3
        }, '-=4').to($icmo2, 4, {
            force3D: !0,
            y: -100,
        }, '-=4').to($icmo3, 4, {
            force3D: !0,
            y: 180,
            ease: Power2.easeOut
        }, '-=4').to($icmo5, 4, {
            force3D: !0,
            y: 30,
            ease: Expo.easeOut
        }, '-=4').to($icmo6, 4, {
            force3D: !0,
            y: 100,
            ease: Power2.easeOut
        }, '-=4').from($icmoxt, 4, {
            force3D: !0,
            y: 45,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, '-=4')
        var sc2 = new ScrollMagic.Scene({
            triggerElement: '.sesi_dua',
            duration: '200%',
            triggerHook: 0.08
        }).setTween(scenesecond).setPin('.sesi_dua').addTo(delgo_iso);
        var $baseWRP = $('.iphone-image-wrapper'),
            $frstTITL = $('.iphone1-text'),
            $frstTITLE = $('.iphone2-text'),
            $frstIMG = $('.iphone1'),
            $frstIMGE = $('.iphone2'),
            $frstSTCK = $('.iphone-stick'),
            $frstBHND = $('.iphone1-img-behind'),
            $frstBHNDE = $('.iphone2-img-behind'),
            $frstIMAG = $('.iphone1-img'),
            $frstIMAGE = $('.iphone2-img');
        proj_1.set($baseWRP, {
            scale: 4,
            transformOrigin: "center top"
        }).to($baseWRP, 3, {
            scale: 2,
            y: "-50%"
        }).to($baseWRP, 3, {
            scale: 1.5,
            y: "-20%"
        }).to($baseWRP, 3, {
            scale: 1,
            y: "0%"
        })
        var scphone = new ScrollMagic.Scene({
            triggerElement: '.trg1',
            triggerHook: 0.2,
            duration: "100%"
        }).setTween(proj_1).addTo(delgo_iso);
        proj_1_A.to($frstIMG, 3, {
            x: "-50%"
        }).to($frstIMGE, 3, {
            x: "50%"
        }, "-=3").from($frstTITL, 0.3, {
            autoAlpha: 0,
            color: "hsl(27, 96%, 51%)"
        }, "-=3").from($frstTITLE, 0.3, {
            autoAlpha: 0,
            color: "hsl(27, 96%, 51%)"
        }, "-=3").to($frstTITL, 3, {
            x: "-50%"
        }, "-=3").to($frstTITLE, 3, {
            x: "50%"
        }, "-=3").fromTo($frstSTCK, 3, {
            display: "none",
            autoAlpha: 0,
            scale: 1.5,
            transformOrigin: "50% 50%",
            ease: Power2.easeInOut
        }, {
            display: "inline-block",
            autoAlpha: 1,
            scale: 1,
            transformOrigin: "50% 50%",
            ease: Power2.easeOut
        }, "-=3").to($frstBHND, 3, {
            x: "-60%",
            transformOrigin: "50% 50%",
            ease: Power2.easeOut
        }, "-=.2").to($frstBHNDE, 3, {
            x: "60%",
            transformOrigin: "50% 50%",
            ease: Power2.easeOut
        }, "-=3").to($frstIMAG, 5, {
            autoAlpha: 0
        }, "-=5").to($frstIMAGE, 5, {
            autoAlpha: 0,
            color: "hsl(27, 96%, 51%)"
        }, "-=5").to($frstTITL, 2, {
            opacity: 0,
            force3D: !0,
            ease: Power2.easeOut
        }, "-=3").to($frstTITLE, 2, {
            opacity: 0,
            force3D: !0,
            ease: Power2.easeOut
        }, "-=3");
        var scphone2 = new ScrollMagic.Scene({
            triggerElement: '.trg2',
            triggerHook: 0,
            duration: "500%"
        }).setTween(proj_1_A).setPin('.trg2').addTo(delgo_iso)
    } else {
        delgo_iso.removeScene([sc2, scphone, scphone2]);
        $vg.remove();
        TweenLite.killTweensOf($vg);
        scenesecond.kill();
        timefive.kill();
        seslima.kill();
        proj_1.kill();
        proj_1_A.kill();
        proj_1 = null;
        proj_1_A = null;
        scenesecond = null;
        timefive = null;
        seslima = null;
        sc2 = null;
        scphone = null;
        scphone2 = null
    }
}

function thisboxswiper() {
    $('.is_mobile_part').each(function () {
        var $rightColor = $(this).find('.background.right .color'),
            $rightFill = $(this).find('.background.right .is_coloring'),
            $leftColor = $(this).find('.background.left .color'),
            $leftFill = $(this).find('.background.left .is_coloring'),
            $text = $(this).find('.mob_content p span'),
            $letters = $(this).find('h2>span span.is_sub_head'),
            $line = $(this).find('.mob_content .is_side .line'),
            $thsvect = $(this).find('.is_vector svg'),
            $thsimeg = $(this).find('.is_vector img');
        var tlbox = new TimelineMax();
        tlbox.from($rightColor, .8, {
            y: '100%',
            autoAlpha: 0,
            ease: Power2.easeOut
        }, .3).from($rightFill, 1, {
            y: '100%',
            ease: Power2.easeOut
        }, .4).from($leftColor, .8, {
            y: '100%',
            autoAlpha: 0,
            ease: Power2.easeOut
        }, .1).from($leftFill, 1, {
            y: '100%',
            ease: Power2.easeOut
        }, .2).from($text, 1, {
            y: 90,
            autoAlpha: 0,
            scale: 3,
            ease: Circ.easeOut
        }, .2, "-=0.5").from($line, .5, {
            x: -200,
            scaleY: 15,
            overflow: "hidden",
            ease: SteppedEase.config(20)
        }, .14).fromTo($letters, 1, {
            y: '100%',
            ease: Power2.easeInOut,
            autoAlpha: 0,
            scale: 3,
        }, {
            y: "0%",
            autoAlpha: 1,
            scale: 1,
            ease: Power2.easeOut
        }, .14).from($thsvect, .5, {
            y: "-100%",
            transformOrigin: "center center",
            scale: 1.5,
            ease: Power2.easeOut,
            autoAlpha: 0
        }, .05).from($thsimeg, 1, {
            y: "100%",
            scale: 1.5,
            ease: Power2.easeInOut,
            autoAlpha: 0
        }, 0.5);
        var scenemob = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1.2,
            duration: "100%"
        }).setTween(tlbox).addTo(delgo_iso)
    })
}

function isStop() {
    var is_mobile = isMobile.any;
    if (!is_mobile) {
        soundManager.unmute();
        TweenMax.set(".sections-wrapper", {
            className: '-=thisbgmobile'
        })
    } else {
        soundManager.mute();
        TweenMax.set('.shad_main', {
            visibility: "hidden",
            zIndex: -1
        });
        TweenMax.set('.tab-distr-section li', {
            textAlign: "center"
        });
        TweenMax.set(".sections-wrapper", {
            className: '+=thisbgmobile'
        })
    }
    return is_mobile
}

function setupSound() {

    soundManager.setup({
        url: 'assets/audio/',
        onready: function () {
            soundManager.createSound({
                id: 'thisclick',
                url: 'assets/audio/click.mp3',
                volume: 50
            });
            soundManager.createSound({
                id: 'thishover',
                url: 'assets/audio/ishover.mp3',
                volume: 50
            });
            soundManager.createSound({
                id: 'thisslide',
                url: 'assets/audio/slaterdetail.mp3',
                volume: 10
            });
            soundManager.createSound({
                id: 'thisswipe',
                url: 'assets/audio/swiper.mp3',
                volume: 50
            });
            soundManager.createSound({
                id: 'thislop',
                url: 'assets/audio/looping.mp3',
                volume: 30,
                loops: Infinity,
                onfinish: function () {
                    soundManager.play('thislop')
                }
            })
        },
        ontimeout: function () {}
    });
}
progressTl = new TimelineMax();

function togleclassmenu(e) {
    $('.icon-wrap').on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass('mute')) {
            soundManager.unmute()
        } else {
            soundManager.mute()
        }
        $(this).toggleClass('mute')
    })
}

function LoadingPage() {


    var loadedCount = 0; //current number of images loaded
    var imagesToLoad = $('.letload').length; //number of slides with .letload container
    var loadingProgress = 0; //timeline progress - starts at 0




    function loadProgress(imgLoad, image) {
        //one more image has been loaded
        loadedCount++;
        loadingProgress = (loadedCount / imagesToLoad);

        // console.log(loadingProgress);
        // console.log('all images are loaded');


        // GSAP timeline for our progress bar
        TweenMax.to(progressTl, 1, {
            progress: loadingProgress,
            ease: Linear.easeNone
        });

    }

    //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
    var progressTl = new TimelineMax({
        paused: true,
        onUpdate: progressUpdate
    });

    progressTl
        //tween the progress bar width
        .to($('.progress span'), 1, {
            width: 100,
            ease: Linear.easeNone
        });

    //as the progress bar witdh updates and grows we put the precentage loaded in the screen
    function progressUpdate() {
        //the percentage loaded based on the tween's progress
        loadingProgress = Math.round(progressTl.progress() * 100);
        //we put the percentage in the screen
        $(".txt-perc").text(loadingProgress + '%');
        $(".txt-wait");
    }



    // 
    var queue = new createjs.LoadQueue(),

        $copy = $('#cookies .span_block span.txt'),
        $pdf = $('#cookies .span_block2 .pdf_cookies'),
        $shadtop = $('.shad_reject .line.top'),
        $shadleft = $('.shad_reject .line.left'),
        $shadright = $('.shad_reject .line.right'),
        $shadbot = $('.shad_reject .line.bottom'),
        $shadiconX = $('.shad_reject .icon-close'),
        $shad_labelre = $('.shad_label_re'),
        $shad_labeacl = $('.shad_label_acc'),
        $shadbase = $('.shad_reject'),
        $shadtopac = $('.shad_acc #eltop'),
        $shadleftac = $('.shad_acc #elleft'),
        $shadrightac = $('.shad_acc #elright'),
        $shadbotac = $('.shad_acc #elbot'),
        $shadiconXac = $('.shad_acc #elclose'),
        $cREJ = $('.cookies__reject'),
        $cACC = $('.cookies__accept'),
        randomX, labelTime, codeST = new SplitText("span.txt", {
            type: "words"
        }),
        codePdf = new SplitText("#cookies p a span", {
            type: "chars"
        });

    $(window).on("load", function () {
        queue.on('complete', onComplete);
        queue.on('progress', onProgress);
        $('.letload').imagesLoaded({
                background: true
            }).progress(function (instance, image) {
                loadProgress();
            });
        // =================== //
        var tl12 = new TimelineMax({
            repeat: -1
        });
        tl12.set("#c1", {
            autoAlpha: .7
        }).
        to("#c1", .5, {
            scale: .2,
            x: "+=5",
            transformOrigin: "50% 50%"
        }).
        to("#c1", .5, {
            scale: 1,
            x: "-=5",
            transformOrigin: "50% 50%"
        });
        //animate second circle
        var tl13 = new TimelineMax({
            repeat: -1
        });
        tl13.set("#c2", {
            autoAlpha: .7
        }).
        to("#c2", .5, {
            scale: .2,
            x: "-=5",
            transformOrigin: "50% 50%"
        }).
        to("#c2", .5, {
            scale: 1,
            x: "+=5",
            transformOrigin: "50% 50%"
        });
        //split loading text
        var splitloading = new SplitText(".txt-loading", {
            type: "chars",
            position: "absolute"
        });
        tlsplitloading = new TimelineMax({
            repeat: -1
        });

        //now animate each character 
        tlsplitloading.staggerFrom(splitloading.chars, 1, {
            autoAlpha: 0
        }, 0.07).
        staggerTo(splitloading.chars, .5, {
            autoAlpha: 0
        }, 0.05);

        queue.loadManifest([{
                id: "1",
                src: "./assets/fonts/335787aa6f57d71cabe8eb5dc89c6d6b.woff2"
            }, {
                id: "2",
                src: "./assets/fonts/335787aa6f57d71cabe8eb5dc89c6d6b.woff"
            }, {
                id: "3",
                src: "./assets/fonts/74bc754f4e4107ea184d1296ca914049.woff2"
            }, {
                id: "4",
                src: "./assets/fonts/74bc754f4e4107ea184d1296ca914049.woff"
            }, {
                id: "5",
                src: "./assets/fonts/BlenderBold.woff"
            }, {
                id: "6",
                src: "./assets/fonts/BlenderBold.woff2"
            }, {
                id: "7",
                src: "./assets/fonts/fontello.woff"
            }, {
                id: "8",
                src: "./assets/fonts/let-space.woff"
            }, {
                id: "9",
                src: "./assets/fonts/rajdhani-regular-webfont.woff"
            }, {
                id: "10",
                src: "./assets/audio/click.mp3"
            }, {
                id: "11",
                src: "./assets/audio/ishover.mp3"
            }, {
                id: "12",
                src: "./assets/audio/looping.mp3"
            }, {
                id: "13",
                src: "./assets/audio/slaterdetail.mp3"
            }, {
                id: "14",
                src: "./assets/audio/swiper.mp3"
            },
            {
                id: "15",
                src: "./assets/img/thismap.png"
            },
            {
                id: "16",
                src: "./assets/img/roadmap/airdrop.png"
            },
            {
                id: "17",
                src: "./assets/img/object/elafter.png"
            },
            {
                id: "18",
                src: "./assets/img/delgoproject/front_iso.png"
            },
            {
                id: "19",
                src: "./assets/img/delgoproject/mn_iso.png"
            }, 
            { 
                id: "20",
                src: "./assets/img/delgoproject/rwrds_iso.png"
            },
            { 
                id: "21",
                src: "./assets/allpct/frame.png"
            },
            { 
                id: "22",
                src: "./assets/coming-soon.png"
            },
            { 
                id: "23",
                src: "./assets/TAL.png"
            },
            { 
                id: "24",
                src: "./assets/USF.png"
            },
            { 
                id: "25",
                src: "./assets/img/centervline.png"
            },
            { 
                id: "26",
                src: "./assets/img/medsos/dot_top.png"
            }

        ]);

        function onComplete(event) {
            // $progressbar.addClass('complete');
            TweenMax.staggerFromTo($cREJ, 1, {
                autoAlpha: 0,
                x: "-100%",
                ease: Power2.easeInOut
            }, {
                autoAlpha: 1,
                x: "0%",
                ease: Power2.easeOut
            });
            TweenMax.staggerFromTo($cACC, 1, {
                autoAlpha: 0,
                x: "100%",
                ease: Power2.easeInOut
            }, {
                autoAlpha: 1,
                x: "0%",
                ease: Power2.easeOut
            });
            TweenMax.to($copy, 1, {
                yPercent: 0,
                autoAlpha: 1,
                ease: Power2.easeOut
            });
            TweenMax.to($pdf, 1.2, {
                yPercent: 0,
                autoAlpha: 1,
                ease: Power2.easeOut
            });
            TweenMax.staggerFrom(codePdf.chars, 1, {
                opacity: 0,
                scale: 0.8,
                backgroundColor: "rgb(230, 71, 8)",
                y: 100,
                ease: Power2.easeInOut
            }, 0.05);
            TweenMax.staggerTo(codePdf.chars, 1, {
                ease: Power2.easeOut,
                y: 0
            }, 0.05);
            TweenMax.to($('.progress'), 1, {
                y: 100,
                autoAlpha: 0,
                ease: Power4.easeIn
            }, 0.05);
            TweenMax.to($('.txt-perc'), 1, {
                y: 100,
                autoAlpha: 0,
                ease: Power4.easeIn
            }, 0.3);
            TweenMax.to($('.txt-wait'), 1, {
                y: 100,
                autoAlpha: 0,
                ease: Power4.easeIn
            }, 0.3);
            TweenMax.to($('#preloader'), 1, {
                yPercent: 100,
                ease: Power4.easeInOut,
                opacity: 0,
                visibility: "hidden"
            }, 0.05);
            TweenMax.staggerFrom(codeST.words, 0.8, {
                opacity: 0,
                scale: 0.8,
                backgroundColor: "rgb(230, 71, 8)",
                y: 100,
                ease: Power2.easeInOut
            }, 0.02);
            TweenMax.staggerTo(codeST.words, 0.8, {
                ease: Power2.easeOut,
                y: 0,
                onStart: function () {
                    TweenMax.killChildTweensOf("#let_animloader, #preloader");
                    // $("#let_animloader, #preloader").remove();
                }
            }, 0.02);

            $(".cookies__reject").mouseenter(function () {
                TweenMax.to($shadbase, .4, {
                    force3D: !0,
                    scale: 1.1,
                    rotation: 90,
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.to([$shadtop, $shadbot], .4, {
                    force3D: !0,
                    scale: 2,
                    color: "rgb(230, 71, 8)",
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.to([$shadleft, $shadright], .4, {
                    force3D: !0,
                    scale: .7,
                    yoyo: !0,
                    repeat: -1,
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.to($shadiconX, 0.5, {
                    force3D: !0,
                    rotation: 90,
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.to($shad_labelre, 1, {
                    force3D: !0,
                    color: "rgb(230, 71, 8)",
                    xPercent: -25,
                    ease: Power4.easeInOut
                }, .03);
            });
            $(".cookies__reject").mouseleave(function () {
                TweenMax.to($shadbase, .4, {
                    force3D: !0,
                    scale: 1,
                    rotation: 45,
                    clearProps: "all"
                }, .03);
                TweenMax.to([$shadtop, $shadbot], .4, {
                    force3D: !0,
                    scale: 1,
                    color: "#fdfdfd",
                    ease: Power2.easeInOut,
                    clearProps: "all"
                }, .03);
                TweenMax.to([$shadleft, $shadright], .4, {
                    force3D: !0,
                    scale: 1,
                    yoyo: !1,
                    repeat: !1,
                    ease: Power2.easeInOut,
                    clearProps: "all"
                }, .03);
                TweenMax.to($shadiconX, 0.5, {
                    force3D: !0,
                    rotation: 0,
                    ease: Power2.easeInOut,
                    clearProps: "all"
                }, .03);
                TweenMax.to($shad_labelre, 1, {
                    force3D: !0,
                    color: "#fdfdfd",
                    xPercent: 0,
                    ease: Power4.easeInOut,
                    clearProps: "all"
                }, .03);
            });
            $(".cookies__accept").mouseenter(function () {
                TweenMax.to($shadtopac, .4, {
                    force3D: !0,
                    color: "#70e851",
                    ease: Power2.easeInOut,
                    repeat: -1,
                    scale: 1.5,
                    yoyo: !0
                }, .03);
                TweenMax.to($shadbotac, .4, {
                    force3D: !0,
                    color: "#70e851",
                    ease: Power2.easeInOut,
                    yoyo: !0,
                    repeat: -1,
                    scale: 1.5
                }, .03);
                TweenMax.to($shadleftac, .4, {
                    force3D: !0,
                    scale: 1.2,
                    yoyo: !0,
                    repeat: -1,
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.to($shadrightac, .4, {
                    force3D: !0,
                    ease: Power2.easeInOut,
                    scale: 1.2,
                    yoyo: !0,
                    repeat: -1
                }, .03);
                TweenMax.to($shadiconXac, .5, {
                    force3D: !0,
                    scale: .5,
                    ease: Power2.easeInOut
                }, .03);
                TweenMax.staggerTo($shad_labeacl, 1, {
                    force3D: !0,
                    color: "#70e851",
                    xPercent: -25,
                    ease: Power4.easeInOut
                }, .03);
            });
            $(".cookies__accept").mouseleave(function () {
                TweenMax.to([$shadtopac, $shadbotac, $shadrightac, $shadleftac], .4, {
                    force3D: !0,
                    color: "#fdfdfd",
                    ease: Power2.easeInOut,
                    clearProps: "all",
                    yoyo: !1,
                    repeat: !1,
                    scale: 1
                }, .03);
                TweenMax.to($shadiconXac, 0.5, {
                    force3D: !0,
                    scale: 1,
                    ease: Power2.easeInOut,
                    clearProps: "all"
                }, .03);
                TweenMax.staggerTo($shad_labeacl, 1, {
                    force3D: !0,
                    color: "#fdfdfd",
                    xPercent: 0,
                    ease: Power4.easeInOut,
                    clearProps: "all"
                }, .03);
            });
            $(".cookies__reject, .cookies__accept").on('click', function (e) {
                e.preventDefault();
                soundManager.play('thisclick');
                TweenMax.to($copy, .8, {
                    yPercent: -100,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                });
                TweenMax.to($pdf, 1, {
                    yPercent: -100,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                });
                TweenMax.to([$cREJ, $cACC], 1, {
                    yPercent: -100,
                    autoAlpha: 0,
                    ease: Power2.easeInOut,
                    onComplete: function () {
                        soundManager.play('thislop');
                        letOpentheDelgo();
                        TweenMax.to('#is_load', 1, {
                            autoAlpha: 0,
                            ease: Power2.easeInOut,
                            backgroundColor: "hsl(27, 96%, 51%)",
                            onComplete: function () {

                                TweenMax.to('#is_load', 1, {
                                    visibility: "hidden",
                                    opacity: 0,
                                    yPercent: 100,
                                    ease: Power2.easeOut,
                                    onComplete: function () {
                                        setTimeout(function () {
                                            scrollEvent();
                                            $("main.root").addClass("delgo-animate");
                                            delgoPlusProgressCircle();
                                            $('#is_load').remove();
                                            progressTl.kill();
                                        }, 200)
                                    }
                                }).delay(.1)
                            }
                        })
                    }
                }, 0.5);
            });
        }

        function onProgress(event) {
            
            progressUpdate();
            loadingProgress = Math.round(event.loaded * 100);
            // console.log('General progress', Math.round(event.loaded) * 100, event);


        }
    })
}

function afterends() {
    topRclose();
    setuptokenizeClose();
}

function delgoPlusProgressCircle() {
    function e() {
        var e = n.scrollTop(),
            t = $(document).height() - n.height();
        70 < e ? (TweenMax.to(i, 1, {
            ease: Back.easeOut.config(4),
            right: 20
        }), i.find(".delgo-progress-path").css("stroke-dashoffset", 300 - Math.round(300 * e / t) + "%")) : TweenMax.to(i, 1, {
            ease: Back.easeIn.config(4),
            right: -60
        })
    }
    var n = $(window),
        i = $('[data-delgo-grid="progress-circle"]'),
        t = delgoPlus.removeAttr(i, "data-delgo-grid-stroke"),
        s = void 0 === t ? "" : 'stroke="' + t + '"';
    TweenMax.set(i, {
        position: "fixed",
        margin: 0,
        padding: 0,
        right: 0,
        bottom: 25,
        width: 40,
        height: 40,
        fill: "#30d5eb",
        zIndex: 999
    }), i.append('<svg class="delgo-progress-circle-up" width="100%" height="100%" ' + s + ' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="delgo-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 100ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>'), n.on("scroll", function () {
        e()
    }), e(), i.on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1600)
    })
}

function ajaxLoad(e) {
    function s(e) {
        TweenMax.to(o, 1, {
            onStart: function () {
                slicetl.play()
            },
            onComplete: function () {
                var i;
                o.removeClass("delgo-animate"), i = e, o.load(i + " main.root > *", function (e, t, n) {
                    "error" !== t ? (history.pushState(null, null, i), delgoPlus.scrollTop("body", "0"), setTimeout(function () {
                        var t = $(".global-cursor .custom-cursor");
                        ! function (e) {
                            void 0 !== n && 0 < n.length ? (n.find(".delgo-nav-light").css({
                                visibility: "hidden"
                            }), t.removeClass("single-cursor")) : t.addClass("single-cursor");
                            TweenMax.to(o, 1, {
                                onStart: function () {
                                    afterends();
                                    wbaseanim.play();
                                },
                                onComplete: function () {
                                    doreback()
                                }
                            })
                        }($(e))
                    }, 100)) : window.location = i
                })
            }
        })
    }
    var o = $("main.root"),
        a = $("body"),
        t = ($(window), $(".projects__headline-enter a")),
        n = $("li a.ajax-link, .ajax_links"),
        r = "",
        i = $(".circlehold svg path"),
        l = new TimelineLite;
    !0 === e && (t.off("mousedown"), t.off("mouseup"), n.off("click")), t.bind("mousedown touchstart", function (e) {
            if (e.preventDefault(), "mousedown" !== e.type.toLowerCase() || 3 !== e.which) {
                var t = $(".sections-wrapper.delgo-parent-slide .delgo-active").data("url");
                a.hasClass("ajax-slider") ? $(window).width() < 992 ? void 0 !== t && s(t) : (l = new TimelineLite).fromTo(i, 1.5, {
                    "stroke-dashoffset": "309%"
                }, {
                    "stroke-dashoffset": "0",
                    onComplete: function () {
                        void 0 !== t && s(t)
                    }
                }) : window.location = t
            }
        }).bind("mouseup touchend", function (e) {
            e.preventDefault(), l.pause(), i.css({
                "stroke-dashoffset": "309%"
            })
        }),
        n.on("click", function (e) {
            if (a.hasClass("ajax-menu")) {
                e.preventDefault();
                var t = $(this),
                    n = t.attr("href"),
                    i = t.parent();
                i.hasClass("item") && !i.hasClass("slick-active") || 0 <= n.indexOf("#") || void 0 !== n && s(n)
            }
        })
}

function effectBackForward() {
    $(window).on("popstate", function (e) {
        TweenMax.from("main.root", 0.5, {
            opacity: 0,
            backgroundColor: "#000",
            zIndex: -1,
            onStart: function () {
                slicetl.play();

            },
            onComplete: function () {
                $("main.root").load(document.location + " main.root > *", function () {
                    doreback();
                    wbaseanim.play();
                    afterends();
                });
                TweenMax.to(window, 2, {
                    scrollTo: "body"
                });
            },
            onUpdate: function () {
                TweenMax.to("main.root", 1, {
                    opacity: 1
                });
            }
        })
    })
}

function mouseCirMove(e) {
    function t() {
        delgoPlus.elementHover(n, "a , h1.logo, #hamb-icon, #hamb-icon-buy, h1.logo,  .icon-wrap, .tokenize_item, .tab-distr-section, .to-prev , .to-next ,  .hero__down , .icon__fixed , .t-link , .button-next , .toggle .tokenize_item", "custom-cursor-link"), delgoPlus.elementHover(n, ".delgo-video")
    }
    var n = ".global-cursor .custom-cursor";
    void 0 === e || !0 !== e ? $("body").hasClass("delgo-large-mobile") || (delgoPlus.mouseMove(n, {
        onComplete: function (e, t) {
            t.hasClass("effect-cursor") || t.addClass("effect-cursor")
        },
        onUpdate: function (e, t, n, i) {
            i.hasClass("effect-cursor") && i.removeClass("effect-cursor")
        }
    }), t()) : t()
}

function toggleButtonMap() {
    var e = document.getElementById("toggle");
    if (null != e) {
        var t, n = document.getElementById("toggle-container");
        e.addEventListener("click", function () {
            (t = !t) ? (n.style.clipPath = "inset(0 0 0 50%)", n.style.backgroundColor = "var(--baseB);", TweenMax.to(".location__address-container", 1, {
                ease: Power2.easeInOut,
                force3D: !0,
                opacity: 0,
                yPercent: 200
            }), TweenMax.to(".location__address-container h5 span", 1.2, {
                ease: Power2.easeOut,
                force3D: !0,
                opacity: 0,
                yPercent: 200
            }), TweenMax.to(".location__address-container ul .contact-info-item", 1.4, {
                ease: Power2.easeOut,
                force3D: !0,
                opacity: 0,
                yPercent: 200
            }), $(".box-info-wrap").addClass("show-map")) : (n.style.clipPath = "inset(0 50% 0 0)", n.style.backgroundColor = "rgb(57, 8, 230);", TweenMax.to(".location__address-container", 1, {
                ease: Power2.easeOut,
                force3D: !0,
                opacity: 1,
                yPercent: 0
            }), TweenMax.to(".location__address-container h5 span", 1.2, {
                ease: Power2.easeOut,
                force3D: !0,
                opacity: 1,
                yPercent: 0
            }), TweenMax.to(".location__address-container ul .contact-info-item", 1.4, {
                ease: Power2.easeOut,
                force3D: !0,
                opacity: 1,
                yPercent: 0
            }), $(".box-info-wrap").removeClass("show-map"))
        })
    }
}

function slicerbg() {
    $('body').append('<div class="overlay-swipe"><div class="is_slice is_filter"><div class="is_sliceBG left"><div class="over-1"></div><div class="over-2"></div></div><div class="is_sliceBG right"><div class="over-1"></div><div class="over-2"></div></div><div class="is_waitfilter"><span class="text">DEXSWAP</span></div></div></div>');
    var $slicerbody = $('.overlay-swipe');
    $slicerbody.each(function () {
        var $slicerightColor = $('.is_sliceBG.right .over-1'),
            $slicerightFill = $('.is_sliceBG.right .over-2'),
            $sliceleftColor = $('.is_sliceBG.left .over-1'),
            $sliceleftFill = $('.is_sliceBG.left .over-2'),
            $slicetext = $('.is_waitfilter .text');
        var $wantosplit = new SplitText($slicetext, {
            type: "words"
        });
        var slicetl = new TimelineMax();
        var $maintitleajax = $(".delgo-header-hero .subtitle, .delgo-header-hero .name-title");
        TweenMax.set($wantosplit, {
            perspective: 500
        });
        slicetl.set([$slicerbody, $slicetext], {
            position: "fixed",
            zIndex: 9999
        }).from($slicerightColor, .8, {
            y: '100%',
            force3D: !0,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, .1).from($slicerightFill, 1, {
            y: '100%',
            force3D: !0,
            ease: Power2.easeOut
        }, .2).from($sliceleftColor, .8, {
            y: '-100%',
            force3D: !0,
            autoAlpha: 0,
            ease: Power2.easeOut
        }, .1).fromTo($wantosplit.words, 1.2, {
            autoAlpha: 0,
            y: "100%",
            ease: Power2.easeIn,
            color: "#ff7200"
        }, {
            autoAlpha: 1,
            y: "0%",
            ease: Power2.easeOut,
            color: "#fff"
        }, .3).from($sliceleftFill, 1, {
            y: '-100%',
            force3D: !0,
            ease: Power2.easeOut,
            onComplete: function () {
                slicetl.timeScale(1).reverse();
                TweenMax.to($slicerbody, 1, {
                    autoAlpha: 1,
                    ease: Power2.easeInOut,
                    backgroundColor: "#00080c",
                    visibility: "hidden",
                    zIndex: -1,
                    onComplete: function () {
                        TweenLite.killTweensOf($slicerbody);
                        TweenMax.to(this, 0.14, {
                            clearProps: "all",
                        });
                        $slicerbody.remove()
                    }
                }, 1, "-=2")
            }
        }, .2);
        soundManager.play('thisswipe')
    })
}

function delgo_slide_action() {
    var s = $(".sections-wrapper.delgo-parent-slide"),
        $point = $('.mouse-icon .point'),
        $moline = $('.mouse-line>span'),
        iconTimeline = new TimelineMax(),
        lineTimeline = new TimelineMax(),
        linetime2 = new TimelineMax(),
        e = $(".sections-wrapper.delgo-next"),
        t = s.find(".section-slider"),
        n = $(window).width(),
        i = s.find(".section-footer"),
        o = i.find(".boxnav-item.to-next"),
        a = i.find(".boxnav-item.to-prev"),
        r = new TimelineLite,
        l = {},
        d = {};
    var $hldline = $(".hold_line .line_hd1");
    if (0 < t.length) {
        var c = 1;
        t.each(function () {
            var e = $(this),
                t = $(this).find(".project-info h3.subtitle"),
                n = $(this).find(".name-title h1");
            e.attr("data-number", delgoPlus.numberText(c)), c++;
            var i = $(this).find(".name-title").clone();
            i.removeAttr("data-overlay").attr("data-id", $(this).data("id")), i.find("span"), l[i.data("id")] = {
                width: i.width(),
                left: i.offset().left,
                top: i.offset().top
            }, d[i.offset().left] = i.data("id"), delgoPlus.convertTextLine(n.find("span"), n)
        });
        var f = s.find(".delgo-nav-light");
        f.css("width", f.width() + 4 * n), t.clone().removeClass("delgo-active").append('<div class="delgo-box-shadow"></div>').appendTo(e), t.removeClass("section-slider-next"), delgoPlus.mouseWheel(s, function (e) {
            r.isActive() || (r = new TimelineLite, nextSlid(s, r))
        }, function (e) {
            r.isActive() || (r = new TimelineLite, prevSlid(s, r))
        });
        var p = 0;
        s.bind("mousedown touchstart", function (e) {
            p = "mousedown" === e.type.toLowerCase() ? e.pageX : e.originalEvent.touches[0].pageX
        }).bind("mouseup touchend", function (e) {
            if (!(991 < $(window).width())) {
                var t = p;
                t = "mouseup" === e.type.toLowerCase() ? e.pageX : e.originalEvent.changedTouches[0].pageX, p + 30 < t ? r.isActive() || (r = new TimelineLite, nextSlid(s, r)) : t < p - 30 && (r.isActive() || (r = new TimelineLite, prevSlid(s, r)))
            }
        }), o.on("click", function () {
            r.isActive() || (r = new TimelineLite, nextSlid(s, r))
        }), a.on("click", function () {
            r.isActive() || (r = new TimelineLite, prevSlid(s, r))
        })
        $("#delgo_shader_bg").each(function () {
            var MainStage = function () {
                var $window = $(window),
                    windowWidth = window.innerWidth,
                    windowHeight = window.innerHeight,
                    rendererCanvasID = 'delgo_3D',
                    renderer, texture, scene, camera, particles, imagedata, clock = new THREE.Clock(),
                    mouseX = 0,
                    mouseY = 0,
                    isMouseDown = !0,
                    lastMousePos = {
                        x: 0,
                        y: 0
                    },
                    windowHalfX = windowWidth / 2,
                    windowHalfY = windowHeight / 2;
                var particleRotation;
                var centerVector = new THREE.Vector3(0, 0, 0);
                var previousTime = 0;

                function init() {
                    THREE.ImageUtils.crossOrigin = '';
                    renderer = new THREE.WebGLRenderer({
                        canvas: document.getElementById(rendererCanvasID),
                        alpha: !0,
                        antialias: !0
                    });
                    renderer.setSize(windowWidth, windowHeight);
                    scene = new THREE.Scene();
                    camera = new THREE.PerspectiveCamera(50, windowWidth / windowHeight, 0.1, 10000);
                    camera.position.set(-100, 0, 400);
                    camera.lookAt(centerVector);
                    scene.add(camera);
                    var loader = new THREE.TextureLoader();
                    loader.load('data:image/png;base64,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', function (texture) {
                        imagedata = getImageData(texture.image);
                        var geometry = new THREE.Geometry();
                        var material = new THREE.PointsMaterial({
                            size: 1.2,
                            sizeAttenuation: !0,
                            color: new THREE.Color("#30d5eb"),
                            visible: !0,
                            opacity: .8,
                            transparent: !1,
                            flatShading: THREE.FlatShading
                        });
                        for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
                            for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
                                if (imagedata.data[(x * 4 + y * 4 * imagedata.width) + 3] > 128) {
                                    var vertex = new THREE.Vector3();
                                    vertex.x = Math.random() * 4000 - 2000;
                                    vertex.y = Math.random() * 4000 - 2000;
                                    vertex.z = Math.random() * 4000 - 2000;
                                    vertex.destination = {
                                        x: x - imagedata.width / 2,
                                        y: -y + imagedata.height / 2,
                                        z: 0
                                    };
                                    vertex.speed = Math.random() / 500 + 0.015;
                                    geometry.vertices.push(vertex)
                                }
                            }
                        }
                        particles = new THREE.Points(geometry, material);
                        scene.add(particles)
                    }, undefined, function (err) {
                        console.error('Delgo3D is error, please updated the browser or Reload.')
                    });
                    particleRotation = new THREE.Object3D();
                    scene.add(particleRotation);
                    var geometryPR = new THREE.TetrahedronGeometry(2, 0),
                        materialPR = new THREE.MeshPhongMaterial({
                            color: new THREE.Color("rgb(46, 212, 234)"),
                            flatShading: THREE.FlatShading
                        });
                    for (var i = 0; i < 400; i++) {
                        var mesh = new THREE.Mesh(geometryPR, materialPR);
                        mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
                        mesh.position.multiplyScalar(90 + (Math.random() * 1200));
                        mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                        particleRotation.add(mesh)
                    }
                    var ambientLight = new THREE.AmbientLight(0x999999);
                    scene.add(ambientLight);
                    var lights = [];
                    lights[0] = new THREE.DirectionalLight(27, 96, 51, 1);
                    lights[0].position.set(1, 0, 0);
                    lights[1] = new THREE.DirectionalLight(0x11E8BB, 1);
                    lights[1].position.set(0.75, 1, 0.5);
                    lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
                    lights[2].position.set(-0.75, -1, 0.5);
                    lights[3] = new THREE.DirectionalLight(0x999999, 1);
                    lights[3].position.set(-0.75, 1, 0.5);
                    scene.add(lights[0]);
                    scene.add(lights[1]);
                    scene.add(lights[2]);
                    scene.add(lights[3]);
                    document.addEventListener('mousemove', onDocumentMouseMove, !1);
                    document.addEventListener('touchmove', onDocumentTouchMove, !1);
                    document.addEventListener('mousedown', onDocumentMouseDown, !1);
                    document.addEventListener('mouseup', onDocumentMouseUp, !1);
                    window.addEventListener('resize', onWindowResize, !1);
                    window.scene = scene
                }

                function render() {
                    requestAnimationFrame(render);
                    var delta = clock.getDelta(),
                        thickness = 1200;
                    if (typeof particles != typeof undefined) {
                        for (var i = 0, j = particles.geometry.vertices.length; i < j; i++) {
                            var particle = particles.geometry.vertices[i];
                            particle.x += (particle.destination.x - particle.x) * particle.speed;
                            particle.y += (particle.destination.y - particle.y) * particle.speed;
                            particle.z += (particle.destination.z - particle.z) * particle.speed
                        }
                        if (delta - previousTime > thickness) {
                            var index = Math.floor(Math.random() * particles.geometry.vertices.length);
                            var particle1 = particles.geometry.vertices[particles.geometry.vertices.length - index];
                            var particle2 = particles.geometry.vertices[particles.geometry.vertices.length - index];
                            TweenMax.to(particle1, Math.random() * 2 + 1, {
                                x: particle2.x,
                                y: particle2.y,
                                ease: Power2.easeOut,
                                force3D: !0
                            });
                            TweenMax.to(particle2, Math.random() * 2 + 1, {
                                x: particle1.x,
                                y: particle1.y,
                                ease: Power2.easeOut,
                                force3D: !0
                            });
                            previousTime = delta
                        }
                        particles.geometry.verticesNeedUpdate = !0
                    }
                    if (!isMouseDown) {
                        camera.position.x += (0 - camera.position.x) * 0.03;
                        camera.position.y += (0 - camera.position.y) * 0.03
                    }
                    camera.position.x += (mouseX - camera.position.x) * 0.02;
                    camera.position.y += (-mouseY - camera.position.y) * 0.02;
                    camera.lookAt(centerVector);
                    particleRotation.rotation.x += 0.0000;
                    particleRotation.rotation.y -= 0.0060;
                    particleRotation.rotation.z -= 0.0000;
                    renderer.render(scene, camera)
                }

                function onWindowResize() {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight)
                }

                function onDocumentMouseMove(event) {
                    mouseX = event.clientX - windowHalfX;
                    mouseY = event.clientY - windowHalfY;
                    if (isMouseDown) {
                        camera.position.x += (event.clientX - lastMousePos.x) / 100;
                        camera.position.y -= (event.clientY - lastMousePos.y) / 100;
                        camera.lookAt(centerVector);
                        lastMousePos = {
                            x: event.clientX,
                            y: event.clientY
                        }, !1
                    }
                }

                function onDocumentTouchMove(event) {
                    if (event.touches.length == 1) {
                        event.preventDefault();
                        mouseX = event.touches[0].pageX - windowHalfX;
                        mouseY = event.touches[0].pageY - windowHalfY
                    }
                }

                function onDocumentMouseUp() {
                    isMouseDown = !1
                }

                function onDocumentMouseDown(event) {
                    isMouseDown = !0;
                    lastMousePos = {
                        x: event.clientX,
                        y: event.clientY
                    }
                }

                function handleMouseUp(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    isDown = !1;
                    drag1IsDragging = !1
                }

                function handleMouseMove(e) {
                    if (!isDown) {
                        return
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    mx = parseInt(e.clientX - offsetX);
                    my = parseInt(e.clientY - offsetY);
                    var dx = mx - cx;
                    var dy = my - cy;
                    drag1Sweep = (Math.atan2(dy, dx) + PI / 2 + PI2) % PI2;
                    draw()
                }

                function getImageData(image) {
                    var canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 2, 0);
                    ctx.filter = "blur(8px) brightness(50%)";
                    ctx.globalCompositeOperation = "lighter";
                    return ctx.getImageData(2, 0, image.width, image.height)
                }
                return {
                    init: init,
                    render: render,
                    getScene: function () {
                        return scene
                    },
                    getCamera: function () {
                        return camera
                    }
                }
            }();
            var is_mobile = isMobile.any;
            if (!is_mobile) {
                MainStage.init();
                MainStage.render()
            } else {
                $("#delgo_shader_bg").remove();
                TweenMax.killChildTweensOf(document.getElementById("delgo_shader_bg"))
            }
            return is_mobile
        });
        $(".mouseline_effect").each(function () {
            var is_mobile = isMobile.any;
            var iconTimeline = new TimelineMax({
                stagger: .25,
                repeat: -1,
                paused: !0
            });
            var lineTimeline = new TimelineMax({
                repeatDelay: 1,
                repeat: -1,
                paused: !0
            });
            iconTimeline.fromTo($point, .75, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power2.easeOut
            }).to($point, .75, {
                y: 7,
                force3D: !0,
                ease: Power2.easeOut
            }).to($point, .75, {
                opacity: 0,
                ease: Power2.easeOut
            });
            lineTimeline.fromTo($moline, 1.2, {
                y: -70
            }, {
                bezier: {
                    values: [{
                        y: 0
                    }, {
                        y: 70
                    }],
                    curviness: 2
                },
                force3D: !0,
                ease: Power2.easeOut
            });
            if (!is_mobile) {
                iconTimeline.play();
                lineTimeline.play()
            } else {
                $('.mouseline_effect').remove();
                TweenLite.killTweensOf([$point, $moline])
            }
            return is_mobile
        });
        $(".hold_line").each(function () {
            var is_mobile = isMobile.any;
            var linetime2 = new TimelineMax({
                repeatDelay: 1,
                repeat: -1,
                paused: !0
            });
            linetime2
                .fromTo($hldline, 1.2, {
                    x: -150
                }, {
                    bezier: {
                        values: [{
                            x: 0
                        }, {
                            x: 100
                        }],
                        curviness: 5,
                        timeResolution: 6,
                        autoRotate: !0
                    },
                    force3D: !0,
                    ease: Power2.easeOut
                });
            if (!is_mobile) {
                linetime2.play()
            } else {
                $('.hold_line').remove();
                TweenLite.killTweensOf($hldline)
            }
            return is_mobile
        });
        TweenMax.set("#delgo_uiles .uiles .mid_uiles, #thisvert", {
            visibility: "visible"
        });
        TweenMax.set(".cPanel .overlayer", {
            background: "radial-gradient(circle, rgba(20, 6, 25, 1) 0, rgba(0, 8, 12, 1) 100%)"
        });
    } else {
        TweenLite.killTweensOf(".mouse-icon .point, .hold_line, .hold_line, #delgo_shader_bg, .mouse-line span, particle1, particle2");
        TweenMax.set("#delgo_uiles .uiles .mid_uiles, .lang-container, #thisvert", {
            visibility: "hidden"
        });
        TweenMax.set(".cPanel .overlayer", {
            background: "#121212"
        });
    }
}

function setMoveSlider(t, n, e, i) {
    var s = $(".sections-wrapper.delgo-next"),
        o = s.find(".section-slider-next"),
        a = showNextSection(s, s.find('.section-slider[data-id="' + n.data("id") + '"]')),
        r = t.find(".delgo-active"),
        l = "0%",
        morph1 = document.querySelectorAll("path.stroke_morph1"),
        d = 0;
    e.add("start").add("sliderPlay", "start+=0").from(".boxnav-item-progress .number", 1, {
        yPercent: -150,
        ease: Expo.easeInOut,
        onStart: function () {
            soundManager.play('thisslide')
        }
    }, "sliderPlay", "start-=0.2"), e.staggerFromTo(r.find(".inner .subtitle span.let_char"), 1, {
        autoAlpha: 0,
        yPercent: 90,
        xPercent: 90,
        scale: 2,
        ease: Power2.easeOut
    }, {
        autoAlpha: 0,
        yPercent: 0,
        xPercent: 0,
        scale: 1,
        ease: Power2.easeOut
    }, "sliderPlay", "start+=0.5"), e.staggerFromTo(".hold_span .delgo-hold", .8, {
        opacity: 0.1,
        scale: 0.2,
        rotation: 30,
        ease: Power2.easeInOut
    }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        color: "#fdfdfd",
        ease: Power2.easeOut
    }, "sliderPlay", "start+=0.2"), e.staggerFromTo(r.find(".inner .name-title .is_words_wrp .is_chars_wrp"), .8, {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        ease: Power2.easeOut
    }, {
        autoAlpha: 0,
        yPercent: 100,
        scale: 2,
        ease: Power2.easeInOut
    }, "sliderPlay", "start+=0.3")
    e.staggerFromTo(".circlehold", .8, {
        autoAlpha: 0,
        yPercent: 300,
        ease: Power2.easeInOut
    }, {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power2.easeOut
    }, "sliderPlay", "start+=0.4");
    e.fromTo(n, 0.5, {
        left: l
    }, {
        left: "0%",
        onStart: function () {
            t.find(".section-slider").removeClass("section-slider-next").css({
                zIndex: 1
            }), n.css({
                zIndex: 2
            })
        },
        onComplete: function () {
            t.find(".section-slider").removeClass("delgo-active"), n.addClass("delgo-active");
            var e = n.data("number");
            $(".section-footer .number span").text(e)
        }
    }).fromTo(r, 0.5, {
        x: 0
    }, {
        x: d,
        ease: Power2.easeOut
    }, "-=1").staggerFromTo(".number span", 0.2, {
        autoAlpha: 0,
        ease: Power2.easeOut,
        force3D: !0,
        scale: 6,
        y: 100
    }, {
        autoAlpha: 1,
        scale: 1,
        force3D: !0,
        ease: Power2.easeInOut,
        transformOrigin: "50% 50%",
        y: 0,
        onStart: function () {}
    }, "sliderPlay", "start+=0").staggerFromTo(morph1, 2, {
        strokeDasharray: "13 32",
        strokeDashoffset: "89.4125",
        strokeWidth: 1,
        ease: Power2.easeInOut
    }, {
        strokeDasharray: "43 52",
        strokeDashoffset: "-89.4125",
        strokeWidth: 2,
        ease: Power2.easeOut
    }, "sliderPlay", "start+=0.5").staggerFromTo("path.middle-rect", 0.5, {
        rotation: 180,
        ease: Power2.easeOut,
        transformOrigin: "center center",
        scale: 0.2
    }, {
        rotation: 0,
        transformOrigin: "center center",
        ease: Power2.easeOut,
        scale: 1
    }, "sliderPlay", "start+=0.6").staggerFromTo(n.find(".inner .subtitle span.let_char"), 1, {
        autoAlpha: 0,
        yPercent: 100,
        scale: 2,
        ease: Power2.easeOut
    }, {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        ease: Power2.easeOut
    }, "sliderPlay", "start+=0.7").staggerFromTo(n.find(".inner .name-title .is_words_wrp .is_chars_wrp"), 1, {
        autoAlpha: 0,
        yPercent: 100,
        scale: 2,
        ease: Power2.easeOut,
        cycle: {
            y: [90, -90]
        }
    }, {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        ease: Power2.easeOut,
        cycle: {
            y: [0, 0]
        }
    }, "sliderPlay", "start+=0.8").fromTo(a, 0.5, {
        right: "0%",
        width: "100%"
    }, {
        right: 0,
        width: "0%",
        onStart: function () {
            s.find(".section-slider").removeClass("section-slider-next"), a.addClass("section-slider-next")
        }
    }, "-=.7")
}

function nextSlid(e, t) {
    setMoveSlider(e, getSliderNext(e), t, !0)
}

function prevSlid(e, t) {
    setMoveSlider(e, getSliderPrev(e), t)
}

function setPositionSlider(e, t) {
    var n = $(".sections-wrapper.delgo-next"),
        i = n.find(".section-slider-next"),
        s = showNextSection(n, n.find('.section-slider[data-id="' + t + '"]')),
        o = e.find('.section-slider[data-id="' + t + '"]'),
        a = e.find(".delgo-active");
    a.find(".inner .name-title .is_words_wrp .is_chars_wrp").css({
        visibility: "hidden",
        opacity: 0,
        transform: ""
    }), i.css({
        right: "30%"
    }), e.find(".section-slider").removeClass("section-slider-next").css({
        zIndex: 1
    }).find(".cover-bg").css({
        zIndex: ""
    }), o.css({
        zIndex: 2
    }).find(".cover-bg").css({
        zIndex: 0
    }), o.find(".inner .name-title .is_words_wrp").find(".is_chars_wrp").css({
        visibility: "inherit",
        opacity: 1
    }), a.css({
        left: "",
        transform: ""
    }), a.removeClass("delgo-active"), o.addClass("delgo-active"), s.css({
        right: 0,
        width: "calc(25vw + 5%)"
    }), n.find(".section-slider").removeClass("section-slider-next"), s.addClass("section-slider-next")
}

function letOpentheDelgo() {
    var e = $(".sections-wrapper.delgo-parent-slide"),
        t = e.find(".section-slider"),
        n = new TimelineLite;
    if (t.each(function () {}), 0 < t.length) {
        var i = e.find(".delgo-active");
        n.add("start").staggerFromTo(i.find(".inner .subtitle span.let_char"), 1, {
            autoAlpha: 0,
            yPercent: 100,
            scale: 2,
            ease: Power2.easeOut,
            cycle: {
                y: [90, -90]
            }
        }, {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            ease: Power2.easeOut,
            cycle: {
                y: [0, 0]
            }
        }, "start").staggerFrom(".logo span.delgoplus-title .let_char, h1.logo, .projects__headline-enter", 1, {
            autoAlpha: 0,
            xPercent: 90,
            cycle: {
                x: [90, -90]
            },
            stagger: {
                amount: 2,
                from: "left",
                ease: Back.easeInOut
            }
        }, "start+=0.5").staggerFrom(i.find(".inner .name-title .is_words_wrp .is_chars_wrp"), 1, {
            autoAlpha: 0,
            yPercent: 90,
            cycle: {
                skewY: [170, -20]
            },
            stagger: {
                amount: .5,
                from: "center",
                ease: Back.easeOut
            }
        }, .1, "start+=1").staggerFromTo(".morph-1, .morph-2, .morph-3, .rsc_togleright svg, .icon-wrap, .uiles.left_uiles, .uiles.right_uiles, #intro-screen", 1, {
            autoAlpha: 0,
            yPercent: 100,
            ease: Power2.easeOut,
            cycle: {
                y: [100, -100]
            }
        }, {
            autoAlpha: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            cycle: {
                y: [0, 0]
            }
        }, .3, "start+=1");
        var s = i.data("number");
        $(".section-footer .number span").text(s)
    }
}

function getSliderNext(e) {
    if (null == e) return !1;
    var t = e.find(".delgo-active");
    if (void 0 !== t) {
        var n = t.next();
        if (1 === n.length && n.hasClass("section-slider") && "SECTION" === n[0].nodeName) return n;
        var i = e.find("section.section-slider");
        return 0 < i.length && i.first()
    }
}

function showNextSection(e, t) {
    if (null == e) return !1;
    if (void 0 !== t) {
        var n = t.next();
        if (1 === n.length && n.hasClass("section-slider") && "SECTION" === n[0].nodeName) return n;
        var i = e.find("section.section-slider");
        return 0 < i.length && i.first()
    }
}

function getSliderPrev(e) {
    if (null == e) return !1;
    var t = e.find(".delgo-active");
    if (void 0 !== t) {
        var n = t.prev();
        if (1 === n.length && n.hasClass("section-slider") && "SECTION" === n[0].nodeName) return n;
        var i = e.find("section.section-slider");
        return 0 < i.length && i.last()
    }
}

function is_hero_sesion(c) {
    function e() {
        var e = delgoPlus.scaleIt(c, u, {
            position: !1,
            plus: 5500
        });
        if (1 < e + .91667) v.addClass("bg-white"), 991 < c && h.css("width", "100%");
        else {
            v.removeClass("bg-white");
            var t = c.scrollTop(),
                n = delgoPlus.scaleIt(c, f, {
                    position: !0
                }),
                i = delgoPlus.scaleIt(c, p, {
                    position: !0,
                    plus: 200
                }),
                s = delgoPlus.scaleIt(c, p, {
                    position: !0,
                    plus: 1300
                }),
                o = delgoPlus.scaleIt(c, h, {
                    position: !1,
                    plus: 2e3
                });
            TweenMax.to(f, .3, {
                scale: n + 1,
                opacity: 1 - n
            }), 991 < $(window).width() && (u.css({
                transform: "translate3d(0px,0px,0px) scale(" + (e + .91667) + ")"
            }), h.css({
                width: 100 * (o + .8) + "%"
            }));
            var a = 1;
            991 < $(window).width() && !$("body").hasClass("delgo-large-mobile") ? a = 1 - i : (p.css("transition", "all 400ms ease-out 0s"), f.css("transition", "all 400ms ease-out 0s")), TweenMax.to(p, .3, {
                scale: s + 1,
                opacity: a,
                y: t / -2
            })
        }
        if (!(c.width() < 992)) {
            var r = $("section.next-up"),
                l = $(".site-header , .header-top");
            if (void 0 !== r && 0 < r.length) {
                var d = r.offset().top - r.height();
                setTimeout(function () {
                    c.scrollTop() >= d ? r.hasClass("delgo-animate") || (r.addClass("delgo-animate"), l.css("background-color", "transparent"), delgoPlus.scrollTop(".next-up", 1500, 0)) : (l.css("background-color", ""), r.removeClass("delgo-animate"))
                }, 500)
            }
        }
    }
    var t = $("header.delgo-header-hero"),
        f = t.find(""),
        p = t.find(".header-content"),
        u = $(".content-background"),
        v = $(".page-content"),
        h = $(".content-block.block-first");
    c.on("scroll", function () {
        e(), e()
    }), e(), $('a[href*="#"]').on("click", function (e) {
        e.preventDefault()
    }), $("a.hero__down").on("click", function () {
        delgoPlus.scrollTop(".page-content", 1200, 0)
    })
}

function showuptitle() {
    $(".is_wBase").each(function () {
        var $shadmain = $("main.root .shad_main");
        var wbasetitle = new SplitText(".is_wBase span.let_char", {
            type: "chars",
            charsClass: "this_chars"
        });
        wbasetitle2 = wbasetitle.chars;
        var wbaseanim = new TimelineMax();
        wbaseanim.from($shadmain, 1, {
            autoALpha: 0,
            scale: 0.5,
            delay: .2,
            ease: Power4.easeIn,
            transformOrigin: "top bottom"
        }, "start").staggerFrom(wbasetitle2, 1, {
            scaleY: 1.5,
            y: -100,
            scaleX: 2,
            ease: Power2.easeOut,
            cycle: {
                y: [100, -100]
            },
            onComplete: function () {
                wbaseanim.kill()
            }
        }, "start+=1")
    })
}

function scrollEvent(e) {
    var t = $("body"),
        n = t.data("delgo-scroller"),
        i = $(window);
    void 0 !== n && !0 === n ? (! function (s) {
        function n(e, t, n) {
            var i = s.scrollTop() - parseInt(e * n);
            TweenLite.to(s, t, {
                scrollTo: {
                    y: i,
                    autoKill: !0
                },
                autoKill: !0,
                overwrite: 10
            })
        }
        navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i) || s.width() <= 991 ? t.addClass("delgo-mobile").addClass("delgo-large-mobile") : (s.on("keydown", function (e) {
            var t = e.keyCode ? e.keyCode : e.which;
            $("body").hasClass("nav-active") || s.width() <= 991 || (38 === t ? n(1, .1, 10) : 40 === t ? n(-1, .1, 10) : 34 === t ? n(-1, .5, 300) : 33 === t ? n(1, .5, 300) : 36 === t ? n(1, 2, s.scrollTop()) : 35 === t && n(-1, 2, $(document).height()))
        }), s.on("mousewheel DOMMouseScroll", function (e) {
            $("body").hasClass("nav-active") || s.width() <= 991 || (n(e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3, .85, 250))
        }))
    }(i), t.hasClass("delgo-mobile") || i.on("resize", function () {
        991 < i.width() ? t.hasClass("delgo-mobile") && t.removeClass("delgo-mobile") : t.addClass("delgo-mobile")
    })) : t.addClass("delgo-mobile")
}

function background() {
    $(".cover-bg, section , [data-image-src]").each(function () {
        var e = $(this).attr("data-image-src");
        void 0 !== e && !1 !== e && $(this).css("background-image", "url(" + e + ")")
    })
}

function navBar(s) {
    var n = $("body"),
        i = $(".menu-icon");
    s.on("scroll", function () {
        var e = s.scrollTop(),
            t = $(".site-header , .header-top"),
            n = $(".page-content").offset(),
            i = 70;
        void 0 !== n && (i = n.top), i < e ? (t.addClass("header-stickytop"), $(".sections").addClass("body-pt")) : (t.removeClass("header-stickytop"), $("body").css("paddingTop", 0))
    })
}

function initstagmenu() {
    var tlstag = new TimelineMax();
    tlstag.set("#menu-container .section-right .divider.vertical_link", {
        scaleX: 0,
        opacity: 0,
        yPercent: -100
    }).set("#menu-container .section-right .divider.horizontal_link", {
        scaleY: 0,
        opacity: 0,
        xPercent: -100
    }).set("#menu-container .section-right .divider.vertical_link_right", {
        scaleY: 0,
        opacity: 0,
        yPercent: -100
    }).set("#menu-container .section-left", {
        xPercent: -100
    }).set("#menu-container .section-right", {
        yPercent: -100
    }).set("#menu-container", {
        visibility: "hidden"
    })
}

function showtitleicn() {
    hovericn = !0;
    TweenMax.fromTo(".box-r-3 p#let_show_off", 1, {
        autoAlpha: 0,
        yPercent: 40,
        ease: Power2.easeOut
    }, {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power2.easeout
    })
}

function closetitleicn() {
    hovericn = !1;
    TweenMax.fromTo(".box-r-3 p#let_show_off", 1, {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power2.easeOut,
    }, {
        autoAlpha: 0,
        yPercent: 40,
        ease: Power2.easeout
    })
}

function showtitleicn2() {
    hovericn = !0;
    TweenMax.fromTo(".box-r-3 p#let_show_off2", 1, {
        autoAlpha: 0,
        yPercent: 40,
        ease: Power2.easeOut
    }, {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power2.easeout
    })
}

function closetitleicn2() {
    hovericn = !1;
    TweenMax.fromTo(".box-r-3 p#let_show_off2", 1, {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power2.easeOut,
    }, {
        autoAlpha: 0,
        yPercent: 40,
        ease: Power2.easeout
    })
}

function sectionsplit() {
    $(".split_right").each(function () {
        var $spriteT = $(".split_right .titilebrs span.let_char, .split_right .result");
        var spritres = new SplitText($spriteT, {
            type: "words",
            wordsClass: "this_chars"
        });
        var $titlebars1 = $(this).find(".box-rs-1 .titilebrs .headersml .this_chars");
        var $resultbars1 = $(this).find(".box-rs-1 .titilebrs .headerbig .this_chars");
        var $titlebars2 = $(this).find(".box-rs-2 .titilebrs .headersml .this_chars");
        var $resultbars2 = $(this).find(".box-rs-2 .titilebrs .headerbig .this_chars");
        var $titlebars3 = $(this).find(".box-rs-3 .titilebrs .headersml .this_chars");
        var $resultbars3 = $(this).find(".box-rs-3 .titilebrs .headerbig .this_chars");
        var $titlebars4 = $(this).find(".box-rs-4 .titilebrs .headersml .this_chars");
        var $resultbars4 = $(this).find(".box-rs-4 .titilebrs .headerbig .this_chars");

        function crt3() {
            TweenMax.staggerFrom([$titlebars1, $titlebars2, $titlebars3, $titlebars4], 1, {
                autoAlpha: 0,
                yPercent: 150,
                stagger: {
                    amount: 1,
                    from: "left"
                },
                ease: Back.easeOut,
                force3D: !0
            });
            TweenMax.staggerFrom([$resultbars1, $resultbars2, $resultbars3, $resultbars4], 1, {
                autoAlpha: 0,
                xPercent: -100,
                cycle: {
                    x: [100, -100]
                },
                stagger: {
                    amount: 1,
                    from: "left"
                }
            });
            TweenMax.to("#ch_gr3 .i-outputs svg", 1, {
                fill: "#FF5722",
                bezier: {
                    values: [{
                        left: '-150%',
                        height: 20
                    }, {
                        left: '0%',
                        height: 100
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to("#ch_gr1 .i-outputs svg, #ch_gr2 .i-outputs svg", 1, {
                fill: "#777b80"
            });
            TweenMax.to("#ch_gr3 b", 1, {
                color: "#FF5722"
            });
            TweenMax.to("#ch_gr1 b, #ch_gr2 b", 1, {
                color: "#777b80"
            });
            TweenMax.set("section.iconomic_sale .section-right_tokensale .box-r-1, section.iconomic_sale .section-right_tokensale .box-r-2", {
                visibility: "hidden",
                opacity: 0
            });
            TweenMax.set(".split_right", {
                visibility: "visible",
                opacity: 1
            })
        }
        $("#ch_gr3").on("click", function () {
            crt3()
        })
    });

    function initspliterright() {
        TweenMax.set(".split_right", {
            visibility: "hidden",
            opacity: 0
        })
    }
    initspliterright()
}

function ieoevents() {
    var thiscrloader = $(".chart_item_text ul.abs__ li");
    var thiscrloader2 = $(".chart_item_text ul.rltv__ li");
    var is_mobile = isMobile.any;

    function sectionleftico() {
        $("section.iconomic_sale .section-left_tokensale .box-l-2").each(function () {
            var $alldatatype = $(".box-l-2 #all_type_main span.let_char");
            var alltypedata = new SplitText($alldatatype, {
                type: "words",
                wordsClass: "data_elm"
            });
            var $icdtype = $(this).find("span.let_char#twarn_1 .data_elm");
            var $icdtype2 = $(this).find("span.let_char#twarn_2 .data_elm");
            var $icdtype3 = $(this).find("span.let_char#twarn_3 .data_elm");
            var ieoletters = new TimelineMax({
                repeatDelay: 1,
                repeat: -1,
                paused: !0
            });
            ieoletters.staggerFrom($icdtype, 2, {
                yPercent: 50,
                autoALpha: 0,
                scale: 1.3,
                cycle: {
                    y: [90, -90]
                },
                ease: Circ.easeOut
            }, 0.3).staggerTo($icdtype, 2, {
                yPercent: 0,
                autoALpha: 1,
                scale: 0,
                cycle: {
                    y: [0, -0]
                },
                ease: Circ.easeOut,
                delay: 0.6
            }, 0.3).staggerFrom($icdtype2, 2, {
                yPercent: 50,
                autoALpha: 0,
                scale: 1.3,
                cycle: {
                    y: [90, -90]
                },
                ease: Circ.easeOut
            }, 0.3).staggerTo($icdtype2, 2, {
                yPercent: 0,
                autoALpha: 1,
                scale: 0,
                cycle: {
                    y: [0, -0]
                },
                ease: Circ.easeOut,
                delay: 0.6
            }, 0.3).staggerFrom($icdtype3, 2, {
                opacity: 0,
                y: 45,
                force3D: !0,
                scale: 1,
                ease: Circ.easeOut
            }, 0.3).staggerTo($icdtype3, 2, {
                opacity: 1,
                y: 0,
                force3D: !0,
                scale: 0,
                color: "#ff7200",
                ease: Circ.easeOut,
                delay: 0.6
            }, 0.3);
            ieoletters.play()
        })
    }

    function crt1() {
        TweenMax.staggerFromTo(".chart_bs1 img", 1, {
            opacity: 0,
            yPercent: 100,
            ease: Circ.easeOut,
            visibility: "hidden",
            cycle: {
                rotationX: [-150, 90],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
        }, {
            opacity: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            visibility: "visible",
            cycle: {
                rotationX: [0, 0],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
            onStart: function () {
                TweenMax.set(".chart_bs2 img", {
                    autoALpha: 0,
                    visibility: "hidden"
                })
            }
        });
        TweenMax.staggerFromTo(thiscrloader, 1, {
            opacity: 0,
            yPercent: 100,
            ease: Circ.easeOut,
            visibility: "hidden",
            cycle: {
                x: [-150, 90],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
        }, {
            opacity: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            visibility: "visible",
            cycle: {
                x: [0, 0],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
            onStart: function () {
                TweenMax.set(thiscrloader2, {
                    autoALpha: 0,
                    visibility: "hidden"
                })
            }
        });
        TweenMax.to("#ch_gr1 .i-outputs svg", 1, {
            fill: "#FF5722",
            bezier: {
                values: [{
                    left: '-150%',
                    height: 20
                }, {
                    left: '0%',
                    height: 100
                }],
                curviness: 0
            },
            ease: Power2.easeOut
        });
        TweenMax.to("#ch_gr2 .i-outputs svg", 1, {
            fill: "#777b80"
        });
        TweenMax.to("#ch_gr1 b", 1, {
            color: "#FF5722"
        });
        TweenMax.to("#ch_gr2 b", 1, {
            color: "#777b80"
        });
        TweenMax.set(".section-right_tokensale .box-r-1, .section-right_tokensale .box-r-2", {
            visibility: "visible",
            opacity: 1
        });
        TweenMax.set(".split_right", {
            visibility: "hidden",
            opacity: 0
        });
        if (!is_mobile) {
            TweenMax.to(".aria_bar #ieo_bar", 3, {
                bezier: {
                    values: [{
                        left: '-100%',
                        width: 10
                    }, {
                        left: '0%',
                        width: 80
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #ps_bar, .aria_bar #tmp_bar", 3, {
                bezier: {
                    values: [{
                        left: '-50%',
                        width: 100
                    }, {
                        left: '0%',
                        width: 40
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #fndr_bar, .aria_bar #ardrp_bar", 3, {
                bezier: {
                    values: [{
                        left: '-50%',
                        width: 100
                    }, {
                        left: '0%',
                        width: 20
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #rsv_bar", 3, {
                bezier: {
                    values: [{
                        left: '-150%',
                        width: 20
                    }, {
                        left: '0%',
                        width: 200
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            })
        }
        return is_mobile
    }

    function crt2() {
        TweenMax.staggerFromTo(".chart_bs2 img", 1, {
            opacity: 0,
            yPercent: 100,
            visibility: "hidden",
            ease: Circ.easeOut,
            cycle: {
                rotationX: [-150, 90],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
        }, {
            opacity: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            visibility: "visible",
            cycle: {
                rotationX: [0, 0],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
            onStart: function () {
                TweenMax.set(".chart_bs1 img", {
                    autoALpha: 0,
                    visibility: "hidden"
                })
            }
        });
        TweenMax.staggerFromTo(thiscrloader2, 1, {
            opacity: 0,
            yPercent: 100,
            ease: Circ.easeOut,
            visibility: "hidden",
            cycle: {
                y: [-150, 90],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
        }, {
            opacity: 1,
            yPercent: 0,
            ease: Power2.easeOut,
            visibility: "visible",
            cycle: {
                y: [0, 0],
                transformOrigin: ["50% top -100", "50% bottom 100"]
            },
            onStart: function () {
                TweenMax.set(thiscrloader, {
                    autoALpha: 0,
                    visibility: "hidden"
                })
            }
        });
        TweenMax.to("#ch_gr2 .i-outputs svg", 1, {
            fill: "#FF5722",
            bezier: {
                values: [{
                    left: '-150%',
                    height: 20
                }, {
                    left: '0%',
                    height: 100
                }],
                curviness: 0
            },
            ease: Power2.easeOut
        });
        TweenMax.to("#ch_gr1 .i-outputs svg, #ch_gr3 .i-outputs svg", 1, {
            fill: "#777b80"
        });
        TweenMax.to("#ch_gr2 b", 1, {
            color: "#FF5722"
        });
        TweenMax.to("#ch_gr1 b, #ch_gr3 b", 1, {
            color: "#777b80"
        });
        TweenMax.set(".section-right_tokensale .box-r-1, .section-right_tokensale .box-r-2", {
            visibility: "visible",
            opacity: 1
        });
        TweenMax.set(".split_right", {
            visibility: "hidden",
            opacity: 0
        });
        if (!is_mobile) {
            TweenMax.to(".aria_bar #markb_bar", 3, {
                bezier: {
                    values: [{
                        left: '-100%',
                        width: 10
                    }, {
                        left: '0%',
                        width: 50
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #pltfr_bar", 3, {
                bezier: {
                    values: [{
                        left: '-50%',
                        width: 100
                    }, {
                        left: '0%',
                        width: 50
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #infrs_bar, .aria_bar #legcomp2_bar", 3, {
                bezier: {
                    values: [{
                        left: '-50%',
                        width: 100
                    }, {
                        left: '0%',
                        width: 20
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #operat_bar", 3, {
                bezier: {
                    values: [{
                        left: '-50%',
                        width: 100
                    }, {
                        left: '0%',
                        width: 80
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            });
            TweenMax.to(".aria_bar #legcomp_bar ", 3, {
                bezier: {
                    values: [{
                        left: '-20%',
                        width: 200
                    }, {
                        left: '0%',
                        width: 40
                    }],
                    curviness: 0
                },
                ease: Power2.easeOut
            })
        }
        return is_mobile
    }
    sectionleftico();
    $("#ch_gr1").on("click", function () {
        crt1()
    });
    $("#ch_gr2").on("click", function () {
        crt2()
    });

    function hoveringTOken() {



        var $thsbtntoken = $(".section-left_tokensale .menu");
        var $thsbtnbase = $("section.iconomic_sale nav ul li button");
        var a = $("#ch_gr1");
        var b = $("#ch_gr2");
        var c = $("#ch_gr3");

        $thsbtntoken.each(function (e) {

            var $lineTX = $(this).find("#ch_gr1 .parX .btn_1 .line.ltop");
            var $lineRBX = $(this).find("#ch_gr1 .parX .btn_1 .line.rbot");
            var $lineMX = $(this).find("#ch_gr1 .parX .btn_1 .line.lmid");
            var $lineRMX = $(this).find("#ch_gr1 .parX .btn_1 .line.rmid");
            // ====================================//
            var $lineTX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.ltop");
            var $lineRBX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.rbot");
            var $lineMX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.lmid");
            var $lineRMX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.rmid");
            // ==================================== //
            var $lineTX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.ltop");
            var $lineRBX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.rbot");
            var $lineMX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.lmid");
            var $lineRMX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.rmid");
            // ============================== //

            function mouentadd() {

                TweenMax.to($lineTX, .4, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX, .4, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX, .4, {
                    top: '0%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRMX, .4, {
                    bottom: '0%',
                    bezier: {
                        values: [{
                            height: 30
                        }, {
                            height: 10

                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03);
            }

            function moulvadd() {

                TweenMax.to($lineRMX, .6, {
                    bottom: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX, .6, {
                    top: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX, .6, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineTX, .6, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03);
            }
            // ================= //
            function mouentadd1() {

                TweenMax.to($lineTX1, .4, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX1, .4, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX1, .4, {
                    top: '0%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRMX1, .4, {
                    bottom: '0%',
                    bezier: {
                        values: [{
                            height: 30
                        }, {
                            height: 10

                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03);
            }

            function moulvadd1() {

                TweenMax.to($lineRMX1, .6, {
                    bottom: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX1, .6, {
                    top: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX1, .6, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineTX1, .6, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03);
            }
            // =================== //
            function mouentadd2() {

                TweenMax.to($lineTX2, .4, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX2, .4, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '0%',
                            width: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX2, .4, {
                    top: '0%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRMX2, .4, {
                    bottom: '0%',
                    bezier: {
                        values: [{
                            height: 30
                        }, {
                            height: 10

                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1.5,
                    ease: Power2.easeOut
                }, .03);
            }

            function moulvadd2() {

                TweenMax.to($lineRMX2, .6, {
                    bottom: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineMX2, .6, {
                    top: '60%',
                    bezier: {
                        values: [{
                            height: 20
                        }, {
                            height: 10
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineRBX2, .6, {
                    bezier: {
                        values: [{
                            right: '8%',
                            width: 50
                        }, {
                            right: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03)
                TweenMax.to($lineTX2, .6, {
                    bezier: {
                        values: [{
                            left: '8%',
                            width: 50
                        }, {
                            left: '15%',
                            width: 40
                        }],
                        curviness: 0
                    },
                    force3D: true,
                    scale: 1,
                    ease: Power2.easeOut
                }, .03);
            }


            // =================== //

            a.on("mouseenter", function () {
                mouentadd();
                soundManager.play('thishover');

            });
            a.on("mouseleave", function () {
                moulvadd();

            });
            // 
            b.on("mouseenter", function () {
                mouentadd1();
                soundManager.play('thishover');

            });
            b.on("mouseleave", function () {
                moulvadd1();

            });
            // 
            c.on("mouseenter", function () {
                mouentadd2();
                soundManager.play('thishover');

            });
            c.on("mouseleave", function () {
                moulvadd2();

            });

        });

    }
    hoveringTOken();

}


function resources_opn() {
    resourcesopen = !0;
    TweenMax.to("nav.menu .main_tab", 1, {
        opacity: 0,
        xPercent: -100,
        ease: Power2.easeInOut
    });
    TweenMax.staggerFromTo(".menu .main_tab_sub, #ar_left", 1, {
        xPercent: 100,
        autoAlpha: 0,
        ease: Power2.easeInOut
    }, {
        xPercent: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    })
}

function resources_cls() {
    resourcesopen = !1;
    TweenMax.to("nav.menu .main_tab", 1, {
        autoAlpha: 1,
        xPercent: 0,
        ease: Power2.easeOut
    });
    TweenMax.staggerFromTo(".menu .main_tab_sub, #ar_left", 1, {
        xPercent: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    }, {
        xPercent: 100,
        autoAlpha: 0,
        ease: Power2.easeInOut
    })
}



function hoveringTOken() {



    var $thsbtntoken = $(".section-left_tokensale .menu");
    var $thsbtnbase = $("section.iconomic_sale nav ul li button");
    var a = $("#ch_gr1");
    var b = $("#ch_gr2");
    var c = $("#ch_gr3");

    $thsbtntoken.each(function (e) {

        var $lineTX = $(this).find("#ch_gr1 .parX .btn_1 .line.ltop");
        var $lineRBX = $(this).find("#ch_gr1 .parX .btn_1 .line.rbot");
        var $lineMX = $(this).find("#ch_gr1 .parX .btn_1 .line.lmid");
        var $lineRMX = $(this).find("#ch_gr1 .parX .btn_1 .line.rmid");
        // ====================================//
        var $lineTX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.ltop");
        var $lineRBX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.rbot");
        var $lineMX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.lmid");
        var $lineRMX1 = $(this).find("#ch_gr2 .parX .btn_1 .line.rmid");
        // ==================================== //
        var $lineTX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.ltop");
        var $lineRBX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.rbot");
        var $lineMX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.lmid");
        var $lineRMX2 = $(this).find("#ch_gr3 .parX .btn_1 .line.rmid");
        // ============================== //

        function mouentadd() {

            TweenMax.to($lineTX, .4, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX, .4, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX, .4, {
                top: '0%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRMX, .4, {
                bottom: '0%',
                bezier: {
                    values: [{
                        height: 30
                    }, {
                        height: 10

                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03);
        }

        function moulvadd() {

            TweenMax.to($lineRMX, .6, {
                bottom: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX, .6, {
                top: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX, .6, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineTX, .6, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03);
        }
        // ================= //
        function mouentadd1() {

            TweenMax.to($lineTX1, .4, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX1, .4, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX1, .4, {
                top: '0%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRMX1, .4, {
                bottom: '0%',
                bezier: {
                    values: [{
                        height: 30
                    }, {
                        height: 10

                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03);
        }

        function moulvadd1() {

            TweenMax.to($lineRMX1, .6, {
                bottom: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX1, .6, {
                top: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX1, .6, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineTX1, .6, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03);
        }
        // =================== //
        function mouentadd2() {

            TweenMax.to($lineTX2, .4, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX2, .4, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '0%',
                        width: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX2, .4, {
                top: '0%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRMX2, .4, {
                bottom: '0%',
                bezier: {
                    values: [{
                        height: 30
                    }, {
                        height: 10

                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1.5,
                ease: Power2.easeOut
            }, .03);
        }

        function moulvadd2() {

            TweenMax.to($lineRMX2, .6, {
                bottom: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineMX2, .6, {
                top: '60%',
                bezier: {
                    values: [{
                        height: 20
                    }, {
                        height: 10
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineRBX2, .6, {
                bezier: {
                    values: [{
                        right: '8%',
                        width: 50
                    }, {
                        right: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03)
            TweenMax.to($lineTX2, .6, {
                bezier: {
                    values: [{
                        left: '8%',
                        width: 50
                    }, {
                        left: '15%',
                        width: 40
                    }],
                    curviness: 0
                },
                force3D: true,
                scale: 1,
                ease: Power2.easeOut
            }, .03);
        }


        // =================== //

        a.on("mouseenter", function () {
            mouentadd();
            soundManager.play('thishover');

        });
        a.on("mouseleave", function () {
            moulvadd();

        });
        // 
        b.on("mouseenter", function () {
            mouentadd1();
            soundManager.play('thishover');

        });
        b.on("mouseleave", function () {
            moulvadd1();

        });
        // 
        c.on("mouseenter", function () {
            mouentadd2();
            soundManager.play('thishover');

        });
        c.on("mouseleave", function () {
            moulvadd2();

        });

    });

}

function PlayVideo(e, t) {
    var n = e.find(".delgo-video");
    e.find("div.cover-bg");
    0 < n.length && (!0 === t ? n[0].pause() : n[0].play())
}





function doreback() {
    var e = $(window);
    delgo_slide_action(e);
    letOpentheDelgo();
    is_hero_sesion(e);
    toggleButtonMap();
    delgoPlus.embedVideo(".play-button");
    ajaxLoad(!0);
    mouseCirMove(!0);
    isStop(e);
    background();
    eventscrollmagic(e);
    isStop(e);
    sectionsplit(e);
    ieoevents(e);
    atchmentvector(!0);
    susvec3(e);
    setupSound();
    initstagmenu(e);


}(function (e) {
    "use strict";
    var t = jQuery(window);
    LoadingPage();
    is_hero_sesion(t);
    delgo_slide_action(t);
    toggleButtonMap();
    mouseCirMove();
    ajaxLoad(!1);
    effectBackForward();
    delgoPlus.embedVideo(".play-button");
    togleclassmenu(t);
    isStop(t);
    navBar(t);
    background();
    eventscrollmagic(t);
    isStop(t);
    sectionsplit(t);
    ieoevents(t);
    atchmentvector(!1);
    susvec3(t);
    setupSound();
    initstagmenu(t);


})();