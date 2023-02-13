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
    function displayLoading() {
        hasil.innerHTML = "Loading...";
    }
    setTimeout(function() {
    clearInterval(intervalId)
    let random =  Math.floor(Math.random() * 100) + 1 ;
    if(random >= 80 ){
        hasil.innerHTML =  random + "% Siap Jadi Predator pantad";
        tombol.style.display = "inline";
    }else if(random >= 70 ){
        hasil.innerHTML =  random + "% Mulai Merasukimu";
        tombol.style.display = "inline";
    }else if(random >= 50 ){
        hasil.innerHTML =  random + "% Terancam";
        tombol.style.display = "inline";
    }
    else if(random >= 30 ){
        hasil.innerHTML =  random + "% Sedikit Terinfeksi";
        tombol.style.display = "inline";
    }else if(random >= 0 ){
        hasil.innerHTML =  random + "% Aman Cuy";
        tombol.style.display = "inline";
    }else{
        hasil.innerHTML =  random + "%";
        tombol.style.display = "inline";
    }
    },3000);
   
    let intervalId = setInterval(displayLoading, 1000);
    hasil.style.display = "block";
    
});
