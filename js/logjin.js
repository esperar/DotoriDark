const LoginActive = document.querySelector("button");
const LoginID = LoginActive.value;
function handleLogin(event){
    event.preventDefalut();
    alert(LoginID + "로그인 되었습니다");
}
LoginActive.addEventListener("submit",handleLogin);