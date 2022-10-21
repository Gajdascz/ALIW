// GENERAL
// Alternate background coloring for each tutorial's content
$(document).ready(function() {
    $("article:even").css("background-color", "#71797E");
    $("article:odd").css("background-color", "#708090 ");
 });
// END GENERAL

// VIDEO ONE
$(document).ready(function() {
    $(".video_one > h1").siblings("*").hide();
    $(".video_one > h1").click(function() {
        $(".video_one > h1").siblings("h2").slideToggle(300);
        if($(".video_one > h1").siblings("p").is(":visible")){
            $(".video_one > h1").siblings("p").hide();
        }
    });

    $(".video_one > h2").click(function() {
        $(this).next().slideToggle(300);
    });
});
// END VIDEO ONE 



// VIDEO TWO
 $(document).ready(function() {
    $(".video_two > h1").siblings("*").hide();
    $(".video_two > h1").click(function() {
        $(".video_two > h1").siblings("*").slideToggle(300);
        });

    $("#prompt_button").click(function(){
        var element = ".video_two " + prompt("What Element Would You Like To Highlight?", "strong");
        $(element).css("background-color", "#FFFF00");
    });
});
// END VIDEO TWO



// VIDEO THREE
$(document).ready(function() {
    $(".video_three > h1").siblings("*").hide();
    $(".video_three > h1").click(function() {
        $(".video_three > h1").siblings("*").slideToggle(300);
        });

    $(".video_three > h2.mousedown").mousedown(function(){
        $(this).css("background-color","red");
    });

    $(".video_three > h2.mouseup").mouseup(function(){
        $(this).css("background-color","blue");
    });

    $(".video_three > h2.mouseenter").mouseenter(function(){
        $(this).css("background-color","purple");
    });

    $(".video_three > h2.mouseleave").mouseleave(function(){
        $(this).css("background-color","green");
    });
    
    $(".video_three > h2.unbind").mouseenter(function(){
        $(this).css("background-color","cyan");
    });

    $(".video_three > h2.unbind").mouseleave(function(){
        $(this).css("background-color","orange");
    });
    $(".video_three > h2.unbind").click(function(){
        $("*").unbind("mouseenter, mouseleave");
    });

});
// END VIDEO THREE



// VIDEO FOUR
$(document).ready(function() {
    $(".video_four > h1").siblings("*").hide();
    $(".video_four > h1").click(function() {
        $(".video_four > h1").siblings("*").slideToggle(300);
        if($(".video_four > h1").siblings("p").is(":visible")){
            $(".video_four > h1").siblings("p").hide();
        }
    });

    $(".video_four > h2.toggle").click(function(){
        $(this).next().toggle(400);
    });
    $(".video_four > h2.slide_toggle").click(function(){
        $(this).next().slideToggle(400);
    });
    $(".video_four > h2.fade_toggle").click(function(){
        $(this).next().fadeToggle(400);
    });
    $(".video_four > h2.fade_to").click(function(){
        $(this).next().fadeTo(400, 0.3);
    });
    $(".video_four > h2.delayed_fade_toggle").click(function(){
        $(this).next().delay(200).fadeToggle(400);
    });
    $(".video_four > h2.call_back").click(function(){
        $(this).next().fadeToggle(400, function() {
            $(this).next().fadeToggle(200);
        });
    });
});
// END VIDEO FOUR


// VIDEO FIVE
$(document).ready(function() {
    $(".video_five > h1").siblings("*").hide();
    $(".video_five > h1").click(function() {
        $(".video_five > h1").siblings("*").slideToggle(300);
        if($(".video_five > h1").siblings("p").is(":visible")){
            $(".video_five > h1").siblings("p").hide();
        }
    });

    $(".video_five > h2.increase_font_size").click(function(){
        $(this).animate({
            "font-size": "+=1em"
        }, 1000);
    });

    $(".video_five > h2.move_text").click(function(){
        $(this).animate({
            "left": "+=25px"
        }, 1000);
    });

    $(".video_five > h2.toggle").click(function(){
        $(this).next().animate({
            "font-size": "toggle"
        }, 1000);
    });


    $(".video_five > h2.call_back").click(function(){
        $(this).next().animate({
            "font-size": "toggle"
        }, 1000, function(){
            $(this).next().animate({
                "font-size": "toggle"
            },1000)
        });
    });
});
// END VIDEO FIVE



