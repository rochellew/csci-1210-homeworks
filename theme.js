(function () {
    var stored = localStorage.getItem('csci1210-theme');
    if (stored) {
        document.documentElement.setAttribute('data-bs-theme', stored);
    }
})();

function updateThemeToggleUI() {
    var icon = document.getElementById('theme-toggle-icon');
    var btn = document.getElementById('theme-toggle');
    if (!icon || !btn) return;
    var isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    icon.classList.toggle('is-dark', isDark);
    var label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
}

document.addEventListener('DOMContentLoaded', function () {
    updateThemeToggleUI();
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', next);
        localStorage.setItem('csci1210-theme', next);
        updateThemeToggleUI();
    });
});
