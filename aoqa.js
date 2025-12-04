    function sendMessage(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const status = document.getElementById('status');

      const botToken = '7569905061:AAH0fX9V6i8xY8i5V8v8v8v8v8v8v8v8v8v';
      const chatId = '-1002345678901';
      const text = `YANGI XABAR!\n\nIsm: ${name}\nTelefon: ${phone}\nXabar: ${message}`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          status.innerHTML = '<span style="color:var(--primary);">Habar muvaffaqiyatli yuborildi!</span>';
          document.querySelector('.contact-form').reset();
        } else {
          status.innerHTML = '<span style="color:#ff4444;">Xatolik yuz berdi. Iltimos, qayta urining.</span>';
        }
      })
      .catch(() => {
        status.innerHTML = '<span style="color:#ff4444;">Internet aloqasi yo‘q.</span>';
      });
    }