Compo=[
    {
        captain:"Starting at",
        price:{price:"$9.00",unit:"/m"},
        plan:"SHARED HOSTING",
        attr:["2GB RAM","20GB SSD Cloud Storage","Weekly Backups","DDoS Protection","Full Root Access","24/7/365 Tech Support"],
        btn:"BUY NOW"
    }
    
]



function TableProduct(div_Contain_Table,ArrayShow,Index){
    var divFa=$("#"+div_Contain_Table);
        var div_Container=$("<div class='TB_TablePrice_contaniner'></div>");
            var div_Captation=$("<div class='TB_TablePrice_captain'>"+ArrayShow[Index].captain+"</div>");
            var div_Price=$("<div class='TB_TablePrice_price'>"+ArrayShow[Index].price.price+"<span class='TB_TablePrice_price_ms'>"+ArrayShow[Index].price.unit+"</span></div>");
            var div_Plan=$("<div class='TB_TablePrice_plan'>"+ArrayShow[Index].plan+"</div>");
            var ul_Attr=$("<ul class='TB_TablePrice_Attr'></ul>");
                for(i=0;i<ArrayShow[Index].attr.length;i++){
                    var li_Attr=$("<li class='TB_TablePrice_Attr_li'>"+ArrayShow[Index].attr[i]+"</li>");
                    ul_Attr.append(li_Attr);
                }
            var div_Btn=$("<div class='TB_TablePrice_div'></div>")
            var a_Btn="<a class='TB_TablePrice_divBtn_btn'>"+ArrayShow[Index].btn+"</a>"
            div_Btn.append(a_Btn)


    div_Container.append(div_Captation)
    div_Container.append(div_Price)
    div_Container.append(div_Plan)
    div_Container.append(ul_Attr)
    div_Container.append(div_Btn)
    divFa.append(div_Container)

}
$(function () {
    TableProduct("check",Compo,0)
})