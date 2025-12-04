document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.nav ul');
    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    function showToast(message = "Mahsulot savatga qo'shildi!") {
        const toast = document.getElementById('toast');
        if (!toast) return;
        document.getElementById('toastText').textContent = message;
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2200);
        }, 100);
    }

    function addToKorzinka(name, price, img = '', okileyka = 'no', guarantee = '1 yil') {
        let korzinka = JSON.parse(localStorage.getItem('korzinka') || '[]');
        const existing = korzinka.find(item => item.name === name);
        if (existing) {
            existing.quantity += 1;
        } else {
            korzinka.push({ name, price: Number(price), img, okileyka, guarantee, quantity: 1 });
        }
        localStorage.setItem('korzinka', JSON.stringify(korzinka));
        updateCartCount();
        showToast(`“${name}” savatga qo'shildi!`);
    }

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.product-card');
            if (!card) return;
            const name = card.querySelector('h3').textContent.trim();
            const price = parseInt(card.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
            const img = card.querySelector('.product-img').src;
            addToKorzinka(name, price, img);
        });
    });

    document.querySelectorAll('.btn.btn-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card.premium');
            if (!card) return;
            const name = card.querySelector('.title').textContent.trim();
            const price = parseInt(card.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
            const img = card.querySelector('img').src;
            addToKorzinka(name, price, img);
        });
    });

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('korzinka') || '[]');
        let total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const el = document.getElementById('cartCount');
        if (el) el.innerText = total || 0;
    }

    window.addEventListener('load', updateCartCount);
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('focus', updateCartCount);

    window.addEventListener('scroll', () => {
        const scrollBtn = document.querySelector('.scroll-top');
        if (scrollBtn) scrollBtn.classList.toggle('show', window.scrollY > 500);
    });

    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const pcs = document.querySelectorAll('.pc');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.style.transform = 'translateY(0)';
                en.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.3 });

    pcs.forEach(pc => {
        pc.style.transform = 'translateY(60px)';
        pc.style.opacity = '0';
        pc.style.transition = 'all 1s ease';
        observer.observe(pc);
    });

    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlide = setInterval(nextSlide, 4000);

    function showSlide(index) {
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    if (rightArrow) rightArrow.addEventListener('click', () => {
        nextSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 7000);
    });

    if (leftArrow) leftArrow.addEventListener('click', () => {
        prevSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 7000);
    });
});
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    body.classList.toggle('menu-open');

    if (navList.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

document.querySelectorAll('#navList a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.overflow = '';
    });
});
