function Ver() {
    var radios = window.document.getElementsByName('radtim')
    var res = window.document.getElementById('res')
    var img = document.createElement("img")
    var video = document.createElement("video")
    if(radios[0].checked) {
        res.innerHTML = 'Palmeiras Quem tem 10 tem mais <br>'
        res.innerHTML = 'Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia. Em 1942, quando estava estabelecida como uma força do futebol paulista, a equipe foi obrigada a trocar de nome, passando a se chamar Sociedade Esportiva Palmeiras em decorrência da Segunda Guerra Mundial.<br>'
        img.src = "https://icons.iconarchive.com/icons/giannis-zographos/south-american-football-club/128/Palmeiras-icon.png"
        document.getElementById('res').appendChild(img)
        video.src = "https://www.youtube.com/watch?v=DiKvx0gRfaQ&ab_channel=golaudio"
        document.getElementById('res').appendChild(video)    
    } else if(radios[1].checked) {
        res.innerHTML = 'Corinthians'
        res.innerHTML = '1910 A fundação. Às 20h30 do dia 1º de setembro, à luz de um lampião, na esquina das ruas José Paulino e Cônego Martins, no bairro do Bom Retiro, o grupo de operários formado por Anselmo Corrêa, Antônio Pereira, Carlos Silva, Joaquim Ambrósio e Raphael Perrone fundaram o Sport Club Corinthians Paulista.<br>'
        img.src = "https://icons.iconarchive.com/icons/giannis-zographos/south-american-football-club/128/Corinthians-icon.png"
        document.getElementById('res').appendChild(img)
    } else if(radios[2].checked) {
        res.innerHTML = 'São Paulo'
        res.innerHTML = 'O Paulistano nasceu na Rotisserie Sportsman (Rua São Bento, nº 61), em 29 de dezembro de 1900. Pouco mais de um ano depois, em 1902, já era vice-campeão do primeiro Campeonato Paulista da história. Ao todo, o Paulistano conquistou 11 títulos paulistas, sendo quatro consecutivos (1916-1919) <br>'
        img.src = 'https://icons.iconarchive.com/icons/giannis-zographos/south-american-football-club/128/Sao-Paulo-icon.png'
        document.getElementById('res').appendChild(img)
    } else if(radios[3].checked) {
        res.innerHTML = 'A fundação do Santos Foot-Ball Club se deu em 14 de abril de 1912, incentivada por três frequentadores do Clube Concórdia, que estavam interessados na prática do futebol. Logo em seguida, foi nomeada a primeira diretoria do clube. <br>'
        img.src = 'https://icons.iconarchive.com/icons/giannis-zographos/south-american-football-club/128/Santos-icon.png'
        document.getElementById('res').appendChild(img)
    }
}

res.addEventListener('mouseenter', entrar)
function entrar(){
    res.background = 'red'
}