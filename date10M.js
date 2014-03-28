///////////////////////////////////////////////////////////////////////////////////////
//
// Валидация поля даты формы на не превышение 10-ти месяцев от текущей даты
// для сайта Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Версия для мобильной версии сайта
// Совместимо с мобильной версией сайта
//
// Инструкция по применению:
//
// 1. Испольльзовать совместно с jQuery Validation Plugin http://jqueryvalidation.org
// 2. Установить у поля класс date10M
//
///////////////////////////////////////////////////////////////////////
jQuery.validator.addMethod("date10M", function(value, element) {
	var check = false,
		adata, gg, mm, aaaa, xdata;
	var today = new Date();
	var mindata = new Date(today.getYear(), today.getMonth(), today.getDate());
	var maxdata = new Date(today.getYear()+parseInt((today.getMonth()+10)/12,10), (today.getMonth()+10)%12, today.getDate());
	if ( /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0],10);
		mm = parseInt(adata[1],10);
		aaaa = parseInt(adata[2],10);
		xdata = new Date(aaaa, mm, gg);
		check=(mindata.getTime()<=xdata.getTime()) && (xdata.getTime()<=maxdata.getTime());
	} else if ( /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(value)) {
		adata = value.split(".");
		gg = parseInt(adata[0],10);
		mm = parseInt(adata[1],10);
		aaaa = parseInt(adata[2],10);
		xdata = new Date(aaaa, mm, gg);
		check=(mindata.getTime()<=xdata.getTime()) && (xdata.getTime()<=maxdata.getTime());
	} else if ( /^\d{1,2}\-\d{1,2}\-\d{4}$/.test(value)) {
		adata = value.split("-");
		gg = parseInt(adata[0],10);
		mm = parseInt(adata[1],10);
		aaaa = parseInt(adata[2],10);
		xdata = new Date(aaaa, mm, gg);
		check=(mindata.getTime()<=xdata.getTime()) && (xdata.getTime()<=maxdata.getTime());
	} else if ( /^\d{4}\/\d{1,2}\/\d{1,2}$/.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[2],10);
		mm = parseInt(adata[1],10);
		aaaa = parseInt(adata[0],10);
		xdata = new Date(aaaa, mm, gg);
		check=(mindata.getTime()<=xdata.getTime()) && (xdata.getTime()<=maxdata.getTime());
	} else if ( /^\d{4}\-\d{1,2}\-\d{1,2}$/.test(value)) {
		adata = value.split("-");
		gg = parseInt(adata[2],10);
		mm = parseInt(adata[1],10);
		aaaa = parseInt(adata[0],10);
		xdata = new Date(aaaa, mm, gg);
		check=(mindata.getTime()<=xdata.getTime()) && (xdata.getTime()<=maxdata.getTime());
	} else {
		check = false;
	}
	return this.optional(element) || check;
}, "Please enter a correct date");
