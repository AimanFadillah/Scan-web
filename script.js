let tombol = document.querySelector("#tombol");
let hasil = document.querySelector("#hasil");
let input1 = document.querySelector("#input1");
hasil.style.display = "none";
tombol.style.display = "none";

input1.addEventListener("input",function () {
    if(input1.value === ""){
        tombol.style.display = "none";
    }else{
        tombol.style.display = "inline";
    }
    
})

tombol.addEventListener("click",function (){
    tombol.style.display = "none";
    input1.style.display = "none";
    hasil.innerHTML = "Tunggu Sebentar";
    function displayLoading() {
        hasil.innerHTML = "Loading...";
    }
    setTimeout(function() {
    clearInterval(intervalId)
    let random =  Math.floor(Math.random() * 100) + 1 ;
    if(random >= 80 ){
        hasil.innerHTML =  random + "% " + input1.value + " Siap Jadi Predator pantad";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }else if(random >= 70 ){
        hasil.innerHTML =  random + "% " + input1.value + " Mulai terpengaruh";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }else if(random >= 50 ){
        hasil.innerHTML =  random + "% " + input1.value + " terancam";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }
    else if(random >= 30 ){
        hasil.innerHTML =  random + "% " + input1.value +  " Masih geli geli";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }else if(random >= 0 ){
        hasil.innerHTML =  random + "% " + input1.value + " Tidak Mempan";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }else{
        hasil.innerHTML =  random + "%";
        tombol.style.display = "inline";
        input1.style.display = "inline";
    }
    },3000);
   
    let intervalId = setInterval(displayLoading, 1000);
    hasil.style.display = "block";
    
});
