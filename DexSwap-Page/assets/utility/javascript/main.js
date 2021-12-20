// dont touch: rada rudet ieu slna//
function indexInParent(a) {
    for (var b = a.parentNode.childNodes, c = 0, d = 0; d < b.length; d++) {
        if (b[d] == a) return c;
        1 == b[d].nodeType && c++
    }
    return -1
}

function eq(a) {
    return 0 <= a && a < this.length ? this[a] : -1
}

function preventDefault(a) {
    (a = a || window.event).preventDefault && a.preventDefault(), a.returnValue = !1
}

function preventDefaultForScrollKeys(a) {
    if (keys[a.keyCode]) return preventDefault(a), !1
}

function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1),
        window.onwheel = preventDefault,
        window.onmousewheel = document.onmousewheel = preventDefault,
        window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1),
        window.onmousewheel = document.onmousewheel = null,
        window.onwheel = null, window.ontouchmove = null,
        document.onkeydown = null
}

function triggerResize() {
    var a = document.createEvent("HTMLEvents");
    a.initEvent("resize", !0, !1), window.dispatchEvent(a)
}

function showDynamicLoad() {
    var a = document.getElementById("shadow_loader").querySelector(".progress");
    TweenMax.to(a, .5, {
        width: "100%",
        ease: Expo.easeInOut
    })
}

function runDynamicLoad(b) {
    function c() {
        var a = 100 / i * (g += 1) << 0;
        f.style.width = a + "%", g === i && setTimeout(function () {
            d()
        }, 200)
    }

    function d() {
        document.getElementById("main-logo"), document.getElementById("menu-overlay"), document.getElementById("logo-wrap"), document.getElementById("logo-box"), document.getElementById("delgo_uiles"), document.getElementById("base_menu"), document.getElementById("delgo_NAV");
        var a = document.querySelector(".barba-container");
        setTimeout(function () {
            hideDynamicLoad(), init(), triggerResize(), headerAnimate(), TweenMax.to(a, 1, {
                autoautoAlpha: 1
            })
        }, 700), setTimeout(function () {
            triggerResize()
        }, 2e3)
    }
    var f = document.getElementById("shadow_loader").querySelector(".bar"),
        e = b.querySelectorAll("img"),
        g = 0,
        i = e.length;
    0 == i && setTimeout(function () {
        d()
    }, 100);
    for (var j, k = 0; k < i; k++) j = new Image, j.onload = c, j.onerror = c, j.src = e[k].src
}

function hideDynamicLoad() {
    var a = document.getElementById("shadow_loader").querySelector(".progress");
    setTimeout(function () {
        TweenMax.set(a, {
            css: {
                right: "0",
                left: "auto"
            }
        }), TweenMax.to(a, .5, {
            autoautoAlpha: 1,
            width: "0",
            ease: Expo.easeInOut,
            onComplete: void setTimeout(function () {
                TweenMax.set(a, {
                    css: {
                        left: "0",
                        right: "auto"
                    }
                }), triggerResize()
            }, 1e3)
        })
    }, 500)
}

function headerAnimate() {
    var a = document.getElementById("section-header");
    if (a) {
        if (a.classList.contains("active")) return;
        a.classList.add("active"), a.querySelectorAll(".q_split_wrap"), a.querySelectorAll(".rev_clip");
        var b = a.querySelectorAll(".line"),
            c = a.querySelector(".headerstart-cover"),
            d = document.querySelectorAll(".rev_item_head");
        window.scroll(0, 0), d && (TweenMax.set(d, {
            autoAlpha: 0
        }), q_animate(d, "stagTop", .7)), b && TweenMax.to(b, 1.8, {
            height: 240,
            delay: .3,
            ease: Expo.easeInOut
        }), c && TweenMax.to(c, 1, {
            width: 0,
            delay: .3,
            ease: Expo.easeInOut
        })
    }
}

