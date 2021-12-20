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
                                    wbaseanim.play();
                                    afterends()
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
        TweenLite.killTweensOf(".mouse-icon .point, .hold_line, .hold_line, .mouse-line span, particle1, particle2");
        TweenMax.set(".count_holder, #delgo_uiles .uiles .mid_uiles, .lang-container, #thisvert", {
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
        }, .1, "start+=1").staggerFromTo(".morph-1, .morph-2, .morph-3, .rsc_togleright svg, .icon-wrap, .uiles.left_uiles, .uiles.right_uiles, .count_holder, #intro-screen", 1, {
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