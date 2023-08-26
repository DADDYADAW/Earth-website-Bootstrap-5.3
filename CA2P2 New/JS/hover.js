const navEl = document.querySelector('.navbar');
  window.addEventListener('scroll',() => {
      if(window.scrollY >= 56){
          navEl.classList.add('navbar-scrolled')}
      else if(window.screenY < 56){
          navEl.classList.remove('navbar-scrolled')}})
 // Function to handle the resize event
  const Removeunderline = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.innerWidth < 992) {
      navLinks.forEach((link) => {
        link.classList.add('disable-hover');
      });
    } else {
      navLinks.forEach((link) => {
        link.classList.remove('disable-hover');
      });
    }
  };
  window.addEventListener('resize', Removeunderline);
  Removeunderline();

  document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})

var currentIndex = 0;
var hello = new Array( 'Hello', 'Bonjour', 'Hola' );

function randomIndex( ) { 
    return Math.floor( Math.random( ) * hello.length);
};

window.setInterval( function( ) {
    var newIndex = randomIndex( );
    while( newIndex === currentIndex ) newIndex = randomIndex();
    currentIndex = newIndex;
    document.getElementById("switch").textContent = hello[ currentIndex ]; 
}, 2300 );

