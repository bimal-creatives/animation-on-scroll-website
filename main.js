document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline4 = new TimelineMax();
    timeline4
    .to('#device1', 4, {
        autoAlpha: 0
    })
    .from('#device2', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('#device3', 4, {
        autoAlpha: 0
    })
    .from('#device4', 4, {
        autoAlpha: 0
    })
    .from('#device5', 4, {
        autoAlpha: 0
    })
    .from('#device6', 4, {
        autoAlpha: 0
    })
    .from('#device7', 4, {
        autoAlpha: 0
    })
    .from('#device8', 4, {
        autoAlpha: 0
    })
    .from('#device9', 4, {
        autoAlpha: 0
    })
    .from('#device10', 4, {
        autoAlpha: 0
    })
    .from('#device11', 4, {
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.sticky',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline4)
    .setPin('.sticky')
    .addTo(controller);
})


