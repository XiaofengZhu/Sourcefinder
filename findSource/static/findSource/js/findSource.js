$("#search").click(function (){
    var input = $('#user-input').val();
    if (input){


    var percent=0; //百分比进度，显示在滚动条后面
    var element="||"; //滚动条单元竖线
    var elements="||"; //滚动条当前竖线
    count(); //开始调用循环

    function count(){
    percent=percent+10; //每次百分比加10
    elements =elements + element; //滚动条当前竖线增加一个滚动条单元竖线
    document.loading.bar.value=elements; //设置窗体loading表单中bar元素的当前值
    document.loading.percentage.value=percent+"%"; //设置窗体loading表单中percentage元素的当前值
    if (percent<99){ //percent小于99则继续循环
    setTimeout("count()",500); //每500ms进行一次count()
    }
    else{
        current_url = window.location.pathname;
        window.location.href = current_url  + input + '/result';
    }
    }

    }
});

$('#user-input').keypress(function(e) {
    if(e.which == 13) {
        var input = $('#user-input').val();
        if (input){
            current_url = window.location.pathname;
            //alert(current_url + input + '/result');
            window.location.href = current_url + input + '/result';
        }
    }
});
function checkLoad()
{
   if(document.getElementById("bottom"))
   {
    document.getElementById("preLoaderDiv").style.visibility = "hidden";
   }
}




