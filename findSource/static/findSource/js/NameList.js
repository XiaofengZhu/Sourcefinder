$(document).ready(function(){
  $(function(){
    var urlsList = JSON.parse($.cookie("URLsInfo"));
    $.removeCookie("URLsList");
    var urlL = urlsList.urls.split(';');
    urlL.pop();
    var original_source = urlsList.original_sources.split(';');
    original_source.pop();    


    (function myloop(i){
      setTimeout(function (){
        $.post('/Sourcerous/getInfo', {
          url: urlL[i],
          osource:original_source[i]
        }, function(response){
          if (response.success){
            var append_content = '';
            if (response['people']){
              
              // append_content +='<dl class='+'dl-horizontal'+'>'
              // +'<dt>Article Title</dt>'
              // +'<dd> '            
              // + '<a href='+response['url'] + '>'+response['title']+'</a>'
              // +'</dd>'
              // +'</dl>'
              // +'<dl class='+'dl-horizontal'+'>'
              // +'<dt>Author Name</dt>'
              // +'<dd> '            
              // + response['author']
              // +'</dd>'            
              // +'</dl>';

              append_content +='<dl class='+'dl-horizontal'+'>'
              +'<dt>People Info</dt>'
              +'<dd>';
                           
              $.each(response['people'] , function(key, value) {
                append_content += '<div class ='+'business'+'>'; 

                if (response['people'][key]['quotation'].length<10){
                  append_content += '<br>'; 
                }  

                append_content += '<p><h4><a href='+'/Sourcerous/'+key+'/result'+'>'+key+'</a></h4></p>'; 
                append_content += '<p><h5><b>Company: </b>'+response['people'][key]['company'] +'</h5></p>';
                append_content += '<p><h5><b>Job Title: </b>'+response['people'][key]['job_title'] +'</h5></p>';
                append_content += '<p><h5><b>LinkedIn: </b><a href='+response['people'][key]['linkedInLink']+'>'+'Click Me'+'</a></h5></p>';
                append_content += '<p><h6><b>Quotation: </b>'+response['people'][key]['quotation'] +'</h6></p>';
                append_content +='</div><br>';                 
              });  
 
              append_content +='</dd>'
              +'</dl>';             
              append_content +='<dl class='+'dl-horizontal'+'>'
              +'<dt>Article Title</dt>'
              +'<dd> '            
              + '<a href='+response['url'] + '>'+response['title']+'</a>'
              +'</dd>'
              +'</dl>'
              +'<dl class='+'dl-horizontal'+'>'
              +'<dt>Author Name</dt>'
              +'<dd> '            
              + response['author']
              +'</dd>'            
              +'</dl>'
              +'<dl class='+'dl-horizontal'+'>'
              +'<dt>Source</dt>'
              +'<dd> '            
              + response['original_source']
              +'</dd>'            
              +'</dl>'
              +'<br>';                            
            }           

          } else {
            alert("fail");
            append_content += '<dl class='+'dl-horizontal'+'>'
            +'<dt>Source Info</dt>'
            +'<dd>No source found</dd>'
            +'</dl>';                    
          }
          var end ='<div id='+'bottom'+'></div>';
          $('#results').append(append_content);  
          $('#results').append(end);    

        })
        if (--i) myloop(i);
      }, 5000)
    })(12);

  });
});


