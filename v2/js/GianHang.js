Compo1=[
    {
        stt:0,
        captain:"Starting at",
        price:{price:"2.440.000",unit:" VND/THÁNG"},
        plan:"COLO 1",
        attr:["Không gian máy chủ: 1U","Công suất điện: 300W","Lưu lượng thông tin: Không giới hạn","Băng thông internet: 100Mps","Địa chỉ IP: 01","Điều hòa, may no, UPS: Không","Hỗ trợ kỹ thuật: Không"],
        btn:"ĐĂNG KÝ NGAY"
    },
    {
        stt:1,

        captain:"Starting at",
        price:{price:"3.420.000",unit:" VND/THÁNG"},
        plan:"COLO 1",
        attr:["Không gian máy chủ: 1U","Công suất điện: 300W","Lưu lượng thông tin: Không giới hạn","Băng thông internet: 100Mps","Địa chỉ IP: 01","Điều hòa, may no, UPS: Không","Hỗ trợ kỹ thuật: Không"],
        btn:"ĐĂNG KÝ NGAY"
    },{
        stt:2,
        captain:"Starting at",
        price:{price:"2.443.000",unit:" VND/THÁNG"},
        plan:"COLO 1",
        attr:["Không gian máy chủ: 1U","Công suất điện: 300W","Lưu lượng thông tin: Không giới hạn","Băng thông internet: 100Mps","Địa chỉ IP: 01","Điều hòa, may no, UPS: Không","Hỗ trợ kỹ thuật: Không"],
        btn:"ĐĂNG KÝ NGAY"
    },{
        stt:3,
        captain:"Starting at",
        price:{price:"2.490.000",unit:" VND/THÁNG"},
        plan:"COLO 1",
        attr:["Không gian máy chủ: 1U","Công suất điện: 300W","Lưu lượng thông tin: Không giới hạn","Băng thông internet: 100Mps","Địa chỉ IP: 01","Điều hòa, may no, UPS: Không","Hỗ trợ kỹ thuật: Không"],
        btn:"ĐĂNG KÝ NGAY"
    }
]


function update(index,ArrShow) {
    $("#Name_pak").text(ArrShow[index].plan)
    $("#Price_pak").text(ArrShow[index].price.price+"đ")
    $("#Thanh_Toan_Block").attr("disabled","disabled");
    $("#Thanh_Toan input[type~='number']").each(function () {
        $(this).closest('tr').find('td:last-of-type>span').text("0đ");
        $(this).val(0)
    })
    $("#Thanh_Toan input[type~='checkbox']").each(function () {
        $(this).closest('tr').find('td:last-of-type>span').text("0đ");
        $(this).prop('checked', false);
    })
    var total = 0;
    $("#Thanh_Toan .total").each(function () {
        priceSer = parseFloat($(this).text().substring(0, $(this).text().length - 1).replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
        total += priceSer;
    })
    $("#Thanh_Tien").text(total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
    $("#VAT").text((parseInt(total * 0.1)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
    $("#Total").text(parseInt((total * 1.1)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ/Tháng");
}
$(function () {
    $("#Thanh_Toan_next").click(function () {
        $("#Thanh_Toan").css("display","none");
        $("#Form_DK").css("display","block");
    })
    $("#Thanh_Toan_ComeBack").click(function () {
        $("#Thanh_Toan").css("display","none");
        $("#contain").append(GiangHang(3,$("#contain")));
    })
    $("#finish").click(function () {
        alert("end")
    })
})
$(function () {
    checkPrice_();
})
function checkPrice_() {

    $("#Thanh_Toan_key").change(function () {
        if(this.checked){
            $("#Thanh_Toan_Block").removeAttr("disabled");
        }else{
            $("#Thanh_Toan_Block").attr("disabled","disabled");
            $("#Thanh_Toan_Block").val(0);
            $("#Thanh_Toan_Block").closest('tr').find('td:last-of-type>span').text("0đ");
        }
    })

    $("#Thanh_Toan input[type~='number']").change( function (e) {
        var $trigger = $(this);
        var price = parseInt($trigger.siblings("span").text().replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
        var Number = parseInt($trigger.val());
        if (Number < 0 || Number > 1000) {
            $trigger.val(0);
        } else {
            $trigger.closest('tr').find('td:last-of-type>span').text((Number * price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
        }
    });
    $("#Thanh_Toan input[type~='checkbox']").change(function () {
        var $trigger = $(this);
//                alert($trigger.siblings("span").text().replaceAll(".", ""))
        var price = parseInt($trigger.siblings("span").text().replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
        var Number = 0;
        if (this.checked) {
            Number = 1;
        } else {
            Number = 0;
        }
        $trigger.closest('tr').find('td:last-of-type>span').text((Number * price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
    })
    $("#Thanh_Toan input").change(function () {
        var total = 0;
        $("#Thanh_Toan .total").each(function () {
            priceSer = parseFloat($(this).text().substring(0, $(this).text().length - 1).replace(".", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
            total += priceSer;
        })
        $("#Thanh_Tien").text(total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
        $("#VAT").text((parseInt(total * 0.1)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ");
        $("#Total").text(parseInt((total * 1.1)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "đ/Tháng");
    })
}

function GiangHang(numberProduct,divFa){
    var container=$("<div class='row GiangHang_container'></div>")
    for(let i=0;i< numberProduct;i++)
    {
        var divCo=$("<div class='col-md-4'></div>")
        divCo.css("marginTop","30px")


        var table=TableProduct(divCo,Compo1,i,true)
        table.btn.click(function () {
            update(i,Compo1);
            $("#Thanh_Toan").css("display",'block');
            container.css("display","none");
        })


        container.append(divCo)
    }
    return container;
}

$(function () {
    $("#contain").append(GiangHang(3,$("#contain")));
})

