function addButton() {
    let body = document.getElementsByTagName('body')[0];

    let btn = document.createElement('button');
    btn.innerHTML = 'Swap';
    btn.onclick = swapRows;

    body.appendChild(btn);
}

function swapRows() {
    let firstRow = document.getElementsByTagName('table')[0].childNodes[2].childNodes;
    let secondRow = document.getElementsByTagName('table')[0].childNodes[3].childNodes;

    for (let i = 0; i < firstRow.length; ++i) {
        let tmp = firstRow[i].innerHTML;
        firstRow[i].innerHTML = secondRow[i].innerHTML;
        secondRow[i].innerHTML = tmp;
    }
}

window.addEventListener('load', addButton);