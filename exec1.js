//1 – Calcule a média de diversas notas digitadas pelo usuário.
let num1 = 2
let num2 = 4
let num3 = 6
let num4 = 5
let num5 = 10
let media1, media2, soma = 0
const valores = [2, 4, 5, 6, 10]

//media com array
for (let i = 0; i < valores.length; i++){
    soma += valores[i]
}
    media2 = soma / valores.length

//media sem array
media1 = (num1 + num2 + num3+ num4 + num5) / 5
console.log(`Média sem array: ` + media1)
console.log(`Média com array: ` + media2)
