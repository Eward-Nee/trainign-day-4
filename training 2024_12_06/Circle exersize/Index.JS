
const PI = 3.14159
let iR
let iC

document.getElementById(`btnConfirm`).onclick = function () {
    iR = document.getElementById(`edtInputR`).value

    iC = 2 * Number(iR) * PI
    document.getElementById(`pAboutCircle`).textContent = `This is a circle. It has a raduis of ${iR}cm and a curcumbfrince of ${iC}cm`

}
