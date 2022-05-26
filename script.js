function Ver() {
    var radios = window.document.getElementsByName('radtim')
    var res = window.document.getElementById('res')
    if(radios[0].checked) {
        res.innerHTML = 'Palmeiras'
    } else if(radios[1].checked) {
        res.innerHTML = 'Corinthians'
    } else if(radios[2].checked) {
        res.innerHTML = 'São Paulo'
    } else if(radios[3].checked) {
        res.innerHTML = 'Santos'
    }
}