let nav = '<nav>\n' +
    '<div id="header" class="container-fluid">' +
        '<ul class="header_list">' +
            '<div class="row">' +
                '<div class="col-3">' +
                    '<li><a href="index.html">Strona główna</a></li>' +
                '</div>'+
                '<div class="col-3">'+
                    '<li><a href="contact.html">Kontakt</a></li>'+
                '</div>'+
                '<div class="col-3">'+
                    '<li><a href="mapa.html">Mapa</a></li>'+
                '</div>'+
                '<div class="col-3">'+
                    '<li><a href="quiz.html">Quiz</a></li>'+
                '</div>'+
            '</div>'+
        '</ul>'+
    '</div>'+
'</nav>';


let navbar = document.querySelector('.navbar');

navbar.innerHTML = nav;





