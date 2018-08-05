
silde=[
    {
        caption:"VPS3",
        title:"HOSTING 3",
        noteTitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores ducimus pariatur optio sint autem odio, provident quia debitis in.",
        attr:["  Lorem ipsum dolor sit amet. 1","  Lorem ipsum dolor sit amet. 2","  Lorem ipsum dolor sit amet. 3","  Lorem ipsum dolor sit amet. 4"],
        price:{price:"$10",unit:"/MONTH"}
    }
]

function AnimationSlide(div_contain){
    var divFa=$("#"+div_Contain);
    var div_Container=$("<div class='TB_TablePrice_contaniner'></div>");
    // var div_Captation=$("<div class='TB_TablePrice_captain'>"+ArrayShow[Index].captain+"</div>");
    // var div_Price=$("<div class='TB_TablePrice_price'>"+ArrayShow[Index].price.price+"<span class='TB_TablePrice_price_ms'>"+ArrayShow[Index].price.unit+"</span></div>");
    // var div_Plan=$("<div class='TB_TablePrice_plan'>"+ArrayShow[Index].plan+"</div>");
    // var ul_Attr=$("<ul class='TB_TablePrice_Attr'></ul>");
    // for(i=0;i<ArrayShow[Index].attr.length;i++){
    //     var li_Attr=$("<li class='TB_TablePrice_Attr_li'>"+ArrayShow[Index].attr[i]+"</li>");
    //     ul_Attr.append(li_Attr);
    // }
    // var div_Btn=$("<div class='TB_TablePrice_div'></div>")
    // var a_Btn="<a class='TB_TablePrice_divBtn_btn'>"+ArrayShow[Index].btn+"</a>"
    // div_Btn.append(a_Btn)
    //
    //
    // div_Container.append(div_Captation)
    // div_Container.append(div_Price)
    // div_Container.append(div_Plan)
    // div_Container.append(ul_Attr)
    // div_Container.append(div_Btn)
    divFa.append(div_Container)
}
$(function () {
    AnimationSlide("check")
})