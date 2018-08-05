//$(function () {
//                    var posScreen=$(window).scrollTop()+$(window).height();
//                    var posButtonS1=$("#C_cloud_section1").position().top;
//                    if(posScreen>=0&&posScreen<1500){
//                        $("#C_cloud_section1").addClass("C_cloud_section_transform")
//                        $("#C_cloud_section1").css("opacity",1)}
//            });

$(function () {
    $(window).scroll(function () {

        //                var posButtondeal=$("#C_cloud_section3 .panel-body>button:first-child").position().top;
        var posScreen = $(window).scrollTop() + $(window).height();
        //                if(posScreen>posButtondeal) {
        //                    $("#C_cloud_section3 .panel-body>button:first-child").addClass("C_cloud_showandhidden");}
        //                var posButtonTK=$("#C_cloud_section4>.middle_Section>button:last-child").position().top;
        //                if(posScreen>posButtonTK) {
        //                    $("#C_cloud_section4>.middle_Section>button:last-child").addClass("C_cloud_showandhidden");}
        //                var posButtonS5=$("#C_cloud_section5").position().top;
        //                if(posScreen-300>posButtonS5){
        //                    $("#C_cloud_section5").addClass("C_cloud_section_transform")
        //                    $("#C_cloud_section5").css("opacity",1)
        //                }
        //
        //                var posButtonS7=$("#C_cloud_section7").position().top;
        //                if(posScreen-300>posButtonS7){
        //                    $("#C_cloud_section7").addClass("C_cloud_section_transform")
        //                    $("#C_cloud_section7").css("opacity",1)
        //                }
        //                var posButtonS2=$("#C_cloud_section2").position().top;
        //                if(posScreen-300>posButtonS2){
        //                    $("#C_cloud_section2").addClass("C_cloud_section_transform")
        //                    $("#C_cloud_section2").css("opacity",1)
        //                }

        //                var posButtonS1=$("#C_cloud_section1").position().top;

        var posDiv1 = $("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").position().top;
        if (posScreen - 300 > posDiv1) {
            $("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").addClass("C_cloud_part_transfrom_re1")
            $("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").css("opacity", 1)
            $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(2)").css("opacity", 1)
            $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(2)").addClass("C_cloud_part_transfrom_reP2")
            $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(3)").css("opacity", 1)
            $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(3)").addClass("C_cloud_part_transfrom_reP4")
            $("#C_cloud_section6 .row>.C_cloud_part_transfrom:nth-of-type(1)").addClass("C_cloud_part_transfrom_reP3")
            $("#C_cloud_section6 .row>.C_cloud_part_transfrom:nth-of-type(1)").css("opacity", 1)
        }
        //        
        //                        if(posScreen>posButtonS1&&posScreen<1500){
        //                            $("#C_cloud_section1").addClass("C_cloud_section_transform")
        //                            $("#C_cloud_section1").css("opacity",1)}

        $("#C_cloud_section4>.middle_Section>.row:first-child>.col-md-3>div button").each(function () {
            var posButtonDK = $(this).position().top;
            if (posScreen - 900 > posButtonDK) {
                $(this).addClass("C_cloud_showandhidden");
            }
        })
        $("#C_cloud_section4>.middle_Section>.row:nth-child(2)>.col-md-3>div button").each(function () {
            var posButtonDK = $(this).position().top;
            if (posScreen - 1300 > posButtonDK) {
                $(this).addClass("C_cloud_showandhidden");
            }
        })
        $("#C_cloud_section4>.middle_Section>.row:nth-child(3)>.col-md-3>div button").each(function () {
            var posButtonDK = $(this).position().top;
            if (posScreen - 1900 > posButtonDK) {
                $(this).addClass("C_cloud_showandhidden");
            }
        })
    })
})

