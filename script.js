// section-1
let slideImg = Array.from(document.querySelectorAll('.section-1-img img'))
let counter  = 0
let timer    = 3000

setInterval(()=>{

    // function that gives the next image (with the class "active")
    if(counter < slideImg.length -1){
        
        counter ++
        slideImg[counter].classList.add("active")
        slideImg[counter-1].classList.remove("active")
    } else{
        counter = 0
        slideImg[counter].classList.add("active")
        slideImg[slideImg.length -1].classList.remove("active")
    }

},timer)

// navbar animation
const navbarLink = document.querySelectorAll(".navbar-link");
const navbarSection = document.querySelector(".navbar-section");
const menu = document.querySelector(".menu");

menu.addEventListener("click", ()=>{

	for (let i = 0; i < navbarLink.length; i++) {
		navbarLink[i].classList.toggle("active");
	}
	navbarSection.classList.toggle("active");

})