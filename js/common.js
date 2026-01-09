// スマホ用メニュー　クラス追加
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-globalnav");

ham.addEventListener("click", function () {
  ham.classList.toggle("_active");
  nav.classList.toggle("_active");
});


 // COMIC用メニュー　クラス追加
 const comicbtn = document.querySelector("#js-comicnav-btn");
 const comicnav = document.querySelector("#js-comicnav");
 
 comicbtn?.addEventListener("click", function () {
   comicbtn.classList.toggle("_active");
   comicnav.classList.toggle("_active");
 });
 

 // スムーススクロール
 const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
 for (let i = 0; i < smoothScrollTrigger.length; i++){
   smoothScrollTrigger[i].addEventListener('click', (e) => {
     e.preventDefault();
     let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
     const rect = targetElement?.getBoundingClientRect().top;
     const offset = window.pageYOffset;
     const gap = 0;
     const target = rect + offset - gap;
     window.scrollTo({
       top: target,
       behavior: 'smooth',
     });
   });
 }