function scrolldiv(idDiv, classAdd) {
    $(function () {
        $(window).scroll(function () {
            var posDiv = $("#"+idDiv).height() + $("#"+idDiv).position().top;
            var posScreen = $(window).scrollTop() + $(window).height();
            if (posDiv < posScreen) {
                $("#"+idDiv).addClass(classAdd + "");

            }
        })
    })

}
scrolldiv("section8", "section8-animation");
scrolldiv("title", "H-solution_section6_animation");
scrolldiv("content", "H-solution_section6_animation");
scrolldiv("title1", "H-solution_section6_animation");
scrolldiv("content1", "H-solution_section6_animation");
// JavaScript Document//Q&A==================================================
$(document).ready(function () {
    $('.dropbtn').click(function () {
        var drop = $(this).data("target");
        if ($(this).hasClass("btnactive")) {
            $(drop).removeClass("active");
            $(drop).slideUp();
            $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>');
            $(this).removeClass("btnactive");
        } else {
            $(".btnactive").html('<i class="fa fa-plus" aria-hidden="true"></i>');
            $(".btnactive").removeClass("btnactive");
            $(this).html('<i class="fa fa-minus" aria-hidden="true"></i>');
            $(this).addClass("btnactive");

            $('.active').slideUp();
            $(drop).addClass("active");
            $(drop).slideDown();
        }
    })
});

// JavaScript Document
function openTab(e, tabid) {
    var i;
    var elClick = e.target;
    var tabContent=document.getElementsByClassName("tab-content");
    for(i=0;i<tabContent.length;i++){
        tabContent[i].style.display='none';
    };

    var array = document.getElementsByTagName('a');
    for(i=0;i<array.length;i++){
        array[i].removeAttribute('class');
    };

    elClick.setAttribute('class','active');
    tabContent[tabid-1].style.display='block';


}
var arr=[
    {
        ten:"HP DL320e G8 1U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU :  Intel® Xeon® Sandy Bridge Quad-Core E3-1220v3 3.10GHz 8MB LGA 1155"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 8GB HP PC3-10600E UDIMMs DDR3"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x HP 500GB 3G SATA 7.2K 3.5in MDL"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",

        gia:"2.890.000",
    },

    {
        ten:"HP DL320E G8 1U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : Intel® Xeon® Ivy Bridge Quad-Core E3-1230v3 3.3GHz 8MB LGA 1155 69W"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 8GB HP PC3-10600E UDIMMs DDR3"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x HP 500GB 3G SATA 7.2K 3.5in MDL"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"2.990.000",

    },

    {
        ten:"HP DL120 G9 1U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1x Intel® Xeon® 6-Core Processor E5-2609v3 1.9Ghz, 15M"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 1 x 8G ( DDR3-1600)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x 500GB 7200rpm"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.390.000",

    },


    {
        ten:"HP DL120 G9 1U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1x Intel® Xeon® 6-Core E5-2620v3 2.4GHz,15MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 16GB (2x8GB) DDR3 1600"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x 500GB SATA 7200rpm, Hot Plug"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.890.000",

    },



    {
        ten:"HP DL120 G9 1U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1x Intel® Xeon® 10-Core E5-2650 v3 2.3Ghz,25MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 8G ( DDR3-1600)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x 300GB SAS 10K rpm"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"4.290.000",

    },

    {
        ten:"HP DL120 G9 2U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 2x Intel® Xeon® 6-Core E5-2609v3 1.9Ghz, 15M"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 32GB (4x8GB) DDR3 1600"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x 300GB SAS 10K rpm Hot Plug"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"4.700.000",
    },

    {
        ten:"HP DL 380 G9 2U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1x Intel® Xeon® 6-Core E5-2620v3 2.4GHz,15MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 8G ( DDR3-1600)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4x 300GB SAS 10.Krpm Hot Plug"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"4.590.000",
    },

    {
        ten:"HP DL 380 G9 2U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 2x Intel® Xeon® 10-Core Processor E5-2650v3 2.3Ghz,25MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 4x 8GB DDR3 1600"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4x 600GB SAS 10.000 rpm Hot Plug"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"6.690.000",
    }

];

