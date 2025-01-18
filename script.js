/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.
*/
function soma () {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    var resultado = n1 + n2

    document.getElementById('resultado').setAttribute("value", resultado);
}


/*2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".
*/
function poui () {
    var num = parseFloat(document.getElementById('num').value);


    if (num % 2 == 0) {
        resultado = "Par"
    }
    else{
        resultado = "Ímpar"
    }

    document.getElementById('resultadopoui').setAttribute("value", resultado);
}

/*3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.
*/
function loop () {
    const section = document.querySelector('section');

    for (var i = 1; i <=10; i++){
        var textnum = document.createElement('p');
        textnum.innerHTML = i;
        section.appendChild(textnum);
    }
}

/*4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.
*/
function tabuada() {
    var num = parseFloat(document.getElementById('num2').value);

    const div = document.querySelector('#tabuada'); // Seleciona o div corretamente
    for (var n = 1; n <= 10; n++) {
        var text = document.createElement('p');
        text.innerText = num + ' x ' + n + ' = ' + n * num;
        div.appendChild(text);
    }
}

/*5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.
*/
const arrayNum = [];

function pegarNum () {
    var num = parseFloat(document.getElementById('nuns').value);
    arrayNum.push(num);
}
function verificar () {
    var max = Math.max.apply(null, arrayNum);
    document.getElementById('verific').setAttribute("value", max);
}

/*6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.
*/
function palavra () {
    var palav = document.getElementById('palav').value;

    var palavarray = palav.split('')
    palavarray.reverse();
    var resultado = palavarray.join('');

    document.getElementById('aaa').setAttribute("value", resultado);
}


/*7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.
*/
const arrayNumOutro = [];

function pegarNumOutro () {
    var num = parseFloat(document.getElementById('nunsoutro').value);
    arrayNumOutro.push(num);
}
function somararray () {
    let somaa = 0;

    for (let i = 0; i < arrayNumOutro.length; i++) {
        somaa += arrayNumOutro[i];
    }

    document.getElementById('somarray').setAttribute("value", somaa);
}

/*8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".
*/
function verificarPrimo() {
    var num = parseInt(document.getElementById('num3').value);
    var primo = "É um número primo!";
    var nprimo = "Não é um número primo!";

    if (num < 2) {
        document.getElementById('primoounao').setAttribute("value", nprimo);
        return;
    }
    if (num > 2 && num % 2 == 0) {
        document.getElementById('primoounao').setAttribute("value", nprimo);
        return;
    }

    for (var i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {
            document.getElementById('primoounao').setAttribute("value", nprimo);
            return;
        }
    }

    document.getElementById('primoounao').setAttribute("value", primo);
}



/*9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.
*/
function fatoriar() {
    var num = parseInt(document.getElementById('num4').value);
    var resultadoFat = 1;

    for (let cont = 1; cont <= num; cont++){
        resultadoFat *= cont;
    }
    document.getElementById('fatorial').setAttribute("value", resultadoFat);
}

/*10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.
*/
function testarpalindromo(){
    var palavr = document.getElementById('palavr').value;

    var palindr = palavr.split("").reverse().join("");

    if (palavr === palindr){
        document.getElementById('results').setAttribute("value", "É um palíndromo");
        return;
    }
    document.getElementById('results').setAttribute("value", "Não é palíndromo");
}

/*11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.
*/
function contaVogal (){
    var frase = document.getElementById('frase').value;
    var vogal = 0;
    
    for (let i = 0; i <=frase.length; i++){
        var verifica = frase[i];
        if ('aeiou'.includes(verifica)) {
            vogal++;
        }
    }
    document.getElementById('resultPalindromo').setAttribute("value", vogal);
}


/*12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.
*/
function aleatorizar(){
    let x = Math.floor((Math.random() * 100) + 1);
    document.getElementById('aleatorizarresult').setAttribute("value", x);
}


/*13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.
*/
const arrayPegarArray = [];
function pegarArray(){
    var nun = parseFloat(document.getElementById('nun').value);
    arrayPegarArray.push(nun);
}
function coisasnegativo(){
    for (let i = 0; i <= arrayPegarArray.length; i++){
        var verifica = arrayPegarArray[i];
        if (verifica < 0) {
            arrayPegarArray.splice(i, 1, 0);
        }
    }
    document.getElementById('numNegative').setAttribute("value", arrayPegarArray);
}

/*14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.
*/
const arrayPalavrasProibidas = ['inveja', 'medo', 'raiva', 'vergonha'];

function verificarPalavras() {
    var text = document.getElementById('texto').value.toLowerCase();
    var texto = text.split(' ');

    var contPalavrasP = 0;
    for (let i = 0; i < texto.length; i++) {
        var palavra = texto[i];
        if (arrayPalavrasProibidas.includes(palavra)) {
            contPalavrasP++;
        }
    }

    if (contPalavrasP > 0) {
        alert(`Você digitou ${contPalavrasP} palavra(s) feia(s)! Cuidado, não faça isso :(`);
    } else {
        alert('Você não digitou nenhuma palavra feia! Parabéns :)');
    }
}

/*15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/
function gerarNumPares(){
    const arrayPares = [];

    for (var i = 1; i <=20; i++){
        if (i % 2 == 0){
            arrayPares.push(i);
        }
    }
    document.getElementById('numsGerados').setAttribute("value", arrayPares);
}