document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        const items = dropdown.querySelectorAll('.dropdown-item');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
            dropdown.classList.toggle('open');
        });

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                btn.querySelector('span').textContent = item.textContent.trim();
                dropdown.classList.remove('open');
            });
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    });

    document.getElementById('buyBtn').addEventListener('click', () => {
        const okileyka = document.querySelector('#okileyka .selected').dataset.value;
        const ekran = document.querySelector('#ekran .selected').dataset.value;

        addToKorzinka(
            'N_Comp_Store CARBON',
            380000000,
            './64607477.jpg.webp',
            okileyka,
            '1 yil'
        );

        alert('CARBON korzinkaga qo‘shildi!');
    });
});

window.addToKorzinka = function(name, price, img, okileyka, guarantee) {
    let korzinka = JSON.parse(localStorage.getItem('korzinka')) || [];
    const existing = korzinka.find(i => i.name === name && i.okileyka === okileyka);

    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        korzinka.push({ name, price, img, okileyka, guarantee, quantity: 1 });
    }

    localStorage.setItem('korzinka', JSON.stringify(korzinka));
};