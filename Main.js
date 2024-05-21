let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('nav');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('flex')
}


//            NOTIFY DISPLAY
// let instagram = document.getElementById('insta');
// let notify = document.getElementById('notify');
// let x = document.getElementById('x');
// instagram.onclick = ()=>{
//     notify.classList.toggle('display');
// }
// x.onclick= ()=>{
//     notify.classList.remove('display');
// }


window.onscroll= ()=>{
    let sections = document.querySelectorAll('section');
    let navLinks =  document.querySelectorAll('Header nav a');


    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if(top >= offset && top < offset + height){
            // active nav links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('Header   nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add("show-animate");
        }
        else{
            sec.classList.remove("show-animate");

        }
    })

    let header= document.querySelector('Header');
    header.classList.toggle('sticky', window.scrollY > 70);
}


