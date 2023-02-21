"use strict"

const header = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');
//Menu
const burgerMenu = document.querySelector('.header__burger-menu');
const bodyMenu = document.querySelector('.nav');
const body = document.querySelector('.body');


if(document.querySelector('.index')){
    const videoOffer = document.getElementById('offerVideo');
    const aboutUs = document.querySelector('.about-us');
    const ourPlus = document.querySelector('.our-plus');
    const ourPlusText = document.querySelectorAll('.our-plus__block-text');

    let ourPlusText1 = ourPlusText[0];
    let ourPlusText2 = ourPlusText[1];
    
    //Player
    const audio = document.querySelectorAll('.about-us__track-player audio');
    const playBtn = document.querySelectorAll('.about-us__track-play');
    const player = document.querySelector('.about-us__track-player');
    
    const nextSlideUs = document.querySelector('.about-us__btn .next');
    const prevSlideUs = document.querySelector('.about-us__btn .prev');
    const wrapperSlideUs = document.querySelector('.about-us__wrapper');
    const lineSlideUs = document.querySelector('.about-us__line');
    const slidesUs = document.querySelectorAll(".about-us__about-performer");

    const questionsTop = document.querySelectorAll(".our-questions__question-top")
    const questionsAnswer = document.querySelectorAll(".our-questions__question-answer")

    //This slider for the singers
    const nextSlideSinger = document.querySelector('.singers-and-streams__btn .next');
    const prevSlideSinger = document.querySelector('.singers-and-streams__btn .prev');
    const wrapperSlideSinger = document.querySelector('.singers-and-streams__wrapper');
    const lineSlideSinger = document.querySelector('.singers-and-streams__line');
    const slidesSinger = document.querySelectorAll(".singers-and-streams__slide-singer");
    const nameSinger = document.querySelector(".singers-and-streams__singer");
    const streamSinger = document.querySelector(".singers-and-streams__stream");

    //This slider for the relize
    const nextSlideRelease = document.querySelector('.releases__btn .next');
    const prevSlideRelease = document.querySelector('.releases__btn .prev');
    const wrapperSlideRelease = document.querySelector('.releases__wrapper');
    const lineSlideRelease = document.querySelector('.releases__line');
    const slidesRelease = document.querySelectorAll(".releases__slide-release");

    console.log(slidesRelease);
    let stingers = ["Локви", "РуШ", "GUCCIMOGUCCI", "HAEBAL", "NOVSKII", "KANTYLUV"];
    let streams = ["18 <span>млн</span>", "25 <span>млн</span>", "2,3 <span>млн</span>", "3,5 <span>млн</span>", "2 <span>млн</span>", "4 <span>млн</span>"];

    let indexSinger = 1;
    let indexSlideUs = 0;
    let indexRelease = 1;
    let index = 1;


    videoOffer.poster = "./img/desktop-preload.jpg";
    
    if(window.screen.width <= 992){
        
        videoOffer.src = "./source/mobileAnimation.mp4";
        setTimeout(videoOffer.poster = "./img/mobile-preload.jpg", 2000) 
    }

    window.addEventListener('resize', () => {
        if(window.screen.width <= 992) {
            videoOffer.src = "./source/mobileAnimation.mp4";
            setTimeout(videoOffer.poster = "./img/mobile-preload.jpg", 2000) 
        }else if(window.screen.width >= 993) { 

            videoOffer.src = "./source/desktop.mp4"
            setTimeout(videoOffer.poster = "./img/desktop-preload.jpg", 2000) 
        }
    }) 

    if(document.querySelectorAll(".about-us__about-performer")){
        slidesUs[indexSlideUs].style.opacity = "1";
    }

    function Change(value1, value2, massive1, massive2,  index) {
        value1.innerHTML = massive1[index - 1]
        value2.innerHTML = massive2[index - 1]
    }

    for (let index = 0; index < playBtn.length; index++) {
        //Play
        function playSong() {
            for (let index = 0; index < playBtn.length; index++) {
                playBtn[index];  
                
                player.classList.remove('sound');
                audio[index].pause()
                playBtn[index].src = 'img/play.svg';       
            }
            player.classList.add('sound');
            audio[index].play()
            playBtn[index].src = 'img/pause-button.svg';  
        }

        //Pause
        function pauseSong() {
            player.classList.remove('sound');
            audio[index].pause()
            playBtn[index].src = 'img/play.svg';
        }

        let el = playBtn[index];

        el.addEventListener('click', () => {
            const isPlaying = player.classList.contains('sound');
            if (isPlaying){
                pauseSong(index)
                el.src = 'img/play.svg';
            } else {
                playSong(index)
                el.src = 'img/pause-button.svg';  
            }
        })
    }   


    function appearElement(e){
        for (let index = 0; index < e.children.length; index++) {

            let lengthToBlock = e.children[index].getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
            console.log(e.children[index]);
            console.log(lengthToBlock);
            
            if((lengthToBlock) <= (window.pageYOffset + window.screen.height - e.children[index].offsetHeight / 2 - header.offsetHeight) && (window.pageYOffset + window.screen.height - header.offsetHeight) <= (lengthToBlock + e.children[index].offsetHeight) || (lengthToBlock) <= (window.pageYOffset - e.children[index].offsetHeight / 2 - header.offsetHeight) && (window.pageYOffset - header.offsetHeight) <= (lengthToBlock + e.children[index].offsetHeight))  {

                e.children[index].classList.add('up-animation');
                break;
            } else {

            }
        }

    }


    function appearElement2(e){
 
            let lengthToBlock = e.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
            console.log(e);
            console.log(lengthToBlock);
            
            if((lengthToBlock) <= (window.pageYOffset + window.screen.height - e.offsetHeight / 2 - header.offsetHeight) && (window.pageYOffset + window.screen.height - header.offsetHeight) <= (lengthToBlock + e.offsetHeight) || (lengthToBlock) <= (window.pageYOffset - e.offsetHeight / 2 - header.offsetHeight) && (window.pageYOffset - header.offsetHeight) <= (lengthToBlock + e.offsetHeight))  {

                e.classList.add('up-animation');
                for (let index = 0; index < e.children.length; index++) {

                    e.children[index].classList.add('up-animation');
                }
            } else if(ourPlus.children[1].classList.contains('up-animation'))  {

                ourPlus.children[2].classList.add('up-animation');
                for (let index = 0; index < e.children.length; index++) {

                    e.children[index].classList.add('up-animation');
                }
            }
        }

        for (let index = 0; index < slidesUs.length; index++) {
            console.log(wrapperSlideUs.offsetWidth);
            slidesUs[index].style.width = "100%";
            
        }
        showSlide(nextSlideUs, prevSlideUs, indexSlideUs, slidesUs, lineSlideUs, wrapperSlideUs);

        function showSlide(next, prev, index, slides, line, wrapper) {
            
            console.log(next);
            next.addEventListener("click", function () { 
                for (let index = 0; index < slides.length; index++) {
                    slides[index].style.opacity = "0";        
                }

                index++
                if (index > slides.length - 1) {
                    index = 0;
                }
                
                slides[index].style.opacity = "1";

                line.style.transform = `translateX(-${100 * index}%)`;
                line.style.height = `${slides[index].ClientHeight}px`;
                console.log(`${slides[index].ClientHeight}px`);
                console.log(`translate(${index * slides[index].offsetWidth} + px)`)
                
            }) 
        
            prev.addEventListener("click", function () {   

                for (let index = 0; index < slides.length; index++) {
                    slides[index].style.opacity = "0";        
                }

                index--
                if (index < 0 ){
                    index = slides.length - 1;
                }

                slides[index].style.opacity = "1";
        
                line.style.transform = `translateX(-${100 * index}%)`;
                line.height = `${slides[index].ClientHeight}`;
                console.log(`translateX(${wrapper.offsetWidth * index}px)`);
                console.log(`translate(${index * slides[index].offsetWidth}px)`)
        
            })         


        }



        if(questionsTop.length > 0){
            for (let index = 0; index < questionsTop.length; index++) {
                const questionTop = questionsTop[index];
                questionTop.addEventListener("click", function (e) {
                    console.log(questionsAnswer);
                    const questionAnswer = questionsAnswer[index];
                    questionAnswer.classList.toggle("active");
                    questionTop.classList.toggle("active");  
                    
                    if(questionAnswer.classList.contains("active")) {
                        questionTop.style.margin = "0 0 0 0";
                    } else {
                        questionTop.style.margin = "0 0 50px 0"; 
                    }
                });
            }
        }
    console.log(nextSlideRelease);
    showSlideA(nextSlideRelease, prevSlideRelease, indexRelease, slidesRelease, lineSlideRelease);
    showSlideA(nextSlideSinger, prevSlideSinger, indexSinger, slidesSinger, lineSlideSinger);


    function showSlideA(next, prev, index, slides, line) {
        console.log(next);
        showSlide(next, prev, index, slides, line);
        next.addEventListener("click", function () { 
            if (index > slides.length) {
                index = 1;
            }
            showSlide(next, prev, ++index, slides, line); 
            
        }) 

        prev.addEventListener("click", function () {   
            
            if (index < 1) {
                index = slides.length;
            }
            showSlide(next, prev, --index, slides, line);
            console.log(index);

        }) 

        function showSlide(next, prev, index, slides, line)  {

            if(slides){
                
            } else {
            let slides; 
            }
            console.log(slides);
            /* Проверяем количество слайдов: */

            if (index > slides.length) {
                index = 1;
            }

            if (index < 1) {
                index = slides.length;
            }
            /* Проходим по каждому слайду в цикле for: */
            for (let slide of slides) {
                slide.style.display = "none";
            }

            /* Делаем элемент блочным: */
            slides[index - 1].style.display = "block";
            console.log(slides.length);


            if(index - 1 + 1 < slides.length) {
                for (let index = 0; index < slides.length; index++) {             
                    slides[index].classList.remove("slide-following");                      
                }  
                slides[index - 1 + 1].classList.add("slide-following");
            } else {         
                for (let index = 0; index < slides.length; index++) {             
                    slides[index].classList.remove("slide-following");                      
                }      
            }

            if(index - 2 >= 0) {
                slides[index - 2].classList.add("slide-lost");
                slides[index - 2].style.display = "block";
            } else {                  
                for (let index = 0; index < slidesSinger.length; index++) {             
                    slides[index].classList.remove("slide-lost");                      
                }     
            }  
            slides[index - 1].classList.remove("slide-following");
            slides[index - 1].classList.remove("slide-lost");        
            Change(nameSinger, streamSinger, stingers, streams, index);
        }
    }
    const scrolLinks = document.querySelectorAll('[data-goto]');
    console.log(scrolLinks);
if(scrolLinks.length > 0){

	
	scrolLinks.forEach(scrolLink => {
		scrolLink.addEventListener("click", onScrolLinkClick)
	});

	function onScrolLinkClick(e) {
		const menuLink = e.target;
		const menuLinkClass = menuLink.dataset.goto;
		if (menuLink.dataset.goto){
            if(body.classList.contains('active')){
                body.style.overflow = 'auto'; 
                wrapper.style.overflow = 'auto';  
            } 
            
			const gotoBlock = document.getElementById(`${menuLink.dataset.goto}`);
			console.log(gotoBlock);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
			console.log(window.pageYOffset);

			window.scrollTo({
				top:gotoBlockValue,
				behavior: "smooth"

			});

            burgerMenu.classList.remove('active');
            bodyMenu.classList.remove('active');
            body.classList.remove('active');
            wrapper.style.overflow = 'hidden';
            if(body.classList.contains('active')){
                body.style.overflow = 'hidden';   
            }

			e.preventDefault();
		}

	}
} 

scrolLinks[0].classList.add('targetItem');
function targetPlaceOnPage() {
    for (let index = 0; index < scrolLinks.length; index++) {
        if(body.classList.contains('active')){
            body.style.overflow = 'auto';  
            wrapper.style.overflow = 'auto';  
        }
        for (let i = 0; i < scrolLinks.length; i++) {
            scrolLinks[i].classList.remove('targetItem'); 
            console.log(scrolLinks[i]);
        }
        

        let targetBlock = document.getElementById(`${scrolLinks[index].dataset.goto}`);
        console.log(targetBlock.getBoundingClientRect().top);
        let targetBlockValue = targetBlock.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
        console.log(scrolLinks[scrolLinks.length - 1].dataset.goto);


        if(targetBlock == document.getElementById(scrolLinks[scrolLinks.length - 1].dataset.goto) && (targetBlockValue - targetBlock.offsetHeight) <= (window.pageYOffset) && (window.pageYOffset) <= (targetBlockValue + targetBlock.offsetHeight / 1))  {

            scrolLinks[index].classList.add('targetItem');
            console.log(targetBlockValue);
            if(body.classList.contains('active')){
                body.style.overflow = 'hidden';   
                wrapper.style.overflow = 'hidden';
            }
            break
        }
        


        if(targetBlock == document.getElementById(scrolLinks[2].dataset.goto) && (targetBlockValue - targetBlock.offsetHeight) <= (window.pageYOffset) && (window.pageYOffset) <= (targetBlockValue + targetBlock.offsetHeight / 1.2))  {
            
            scrolLinks[index].classList.add('targetItem');
            console.log(targetBlockValue);
            if(body.classList.contains('active')){
                body.style.overflow = 'hidden';   
                wrapper.style.overflow = 'hidden';
            }
            break
        }

        if((targetBlockValue - targetBlock.offsetHeight / 2) <= (window.pageYOffset) && (window.pageYOffset) <= (targetBlockValue + targetBlock.offsetHeight / 2) )  {
            
            scrolLinks[index].classList.add('targetItem');
            console.log(targetBlockValue);
            console.log(window.scrollY);
            console.log(scrolLinks);
            if(body.classList.contains('active')){
                body.style.overflow = 'hidden';  
                wrapper.style.overflow = 'hidden'; 
            }
            break
        }
    }

}
window.addEventListener ("scroll",() => {
    console.log(window.scrollY - header.offsetHeight);

    targetPlaceOnPage()
    console.log(aboutUs.children)

    appearElement(aboutUs);
    
    appearElement(ourPlus);
    
    for (let i = 0; index < ourPlusText.length; index++) {
        appearElement(ourPlusText[i]); 
    }
    appearElement2(ourPlusText1);
    appearElement2(ourPlusText2);

        
    
    
})

function noPlayVideo(){
    videoOffer.removeAttribute('autoplay')
}
setTimeout(noPlayVideo, 6000);
 
}

//menu

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle('active');
    bodyMenu.classList.toggle('active');
    body.classList.toggle('active');
    if(!body.classList.contains('active')){
        body.style.overflow = 'auto';  
    }
})

window.addEventListener('resize', () => {
    if(window.screen.width > 992){
        burgerMenu.classList.remove('active');
        bodyMenu.classList.remove('active');
        body.classList.remove('active');
    } 

}) 
