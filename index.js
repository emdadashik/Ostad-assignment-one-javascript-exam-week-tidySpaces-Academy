const age = document.getElementById("age");

age.addEventListener("keyup", function() {
  const ageValue = Number(age.value);

  if (ageValue <= 18) {
    document.getElementById("kidModal").style.display = "block";
    document.getElementById("adultModal").style.display = "none";

  } else {
    document.getElementById("adultModal").style.display = "block";
    document.getElementById("kidModal").style.display = "none";

  }
});
