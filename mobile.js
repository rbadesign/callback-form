///////////////////////////////////////////////////////////////////////////////////////
//
// Мобильная версия сайта Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Инструкция по применению:
//
// 1. Сам скрипт и связанные с ним скрипты и стили объявить в хидере мастер-страницы 
/*
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=jQueryMobileCryoCell" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=Mobile" rel="stylesheet" type="text/css" />
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript">
	(function($){
		// Because the mobileinit event is triggered immediately,
		// you'll need to bind your event handler before jQuery Mobile is loaded. 
		$(document).bind("mobileinit", function(){
			$.mobile.ajaxEnabled = false;
			$.isMobile = true;
		});	
	})(jQuery);
	</script>
	<script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
	<script src="/CMSScripts/Custom/mobile.js" type="text/javascript"></script>
*/
///////////////////////////////////////////////////////////
(function ($) {
	// Функция вывода сообщений трассировки
	// Обработка try-catch требуется для совместимости с IE
	function debugWrite(a,b) {
		try {
	//		console.log(a,b);
			console.log(a+":"+b);
		} catch (e) {
		}
	}
	
	var init = function () {
		debugWrite("$.isMobile",$.isMobile);
		debugWrite("$.culture",$.culture);
		$("a").attr("data-ajax","false");
		$("#mainmenu").hide();
		$( ".mainmenu" ).unbind( "vclick" );
		$( ".mainmenu" ).bind( "vclick", function(event, ui) {
		  if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		  $("#mainmenu").toggle();
		});
	}
	
	$(document).bind('pagebeforecreate',init);
	
	$(document).ready(function(){
		$("a").attr("data-ajax","false");
	});
	$(document).ajaxStop(function(){
		$("a").attr("data-ajax","false");
	});
	
})(jQuery);
