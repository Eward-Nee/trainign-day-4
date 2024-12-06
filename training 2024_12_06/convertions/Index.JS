let sAge
let iAge

document.getElementById(`btnSubmit`).onclick = function () {
    sAge = document.getElementById(`edtInput`).value
    iAge = Number(sAge)
    iAge--
    document.getElementById(`lblOutput`).textContent = `You where one year ago ${iAge} Years old`
}