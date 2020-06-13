const signUpSection = document.getElementById('signUp');
const signUpBox = document.getElementById('signUpBox');
const signUpForm = document.getElementById('signUpForm');
const signIn = document.getElementById('signIn');
const form  = document.getElementsByTagName('form');
const back = document.getElementById('backBtn');


const email = document.getElementById('email')
const pass = document.getElementById('pass')
const firstName = document.getElementById('firstN')
const lastName = document.getElementById('lastN')
const emailTwo = document.getElementById('emailTwo')
const passTwo = document.getElementById('passTwo')


document.getElementById('joinNow').addEventListener('click',function () {
    signIn.classList.add('transition-signIn');
    signUpSection.classList.add('transition-signUp');
    signIn.classList.remove('transition-signIn-back');  
    signUpSection.classList.remove('transition-signUp-back');
});
  document.getElementById('signInLink').addEventListener('click',function(){
      signIn.classList.add('transition-signIn-back');  
      signUpSection.classList.add('transition-signUp-back');
  });
  document.getElementById('signUpBtn').addEventListener('click',function() {
       document.getElementById('primaryData').classList.add('transition-forms-a' , 'display');
       document.getElementById('secondaryData').classList.add('transition-forms-b');
       document.getElementById('secondaryData').classList.remove('display');
       back.classList.remove('display');
       document.getElementById('signUpBtn').innerHTML = 'Sign up<i class="las la-angle-right icon-right icon"></i>'
       document.getElementById('signUpBtn2').classList.remove('display')
       document.getElementById('signUpBtn').classList.add('display')
    })
    back.addEventListener('click',function(){
      document.getElementById('primaryData').classList.remove('transition-forms-a' , 'display');
      document.getElementById('secondaryData').classList.remove('transition-forms-b');
      document.getElementById('secondaryData').classList.add('display');
      back.classList.add('display');
      document.getElementById('signUpBtn').innerHTML = 'Next<i class="las la-angle-right icon-right icon"></i>';
      document.getElementById('signUpBtn2').classList.add('display')
      document.getElementById('signUpBtn').classList.remove('display')
    })
      form[0].addEventListener('submit' , (e) =>{
        e.preventDefault();
        const inputOne = document.getElementsByClassName('sign-in-error');
        const error = document.getElementById('error');
       if (email.value == '' || pass.value == '') {
        errorI(error);
        borderColorDanger(inputOne);
       }else{
         borderColorSuccess(inputOne);
         error.classList.add('display')
       }
      })
      form[1].addEventListener('submit' , (e) =>{
        e.preventDefault();
        const errorP = document.getElementById('errorP');
        const errorS = document.getElementById('errorS');
        const inputTwo = document.getElementsByClassName('sign-up-error');
        if (firstName.value == '' || lastName.value == '' || passTwo.value == ''|| emailTwo.value == ''){
           errorI(errorP);
           errorI(errorS);
           borderColorDanger(inputTwo);
        }else{
          borderColorSuccess(inputTwo);
          errorP.classList.add('display');
          errorS.classList.add('display')
        }
      })
   function errorI (danger){
     danger.textContent = 'Please fill in the input';
   }
   function borderColorDanger (input){
    for (let x = 0 ; x < input.length; x++) {
      input[x].style.borderBottomColor = '#dc3545';
    }
   }
   function borderColorSuccess (element) {
    for (let z = 0 ; z < element.length; z++) {
      element[z].style.borderBottomColor = '#28a745';
    }
   }
    