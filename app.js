//Jquery Scrolling Menu
$('.nav').localScroll();

//Drop-down Section
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Modal for Images

let modal = document.getElementById('myModal');

let img = $('.myImg');
let modalImg = $("#img01");
let captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    let newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
