let iCount = 0

const btnDec = document.getElementById(`btnDec`)
const btnReset = document.getElementById(`btnReset`)
const btnInc = document.getElementById(`btnInc`)
const lblCount = document.getElementById(`lblCount`)

btnDec.onclick = function () {
    iCount--
    lblCount.textContent = iCount
}

btnReset.onclick = function () {
    iCount = 0
    lblCount.textContent = iCount
}

btnInc.onclick = function () {
    iCount++
    lblCount.textContent = iCount
}
