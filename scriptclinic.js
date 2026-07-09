const faqQuestion = document.querySelectorAll('.faq-question');
faqQuestion.forEach(question =>{
    question.addEventListener('click',() =>{
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight){
            answer.style.maxHeight =null;
        }else{
            answer.style.maxHeight=answer.scrollHeight+ 'px';
        }
    });
});
const backToTop =document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});
backToTop.addEventListener("click",() =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});
const counters =document.querySelectorAll(".counter");
const observerOptions ={
    threshold: 0.7
};
const observer = new IntersectionObserver((entris,  observer)=>{
    entris.forEach(entry=>{
        if(entry.isIntersecting){
            const counter =entry.target;
            const updateCounter = () =>{
                const target = +counter.getAttribute("data-target");
                const current= +counter.innerText;
                const increment= target / 100;
                if (current < target){
                    counter.innerText =Math.ceil(current + increment);
                    setTimeout(updateCounter,20);
                }else{
                    counter.innerText =target
                }
            };
            updateCounter();
            observer.unobserve(counter);
        }
    });
},observerOptions);
counters.forEach(counter => {
    observer.observe(counter);
});
const statBoxs =document.querySelectorAll(".stat-box");
const observe = new IntersectionObserver((entris) =>{
    entris.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }
    });
},{threshold :0.3});
statBoxs.forEach(box =>{
    observe.observe(box);
});
const header= document.querySelector(".main-header");
window.addEventListener("scroll", () => {
    if (window.scrollY >400) {
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});
const doctorContainer = document.querySelector(".doctor-container");
document.getElementById("doctor-next").onclick =() =>{
    doctorContainer.scrollBy({
        left:310,
        behavior: "smooth"
    });
};
setInterval(() => {
    if (
        doctorContainer.scrollLeft + doctorContainer.clientWidth >=
        doctorContainer.scrollWidth -20
    )
    {
        doctorContainer.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else{
        doctorContainer.scrollBy({
            left: -310,
            behavior: "smooth"
        });
    }
},4000);
document.getElementById("doctor-prev").onclick= ()=> {
    doctorContainer.scrollBy({
        left:-310,
        behavior: "smooth"
    });
};
const bookingBtn = document.querySelector(".floating-booking");
const hero = document.querySelector("#hero");
const bookingSection = document.querySelector("#booking-section");
window.addEventListener("scroll", () => {
    const heroBottom =hero.offsetHeight;
    const bookingTop = bookingSection.offsetTop -300;
    if(
        window.scrollY < heroBottom - 20 ||
        window.scrollY > bookingTop
    ){
        bookingBtn.style.opacity ="0";
        bookingBtn.style.pointerEvents ="none";
    }else{
        bookingBtn.style.opacity ="1";
        bookingBtn.style.pointerEvents ="auto";
    }
});
const mapBtn = document.querySelector(".floating-map");
const mapSection = document.querySelector("#map-section");
window.addEventListener("scroll", () => {
    const mapTop = mapSection.offsetTop -100;
    if(
        window.scrollY <50 ||
        window.scrollY > mapTop
    ){
        mapBtn.style.opacity ="0";
        mapBtn.style.pointerEvents ="none";
    }else{
        mapBtn.style.opacity ="1";
        mapBtn.style.pointerEvents ="auto";
    }
});
