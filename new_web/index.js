function result() {
    checkbox_out = Array.from(document.querySelectorAll('.ubi')).filter((box) => box.checked).map((box) => box.value).map((val) => parseInt(val))
    console.log(checkbox_out)
    if (checkbox_out.length == 0) {
        alert("Выберите хотя бы один пункт из списка")
    }
    document.cookie = "chout=" + checkbox_out.join()
    window.location.href = "result.html"
}
