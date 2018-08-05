function swipper2(div_ContainSwipper,numberOfSliderIn_Swipper, numberOfSliderIn_OneShow, numberOfSlider_InOne_NextPrev,HasLoop, HasPagination, HasTopic, Repo_990px, Repo_500px, Space_Between_2Slider) {
    var swipper_Topic = $("<div style='height:10%;width:100%;padding:0px;'></div>");
    if (HasTopic) {
        $("#" + div_ContainSwipper).append(swipper_Topic);
    }

    var stymtax1 = $("<div class='swiper-container'></div>");
    var swapper_ContainSlider = $("<div class='swiper-wrapper'></div>");
    stymtax1.append(swapper_ContainSlider);

    var arrayFaSlider=new Array();
    var arraySlider=new Array();
    for (var i = 0; i < numberOfSliderIn_Swipper; i++) {
        var swapper_FaSlider = $("<div class='swiper-slide' style='padding:10px "+Space_Between_2Slider/2+"px'></div>");
        arrayFaSlider[i]=swapper_FaSlider;
        var swapper_Slider = $("<div style='padding:0px;height: 100%;width: 100%;border: dotted 1px #5CB85C'></div>");
        arraySlider[i]=swapper_Slider;
        swapper_FaSlider.append(swapper_Slider);
        swapper_ContainSlider.append(swapper_FaSlider);
    }

    if (HasPagination) {
        var swapper_Pagination = $("<div></div>").addClass("swiper-pagination");
        swapper_Pagination.css("bottom", "-5px")
        stymtax1.append(swapper_Pagination);
    }

    var swapper_next = $("<div class='swiper-button-next' ></div>");
    var swapper_prev = $("<div class='swiper-button-prev' ></div>");
    stymtax1.append(swapper_next);
    stymtax1.append(swapper_prev);

    $("#" + div_ContainSwipper).append(stymtax1);
    var swiper = new Swiper("#" + div_ContainSwipper + ' .swiper-container', {
        slidesPerView: numberOfSliderIn_OneShow,
        spaceBetween: 0,
        breakpoints: {
            990: {
                slidesPerView: Repo_990px,
                spaceBetween: 0,
                slidesPerGroup: 1
            },
            500: {
                slidesPerView: Repo_500px,
                spaceBetween: 0,
                slidesPerGroup: 1
            }
        },
        slidesPerGroup: numberOfSlider_InOne_NextPrev,
        loop: HasLoop,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#" + div_ContainSwipper + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: "#" + div_ContainSwipper + ' .swiper-button-next',
            prevEl: "#" + div_ContainSwipper + ' .swiper-button-prev',
        },
    });
    return {
        Topic:swipper_Topic,
        Next:swapper_next,
        Pre:swapper_prev,
        BigContainSlider:stymtax1,
        ContainSlider:swapper_ContainSlider,
        BigSlider:arrayFaSlider,
        Slider:arraySlider,
        Pagination:swapper_Pagination,
    };
}
    $(function () {
        // swipper2("check2",4,2,1,false,true,true,2,1,0);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })
