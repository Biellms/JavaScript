/*  

1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em
centímetros.
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo
float.
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por
100).
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através
da expressão: M = peso (quilos) ÷ altura²
7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas
descritivas utilizando os critérios abaixo:
a) Se M estiver abaixo de 16 : Baixo peso muito grave
b) Se M estiver entre 16 e 16,99: Baixo peso grave
c) Se M estiver entre 17 e 18,49: Baixo peso
d) Se M estiver entre 18,50 e 24,99: Peso normal
e) Se M estiver entre 25 e 29,99: Sobrepeso
f) Se M estiver entre 30 e 34,99: Obesidade grau I
g) Se M estiver entre 35 e 39,99: Obesidade grau II
h) Se M for maior que 40: Obesidade grau III
8) Ao término o sistema deve fornecer a seguinte saída para o usuário: */

function calcular() {

    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let classificacao = ''

    altura /= 100

    let IMC = peso / altura ** 2

    if (IMC <= 16) {
        classificacao = 'Baixo peso - MUITO GRAVE '
    } else if (IMC >= 16 && IMC <= 16.99) {
        classificacao = 'Baixo peso - GRAVE '
    }  else if (IMC >= 16 && IMC <= 16.99) {
        classificacao = 'Baixo peso - MUITO GRAVE '
    } else if (IMC >= 18.50 && IMC <= 24.99) {
        classificacao = 'Peso normal  '
    } else if (IMC >= 25 && IMC <= 29.99) {
        classificacao = 'Sobre peso '
    } else if (IMC >= 30 && IMC <= 34.99) {
        classificacao = 'Obesidade Grau I '
    } else if (IMC >= 35 && IMC <= 39.99) {
        classificacao = 'Obesidade Grau II '
    }  else {
        classificacao = 'Obesidade grau III'
    }

    if (nome === '' || peso === '' || altura === '') {
        alert('Preencha os campos')
    } else {
        document.getElementById('resultadoIMC').style.display = 'flex'
        document.getElementById('resultadoIMC-box').style.display = 'inline'
        document.getElementById('nomeIMC').innerText = nome
        document.getElementById('rIMC').innerText = IMC.toFixed(2)
        document.getElementById('classIMC').innerText = classificacao
    }

}

function limpar() {
    document.getElementById('resultadoIMC').style.display = 'none'
    document.getElementById('resultadoIMC-box').style.display = 'none'
    document.getElementById('nome').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''

}

function handleOnFocus(x) {
    x.style.border = '1px solid #0a0dc261';
    x.style.boxShadow = '0 0 5px #0a0dc268';
}

function handleOnBlur(x) {
    x.style.border = '1px solid #ccc';
    x.style.boxShadow = 'none';
}