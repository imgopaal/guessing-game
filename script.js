'use strict';
const guess = document.querySelector('.guess');
for (let i = 1; i <= 20; i++) {
  document.querySelector('#check').addEventListener('click', function () {
    const secret = 12;
    // console.log(guess.value);
    guess.value < secret
      ? (document.querySelector('.message').textContent = 'Guess is too low')
      : guess.value > secret
      ? (document.querySelector('.message').textContent = 'Guess is too high')
      : guess.value === secret
      ? 'Congratulations!! Your Guess is correct'
      : (document.querySelector('.message').textContent = 'Unexpected Results');
  });
}
// console.log(check);
