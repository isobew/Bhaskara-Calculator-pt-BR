//FÓRMULA DE BHASKARA
//ax²+bx+c=0
//a diferente de 0
//Δ = b2 – 4ac
//x = (-b +- (raiz de Δ)) / 2a

function bhaskara() {

  //declarações dos valores A, B e C
  let a = document.getElementById("letraA").value;
  let b = document.getElementById("letraB").value;
  let c = document.getElementById("letraC").value;
  let delta = Number(Math.pow(b, 2) - (4 * a * c));


  //cálculo geral da equação
  let x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
  let x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a);

  //novo x caso o delta seja 0
  let novox;


  // caso o delta tenha alterações ou não
  if (delta > 1) {
    document.getElementById("delta").innerHTML = `O valor de delta é = ${delta}`;
    document.getElementById("resultado1").innerHTML = `O valor de X1 é = ${x1}`;
    document.getElementById("resultado2").innerHTML = `O valor de X2 é = ${x2}`;
  } else if (delta == 0) {
    novox = ((b * -1) / (2 * a));
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `Os valores de X1 e X2 são ${novox}`;
    document.getElementById("resultado2").innerHTML = "";
  } else {
    document.getElementById("delta").innerHTML = `O valor de delta é = ${delta}`;
    document.getElementById("resultado1").innerHTML = `X1 e X2 não podem ser calculados, pois o delta é menor do que 1`;
  }

  // a tem que ser diferente de 0
  if (a == 0) {
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `Operação inválida, insira um valor maior de 0 na letra A`;
    document.getElementById("resultado2").innerHTML = "";
  }

  //condição pra página iniciar zerada
  if (a == 0 && b == 0 && c == 0) {
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
  }

  // Equação incompleta, b=0

  if (a == 1 && b == 0 && c < 0) {
    x1 = Math.sqrt(-c);
    x2 = Math.sqrt(-c);

    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `O valor de X1 é = +${x1}`;
    document.getElementById("resultado2").innerHTML = `O valor de X2 é = -${x2}`;
  } else if (a == 1 && b == 0 && c > 0) {
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `Não existe resultado, pois a letra C tem valor positivo`;
  } else if ((a > 1 && b == 0 && c < 0) || (a < 0 && b == 0 && c > 0)) {
    a = a / a;
    c = c / a;
    x1 = Math.sqrt(-c);
    x2 = Math.sqrt(-c);

    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `O valor de X1 é = +${x1}`;
    document.getElementById("resultado2").innerHTML = `O valor de X2 é = -${x2}`;
  } else if ((a > 1 && b == 0 && c > 0) || (a < 0 && b == 0 && c < 0)) {
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `Não foi poossível calcular a raiz quadrada de um número negativo, portanto não existe resultado`;
  }

  // Equação incompleta, c=0
  if ((a > 0 || a < 0) && (b > 0 || b < 0) && c == 0) {
    x2 = parseFloat(-b / a).toFixed(1);

    document.getElementById("delta").innerHTML = "Obs: se a divisão do X2 der um número decimal não inteiro, optar pela fração";
    document.getElementById("resultado1").innerHTML = `O valor de X1 é = 0`;
    document.getElementById("resultado2").innerHTML = `O valor de X2 é = ${-b}/${a} ou ${x2}`;
  }

  // Equação incompleta, b=0 e c=0
  if (a == !0 && b == 0 && c == 0) {
    document.getElementById("delta").innerHTML = "";
    document.getElementById("resultado1").innerHTML = `O valor de X1 e X2 é = 0`;
  }

}

bhaskara()
function resetar() {
  document.getElementById("delta").innerHTML = "";
  document.getElementById("resultado1").innerHTML = "";
  document.getElementById("resultado2").innerHTML = "";
}