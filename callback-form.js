///////////////////////////////////////////////////////////////////////////////////////
//
// Форма обратной связи Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Версия для мобильной версии сайта
//
// Инструкция по применению:
//
// 1. Включить скрип в список загружаемых скрипров на странице
// 2. На странице, где должна быть размещена форма поместить тег <div id='callback-form-wrapper'></div>
// 
// Пример:
/*
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
<script src="/CMSScripts/Custom/jquery.validate.js" type="text/javascript"></script>
<script src="/CMSScripts/Custom/jquery.maskedinput.js" type="text/javascript"></script>
<script src="/CMSScripts/Custom/purl.js" type="text/javascript"></script>
<link href="/CMSPages/GetResource.ashx?stylesheetname=jQueryMobileCryoCell" type="text/css" rel="stylesheet"/>
<link href="/CMSPages/GetResource.ashx?stylesheetname=Mobile" type="text/css" rel="stylesheet"/>

    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.core" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.jqm" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.android" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.android-ics" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.ios" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.sense-ui" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.wp" rel="stylesheet" type="text/css" />

    <link href="css/mobiscroll.animation.css" rel="stylesheet" type="text/css" />
    <script src="/CMSScripts/Custom//modernizr.js"></script>

    <script src="/CMSScripts/Custom//mobiscroll.core.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom//mobiscroll.datetime.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.select.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom//mobiscroll.jqm.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.ios.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.android.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.android-ics.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.wp.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom//mobiscroll.i18n.en.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.cn.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.tw.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.ru.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.de.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.es.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.fr.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.hu.js" type="text/javascript"></script>    
    <script src="/CMSScripts/Custom//mobiscroll.i18n.it.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.no.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.pt-BR.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom//mobiscroll.i18n.zh.js" type="text/javascript"></script>

<script src="/CMSScripts/Custom/mobile.js" type="text/javascript"></script>
<script src="/CMSScripts/Custom/callback-form.js" type="text/javascript"></script>
*/
//
////////////////////////////////////////////////////////////////////////////////////////

