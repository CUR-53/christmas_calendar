const currentDate = new Date().toLocaleDateString('en-DK', { timeZone: 'CET' });

const dateChecker = document.querySelectorAll('.checker');
const hideText = document.querySelectorAll('.calender_card-text');
var time = document.querySelectorAll('.time');

dateChecker.forEach((element, index) => {
  const elementDate = element.textContent.trim();
  const elementDateObject = new Date(`${elementDate} GMT+1000`);
  const currentDateObject = new Date(`${currentDate} GMT+1000`);

  if (elementDateObject <= currentDateObject) {
    element.closest('.items').classList.add('active');
  } else {
    hideText[index].classList.add('show');
  }
});
