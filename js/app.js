const clock = document.querySelector(".Date");
const ReserveBtn = document.querySelector(".selfstudy .count_reserve .reserve_btn");
const reserve = document.querySelector("progress");
const reserveText = document.querySelector(".count_reserve_value");

let ReserveValue = reserve.value;

reserveText.innerText = `${ReserveValue} / 50`;

function getclock(){
    const today = new Date();
    const year = String(today.getFullYear()).padStart(4,"0");
    const month = String(today.getMonth() + 1).padStart(1,"0");
    const date = String(today.getDate()).padStart(1,"0");
    const week = ['월','화','수','목','금','토','일'];
    
    clock.innerText = `${year}.${month}.${date} (${week[today.getDay() - 1]})`;
}
getclock();
setInterval(getclock,100);

function handleReserveBtn(){
    if(ReserveValue < 50){
        ReserveValue++;
        reserveText.innerText = `${ReserveValue} / 50`;
    }
    else{
        alert("자리가 다 찼습니다.");
    }
}
ReserveBtn.addEventListener("click",handleReserveBtn);
