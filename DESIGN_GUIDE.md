# 🎨 Kafedra Vebsayti - Takomillashtirilgan Dizayn Qo'llanmasi

## 📝 Umumiy Ma'lumot

Bu qo'llanma "Amaliy Matematika va Axborot Texnologiyalari Kafedrasi" vebsaytiga qo'llangan barcha takomillashtirishlarni tavsiflab beradi.

## 🎯 Asosiy O'zgarishlar

### 1️⃣ Navbar (Navigatsion Panel)
**Xususiyatlar:**
- Scroll-da transparent → solid background o'tishi
- Smooth blur effect
- Animated underline linklar uchun
- Icon rotation hover effekti

**Ishlash:**
```javascript
// main.js automatic qiladi
// No manual implementation kerak
```

### 2️⃣ Hero Section
**Xususiyatlar:**
- Animated gradient background
- Moving radial gradients
- Stagge red text animations
- Modern white buttons

**CSS Classes:**
```
.hero-section - Asosiy section
.hero-content - Content wrapper
.btn-primary-custom - CTA buttons
```

**Animatsiya Tafsilotlari:**
- h1: slideDown 0.8s ease-out
- h2: slideDown 0.9s ease-out 0.1s
- p: slideDown 1s ease-out 0.2s
- Buttons: Shimmer effect on hover

### 3️⃣ Statistics Section
**CSS Classes:**
```
.stats-section - Container
.stat-card - Individual stat
.stat-number - Large number
.stat-label - Description text
```

**Animatsiyalar:**
- Hover: -12px lift + 1.03 scale
- Top border scale animation
- Gradient number text

**HTML Misol:**
```html
<div class="stat-card slide-in-left">
    <div class="stat-number" data-target="45">0</div>
    <div class="stat-label">O'qituvchi</div>
</div>
```

### 4️⃣ Teacher Cards
**CSS Classes:**
```
.card-custom - Card container
.teacher-card-stagger - Animated teacher card
.card-img-top - Image
.card-body - Content
```

**Hover Effektlari:**
- Image zoom: 1.1x + 2deg rotation
- Card lift: -12px translateY
- Gradient overlay appears
- Enhanced shadow

**Animatsiyalar:**
```css
.card-custom:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(13, 110, 253, 0.2);
}
```

### 5️⃣ Section Titles
**CSS Classes:**
```
.section-title - Asosiy title
```

**Xususiyatlar:**
- Gradient underline
- Underline expands on hover
- 2.8rem font size, 800 weight
- Smooth transitions

**Animatsiya:**
```css
.section-title::after {
    width: 80px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title:hover::after {
    width: 120px;
}
```

### 6️⃣ Buttons
**CSS Classes:**
```
.btn-main - Asosiy button
.btn-primary-custom - CTA buttons
.btn-submit - Form buttons
```

**Xususiyatlar:**
- Gradient background
- Shimmer effect on hover
- Rounded pill shape
- Better shadow effects

**Style:**
```css
background: linear-gradient(135deg, var(--primary) 0%, var(--info) 100%);
border-radius: 50px;
padding: 0.8rem 1.8rem;
```

### 7️⃣ Footer
**CSS Classes:**
```
.footer-content - Column content
.footer-links - Link list
.social-links - Social icons
.footer-bottom - Bottom info
```

**Xususiyatlar:**
- Gradient border-top
- Animated social icons
- Arrow animation on links
- Background pattern overlay

**Social Icons:**
```css
.social-links a {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-links a:hover {
    transform: translateY(-5px) scale(1.1);
}
```

### 8️⃣ Forms
**CSS Classes:**
```
.form-group - Form group
.form-control - Input/textarea
.form-label - Label
.btn-submit - Submit button
```

**Xususiyatlar:**
- Border color: rgba(13, 110, 253, 0.2)
- Enhanced focus state
- Better spacing
- Gradient submit button

### 9️⃣ Dark Mode
Hamma ba'zi CSS allohida dark mode uchun:
```css
body.dark-mode .card-title {
    color: white;
}
```

## 🎬 Animatsiyalar

### Keyframe Animatsiyalar

