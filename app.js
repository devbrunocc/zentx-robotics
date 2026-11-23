const dialog = document.querySelector('dialog');
const enlargedImage = dialog.querySelector('img');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    enlargedImage.src = button.dataset.image;
    enlargedImage.alt = button.querySelector('img').alt;
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
