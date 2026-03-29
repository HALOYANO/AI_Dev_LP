// GA4 CTAクリック追跡
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cta-button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'engagement',
                    event_label: 'cta_button'
                });
            }
        });
    });

    // FAQ アコーディオン
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var isOpen = btn.getAttribute('aria-expanded') === 'true';
            var answer = btn.nextElementSibling;

            // 他を閉じる
            document.querySelectorAll('.faq-question').forEach(function (other) {
                other.setAttribute('aria-expanded', 'false');
                other.nextElementSibling.classList.remove('is-open');
            });

            // 自身をトグル
            if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                answer.classList.add('is-open');
            }
        });
    });

    // スクロールアニメーション
    var targets = document.querySelectorAll(
        '.resonance-card, .offer-card, .timeline-item, .faq-item, .section-title, .section-subtitle, .resonance-answer'
    );

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(function (el) {
        el.classList.add('fade-up');
        observer.observe(el);
    });
});
