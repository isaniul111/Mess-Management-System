const ClickSignUpBtn=()=>{
    const loginPage=document.getElementById('loginpage');
    const signupPage=document.getElementById('signup-page');
    loginPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
}
const signUpClicked=()=>{
    const loginPage=document.getElementById('loginpage');
    const signupPage=document.getElementById('signup-page');
    loginPage.classList.remove('hidden');
    signupPage.classList.add('hidden');
}