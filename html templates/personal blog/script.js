const shareBtns = document.querySelectorAll('.share-btn');

shareBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('title').textContent;
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer.php?u=${url}&t=${title}`, 'Поділитись', 'width=600,height=400');
  });
});