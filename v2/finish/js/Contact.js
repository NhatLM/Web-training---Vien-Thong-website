var flag=true;
function hide() {
//           $("#H_hide").css("display","none");
    $("#H_hide").css("opacity","0");
    $("#H_contact").css("width","0%");
    $("#H_contact").css("height","0%");
    $("#H_contact").css("fontSize","0px");
    $("#H_contact").css("color","#E242220");
}
$(function () {
    $("#H_hide").click(function () {
        hide();
        flag=false;
    })
    $("#Img-contact").click(function () {
        if(flag){hide();flag=false;}else{
            $("#H_hide").css("opacity","1");
            $("#H_hide").css("display","block");
            $("#H_contact").css("width","140px");
            $("#H_contact").css("height","140px");
            $("#H_contact").css("fontSize","12px");
            $("#H_contact").css("color","white");
            flag=true;
        }
    })

})