window.onload = function(){
    let g = new Glide('#slides',{
        type: 'slider',
        startAt: 0,
        // autoplay: 4500,
        animationDuration:750,
        // animationTimingFunc:'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
        // hoverpause: true,
        perView: 1
    }).mount();
}


