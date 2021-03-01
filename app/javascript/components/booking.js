const booking = () => {
  const buttons = document.getElementById('booking-buttons');
  buttons.addEventListener('click', (event) => {
    console.log(event);
    buttons.remove();
    buttons.hide();
  })
}

export { booking };
