        document.querySelector('.hamburger').addEventListener('click',()=>document.querySelector('.nav ul').classList.toggle('active'));

        const p = document.getElementById('particles');
        for(let i=0;i<80;i++){
            const d=document.createElement('div'); d.className='particle';
            d.style.left=Math.random()*100+'vw'; d.style.top=Math.random()*100+'vh';
            d.style.animationDelay=Math.random()*8+'s'; d.style.animationDuration=(Math.random()*8+6)+'s';
            p.appendChild(d);
        }

        window.addToKorzinka = function(name, price, img=''){
            let cart = JSON.parse(localStorage.getItem('korzinka')||'[]');
            const ex = cart.find(i=>i.name===name);
            if(ex) ex.quantity +=1;
            else cart.push({name, price:Number(price), img, quantity:1});
            localStorage.setItem('korzinka', JSON.stringify(cart));
            updateCartCount();
            alert(name+" savatga qo'shildi!");
        };

        function updateCartCount(){
            let c = JSON.parse(localStorage.getItem('korzinka')||'[]');
            let t = c.reduce((s,i)=>s+i.quantity,0);
            document.getElementById('cartCount').innerText = t;
        }

        document.querySelectorAll('.buy-btn').forEach(b=>{
            b.addEventListener('click',function(){
                const card = this.closest('.product-card');
                const name = this.getAttribute('data-name') || card.querySelector('h3').textContent.trim();
                const price = parseInt(card.querySelector('.price').textContent.replace(/[^0-9]/g,''));
                const img = card.querySelector('.product-img')?.src || '';
                addToKorzinka(name, price, img);
            });
        });

        window.addEventListener('load', updateCartCount);

        window.addEventListener('scroll',()=>document.querySelector('.scroll-top').classList.toggle('show',window.scrollY>500));
        function scrollToTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
        
function showToast(message = "Mahsulot savatga qo'shildi!") {
    const toast = document.getElementById('toast');
    document.getElementById('toastText').textContent = message;
    toast.classList.remove('show');
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    }, 100);
}

window.addToKorzinka = function(name, price, img = '') {
    let cart = JSON.parse(localStorage.getItem('korzinka') || '[]');
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price: Number(price), img, quantity: 1 });
    }
    localStorage.setItem('korzinka', JSON.stringify(cart));
    updateCartCount();
    showToast(`“${name}” savatga qo'shildi!`);
};

let pc = JSON.parse(localStorage.getItem("pc")) || [];