function init() {
    var b = document.querySelectorAll(".q_magnet"),
        c = document.getElementById("q_slide"),
        d = document.querySelectorAll(".reveal"),
        e = document.getElementById("logo-wrap"),
        f = document.getElementById("logo-box"),
        g = (document.getElementById("footer"), document.getElementById("head")),
        i = document.getElementById("year_copy");
    if ((qReveal(d, e, f, g), c && qSlide(c), 0 < b.length && qMagnet(b), g.classList.remove("hide"), window.scroll(0, 0), qCursor(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? document.body.classList.add("mobile") : ((document.body.classList.remove("horizontal-scroll"), document.body.classList.add("desktop"), document.getElementsByClassName("q_smooth").length) && new Parallax({
                extends: !0,
                touchMultiplier: 1.8,
                forceVS: !0,
                preload: !0,
                native: !0,
                section: document.querySelector(".q_smooth"),
                divs: document.querySelectorAll(".vs-div")
            })
            .init(),
            document.getElementsByClassName("q_horizontal").length && (document.body.classList.add("horizontal-scroll"), new Horizontal({
                    extends: !0,
                    preload: !1,
                    native: !1,
                    direction: "horizontal",
                    section: document.querySelector(".q_horizontal"),
                    divs: document.querySelectorAll(".vsh")
                })
                .init())), i) {
        var a = new Date;
        i.innerHTML = a.getFullYear()
    }
}

function q_animate(a, b, c) {

    if ("stagTop" === b && TweenMax.staggerFromTo(a, 1, {
            autoAlpha: 0,
            y: 130
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: c
        }, .15), "fadeOut" === b && TweenMax.to(a, .3, {
            autoAlpha: 0,
            ease: Power1.easeOut,
            delay: c
        }, .15), "stagLeft" === b && TweenMax.staggerFromTo(a, 1.5, {
            autoAlpha: 0,
            x: 200
        }, {
            autoAlpha: 1,
            x: 0,
            ease: Power4.easeOut,
            delay: c
        }, .1), "stagRight" === b && TweenMax.staggerFromTo(a, 1.5, {
            autoAlpha: 0,
            x: -200
        }, {
            autoAlpha: 1,
            x: 0,
            ease: Power4.easeOut,
            delay: c
        }, .1), "slideTop" === b && TweenMax.fromTo(a, 1.5, {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: c
        }), "slideLeft" === b) TweenMax.fromTo(a, 1.5, {
        autoAlpha: 0,
        xPercent: -100
    }, {
        autoAlpha: 1,
        xPercent: 0,
        ease: Expo.easeOut,
        delay: c
    });
    else if ("sideLeft" === b) TweenMax.staggerFromTo(a, 1.5, {
        autoAlpha: 0,
        x: 120
    }, {
        autoAlpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: c
    }, .2);
    else if ("clientLeft" === b) TweenMax.staggerFromTo(a, 1.5, {
        autoAlpha: 0,
        x: 180
    }, {
        autoAlpha: .6,
        x: 0,
        ease: Expo.easeOut,
        delay: c
    }, .05);
    else if ("sideRight" === b) TweenMax.staggerFromTo(a, 1.5, {
        autoAlpha: 0,
        x: -120
    }, {
        autoAlpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: c
    }, .2);
    else if ("clipRight" === b) TweenMax.staggerTo(a, 1, {
        clipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut,
        delay: c
    }, .1);
    else if ("splitLeft" === b) {
        var d = a.textContent.split("");
        a.innerHTML = "";
        for (var e = 0; e < d.length; e++) a.innerHTML += "<span>" + d[e] + "</span>";
        var f = a.querySelectorAll("span");
        TweenMax.set(f, {
            x: 110,
            autoAlpha: 0
        }), setTimeout(function () {
            TweenMax.staggerTo(f, 1.5, {
                x: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, .03)
        }, c)
    } else if ("splitRight" === b) {
        for (d = a.textContent.split(""), a.innerHTML = "", e = 0; e < d.length; e++) a.innerHTML += "<span>" + d[e] + "</span>";
        f = a.querySelectorAll("span"), TweenMax.set(f, {
            x: -110,
            autoAlpha: 0
        }), setTimeout(function () {
            TweenMax.staggerTo(f, 1.5, {
                x: 0,
                autoAlpha: 1,
                ease: Power4.easeInOut
            }, -.02)
        }, c)
    }
}

function qCursor() {
    function b() {
        g.classList.add("hover"), e.classList.add("hover")
    }

    function c() {
        g.classList.remove("hover"), e.classList.remove("hover")
    }

    function d(a) {
        a.addEventListener("mouseover", b), a.addEventListener("mouseout", c)
    }
    window, document.getElementsByTagName("body")[0].addEventListener("mousemove", function (a) {
        f.style.left = a.clientX + "px", f.style.top = a.clientY + "px", g.style.left = a.clientX + "px", g.style.top = a.clientY + "px", e.style.left = a.clientX + "px", e.style.top = a.clientY + "px"
    });
    var f = document.getElementById("cursor"),
        g = document.getElementById("cursor2"),
        e = document.getElementById("cursor3");
    c();
    for (var i = document.querySelectorAll(".hover-target"), j = i.length - 1; 0 <= j; j--) d(i[j])
}

function animateText() {
    function a(a) {
        function b(a, b) {
            a.style.transitionDelay = .1 * b + "s"
        }
        var c = a.textContent.split("");
        for (a.innerHTML = "", w = 0; w < c.length; w++) a.innerHTML += "<span>" + c[w] + "</span>";
        chars = a.querySelectorAll("span");
        for (var d = chars.length - 1; 0 <= d; d--) b(chars[d], d)
    }
    for (var b = document.getElementById("lettr").querySelectorAll("font"), c = b.length - 1; 0 <= c; c--) a(b[c])
}

function qMagnet(a) {
    if (540 < window.innerWidth)
        for (var b = a.length - 1; 0 <= b; b--) {
            var c = a[b],
                d = c.getAttribute("friction") || .3;
            c.addEventListener("mouseover", function () {
                this.classList.add("hovered")
            }), c.addEventListener("mouseout", function () {
                this.classList.remove("hovered"), this.style.transform = "translate(0px, 0px)"
            }), c.addEventListener("mousemove", function (b) {
                const c = this.getBoundingClientRect(),
                    e = c.left + c.width / 2,
                    f = c.top + c.height / 2,
                    g = -1 * (Math.floor(e - b.clientX) * d),
                    i = -1 * (Math.floor(f - b.clientY) * d);
                TweenMax.to(this, 0, {
                    x: g,
                    y: i
                })
            })
        }
}

function animateReveal(b) {

    var f = b[0].target,
        e = f.querySelectorAll(".rev_item");
    0 < e.length && (TweenMax.set(e, {}),
        f.classList.contains("q_active") ? q_animate(e, "stagTop", .3) : TweenMax.to(e, .5, {
            autoAlpha: 0
        }));
    var g = f.querySelectorAll(".rev_line");
    0 < g.length && (f.classList.contains("q_active") ? TweenMax.to(g[0], 1.2, {
        x: 0,
        width: 72,
        ease: Expo.easeInOut
    }) : TweenMax.to(g[0], 1.2, {
        x: 100,
        width: 0,
        ease: Expo.easeInOut
    }));
    var i = f.querySelectorAll(".rev_cover");
    0 < i.length && (f.classList.contains("q_active") ? TweenMax.to(i[0], .8, {
        width: 0,
        ease: Expo.easeInOut
    }) : TweenMax.to(i[0], .8, {
        width: "100%",
        ease: Expo.easeInOut
    }));
    var j = f.querySelectorAll(".rev_cover2");
    0 < j.length && (f.classList.contains("q_active") ? TweenMax.to(j[0], .8, {
        width: 0,
        ease: Expo.easeInOut,
        delay: .3
    }) : TweenMax.to(j[0], .8, {
        width: "100%",
        ease: Expo.easeInOut
    }));
    var k = f.querySelectorAll(".rev_scale");
    0 < k.length && (TweenMax.set(k, {
        scaleY: 1.8,
        y: 100,
        autoAlpha: 0
    }), f.classList.contains("q_active") ? TweenMax.to(k[0], 1, {
        scaleY: 1,
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut,
        delay: .5
    }) : TweenMax.to(k[0], 1, {
        scaleY: 1.8,
        y: 50,
        autoAlpha: 0,
        ease: Power2.easeIn
    }));
    var a = f.querySelectorAll(".rev_item_delay");
    0 < a.length && (f.classList.contains("q_active") ? q_animate(a, "stagTop", .5) : TweenMax.to(a, .5, {
        autoAlpha: 0
    }));
    var m = f.querySelectorAll(".rev_clip");
    if (0 < m.length) {
        var l = m[0].clientWidth;
        f.classList.contains("q_active") ? m[0].classList.contains("delay") ? TweenMax.fromTo(m, 1.2, {
            x: -100,
            autoAlpha: 1,
            clipPath: "inset(0px " + l + "px 0px 0px)",
            webkitClipPath: "inset(0px " + l + "px 0px 0px)"
        }, {
            x: 0,
            autoAlpha: 1,
            clipPath: "inset(0px 0px 0px 0px)",
            webkitClipPath: "inset(0px 0px 0px 0px)",
            ease: Expo.easeInOut,
            delay: .15
        }) : TweenMax.fromTo(m, 1.8, {
            x: -100,
            autoAlpha: 1,
            clipPath: "inset(0px " + l + "px 0px 0px)",
            webkitClipPath: "inset(0px " + l + "px 0px 0px)"
        }, {
            x: 0,
            autoAlpha: 1,
            clipPath: "inset(0px 0px 0px 0px)",
            webkitClipPath: "inset(0px 0px 0px 0px)",
            ease: Expo.easeInOut
        }) : TweenMax.to(m, 1, {
            autoAlpha: 0,
            x: -50,
            ease: Power4.easeInOut
        })
    }
    var n = f.querySelectorAll(".rev_letter");
    if (0 < n.length) {
        var o = n[0];
        f.classList.contains("q_active") && q_animate(o, "splitLeft", .6)
    }
    var c = f.querySelectorAll(".rev_client");
    0 < c.length && f.classList.contains("q_active") && q_animate(c, "clientLeft", .6)
}

function qReveal(b, c, d, e, f) {

    var g = document.querySelectorAll(".rev_item");
    if (TweenMax.set(g, {
            autoAlpha: 0
        }), 0 < b.length) {
        for (var i, j = b.length - 1; 0 <= j; j--) i = b[j],
            i.querySelectorAll(".rev_item"),
            new MutationObserver(function (a) {
                animateReveal(a)
            }).observe(i, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !1,
                characterData: !1
            });
        window.addEventListener("scroll", function () {
            qRevealScroll(b, c, d, e, f)
        })
    }
}

function qRevealScroll(b) {
    function c(a, b) {
        var c = a.offsetTop - window.innerHeight / 1.2 + 100;
        if (a.clientHeight, a.querySelectorAll(".rev_item"), 10 > b) {
            if (!a.classList.contains("q_active")) return;
            a.classList.remove("q_active")
        } else if (b > c) {
            if (a.classList.contains("q_active")) return;
            a.classList.add("q_active")
        }
    }
    for (var a = window.scrollY, d = b.length - 1; 0 <= d; d--) c(b[d], a)
}

function qSlide(b) {
    function g() {
        var a = document.createEvent("HTMLEvents");
        a.initEvent("resize", !0, !1), window.dispatchEvent(a)
    }

    function j(b, c, d) {
        var e = b.querySelector(".q_current"),
            f = null;
        c ? (f = e.previousElementSibling) || (f = k[k.length - 1]) : (f = e.nextElementSibling) || (f = k[0]), h(b, indexInParent(f), d), g()
    }
    b.classList.add("q_slide");
    var k = b.querySelectorAll(".slide"),
        e = b.querySelector(".pagination"),
        i = document.getElementById("bar"),
        l = 1;
    if (null != b.getAttribute("parallax") && (l = b.getAttribute("parallax") || .25), null != b.getAttribute("opacity")) b.getAttribute("opacity") || .6;
    for (var n = k.length - 1; 0 <= n; n--)(q = k[n]).classList.add("is-loaded");
    var o = b.querySelector(".arrows");
    if (o) {
        var d = o.querySelector(".next"),
            f = o.querySelector(".prev");
        d.addEventListener("click", function () {
            j(b, !1)
        }), f.addEventListener("click", function () {
            j(b, !0)
        })
    }
    if (e) {
        var p = e.querySelectorAll(".item");
        for (n = p.length - 1; 0 <= n; n--) p[n].addEventListener("click", function (a) {
            h(b, indexInParent(a.target)), g()
        })
    }
    if (function () {
            if (null != b.getAttribute("autoplay")) {
                var a = b.getAttribute("autoplay") || 4e3;
                i && function () {
                    var a = b.getAttribute("autoplay") || 4e3;
                    TweenMax.fromTo(i, a / 1e3, {
                        height: "0%"
                    }, {
                        height: "100%"
                    })
                }(), setTimeout(function () {
                    j(b, !1, !0)
                }, a)
            }
        }(), null != b.getAttribute("mousefollow") && 540 < window.innerWidth) {
        for (n = k.length - 1; 0 <= n; n--) {
            var q = k[n].querySelector(".image-wrapper");
            TweenMax.set(q, {
                scale: 1.1
            })
        }
        b.onmousemove = function (a) {
            ! function (c) {
                var d = Math.max(-100, Math.min(100, b.clientWidth / 2 - c.clientX)),
                    e = Math.max(-100, Math.min(100, b.clientHeight / 2 - c.clientY));
                x = 25 * d / 100, y = 15 * e / 100;
                for (var f, g = k.length - 1; 0 <= g; g--) f = k[g].querySelector(".image-wrapper"), TweenMax.to(f, 3, {
                    autoautoAlpha: 1,
                    x: x,
                    y: y,
                    ease: Power1.easeOut
                })
            }(a)
        }
    }
}


Barba.Dispatcher.on("initStateChange", function () {
        "function" == typeof ga && ga("send", "pageview", location.pathname)
    }),
    Barba.Dispatcher.on("newPageReady", function (a, b, c) {
        runDynamicLoad(c)
    }),
    Barba.Dispatcher.on("transitionCompleted", function () {

    }),
    document.addEventListener("DOMContentLoaded", () => {
        Barba.Pjax.start()
    }),
    document.addEventListener("DOMContentLoaded", () => {

        function b() {
            (f += 1) === g && setTimeout(function () {
                c()
            }, 100)
        }

        function c() {
            enableScroll(),
                TweenMax.to(d, 1.5, {
                    opacity: 0,
                    ease: Expo.easeInOut,
                    delay: 0
                }),
                setTimeout(function () {
                    d.style.display = "none"
                }, 2200),
                setTimeout(function () {
                    triggerResize()
                }, 10),
                setTimeout(function () {
                    triggerResize()
                }, 1200)
        }
        var a, d = (a = "overlay", document.getElementById(a)),
            e = document.images,
            f = 0,
            g = e.length;
        disableScroll(), 0 == g && setTimeout(function () {
            c()
        }, 400);
        for (var i, j = 0; j < g; j++) i = new Image, i.onload = b, i.onerror = b, i.src = e[j].src
    }, !1);
var HideShowTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.finish.bind(this))
    },
    fadeOut: function () {},
    finish: function () {
        this.newContainer.style.opacity = 0, this.done()
    }
});
Barba.Pjax.getTransition = function () {
    return HideShowTransition
};
var $Dnav = $("#delgo_NAV"),
    $Dnava = $(".menu"),
    $barTop = $("#bar-top"),
    $barMidL = $("#bar-mid-l"),
    $barMidR = $("#bar-mid-r"),
    $barBottom = $("#bar-bottom"),
    $circular = $("#circle"),
    $rowsub1 = $("span.row_blck span.sub_bg1"),
    $rowsub2 = $("span.row_blck span.sub_bg2"),
    $copyright = $("#delgo_NAV .menu .copyrighted a span"),
    $bgnav = $("#nav_bg_1"),
    $bgnav_ = $("#nav_bg_2"),
    $isAlert = $(".menu .is_alert"),
    $orch7 = $("span.label"),
    $menuIcon = $("#base_menu svg"),
    $mIcon = $("#menu-icon"),
    $row_bKa = $("#delgo_NAV .menu ul li a"),
    $rowether1 = $("span.block_row span.sub_bg1"),
    $rowether2 = $("span.block_row span.sub_bg2"),
    $thistopline = $(".thistop_line"),
    $thisbotline = $(".thisbot_line"),
    $thismenuUL = $(".menu ul li a.newtab"),
    tlsvg = new TimelineLite({
        paused: !0
    });
