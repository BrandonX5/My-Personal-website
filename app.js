// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();



const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    const accordionIcon = header.querySelector('i');
    
    accordionContent.classList.toggle('active-accordin');
    accordionContent.style.maxHeight = accordionContent.classList.contains('active-accordin') ? accordionContent.scrollHeight + 'px' : '0';
    
    accordionIcon.classList.toggle('fa-chevron-down');
    accordionIcon.classList.toggle('fa-chevron-up');
  });
});



