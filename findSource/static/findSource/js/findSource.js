$("#search").click(function (){
    var input = $('#user-input').val();
    if (input){
        current_url = window.location.pathname;
        document.location.href = current_url  + input + '/result';  
        $("#preLoaderDiv").show();     
        // window.location.href = current_url  + input + '/result';
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




