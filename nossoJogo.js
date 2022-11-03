
const isIniciarRodada = confirm("Quer iniciar uma nova rodada?")

if (isIniciarRodada) {
    console.log("Boas vindas ao jogo de blackjack!")

    const cartaJogador1 = comprarCarta()
    const cartaJogador2 = comprarCarta()

    const totalJogador = cartaJogador1.valor + cartaJogador2.valor

    const cartaComputador1 = comprarCarta()
    const cartaComputador2 = comprarCarta()

    const totalComputador = cartaComputador1.valor + cartaComputador2.valor

    console.log(`Jogador: cartas - ${cartaJogador1.texto} ${cartaJogador2.texto} - pontuação = ${totalJogador}`)
    console.log(`Computador: cartas - ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação = ${totalComputador}`)

    if (totalJogador > totalComputador) {
        console.log("Jogador venceu!")
    } else if (totalJogador < totalComputador) {
        console.log("Computador venceu!")
    } else {
        console.log("Empate!")
    }

} else {
    console.log("Jogo acabou.")
}