**fadeInUp**
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}
```

**slideInLeft / slideInRight**
```css
@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to { opacity: 1; transform: translateX(0); }
}
```

**slideUp, zoomIn, rotateIn**
Yangi animatsiyalar CSS/animations.css da mavjud

### CSS Animation Classes

| Class | Effekt | Duration |
|-------|--------|----------|
| `.fade-in-up` | Fade + Lift | 0.8s |
| `.slide-in-left` | Left Slide | 0.8s |
| `.slide-in-right` | Right Slide | 0.8s |
| `.scale-in` | Scale Up | 0.8s |
| `.zoom-in` | Zoom In | 0.6s |
| `.rotate-in` | Rotation | 0.7s |
| `.bounce-in` | Bounce | 0.6s |
| `.float-animation` | Floating | 3s infinite |

### Stagger Delays
```css
.animate-1 { animation-delay: 0.1s; }
.animate-2 { animation-delay: 0.2s; }
.animate-3 { animation-delay: 0.3s; }
.animate-4 { animation-delay: 0.4s; }
.animate-5 { animation-delay: 0.5s; }
```

### Hover Animations

| Class | Effekt |
|-------|--------|
| `.hover-lift` | -8px lift + shadow |
| `.hover-scale` | 1.08x scale |
| `.hover-rotate` | 5deg rotation |

## 🎯 Scroll-Triggered Animations

**Avtomatik qo'llaniladi:**
Quyidagi elementlar scroll-da avtomatik animate qilinadi:
- `.fade-in-up`
- `.slide-in-left`
- `.slide-in-right`
- `.card-custom`
- `.stat-card`

**JavaScript:**
```javascript
// main.js da ScrollAnimations class
// IntersectionObserver orqali qo'llaniladi
```

## 🎨 CSS Variables

```css
--primary: #0d6efd;          /* Asosiy Mavi */
--info: #0dcaf0;             /* Cyan */
--dark: #212529;             /* Qora */
--light: #f8f9fa;            /* Oq */
--bg-light: #ffffff;         /* Light bg */
--bg-dark-mode: #1a1a1a;     /* Dark bg */
--text-light: #333333;       /* Dark text */
--text-dark-mode: #e0e0e0;   /* Light text */
--transition: all 0.3s ease-in-out;
```

## 📦 Foydalanish Misollari

### Teacher Card
```html
<div class="col-md-4 mb-4">
    <div class="card-custom fade-in-up">
        <img src="image.jpg" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">O'qituvchi Nomi</h5>
            <p class="card-text">Lavozim</p>
            <a href="#" class="btn-main">Batafsil</a>
        </div>
    </div>
</div>
```

### Stats Card
```html
<div class="stat-card slide-in-left">
    <div class="stat-number" data-target="45">0</div>
    <div class="stat-label">O'qituvchi</div>
</div>
```

### Button
```html
<a href="#" class="btn-main">Tugma Matni</a>
```

## ⚙️ Easing Functions

Barcha animatsiyalar optimal performance uchun:
```css
cubic-bezier(0.4, 0, 0.2, 1)  /* Standard easing */
ease-out                        /* Fast ending */
ease-in-out                     /* Smooth both ends */
```

## 📱 Responsive Breakpoints

Bootstrap 5 breakpoints:
- `xs`: < 576px
- `sm`: 576px - 767px
- `md`: 768px - 991px
- `lg`: 992px - 1199px
- `xl`: 1200px - 1399px
- `xxl`: ≥ 1400px

## ♿ Accessibility

**Prefers Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; }
}
```

Vebsayt avtomatik user preferences ni respektlaydi.

## 🐛 Debugging Tips

1. **Animatsiyalar ishlamamoqda:**
   - Console da errors tekshiring
   - CSS class nomi to'g'ri ekanligini tekshiring
   - Browser DevTools da animation timeline ko'ring

2. **Navbar scroll effect ishlamamoqda:**
   - `NavbarScrollEffect` instansiyasi active ekanligini tekshiring
   - Scroll event listener qo'shilganligini tekshiring

3. **Performance issues:**
   - DevTools Performance tab dan profilash qiling
   - GPU acceleration tekshiring
   - Animation count cheksiz ekanligini tekshiring

## 📚 Muhim Fayllar

```
css/
  ├── style.css           ← Asosiy stillar
  ├── animations.css      ← Barcha animatsiyalar
  └── responsive.css      ← Responsive design

js/
  ├── main.js             ← Enhance JS + NavbarScrollEffect
  ├── data.js             ← Data
  └── translations.js     ← Multilingual support
```

## 🎯 Best Practices

1. **Animatsiyalar:** 0.3s - 0.9s duration dan kam bo'lmasa
2. **Easing:** cubic-bezier(0.4, 0, 0.2, 1) standart
3. **Shadows:** Gradient color uchun rgba istifodasi
4. **Transitions:** All 0.3s ease-in-out standart
5. **Z-index:** Component structure ko'rsatadi

## 📋 Animation Checklsit

- [ ] Navbar scroll effect qo'shildi
- [ ] Hero section animations ishlayabdi
- [ ] Teacher cards hover qiladi
- [ ] Scroll-triggered animations
- [ ] Dark mode to'liq
- [ ] Mobile responsive
- [ ] Forms styled
- [ ] Footer animated
- [ ] Accessibility test passed
- [ ] Performance optimized

## 🚀 Future Enhancements

1. Parallax effects
2. Timeline animations (single teacher page)
3. Image lazy loading
4. Micro-interactions
5. Loading skeletons
6. Advanced micro-animations
7. SVG animations
8. More gradient variations

---

**Version:** 1.0  
**Last Updated:** March 2026  
**Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