var arr1=[
    {
        ten:"IBM® System® x3550 M4",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU :  1 x Intel® Xeon® 4-Core Processor E5-2609, 2.4GHz, 10MB, LGA2011"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 4GB IBM ECC DDR3 1333MHz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x IBM 500GB 2.5in SFF Slim-HS 7.2K NL SATA HDD"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",

        gia:"2.880.000",
    },
    {
        ten:"IBM® x3550 M4&nbsp; – 1 U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1x Intel® Xeon® 6-Core Processor E5-2620 v1 2.0GHz, 15MB LGA2011"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 4GB IBM ECC DDR3 1333MHz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x IBM 500GB 2.5in SFF Slim-HS 7.2K NL SATA HDD"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.000.000",

    },
    {
        ten:"IBM® x3650 M4 – 2 U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1 x Intel® Xeon® Processor E5-2620 (15M, 2.00 GHz)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 4GB IBM ECC DDR3 1333MHz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x IBM 300GB 2.5in SFF 10K 6Gbps HS SAS HDD"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.600.000",

    },
];
var arr2=[
    {
        ten:"Dell R720 E5-2650",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU :  1 x Intel Xeon 8-Core E5-2650 2.0GHz, 20M Cache, 8.0GT/s QPI"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 8GB (2x 4GB) Dell PC3-10600 CL9 ECC DDR3 LP RDIMM 1333MHz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x 300GB Dell SAS 6Gb/s 10KRPM 32M 2.5"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",

        gia:"5.700.000",
    },

    {
        ten:"Dell R720 2xE5-2620",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 2 x Intel Xeon 6-Core E5-2620 2.0GHz, 15M Cache, 7.20GT/s QPI"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 16GB (4x 4GB) Dell PC3-10600 CL9 ECC DDR3 LP RDIMM 1333MHzz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4 x 300GB Dell SAS 6Gb/s 10KRPM 32M 2.5″"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"5.650.000",

    },

    {
        ten:"DELL R210 II – E3-1220V2",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : Intel® Xeon® Sandy Bridge Quad-Core E3-1220V2 3.10GHz 8MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 4GB Dell PC3-10600 CL9 ECC DDR3 LP RDIMM 1333MHz"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x 500GB DELL 7200RPM HSW 3.5in HDD"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"1.300.000",

    },

    {
        ten:"DELL R210 II – E3-1230V2",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : Intel® Xeon® Sandy Bridge Quad-Core E3-1230 3.2 GHz 8MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 4GB PC3-10600 CL9 ECC DDR3"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x 500GB 7200RPM HSW 3.5in"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"1.350.000",

    },


];

var arr3=[
    {
        ten:"SuperMicro E3 – 1220v3 ",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU :  Intel® Xeon® Sandy Bridge Quad-Core E3-1220v3 3.10GHz 8MB LGA 1155"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 1 x 4GB DDR3 1333 240-Pin DDR3 ECC RDIMMs/UDIMMs (PC3 10666)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD :2 x WD RE4 500GB SATA 3Gb/s 7200RPM 64MB 3.5"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",

        gia:"2.490.000",
    },

    {
        ten:"SuperMicro E3 – 1230v3",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : Intel® Xeon® Sandy Bridge Quad-Core E3-1230v3 3.2GHz 8MB LGA 1155"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 1 x 4GB DDR3 1333 240-Pin DDR3 ECC RDIMMs/UDIMMs (PC3 10666)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x WD RE4 500GB SATA 3Gb/s 7200RPM 64MB 3.5"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"2.590.000",

    },


    {
        ten:"SuperMicro E5 2609v2",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1 x Intel® Xeon® Sandy Bridge-EP 4-Core Processor E5-2609v2, 2.4GHz, 10MB"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 2 x 4GB DDR3 1333 240-Pin DDR3 ECC RDIMMs/UDIMMs (PC3 10666)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 2 x WD RE4 500GB SATA 3Gb/s 7200RPM 64MB 3.5"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.390.000",

    },


    {
        ten:"SuperMicro E5 2620v2 -2U",
        mota:'<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" CPU : 1 x Intel® Xeon® Processor E5-2620 v2 (15M Cache, 2.10 GHz)"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" RAM : 4&nbsp;x 8GB Hynix DDR3 1333 240-Pin DDR3 ECC"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" HDD : 4&nbsp;x &nbsp;300GB SAS&nbsp;10K rpm Enterprise"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông trong nước : 100Mbps"
        +'</br>'+
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        +" Băng thông quốc tế : 10Mbps",
        gia:"3.890.000",

    },
];



