function show(){
    var hot=document.getElementById("hot");
    var form=document.getElementById("form");
    var tip=document.getElementById("tip");
    var tip1=document.getElementById("tip1");
    form.onclick=function(){
        hot.style.display="block";
        tip.style.display="none"
        tip1.style.display="none"
    }
    input.onblur=function(){        /*    通过  onblur    事件          使推荐框消失         onblur 多用于文本输入框失去焦点时触发         */
        hot.style.display="none";
        tip.style.display="block"
        tip1.style.display="block"
    }
}
window.onload=show;








/*
<script>
    window.onload = function () {
        var oul = document.getElementById("order-ul");
        var oli = oul.getElementsByTagName("li");
        var oshow = document.getElementById("order-show");
        var oa = document.getElementById("order-a");
        oul.onclick = function (event) {
            (event || window.event).cancelBubble = true
        }
        oa.onclick = function (event) {
            for (i = 0; i < oli.length; i++) {
                oli[i].style.display = oli[i].style.display == "block" ? "none" : "block";
            }
            oshow.style.display = "block";
            //阻止事件冒泡
            (event || window.event).cancelBubble = true
        };
        document.onclick = function () {
            for (i = 0; i < oli.length; i++) {
                oli[i].style.display = "none";
            }
            oshow.style.display = "block";
        };

    }
</script>*/