(function ($) {
	var callbackFormHTML = hereDoc(function() {/*!
<form id="callbackForm" action="http://promos.cryo-cell.com/fsg?pageId=beead716-6c3a-11e3-8d22-22000aa22559&variant=a" method="POST"> 
	<input type="hidden" name="pageId" value="beead716-6c3a-11e3-8d22-22000aa22559"/> 
	<input type="hidden" name="pageVariant" value="a"/> 
	<div> 
		<input type="hidden" name="url" value="" data-role="none" /> 
		<input type="hidden" name="ipad_id" value="" data-role="none" /> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="first_name"> 
			First name 
		</label> 
		<input name="first_name" id="first_name" placeholder="" value="" type="text" class="required"> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="last_name"> 
			Last name 
		</label> 
		<input name="last_name" id="last_name" placeholder="" value="" type="text" class="required"> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="due_date"> 
			Due date 
		</label> 
		<input name="due_date" id="due_date" placeholder="" value="" type="date"> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="phone_number"> 
			Phone 
		</label> 
		<input name="phone_number" id="phone_number" placeholder="" value="" type="tel" class="required"> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="email"> 
			E-mail 
		</label> 
		<input name="email" id="email" placeholder="" value="" type="email" class="required email"> 
	</div> 
	<div data-role="fieldcontain"> 
		<label for="doctor"> 
			Doctor 
		</label> 
		<input name="doctor" id="doctor" placeholder="" value="" type="text" class=""> 
	</div> 
</form> 
        <a data-role="button" href="#" class="save"> 
            Submit 
        </a> 
*/})
	
	var thankYouHTML = hereDoc(function() {/*!
	<h2>Thank you</h2> 
	Your request has been sent.<br />One of our client services advisors will contact you shortly. 
*/})
	
	var url = false;
	
	function hereDoc(f) {
	  return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}

	// Процедура кросс-доменной отправки содержимого формы ввода
	// Параметр - отправляемая форма ввода
	function crossDomainSubmit(item) {
		// Add the iframe with a unique name
		var uniqueString = "crossDomainForm-"+$("iframe").length;
		var iframe = document.createElement("iframe");
		document.body.appendChild(iframe);
		iframe.style.display = "none";
		try {
		  iframe.contentWindow.name = uniqueString;
		} catch(e) {
		  debugWrite('iframe.contentWindow.name error',e);
		}
		debugWrite('iframe.contentWindow.name',iframe.contentWindow.name);
	  
		// construct a form with hidden inputs, targeting the iframe
		var form = document.createElement("form");
		form.target = iframe.contentWindow.name;
		debugWrite('form.target',form.target);
		debugWrite('item.attr("action")',item.attr("action"));
		form.action = item.attr("action");
		debugWrite('form.action',form.action);
		debugWrite('item.attr("method")',item.attr("method"));
		form.method = item.attr("method");
		debugWrite('form.method',form.method);
	  
		// repeat for each parameter
		item.find("input").each(function(index, element) {
			var input = document.createElement("input");
			input.type = "hidden";
			debugWrite("element.name",element.name);
			input.name = element.name;
			debugWrite("input.name",input.name);
			debugWrite("element.value",element.value);
			input.value = element.value;
			debugWrite("input.value",input.value);
			form.appendChild(input);
		});
	  
		document.body.appendChild(form);
		form.submit();
	}
	
	function currentCallbackForm() { return $("#callbackForm"); }
	
	function clearForm() { 
		  $("input[name*='expected_delivery_date']").val("");
		  $("input[name*='due_date']").val("");
		  $("input[name*='phone']").val("");
		  $("input[name*='first_name']").val("");
		  $("input[name*='last_name']").val("");
		  $("input[name*='mail']").val("");
		  $("input").removeClass("error");
		  $(".error").remove();
		  $(".ErrorLabel").remove();
		  $(".EditingFormErrorLabel").remove();
	}
	
	function urldecode (str) {
	  // http://kevin.vanzonneveld.net
	  // +   original by: Philip Peterson
	  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +      input by: AJ
	  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +   improved by: Brett Zamir (http://brett-zamir.me)
	  // +      input by: travc
	  // +      input by: Brett Zamir (http://brett-zamir.me)
	  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +   improved by: Lars Fischer
	  // +      input by: Ratheous
	  // +   improved by: Orlando
	  // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
	  // +      bugfixed by: Rob
	  // +      input by: e-mike
	  // +   improved by: Brett Zamir (http://brett-zamir.me)
	  // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
	  // %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
	  // %        note 2: pages served as UTF-8
	  // *     example 1: urldecode('Kevin+van+Zonneveld%21');
	  // *     returns 1: 'Kevin van Zonneveld!'
	  // *     example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
	  // *     returns 2: 'http://kevin.vanzonneveld.net/'
	  // *     example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
	  // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
	  return decodeURIComponent((str + '').replace(/\+/g, '%20'));
	}
	
	// Функция вывода сообщений трассировки
	// Обработка try-catch требуется для совместимости с IE
	function debugWrite(a,b) {
		try {
	//		console.log(a,b);
			console.log(a+":"+b);
		} catch (e) {
		}
	}
	
	function showThankYou() {
		var page = currentCallbackForm().parent();
		page.children().remove();
		page.append(thankYouHTML);
	}
	
	function createCallbackForm(wrapper) {
		var page = $(wrapper);
		page.append(callbackFormHTML);
	
		// Разбор строки запроса на элементы
		try {
			url = $.url(window.location.toString());
		} catch (e) {
			debugWrite("$.url error",e);
		}
		
		debugWrite("Устанавливаем типы полей ввода","start");
		$("input[name*='expected_delivery_date']",page).attr("type","date");
		$("input[name*='due_date']",page).attr("type","date");
		$("input[name*='phone']",page).attr("type","tel");
		$("input[name*='mail']",page).attr("type","email");
		debugWrite("Устанавливаем типы полей ввода","end");
		
		debugWrite("Скрываем не используемые поля","start");
		$("label[id*='url']",page).parent().hide();
		$("label[id*='ipad_id']",page).parent().hide();
		$("input[id*='url']",page).parent().hide();
		$("input[id*='ipad_id']",page).parent().hide();
		//$("input[type='submit']",page).parent().hide();
		debugWrite("Скрываем не используемые поля","end");
		
		debugWrite("Заполняем поля ipad_id и url","start");
		try {
			$("input[name*='ipad_id']",page).val("Mobile Web Site");
			$("input[name*='url']",page).val(window.location.toString());
		} catch (e) {
			debugWrite('error',e);
		}
		debugWrite("Заполняем поля ipad_id и url","end");
	
		debugWrite("Заполняем элементы ввода значениями переданными в параметрах","start");
		try {
			url.attr("query").split("&").forEach(function (value,index) {
				var ar = value.split("=");
				debugWrite(ar[0],ar[1]);
				$("input[name*='"+ar[0]+"']").val(urldecode(ar[1]));
			});
		} catch (e) {
			debugWrite('url.attr("query").split("&").forEach error',e);
		}
		debugWrite("Заполняем элементы ввода значениями переданными в параметрах","end");
	
		// Проверка встроенной поддержки для <input type="date">
		// Если нет встроенной поддержки для <input type="date">,
		// то заменяем <input type="date"> на <input type="text">
		// и обрабатываем поле с помощью mobiscroll
		if (!Modernizr.inputtypes.date) {
			page.find("input[type='date']").attr("type","text").mobiscroll().date($.extend({theme:"jqm"},$.mobiscroll.i18n['en']));
		}
		
		debugWrite("Установка маски ввода (999) 999-9999","start");
		try {
			page.find("input[name*='phone']").mask("(999) 999-9999");
		} catch (e) {
			debugWrite('page.find("input[name*=\'phone\']").mask("(999) 999-9999") error',e);
		}
		debugWrite("Установка маски ввода (999) 999-9999","end");
	
		debugWrite("Установка валидации форм","start");
		try {
			page.find("form").validate();
		} catch (e) {
			debugWrite('page.find("form").validate() error',e);
		}
		debugWrite("Установка валидации форм","end");
	
		page.find(".save").bind("vclick",function(event) {
			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
			var isValid = false;
			debugWrite("Валидация формы обратной связи","start");
			try {
				var form = currentCallbackForm();
				debugWrite('form',form.html());
				isValid = form.valid();
			} catch (e) {
				debugWrite('form.valid() error',e);
				debugWrite("Ручная валидация формы обратной связи","start");
				$("input").removeClass("error");
				$(".error").remove();
				$(".ErrorLabel").remove();
				$(".EditingFormErrorLabel").remove();
				isValid = true;
				var form = currentCallbackForm();
				form.find("input.required").each(function(index, element) {
					debugWrite("Валидация элемента",element.getAttribute("name"));
					if(!element.value) {
						debugWrite("Элемент не валидный",element);
						isValid = false;
						debugWrite("Добавление сообщения об ошибке","start");
						//$(element).addClass("error");
						var error = document.createElement("label");
						error.setAttribute("for",element.getAttribute("name"));
						error.className = 'error';
						element.parentNode.appendChild(error);
						debugWrite("Добавление сообщения об ошибке","end");
					}
				});
				debugWrite("Ручная валидация формы обратной связи","end");
			}
			debugWrite("Валидация формы обратной связи","end");
			if (isValid) {
				debugWrite("Отправка формы обратной связи","start");
				try {
					var form = currentCallbackForm();
					form.ajaxSubmit({
						timeout:   3000,
						dataFilter: function( data, type ) {
							debugWrite("data:",data);
							debugWrite("type:",type);
						},
						success:    function() { 
							showThankYou();
						},
						beforeSend:		function(xhr, settings) {
							debugWrite("xhr:",xhr);
							debugWrite("settings:",settings);
						},
						error:		function(xhr, textStatus, thrownError) {
							// Here's where you handle an error response.
							// Note that if the error was due to a CORS issue,
							// this function will still fire, but there won't be any additional
							// information about the error.
							debugWrite("#callbackForm","Error to send form");
							debugWrite("xhr:",xhr);
							debugWrite("textStatus:",textStatus);
							debugWrite("thrownError:",thrownError);
							debugWrite("Ручная отправка кросс-доменной формы обратной связи","start");
							crossDomainSubmit(currentCallbackForm());
							showThankYou();
							debugWrite("Ручная отправка кросс-доменной формы обратной связи","end");
						}
					});
				} catch (e) {
					debugWrite('currentCallbackForm().ajaxSubmit error',e);
					debugWrite("Ручная отправка кросс-доменной формы обратной связи Попытка №2","start");
					try {
						crossDomainSubmit(currentCallbackForm());
						showThankYou();
					} catch(e) {
						debugWrite("crossDomainSubmit error",e);
					}
					debugWrite("Ручная отправка кросс-доменной формы обратной связи Попытка №2","end");
					
				}
				debugWrite("Отправка формы обратной связи","end");
			}
			return false;
		});
		
		page.find(".save").dblclick(function(event) {
			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
			showThankYou();
			return false;
		});
	
	}
	
	$(document).bind('pagebeforecreate', function( event, data ){
		debugWrite("document","pagebeforecreate");
		var wrapper = "#callback-form-wrapper";
		if($(wrapper).length>0) createCallbackForm(wrapper);
	});
	
	debugWrite("callback","form");
})(jQuery);
