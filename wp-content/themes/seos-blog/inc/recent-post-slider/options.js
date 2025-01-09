function seosCheckPosition() {
	let x;
    if (window.matchMedia('(max-width: 800px)').matches) {
        x ="1";
		return x;
    } else {
        x ="3"; 
		return x;
    }
}


function getSpeedSlider () {
	if(objects.speed) {
		let sp = objects.speed;
		return sp;
	}
	else {
		let sp = 1000;
		return sp;
	}
}


jQuery('.autoplay1').not('.slick-initialized').slick({
  slidesToShow: seosCheckPosition() ,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: getSpeedSlider ()
});