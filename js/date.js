const clock = document.querySelector(".Date");

function getclock(){
    const today = new Date();
    const year = String(today.getFullYear()).padStart(4,"0");
    const month = String(today.getMonth() + 1).padStart(1,"0");
    const date = String(today.getDate()).padStart(1,"0");
    const week = ['일','월','화','수','목','금','토'];
    
    clock.innerText = `${year}.${month}.${date} (${week[today.getDay()]})`;
}

getclock();
setInterval(getclock,100);