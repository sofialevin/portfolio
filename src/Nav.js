import React, { useState, useEffect } from 'react';

const Nav = (props) => {
  const [ prevScrollpos, setPrevScrollpos ] = useState(window.pageYOffset);
  const [ visible, setVisible ] = useState(true);

  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    const delta = 5;
    const isVisible = prevScrollpos > currentScrollPos;

    if(Math.abs(prevScrollpos - currentScrollPos) <= delta)
        return;

    setPrevScrollpos(currentScrollPos)
    if (currentScrollPos < 70) {
      setVisible(true)
    } else {
      setVisible(isVisible)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  // let prevScrollpos = window.pageYOffset;
  // window.onscroll = function() {
  // let currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-100px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // }

  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 5;
  // var navbarHeight = document.getElementById("navbar").outerHeight;

  // window.addEventListener('scroll', (event) => {
  //   didScroll = true;
  //   console.log("true")
  // })

//   setInterval(function() {
//       if (didScroll) {
//           hasScrolled();
//           didScroll = false;
//       }
//   }, 250);

//   function hasScrolled() {
//       var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;


  return (
    <nav className={visible ? null : "navbar--hidden"}>
      <ul>
        <li>
          <a href="#about" onClick={() => {
              props.scrollToAbout.current.scrollIntoView({ behavior: 'smooth' });
              }}>ABOUT</a>
        </li>
        <li>
          <a  href="#projects" onClick={() => {
                props.scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });}}>PROJECTS</a>
        </li>
        <li>
          <a  href="#contact" onClick={() => {
                props.scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
              }}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
 
export default Nav;