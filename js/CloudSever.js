$(function () {
                    var posScreen=$(window).scrollTop()+$(window).height();
                    var posButtonS1=$("#C_cloud_section1").position().top;
                    if(posScreen>=0&&posScreen<1500){
                        $("#C_cloud_section1").addClass("C_cloud_section_transform")
                        $("#C_cloud_section1").css("opacity",1)}
            });
        $(function () {
            $(window).scroll(function () {

                var posButtondeal=$("#C_cloud_section3 .panel-body>button:first-child").position().top;
                var posScreen=$(window).scrollTop()+$(window).height();
                if(posScreen>posButtondeal) {
                    $("#C_cloud_section3 .panel-body>button:first-child").addClass("C_cloud_showandhidden");}
                var posButtonTK=$("#C_cloud_section4>.middle_Section>button:last-child").position().top;
                if(posScreen>posButtonTK) {
                    $("#C_cloud_section4>.middle_Section>button:last-child").addClass("C_cloud_showandhidden");}
                var posButtonS5=$("#C_cloud_section5").position().top;
                if(posScreen-300>posButtonS5){
                    $("#C_cloud_section5").addClass("C_cloud_section_transform")
                    $("#C_cloud_section5").css("opacity",1)
                }

                var posButtonS7=$("#C_cloud_section7").position().top;
                if(posScreen-300>posButtonS7){
                    $("#C_cloud_section7").addClass("C_cloud_section_transform")
                    $("#C_cloud_section7").css("opacity",1)
                }
                var posButtonS2=$("#C_cloud_section2").position().top;
                if(posScreen-300>posButtonS2){
                    $("#C_cloud_section2").addClass("C_cloud_section_transform")
                    $("#C_cloud_section2").css("opacity",1)
                }

                var posButtonS1=$("#C_cloud_section1").position().top;

                var posDiv1=$("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").position().top;
                if(posScreen>posDiv1){
				
                    $("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").addClass("C_cloud_part_transfrom_re1")
                    $("#C_cloud_section6 .middle_Section>.C_cloud_part_transfrom:first-child").css("opacity",1)
                    $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(2)").css("opacity",1)
                    $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(2)").addClass("C_cloud_part_transfrom_reP2")
                    $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(3)").css("opacity",1)
                    $("#C_cloud_section6 .C_cloud_part_transfrom:nth-of-type(3)").addClass("C_cloud_part_transfrom_reP4")
                    $("#C_cloud_section6 .row>.C_cloud_part_transfrom:nth-of-type(1)").addClass("C_cloud_part_transfrom_reP3")
                    $("#C_cloud_section6 .row>.C_cloud_part_transfrom:nth-of-type(1)").css("opacity",1)
                }
//
                if(posScreen>posButtonS1&&posScreen<1500){
                    $("#C_cloud_section1").addClass("C_cloud_section_transform")
                    $("#C_cloud_section1").css("opacity",1)}

                $("#C_cloud_section4>.middle_Section>.row:first-child>.col-md-3>div button").each(function () {
                        var posButtonDK=$(this).position().top;
                        if(posScreen-900>posButtonDK) {
                            $(this).addClass("C_cloud_showandhidden");}
                    })
                $("#C_cloud_section4>.middle_Section>.row:nth-child(2)>.col-md-3>div button").each(function () {
                    var posButtonDK=$(this).position().top;
                    if(posScreen-1300>posButtonDK) {
                        $(this).addClass("C_cloud_showandhidden");}
                })
                $("#C_cloud_section4>.middle_Section>.row:nth-child(3)>.col-md-3>div button").each(function () {
                    var posButtonDK=$(this).position().top;
                    if(posScreen-1900>posButtonDK) {
                        $(this).addClass("C_cloud_showandhidden");}
                })
            })
        })