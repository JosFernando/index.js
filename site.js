
document.getElementById("file").style.display = "none";
document.getElementById("selector").style.display = "block";


var loader = function(e) {
    let file = e.target.files;

    let show = "<span>Ficheiro Selecionado : </span>" + file[0].name;

    let output = document.getElementById("selector");
    output.innerHTML = show;
    output.classList.add("active");
};

let fileInput = document.getElementById("file");
fileInput.addEventListener("change", loader);



const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