function loadData()
{
    var div_main=document.getElementById("main");
    for (var i=0;i<arr.length;i++)
    {
        var div_n=document.createElement("div");

        div_n.className="ngoai";

        var tag_p=document.createElement("p");
        tag_p.innerHTML=arr[i].ten
        var tag_p1=document.createElement("p1");
        tag_p1.innerHTML=arr[i].mota
        var tag_p2=document.createElement("p2");
        tag_p2.innerHTML=arr[i].gia+"<sup> VND/</sup>THANG"



        //dat anh va p vao trong div_t lam con

        div_n.appendChild(tag_p);
        div_n.appendChild(tag_p1);
        div_n.appendChild(tag_p2);
        div_main.appendChild(div_n);
    }

}
function loadData1()
{
    var div_main=document.getElementById("main1");
    for (var i=0;i<arr1.length;i++)
    {
        var div_n=document.createElement("div");

        div_n.className="ngoai";

        var tag_p=document.createElement("p");
        tag_p.innerHTML=arr1[i].ten
        var tag_p1=document.createElement("p1");
        tag_p1.innerHTML=arr1[i].mota
        var tag_p2=document.createElement("p2");
        tag_p2.innerHTML=arr1[i].gia+"<sup> VND/</sup>THANG"

        //dat anh va p vao trong div_t lam con

        div_n.appendChild(tag_p);
        div_n.appendChild(tag_p1);
        div_n.appendChild(tag_p2);
        div_main.appendChild(div_n);
    }

}
function loadData2()
{
    var div_main=document.getElementById("main2");
    for (var i=0;i<arr2.length;i++)
    {
        var div_n=document.createElement("div");

        div_n.className="ngoai";

        var tag_p=document.createElement("p");
        tag_p.innerHTML=arr2[i].ten
        var tag_p1=document.createElement("p1");
        tag_p1.innerHTML=arr2[i].mota
        var tag_p2=document.createElement("p2");
        tag_p2.innerHTML=arr2[i].gia+"<sup> VND/</sup>THANG"

        //dat anh va p vao trong div_t lam con

        div_n.appendChild(tag_p);
        div_n.appendChild(tag_p1);
        div_n.appendChild(tag_p2);
        div_main.appendChild(div_n);
    }

}
function loadData3()
{
    var div_main=document.getElementById("main3");
    for (var i=0;i<arr3.length;i++)
    {
        var div_n=document.createElement("div");
        div_n.className="ngoai";

        var tag_p=document.createElement("p");
        tag_p.innerHTML=arr3[i].ten
        var tag_p1=document.createElement("p1");
        tag_p1.innerHTML=arr3[i].mota
        var tag_p2=document.createElement("p2");
        tag_p2.innerHTML=arr3[i].gia+"<sup> VND/</sup>THANG"
        //dat anh va p vao trong div_t lam con

        div_n.appendChild(tag_p);
        div_n.appendChild(tag_p1);
        div_n.appendChild(tag_p2);
        div_main.appendChild(div_n);
    }

}


    $(window).on("load",function () {
        $("#click").click();
    })