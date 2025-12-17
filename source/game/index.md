---
title: 🕹️ 电玩城
date: 2023-11-21 17:24:44
comments: true
aside: false
top_img: false
type: "game"
---

<script src="https://unpkg.com/jquery@latest/dist/jquery.min.js"></script>
<script>
function selectGame(id){
    var src=$("#game-item-"+id).attr("data-src");
    $("#game-select").html("<iframe id='game-iframe' src='"+src+"' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>");
    var iframe = document.getElementById("game-select")
    if(iframe.attachEvent){
      iframe.attachEvent("onreadystatechange", function() {
        if (iframe.readyState === "complete" || iframe.readyState == "loaded") {
          iframe.detachEvent("onreadystatechange", arguments.callee);
        if (document.getElementsByClassName('game-mirror').length>0) {
          console.log("1true")
          $(".game-mirror").attr("style","transform:scaleX(-1);")
          }
        }
      });
    }else{
      iframe.addEventListener("load", function() {
        this.removeEventListener("load", arguments.call, false);
      if (document.getElementsByClassName('game-mirror').length>0) {
        console.log("2true")
        $(".game-mirror").attr("style","transform:scaleX(-1);")
      }
      }, false);
    }
}
$(document).ready(selectGame(0));
</script>