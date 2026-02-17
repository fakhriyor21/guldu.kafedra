/* ================================================
   MAIN JAVASCRIPT FILE
   Asosiy interaktiv funksiyalar
   ================================================ */

// ========================
// 1. LOADING SCREEN
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Yuklaш ekranini 1.2 sekunddan keyin yashirish
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 1200);
});

// ========================
// 2. DARK MODE TOGGLE
// ========================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.darkModeKey = 'kafedra-dark-mode';
        this.init();
    }

    init() {
        // Saqlangan preferansiyani o'qish
        const isDark = localStorage.getItem(this.darkModeKey) === 'true';
        if (isDark) {
            this.enableDarkMode(false);
        }

        // Toggle tugmasiga event listener qo'shish
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode(true);
        }
    }

    enableDarkMode(save = true) {
        document.body.classList.add('dark-mode');
        if (this.themeToggle) {
            this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        if (save) {
            localStorage.setItem(this.darkModeKey, 'true');
        }
    }

    disableDarkMode(save = true) {
        document.body.classList.remove('dark-mode');
        if (this.themeToggle) {
            this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        if (save) {
            localStorage.setItem(this.darkModeKey, 'false');
        }
    }
}

const themeManager = new ThemeManager();

// ========================
// 3. SCROLL TO TOP BUTTON
// ========================

class ScrollToTopButton {
    constructor() {
        this.button = document.querySelector('.scroll-to-top');
        this.threshold = 300;
        if (this.button) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.scrollToTop();
        });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > this.threshold) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

const scrollToTop = new ScrollToTopButton();

// ========================
// 4. COUNTER ANIMATION
// ========================

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-target]');
        this.hasAnimated = false;
        if (this.counters.length > 0) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.startCounters();
                    this.hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        const parentSection = this.counters[0].closest('section') || this.counters[0].closest('.stats-section');
        if (parentSection) {
            observer.observe(parentSection);
        }
    }

    startCounters() {
        this.counters.forEach((counter, index) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                
                if (current >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                }
            };

            setTimeout(updateCounter, index * 100);
        });
    }
}

const counterAnimation = new CounterAnimation();

// ========================
// 5. SCROLL ANIMATIONS
// ========================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
        if (this.elements.length > 0) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

const scrollAnimations = new ScrollAnimations();

// ========================
// 6. NAVIGATION MANAGER
// ========================

class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        this.init();
    }

    init() {
        this.updateActiveLink();
    }

    updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

const navigationManager = new NavigationManager();

// ========================
// DYNAMIC CONTENT TRANSLATION
// ========================

function getTranslated(key) {
    if (typeof languageManager !== 'undefined') {
        return languageManager.translate(key);
    }
    return key;
}

// ========================
// 7. FORM VALIDATION
// ========================

class FormValidator {
    constructor() {
        this.form = document.querySelector('.contact-form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.showSuccessMessage();
            this.form.reset();
        }
    }

    validateForm() {
        const name = this.form.querySelector('input[name="name"]');
        const email = this.form.querySelector('input[name="email"]');
        const message = this.form.querySelector('textarea[name="message"]');

        let isValid = true;

        if (!this.validateField(name)) isValid = false;
        if (!this.validateField(email)) isValid = false;
        if (!this.validateField(message)) isValid = false;

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.getAttribute('type') || field.tagName.toLowerCase();

        if (!value) {
            this.showError(field, 'Ushbu maydon to\'ldirilishi kerak');
            return false;
        }

        if (type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'To\'g\'ri email kiriting');
                return false;
            }
        }

        if (type === 'textarea' && value.length < 10) {
            this.showError(field, 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak');
            return false;
        }

        this.clearError(field);
        return true;
    }

    showError(field, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        
        let errorDiv = field.parentElement.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-danger small mt-1';
            field.parentElement.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    clearError(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        
        const errorDiv = field.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    showSuccessMessage() {
        const alert = document.createElement('div');
        alert.className = 'alert alert-success alert-dismissible fade show';
        alert.innerHTML = `
            <i class="fas fa-check-circle me-2"></i>
            <strong>Muvaffaqiyat!</strong> Sizning xabaringiz yuborildi.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        this.form.parentElement.insertBefore(alert, this.form);

        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}

const formValidator = new FormValidator();

// ========================
// 8. SEARCH FUNCTIONALITY
// ========================

class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('teacherSearch');
        this.cards = document.querySelectorAll('.teacher-card');
        if (this.searchInput) {
            this.init();
        }
    }

    init() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    handleSearch(query) {
        query = query.toLowerCase().trim();
        let visibleCount = 0;

        this.cards.forEach(card => {
            const name = card.querySelector('h5')?.textContent.toLowerCase() || '';
            const title = card.querySelector('.card-text')?.textContent.toLowerCase() || '';

            if (query === '' || name.includes(query) || title.includes(query)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.style.display = visibleCount === 0 && query !== '' ? 'block' : 'none';
        }
    }
}

const searchManager = new SearchManager();

// ========================
// 9. SMOOTH SCROLL
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// 10. PAGE LOADER
// ========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Scroll animatsiyalar uchun
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

console.log('%c Guliston Davlat Universiteti', 'font-size: 18px; font-weight: bold; color: #0d6efd;');
console.log('%c Axborot Texnologiyalari Fakulteti', 'font-size: 14px; color: #0dcaf0;');
