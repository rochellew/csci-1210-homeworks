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

// In-page anchor links (e.g. <a href="#url-warning">) scroll their target
// to the vertical center of the viewport instead of the very top.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var id = link.getAttribute('href').slice(1);
            if (!id) return;
            var target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('highlight-flash');
            setTimeout(() => target.classList.remove('highlight-flash'), 2500);
            history.pushState(null, '', '#' + id);
        });
    });
});

document.addEventListener('show.bs.modal', function (event) {
    var trigger = event.relatedTarget;
    var modalImg = document.querySelector('#modalImg');
    var modalLabel = document.querySelector('#imgModalLabel');
    modalImg.src = trigger.src;
    modalImg.alt = trigger.alt;
    modalLabel.textContent = `Screenshot -- ${trigger.alt}`;
});