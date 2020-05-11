
/* Change website to Spanish */

const translateToEnglish = () => {
  $(".english").css("display", "block")
  $(".spanish").css("display", "none")
}


const translateToSpanish = () => {
  $(".english").css("display", "none")
  $(".spanish").css("display", "block")
}




/* Send message to email */
/* 
$('#send').on('click', function(e) {
  e.preventDefault();
  subject = $('#subject').val();
  body = $('#body').val();
  window.location = "mailto:ccnn1010@gmail.com?subject=" + subject + "&body=" + body;
});
 */

/* $('#send').on('click', function(e) {
  e.preventDefault();
  defaultContactFormName = $('#defaultContactFormName').val();
  defaultContactFormEmail = $('#defaultContactFormEmail').val();
  exampleFormControlTextarea2 = $('#exampleFormControlTextarea2').val();
  window.location = "mailto:ccnn1010@gmail.com?defaultContactFormName=" + defaultContactFormName + "&defaultContactFormEmail=" + defaultContactFormEmail; + "&exampleFormControlTextarea2=" + exampleFormControlTextarea2;
});


 */





/* $(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });   

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
    
    function dotnavigation(){
             
        var numSections = $('section').length;
        
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          console.log(ele.next().html());
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          
          if(docTop >= thisTop && (docTop < nextTop)){
            $('#dot-nav li').eq(i).addClass('active');
          }
        });   
    }

    /* get clicks working */
    /* $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });  */

/* end dot nav */
/* }); */
