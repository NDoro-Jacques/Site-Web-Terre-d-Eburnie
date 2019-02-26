//
//    ALL MY PERSONAL SCRIPTS
//

//MENU DROPDOWN HOVER
/*$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');      
        },
        function() {
            $('.dropdown-menu', this).not('.dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});*/

//CAROUSEL CHEVRONS
$(document).ready(function(){
    $("#eburnie").hover(            
        function() {
            $(".chevrons").toggleClass("hidden");
        }
    );
});