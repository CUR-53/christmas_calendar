const currentDate = new Date();

document.querySelectorAll('.checker').forEach((element, index) => {
  const [day, month, year] = element.textContent.trim().split('/');
  const elementDateObject = new Date(`20${year}-${month}-${day}`);

  const closestItems = element.closest('.items');
  const hideTextElement = document.querySelectorAll('.calender_card-text')[index];

  if (elementDateObject <= currentDate) {
    closestItems.classList.add('active');
  } else {
    hideTextElement.classList.add('show');
  }
});
