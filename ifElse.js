

let num = prompt("Digite um numero: ");


if (num % 2 == 0) {
    alert("<br /> Esse numero e par. <br />");
    if (num >= 15) {
        alert("<br /> Esse numero e maior ou igual 15. <br />");
    }
    if (num > 45) {
        alert("<br /> Esse numero e maior 45. <br />");
        if (num == 2) {
            alert("<br /> Esse numero e 2. <br />");
        }
    } else {
        alert("<br /> Esse numero e menor que  45. <br />");
        if (num == 2) {
            alert("<br /> Esse numero e 2. <br />");
        }
    }

} else if (num == 0) {
    alert("<br /> Esse numero e zero. <br />");
} else {
    alert("<br /> Esse numero e impar. <br />");
    if (num >= 95) {
        alert("<br /> Esse numero e maior ou igual 95. <br />");
    }
    if (num >= 95) {
        alert("<br /> Esse numero e maior ou igual 95. <br />");
        if (num < 500) {
            alert("<br /> Esse numero e menor que 500. <br />");
        } else {
            alert("<br /> Esse numero menor que 95. <br />");
        }
    } else {
        if (num < 6) {
            alert("<br /> Esse numero e maior que 6. <br />");
        } else if (num == 3) {
            alert("<br /> Esse numero e 3. <br />");
        } else {
            alert("<br /> Esse numero nao e 3. <br />");
        }
    }
}