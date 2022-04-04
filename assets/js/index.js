const mainBtn = document.getElementById('mainBtn');

const enterListener = () => {
  alert('Не веси над душой.');
}

const leaveListener = () => {
  alert('Спасибо');
}

mainBtn.addEventListener('mouseover', enterListener); //add listener

mainBtn.addEventListener('mouseleave', leaveListener);

mainBtn.removeEventListener('mouseover', enterListener); //remove listener
