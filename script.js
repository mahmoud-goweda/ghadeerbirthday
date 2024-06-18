let slideIndex = 0;
const slides = [{
    image:'https://lh3.googleusercontent.com/pw/AP1GczNS8ku9cAPl8StfQDCI1otdnstuIcMmWDIpI6jldTma2DS-StkyEcFUZ6VHLOOjPPS-QgRQZmRRUAEJcBrFGNbdEMhMlAtNITkcuO1HXd8uYul0oSCJ7rVhFkYTGE5ZafUxh1CQaxaoihhB6gWbDzt0vw=w697-h927-s-no-gm?authuser=0',
    text:'sdads'
},
{
    image:'https://lh3.googleusercontent.com/pw/AP1GczMLXzZIsoY6oxs6xFaVzsoCEcBq085nSCTfUHQNsBf-10vuBzmUq27ViKh9u8lhrbRXhGA3wzJynMgR-ByjXCG32ndlYwMebLtMH3CMdlu4bPfB0ssJgujRaaY2eYjro7zw6rF1jnAxgVm6oDtDwzQMZw=w696-h927-s-no-gm?authuser=0',
    text:'sdads'
}

]


showSlide();

function showSlide() {
    let slideImage = document.getElementById('slide-image');
    let slideText = document.getElementById('slide-text');
    slideImage.src = slides[slideIndex].image;
    slideText.textContent = slides[slideIndex].text;
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlide, 3000); // تغيير الصورة والرسالة كل 3 ثوانٍ
}