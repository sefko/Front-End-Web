function countColor (sColor1, sColor2) {
    return function () {
        let pElements = document.getElementsByTagName('p');
        let headertitleElements = document.getElementsByClassName('headertitle');
    
        let pCount = pElements.length;
        let headertitleCount = headertitleElements.length;
    
        document.title = pCount + ' параграфа, ' + headertitleCount + ' елемента с клас <headertitle>';
    
        for (let element of pElements) {
            element.style.backgroundColor = sColor1;
            console.log(element);
        }
    
        for (let element of headertitleElements) {
            element.style.backgroundColor = sColor2;
            console.log(element);
        }
    }
}

window.onload = countColor('cyan', 'yellow');