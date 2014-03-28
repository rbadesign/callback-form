///////////////////////////////////////////////////////////////////////////////////////
//
// Форма обратной связи Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Версия для Salesforce 
// Совместимо с основной версией сайта
// Совместимо с мобильной версией сайта
//
// Валидация полей:
// 1. Поля с датой проверяются на не превышение 10-ти месяцев от текущей даты
// 2. Телефон проверяется на номер в формате США
// 3. Email проверяется на формат
//
// Используются нижеследующие компоненты:
// jQuery http://jquery.com
// jQuery UI https://jqueryui.com
// jQuery Timepicker Addon https://github.com/trentrichardson/jQuery-Timepicker-Addon
// jQuery Validation Plugin http://jqueryvalidation.org
// Mobiscroll https://github.com/acidb/mobiscroll
//
// Инструкция по применению:
//
// 1. Сам скрипт и связанные с ним скрипты и стили объявить в хидере страницы 
// 1.1. Для страниц мобильной версии исключить скрипт jquery
// 2. На странице, где должна быть размещена форма, поместить <div id='saleforce-callback-form-wrapper'></div>
/*
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
    <link href="/CMSPages/GetResource.ashx?stylesheetname=jquery-ui-timepicker-addon" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.core" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.jqm" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.android" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.android-ics" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.ios" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.sense-ui" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.wp" rel="stylesheet" type="text/css" />
    <link href="/CMSPages/GetResource.ashx?stylesheetname=mobiscroll.animation" rel="stylesheet" type="text/css" />

//	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.maskedinput.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-addon.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/purl.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/modernizr.js"></script>
	<script src="/CMSScripts/Custom/date.format.js"></script>

	<script src="/CMSScripts/Custom/jquery.ui.datepicker-en.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-es.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-it.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-ru.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-cn.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-tw.js" type="text/javascript"></script>
 
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-en.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-es.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-it.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-ru.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-cn.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery-ui-timepicker-tw.js" type="text/javascript"></script>
 
    <script src="/CMSScripts/Custom/mobiscroll.core.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.datetime.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.select.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom/mobiscroll.jqm.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.ios.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.android.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.android-ics.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.wp.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom/mobiscroll.i18n.en.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.i18n.cn.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.i18n.tw.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.i18n.ru.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.i18n.es.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/mobiscroll.i18n.it.js" type="text/javascript"></script>

    <script src="/CMSScripts/Custom/phoneUS.js" type="text/javascript"></script>
    <script src="/CMSScripts/Custom/zipcodeUS.js" type="text/javascript"></script>

	<script type="text/javascript">
	(function($){
		// Устанавливаем глобальную переменную culture равной коду текущей культуры
		$.culture = "{$=en|es-ES=es|ru-RU=ru$}";
	})(jQuery);
	</script>
	<script src="/CMSScripts/Custom/saleforce-callback-form.js" type="text/javascript"></script>

    <link href="/CMSPages/GetResource.ashx?stylesheetname=saleforce-callback-form" rel="stylesheet" type="text/css" />

	---------------------------------------------------

	<div id='saleforce-callback-form-wrapper'></div>
*/
//
// Использование:
// http://www.cryo-cell.com/mobile/contact
// http://www.cryo-cell.com/request-information
//
/*
Особенности использования в Kentico:
1. Kentico переносит ВСЕ скрипты из контента в хидер
2. Kentico загружает контент асинхронно
3. Поэтому скрипт может увидеть переменные, определённые в контенте, только если он сам будет объявлен в контенте. В этом случае объявление переменных и объявление скрипта будут вместе перенесены в хидер сразу же после загрузки контента, в порядке их объявления.
4. Скрипту объявленному в контенте недоступны переменные и события объявленные в хидере, поскольку на момент начала генерации страницы начальный хидер уже создан и работает, а контент ещё отсутствует и не проинициализирован, а когда контент наконец-то загрузится, то скрипты в хидере уже завершат свою работу и новым скриптпм перенесённым из контента в хидер просто уже ничего не достаётся из начальных событий - это основное отличие страниц Kentico от обычных страниц без асинхронной загрузки контента.
6. В частности по этому попытки обработать события jQueryMobile в прилинкованном скрипте в контенте безуспешны
8. Соответственно, события onload, ready ведут себя по другому, поскольку, поскольку из-за асинхронности Kentico они создаются не тогда, когда страница полностью загружена и готова к использованию, а в момент завершения текущего пула асинхронных загрузок, в который входит данный прилинкованный скрипт
*/
////////////////////////////////////////////////////////////////////////////////////////

