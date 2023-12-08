var modal = document.getElementById('nav_modal_find');
var btn = document.getElementById('nav_modal_find_btn');

btn.onclick = function () {
  modal.style.display = 'block';
};

function closeFindModal() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeFindModal();
  }
};

var about_modal = document.getElementById('nav_modal_about');
var about_btn = document.getElementById('nav_modal_about_btn');

about_btn.onclick = function () {
  about_modal.style.display = 'block';
};

function closeAboutModal() {
  about_modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == about_modal) {
    closeAboutModal();
  }
};
