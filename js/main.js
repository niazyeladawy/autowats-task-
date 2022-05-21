let images = document.querySelectorAll(".map .review img");
let actualReviews = document.querySelectorAll(".map .review .actualreview");
const imagesArr = Array.from(images);
const actualReviewsArr = Array.from(actualReviews);

imagesArr.forEach((ele) => {
    ele.addEventListener("click", () => {
        console.log(actualReviewsArr);
        actualReviewsArr.forEach((el)=> {
            el.style.opacity = '0';
        });
        ele.nextElementSibling.style.opacity = '1';
    })
})

