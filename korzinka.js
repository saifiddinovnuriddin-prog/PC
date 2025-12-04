document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('korzinkaItems');
    const totalEl = document.getElementById('totalPrice');

    function render() {
        let cart = JSON.parse(localStorage.getItem('korzinka') || '[]');
        let total = 0;

        if (cart.length === 0) {
            itemsContainer.innerHTML = '<p class="empty-cart">Korzinka bo‘sh</p>';
            totalEl.textContent = '0 so‘m';
            return;
        }

        itemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const sum = item.price * item.quantity;
            total += sum;

            const div = document.createElement('div');
            div.className = 'korzinka-item';
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80/111/fff?text=No+Image'">
                <div class="korzinka-info">
                    <h3>${item.name}</h3>
                    <p>Okiyleyka: ${item.okileyka === 'yes' ? 'Ha' : ''} • Garantiya: ${item.guarantee}</p>
                </div>
                <div class="korzinka-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-index="${index}">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </div>
                    <div class="price">${sum.toLocaleString()} so‘m</div>
                    <button class="remove-btn" data-index="${index}">O‘chirish</button>
                </div>
            `;
            itemsContainer.appendChild(div);
        });

        totalEl.textContent = total.toLocaleString() + ' so‘m';

        document.querySelectorAll('.plus').forEach(btn => {
            btn.onclick = () => {
                const i = btn.dataset.index;
                cart[i].quantity++;
                localStorage.setItem('korzinka', JSON.stringify(cart));
                render();
                window.dispatchEvent(new Event('storage')); 
            };
        });

        document.querySelectorAll('.minus').forEach(btn => {
            btn.onclick = () => {
                const i = btn.dataset.index;
                if (cart[i].quantity > 1) {
                    cart[i].quantity--;
                    localStorage.setItem('korzinka', JSON.stringify(cart));
                    render();
                    window.dispatchEvent(new Event('storage'));
                }
            };
        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.onclick = () => {
                const i = btn.dataset.index;
                cart.splice(i, 1);
                localStorage.setItem('korzinka', JSON.stringify(cart));
                render();
                window.dispatchEvent(new Event('storage'));
            };
        });
    }

    render();

    document.querySelector('.buy-all-btn')?.addEventListener('click', () => {
        if (cart.length === 0) return alert('Korzinka bo‘sh!');

        let msg = "*YANGI BUYURTMA*%0A%0A";
        let total = 0;
        cart.forEach(item => {
            const sum = item.price * item.quantity;
            total += sum;
            msg += `• *${item.name}* × ${item.quantity}%0A  ${sum.toLocaleString()} so‘m%0A%0A`;
        });
        msg += `*Jami: ${total.toLocaleString()} so‘m*`;

        window.open(`https://t.me/tg://resolve?domain=your_username&text=${msg}`, '_blank');

        if (confirm('Buyurtma yuborildi! Korzinkani tozalaymi?')) {
            localStorage.removeItem('korzinka');
            render();
            window.dispatchEvent(new Event('storage'));
        }
    });
});