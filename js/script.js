$('.slider').on('init', function(event, slick){
	console.log('.slider init');
  
		  AOS.init({
			  easing: 'ease-out-back',
			  duration: 1000
		  });
  });   
$(document).ready(function(){ 		//слайдер
	$('.slider').slick({
		slidesToShow:2,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1500,
		responsive:[
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function () { //услуги и отзывы
  
	$('.client-single').on('click', function (event) {
	   event.preventDefault();
	
	   var active = $(this).hasClass('active');
	
	   var parent = $(this).parents('.testi-wrap');
	
	   if (!active) {
		   var activeBlock = parent.find('.client-single.active');
	
		   var currentPos = $(this).attr('data-position');
	
		   var newPos = activeBlock.attr('data-position');
	
		   activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
		   activeBlock.attr('data-position', currentPos);
	
		   $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
		   $(this).attr('data-position', newPos);
	
	   }
	});
	
	}(jQuery));

	$(".footer-right").submit(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "wdh_send_form.php",
			data: $("#wdh_form").serialize(),
			success: function(data) {
				$("#wdh_result_form").html(data);
			}
		});
	});
	
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('element-show');
			}
		});
	}

	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.element-animation');

	for (let elm of elements) {
		observer.observe(elm);
	}
	