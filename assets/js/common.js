window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.abstract').forEach(item => item.addEventListener("click", function() {
        this.parent.parent.querySelectorAll(".abstract.hidden").forEach(item => item.classList.toggle('open'));
    }));
    document.querySelectorAll('a.bibtex').forEach(item => item.addEventListener("click", function() {
        this.parent.parent.querySelectorAll(".bibtex.hidden").forEach(item => item.classList.toggle('open'));
    }));
});
