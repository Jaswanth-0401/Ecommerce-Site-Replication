function dropDown() {
    document.getElementById("dropDown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropDown = document.getElementById("dropDown");
        if (dropDown.classList.contains('show')) {
            dropDown.classList.remove('show');
        }
    }
}


