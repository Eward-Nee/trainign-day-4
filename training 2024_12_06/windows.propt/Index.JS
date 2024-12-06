
let iUserage

document.getElementById(`btnSubmit`).onclick = function () {
    iUserage = document.getElementById(`edtbox`).value
    document.getElementById(`Title`).textContent = `My boy is ${iUserage} years old`
}
