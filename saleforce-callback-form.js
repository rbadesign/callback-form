///////////////////////////////////////////////////////////////////////////////////////
//
// Форма обратной связи Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Версия для Salesforce 
//
// Инструкция по применению:
//
// 1. Включить сам скрип и связанные с ним скрипты в список скриптов сайта
// 2. На странице, где должна быть размещена форма, поместить Web part с кодом или просто HTML код
// со следующим кодом:
/*
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
	<script src="/CMSScripts/Custom/jquery.validate.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.maskedinput.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/purl.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/modernizr.js"></script>
	<script src="/CMSScripts/Custom/date.format.js"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-en.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-es.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-it.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-ru.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-zh-CN.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-zh-TW.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/saleforce-callback-form.js" type="text/javascript"></script>
	<script type="text/javascript">
	// Установка глобальной переменной culture равной коду текущей культуры
	(function($){

		$.culture = "{$=en|es-ES=es|ru-RU=ru$}";

	})(jQuery);
	</script>
	<div id='saleforce-callback-form-wrapper'></div>
*/
////////////////////////////////////////////////////////////////////////////////////////

(function ($) {
	
	var callbackFormHTML = hereDoc(function() {/*!
<form id="callbackForm" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
<!-- Production 
<form id="callbackForm" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"> -->
<input type=hidden name="oid" value="00D30000001HWbP">
<input type=hidden name="retURL" value="/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo">
<!-- Testing  -->
<input type="hidden" name="00Ne0000000du6u"id="00Ne0000000du6u"  title="Primary Contact Role" value="--None--" />

<!-- Debugging Values
<input type="hidden" name="debug" value="1" />
<input type="hidden" name="debugEmail" value='omikulinsky@cryo-cell.com' />
-->

<input type="hidden" name="company" id="company" value="unBounce" />
<input type="hidden" name="lead_source" id="lead_source"  value="http://www.cryo-cell.com/request-information" />

<table class="EditingFormTable"><tbody><tr class="" style=""><td class="EditingFormLabelCell">
<label for="first_name">First Name</label></td><td><input  id="first_name" maxlength="40" name="first_name" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="last_name">Last Name</label></td><td><input  id="last_name" maxlength="80" name="last_name" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="email">Email</label></td><td><input  id="email" maxlength="80" name="email" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="phone">Phone</label></td><td><input  id="phone" maxlength="40" name="phone" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="due_date">Due Date:</label></td><td><span class="dateInput dateOnlyInput"><input  id="00Ne0000000du5U" name="00Ne0000000du5U" size="40" type="date" class="required today" /></span></td></tr>
<tr></tr>
<tr><td></td><td><input type="submit" name="Submit" value="Submit" class="save" onSubmit="javascript: void(0)"></td></tr>
</tbody></table>
</form>
*/})

	// Названия полей формы обратной связи
	// Задаются в виде обычного текста
	var formLabels = {
		en: {
			first_name: "First Name",
			last_name: "Last Name",
			due_date: "Due Date:",
			phone: "Phone",
			email: "Email",
			doctor: "Doctor",
		},
		es: {
			first_name: "Nombre",
			last_name: "Apellido",
			due_date: "Fecha estimada de parto",
			phone: "Teléfono",
			email: "Correo electrónico",
		},
		ru: {
			first_name: "Имя",
			last_name: "Фамилия",
			due_date: "Ожидаемая дата родов",
			phone: "Номер телефона",
			email: "Электронная почта",
		},
		it: {
			first_name: "Nome",
			last_name: "Cognome",
			due_date: "Data di arrivo",
			phone: "Numero di telefono",
			email: "Email",
		},
		cn: {
			first_name: "名",
			last_name: "姓",
			due_date: "预产期",
			phone: "电话号码",
			email: "电子邮件",
		},
		tw: {
			first_name: "名",
			last_name: "姓",
			due_date: "預產期",
			phone: "電話號碼",
			email: "電子郵件",
		}
	};
	
	var thankYouHTML = hereDoc(function() {/*!
	<h2>Thank you</h2> 
	Your request has been sent.<br />One of our client services advisors will contact you shortly. 
*/})
	
	var url = false;
	
	// This method is a JavaScript extension to the ECMA-262 standard; as such it may not be present in other 
	// implementations of the standard. To make it work you need to add following code at the top of your script:
	if (!Array.prototype.forEach)
	{
	  Array.prototype.forEach = function(fun /*, thisp*/)
	  {
		var len = this.length;
		if (typeof fun != "function")
		  throw new TypeError();
	
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
		  if (i in this)
			fun.call(thisp, this[i], i, this);
		}
	  };
	}

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
			if(element.name!="submit"){
				var input = document.createElement("input");
				input.type = "hidden";
				debugWrite("element.name",element.name);
				input.name = element.name;
				debugWrite("input.name",input.name);
				debugWrite("element.value",element.value);
				input.value = element.value;
				debugWrite("input.value",input.value);
				form.appendChild(input);
			}
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
		
		// Использование в качестве кода языка значения ранее установленной глобальной переменной $.culture
		lang = $.culture;
		
		// Перевод заголовков полей формы на указанный язык
		for(var lblFor in formLabels[lang]) {
			page.find("label[for='"+lblFor+"']").text(formLabels[lang][lblFor]);
		}
		
		debugWrite("Устанавливаем типы полей ввода","start");
		$("input[name*='expected_delivery_date']",page).attr("type","date");
		$("input[name*='due_date']",page).attr("type","date");
		$("input[name*='phone']",page).attr("type","tel");
		$("input[name*='mail']",page).attr("type","email");
		debugWrite("Устанавливаем типы полей ввода","end");
			
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
		// и назначаем обработчиком jquery.datepicker
//		if (!Modernizr.inputtypes.date) {
			page.find("input[type='date']").each(function(index, element) {
				// Обработка поля due_date если нет встроенной поддержки для <input type="date">
				debugWrite("Обработка поля due_date если нет встроенной поддержки для <input type='date'>","start");
               	$(element).attr("type","text"); 
				$(element).datepicker(
						$.extend({
							showButtonPanel: true,
							minDate: 0, 
							maxDate: "+10M",
						}, $.datepicker.regional[ lang ] ));
				debugWrite("Обработка поля due_date если нет встроенной поддержки для <input type='date'>","end");
            });	
//		}

		debugWrite("Установка текущей даты","start");
		page.find(".today").each(function(index, element) {
			$(element).val((new Date()).format($.datepicker.regional[ lang ].dateFormat+"yy"));
		});
		debugWrite("Установка текущей даты","end");
		
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
	
	$(document).ready(function(){
		debugWrite("document","ready");
		var wrapper = "#saleforce-callback-form-wrapper";
		if($(wrapper).length>0) createCallbackForm(wrapper);
	});

	$(document).ready(function(){
		$("a").attr("data-ajax","false");
	});
	$(document).ajaxStop(function(){
		$("a").attr("data-ajax","false");
	});
	
	$(document).bind("mobileinit", function(){
		$.mobile.ajaxEnabled = false;
	});	
	
	debugWrite("callback","form");
})(jQuery);