if (pc.length === 0) {
pc.push({
    name: "N_Comp_Store GOLD",
    price: 15000000,
    img: "./64607477.jpg.webp",
    cpu: "i9-14900K",
    gpu: "RTX 5090",
    ram: "128GB DDR5",
    cooling: "Custom Loop",
    psu: "1200W Platinum",
    case: "Lian Li O11 Dynamic"
});

pc.push({
    name: "N_Comp_Store HELIUM PLUS",
    price: 14000000,
    img: "./1.SI50xra45GdCbyZiaM8Ds19n5mHKZ2ZvAmLmZcRv7G3C.1Ij_pqH3hrqgavNFMQJ_DWtjBzpRMz88FZX9J9Ym4aQ",
    cpu: "Ryzen 9 7950X3D",
    gpu: "RTX 5080",
    ram: "64GB DDR5",
    cooling: "AIO 360mm"
});

pc.push({
    name: "N_Comp_Store SILVER",
    price: 12000000,
    img: "./28548913.jpg.webp",
    cpu: "i7-14700K",
    gpu: "RTX 4070 Ti",
    ram: "32GB DDR5",
    ssd: "1TB NVMe"
});

pc.push({
    name: "N_Comp_Store RADON",
    price: 220000000,
    img: "./13653179.jpg.webp",
    cpu: "Threadripper 7960X",
    gpu: "Dual RTX 5090",
    ram: "128GB DDR5"
});

pc.push({
    name: "N_Comp_Store LITHIUM",
    price: 185000000,
    img: "./18357708.jpg.webp",
    cpu: "Ryzen 7 7800X3D",
    gpu: "RTX 5080",
    ram: "64GB DDR5",
    ssd: "2TB Gen5"
});

pc.push({
    name: "N_Comp_Store COBALT",
    price: 175000000,
    img: "./63419144.jpg.webp",
    cpu: "i9-13900KS",
    gpu: "RTX 4080",
    ram: "64GB DDR5",
    cooling: "Custom Water Cooling"
});

pc.push({
    name: "N_Comp_Store CARBON",
    price: 380000000,
    img: "./67058610.jpg.webp",
    cpu: "Dual Xeon Platinum",
    gpu: "4×RTX 5090",
    ram: "256GB ECC DDR5",
    ssd: "8TB RAID"
});

pc.push({
    name: "N_Comp_Store TITAN",
    price: 335000000,
    img: "./75150795.jpg.webp",
    cpu: "Threadripper PRO 7995WX",
    gpu: "RTX A6000",
    ram: "192GB DDR5",
    ssd: "4TB NVMe"
});

pc.push({
    name: "N_Comp_Store KRYPTON",
    price: 275000000,
    img: "./75464229.jpg.webp",
    cpu: "i9-14900KS",
    gpu: "RTX 5090",
    ram: "128GB DDR5",
    cooling: "360mm AIO"
});

pc.push({
    name: "RTX 5090 PC",
    price: 45000000,
    img: "./1.MKgosLa4nEEeGV5ERNw_iE0RnkeWER5JXhSeQ5gZlEue.webp",
    cpu: "i9-14900K",
    gpu: "RTX 5090",
    ram: "128GB DDR5"
});

pc.push({
    name: "Gaming Laptop (ROG Strix)",
    price: 28000000,
    img: "./rog stirx.png",
    cpu: "i9-13980HX",
    gpu: "RTX 4080",
    ram: "32GB DDR5",
    display: "240Hz OLED"
});

pc.push({
    name: "MacBook Pro 14″ M4 Pro",
    price: 18000000,
    img: "./i.webp",
    cpu: "Apple M4 Pro",
    ram: "32GB",
    ssd: "1TB",
    display: "14.2″ Liquid Retina XDR"
});

pc.push({
    name: "Purple RGB PC",
    price: 52000000,
    img: "./hero-e1706827581510-768x649.png",
    cpu: "Ryzen 9 7950X3D",
    gpu: "RTX 5090",
    ram: "64GB DDR5",
    ssd: "2TB NVMe"
});

pc.push({
    name: "MSI Suprim Gaming PC",
    price: 48500000,
    img: "./cxHkn1P24p.webp",
    cpu: "i7-14700K",
    gpu: "RTX 4080 Suprim",
    ram: "32GB DDR5",
    cooling: "Custom Loop"
});

pc.push({
    name: "Jonsbo MOD-5 Beast PC",
    price: 65000000,
    img: "./S00e0025359444354a396da6fce0d7f050.jpg_480x480.jpg",
    cpu: "Threadripper 7960X",
    gpu: "Dual RTX 5090",
    ram: "128GB DDR5",
    ssd: "4TB SSD"
});

pc.push({
    name: "White Lian Li O11 PC",
    price: 38000000,
    img: "./c5352251d4da2d7c887502799cbbe90a.jpg",
    cpu: "i5-14600K",
    gpu: "RTX 4070 Ti",
    ram: "32GB DDR5",
    ssd: "1TB SSD"
});

pc.push({
    name: "MacBook Pro 16″ M3 Max",
    price: 22500000,
    img: "./Original-New-Mac-Book-PRO-14-14inch-M3-Max-Laptop-in-Stock.webp",
    cpu: "Apple M3 Max",
    ram: "48GB",
    ssd: "2TB",
    display: "16.2″ Mini-LED"
});

pc.push({
    name: "Acer Swift Evo",
    price: 14800000,
    img: "./e472dbbb-9c6c-11ed-80f2-005056963b6e.jpg",
    cpu: "Intel Core i7-13700H",
    ram: "16GB LPDDR5",
    ssd: "1TB",
    display: "14″ OLED"
});

pc.push({
    name: "Razer Blade 16 (2025)",
    price: 42000000,
    img: "./1.W_SDTba19x2V7U0duSRx34fv9R095lUcjez1Hw.JOZFv9ZvaqmdEeejGsnXHL_Ix7DJaK3bxGvV_ysyLU4",
    cpu: "Ryzen AI 9 HX 370",
    gpu: "RTX 5090 Laptop",
    ram: "64GB DDR5",
    display: "4K Mini-LED"
});

pc.push({
    name: "Corsair Windforce PC",
    price: 39900000,
    img: "./corsair_crystal_series_570x_69_small.jpg",
    cpu: "i9-13900KS",
    gpu: "RTX 4080",
    ram: "64GB DDR5",
    ssd: "2TB Gen5"
});

pc.push({
    name: "Compact ITX Purple PC",
    price: 29500000,
    img: "./th.jpg",
    cpu: "Ryzen 7 7800X3D",
    gpu: "RTX 4070",
    ram: "32GB DDR5",
    ssd: "1TB NVMe"
});
}
localStorage.setItem("pc", JSON.stringify(pc));

console.log("Barcha mahsulotlar localStorage'ga muvaffaqiyatli qo'shildi!");
console.log("Jami mahsulotlar soni:", pc.length);
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
    const hamburger1 = document.getElementById("hamburger");
    const navList1 = document.getElementById("navList");

    hamburger1.onclick = () => {
        navList1.classList.toggle("active");
    };
