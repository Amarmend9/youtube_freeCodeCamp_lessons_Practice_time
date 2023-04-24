//  Use .innerHTML to render a Buy! button inside the div container

const container = document.querySelector("#container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

//  When clicked render a paragraphunder the button (in the container)
//  that says "Thank you for buying!"

function buy() {
    container.innerHTML += "<p>Thank you for buying</p>"
}