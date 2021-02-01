// // // -- 1 --
// maDiv  = document.querySelector('div')
// maDiv.addEventListener('click', (e) => {
//     let cible = e.target
//     cible2 = cible.localName
//     console.log(cible2)
//     if (cible2 == 'div') {
//         cible.style = 'border: solid 5px '
//     } else if (cible2 == 'p') {
//         cible.style = 'font-weight: bold; color: red;'
//     } else if (cible2 == 'h2') {
//         cible2 = cible.innerHTML
//         cible3 = cible2.substring(0, cible2.length - 1);
//         cible.innerHTML = cible3
//     } else if (cible2 == 'h1') {
//         cible.style = 'text-decoration: underline'
//     }
// })


// -- 2 --
// var texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

// var hover = document.querySelectorAll('p')[1]
// hover.style ='height: 50px'
// hover.addEventListener('mouseover', () => {
//     hover.innerHTML = texte
// })