(function ($) {
	
	var callbackFormHTML = hereDoc(function() {/*!
<form id="callbackForm" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
<!-- Production 
<form id="callbackForm" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"> -->
<!-- We need to add some logic there to pass a language used on the form to Salesforce as a new custom field and also after the form post to redirect to a localized thank you page. -->
<input type=hidden name="culture" value="en">
<input type=hidden name="dateFormat" value="">
<input type=hidden name="oid" value="00D30000001HWbP">
<input type=hidden name="retURL" value="/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo">
<!-- Testing  -->
<input type="hidden" name="00Ne0000000du6u"id="00Ne0000000du6u"  title="Primary Contact Role" value="--None--" />

<input type="hidden" name="debug" value="1" />
<input type="hidden" name="debugEmail" value='protopopov@rba-design.ru' />
<!-- Debugging Values
<input type="hidden" name="debugEmail" value='omikulinsky@cryo-cell.com' />
-->

<input type="hidden" name="company" id="company" value="unBounce" />
<input type="hidden" name="lead_source" id="lead_source"  value="http://www.cryo-cell.com/request-information" />

<table class="EditingFormTable"><tbody><tr class="" style=""><td class="EditingFormLabelCell">
<label for="first_name">First Name</label></td><td><input  id="first_name" maxlength="40" name="first_name" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="last_name">Last Name</label></td><td><input  id="last_name" maxlength="80" name="last_name" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="email">Email</label></td><td><input  id="email" maxlength="80" name="email" size="40" type="text" class="required" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="phone">Phone</label></td><td><input  id="phone" maxlength="40" name="phone" size="40" type="text" class="required phoneUS" /></td></tr><tr class="" style=""><td class="EditingFormLabelCell">
<label for="due_date">Due Date:</label></td><td><span class="dateInput dateOnlyInput"><input  id="00Ne0000000du5U" name="00Ne0000000du5U" size="40" type="date" class="required today date10M" /></span></td></tr>
</tbody></table>

<center><input data-role="button" type="submit" name="Submit" value="Submit" class="save" onSubmit="javascript: void(0)"></center>
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
	// Значения полей формы обратной связи
	// Задаются в виде обычного текста
	var formValues = {
		en: {
			retURL: "/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
		},
		es: {
			retURL: "/resources/request-forms/thank-you-es?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
		},
		ru: {
			retURL: "/resources/request-forms/thank-you-ru?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
		},
		it: {
			retURL: "/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
		},
		cn: {
			retURL: "/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
		},
		tw: {
			retURL: "/resources/request-forms/thank-you?utm_source=web&utm_medium=form&utm_campaign=RequestInfo",
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
	
	function flatTable(t) {
		$("tr",t).each(function(index, row) {
			var html = "<div data-role='fieldcontain'>";
			$("th,td",row).each(function(index, element) {
				html += $(element).html()
			});
			html += "</div>";
			$(t).before($(html));
         });
		$(t).remove();
	}
	
	function createCallbackForm(wrapper) {
		debugWrite("createCallbackForm","start");
		debugWrite("typeof $.mobile",typeof $.mobile);
		debugWrite("$.isMobile",$.isMobile);
		debugWrite("$.culture",$.culture);
		var page = $(callbackFormHTML);
		$(wrapper).after(page);
		$(wrapper).remove();
		
		if ($.isMobile) {
			$("table",page).each(function(index, element) {
                flatTable(element);
            });
		}
		
		// Разбор строки запроса на элементы
		try {
			url = $.url(window.location.toString());
		} catch (e) {
			debugWrite("$.url error",e);
		}
		
		// Использование в качестве кода языка значения ранее установленной глобальной переменной $.culture
		var lang = $.culture||"en";
		
		// Перевод заголовков полей формы на указанный язык
		for(var lblFor in formLabels[lang]) {
			page.find("label[for='"+lblFor+"']").text(formLabels[lang][lblFor]);
		}
		// Установка значений полей формы в предопределённые значения
		for(var inputName in formValues[lang]) {
			page.find("input[name='"+inputName+"']").val(formValues[lang][inputName]);
		}
		// Установка поля языка
		// We need to add some logic there to pass a language used on the form to Salesforce as a new custom field
		// and also after the form post to redirect to a localized thank you page.
		page.find("input[name='culture']").attr('value',lang);
		
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
	
		debugWrite("createCallbackForm","end");
	}
	
	$(document).bind('pagebeforecreate', function( event, data ){
		debugWrite("document","pagebeforecreate");
		var wrapper = "#saleforce-callback-form-wrapper";
		if($(wrapper).length>0) createCallbackForm(wrapper);
	});
	
	$(document).ready(function(){
		debugWrite("document","ready");
		var wrapper = "#saleforce-callback-form-wrapper";
		if($(wrapper).length>0) createCallbackForm(wrapper);
		// Использование в качестве кода языка значения ранее установленной глобальной переменной $.culture
		var lang = $.culture||"en";
		
		debugWrite("Обработка поля date если нет встроенной поддержки для <input type='date'>","start");
		// Проверка встроенной поддержки для <input type="date">
//		if (!Modernizr.inputtypes.date) {
			// Если нет встроенной поддержки для <input type="date">,
			// то заменяем <input type="date"> на <input type="text">
			if ($.isMobile) {
				var mask = $.mobiscroll.i18n[ lang ].dateFormat+"yy";
				$("input[nane='dateFormat']",currentCallbackForm()).val(mask);
				$("input[type='date']",currentCallbackForm()).each(function(index, element) {
					// Обработка поля due_date если нет встроенной поддержки для <input type="date">
					$(element).attr("type","text");
					$(element).val(dateFormat(mask));
					$(element).mobiscroll().date(
							$.extend({},$.mobiscroll.i18n[ lang ],{
								theme:"ios7",
								timeFormat:"HH:ii",
       							timeWheels: 'HHii',
							}));
				});	
			} else {
				var mask = $.datepicker.regional[ lang ].dateFormat+"yy";
				$("input[nane='dateFormat']",currentCallbackForm()).val(mask);
				// и назначаем обработчиком jquery.datepicker
				$("input[type='date']",currentCallbackForm()).each(function(index, element) {
					// Обработка поля due_date если нет встроенной поддержки для <input type="date">
					$(element).attr("type","text"); 
					$(element).val(dateFormat(mask));
					$(element).datepicker(
							$.extend({},$.datepicker.regional[ lang ],{
								showButtonPanel: true,
								minDate: 0, 
								maxDate: "+10M",
							}));
				});	
			}
//		}
		debugWrite("Обработка поля date если нет встроенной поддержки для <input type='date'>","end");

		debugWrite("Обработка поля time если нет встроенной поддержки для <input type='time'>","start");
		// Проверка встроенной поддержки для <input type="time">
//		if (!Modernizr.inputtypes.time) {
			// Если нет встроенной поддержки для <input type="time">,
			// то заменяем <input type="date"> на <input type="text">
			if ($.isMobile) {
				$("input[type='time']",currentCallbackForm()).each(function(index, element) {
					// Обработка поля time если нет встроенной поддержки для <input type="time">
					$(element).attr("type","text");
					$(element).mobiscroll().time(
							$.extend({},$.mobiscroll.i18n[ lang ],{
								theme:"ios7",
								timeFormat:"HH:ii",
       							timeWheels: 'HHii',
							}));
				});	
			} else {
				// и назначаем обработчиком jquery.timepicker
				$("input[type='time']",currentCallbackForm()).each(function(index, element) {
					// Обработка поля time если нет встроенной поддержки для <input type="time">
					$(element).attr("type","text"); 
					$(element).timepicker(
							$.extend({},$.timepicker.regional[ lang ],{
								showButtonPanel: true,
							}));
				});	
			}
//		}
		debugWrite("Обработка поля time если нет встроенной поддержки для <input type='time'>","end");

		debugWrite("Установка маски ввода (999) 999-9999","start");
		try {
			$("input[name*='phone']",currentCallbackForm()).mask("(999) 999-9999");
		} catch (e) {
			debugWrite('page.find("input[name*=\'phone\']").mask("(999) 999-9999") error',e);
		}
		debugWrite("Установка маски ввода (999) 999-9999","end");
	
		debugWrite("Установка валидации форм","start");
		try {
			currentCallbackForm().validate();
		} catch (e) {
			debugWrite('page.find("form").validate() error',e);
		}
		debugWrite("Установка валидации форм","end");
	});

	$(document).ready(function(){
		$("a").attr("data-ajax","false");
	});
	$(document).ajaxStop(function(){
		$("a").attr("data-ajax","false");
	});
			
	debugWrite("saleforce-callback","form");
	debugWrite("$.isMobile",$.isMobile);
	debugWrite("$.culture",$.culture);
})(jQuery);
