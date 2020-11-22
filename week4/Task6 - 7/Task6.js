function addTable() {
    const tableCaption = 'Table caption';
    const tableTitles = ['Evidence Rating', 'Effect', 'Efficacy', 'Consensus', 'Comments'];
    const tableRows = [['A', 'Power Output', '3 Stars', '80% <br> 18 studies', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis cumque doloribus, eius enim est exercitationem harum itaque iure iusto magni nam nobis? Alias aspernatur deleniti deserunt ea veniam!'],
                       ['B', 'Weight', '4 Stars', '100% <br> 65 studies', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad corporis cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati.']];

    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    table.setAttribute('border','');
    
    let caption = document.createElement('caption');
    caption.innerHTML = tableCaption;
    table.appendChild(caption);

    let titles = document.createElement('tr');
    for (let title of tableTitles) {
        let th = document.createElement('th');
        th.innerHTML = title;
        titles.appendChild(th);
    }
    table.appendChild(titles);

    for (let tableRow of tableRows) {
        let tr = document.createElement('tr');
        for (let element of tableRow) {
            let td = document.createElement('td');
            td.innerHTML = element;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
        
    body.appendChild(table);
}

window.addEventListener('load', addTable);