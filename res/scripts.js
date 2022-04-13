window.onchange = function (e) {
  console.log(e.target.id);
  let rate = document.querySelector('#rate-input');

  switch (e.target.id) {
    case 'radio-hiring':
      if (rate.classList.contains('hidden')) {
        rate.classList.remove('hidden');
      }
      break;
    case 'radio-comment':
    case 'radio-question':
      rate.classList.add('hidden');
      break;
  }
};
