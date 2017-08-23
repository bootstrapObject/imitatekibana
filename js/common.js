/**
 * Created by user on 2016/12/1.
 */
/* --------------------------------------------------------
 Date Time Widget 显示当前系统时间
 -----------------------------------------------------------*/
(function(){
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    // Create a newDate() object
    var newDate = new Date();

    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());

    // Output the day, date, month and year
    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {

        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();

        // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0":"" ) + seconds);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();

        // Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0":"" ) + minutes);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();

        // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
})();
//左侧块消失显示
$(".left-hide-toggle").click(function(){
    $(".left").toggle();
    if($(".left").css("display")=="none"){
        $(".gltoggle").removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
        $(".hide-w100").css({"width":"98.5%"});

    }else {
        $(".gltoggle").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
        $(".hide-w100").css({"width":"78.5%"});
    }
})
//list-group-item当前active
$(".query").click(function(){
    $(".query").removeClass("active");
    $(this).addClass("active");
})
//time
$("#time").click(function(){
    if($(".glyphicon-refresh-btn").hasClass("hidden")){
        if($(".time-toggle").hasClass("hidden")){
            $(".refresh-hidden").addClass("hidden");
            $(".time-toggle,.hide-time-refresh").removeClass("hidden");
        }else {
            $(".time-toggle,.hide-time-refresh").addClass("hidden");
        }
    }else {
        if($(".hide-time-refresh").hasClass("hidden")){
            $(".time-toggle,.refresh-div,.hide-time-refresh").removeClass("hidden");
        }else if($(".time-toggle").hasClass("hidden")==false){
            $(".time-toggle,.refresh-div,.hide-time-refresh").addClass("hidden");
        }else {
            $(".refresh-hidden").addClass("hidden");
            $(".time-toggle").removeClass("hidden");
        };
    }
});
//refresh
$(".refresh").click(function(){
    if($(".time-toggle").hasClass("hidden")){
        if($(".glyphicon-refresh-btn").hasClass("hidden")){
            if($(".refresh-hidden").hasClass("hidden")){
                $(".refresh-hidden,.hide-time-refresh").removeClass("hidden");
            }else {
                $(".refresh-hidden,.hide-time-refresh").addClass("hidden");
            };
        }else {
            if($(".refresh-hidden").hasClass("hidden")==false){
                $(".refresh-hidden,.hide-time-refresh,.refresh-div").addClass("hidden");
            }else {
                $(".time-toggle").addClass("hidden");
                $(".refresh-hidden").removeClass("hidden");
            };
        }
    }else {
        $(".time-toggle").addClass("hidden");
        $(".refresh-hidden").removeClass("hidden");
    };
});
$(".btn-refresh-close").click(function(){
    if( $(".glyphicon-refresh-btn").hasClass("hidden")){
        $(".glyphicon-refresh-btn").removeClass("hidden");
        $(".pause-play-btn").addClass("hidden");
        $(".refresh-text").text("自动刷新");
    }else {
        $(".refresh-hidden,.hide-time-refresh,.refresh-div").addClass("hidden");
    }
});
//hide-timer-refresh
$(".hide-time-refresh").click(function(){
    if($(".glyphicon-refresh-btn").hasClass("hidden")){
        $(".refresh-hidden,.time-toggle,.hide-time-refresh").addClass("hidden");
    }else {
        $(".time-toggle,.refresh-div,.refresh-hidden,.hide-time-refresh").addClass("hidden");
    }

});

