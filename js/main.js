$(document).ready(function(){
	
// Вызов и скрытия попапа
	$('.call').click(function(){
		$('.b-popap').fadeIn(700); return false;
	});
	$('.close').click(function(){
		$('.b-popap').fadeOut(700); return false;
	});
	$('.b-popap').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap").fadeOut(700); return false;
	});

	// Маски для телефонов
	$("#tel").mask("+7(999) 999-99-99");
	$("#tel2").mask("+7(999) 999-99-99");
	$("#tel3").mask("+7(999) 999-99-99");
	$("#tel4").mask("+7(999) 999-99-99");
	$("#tel5").mask("+7(999) 999-99-99");
	$("#tel6").mask("+7(999) 999-99-99");
	$("#tel7").mask("+7(999) 999-99-99");

// Вызов бургера
  $('.lines').click(function(){
    $(".menu3").toggle(500);
});

});