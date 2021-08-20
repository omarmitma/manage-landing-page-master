/* Variables NavMobile*/
let btnNavOpen=document.getElementById('btnNavOpen');
let btnNavClose=document.getElementById('btnNavClose');
let wrapNav=document.getElementById('wrapNav');

btnNavOpen.addEventListener('click',()=>{
    wrapNav.style.top='0';
    btnNavOpen.style.display='none';
});
btnNavClose.addEventListener('click',()=>{
    wrapNav.style.top='-200%';
    btnNavOpen.style.display='flex';
});




/* Slider*/
const slider=document.getElementById('slider');

let num=1;
let prevBtn='btn1';
/* Function next */
function next(){
    /* La paginacion */
    if(num<4){
        num+=1;
    }else{
        num=1;
    }
    let itemSliderMid=document.querySelectorAll(".itemSlider")[1];
    
    if(itemSliderMid.classList.contains(`itemSlider${num}`)){
        if(prevBtn){
            let prev=document.getElementById(prevBtn);
            prev.classList.remove('btnActive');
        }
        prevBtn=`btn${num}`;
        let btn=document.getElementById(`btn${num}`);
        btn.classList.add('btnActive');
    }

    /* Ancho de Pantalla */
    let anchoWindow=window.innerWidth;
    if(anchoWindow<912){
        let itemSliderFirst=document.querySelectorAll(".itemSlider")[0];
        slider.style.marginLeft='-100%';
        slider.style.transition='.8s';
        setTimeout(() => {
            slider.style.transition='none';
            slider.insertAdjacentElement('beforeend',itemSliderFirst);
            slider.style.marginLeft='0';
        }, 800);
    }else{
        let itemSliderFirst=document.querySelectorAll(".itemSlider")[0];
        slider.style.marginLeft='-35%';
        slider.style.transition='.8s';
        setTimeout(() => {
            slider.style.transition='none';
            slider.insertAdjacentElement('beforeend',itemSliderFirst);
            slider.style.marginLeft='0';
        }, 800);
    }
    
};

/* Slider automatico */
let automatico;
automatico=setInterval(next, 7000);

let onOff=false;
function onOffInterval(){
    if (!onOff) {
        onOff = true;
        clearInterval(automatico);
    } else {
        onOff = false;
        automatico = setInterval(next, 7000);
    }
}


   /* Seleccionar un item del slider */
let selectPrev=null;
function selectSlider(val){
    let selectSlider=document.getElementById(`itemSlider${val}`);
    if(selectPrev){
        let prev=document.getElementById(selectPrev);
        prev.classList.remove('selectActive');
        selectPrev=null;
    }
    selectPrev=`itemSlider${val}`;
    selectSlider.classList.add('selectActive');
    onOffInterval();
    setTimeout(() => {
        selectSlider.classList.remove('selectActive');
        /* Reaunadar el setInteral */
        onOffInterval();
    },5000);
};

/* Verificar Email */

let btnEmail=document.getElementById('btnEmail');
let MsgError=document.getElementById('MsgError');

btnEmail.addEventListener('click',(e)=>{
    let email=document.getElementById('email');
    let regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(email.value)){

    }else{
        e.preventDefault();
        let form=document.getElementById('form');
        form.classList.add('formError');
        if(email.value==""){
            MsgError.innerText='Please insert email';
        }else{
            MsgError.innerText='Please insert a valid email';
        }
       
    }
});
