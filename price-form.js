///////////////////////////////////////////////////////////////////////////////////////
//
// Форма расчёта тарифа Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Совместимо с основной версией сайта
// Совместимо с мобильной версией сайта
// Совместимо с bootstrap темой
// Совместимо с centerElementContent
// Совместимо с fullScreenElement
// Совместимо с windowBorderElement
//
// Используются нижеследующие компоненты:
// jQuery http://jquery.com
// jQuery UI https://jqueryui.com
// LINQ for JavaScript http://linqjs.codeplex.com/
// Shuffle Letters http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
//
// Инструкция по применению:
//
// 1. Сам скрипт и связанные с ним скрипты и стили объявить в хидере страницы 
// 1.1. Для страниц мобильной версии исключить скрипт jquery
// 2. На странице, где должна быть размещена форма, поместить <div id='saleforce-callback-form-wrapper'></div>
/*
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
    <script type="text/javascript" src="/CMSScripts/Custom/linq.min.js"></script>
//	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/CMSScripts/Custom/jquery.linq.js"></script>
    <script type="text/javascript" src="/CMSScripts/Custom/jquery.shuffleLetters.js"></script>
	<script type="text/javascript">
	(function($){
		// Устанавливаем глобальную переменную culture равной коду текущей культуры
		$.culture = "{$=en|es-ES=es|ru-RU=ru$}";
	})(jQuery);
	</script>
	<script src="/CMSScripts/Custom/price-form.js" type="text/javascript"></script>

    <link href="/CMSPages/GetResource.ashx?stylesheetname=price-form" rel="stylesheet" type="text/css" />

	---------------------------------------------------

	<div id='price-form-wrapper'></div>
*/
///////////////////////////////////////////////////////////////////////////////////////
(function($) {
    $.priceFormWrapper = "#price-form-wrapper";
    $.priceColumns = {
        en: {
            base: {
                location: "Location",
                numberOfBabies: "Number of Babies",
                clientType: "Client Type",
                planType: "Plan Type",
                service: "Service",
                option: "Fee",
                total: "Total - Enter quoted price",
            },
            umbilicalCordBlood: {
                base: "Umbilical Cord Blood",
            },
            umbilicalCordBloodAndTissue: {
                base: "Umbilical Cord Blood and Tissue",
            },
            menstrualStemCell: {
                base: "Menstrual Stem Cell",
            },
            location: {
                local: "Tampa",
                puertoRico: "Puerto Rico",
                domestic: "U.S.",
            },
            numberOfBabies: {
                single: "Single",
                twins: "Twins",
                triplets: "Triplets",
                quadruplets: "Quadruplets",
            },
            clientType: {
                newClient: "New Client",
                returningClient: "Returning Client",
            },
            planType: {
                annual: "Annual",
                twentyOneYears: "21 Years",
            },
            service: {
                umbilicalCordBlood: "Umbilical Cord Blood",
                umbilicalCordBloodAndTissue: "Umbilical Cord Blood and Tissue",
                menstrualStemCell: "Menstrual Stem Cell",
            },
            option: {
                bloodProcessingAndTesting: "Cord Blood Processing & Testing Fee",
                tissueProcessingAndTesting: "Cord Tissue Processing & Testing Fee",
                menstrualProcessingAndTesting: "Menstrual Processing & Testing Fee",
                annualStorage: "Annual Storage Fee",
                medicalCourier: "Medical Courier Fee",
                discount: "Discount",
                couponAmount: "Coupon Amount",
            },
            summary: {
                base: "Summary",
                planType: "Plan Type",
                bloodProcessingAndTesting: "Cord Blood Processing & Testing Fee",
                tissueProcessingAndTesting: "Cord Tissue Processing & Testing Fee",
                menstrualProcessingAndTesting: "Menstrual Processing & Testing Fee",
                annualStorage: "Annual Storage Fee",
                medicalCourier: "Medical Courier Fee",
                discount: "Discount",
                couponAmount: "Coupon Amount",
                total: "Total",
                savings: "Your Savings Is",
            },
        },
        es: {
            base: {
                location: "Location",
                numberOfBabies: "Número de bebés",
                clientType: "Tipo de cliente",
                planType: "Tipo de plan",
                service: "Service",
                option: "Fee",
                total: "Total - Enter quoted price",
            },
            umbilicalCordBlood: {
                base: "Umbilical Cord Blood Service",
            },
            umbilicalCordBloodAndTissue: {
                base: "Umbilical Cord Blood and Tissue",
            },
            menstrualStemCell: {
                base: "Menstrual Stem Cell",
            },
            location: {
                local: "Tampa",
                puertoRico: "Puerto Rico",
                domestic: "U.S.",
            },
            numberOfBabies: {
                single: "Único",
                twins: "Gemelos",
                triplets: "Trillizos",
                quadruplets: "Cuatrillizos",
            },
            clientType: {
                newClient: "Nuevo cliente",
                returningClient: "Cliente existente",
            },
            planType: {
                annual: "Anual",
                twentyOneYears: "21 años",
            },
            service: {
                umbilicalCordBlood: "Umbilical Cord Blood",
                umbilicalCordBloodAndTissue: "Umbilical Cord Blood and Tissue",
                menstrualStemCell: "Menstrual Stem Cell",
            },
            option: {
                bloodProcessingAndTesting: "Cord Blood Processing & Testing Fee",
                tissueProcessingAndTesting: "Cord Tissue Processing & Testing Fee",
                menstrualProcessingAndTesting: "Menstrual Processing & Testing Fee",
                annualStorage: "Annual Storage Fee",
                medicalCourier: "Medical Courier Fee",
                discount: "Discount",
                couponAmount: "Coupon Amount",
            },
            summary: {
                base: "Summary",
                planType: "Plan Type",
                bloodProcessingAndTesting: "Cord Blood Processing & Testing Fee",
                tissueProcessingAndTesting: "Cord Tissue Processing & Testing Fee",
                menstrualProcessingAndTesting: "Menstrual Processing & Testing Fee",
                annualStorage: "Annual Storage Fee",
                medicalCourier: "Medical Courier Fee",
                discount: "Discount",
                couponAmount: "Coupon Amount",
                total: "Total",
                savings: "Your Savings Is",
            },
        },
        ru: {
            base: {
                location: "Месторасположение",
                numberOfBabies: "Количество новорожденных",
                clientType: "Тип клиента",
                planType: "Тарифный план",
                service: "Услуга",
                option: "Тариф",
                total: "Итого - стартовый тариф",
            },
            umbilicalCordBlood: {
                base: "Хранение пуповинной крови",
            },
            umbilicalCordBloodAndTissue: {
                base: "Хранение пуповинной крови и ткани",
            },
            menstrualStemCell: {
                base: "Хранение менструальных клеток",
            },
            location: {
                local: "Тампа",
                puertoRico: "Пуэрто-Рико",
                domestic: "США",
            },
            numberOfBabies: {
                single: "Один",
                twins: "Двойня",
                triplets: "Тройняшки",
                quadruplets: "Четверняшки",
            },
            clientType: {
                newClient: "Новый клиент",
                returningClient: "Постоянный клиент",
            },
            planType: {
                annual: "1-год",
                twentyOneYears: "21-год",
            },
            service: {
                umbilicalCordBlood: "Хранение пуповинной крови",
                umbilicalCordBloodAndTissue: "Хранение пуповинной крови и ткани",
                menstrualStemCell: "Хранение менструальных клеток",
            },
            option: {
                bloodProcessingAndTesting: "Плата за обработку и тестирование пуповинной крови",
                tissueProcessingAndTesting: "Плата за обработку и тестирование пуповинной ткани",
                menstrualProcessingAndTesting: "Плата за обработку и тестирование менструальных клеток",
                annualStorage: "Плата за годовое хранение",
                medicalCourier: "Плата за вызов курьера",
                discount: "Скидка",
                couponAmount: "Купон",
            },
            summary: {
                base: "Суммарно",
                planType: "Тарифный план",
                bloodProcessingAndTesting: "Плата за обработку и тестирование пуповинной крови",
                tissueProcessingAndTesting: "Плата за обработку и тестирование пуповинной ткани",
                menstrualProcessingAndTesting: "Плата за обработку и тестирование менструальных клеток",
                annualStorage: "Плата за годовое хранение",
                medicalCourier: "Плата за вызов курьера",
                discount: "Скидка",
                couponAmount: "Купон",
                total: "Итого - стартовый тариф",
                savings: "Ваша экономия",
            },
        },
    };
    var priceFormHtml = hereDoc(function() {/*!
<form action="" method="get">
<p style="width:750px;height:50px;border:0;" >
Each family’s budget is unique. That’s why we don’t take a one-size-fits-all approach to pricing and payments for cord blood and tissue banking. Calculate your stem cell banking costs and we’ll recommend payment plans that may fit your family’s budget.</p>
<div class="row">
        <div class="col-md-6">
<div class="row">
        <div class="col-md-12">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-hover table-condensed">
  <tr>
    <td width="25%" align="left" class="EditingFormLabelCell" scope="col"><label for="base:location">Location</label></td>
    <td width="75%" class="EditingFormValueCell" scope="col">
            <div id="base:location" class="buttonset" data-toggle="buttons" data-role="controlgroup" data-type="horizontal">
             <label class="btn btn-info active" for="location:domestic">
              <input name="base:location" type="radio" value="domestic" checked="checked" price-role="input" />
                In the U.S.</label>
           	<label class="btn btn-info" for="location:local">
                <input name="base:location" type="radio" value="local" price-role="input" />
                Local</label>
            <label class="btn btn-info" for="location:puertoRico">
                <input type="radio" name="base:location" value="puertoRico" price-role="input" />
                Puerto Rico</label>
        </div>
</td>
    </tr>
  <tr>
    <td width="25%" align="left" class="EditingFormLabelCell" scope="col"><label for="base:clientType">Client Type</label></td>
    <td width="75%" class="EditingFormValueCell" scope="col">
         <div id="base:clientType" class="buttonset" data-role="controlgroup" data-type="horizontal" data-toggle="buttons">
            <label class="btn btn-info active" for="clientType:newClient">
            <input name="base:clientType" type="radio" value="newClient" checked="checked" price-role="input" />
            New Cryo-Cell Client</label>
            <label class="btn btn-info" for="clientType:returningClient">
            <input type="radio" name="base:clientType" value="returningClient" price-role="input" />
            Returning Cryo-Cell Client</label>      	        </div>
</td>
    </tr>
  <tr>
    <td width="25%" align="left" class="EditingFormLabelCell" scope="col"><label for="base:numberOfBabies">Number of Babies</label></td>
    <td width="75%" class="EditingFormValueCell" scope="col">
                <div id="base:numberOfBabies" class="buttonset" data-role="controlgroup" data-type="horizontal" data-toggle="buttons">
            <label class="btn btn-info active" for="numberOfBabies:single">
            <input name="base:numberOfBabies" type="radio" value="single" checked="checked" price-role="input" />
            Single</label>
            <label class="btn btn-info" for="numberOfBabies:twins">
            <input type="radio" name="base:numberOfBabies" value="twins" price-role="input"  />
            Twins</label>      	
            <label class="btn btn-info" for="numberOfBabies:triplets">
            <input type="radio" name="base:numberOfBabies" value="triplets" price-role="input"  />
            Triplets</label>      	
        </div>
</td>
    </tr>
  <tr>
    <td width="25%" align="left" class="EditingFormLabelCell" scope="col"></td>
    <td width="75%" class="EditingFormValueCell" scope="col">
    </td>
    </tr></table>
</div> 
</div> 
        <div class="row panel panel-default" style="display:none;">
        <div class="col-md-12 text-center">
             <div class="buttonset" data-toggle="buttons">
<label class="btn btn-info" for="menstrualStemCell:base"><span class="glyphicon glyphicon-plus"></span><span class="glyphicon glyphicon-minus"></span><input type="checkbox" name="menstrualStemCell:base" price-role="input" />
      Menstrual Stem Cell</label></div>
</div> 
</div> 
        <div class="row">
        <div class="col-md-12 text-center panel panel-default">

      <div id="umbilicalCordBlood:base" class="" price-role="page">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-hover table-condensed">
  <tr><td colspan="2"><div class="row"><div class="lead-lg buttonset col-md-12 text-center" data-toggle="buttons">
<label class="btn btn-info active btn-block" for="umbilicalCordBlood:base"><span class="glyphicon glyphicon-plus"></span><span class="glyphicon glyphicon-minus"></span><input name="umbilicalCordBlood:base" type="checkbox" checked="checked" price-role="input" />
Umbilical Cord Blood Service</label></div></div></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood-base:planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><div id="service:umbilicalCordBlood-base:planType" class="buttonset text-center" data-toggle="buttons"  data-role="controlgroup" data-type="horizontal">
            <label class="btn btn-info active" for="service:umbilicalCordBlood-planType:annual">
            <input name="service:umbilicalCordBlood-base:planType" type="radio" value="annual" checked="checked" price-role="input" />
            Annual</label>
            <label class="btn btn-info" for="service:umbilicalCordBlood-planType:twentyOneYears">
            <input type="radio" name="service:umbilicalCordBlood-base:planType" value="twentyOneYears" price-role="input" />
            Twenty One Years</label></div></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:bloodProcessingAndTesting">Cord Blood Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBlood,option:bloodProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:annualStorage" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:medicalCourier" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:discount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:couponAmount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr class="info" data-theme="c" style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr></table></div>
</div> 
</div> 
        <div class="row">
        <div class="col-md-12 text-center panel panel-default">
  <div id="umbilicalCordBloodAndTissue:base" class="" price-role="page"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-hover table-condensed" >
  <tr>
    <td colspan="2" scope="col"><div class="row"><div class="lead-lg buttonset col-md-12 text-center" data-toggle="buttons"><label class="btn btn-info btn-block" for="umbilicalCordBloodAndTissue:base"><span class="glyphicon glyphicon-plus"></span><span class="glyphicon glyphicon-minus"></span><input type="checkbox" name="umbilicalCordBloodAndTissue:base" price-role="input" />
Umbilical Cord Blood and Cord Tissue Service</label></div></div></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue-base:planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><div id="service:umbilicalCordBloodAndTissue-base:planType" class="buttonset text-center" data-toggle="buttons"  data-role="controlgroup" data-type="horizontal">
            <label class="btn btn-info active" for="service:umbilicalCordBloodAndTissue-planType:annual">
            <input name="service:umbilicalCordBloodAndTissue-base:planType" type="radio" value="annual" checked="checked" price-role="input" />
            Annual</label>
            <label class="btn btn-info" for="service:umbilicalCordBloodAndTissue-planType:twentyOneYears">
            <input type="radio" name="service:umbilicalCordBloodAndTissue-base:planType" value="twentyOneYears" price-role="input" />
            Twenty One Years</label></div></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:bloodProcessingAndTesting">Cord Blood Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBloodAndTissue,option:bloodProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:tissueProcessingAndTesting">Cord Tissue Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBloodAndTissue,option:tissueProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:annualStorage" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:medicalCourier" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:discount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:couponAmount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr class="info" data-theme="c" style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
</table>
</div>
</div> 
</div> 
        <div class="row" style="display:none;">
        <div class="col-md-12 text-center">
<div id="menstrualStemCell:base" class="" price-role="page">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-hover table-condensed">
  <tr>
    <td colspan="2" scope="col"><div class="row"><div class="lead col-md-12 text-center">
     <label class="" for="menstrualStemCell:base">
      Menstrual Stem Cell</label></div></div></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell-base:planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
     <div id="service:menstrualStemCell-base:planType" class="buttonset text-center" data-toggle="buttons"  data-role="controlgroup" data-type="horizontal">
            <label class="btn btn-info active" for="service:menstrualStemCell-planType:annual">
            <input name="service:menstrualStemCell-base:planType" type="radio" value="annual" checked="checked" price-role="input" />
            Annual</label>
        </div></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell,option:menstrualProcessingAndTesting">Menstrual Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:menstrualStemCell,option:menstrualProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell,option:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell,option:annualStorage" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell,option:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell,option:medicalCourier" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell,option:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell,option:discount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell,option:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell,option:couponAmount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr class="info" data-theme="c">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
</table>
</div></div></div></div>

      <div class="col-md-6">
        <div class="row">
      
      <div class="col-md-12 panel panel-default">
      <div id="summary:base" class="row" price-role="page">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-hover table-condensed">
  <tr>
    <td colspan="2" scope="col" class="lead"><div class="row"><div class="lead col-md-12 text-center"><label for="summary:base">Summary</label></div></div></td>
    </tr>
  <tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:planType,service:umbilicalCordBlood">Umbilical Cord Blood Service Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:planType,service:umbilicalCordBlood" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:planType,service:umbilicalCordBloodAndTissue">Umbilical Cord Blood and Cord Tissue Service</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:planType,service:umbilicalCordBloodAndTissue" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:planType,service:menstrualStemCell">Menstrual Stem Cell Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:planType,service:menstrualStemCell" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:bloodProcessingAndTesting">Cord Blood Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:bloodProcessingAndTesting" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:tissueProcessingAndTesting">Cord Tissue Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:tissueProcessingAndTesting" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr style="display:none;">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:menstrualProcessingAndTesting">Menstrual Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="summary:menstrualProcessingAndTesting" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:annualStorage" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:medicalCourier" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:discount" type="number" price-role="argument" min="0" max="100" />
    %</td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:couponAmount" type="number"  price-role="argument" min="0" />
    $</td>
  </tr>
  <tr class="info" data-theme="c">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:total">Total - Enter quoted price</label></td>

    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:total" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr class="danger" data-theme="c">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:savings">Your Savings</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:savings" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
</table></div></div>
</div>
</div>
</div>
</form>
*/});
    $.fee = [
        { clientType: "newClient", planType: "annual", numberOfBabies: "single", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 1799.00, default: 1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 3799.00, default: 3799.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 3418.00, default: 2*1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 7218.00, default: 2*3799.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 5037.00, default: 3*1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 10637.00, default: 3*3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "single", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 1619.00, default: 1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 3419.00, default: 3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 3238.00, default: 2*1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 6838.00, default: 2*3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 4857.00, default: 3*1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "bloodProcessingAndTesting", value: 10257.00, default: 3*3799.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 1799.00, default: 1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 3799.00, default: 3799.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 3418.00, default: 2*1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 7218.00, default: 2*3799.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 5037.00, default: 3*1799.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 10637.00, default: 3*3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 1619.00, default: 1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 3419.00, default: 3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 3238.00, default: 2*1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 6838.00, default: 2*3799.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 4857.00, default: 3*1799.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "bloodProcessingAndTesting", value: 10257.00, default: 3*3799.00 },
        { clientType: "*", planType: "annual", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 575.00, default: 575.00 },
        { clientType: "*", planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 2575.00, default: 2575.00 },
        { clientType: "*", planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 1150.00, default: 2*575.00 },
        { clientType: "*", planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 5150.00, default: 2*2575.00 },
        { clientType: "*", planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 1725.00, default: 3*575.00 },
        { clientType: "*", planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "tissueProcessingAndTesting", value: 7725.00, default: 3*2575.00 },
        { clientType: "newClient", planType: "annual", numberOfBabies: "*", service: "menstrualStemCell", option: "menstrualProcessingAndTesting", value: 1099.00, default: 1099.00 },
        { clientType: "newClient", planType: "twentyOneYears", numberOfBabies: "*", service: "menstrualStemCell", option: "menstrualProcessingAndTesting", value: 3925.00, default: 3925.00 },
        { clientType: "returningClient", planType: "annual", numberOfBabies: "*", service: "menstrualStemCell", option: "menstrualProcessingAndTesting", value: 989.00, default: 1099.00 },
        { clientType: "returningClient", planType: "twentyOneYears", numberOfBabies: "*", service: "menstrualStemCell", option: "menstrualProcessingAndTesting", value: 3825.00, default: 3925.00 },
        { planType: "annual", numberOfBabies: "single", service: "umbilicalCordBlood", option: "annualStorage", value: 125.00, default: 125.00 },
        { planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBlood", option: "annualStorage", value: 0.00, default: 21*125.00 },
        { planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "annualStorage", value: 250.00, default: 2*125.00 },
        { planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBlood", option: "annualStorage", value: 0.00, default: 2*21*125.00 },
        { planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "annualStorage", value: 375.00, default: 3*125.00 },
        { planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBlood", option: "annualStorage", value: 0.00, default: 3*21*125.00 },
        { planType: "annual", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 250.00, default: 250.00 },
        { planType: "twentyOneYears", numberOfBabies: "single", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 0.00, default: 21*250.00 },
        { planType: "annual", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 500.00, default: 2*250.00 },
        { planType: "twentyOneYears", numberOfBabies: "twins", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 0.00, default: 2*21*250.00 },
        { planType: "annual", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 750.00, default: 3*250.00 },
        { planType: "twentyOneYears", numberOfBabies: "triplets", service: "umbilicalCordBloodAndTissue", option: "annualStorage", value: 0.00, default: 3*21*250.00 },
        { planType: "annual", service: "menstrualStemCell", option: "annualStorage", value: 125.00, default: 125.00 },
        { planType: "twentyOneYears", service: "menstrualStemCell", option: "annualStorage", value: 0.00, default: 125.00 },
        { location: "local", option: "medicalCourier", value: 50.00, default: 150.00 },
        { location: "puertoRico", option: "medicalCourier", value: 200.00, default: 200.00 },
        { location: "domestic", option: "medicalCourier", value: 150.00, default: 150.00 }
    ];

    function hereDoc(f) {
        return f.toString().
            replace(/^[^\/]+\/\*!?/, '').
            replace(/\*\/[^\/]+$/, '');
    }

// This method is a JavaScript extension to the ECMA-262 standard; as such it may not be present in other 
    // implementations of the standard. To make it work you need to add following code at the top of your script:
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(fun /*,thisp*/) {
            var len = this.length;
            if (typeof fun != "function")
                throw new TypeError();

            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
                if (i in this)
                    fun.call(thisp, this[i], i, this);
            }
        };
    }

// Функция вывода сообщений трассировки
    // Обработка try-catch требуется для совместимости с IE
    function debugWrite(a, b) {
        try {
            console.log(a + ":" + b);
        } catch (e) {
        }
    }

    function flatTable(t) {
        $("tr", t).each(function(index, row) {
            var html = "<div data-role='fieldcontain'>";
            $("th,td", row).each(function(index, element) {
                html += $(element).html();
            });
            html += "</div>";
            $(t).before($(html));
        });
        $(t).remove();
    }

    function like(where, item) {
        var b = true;
        for (var prop in where)
            b = b && ((typeof(item[prop]) == "undefined")
                || (item[prop] == "*")
                || (item[prop] == where[prop]));
        return b;
    }

    function isNullOrWhitespace(input) {
        if (input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    var updatePriceForm = function() {
		$("input[price-role='argument']").off('change');
        var lang = $(document).data("lang");
        var fee = $(document).data("fee");
        var columns = $(document).data("columns");
        debugWrite("lang", lang);
        debugWrite("fee", fee);
        debugWrite("columns", columns);
        var base = {};
        $("input[price-role='input'][type='radio'][name^='base:']:checked").each(function(index, element) {
            var b = $(element).attr("name").split(":");
            base[b[0]] = base[b[0]] || {};
            base[b[0]][b[1]] = $(element).attr("value");
        });
        $("input[price-role='subtotal']").each(function(index, input) {
            for (var prop in base["base"]) debugWrite("base['base'][" + prop + "]", base["base"][prop]);
            var context = $.extend({}, base);
            context["base"] = $.extend({}, base["base"]);
            var names = $(input).attr("name").split("-");
            names[0].split(",").forEach(function(item) {
                var a = item.split(":");
                context["base"][a[0]] = a[1];
            });
            $("input[price-role='input'][type='radio']:not([name^='base:']):checked").each(function(index, element) {
                var path = {};
                var names = $(element).attr("name").split("-");
                names[0].split(",").forEach(function(item) {
                    var a = item.split(":");
                     path[a[0]] = a[1];
                });
                if (like(path, context["base"])) {
                    var b = names[1].split(":");
                    context["base"][b[1]] = $(element).attr("value");
                }
            });
            for (var prop in context["base"]) debugWrite("context['base'][" + prop + "]", context["base"][prop]);
            var value = Enumerable.From(fee).Where(function(x) { return like(context["base"], x); }).Sum(function(x) { return x.value; });
            if (value != $(input).val()) {
                $(input).val(value);
                $("div[id='" + $(input).attr("name") + "']").shuffleLetters({
                    text: $(input).val()
                });
            }
        });
        var totals = [];
        var subtotals = {};
        var subdefaults = {};
        for (var prop in columns[lang].option) subtotals[prop] = [];
        for (var prop in columns[lang].option) subdefaults[prop] = [];
        for (var item in columns[lang].service) {
            if ($("input[name='" + item + ":base']:checked").length > 0) {
                var service = {};
                service["service"] = item;
                var where = $.extend({}, base["base"], service);
                $("input[price-role='input'][type='radio']:not([name^='base:']):checked").each(function(index, element) {
                    var path = {};
                    var names = $(element).attr("name").split("-");
                    names[0].split(",").forEach(function(item) {
                        var a = item.split(":");
                        path[a[0]] = a[1];
                    });
                    if (like(path, service)) {
                        var b = names[1].split(":");
                        where[b[1]] = $(element).attr("value");
                    }
                });
                totals.push({
                    summary: "planType",
                    service: item,
                    value: columns[lang].planType[$("input[name='service:" + item + "-base:planType'][type='radio']:checked").attr("value")]
                });
                for (var prop in subtotals) {
                    where["option"] = prop;
                    subtotals[prop].push(Enumerable.From(fee)
                        .Where(function(x) { return like(where, x); })
                        .Sum(function(x) { return x.value; }));
                    subdefaults[prop].push(Enumerable.From(fee)
                        .Where(function(x) { return like(where, x); })
                        .Sum(function(x) { return x.default; }));
                }
            } else {
                totals.push({
                    summary: "planType",
                    service: item,
                    value: "-"
                });
            }
        }

        var summary = {
            discount: Enumerable.From(subtotals["discount"]).Aggregate(0, function(seed, x) { return Math.min(seed, x); }),
            couponAmount: Enumerable.From(subtotals["couponAmount"]).Aggregate(0, function(seed, x) { return Math.min(seed, x); }),
            medicalCourier: Enumerable.From(subtotals["medicalCourier"]).Aggregate(Enumerable.From(subtotals["medicalCourier"]).FirstOrDefault(0), function(seed, x) { return Math.min(seed, x); }),
            annualStorage: Enumerable.From(subtotals["annualStorage"]).Aggregate(0, function(seed, x) { return (seed + x); }),
            bloodProcessingAndTesting: Enumerable.From(subtotals["bloodProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
            tissueProcessingAndTesting: Enumerable.From(subtotals["tissueProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
            menstrualProcessingAndTesting: Enumerable.From(subtotals["menstrualProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
        };
        var defaults = {
            discount: Enumerable.From(subdefaults["discount"]).Aggregate(0, function(seed, x) { return Math.min(seed, x); }),
            couponAmount: Enumerable.From(subdefaults["couponAmount"]).Aggregate(0, function(seed, x) { return Math.min(seed, x); }),
            medicalCourier: Enumerable.From(subdefaults["medicalCourier"]).Aggregate(Enumerable.From(subdefaults["medicalCourier"]).FirstOrDefault(0), function(seed, x) { return Math.min(seed, x); }),
            annualStorage: Enumerable.From(subdefaults["annualStorage"]).Aggregate(0, function(seed, x) { return (seed + x); }),
            bloodProcessingAndTesting: Enumerable.From(subdefaults["bloodProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
            tissueProcessingAndTesting: Enumerable.From(subdefaults["tissueProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
            menstrualProcessingAndTesting: Enumerable.From(subdefaults["menstrualProcessingAndTesting"]).Aggregate(0, function(seed, x) { return Math.max(seed, x); }),
        };
        var values = [];
        var values2 = [];
        for (var prop in summary) {
            totals.push({
                summary: prop,
                value: summary[prop]
            });
            values.push(summary[prop]);
            values2.push(defaults[prop]);
        }
        totals.push({
            summary: "total",
            value: Math.floor(Enumerable.From(values).Sum()*(100-parseFloat($("input[name='summary:discount']").val()||0))/100 - parseFloat($("input[name='summary:couponAmount']").val()||0))
        });
        totals.push({
            summary: "savings",
            value: Enumerable.From(values2).Sum() - Math.floor(Enumerable.From(values).Sum()*(100-parseFloat($("input[name='summary:discount']").val()||0))/100 - parseFloat($("input[name='summary:couponAmount']").val()||0))
        });
        $("input[price-role='total']").each(function(index, input) {
            var where = {};
            $(input).attr("name").split(",").forEach(function(item) {
                var a = item.split(":");
                where[a[0]] = a[1];
            });
            var value = Enumerable.From(totals).First(function(x) { return like(where, x); }).value;
            if (value != $(input).val()) {
                $(input).val(value);
                $("div[id='" + $(input).attr("name") + "']").shuffleLetters({
                    text: $(input).val()
                });
            }
        });
		$("input[price-role='argument']").on('change',function(){
			$("input[name='summary:total'").val(Math.floor(Enumerable.From(values).Sum()*(100-parseFloat($("input[name='summary:discount']").val()||0))/100 - parseFloat($("input[name='summary:couponAmount']").val()||0)));
			$("input[name='summary:savings'").val(Enumerable.From(values2).Sum() - Math.floor(Enumerable.From(values).Sum()*(100-parseFloat($("input[name='summary:discount']").val()||0))/100 - parseFloat($("input[name='summary:couponAmount']").val()||0)));
		    $("div[id='summary:total']").shuffleLetters({ text: $("input[name='summary:total'").val() });
		    $("div[id='summary:savings']").shuffleLetters({ text: $("input[name='summary:savings'").val() });
		});
    };
    var updateMenstrualStemCell = function() {
        debugWrite("updateMenstrualStemCell", "start");
        var page = $(this).data("page");
		var checked = $("input[name='menstrualStemCell:base']", page).prop('checked');
		$("label[for='menstrualStemCell:base'] .glyphicon-plus", page).toggle(checked);
		$("label[for='menstrualStemCell:base'] .glyphicon-minus", page).toggle(!checked);
        if (checked) {
//            $("div[price-role='page']").removeClass("col-md-4").addClass("col-md-3");
            $("div[id='menstrualStemCell:base']", page).show("fast", function() {
                updateCenterElementContent();
                updateFullScreenElement();
                updateWindowBorderElement();
            });
        } else {
            $("div[id='menstrualStemCell:base']", page).hide("fast", function() {
                updateCenterElementContent();
                updateFullScreenElement();
                updateWindowBorderElement();
            });
//            $("div[price-role='page']").removeClass("col-md-3").addClass("col-md-4");
        }
    };
    var updateUmbilicalCordBloodAndTissue = function() {
        debugWrite("updateUmbilicalCordBloodAndTissue", "start");
        var page = $(this).data("page");
		var checked = $("input[name='umbilicalCordBloodAndTissue:base']", page).prop('checked');
		$("label[for='umbilicalCordBloodAndTissue:base'] .glyphicon-plus", page).toggle(checked);
		$("label[for='umbilicalCordBloodAndTissue:base'] .glyphicon-minus", page).toggle(!checked);
        if (checked) {
            $("span.ui-icon","label[for='umbilicalCordBlood:base']", page).removeClass("ui-icon-checkbox-on").addClass("ui-icon-checkbox-off");
            $("label[for='umbilicalCordBlood:base']", page).removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
            $("label[for='umbilicalCordBlood:base']", page).removeClass("active");
            $("input[name='umbilicalCordBlood:base']", page).prop('checked', false);
			$("label[for='umbilicalCordBlood:base'] .glyphicon-plus", page).toggle(false);
			$("label[for='umbilicalCordBlood:base'] .glyphicon-minus", page).toggle(true);
        }
    };
    var updateUmbilicalCordBlood = function() {
        debugWrite("updateUmbilicalCordBlood", "start");
        var page = $(this).data("page");
		var checked = $("input[name='umbilicalCordBlood:base']", page).prop('checked');
		$("label[for='umbilicalCordBlood:base'] .glyphicon-plus", page).toggle(checked);
		$("label[for='umbilicalCordBlood:base'] .glyphicon-minus", page).toggle(!checked);
        if (checked) {
            $("span.ui-icon","label[for='umbilicalCordBloodAndTissue:base']", page).removeClass("ui-icon-checkbox-on").addClass("ui-icon-checkbox-off");
            $("label[for='umbilicalCordBloodAndTissue:base']", page).removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
            $("label[for='umbilicalCordBloodAndTissue:base']", page).removeClass("active");
            $("input[name='umbilicalCordBloodAndTissue:base']", page).prop('checked', false);
			$("label[for='umbilicalCordBloodAndTissue:base'] .glyphicon-plus", page).toggle(false);
			$("label[for='umbilicalCordBloodAndTissue:base'] .glyphicon-minus", page).toggle(true);
        }
    };
    $.centerElementContent = '.center-element-content';
    var updateCenterElementContent = function() {
        $($.centerElementContent).each(function(index, wrapper) {
            var maxWidth = $(wrapper).width() + "px";
            var maxHeight = $(wrapper).height() + "px";
            $(wrapper).children().each(function(index, element) {
                $(element).css("maxWidth", maxWidth);
                $(element).css("maxHeight", maxHeight);
                $(element).css("margin-top", (($(wrapper).height() - $(element).height()) / 2) + "px");
                $(element).css("margin-left", "auto");
                $(element).css("margin-right", "auto");
                $(element).css("margin-bottom", "auto");
            });
        });
    };
    $.fullScreenElement = '.full-screen-element';
    var updateFullScreenElement = function() {
        $($.fullScreenElement).not($.centerElementContent).each(function(index, element) {
            $(element).css("minWidth", $(window).width() + "px");
            $(element).css("minHeight", $(window).height() + "px");
        });
    };
    $.windowBorders = ["left", "right", "top", "bottom"];
    $.windowBorders.forEach(function(item) {
        $[item + "BorderElement"] = "." + item + "-border-element";
    });
    var updateWindowBorderElement = function() {
        $.windowBorders.forEach(function(item) {
            $($[item + "BorderElement"]).each(function(index, element) {
                var wrapper = $(element).parent();
                var wrapperOffset = $(wrapper).offset();
                $(element).data("foo")(element, wrapper, wrapperOffset);
                $(element).data("bar")(element, wrapper, wrapperOffset);
            });
        });
    };
    var initPriceForm = function() {
        var lang = $.culture || "en";
        var fee = $.fee;
        var columns = $.priceColumns;
        var wrapper = $.priceFormWrapper;
        debugWrite("$.isMobile", $.isMobile);
        debugWrite("$.culture", $.culture);
        debugWrite("lang", lang);
        debugWrite("fee", fee);
        debugWrite("columns", columns);
        debugWrite("wrapper", wrapper);
        $(document).data("lang", lang);
        $(document).data("fee", fee);
        $(document).data("columns", columns);
        $(wrapper).each(function(index, wrapper) {
            var page = $(priceFormHtml);
            $(wrapper).after(page);
            if ($.isMobile) {
                $("table", page).each(function(index, element) {
//                    flatTable(element);
                });
            } else {
//				$(".buttonset",page).each(function(index, element) {$(element).buttonset();});
                $("input[price-role='subtotal'],input[price-role='total']", page).attr("type", "hidden");
                $("input[price-role='subtotal'],input[price-role='total']", page).each(function(index, element) {
                    $(element).before("<div id='" + $(element).attr("name") + "' class='shuffleLetters lead " + $(element).attr("price-role") + "'></div>");
                });
            }
            // Перевод заголовков полей формы на указанный язык
            $("label", page).each(function(index, element) {
                debugWrite("for", $(element).attr("for"));
                var names = $(element).attr("for").split("-");
                names = names[names.length - 1].split(",");
                names = names[names.length - 1].split(":");
                $(element).contents().filter(function() {
                    return this.nodeType === 3 && !isNullOrWhitespace(this.textContent);
                }).each(function() {
                    this.textContent = columns[lang][names[0]][names[1]];
                });
            });
            $("input", page).data("page", page);
        });
        $(wrapper).remove();
        // Установка поля языка
        // We need to add some logic there to pass a language used on the form to Salesforce as a new custom field
        // and also after the form post to redirect to a localized thank you page.
        $("input[name='culture']").val(lang);
        $("input[name='umbilicalCordBlood:base']").change(updateUmbilicalCordBlood);
        $("input[name='umbilicalCordBloodAndTissue:base']").change(updateUmbilicalCordBloodAndTissue);
        $("input[name='menstrualStemCell:base']").change(updateMenstrualStemCell);
        $("input[name='menstrualStemCell:base']").change(updateCenterElementContent);
        $("input[name='menstrualStemCell:base']").change(updateFullScreenElement);
        $("input[name='menstrualStemCell:base']").change(updateWindowBorderElement);
        $("input[price-role='input']").change(updatePriceForm);
    };
    var dataAjaxFalse = function() {
        $("a").attr("data-ajax", "false");
    };
    $(document).bind('pagebeforecreate', initPriceForm);
    $(document).ready(initPriceForm);
    $(document).ready(updateUmbilicalCordBlood);
    $(document).ready(updateUmbilicalCordBloodAndTissue);
    $(document).ready(updateMenstrualStemCell);
    $(document).ready(updateCenterElementContent);
    $(document).ready(updateFullScreenElement);
    $(document).ready(updateWindowBorderElement);
    $(document).ready(updatePriceForm);
    $(document).ready(dataAjaxFalse);
    $(document).resize(updateCenterElementContent);
    $(document).resize(updateFullScreenElement);
    $(document).resize(updateWindowBorderElement);
    $(window).resize(updateCenterElementContent);
    $(window).resize(updateFullScreenElement);
    $(window).resize(updateWindowBorderElement);
    $(document).ajaxComplete(updateCenterElementContent);
    $(document).ajaxComplete(updateFullScreenElement);
    $(document).ajaxComplete(updateWindowBorderElement);
    $(document).ajaxComplete(dataAjaxFalse);
    $(document).ajaxStop(updateCenterElementContent);
    $(document).ajaxStop(updateFullScreenElement);
    $(document).ajaxStop(updateWindowBorderElement);
    $(document).ajaxStop(dataAjaxFalse);
})(jQuery);