$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#fff', '#fff'],
      anchors: ['firstPage', 'secondPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});

function restartFullpage() {
  $.fn.fullpage.destroy('all');
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#fff', '#fff', '#fff'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
}
