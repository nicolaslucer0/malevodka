$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '0', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
    });

    $('.button-collapse').sideNav({
        menuWidth: 200, // Default is 300
        draggable: true,
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor*/
    });
    $('.carousel').carousel();
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 4000);

   $(function() {

        $('a[href*="#"]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({ scrollTop: targetOffset }, 600);
                    return false;
                }
            }
        });
    });

    /* ########### BOTON ARRIBA #############*/
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera    
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }

    /* ########### BOTON ARRIBA #############*/



});