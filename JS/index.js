let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(base) || isNaN(height)) {
      alert('Masukkan angka valid untuk alas dan tinggi');
      return;
    }
  
    var area = 0.5 * base * height;
    var rms = 'Luas= 1/2 + alas + tinggi';
    var rms2 = `Luas= 1/2 + ${base} + ${height} = ${area} `;

    document.getElementById('result').innerText = 'Luas segitiga: ' + area.toFixed(2);
    document.getElementById('rms').innerText = rms;
    document.getElementById('rms2').innerText = rms2;
  }
function hitungKeliling() {
   var sisiA = parseFloat(document.getElementById('sisiA').value);
   var sisiB = parseFloat(document.getElementById('sisiB').value);
   var sisiC = parseFloat(document.getElementById('sisiC').value);
      
      if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
         alert('Masukkan angka valid untuk panjang sisi');
        return;
        }
      
   var keliling = sisiA + sisiB + sisiC;
   var rumus = 'Keliling= Sisi A + Sisi B + Sisi C';
   var rumus2 = `Keliling= ${sisiA} + ${sisiB} + ${sisiC} = ${keliling} `;
      
   document.getElementById('hasilKeliling').innerText = 'Keliling segitiga: ' + keliling.toFixed(2);
   document.getElementById('rumusKeliling').innerText = rumus;
   document.getElementById('rumusKeliling2').innerText = rumus2;
      }
      
function resetForm() {
  document.getElementById('sisiA').value = '';
  document.getElementById('sisiB').value = '';
  document.getElementById('sisiC').value = '';
  document.getElementById('hasilKeliling').innerText = 'Keliling segitiga: ';
  document.getElementById('rumusKeliling').innerText = '';
  document.getElementById('rumusKeliling2').innerText = '';
}
      var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },6000);
};

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
let btn = document.querySelector("button");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
}
function clear(){
  document.getElementById("result").value.reset();}

  function tampilkanHalaman(idHalaman) {
    var semuaHalaman = document.querySelectorAll('.halaman');
  
    semuaHalaman.forEach(function (halaman) {
      halaman.classList.remove('aktif');
    });
  
    var halamanYangDitampilkan = document.getElementById(idHalaman);
    halamanYangDitampilkan.classList.add('aktif');
  }

function resetForml() {
  document.getElementById('base').value = '';
  document.getElementById('height').value = '';
  document.getElementById('result').innerText = 'Luas segitiga: ';
  document.getElementById('rms').innerText = '';
  document.getElementById('rms2').innerText = '';
}