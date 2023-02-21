function sort() {
    var list, i, switching, b, shouldSwitch;

    list = document.getElementById("01");

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
    let list = document.getElementById("01");
    let li = document.createElement('li');

    arrayItem = document.getElementById('arrayItem').value

    if (arrayItem === '') {
        alert('Digite um Item')
    } else {
        list.appendChild(li)
        li.innerText = arrayItem
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