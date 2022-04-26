const srcBtn = document.getElementById('src-btn');
const srcInput = document.getElementById('src-input');

srcBtn.addEventListener('click', ()=>{
  let inputText =  srcInput.value ;
if(inputText==''){
  alert(' Search Bar is Empty, please Search Valid info')
}else{
    alert(inputText + " = is not found ")
}

srcInput.value = '';
})


///   submit area     

const submitBtn = document.getElementById("submit-btn");
const textarea = document.getElementById('textarea');
const email = document.getElementById('email');
const text = document.getElementById('text');

submitBtn.addEventListener('click', ()=>{
  if(submitBtn.value == '' && textarea.value == '' && email.value == '' && text.value == ''){
   alert('Somthing Missing')
  }else{
    alert('Succesfully send')
  }
  submitBtn.value = '';
  textarea.value = '';
  email.value = '';
  text.value = '';
})


// menu bar sliding

const menuIcon =document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const menuClose =document.getElementById('menuClose');


navBar.style.right = '-999px';

menuIcon.addEventListener('click', ()=>{
  navBar.style.right = '0px';
});

menuClose.addEventListener('click', ()=>{
  navBar.style.right = '-999px';
})


// project btn     

const projectBtn = document.getElementById('project-btn');
const project1 = document.querySelector('.first-page-projects')
const project2 = document.querySelector('.second-page-projects');

project2.style.display = 'none';
projectBtn.addEventListener('click', ()=>{

    if(project2.style.display == 'none'){
        project2.style.display = 'flex';
        projectBtn.style.transform = "rotate(180deg)";
    }else{
        project2.style.display = 'none';
        projectBtn.style.transform = "rotate(0deg)";
    }
}) 