// VIDEO SIX
$(document).ready(function() {
    $(".video_six > h1").siblings("*").hide();
    $(".video_six > h1").click(function() {
        $(".video_six > h1").siblings("*").slideToggle(300);
    });

    $(".video_six > h2.mouse_enter_leave").mouseenter(function(){
        $(this).css({"color" : "red"})
    });
    $(".video_six > h2.mouse_enter_leave").mouseleave(function(){
        $(this).css({"color" : "blue"})
    });
    $(".video_six > h2.toggle_class").click(function(){
        $(this).toggleClass("emphasis");
    });
});
// END VIDEO SIX



// VIDEO SEVEN
$(document).ready(function() {
    $(".video_seven > h1").siblings("*").hide();
    $(".video_seven > h1").click(function() {
        $(".video_seven > h1").siblings("*").slideToggle(300);
        if($(".video_seven > h1").siblings("p").is(":visible")){
            $(".video_seven > h1").siblings("p").hide();
        }
    });

    $(".video_seven > h2.text").click(function(){
            $(this).text("<u>Clicked!</u>");
    });
    $(".video_seven > h2.html").click(function(){
        $(this).html("<u>Clicked!</u>");
    });
    $(".video_seven > h2.html").click(function(){
        $(this).html("<u>Clicked!</u>");
    });
    $(".video_seven > h2.html_css").click(function(){
        $(this).html('<u style="color: green;">Clicked!</u>');
    });
    $(".video_seven > h2.empty").click(function(){
        $(this).empty();
    });
    $(".video_seven > h2.append").click(function(){
        $(this).append(" append ");
    });
    $(".video_seven > h2.append_html").click(function(){
        $(this).append("<p> append_html </p>");
    });
    $(".video_seven > h2.after").click(function(){
        $(".video_seven > h2").after("<i> after </i>");
    });
    $(".video_seven > h2.prepend").click(function(){
        $(".video_seven > h2").prepend("<i> prepend </i>");
    });
    $(".video_seven > h2.before").click(function(){
        $(".video_seven > h2").before("<i> before </i>");
    });
    $(".video_seven > h2.replace_with").click(function(){
        $(this).replaceWith("<p> Replaced! </p>");
    });
    $(".video_seven > h2.atrr").click(function(){

    });
});
// END VIDEO SEVEN



// VIDEO EIGHT
$(document).ready(function() {
    $(".video_eight > h1").siblings("*").hide();
    $(".video_eight > h1").click(function() {
        $(".video_eight > h1").siblings("*").slideToggle(300);
    });

    $(".video_eight > h2.color_background").click(function(){
        $(this).css("background-color", "purple");
    });
    $(".video_eight > h2.color_add").click(function(){
        $(this).add("p.add").css("background-color", "cyan");
    });
    $(".video_eight > h2.color_not").click(function(){
        $(".video_eight > p.not_second").not(".video_eight > p.not").css("background-color", "red");
    });
    $(".video_eight > h2.color_next").click(function(){
        $(this).next().css("background-color", "red");
    });

    $(".video_eight > h2.color_next_strong").click(function(){
        $(".video_eight > p.next_strong").next("strong").css("background-color", "orange");
    });

    $(".video_eight > h2.prev").click(function(){
        $(this).prev().css("background-color", "green");
    });

    $(".video_eight > h2.parent").click(function(){
        $(this).parent().css("background-color", "violet");
    });

    $(".video_eight > h2.find").click(function(){
        $(this).parent().find("span.found").css("background-color", "gold");
    });

    $(".video_eight > h2.first").click(function(){
        $("p.not").first().css("background-color", "brown");
    });

    $(".video_eight > h2.last").click(function(){
        $("h2").last().css("background-color", "limegreen");
    });

    $(".video_eight > h2.index").click(function(){
        $(".video_eight > p").eq(5).css("background-color","blue");
    });
});
// END VIDEO EIGHT
