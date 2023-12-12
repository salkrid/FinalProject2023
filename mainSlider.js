// получаем массив картинок
let images = document.querySelectorAll('.slider-img');
// получаем массив стрелок
let controlls = document.querySelectorAll('.controlls');
// индекс активной картинки, которую видно
let imgIndex = 0; 
// 
function show(index) {
    images[imgIndex].classList.remove("active");
    images[index].classList.add("active");
    imgIndex=index;
}

controlls.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains("left-arrow")) {
            let index = imgIndex - 1;


            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        }
        else if (arrow.classList.contains("right-arrow")) {
            let index = imgIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        };
    })
});

show(imgIndex);