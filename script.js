'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const Closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnclosemodal.addEventListener('click', Closemodal);
overlay.addEventListener('click', Closemodal);

document.addEventListener('keydown', function (eve) {
  if (eve.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      Closemodal();
    }
  }
});