tlsvg.set($Dnav, {
    zIndex: 15,
    position: "fixed"
}).set($Dnava, {
    visibility: "visible"
}).set($menuIcon, {
    zIndex: 15
}).set($row_bKa, {
    visibility: "visible"
}).set($barMidL, {
    xPercent: -55
}).set($barMidR, {
    xPercent: 55
}).from($bgnav, .8, {
    y: -window.innerHeight,
    force3D: !0,
    ease: Cubic.easeInOut
}, .1).from($bgnav_, 1, {
    y: -window.innerHeight,
    force3D: !0,
    ease: Cubic.easeInOut
}, .2).from($copyright, .8, {
    scale: 1,
    yPercent: 121,
    force3D: !0,
    opacity: 0,
    ease: Cubic.easeInOut
}, .5).to($copyright, .8, {
    opacity: 1
}, .5).from($orch7, 1, {
    x: "100%",
    force3D: !0,
    ease: Cubic.easeOut
}, .5).to($barTop, .2, {
    y: 5 
}).to($barBottom, .2, {
    y: -5
}, 0).to($barTop, .3, {
    rotation: 45,
    y: 0,
    x: 10,
    transformOrigin: "left top"
}, .15).to($barBottom, .3, {
    rotation: -45,
    y: 0,
    x: 10,
    transformOrigin: "left bottom"
}, .15).to($barMidL, .4, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left"
}, 0).to($barMidR, .4, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "right"
}, 0).to($mIcon, .8, {
    rotation: 90
}, .1).fromTo($circular, .6, {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%",
    ease: Bounce.easeOut
}, {
    scale: 1,
    opacity: 1,
    ease: Elastic.easeInOut
}, .5).to([$barTop, $barBottom], .5, {
    scale: .6,
    transformOrigin: "50% 50%",
    ease: Power4.easeOut
}, .5).fromTo($thistopline, .8, {
    scaleY: 0,
    ease: Cubic.easeOut
}, {
    scaleY: 2,
    ease: Cubic.easIneOut
}, .5).fromTo($thisbotline, .8, {
    scaleY: 0,
    ease: Cubic.easeOut
}, {
    scaleY: 2,
    ease: Cubic.easIneOut
}, .5).fromTo($thismenuUL, .5, {
    borderLeft: "55px solid hsl(27, 96%, 51%)",
    ease: Cubic.easeOut
}, {
    borderLeft: "4px solid hsl(27, 96%, 51%)",
    ease: Cubic.easeOut
}, .1, "-=2").fromTo($rowsub1, 1, {
    x: "-100%",
    autoautoAlpha: 0
}, {
    bezier: {
        curviness: 0,
        values: [{
            x: "10%"
        }, {
            x: "100%"
        }]
    },
    ease: Cubic.easeOut,
    autoautoAlpha: 1
}, .2, "-=2").reverse(!0).fromTo($rowsub2, 1, {
    x: "-100%",
    autoautoAlpha: 0
}, {
    bezier: {
        curviness: 0,
        values: [{
            x: "10%"
        }, {
            x: "100%"
        }]
    },
    ease: Cubic.easeOut,
    autoautoAlpha: 1
}, .2, "-=2").reverse(!0), $("#base_menu").on("click", function () {
    $(this).hasClass("toggled") ? tlsvg.reverse() : tlsvg.play(), $(this).toggleClass("toggled"), window.addEventListener("scroll", hidebase)
}), $row_bKa.on("mouseenter", function () {
    TweenMax.to(this, .5, {
        borderLeft: "15px solid #fdfdfd",
        ease: Cubic.easeOut
    })
}), $row_bKa.on("mouseleave", function () {
    TweenMax.to(this, .5, {
        borderLeft: "4px solid hsl(27, 96%, 51%)",
        ease: Cubic.easeOut
    })
});

function hidebase() {
    $("#base_menu").removeClass("toggled"), tlsvg.reverse()
}
// =============== //

var $point = $('.mouse-icon .point');
var $moline = $('.mouse-line>span');
var iconTimeline = new TimelineMax();
var lineTimeline = new TimelineMax();
mouseffect();

function mouseffect() {
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
    iconTimeline.play();
    lineTimeline.play();
}
function dotoTop() {
    var i = $("a#scrollTop");
    i.on("click", function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1200);
    })
}dotoTop();