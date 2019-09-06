$( document ).ready(function() {
	var pageName;
	var iconUrl;
	$('body').append('<button id="btnPanic" style="border-radius: 100px;background: #000;opacity: 0.3;filter: alpha(opacity=30);text-align: center;border: none;width: 75px;height: 75px;color: #fff;position:fixed;bottom:25px;right:25px;cursor:pointer;z-index: 3001;">Panic!</button>');
   $('#btnPanic').on('click',function(){
	   if($('#btnPanic').text() == 'Panic!'){
		   $('body').append('<div id="panicLayer" style="background-color: #000;z-index: 3000;position: absolute;top: 0px;height: '+$(document).height()+'px;width: '+$(document).width()+'px;left: 0px;"><iframe style="position: absolute;top: 0px;height: 100%;width: 100%;left: 0px;" src="https://en.wikipedia.org/wiki/Tree"></iframe></div>');
		   pageName = document.title;
		   document.title = 'Tree';
		   if($('link[rel="shortcut icon"]')[0]){
				iconUrl = $('link[rel="shortcut icon"]'). attr('href');
				$('link[rel="shortcut icon"]').remove();
			}
			$('head').append('<link rel="shortcut icon" href="https://www.wikipedia.org/static/favicon/wikipedia.ico">');
		   
			window.history.pushState("", "", "?thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&thetree=kjbkbksiu23hiediu23uewbdiu3de&");
		  
		   $('video').each(function(){
				videojs($(this)[0]).pause();
			});
		   $('#btnPanic').text('UnPanic!');
	   }else{
		   $('#panicLayer').remove();
		   document.title = pageName;
		    if($('link[rel="shortcut icon"]')[0]){
				$('link[rel="shortcut icon"]').remove();
				if(iconUrl !== 'undefined'){
					$('head').append('<link rel="shortcut icon" href="'+iconUrl+'">');
				}
			}
		   $('#btnPanic').text('Panic!');
	   }
   });
});
