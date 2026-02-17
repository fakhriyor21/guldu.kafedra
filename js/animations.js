/* ================================================
   ANIMATIONS JAVASCRIPT FILE
   Scroll va interaktiv animatsiyalar
   ================================================ */

// ========================
// SCROLL ANIMATION MANAGER
// ========================

class ScrollAnimationManager {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    animateElement(element) {
        element.classList.add('animated');
    }
}

const scrollAnimManager = new ScrollAnimationManager();

// ========================
// PARALLAX EFFECT
// ========================

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        if (this.elements.length > 0) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => this.updateParallax());
    }

    updateParallax() {
        const scrollPosition = window.pageYOffset;

        this.elements.forEach(element => {
            const depth = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            element.style.transform = `translateY(${scrollPosition * depth}px)`;
        });
    }
}

const parallax = new ParallaxEffect();

// ========================
// STAGGER ANIMATION
// ========================

class StaggerAnimation {
    constructor() {
        this.groups = document.querySelectorAll('[data-stagger]');
        if (this.groups.length > 0) {
            this.init();
        }
    }

    init() {
        this.groups.forEach(group => {
            const children = group.querySelectorAll('[data-stagger-child]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateChildren(children);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(group);
        });
    }

    animateChildren(children) {
        children.forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = `all 0.6s ease-out ${index * 0.1}s`;

            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, 10);
        });
    }
}

const stagger = new StaggerAnimation();

// ========================
// HOVER CARD ANIMATION
// ========================

document.querySelectorAll('.card-custom').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    });
});

// ========================
// BUTTON ANIMATION
// ========================

document.querySelectorAll('.btn-primary-custom, .btn-main, .btn-submit').forEach(button => {
    button.addEventListener('click', function(e) {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ========================
// TYPEWRITER EFFECT
// ========================

class TypewriterEffect {
    constructor(selector, text, speed = 50) {
        this.element = document.querySelector(selector);
        this.text = text;
        this.speed = speed;
        this.index = 0;

        if (this.element) {
            this.type();
        }
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// ========================
// NUMBER ANIMATION
// ========================

class NumberAnimation {
    constructor(selector, target, duration = 2000) {
        this.element = document.querySelector(selector);
        this.target = target;
        this.duration = duration;
        this.current = 0;
        this.startTime = null;

        if (this.element) {
            this.animate();
        }
    }

    animate() {
        const progress = (Date.now() - this.startTime) / this.duration;
        
        if (progress < 1) {
            this.current = Math.floor(this.target * progress);
            this.element.textContent = this.current;
            requestAnimationFrame(() => this.animate());
        } else {
            this.element.textContent = this.target;
        }
    }
}

// ========================
// PROGRESS BAR
// ========================

class ProgressBar {
    constructor() {
        this.progressBar = document.querySelector('.progress-bar');
        if (this.progressBar) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.pageYOffset;
        const progress = (scrollPosition / windowHeight) * 100;

        this.progressBar.style.width = progress + '%';
    }
}

const progressBar = new ProgressBar();

// ========================
// FADE IN ON SCROLL
// ========================

class FadeInOnScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-fade-in]');
        if (this.elements.length > 0) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            observer.observe(element);
        });
    }
}

const fadeIn = new FadeInOnScroll();

// ========================
// BOUNCE ANIMATION
// ========================

function addBounceAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'bounce-ball 1s ease-in-out infinite';
    });
}

// ========================
// ROTATE ANIMATION
// ========================

function addRotateAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'rotate 2s linear infinite';
    });
}

// ========================
// PULSE ANIMATION
// ========================

function addPulseAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'pulse 2s ease-in-out infinite';
    });
}

// ========================
// HEARTBEAT ANIMATION
// ========================

function addHeartbeatAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'heartbeat 1.3s ease-in-out infinite';
    });
}

// ========================
// SHAKE ANIMATION
// ========================

function addShakeAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'shake 0.5s ease-in-out';
    });
}

// ========================
// FLIP ANIMATION
// ========================

function addFlipAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = 'flip 0.6s ease-out';
    });
}

// ========================
// TIMELINE ANIMATION
// ========================

class TimelineAnimation {
    constructor() {
        this.items = document.querySelectorAll('.timeline-item');
        if (this.items.length > 0) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });

        this.items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = item.classList.contains('left') ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'all 0.6s ease-out';
            observer.observe(item);
        });
    }
}

const timeline = new TimelineAnimation();

// ========================
// SCROLL VELOCITY
// ========================

class ScrollVelocity {
    constructor() {
        this.lastScrollTop = 0;
        this.velocity = 0;
        this.isScrollingUp = false;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            this.velocity = Math.abs(currentScroll - this.lastScrollTop);
            this.isScrollingUp = currentScroll < this.lastScrollTop;
            this.lastScrollTop = currentScroll;
        });
    }

    getVelocity() {
        return this.velocity;
    }

    isScrollingFast() {
        return this.velocity > 50;
    }
}

const scrollVelocity = new ScrollVelocity();

// ========================
// INIT ALL ANIMATIONS
// ========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c Barcha animatsiyalar ishga tushdi!', 'color: #0dcaf0; font-weight: bold;');
});
