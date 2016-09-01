$(document).ready(function(){

	$(".category-card button").click(function(){
		$(".category-card").removeClass("active");
		$(this).parent().addClass("active");
		$(this).attr('data-filter');

		
	});
	
		


  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

	 f=window.location.search;
	 
	if( f.indexOf('category')!=-1)
	{
		fDate=f.split('=');
		
			 var filterValue = '.'+fDate[1];
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
	// $(".category-card:eq(0)").addClass("active");
	$(".category-card .button[data-filter='"+filterValue+"']").parent().addClass("active");
	$(".category-card .button[data-filter='"+filterValue+"']").addClass("is-checked");
		
	}
//		console.log();
	$(".category-card .button[data-filter='.novaya']").click();
	$(".category-card .button[data-filter='.new']").click();

        if (window.location.hash) {
          var hash = window.location.hash.substring(1);
          if (hash == 'start') {
	    $(".category-card .button[data-filter='.nachalo']").click();
	    $(".category-card .button[data-filter='.start']").click();
          }	
        }

/*
	if( f.indexOf('nachalo')!=-1)
	{
	 var filterValue = '.nachalo';
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
	$(".category-card:eq(0)").addClass("active");
	$(".category-card:eq(0) button").addClass("is-checked");
	}
	
	
	if( f.indexOf('novaya')!=-1)
	{
	 var filterValue = '.novaya';
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
	$(".category-card:eq(1)").addClass("active");
	$(".category-card:eq(1) button").addClass("is-checked");
	}
	
	
	if( f.indexOf('vaznye')!=-1)
	{
	 var filterValue = '.vaznye';
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
	$(".category-card:eq(2)").addClass("active");
	$(".category-card:eq(2) button").addClass("is-checked");
	}
	
	
	if( f.indexOf('baza_znanyi')!=-1)
	{
	 var filterValue = '.baza_znanyi';
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
	$(".category-card:eq(3)").addClass("active");
	$(".category-card:eq(3) button").addClass("is-checked");
	}
*/




	var bugform = $("#bugform_popup");
    $(".btn-close").click(function() {
		$("#bugform_popup").hide();
	});
	
	$("#bugform_show").click(function() {
		var jo = $(window).width();
		if(jo > 500){
			$(".popup").css('left', jo/2-300);
		}
		$("#bugform_popup").show();
        bugform.find(".skip").hide();
        //bugform.find(".popup").css('top', $(document).scrollTop() + 350);
        bugform.find(".new").show();
    });
 
    bugform.find("form").submit(function(event) {
        bugform.find(".sending").show();
        bugform.find(".new").hide();
        var email = bugform.find("input[name=email]").val();
        var msg   = bugform.find("form textarea").val();
 
        $.post(encodeURI(bugform.find("form").attr('action')),
               {
                   email: email,
                   msg: msg,
                   url: 'http://whoer.net/ru'
               })
            .always(function (response) {
                if (response === "ok") {
                    bugform.find("form textarea").val('');
                    bugform.find(".complete").show();
                }
                else {
                    bugform.find(".error").show();
                    bugform.find(".new").show();
                }
                bugform.find(".sending").hide();
            });
        event.preventDefault();
    });

	jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
	}
	
	
	if (document.location.protocol === 'https:') {
		$('a').each(function() {
			var href = $(this).attr('href');
			if (href.indexOf('http:') > -1) {
				href = href.replace('http:', 'https:');
				$(this).attr('href', href);
			}
		});
	}
});
