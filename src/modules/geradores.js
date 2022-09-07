const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const geraCaracteresEspeciais = () => String.fromCharCode(rand(33, 48))

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArray = []
    const geradores = []
    qtd = Number(qtd)
    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula())
        minuscula && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraCaracteresEspeciais())
        senhaArray.push(geradores[rand(0, geradores.length)]())
    }


    return senhaArray.join('')
}
