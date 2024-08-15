document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".value-card")
  const boxes = document.querySelectorAll(".value-box")
  cards.forEach((card, cardIndex) => {
    card.parentElement.classList.remove("active")
    if (cardIndex == 0) card.parentElement.classList.add("active")
    card.addEventListener("click", () => {
      // const key = card.getAttribute("data-key")
      boxes.forEach((box, boxIndex) => {
        box.parentElement.classList.remove("active")
        if (boxIndex == cardIndex) box.parentElement.classList.add("active")
      })
    })
  })

  // Validate mobile number
  function validateMobileNumber(mobile) {
    // Regex pattern for 11-digit phone number, started with 09
    const pattern = /(09)\d{2}\d{3}\d{4}/g
    return pattern.test(mobile)
  }

  // Validate form inputs
  function validateForm(event) {
    const mobile = document.getElementById("mobile").value.trim()
    const message = document.getElementsByClassName("mobile-message")[0]
    if (!mobile) {
      message.innerHTML = "لطفا شماره موبایل خود را وارد نمایید."
      message.classList.add("error")
    } else if (!validateMobileNumber(mobile)) {
      message.innerHTML = "شماره تماس وارد شده معتبر نیست."
      message.classList.add("error")
    } else {
      message.innerHTML = "درخواست شما با موفقیت انجام شد."
      message.classList.add("success")
    }
    event.preventDefault()
  }

  // Event listener for form submission
  document.getElementById("mobile-form").addEventListener("submit", validateForm)
})
