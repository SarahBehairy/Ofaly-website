var div = document.getElementsByClassName('dropdown-content');
var modals = document.querySelectorAll('div.img-wrap');
var largeImg = document.getElementById("large-img");
var clickedImgIndex =1;
var image = document.querySelectorAll('img');

function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
    window.onclick = function(event) {
      console.log("click")
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

 
for(var  i =0;i<div.length;i++){
    for(var  j =0;j<div[i].children.length;j++){
     div[i].children[j].addEventListener('click',function(){
        var titleDiv = document.querySelector('h1');
        const p = document.createElement('h1');
        p.innerHTML = this.innerHTML;
        p.classList.add('title');   
        titleDiv.replaceWith(p);
     });
    }
}

for(let i = 0; i < image.length; i++) {
  image[i].addEventListener('click', () => {
      clickedImgIndex = i;
  });
}

modals.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('modal-one');
    largeImg.src = './assets/' + clickedImgIndex + '.JPG'; 
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function(exit) {
      exit.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.remove('open');
        largeImg.src="";
      });
    });
  });
});