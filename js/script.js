$(document).ready(function() {
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
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor*/
    });
    $('.carousel').carousel();
    setInterval(function() {
        $('.carousel').carousel('next');
    }, 4000);
});