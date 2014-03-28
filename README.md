Форма обратной связи Cryo-Cell International
http://cryo-cell.com

Разработчик RBA DESIGN INTERNATIONAL LLC
http://rbadesign.us

##Инструкция по применению:

1. Включить скрип в список загружаемых скриптов на странице
2. На странице, где должна быть размещена форма поместить тег <div id='callback-form-wrapper'></div>
Пример:

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
    <script src="/CMSScripts/Custom/modernizr.js"></script>

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

<script src="/CMSScripts/Custom/mobile.js" type="text/javascript"></script>
<script src="/CMSScripts/Custom/callback-form.js" type="text/javascript"></script>

или
1. Включить сам скрип и связанные с ним скрипты в список скриптов сайта
2. На странице, где должна быть размещена форма, поместить Web part с кодом или просто HTML код
со следующим кодом:

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
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-cn.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/jquery.ui.datepicker-tw.js" type="text/javascript"></script>
	<script src="/CMSScripts/Custom/saleforce-callback-form.js" type="text/javascript"></script>
	<script type="text/javascript">
	// Установка глобальной переменной culture равной коду текущей культуры
	(function($){

		$.culture = "{$=en|es-ES=es|ru-RU=ru$}";

	})(jQuery);
	</script>
	<div id='saleforce-callback-form-wrapper'></div>

 
