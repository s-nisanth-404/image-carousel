let count = 1;
setInterval(() => {
  if (count == document.querySelectorAll(".RadioClass").length) {
    count = 1;
  } else {
    count++;
  }
  document.querySelector(`#radio${count}`).checked = true;
}, 3000);
