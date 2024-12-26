function showMenu() {
  var hamburgerBars = document.getElementById('bars');
  var hamburgerTimes = document.getElementById('times');
  var navbarMobMenu = document.getElementById('mob-menu');

  hamburgerBars.style.display = 'none';
  hamburgerTimes.style.display = "block";
  navbarMobMenu.style.display = 'block';
}

closeMenu = () => {
  var hamburgerBars = document.getElementById('bars');
  var hamburgerTimes = document.getElementById('times');
  var navbarMobMenu = document.getElementById('mob-menu');
 
  hamburgerBars.style.display = 'block';
  hamburgerTimes.style.display = "none";
  navbarMobMenu.style.display = 'none';
}




