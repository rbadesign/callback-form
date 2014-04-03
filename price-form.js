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
    <script type="text/javascript" src="/CMSScripts/Custom/linq.js"></script>
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
(function ($) {
	$.priceFormWrapper = "#price-form-wrapper";
	$.priceColumns = {
		en:{
			base:{
				location:"Location",
				numberOfBabies:"Number of Babies",
				clientType:"Client Type",
				planType:"Plan Type",
				service:"Service",
				option:"Fee",
				summary:"Summary",
				total:"Total - Enter quoted price",
			},
			umbilicalCordBlood:{
				base:"Umbilical Cord Blood Service",
			},
			umbilicalCordBloodAndTissue:{
				base:"Umbilical Cord Blood and Cord Tissue Service",
			},
			menstrualStemCell:{
				base:"Menstrual Stem Cell",
			},
			location:{
				local:"Local",
				puertoRico:"Puerto Rico",
				domestic:"Domestic",
			},												
			numberOfBabies:{
				single:"Single",
				twins:"Twins",
				triplets:"Triplets",
				quadruplets:"Quadruplets",
			},												
			clientType:{
				newClient:"New Cryo-Cell Client",
				returningClient:"Returning Cryo-Cell Client",
			},												
			planType:{
				annual:"Annual",
				twentyOneYears:"Twenty One Years",
			},												
			service:{
				umbilicalCordBlood:"Umbilical Cord Blood Service",
				umbilicalCordBloodAndTissue:"Umbilical Cord Blood and Cord Tissue Service",
				menstrualStemCell:"Menstrual Stem Cell",
			},												
			option:{
				bloodProcessingAndTesting:"Cord Blood Processing & Testing Fee",
				tissueProcessingAndTesting:"Cord Tissue Processing & Testing Fee",
				menstrualProcessingAndTesting:"Menstrual Processing & Testing Fee",
				annualStorage:"Annual Storage Fee",
				medicalCourier:"Medical Courier Fee",
				discount:"Discount",
				couponAmount:"Coupon Amount",
			},
			summary:{
				planType:"Plan Type",
				bloodProcessingAndTesting:"Cord Blood Processing & Testing Fee",
				tissueProcessingAndTesting:"Cord Tissue Processing & Testing Fee",
				menstrualProcessingAndTesting:"Menstrual Processing & Testing Fee",
				annualStorage:"Annual Storage Fee",
				medicalCourier:"Medical Courier Fee",
				discount:"Discount",
				couponAmount:"Coupon Amount",
				total:"Total",
			},											
		},
		es:{
			base:{
				location:"Location",
				numberOfBabies:"Number of Babies",
				clientType:"Client Type",
				planType:"Plan Type",
				service:"Service",
				option:"Fee",
				summary:"Summary",
				total:"Total - Enter quoted price",
			},
			umbilicalCordBlood:{
				base:"Umbilical Cord Blood Service",
			},
			umbilicalCordBloodAndTissue:{
				base:"Umbilical Cord Blood and Cord Tissue Service",
			},
			menstrualStemCell:{
				base:"Menstrual Stem Cell",
			},
			location:{
				local:"Local",
				puertoRico:"Puerto Rico",
				domestic:"Domestic",
			},												
			numberOfBabies:{
				single:"Single",
				twins:"Twins",
				triplets:"Triplets",
				quadruplets:"Quadruplets",
			},												
			clientType:{
				newClient:"New Cryo-Cell Client",
				returningClient:"Returning Cryo-Cell Client",
			},												
			planType:{
				annual:"Annual",
				twentyOneYears:"Twenty One Years",
			},												
			service:{
				umbilicalCordBlood:"Umbilical Cord Blood Service",
				umbilicalCordBloodAndTissue:"Umbilical Cord Blood and Cord Tissue Service",
				menstrualStemCell:"Menstrual Stem Cell",
			},												
			option:{
				bloodProcessingAndTesting:"Cord Blood Processing & Testing Fee",
				tissueProcessingAndTesting:"Cord Tissue Processing & Testing Fee",
				menstrualProcessingAndTesting:"Menstrual Processing & Testing Fee",
				annualStorage:"Annual Storage Fee",
				medicalCourier:"Medical Courier Fee",
				discount:"Discount",
				couponAmount:"Coupon Amount",
			},
			summary:{
				planType:"Plan Type",
				bloodProcessingAndTesting:"Cord Blood Processing & Testing Fee",
				tissueProcessingAndTesting:"Cord Tissue Processing & Testing Fee",
				menstrualProcessingAndTesting:"Menstrual Processing & Testing Fee",
				annualStorage:"Annual Storage Fee",
				medicalCourier:"Medical Courier Fee",
				discount:"Discount",
				couponAmount:"Coupon Amount",
				total:"Total",
			},											
		},
		ru:{
			base:{
				location:"Месторасположение",
				numberOfBabies:"Количество новорожденных",
				clientType:"Тип клиента",
				planType:"Тарифный план",
				service:"Услуга",
				option:"Тариф",
				summary:"Суммарно",
				total:"Итого - стартовый тариф",
			},
			umbilicalCordBlood:{
				base:"Хранение пуповинной крови",
			},
			umbilicalCordBloodAndTissue:{
				base:"Хранение пуповинной крови и пуповинной ткани",
			},
			menstrualStemCell:{
				base:"Хранение менструальных клеток",
			},
			location:{
				local:"Рядом",
				puertoRico:"Пуэрто-Рико",
				domestic:"Территория США",
			},												
			numberOfBabies:{
				single:"Один ребёнок",
				twins:"Двойня",
				triplets:"Тройняшки",
				quadruplets:"Четверняшки",
			},												
			clientType:{
				newClient:"Новый клиент Cryo-Cell",
				returningClient:"Постоянный клиент Cryo-Cell",
			},												
			planType:{
				annual:"Годовое хранение",
				twentyOneYears:"21-летнее хранение",
			},												
			service:{
				umbilicalCordBlood:"Хранение пуповинной крови",
				umbilicalCordBloodAndTissue:"Хранение пуповинной крови и пуповинной ткани",
				menstrualStemCell:"Хранение менструальных клеток",
			},												
			option:{
				bloodProcessingAndTesting:"Плата за обработку и тестирование пуповинной крови",
				tissueProcessingAndTesting:"Плата за обработку и тестирование пуповинной ткани",
				menstrualProcessingAndTesting:"Плата за обработку и тестирование менструальных клеток",
				annualStorage:"Плата за годовое хранение",
				medicalCourier:"Плата за вызов курьера",
				discount:"Скидка",
				couponAmount:"Купон",
			},												
			summary:{
				planType:"Тарифный план",
				bloodProcessingAndTesting:"Плата за обработку и тестирование пуповинной крови",
				tissueProcessingAndTesting:"Плата за обработку и тестирование пуповинной ткани",
				menstrualProcessingAndTesting:"Плата за обработку и тестирование менструальных клеток",
				annualStorage:"Плата за годовое хранение",
				medicalCourier:"Плата за вызов курьера",
				discount:"Скидка",
				couponAmount:"Купон",
				total:"Итого - стартовый тариф",
			},											
		},
	};
	var priceFormHTML = hereDoc(function() {/*!
<form action="" method="get">
  <table width="100%" border="0" cellpadding="0" cellspacing="0"><tr>
    	<td>
        <div class="row"><div id="base:location" class="buttonset col-md-4 well">
        <div class="row"><div class="col-md-4">
            	<label for="location:local">
                <input name="base:location" type="radio" value="local" checked="checked" price-role="input" />
                Local</label>
        </div><div class="col-md-4">
            <label for="location:puertoRico">
                <input type="radio" name="base:location" value="puertoRico" price-role="input" />
                Puerto Rico</label>
        </div><div class="col-md-4">
            <label for="location:domestic">
              <input type="radio" name="base:location" value="domestic" price-role="input" />
                Domestic</label>
        </div></div>
</div> 
         <div id="base:clientType" class="buttonset col-md-4 well">
        <div class="row"><div class="col-md-6">
            <label for="clientType:newClient">
            <input name="base:clientType" type="radio" value="newClient" checked="checked" price-role="input" />
            New Cryo-Cell Client</label>
        </div><div class="col-md-6">
            <label for="clientType:returningClient">
            <input type="radio" name="base:clientType" value="returningClient" price-role="input" />
            Returning Cryo-Cell Client</label>      	        </div></div>
</div><div id="base:numberOfBabies" class="buttonset col-md-4 well">
        <div class="row"><div class="col-md-4">
            <label for="numberOfBabies:single">
            <input name="base:numberOfBabies" type="radio" value="single" checked="checked" price-role="input" />
            Single</label>
        </div><div class="col-md-4">
            <label for="numberOfBabies:twins">
            <input type="radio" name="base:numberOfBabies" value="twins" price-role="input"  />
            Twins</label>      	
        </div><div class="col-md-4">
            <label for="numberOfBabies:triplets">
            <input type="radio" name="base:numberOfBabies" value="triplets" price-role="input"  />
            Triplets</label>      	
        </div></div>
      </div></div></td>
  </tr>
  <tr>
    <td scope="col"><div class="row"><div class="col-md-3 well"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped">
  <tr><td colspan="2" class="lead">
<label for="umbilicalCordBlood:base"><input type="checkbox" name="umbilicalCordBlood:base" price-role="input" />
Umbilical Cord Blood Service</label></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood-base:planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><div id="service:umbilicalCordBlood-base:planType" class="buttonset">
            <label for="service:umbilicalCordBlood-planType:annual">
            <input name="service:umbilicalCordBlood-base:planType" type="radio" value="annual" checked="checked" price-role="input" />
            Annual</label>
            <label for="service:umbilicalCordBlood-planType:twentyOneYears">
            <input type="radio" name="service:umbilicalCordBlood-base:planType" value="twentyOneYears" price-role="input" />
            Twenty One Years</label></div></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:bloodProcessingAndTesting">Cord Blood Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBlood,option:bloodProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:annualStorage" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:medicalCourier" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:discount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood,option:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood,option:couponAmount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr class="info">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBlood-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBlood-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr></table></div><div class="col-md-3 well"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped">
  <tr>
    <td colspan="2" scope="col" class="lead"><label for="umbilicalCordBloodAndTissue:base"><input type="checkbox" name="umbilicalCordBloodAndTissue:base" price-role="input" />
Umbilical Cord Blood and Cord Tissue Service</label></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue-base:planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><div id="service:umbilicalCordBloodAndTissue-base:planType" class="buttonset">
            <label for="service:umbilicalCordBloodAndTissue-planType:annual">
            <input name="service:umbilicalCordBloodAndTissue-base:planType" type="radio" value="annual" checked="checked" price-role="input" />
            Annual</label>
            <label for="service:umbilicalCordBloodAndTissue-planType:twentyOneYears">
            <input type="radio" name="service:umbilicalCordBloodAndTissue-base:planType" value="twentyOneYears" price-role="input" />
            Twenty One Years</label></div></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:bloodProcessingAndTesting">Cord Blood Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBloodAndTissue,option:bloodProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:tissueProcessingAndTesting">Cord Tissue Processing & Testing Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
      <input name="service:umbilicalCordBloodAndTissue,option:tissueProcessingAndTesting" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:annualStorage">Annual Storage Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:annualStorage" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:medicalCourier">Medical Courier Fee</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:medicalCourier" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:discount">Discount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:discount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue,option:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue,option:couponAmount" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
  <tr class="info">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:umbilicalCordBloodAndTissue-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:umbilicalCordBloodAndTissue-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
</table>
</div><div class="col-md-3 well">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped">
  <tr>
    <td colspan="2" scope="col" class="lead">
     <label for="menstrualStemCell:base"><input type="checkbox" name="menstrualStemCell:base" price-role="input" />
      Menstrual Stem Cell</label></td>
    </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell-planType">Plan Type</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col">
     <div id="service:menstrualStemCell-base:planType" class="buttonset">
            <label for="service:menstrualStemCell-planType:annual">
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
  <tr class="info">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="service:menstrualStemCell-base:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="service:menstrualStemCell-base:total" type="text" readonly="readonly" price-role="subtotal" /></td>
  </tr>
</table>
</div><div class="col-md-3 well">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table table-striped">
  <tr>
    <td colspan="2" scope="col" class="lead"><label for="base:summary">Summary</label></td>
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
  <tr>
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
  <tr>
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
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:discount" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr>
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:couponAmount">Coupon Amount</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:couponAmount" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
  <tr class="info">
    <td width="50%" align="left" class="EditingFormLabelCell" scope="col"><label for="summary:total">Total - Enter quoted price</label></td>
    <td width="50%" class="EditingFormValueCell" scope="col"><input name="summary:total" type="text" readonly="readonly" price-role="total" /></td>
  </tr>
</table></div></div></td>
    </tr>
  </table>
</form>
*/});
	$.fee = [
{clientType:"newClient",planType:"annual",numberOfBabies:"single",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:1799.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:3799.00},
{clientType:"newClient",planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:3418.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:7218.00},
{clientType:"newClient",planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:5037.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:10637.00},

{clientType:"returningClient",planType:"annual",numberOfBabies:"single",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:1619.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:3419.00},
{clientType:"returningClient",planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:3238.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:6838.00},
{clientType:"returningClient",planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:4857.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"bloodProcessingAndTesting",value:10257.00},

{clientType:"newClient",planType:"annual",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:1799.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:3799.00},
{clientType:"newClient",planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:3418.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:7218.00},
{clientType:"newClient",planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:5037.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:10637.00},

{clientType:"returningClient",planType:"annual",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:1619.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:3419.00},
{clientType:"returningClient",planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:3238.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:6838.00},
{clientType:"returningClient",planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:4857.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"bloodProcessingAndTesting",value:10257.00},

{clientType:"*",planType:"annual",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:575.00},
{clientType:"*",planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:2575.00},
{clientType:"*",planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:1150.00},
{clientType:"*",planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:5150.00},
{clientType:"*",planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:1725.00},
{clientType:"*",planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"tissueProcessingAndTesting",value:7725.00},

{clientType:"newClient",planType:"annual",numberOfBabies:"*",service:"menstrualStemCell",option:"menstrualProcessingAndTesting",value:1099.00},
{clientType:"newClient",planType:"twentyOneYears",numberOfBabies:"*",service:"menstrualStemCell",option:"menstrualProcessingAndTesting",value:3925.00},

{clientType:"returningClient",planType:"annual",numberOfBabies:"*",service:"menstrualStemCell",option:"menstrualProcessingAndTesting",value:989.00},
{clientType:"returningClient",planType:"twentyOneYears",numberOfBabies:"*",service:"menstrualStemCell",option:"menstrualProcessingAndTesting",value:3825.00},

{planType:"annual",numberOfBabies:"single",service:"umbilicalCordBlood",option:"annualStorage",value:125.00},
{planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBlood",option:"annualStorage",value:0.00},
{planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"annualStorage",value:250.00},
{planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBlood",option:"annualStorage",value:0.00},
{planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"annualStorage",value:375.00},
{planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBlood",option:"annualStorage",value:0.00},

{planType:"annual",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:250.00},
{planType:"twentyOneYears",numberOfBabies:"single",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:0.00},
{planType:"annual",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:500.00},
{planType:"twentyOneYears",numberOfBabies:"twins",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:0.00},
{planType:"annual",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:750.00},
{planType:"twentyOneYears",numberOfBabies:"triplets",service:"umbilicalCordBloodAndTissue",option:"annualStorage",value:0.00},

{planType:"annual",service:"menstrualStemCell",option:"annualStorage",value:125.00},
{planType:"twentyOneYears",service:"menstrualStemCell",option:"annualStorage",value:0.00},

{location:"local",option:"medicalCourier",value:50.00},
{location:"puertoRico",option:"medicalCourier",value:200.00},
{location:"domestic",option:"medicalCourier",value:150.00},
	];

	function hereDoc(f) {
	  return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}
	// This method is a JavaScript extension to the ECMA-262 standard; as such it may not be present in other 
	// implementations of the standard. To make it work you need to add following code at the top of your script:
	if (!Array.prototype.forEach)
	{
	  Array.prototype.forEach = function(fun /*,thisp*/)
	  {
		var len = this.length;
		if (typeof fun != "function")
		  throw new TypeError();
	
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
		  if (i in this)
			fun.call(thisp,this[i],i,this);
		}
	  }
	}
	// Функция вывода сообщений трассировки
	// Обработка try-catch требуется для совместимости с IE
	function debugWrite(a,b) {
		try {
			console.log(a+":"+b);
		} catch (e) {
		}
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
	function like(where,item){
		var b = true;
		for(var prop in where) b=b&&((typeof(item[prop])=="undefined")
			||(item[prop]=="*")
			||(item[prop]==where[prop]));
		return b;
	}
	function isNullOrWhitespace(input) {
		if (input == null) return true;
		return input.replace(/\s/g, '').length < 1;
	}
	var update = function() {
		var lang = $(document).data("lang");
		var fee = $(document).data("fee");
		var columns = $(document).data("columns");
		debugWrite("lang",lang);
		debugWrite("fee",fee);
		debugWrite("columns",columns);
		var base={};
		$("input[price-role='input'][type='radio'][name^='base:']:checked").each(function(index, element) {
			var b = $(element).attr("name").split(":");
			debugWrite("b[0]",b[0]);
			debugWrite("b[1]",b[1]);
			base[b[0]]=base[b[0]]||{};
			base[b[0]][b[1]]=$(element).attr("value");
		});
		$("input[price-role='subtotal']").each(function(index, input) {
			for(var prop in base["base"]) debugWrite("base['base']["+prop+"]",base["base"][prop]);
			debugWrite("$(input).attr('name')",$(input).attr("name"));
			var context=$.extend({},base);
			context["base"]=$.extend({},base["base"]);
			var names = $(input).attr("name").split("-");
			names[0].split(",").forEach(function(item){
				var a = item.split(":");
				debugWrite("a[0]",a[0]);
				debugWrite("a[1]",a[1]);
				context["base"][a[0]]=a[1];
			});
			$("input[price-role='input'][type='radio']:not([name^='base:']):checked").each(function(index, element) {
                var path={};
				var names = $(element).attr("name").split("-");
				debugWrite("names[0]",names[0]);
				names[0].split(",").forEach(function(item){
					var a = item.split(":");
					debugWrite("a[0]",a[0]);
					debugWrite("a[1]",a[1]);
					path[a[0]]=a[1];
				});
				if(like(path,context["base"])) {
					var b = names[1].split(":");
					debugWrite("b[1]",b[1]);
					context["base"][b[1]]=$(element).attr("value");
				}
            });
			for(var prop in context["base"]) debugWrite("context['base']["+prop+"]",context["base"][prop]);
			var value=Enumerable.From(fee).Where(function(x){return like(context["base"],x);}).Sum(function(x){return x.value;});
			debugWrite("value",value);
			if(value!=$(input).val()) {
				$(input).val(value);
				$("div[id='"+$(input).attr("name")+"']").shuffleLetters({
					text: $(input).val()
				});
			}
        });
		var totals=[];
		var subtotals={};
		for(var prop in columns[lang].option) subtotals[prop]=[];
		for(var item in columns[lang].service) {
			if ($("input[name='"+item+":base']:checked").length>0){
				var service={};
				service["service"]=item;
				var where=$.extend({},base["base"],service);
				$("input[price-role='input'][type='radio']:not([name^='base:']):checked").each(function(index, element) {
					var path={};
					var names = $(element).attr("name").split("-");
					names[0].split(",").forEach(function(item){
						var a = item.split(":");
						debugWrite("a[0]",a[0]);
						debugWrite("a[1]",a[1]);
						path[a[0]]=a[1];
					});
					if(like(path,service)) {
						var b = names[1].split(":");
						debugWrite("b[1]",b[1]);
						where[b[1]]=$(element).attr("value");
					}
				});
				totals.push({
					summary:"planType",
					service:item,
					value:columns[lang].planType[$("input[name='service:"+item+"-base:planType'][type='radio']:checked").attr("value")]
				});
				for(var prop in subtotals) {
					where["option"]=prop;
					subtotals[prop].push(Enumerable.From(fee)
						.Where(function(x){return like(where,x);})
						.Sum(function(x){return x.value;}));
				}
			} else {
				totals.push({
					summary:"planType",
					service:item,
					value:"-"
				});
			}
		}
		debugWrite('subtotals["discount"]',subtotals["discount"]);
		debugWrite('subtotals["couponAmount"]',subtotals["couponAmount"]);
		debugWrite('subtotals["annualStorage"]',subtotals["annualStorage"]);
		debugWrite('subtotals["bloodProcessingAndTesting"]',subtotals["bloodProcessingAndTesting"]);
		debugWrite('subtotals["tissueProcessingAndTesting"]',subtotals["tissueProcessingAndTesting"]);
		debugWrite('subtotals["menstrualProcessingAndTesting"]',subtotals["menstrualProcessingAndTesting"]);
		debugWrite('subtotals["medicalCourier"]',subtotals["medicalCourier"]);
		var summary = {
			discount:Enumerable.From(subtotals["discount"]).Aggregate(0,function(seed,x){return Math.min(seed,x);}),
			couponAmount:Enumerable.From(subtotals["couponAmount"]).Aggregate(0,function(seed,x){return Math.min(seed,x);}),
			medicalCourier:Enumerable.From(subtotals["medicalCourier"]).Aggregate(Enumerable.From(subtotals["medicalCourier"]).FirstOrDefault(0),function(seed,x){return Math.min(seed,x);}),
			annualStorage:Enumerable.From(subtotals["annualStorage"]).Aggregate(0,function(seed,x){return (seed+x);}),
			bloodProcessingAndTesting:Enumerable.From(subtotals["bloodProcessingAndTesting"]).Aggregate(0,function(seed,x){return Math.max(seed,x);}),
			tissueProcessingAndTesting:Enumerable.From(subtotals["tissueProcessingAndTesting"]).Aggregate(0,function(seed,x){return Math.max(seed,x);}),
			menstrualProcessingAndTesting:Enumerable.From(subtotals["menstrualProcessingAndTesting"]).Aggregate(0,function(seed,x){return Math.max(seed,x);}),
		}
		var values=[];
		for(var prop in summary){
			totals.push({
				summary:prop,
				value:summary[prop]
			});
			values.push(summary[prop]);
		}
		totals.push({
			summary:"total",
			value:Enumerable.From(values).Sum()
		});
		$("input[price-role='total']").each(function(index, input) {
			var where={};
			$(input).attr("name").split(",").forEach(function(item){
				var a = item.split(":");
				where[a[0]]=a[1];
			});
			var value=Enumerable.From(totals).First(function(x){return like(where,x);}).value;
			if(value!=$(input).val()) {
				$(input).val(value);
				$("div[id='"+$(input).attr("name")+"']").shuffleLetters({
					text: $(input).val()
				});
			}
        });
	};
	var init = function() {
		var lang = $.culture||"en";
		var fee = $.fee;
		var columns = $.priceColumns;
		var wrapper = $.priceFormWrapper;
		debugWrite("$.isMobile",$.isMobile);
		debugWrite("$.culture",$.culture);
		debugWrite("lang",lang);
		debugWrite("fee",fee);
		debugWrite("columns",columns);
		debugWrite("wrapper",wrapper);
		$(document).data("lang",lang);
		$(document).data("fee",fee);
		$(document).data("columns",columns);
		$(wrapper).each(function(index, wrapper) {
			var page = $(priceFormHTML);
			$(wrapper).after(page);
			if ($.isMobile) {
				$("table",page).each(function(index, element) {
					flatTable(element);
				});
			} else {
//				$(".buttonset",page).each(function(index, element) {$(element).buttonset();});
				$("input[price-role='subtotal'],input[price-role='total']",page).attr("type","hidden");
				$("input[price-role='subtotal'],input[price-role='total']",page).each(function(index, element) {
                    $(element).before("<div id='"+$(element).attr("name")+"' class='shuffleLetters lead "+$(element).attr("price-role")+"'></div>");
                });
			}			
			// Перевод заголовков полей формы на указанный язык
			$("label",page).each(function(index, element) {
				debugWrite("for",$(element).attr("for"));
                var names=$(element).attr("for").split("-");
				names=names[names.length-1].split(",");
				names=names[names.length-1].split(":");
				$(element).contents().filter(function() {
				  	return this.nodeType === 3 && !isNullOrWhitespace(this.textContent);
				}).each(function(){
					this.textContent = columns[lang][names[0]][names[1]];
				});
			});
			$("input",page).data("page",page);
			$("input[name='umbilicalCordBlood:base']",page).change(function(){
				var page = $(document).data("page");
				$("input[name='umbilicalCordBloodAndTissue:base']",page).prop('checked', false);
			});
			$("input[name='umbilicalCordBloodAndTissue:base']",page).change(function(){
				var page = $(document).data("page");
				$("input[name='umbilicalCordBlood:base']",page).prop('checked', false);
			});
			$("input[price-role='input']",page).change(update);
        });
		$(wrapper).remove();
		// Установка поля языка
		// We need to add some logic there to pass a language used on the form to Salesforce as a new custom field
		// and also after the form post to redirect to a localized thank you page.
		$("input[name='culture']").val(lang);			
	}	
	$(document).bind('pagebeforecreate', init);
	$(document).ready(init);
	$(document).ready(update);
	var dataAjaxFalse = function(){
		$("a").attr("data-ajax","false");
	}	
	$(document).ready(dataAjaxFalse);
	$(document).ajaxStop(dataAjaxFalse);
})(jQuery);
