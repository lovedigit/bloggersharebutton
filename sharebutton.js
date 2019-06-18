$(document).ready(function() {
    $(".plugin-class").each(function() {
        var t = $(this).find(".plugin-share").attr("url"),
            n = $(this).find(".plugin-share").attr("ttdt"),
            i = $(".plugin-class").index(this),
            e = {
                method: "pos.plusones.get",
                id: "https://digitfreak.com/",
                params: {
                    nolog: !0,
                    id: t,
                    source: "widget",
                    userId: "@viewer",
                    groupId: "@self"
                },
                jsonrpc: "2.0",
                key: "p",
                apiVersion: "v1"
            },
            o = 0,
            s = 0;
        $.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?", {
            url: t
        }).done(function(n) {
            s = n.count, void 0 == s && (s = 0), $.getJSON("http://graph.facebook.com/", {
                id: t
            }).done(function(n) {
                var e = n.shares;
                void 0 == e && (e = 0), $.getJSON("http://www.linkedin.com/countserv/count/share?callback=?", {
                    url: t
                }).done(function(n) {
                    var r = n.count;
                    void 0 == r && (r = 0), $.getJSON("http://api.pinterest.com/v1/urls/count.json?callback=?", {
                        url: t
                    }).done(function(t) {
                        var n = t.count;
                        void 0 == n && (n = 0), o = o + r + e + s + n;
                        var l = parseInt($(".plugin-class:eq(" + i + ")").find("p").html());
                        o += l, $(".plugin-class:eq(" + i + ")").find("p").text(o)
                    })
                })
            })
        }), $.ajax({
            type: "POST",
            url: "https://clients6.google.com/rpc",
            processData: !0,
            contentType: "application/json",
            data: JSON.stringify(e),
            success: function(t) {
                var n = t.result.metadata.globalCounts.count;
                void 0 == n && (n = 0), o += n;
                var e = parseInt($(".plugin-class:eq(" + i + ")").find("p").html());
                o += e, $(".plugin-class:eq(" + i + ")").find("p").text(o)
            }
        }), $(this).find(".fb-share-btn").on("click", function(i) {
            return i.preventDefault(), window.open("https://www.facebook.com/sharer/sharer.php?u=" + t + "&t=" + n, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"), !1
        }), $(this).find(".tw-share-btn").on("click", function(i) {
            i.preventDefault(), window.open("http://twitter.com/share?url=" + t + "&text=" + n + "&", "twitterwindow", "height=450, width=550, top=" + ($(window).height() / 2 - 225) + ", left=" + $(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".gg-btn").on("click", function(n) {
            n.preventDefault(), window.open("https://plus.google.com/share?url=" + t, "Google Share", "status=0,width=626,height=436, top=" + ($(window).height() / 2 - 225) + ", left=" + ($(window).width() / 2 - 313) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".lk-btn").on("click", function(i) {
            i.preventDefault(), window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + t + "&title=" + n + "&summary=&source=", "LinkedIn", "status=0,width=505,height=340, top=" + ($(window).height() / 2 - 225) + ", left=" + ($(window).width() / 2 - 313) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".pi-btn").on("click", function(i) {
            i.preventDefault(), window.open("http://pinterest.com/pin/create/button/?url=" + t + "&description=" + n, "Pinterest", "status=0,width=1000,height=615, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".su-btn").on("click", function(i) {
            i.preventDefault(), window.open("http://www.stumbleupon.com/submit?url=" + t + "&title=" + n, "StumbleUpon", "status=0,width=470,height=630, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".dg-btn").on("click", function(i) {
            i.preventDefault(), window.open("http://digg.com/submit?phase=2&url=" + t + "&title=" + n, "Digg", "status=0,width=500,height=500, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".re-btn").on("click", function(n) {
            n.preventDefault(), window.open("http://reddit.com/submit?url=" + t + "&title=" + n, "Reddit", "status=0,width=500,height=500, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        }), $(this).find(".de-btn").on("click", function(i) {
            i.preventDefault(), window.open("https://delicious.com/save?v=5&noui&jump=close&url=" + t + "&title=" + n, "Delicious", "status=0,width=500,height=500, top=0, left=0, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")
        })
    })
}), $this.find(".more-btn").on("click",function(t) {t.preventDefault(), $(this).parent().find(".plugin-more").css("display", "inline-block"), $(this).css("display", "none")}), 
$this.find(".hide-btn").on("click",function(t) {
    t.preventDefault(), $(this).parent().css("display", "none"), $(this).parent().parent().find(".more-btn").css("display", "inline-block")
});
