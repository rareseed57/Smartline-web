/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var menutoggle=false;

window.onscroll = function ()
{
  var currentScrollPos = window.pageYOffset;
  var fixCurrentScrollPos = currentScrollPos+300;
  
  if (prevScrollpos > currentScrollPos)
  {
    showNav();
  }
  else
  {
    hideNav();
  }
  
  if (currentScrollPos> 80)
  {
    document.getElementById("div_toolbar").style.backgroundColor= "rgba(0,0,0,0.2)";
  }
  else
  {
    document.getElementById("div_toolbar").style.backgroundColor= "transparent";
  }
  
  menuClose(document.getElementById("menubutton"));
  
  if (fixCurrentScrollPos< document.getElementById("section_admin").offsetTop)
  {
    document.getElementById("section_intro").style.opacity = 1;
    document.getElementById("section_admin").style.opacity = 0.1;
    document.getElementById("section_tech").style.opacity = 0.1;
    document.getElementById("section_database").style.opacity = 0.1;
    
    document.getElementById("section_intro").style.transform = "scale(" + 1 +")";
    document.getElementById("section_admin").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_tech").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_database").style.transform = "scale(" + 0.8 +")";
  }
  else if (fixCurrentScrollPos> document.getElementById("section_admin").offsetTop && fixCurrentScrollPos< document.getElementById("section_tech").offsetTop)
  {
    document.getElementById("section_intro").style.opacity = 0.1;
    document.getElementById("section_admin").style.opacity = 1;
    document.getElementById("section_tech").style.opacity = 0.1;
    document.getElementById("section_database").style.opacity = 0.1;
    
    document.getElementById("section_intro").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_admin").style.transform = "scale(" + 1 +")";
    document.getElementById("section_tech").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_database").style.transform = "scale(" + 0.8 +")";
    //document.body.style.background = "linear-gradient(135deg, rgba(0,255,80,1) 0%, rgba(0,95,255,1) 59%)";
  }
  else if (fixCurrentScrollPos> document.getElementById("section_tech").offsetTop && fixCurrentScrollPos< document.getElementById("section_database").offsetTop)
  {
    document.getElementById("section_intro").style.opacity = 0.1;
    document.getElementById("section_admin").style.opacity = 0.1;
    document.getElementById("section_tech").style.opacity = 1;
    document.getElementById("section_database").style.opacity = 0.1;
  
    document.getElementById("section_intro").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_admin").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_tech").style.transform = "scale(" + 1 +")";
    document.getElementById("section_database").style.transform = "scale(" + 0.8 +")";
    //document.body.style.background = "linear-gradient(135deg, rgba(140,95,255,1) 0%, rgba(235,0,255,1) 59%)";
  }
  else if (fixCurrentScrollPos> document.getElementById("section_database").offsetTop && fixCurrentScrollPos<document.getElementById("last").offsetTop)
  {
    document.getElementById("section_intro").style.opacity = 0.1;
    document.getElementById("section_admin").style.opacity = 0.1;
    document.getElementById("section_tech").style.opacity = 0.1;
    document.getElementById("section_database").style.opacity = 1;
    
    document.getElementById("section_intro").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_admin").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_tech").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_database").style.transform = "scale(" + 1 +")";
    //document.body.style.background = "rgb(255,95,252)";
    //document.body.style.background = "linear-gradient(135deg, rgba(255,95,252,1) 0%, rgba(255,146,154,1) 59%)";
  }
  else if (fixCurrentScrollPos> document.getElementById("last").offsetTop)
  {
    document.getElementById("section_intro").style.opacity = 0.1;
    document.getElementById("section_admin").style.opacity = 0.1;
    document.getElementById("section_tech").style.opacity = 0.1;
    document.getElementById("section_database").style.opacity = 0.1;
    
    document.getElementById("section_intro").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_admin").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_tech").style.transform = "scale(" + 0.8 +")";
    document.getElementById("section_database").style.transform = "scale(" + 0.8 +")";
    //document.body.style.background = "rgb(255,132,0)";
    //document.body.style.background = "linear-gradient(135deg, rgba(255,145,0,1) 0%, rgba(255,215,38,1) 59%)";
  }
  
  /*
  document.getElementById("section_tech").style.opacity = window.pageYOffset/(0.40* document.body.scrollHeight)*2.5;  
  document.getElementById("section_admin").style.opacity = window.pageYOffset/(0.85* document.body.scrollHeight)*2.5;
  document.getElementById("section_database").style.opacity = window.pageYOffset/(1.2* document.body.scrollHeight)*3;
  
  document.getElementById("section_tech").style.transform = "scale =(" + (window.pageYOffset/(0.40* document.body.scrollHeight)*2.5) + ")";  
  document.getElementById("section_admin").style.transform = "scale =(" + (window.pageYOffset/(0.85* document.body.scrollHeight)*2.5) + ")"; 
  document.getElementById("section_database").style.transform = "scale =(" + (window.pageYOffset/(1.20* document.body.scrollHeight)*3) + ")";
  
  
  document.getElementById("section_tech").style.marginTop = (500 * (1- (window.pageYOffset/(0.24* document.body.scrollHeight)*1.5))) +"px";
  document.getElementById("section_admin").style.marginTop = (500 * (1- (window.pageYOffset/(0.62* document.body.scrollHeight)*1.5))) +"px";
  document.getElementById("section_database").style.marginTop = (500 * (1- (window.pageYOffset/(0.90* document.body.scrollHeight)*1.5))) +"px";
  */
  
  prevScrollpos = currentScrollPos;
};

function hideNav()
{
    document.getElementById("div_toolbar").style.top = "-180px";
}

function showNav()
{
    document.getElementById("div_toolbar").style.top = "0";
}

function menuToggle(x)
{
  x.classList.toggle("change");
  
  if (menutoggle)
  {
    menutoggle=false;
  }
  else
  {
    menutoggle=true;
  }
  
  if (menutoggle)
  {
    document.getElementById("dropdown-content").style.right="0vw";
  }
  else
  {
    document.getElementById("dropdown-content").style.right="-100vw";
  }  
}

function menuClose(x)
{
  if (menutoggle)
  {
    x.classList.toggle("change");
    menutoggle=false;
    document.getElementById("dropdown-content").style.right="-100vw";
  }
}

/*
function mouseMove(x)
{
    var mousex = event.clientX;     // Get the horizontal coordinate
    var mousey = event.clientY;     // Get the vertical coordinate
    document.getElementById("intro").style.transform = "rotateX(" + mousex*0.03 + "deg) rotateY(" + mousey*0.03 + "deg)";
}
*/