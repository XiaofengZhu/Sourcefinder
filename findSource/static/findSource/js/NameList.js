$(document).ready(function(){
  $(function(){
    var urlsList = JSON.parse($.cookie("URLsInfo"));
    $.removeCookie("URLsList");
    var urlL = urlsList.urls.split(';');
    urlL.pop();


    (function myloop(i){
      setTimeout(function (){
        $.post('/Sourcerous/getInfo', {
          url: urlL[i]
        }, function(response){
          if (response.success){
            var append_content = '<p>'
            + response['title'] + '<br>'
            + response['url'] + '<br>'
            + response['author'] + '<br>';

             $.each(response['people'] , function(key, value) {
                           
                           append_content += response['people'][key]['company'] +'</p>';
                           append_content += response['people'][key]['job_title'] +'</p>';                           
                           append_content += response['people'][key]['quotation'] +'</p>';
                           append_content += response['people'][key]['linkedInLink'] +'</p>';
                        });

            append_content += '</p>';
            $('#results').append(append_content);
          } else {
            alert("fail");
          }
        })
        if (--i) myloop(i);
      }, 5000)
    })(12);

    /*
    for (var i = 0; i != 12; i++){
      setTimeout(function(){
        $.post('/Sourcerous/getInfo', {
          url: urlL[i]
        }, function(response){
          if (response.success){
            var append_content = '<p>'
            + response['title'] + '<br>'
            + response['url'] + '<br>'
            + response['author'] + '<br>';

            append_content += '</p>';
            $('#results').append(append_content);
          } else {
            alert("fail");
          }
        })
      }, 10000 * i);
    }*/

  });
});


