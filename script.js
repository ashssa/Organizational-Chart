document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const parentUnit = this.parentNode;
            parentUnit.classList.toggle('open');
        });
    });
});
