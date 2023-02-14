const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})

// When the user scrolls the page, execute myFunction

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 2000);

  function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    const projectImages = document.querySelectorAll(".projets h1 img");
    document.getElementById("myBar").style.width = scrolled + "%";
    
    const premierBlock = document.querySelector(".premierblock");
    const projects = document.querySelector("#projects");
    const progressBar = document.querySelector(".progress-bar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      premierBlock.classList.add("scrolled");
      projects.classList.remove("scrolled");
      projects.scrollIntoView({behavior: "smooth"});
      progressBar.classList.add("dark");
      projectImages.forEach(img => img.classList.add("dark"))
    } else {
      premierBlock.classList.remove("scrolled");
      projects.classList.add("scrolled");
      premierBlock.scrollIntoView({behavior: "smooth"});
      progressBar.classList.remove("dark");
      projectImages.forEach(img => img.classList.remove("dark"));
    }
  }

  window.onscroll = handleScroll;