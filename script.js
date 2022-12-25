window.onload = function() {
    var elements = document.getElementsByClassName('fade-in');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = 'fade-in 0.5s ease-in-out forwards';
    }
}