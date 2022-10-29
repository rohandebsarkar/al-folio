window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.abstract').forEach(item => item.addEventListener("click", function() {
        this.parent.parent.querySelectorAll(".abstract.hidden").forEach(item => item.classList.toggle('open'));
    }));
    document.querySelectorAll('a.bibtex').forEach(item => item.addEventListener("click", function() {
        this.parent.parent.querySelectorAll(".bibtex.hidden").forEach(item => item.classList.toggle('open'));
    }));

    document.getElementById("bs-navbar-toggler").onclick = function() {
        this.classList.toggle('collapsed');
        document.getElementById("navbarNav").classList.toggle('show');
        if (this.getAttribute("aria-expanded") === 'false') 
            this.setAttribute("aria-expanded", 'true');
        else 
            this.setAttribute("aria-expanded", 'false');
    };
});
