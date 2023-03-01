let objetos = Array('Java', 'Spring', 'React', 'Typescript', 'HMTL5', 'CSS3', 'JavaScript')

for (let i = 0; i < objetos.length; i++) {
    let li = document.createElement('li')
    
    li.innerText = objetos[i]

    document.getElementById('lista').appendChild(li)
}

function sort() {
    var list, i, switching, b, shouldSwitch;

    list = document.getElementById("lista");

    switching = true;

    while (switching) {
        switching = false;
        b = list.getElementsByTagName("li");

        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function addItem() {
    let list = document.getElementById("lista");
    let li = document.createElement('li');

    arrayItem = document.getElementById('arrayItem').value

    if (arrayItem === '') {
        alert('Digite um item no campo para inserir na lista')
    } else {
        if (objetos.includes(arrayItem)) {
            alert('O item "'+arrayItem+'" já existe na lista')
        } else {
            list.appendChild(li)
            li.innerText = arrayItem
            objetos.push(arrayItem)
        }
    }

}

function handleOnFocus(x) {
    x.style.border = '1px solid white';
    x.style.boxShadow = '0 0 10px white';
}

function handleOnBlur(x) {
    x.style.border = '1px solid #ccc';
    x.style.boxShadow = 'none';
}