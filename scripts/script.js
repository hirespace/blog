$(document).ready(function(){

    $(document).on('click', '[data-role=scroll-to-post]', function (e) {
        e.preventDefault();
        var element = $(this).attr('href');
        $(animateSection(element,-30));
    });


    // Function to animate sections
    var animateSection = function(sectionName, offset){
        $('html,body').animate({
          scrollTop: $(sectionName).offset().top + offset
        }, 1500);
    }
});