$(function init(){
	if($('input:checkbox').size()) var _checkbox=$('input:checkbox').checkbox();
	if($('input:radio').size()) var _radio=$('input:radio').radio();
});
$.fn.checkbox=function(o){
	var callMethod=$.fn.checkbox.method;
	if(typeof o=="string" && o in $.fn.checkbox.method){
		var checkbox=$(this);
		callMethod[o](checkbox);
		return checkbox;
	}
	if(!("method" in $.fn.checkbox)){
		$.fn.checkbox.method={
			"destroy":function(checkbox){
				if (checkbox.data('customized')) {
					checkbox.off('change.customForms');
					checkbox.each(function(){
						$(this).data('customCheckbox').off('click.customForms').remove();
					});
					checkbox.removeData();
				}else{
					throw new Error('object is not initialized');
				}
			},
			"check":function(checkbox){
				checkbox.trigger('change.customForms',['check']);
			},
			"uncheck":function(checkbox){
				checkbox.trigger('change.customForms',['uncheck']);
			},
			"toggle":function(checkbox){
				var method=this;
				checkbox.each(function(){
					if(!$(this).is(':checked')){
						method.check($(this));
					}else{
						method.uncheck($(this));
					}
				});
			}
		};
		callMethod=$.fn.checkbox.method;
	}
	var checkboxes=[];
	$(this).each(function(){
		if(!$(this).data('customized')){
			checkboxes.push(this);
		}
	});
	if(!$(this).size()){
		throw new Error('селектор '+$(this).selector+' возвратил пустой набор элементов');
	}
	if (checkboxes.length) {
		o=$.extend({
			"checkboxClass":"checked",
			"labelClass":"active",
			"customCheckboxClass":"checkbox"
		}, o);
		var customCheckbox = $('<span class="'+o.customCheckboxClass+'"></span>');
		checkboxes=$(checkboxes);
		checkboxes.data('customized', true);
		return checkboxes.each(function(){
			var checkbox = $(this),
				localCustomCheckbox = customCheckbox.clone(),
				checkboxClass=o.checkboxClass,
				labelClass=o.labelClass;
			checkbox.data('customCheckbox', localCustomCheckbox);
			localCustomCheckbox.insertAfter(checkbox);
			if (checkbox.closest('label').size()) {
				checkbox.data('label', checkbox.closest('label'));
			}
			else if (checkbox.attr('id')) {
				checkbox.data('label', $('label[for=' + checkbox.attr('id') + ']'));
			}
			checkbox.on('change.customForms',function(e, command){
				if (command == "check") {
					check();
				}
				else if (command == "uncheck") {
						uncheck();
					}
					else {
						if (checkbox.is(':checked')) {
							check();
						}
						else {
							uncheck();
						}
					}
			});
			if(checkbox.is(':checked')){
				localCustomCheckbox.addClass(checkboxClass);
			}
			localCustomCheckbox.on('click.customForms',function(e){
				if (!localCustomCheckbox.hasClass(checkboxClass)) {
					callMethod.check(checkbox);
				}
				else {
					callMethod.uncheck(checkbox);
				}
				e.preventDefault();
			});
			function check(){
				checkbox.attr('checked', true);
				localCustomCheckbox.addClass(checkboxClass);
				if (checkbox.data('label')) {
					checkbox.data('label').addClass(labelClass);
				}
			}
			function uncheck(){
				checkbox.attr('checked', false);
				localCustomCheckbox.removeClass(checkboxClass);
				if (checkbox.data('label')) {
					checkbox.data('label').removeClass(labelClass);
				}
			}
		});
	}else{
		throw Error('чекбокс/ы уже проинициализирован/ы');
	}
}
$.fn.radio=function(o){
	var callMethod=$.fn.radio.method;
	if(typeof o=="string" && o in $.fn.radio.method){
		var radio=$(this);
		callMethod[o](radio);
		return radio;
	}
	if(!("method" in $.fn.radio)){
		$.fn.radio.method={
			"destroy":function(radio){
				var initedEls=[];
				radio.each(function(){
					if($(this).data('customized')){
						initedEls.push(this);
					}
				});
				if(initedEls.length){
					radio=$(initedEls);
					radio.off('change.customForms');
					radio.each(function(){
						$(this).data('customRadio').off('click.customForms').remove();
					});
					radio.removeData();
				}else{
					throw new Error('объект не проинициализирован');
				}
			},
			"check":function(radio){
				radio.trigger('change',['check']);
			}
		};
		callMethod=$.fn.radio.method;
	}
	if(!('group' in $.fn.radio)){
		$.fn.radio.group={};
	}
	if(!$(this).size()){
		throw new Error('селектор '+$(this).selector+' возвратил пустой набор элементов');
	}
	var radios=[];
	$(this).each(function(){
		if(!$(this).data('customized')){
			radios.push(this);
		}
	});
	if (radios.length){
		o=$.extend({
			"radioClass":"checked",
			"labelClass":"active",
			"customRadioClass":"radio"
		}, o);
		var customRadio = $('<span class="'+o.customRadioClass+'"></span>'),
			group = $.fn.radio.group;
			radios = $(radios);
		radios.data('customized',true);
		radios.each(function(){
			if ($(this).attr('name') && !($(this).attr('name') in group)) 
				group[$(this).attr('name')] = radios.filter('input:radio[name=' + $(this).attr('name') + ']');
		});
		return radios.each(function(){
			var radio = $(this),
				localCustomRadio = customRadio.clone(),
				curGroup = radio.attr('name') in group ? group[radio.attr('name')] : 0,
				radioClass=o.radioClass,
				labelClass=o.labelClass;
			radio.data('customRadio', localCustomRadio);
			localCustomRadio.insertAfter(radio);
			if (radio.closest('label').size()) {
				radio.data('label', radio.closest('label'));
			}else if(radio.attr('id')) {
				radio.data('label', $('label[for='+radio.attr('id')+']'));
			}
			radio.on('change.customForms',function(e,command){
				if (radio.is(':checked') || command=="check") {
					if (curGroup){
						uncheck(curGroup.not(radio).next());
						if(curGroup.data('label')){
							curGroup.data('label').removeClass(labelClass);
						}
					}
					check(localCustomRadio);
					if(command=="check")check(radio);
					if (radio.data('label')){
						radio.data('label').addClass(labelClass);
					}
				}
			}).trigger('change');
			localCustomRadio.on('click.customForms',function(e){
				if(!localCustomRadio.hasClass(radioClass)){
					callMethod.check(radio);
				}
				e.preventDefault();
			});
			function check(radio){
				if(radio.is('input:radio')){
					radio.attr('checked', true);
				}else{
					radio.addClass(radioClass);
				}
			}
			function uncheck(radio){
				if(radio.is('input:radio')){
					radio.attr('checked', false);
				}else{
					radio.removeClass(radioClass);
				}
			}
		});
	}else{
		throw Error('радиокнопка/и уже проинициализирована/ы');
	}
}
