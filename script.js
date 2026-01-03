// Stoel Knop

document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('#furniture-picker .header li');
    const contents = document.querySelectorAll('#furniture-picker .box .category');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Voorkomt pagina-reload

            // Verwijder 'active' van alle tabs en inhoud
            tabLinks.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Voeg 'active' toe aan de geklikte tab
            this.classList.add('active');

            // Toon de bijbehorende inhoud
            const category = this.getAttribute('data-category');
            document.getElementsByClassName(category)[0].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const woodLinks = document.querySelectorAll('#hero .material ul li');
    const itemDisplay = document.querySelector('#furniture-viewer .placeholder img');

    woodLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log(this)

            woodLinks.forEach(l => l.classList.remove('active'));

            this.classList.add('active');

            const category = this.getAttribute('data-category')
            itemDisplay.setAttribute('src', 'images/'+String(category)+'/stoel_i.jpg');
        });
    })
});

// Schommelstoel Knop

//document.querySelector('#furniture-picker .placeholder .box span').onclick = function() {
//    document.querySelector('#furniture-viewer img').src = 'images/stoelden.jpg'
//}