//left-click-toggle
$(".click-toggle-parent").click(function(){
    $(".left-click-toggle").toggle();
    if( $(".left-click-toggle").css("display")=="block"){
        $(".left-botton-creat").removeClass("caret").addClass("caret-up");
    }else {
        $(".left-botton-creat").removeClass("caret-up").addClass("caret");
    }
})
//btn-chart-myscoll
$(".btn-chart-myscoll").click(function(){
    $(".chart-toggle").toggle();
    if($(".chart-toggle").css("display")=="none"){
        $(".btn-chart-myscoll").children().removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        $(".myscoll-toggle").show();
    }else {
        $(".btn-chart-myscoll").children().removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        $(".myscoll-toggle").hide();
    }
})
//caret-right
$(".caret-right-toggle").click(function(){
    $(".caret-right-hide").toggle();
    if($(".caret-right-hide").css("display")=="block"){
        $(".caret-right-toggle").removeClass("caret-right").addClass("caret");
    }else {
        $(".caret-right-toggle").removeClass("caret").addClass("caret-right");
    }
});
//data-Setting+data-visualization
var b=false;
$(".data-visualization-li,.data-Setting-li").click(function(){
    if($(".pause-play-btn").hasClass("hidden")){
        b=false;
        $(".hidden-visualization,#time,.time-toggle,.refresh-div,.hide-time-refresh").addClass("hidden");
    }else {
        b=true;
        $(".hidden-visualization,#time,.time-toggle,.refresh-div,.hide-time-refresh").addClass("hidden");
    }
});
$(".data-Dashboard-li").click(function(){
    if(b){
        $(".hidden-visualization,#time,.glyphicon-plus-sign,.option-btn,.refresh-div").removeClass("hidden");
    }else {
        $(".hidden-visualization,#time,.glyphicon-plus-sign,.option-btn").removeClass("hidden");
    }
});
$(".data-check-li").click(function(){
    if(b){
        $(".hidden-visualization,#time,.glyphicon-plus-sign,.option-btn,.refresh-div").removeClass("hidden");
    }else {
        $(".hidden-visualization,#time").removeClass("hidden");
        $(".glyphicon-plus-sign,.option-btn").addClass("hidden");
    }

});
//packetbeat*
$(".index-pattern").click(function(){
    if($(".packetbeat-hide").css("display")=="block"){
        $(".packetbeat-caret").removeClass("caret-up").addClass("caret");
        $(".packetbeat-hide").addClass("hidden");
    }else{
        $(".packetbeat-caret").removeClass("caret").addClass("caret-up");
        $(".packetbeat-hide").removeClass("hidden");
    };
    $(".discover-field-details-close").click(function(){
        $(".packetbeat-hide").addClass("hidden");
        $(".packetbeat-caret").removeClass("caret-up").addClass("caret");
    });
});
//Available
$(".discover-field-filter-toggle").click(function(){
    $(".Available-toggle").toggle();
});
$(".discover-field-details-close").click(function(){
    $(".Available-toggle").hide();
});
//ng-scope:hover
$(".btn-add").hover(function(){
    $(this).addClass("cursor");
    $(this).find("button").removeClass("hidden");
},function(){
    $(this).find("button").addClass("hidden");
});
//li-index
$(".li-index1,.li-index2,.li-index3,.li-index4").click(function(){
    $(".kbn-settings-indices-create").addClass("hidden");
    $("#myTabContent4,#packetbeat").removeClass("hidden");
});
//indices-a
$(".indices-a").click(function(){
    $(".kbn-settings-indices-create").removeClass("hidden");
    $("#myTabContent4").addClass("hidden");
})
//nav-btn-6
$(".glyphicon-file").click(function(){
    if($(".folder-open-content").hasClass("hidden")==false||$(".share-content").hasClass("hidden")==false
    ||$(".zation-content").hasClass("hidden")==false||$(".option-content").hasClass("hidden")==false){
        $(".folder-open-content,.share-content,.zation-content,.option-content").addClass("hidden");
        $(".file-content").removeClass("hidden");
    }else if($(".file-content").hasClass("hidden")==false){
        $(".file-content,.config-close").addClass("hidden");
    }else {
        $(".file-content,.config-close").removeClass("hidden");
    }
});
$(".glyphicon-folder-open").click(function(){
    if($(".file-content").hasClass("hidden")==false||$(".share-content").hasClass("hidden")==false
    ||$(".zation-content").hasClass("hidden")==false||$(".option-content").hasClass("hidden")==false){
        $(".file-content,.share-content,.zation-content,.option-content").addClass("hidden");
        $(".folder-open-content").removeClass("hidden");
    }else if($(".folder-open-content").hasClass("hidden")==false){
        $(".folder-open-content,.config-close").addClass("hidden");
    }else {
        $(".folder-open-content,.config-close").removeClass("hidden");
    }
});
$(".glyphicon-new-window").click(function(){
    if($(".file-content").hasClass("hidden")==false||$(".folder-open-content").hasClass("hidden")==false
    ||$(".zation-content").hasClass("hidden")==false||$(".option-content").hasClass("hidden")==false){
        $(".file-content,.folder-open-content,.zation-content,.option-content").addClass("hidden");
        $(".share-content").removeClass("hidden");
    }else if($(".share-content").hasClass("hidden")==false){
        $(".share-content,.config-close").addClass("hidden");
    }else {
        $(".share-content,.config-close").removeClass("hidden");
    }
});
$(".glyphicon-plus-sign").click(function(){
    if($(".file-content").hasClass("hidden")==false||$(".folder-open-content").hasClass("hidden")==false
        ||$(".share-content").hasClass("hidden")==false||$(".option-content").hasClass("hidden")==false){
        $(".file-content,.folder-open-content,.share-content,.option-content").addClass("hidden");
        $(".zation-content").removeClass("hidden");
    }else if($(".zation-content").hasClass("hidden")==false){
        $(".zation-content,.config-close").addClass("hidden");
    }else {
        $(".zation-content,.config-close").removeClass("hidden");
    }
});
$(".option-btn").click(function(){
    if($(".file-content").hasClass("hidden")==false||$(".folder-open-content").hasClass("hidden")==false
        ||$(".share-content").hasClass("hidden")==false||$(".zation-content").hasClass("hidden")==false){
        $(".file-content,.folder-open-content,.share-content,.zation-content").addClass("hidden");
        $(".option-content").removeClass("hidden");
    }else if($(".option-content").hasClass("hidden")==false){
        $(".option-content,.config-close").addClass("hidden");
    }else {
        $(".option-content,.config-close").removeClass("hidden");
    }
});
$(".config-close").click(function(){
    $(".file-content,.folder-open-content,.share-content,.zation-content,.option-content,.config-close").addClass("hidden");
});
//改变顶部时间
$(".refresh-time").click(function(){
    $(".textChange").text(this.text);
});
//checkbox chackAll
//全选或全不选
$(".checkAll").click(function(){
    if(this.checked){
        $(".checkbox-left").prop("checked", true);
        $(".btn-delete,.btn-export").removeAttr("disabled");
    }else{
        $(".checkbox-left").prop("checked", false);
        $(".btn-delete,.btn-export").attr("disabled",true);
    }
});
//设置全选复选框
$(".checkbox-left").click(function(){
    allchk();
});
function allchk(){
    var chknum = $(".checkbox-left").size();//选项总个数
    var chk = 0;
    $(".checkbox-left").each(function () {
        if($(this).prop("checked")==true){
            $(".btn-delete,.btn-export").removeAttr("disabled");
            chk++;
        }
    });
    if(chknum==chk){//全选
        $(".checkAll").prop("checked",true);
    }else{//不全选
        $(".checkAll").prop("checked",false);
    }
}
//myTab3 li click
$(".li-dashboards,.searches-li,.visualizations-li").click(function(){
    if($(".checkAll").checked){
        $(".checkbox-left,.checkAll").prop("checked", true);
    }else{
        $(".checkbox-left,.checkAll").prop("checked", false);
        $(".btn-delete,.btn-export").attr("disabled",true);
    }
});
//indices-btn2 click
$(".indices-btn").click(function(){
//console.log($(".indices-btn").is(":checked"));
    if($(".indices-btn").is(":checked")){
        $(".checkbox-btn1-toggle").removeClass("hidden");
        $(".indices-btn2").prop("checked",false);
    }else {
        $(".checkbox-btn1-toggle,.checkbox-toggle-btn2").addClass("hidden");
    }
});
$(".indices-btn2").click(function(){
//console.log($(".indices-btn2").is(":checked"));
    if($(".indices-btn2").is(":checked")){
        $(".checkbox-toggle-btn2").removeClass("hidden");
        $(".checkbox-hidden-btn2").addClass("hidden");
    }else {
        $(".checkbox-toggle-btn2").addClass("hidden");
        $(".checkbox-hidden-btn2").removeClass("hidden");
    }
});
$(".indices-btn3").click(function(){
    if($(".indices-btn3").is(":checked")){
        $(".checkbox-toggle-btn3").removeClass("hidden");

    }else {
        $(".checkbox-toggle-btn3").addClass("hidden");

    }
});
//relative-newTime click
$(".relative-newTime").click(function(){
    function show(){
        var mydate = new Date();
        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
        str += mydate.getDate() + "th"+"&nbsp;";
        str += mydate.getFullYear() +",";
        str += mydate.getHours()+":";
        str += mydate.getMinutes()+":";
        str += mydate.getSeconds()+":";
        str += mydate.getMilliseconds();
        return str;
    };
    $(".span-newDate").html(show());
})
//option-change
$(".option-change").change(function(){
    switch (this.value){
        case "s":
            $(".option-change-span").html("取整到second");
            break;
        case "m":
            $(".option-change-span").html("取整到minute");
            break;
        case "h":
            $(".option-change-span").html("取整到hour");
            break;
        case "d":
            $(".option-change-span").html("取整到day");
            break;
        case "w":
            $(".option-change-span").html("取整到week");
            break;
        case "M":
            $(".option-change-span").html("取整到month");
            break;
        case "y":
            $(".option-change-span").html("取整到year");
            break;
        default:
            $(".option-change-span").html("取整到minute");
    }
});
$(".kbn-timepicker-go-relative").click(function(){
    if($(".checkbox-retive").is(":checked")){
        switch ($(".option-change").val()){
            case "s":
                $(".textChange").html("最后"+$(".numChange").val()+"秒"+$(".option-change-span").text());
                break;
            case "m":
                $(".textChange").html("最后"+$(".numChange").val()+"分"+$(".option-change-span").text());
                break;
            case "h":
                $(".textChange").html("最后"+$(".numChange").val()+"小时"+$(".option-change-span").text());
                break;
            case "d":
                $(".textChange").html("最后"+$(".numChange").val()+"天"+$(".option-change-span").text());
                break;
            case "w":
                $(".textChange").html("最后"+$(".numChange").val()+"周"+$(".option-change-span").text());
                break;
            case "M":
                $(".textChange").html("最后"+$(".numChange").val()+"月"+$(".option-change-span").text());
                break;
            case "y":
                $(".textChange").html("最后"+$(".numChange").val()+"年"+$(".option-change-span").text());
                break;
        };
    }else {
        switch ($(".option-change").val()){
            case "s":
                $(".textChange").html("最后"+$(".numChange").val()+"秒");
                break;
            case "m":
                $(".textChange").html("最后"+$(".numChange").val()+"分");
                break;
            case "h":
                $(".textChange").html("最后"+$(".numChange").val()+"小时");
                break;
            case "d":
                $(".textChange").html("最后"+$(".numChange").val()+"天");
                break;
            case "w":
                $(".textChange").html("最后"+$(".numChange").val()+"周");
                break;
            case "M":
                $(".textChange").html("最后"+$(".numChange").val()+"月");
                break;
            case "y":
                $(".textChange").html("最后"+$(".numChange").val()+"年");
                break;
        };
    };
});
//kbn-timepicker-go-start click
$(".kbn-timepicker-go-start").click(function(){
    $(".textChange").text("从"+$(".datatime-btn1").val()+"到"+$(".datatime-btn2").val())
});
//glyphicon-pause click
$(".glyphicon-pause").click(function(){
    if($(this).hasClass("glyphicon-pause")){
        $(this).removeClass("glyphicon-pause").addClass("glyphicon-play");
        $(this).attr({"title":"点这里开始"});
    }else {
        $(this).removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(this).attr({"title":"点这里暂停"});
    }
});
//refresh-interval click
$(".refresh-interval").click(function(){
    //console.log($(this).text());
    $(".refresh-text").text($(this).text());
    $(".glyphicon-refresh-btn").addClass("hidden");
    $(".pause-play-btn").removeClass("hidden");
});
//调出日期控件
$('.input-time').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    pickerPosition: "bottom-left",
    format: 'yyyy-mm-dd hh:ii:ss'
});
//stra-newTime click
$(".stra-newTime").click(function(){
    function show(){
        var mydate = new Date();
        var str = mydate.getFullYear() +"-";
        str += (mydate.getMonth()+1)+"-";
        str += mydate.getDate();
        str += " "+mydate.getHours()+":";
        str += mydate.getMinutes()+":";
        str += mydate.getSeconds();
        return str;
    }
    $(".datatime-btn2").val(show());
});
//获取left高度并赋值给left-hide-toggle
$(function(){
    $(".left-hide-toggle").height($(".left").height());
});
$(".getHeight").click(function(){
    setTimeout(function(){
        $(".left-hide-toggle").height($(".left").height());
    },1);
});
//随时间input框值改变而改变的时间
$(".numChange").change(function(){
    switch ($(".option-change").val()){
        case "m":
            var numT=Number($(".numChange").val())/60;
            if(numT<1){
                //减分钟
                if(new Date().getMinutes()-$(".numChange").val()>=0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()-$(".numChange").val()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += (mydate.getHours()-1)+":";
                        str += (mydate.getMinutes()+60)-$(".numChange").val()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }
            }else if(1<=numT<1440){
                //减小时 先判断模数与现在分数相减是否为负
                if(new Date().getMinutes()-Number($(".numChange").val())%60>=0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()-parseInt(numT)+":";
                        str += mydate.getMinutes()-(Number($(".numChange").val())%60)+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()-parseInt(numT)-1+":";
                        str += (mydate.getMinutes()+60)-(Number($(".numChange").val())%60)+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }
            }else{
                //减天数
                alert("参数错误");
            };
            break;
        case "h":
            var numH=Number($(".numChange").val())/24;
            if(numH<1){
                //减 小时 并判断是否为负
                if(new Date().getHours()-$(".numChange").val()>0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate()+ "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours() -$(".numChange").val()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate()-1+ "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()+24 -$(".numChange").val()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                };
            }else if(1<=numH<30){
                //减天数 并且判断当前小时减去模数是否为正
                if(new Date().getHours()-$(".numChange").val()%24>0){
                    //判断当前天数是否够减 正负
                    if(new Date().getDate()-parseInt(numH)>0){
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                            str += mydate.getDate()-parseInt(numH)+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+ -$(".numChange").val()%24+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    }else {
                        //天数不够减 去月份借 不需要判断月份是否够借 因为此条件下最多借一个月
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)-1+"M"+ "&nbsp;";
                            str += mydate.getDate()+30-parseInt(numH)+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+ -$(".numChange").val()%24+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    }
                }else {
                    //判断当前天数是否够减 正负
                    //console.log("判断当前天数是否够减 正负");
                    if(new Date().getDate()-1-parseInt(numH)>0){
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                            str += mydate.getDate()-1-parseInt(numH)+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+24 -$(".numChange").val()%24+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    }else {
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)-1+"M"+ "&nbsp;";
                            str += mydate.getDate()+29-parseInt(numH)+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+24 -$(".numChange").val()%24+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    }
                };
            }else if(30<=numH<365){
                //减月份
                alert("请选择月份");
            }else {
                //减年
                alert("请选择月份");
            };
            break;
        case "d":
            var numD=Number($(".numChange").val())/30;
            if(numD<1){
                //减天娄 判断当前天数减去数值是否为正
                if(new Date().getDate()-$(".numChange").val()>0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
                        str += mydate.getDate() -$(".numChange").val()+ "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    //先判断上月是否为2月 若为则判断是否为润年 否则判断上月是否为1 3 5 7 8 10 12 再则进入30天正常月
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1)-1+"M"+ "&nbsp;";
                        str += mydate.getDate()+30 -$(".numChange").val()+ "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }
            }else if(1<=numD<12){
                //减月份
                if(new Date().getMonth()-parseInt(numD)>0){
                    //判断当前日减去当前值的模数是否为正
                    if(new Date().getDate()-$(".numChange").val()%30>0){
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)-parseInt(numD)+"M"+ "&nbsp;";
                            str += mydate.getDate() -$(".numChange").val()%30+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    }else {
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+1)-1-parseInt(numD)+"M"+ "&nbsp;";
                            str += mydate.getDate()+30 -$(".numChange").val()%30+ "th"+"&nbsp;";
                            str += mydate.getFullYear() +",";
                            str += mydate.getHours()+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                    };
                }else {
                    //console.log(222);
                    //判断当前日减去当前值的模数是否为正
                    if(new Date().getDate()-$(".numChange").val()%30>0){
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+12)-parseInt(numD)+"M"+ "&nbsp;";
                            str += mydate.getDate() -$(".numChange").val()%30+ "th"+"&nbsp;";
                            str += mydate.getFullYear()-1 +",";
                            str += mydate.getHours()+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                        //console.log(22200000);
                    }else {
                        function show(){
                            var mydate = new Date();
                            var str = "" + (mydate.getMonth()+11)-parseInt(numD)+"M"+ "&nbsp;";
                            str += mydate.getDate() +30-$(".numChange").val()%30+ "th"+"&nbsp;";
                            str += mydate.getFullYear()-1 +",";
                            str += mydate.getHours()+":";
                            str += mydate.getMinutes()+":";
                            str += mydate.getSeconds()+":";
                            str += mydate.getMilliseconds();
                            return str;
                        };
                        $(".span-newDate").html(show());
                        console.log(2221111111111111);
                    }
                }
            }else {
                //减年
                console.log(111);
            };
            break;
        case "w":
            //
            alert("代码我还没写好");
            var numW=Number($(".numChange").val())*7/30;

            break;
        case "M":
            var numM=Number($(".numChange").val())/12;
            if(numM<1){
                //减月份  判断现在的月份减去数值是否为负
                if(new Date().getMonth()+1-$(".numChange").val()>=0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1-$(".numChange").val())+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear() +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+13-$(".numChange").val())+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear()-1 +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }
            }else {
                //减年 判断模数是否为正
                if(new Date().getMonth()+1-$(".numChange").val()%12>0){
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+1-$(".numChange").val()%12)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear()-parseInt(numM) +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }else {
                    function show(){
                        var mydate = new Date();
                        var str = "" + (mydate.getMonth()+13-$(".numChange").val()%12)+"M"+ "&nbsp;";
                        str += mydate.getDate() + "th"+"&nbsp;";
                        str += mydate.getFullYear()-1-parseInt(numM) +",";
                        str += mydate.getHours()+":";
                        str += mydate.getMinutes()+":";
                        str += mydate.getSeconds()+":";
                        str += mydate.getMilliseconds();
                        return str;
                    };
                    $(".span-newDate").html(show());
                }
            };
            break;
        case "y":
            //不用判断直接减年
        function show(){
            var mydate = new Date();
            var str = "" + (mydate.getMonth()+1)+"M"+ "&nbsp;";
            str += mydate.getDate() + "th"+"&nbsp;";
            str += mydate.getFullYear()-$(".numChange").val() +",";
            str += mydate.getHours()+":";
            str += mydate.getMinutes()+":";
            str += mydate.getSeconds()+":";
            str += mydate.getMilliseconds();
            return str;
        };
            $(".span-newDate").html(show());
            break;
    };
});









