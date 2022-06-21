const ReserveBtn = document.querySelector(".selfstudy .count_reserve .reserve_btn");
const reserve = document.querySelector("progress");
const reserveText = document.querySelector(".count_reserve_value");

const chairreserve = document.querySelector(".chair .count_reserve .reserve_btn");
const chairProgress = document.querySelector(".chair progress");
const chairText = document.querySelector(".count_reserve_value_c");

let ReserveValue = reserve.value;
let ChairValue = chairProgress.value;

reserveText.innerText = `${ReserveValue}/50`;

chairText.innerText = `${ChairValue}/5`;

function handleReserveBtn(){
    if(ReserveValue < 50){
        ReserveValue++;
        reserveText.innerText = `${ReserveValue}/50`;
    }
    else{
        alert("자리가 다 찼습니다.");
    }
}

function handleReserveBtnChair(){
    if(ChairValue < 5){
        ChairValue++;
        chairText.innerText = `${ChairValue}/5`;
    }
    else{
        alert("자리가 다 찼습니다");
    }
}

ReserveBtn.addEventListener("click",handleReserveBtn);
chairreserve.addEventListener("click",handleReserveBtnChair);

new Swiper(".mySwiper",{
    direction : "horizontal",
    loop : true,
})