function myFunction9() {
    var a = $(document).scrollTop();
    if (a > 1) {
        document.getElementById("myBtn").style.display ="block";
    } else {
        document.getElementById("myBtn").style.display ="none";
    }
}

function openCloseNav()
{
    if(document.getElementById("navmenuin").style.display == "block")
        document.getElementById("navmenuin").style.display = "none";
    else document.getElementById("navmenuin").style.display = "block";
}

$('.submnDropbtn').click(function(){
    var content=$(this).data("target");
    $(content).slideToggle();
})

window.onscroll = function () {
    myFunction9()
};


function myFunctiondrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
//go to top button
$('#myBtn').click(function(){$('html, body').animate({ scrollTop: '0px' },1000);})
if($('.swiper-slide').hasClass("slideActiveClass"))
{
    $(this).html('<p>aaa</p>');

}



