//Client side javascript code

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    
    const location = search.value
    fetch("/weather?location=" + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageTwo.textContent = ""
            messageOne.textContent = data.error + " Try another location!"
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
  })
})