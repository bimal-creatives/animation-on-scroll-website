
	;(function(){
    let chck_if_gsap_loaded = setInterval(function(){
			const eleBuilder = document.querySelector('body').classList.contains("elementor-editor-active");
			const screenSize = window.screen.width >= 1025;
       if(window.gsap && window.ScrollTrigger && !eleBuilder && screenSize){
            gsap.registerPlugin(ScrollTrigger);
            image_mask();
            clearInterval(chck_if_gsap_loaded);
        }
    }, 500);

function image_mask(){
const imageMask	= document.querySelector('.elementor-element .circle-mask.elementor-widget-image .elementor-widget-container img');
gsap.to(imageMask	,{
    	scrollTrigger: {
      trigger: '.start-gsap-mask',
      start: '-15% 25%',
			end: '25% 25%',
      scrub:1
    	},
				webkitMaskSize: 70 + '%',
    		duration: 1
			});
}

})();



