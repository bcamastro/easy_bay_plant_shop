function accept(element) {
    element = document.querySelector("#cookies")
    element.remove()
}
function createAlert() {
    alert("Your Cart is empty!")
}
function changePic(element) {
    element.src = "static/images/assets/succulents-2.jpg"
}
function changePicBack(element) {
    element.src = "static/images/assets/succulents-1.jpg"
}