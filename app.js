// *******date*****
const date = document.getElementById('date');

// console.log(date);

date.textContent = new Date().getFullYear();

//****display nav links****
const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector('.links');


navToggle.addEventListener('click',()=>{
    // console.log('clicked');
    // linkContainer.classList.toggle('show-links');
    const linkContainerHeight = linkContainer.getBoundingClientRect().height
    const linksUlHeight = links.getBoundingClientRect().height;
    console.log(linksUlHeight);

   if(linkContainerHeight === 0){
        linkContainer.style.height = `${linksUlHeight}px`;
        // linkContainer.classList.toggle('show-links');
   }
   else{
    linkContainer.style.height = 0;
   }
})

// **********fixed scroll on nav********
const navBar = document.getElementById('nav');

window.addEventListener('scroll',()=>{
    let scrollHeight = window.scrollY
    // console.log(window.scrollY)
    const navBarHeight = navBar.getBoundingClientRect().height
    if(scrollHeight > navBarHeight){
        navBar.classList.add("fixed-nav");
    }else{
        navBar.classList.remove('fixed-nav');
    }


    const scrollToTop = document.querySelector(".top-link");

    if(scrollHeight > 500){
        scrollToTop.classList.add('show-top-link');
    }else{
        scrollToTop.classList.remove('show-top-link'); 
    }
})


// ******Scroll Effect*******
const scrollLinks = document.querySelectorAll('.scroll-link');
console.log(scrollLinks);

scrollLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
       const id = e.currentTarget.getAttribute('href').slice(1);

    //    console.log(id);
        const section = document.getElementById(id)
        const navBarHeight = navBar.getBoundingClientRect().height
        const linkContainerHeight = linkContainer.getBoundingClientRect().height
        // const linksUlHeight = links.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        
           
        let position = section.offsetTop - navBarHeight
        if(!fixedNav){
            position = position - navBarHeight
        }

        if(navBarHeight > 82){
            position = position + linkContainerHeight
        }
        console.log(position);
        window.scrollTo ({ 
           top: position,
           left: 0,
           behavior: 'smooth'
        })

        linkContainer.style.height = 0;

    })
})