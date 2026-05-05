document.addEventListener('DOMContentLoaded', () => {
    const updateTotals = () => {
        let subtotal = 0;
        document.querySelectorAll('.cart-item-row').forEach(row => {
            const price = parseInt(row.dataset.unitPrice);
            let rowQty = 0;
            row.querySelectorAll('.qty-val').forEach(q => rowQty += parseInt(q.innerText));

            const rowTotal = price * rowQty;
            row.querySelector('.total-text').innerText = rowTotal.toLocaleString() + ' VNĐ';
            subtotal += rowTotal;
        });

        document.getElementById('subtotal').innerText = subtotal.toLocaleString() + ' VNĐ';
        // Giả sử giảm giá cố định 12k như ảnh
        document.getElementById('final-total').innerText = (subtotal - 12000).toLocaleString() + ' VNĐ';
    };

    document.querySelectorAll('.btn-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const valSpan = e.target.parentElement.querySelector('.qty-val');
            valSpan.innerText = parseInt(valSpan.innerText) + 1;
            updateTotals();
        });
    });

    document.querySelectorAll('.btn-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const valSpan = e.target.parentElement.querySelector('.qty-val');
            let current = parseInt(valSpan.innerText);
            if (current > 0) {
                valSpan.innerText = current - 1;
                updateTotals();
            }
        });
    });

    updateTotals();
});