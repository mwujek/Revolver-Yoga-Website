window.onunload = function() {};
$(document).ready(function() {
    $(".wrapper").css("display", "none");
    $(".wrapper").fadeIn(666);
    $("a:not(.lock, .email, .phone, .back, .next)").click(function(e) {
        redirect = $(this).attr("href");
        e.preventDefault();
        $(".wrapper").fadeOut(666, function() {
            document.location.href = redirect
        })
    });
    $(".email, .phone").click(function(e) {
        window.location.href = $(this).attr("href")
    })
});
$(document).ready(function() {
    $(".project-wrapper").css("display", "none");
    $(".project-wrapper").fadeIn(666);
    $("a").click(function(e) {
        redirect = $(this).attr("href");
        e.preventDefault();
        $(".project-wrapper").fadeOut(666, function() {
            document.location.href = redirect
        })
    })
});
$(document).ready(function() {
    $(".header-nav a").click(function(e) {
        $(".active").removeClass("active")
    });
    $(".header-nav a").click(function(e) {
        $(this).addClass("active")
    })
});
$(document).ready(function() {
    $(".cv-details").click(function() {
        $(".cv-details-summary").toggleClass("visible");
        $(".arrow").toggleClass("turn")
    })
});
String.prototype.rightChars = function(e) {
    if (e <= 0) {
        return ""
    } else if (e > this.length) {
        return this
    } else {
        return this.substring(this.length, this.length - e)
    }
};
(function(e) {
    var t = {
            highlightSpeed: 20,
            typeSpeed: 100,
            clearDelay: 500,
            typeDelay: 200,
            clearOnHighlight: true,
            typerDataAttr: "data-typer-targets",
            typerInterval: 2e3,
            highlightColor: "#3295FF",
            textColor: null,
            initialDelay: 1e3
        },
        n, r, i, s, o, u, a, f, l, c, h, p, d;
    o = function(t, n) {
        if (t === "rgba(0, 0, 0, 0)") {
            t = "rgb(255, 255, 255)"
        }
        return e("<span></span>").css("color", t).css("background-color", n)
    };
    l = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    };
    f = function(e) {
        e.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"])
    };
    s = function(e) {
        var t = e.data("text"),
            n = e.data("oldLeft"),
            r = e.data("oldRight");
        if (!t || t.length === 0) {
            f(e);
            return
        }
        e.text(n + t.charAt(0) + r).data({
            oldLeft: n + t.charAt(0),
            text: t.substring(1)
        });
        setTimeout(function() {
            s(e)
        }, p())
    };
    r = function(e) {
        e.find("span").remove();
        setTimeout(function() {
            s(e)
        }, a())
    };
    n = function(e) {
        var t = e.data("highlightPosition"),
            i, s, a;
        if (!l(t)) {
            t = e.data("rightStop") + 1
        }
        if (t <= e.data("leftStop")) {
            setTimeout(function() {
                r(e)
            }, u());
            return
        }
        i = e.text().substring(0, t - 1);
        s = e.text().substring(t - 1, e.data("rightStop") + 1);
        a = e.text().substring(e.data("rightStop") + 1);
        e.html(i).append(o(e.data("backgroundColor"), e.data("primaryColor")).append(s)).append(a);
        e.data("highlightPosition", t - 1);
        setTimeout(function() {
            return n(e)
        }, h())
    };
    c = function(t) {
        var n;
        if (t.data("typing")) {
            return
        }
        try {
            n = JSON.parse(t.attr(e.typer.options.typerDataAttr)).targets
        } catch (r) {}
        if (typeof n === "undefined") {
            n = e.map(t.attr(e.typer.options.typerDataAttr).split(","), function(t) {
                return e.trim(t)
            })
        }
        t.typeTo(n[Math.floor(Math.random() * n.length)])
    };
    e.typer = function() {
        return {
            options: t
        }
    }();
    e.extend(e.typer, {
        options: t
    });
    e.fn.typer = function() {
        var t = e(this);
        return t.each(function() {
            var t = e(this);
            if (typeof t.attr(e.typer.options.typerDataAttr) === "undefined") {
                return
            }
            c(t);
            setInterval(function() {
                c(t)
            }, d())
        })
    };
    e.fn.typeTo = function(t) {
        var r = e(this),
            i = r.text(),
            s = 0,
            o = 0;
        if (i === t) {
            console.log("Our strings our equal, nothing to type");
            return r
        }
        if (i !== r.html()) {
            console.error("Typer does not work on elements with child elements.");
            return r
        }
        r.data("typing", true);
        while (i.charAt(s) === t.charAt(s)) {
            s++
        }
        while (i.rightChars(o) === t.rightChars(o)) {
            o++
        }
        t = t.substring(s, t.length - o + 1);
        r.data({
            oldLeft: i.substring(0, s),
            oldRight: i.rightChars(o - 1),
            leftStop: s,
            rightStop: i.length - o,
            primaryColor: e.typer.options.highlightColor || r.css("color"),
            backgroundColor: e.typer.options.textColor || r.css("background-color"),
            text: t
        });
        var u = function() {
            n(r);
            return r
        };
        window.setTimeout(u, e.typer.options.initialDelay)
    };
    h = function() {
        return e.typer.options.highlightSpeed
    };
    p = function() {
        return e.typer.options.typeSpeed
    }, u = function() {
        return e.typer.options.clearDelay
    }, a = function() {
        return e.typer.options.typeDelay
    };
    d = function() {
        return e.typer.options.typerInterval
    }
})(jQuery);
$(document).ready(function() {
    $(".lock-overlay").css("display", "none");
    $(".lock").click(function(e) {
        $(".lock-overlay").fadeIn(666);
        $(".main").addClass("shrink")
    });
    $(".lock-overlay").click(function(e) {
        $(".lock-overlay").fadeOut(666);
        $(".main").removeClass("shrink")
    })
});
$(document).ready(function() {
    $(".filter-all").click(function() {
        $('a[class^="item-"]').css("opacity", "1")
    });
    $('div[class^="filter-"]:not(.filter-all)').click(function() {
        var e = $(this).attr("class").replace("filter-", "");
        $('a[class^="item-"]').css("opacity", "0.25");
        $(".item-" + e).css("opacity", "1")
    });
    $('div[class^="filter-"]').click(function() {
        $('div[class^="filter-"]').css("background", "none").css("color", "#333").css("opacity", "0.4");
        $(this).css("background", "#333").css("color", "#ddd").css("opacity", "1")
    });
    $('.creepy, a[class^="item-"]:not(.lock)').click(function() {
        $("body").addClass("dark");
        $('a[class^="item-"], h1, h3, .heart').css("opacity", "0");
        $("header").addClass("project-header");
        $("body").addClass("project-bg")
    })
});
$(document).ready(function() {
    $(".close-colophon").css("display", "none");
    $(".heart").click(function(e) {
        $(".close-colophon").fadeIn(666);
        $("colophon").addClass("grow")
    });
    $(".close-colophon").hover(function() {
        $(this).addClass("close-colophon-hover")
    }, function() {
        $(this).removeClass("close-colophon-hover")
    });
    $(".close-colophon").click(function(e) {
        $(this).fadeOut(666);
        $("colophon").removeClass("grow")
    })
})