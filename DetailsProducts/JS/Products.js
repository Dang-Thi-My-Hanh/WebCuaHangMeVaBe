document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy các phần tử cần thiết
    const sizeButtons = document.querySelectorAll('.size-btns button');
    const priceDisplay = document.querySelector('.price-main');

    // 2. Lặp qua từng nút size để gán sự kiện click
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Xóa class 'active' của nút cũ
            document.querySelector('.size-btns button.active').classList.remove('active');

            // Thêm class 'active' vào nút vừa click
            this.classList.add('active');

            // 3. Lấy giá tiền từ thuộc tính data-price và cập nhật lên màn hình
            const newPrice = this.getAttribute('data-price');
            priceDisplay.textContent = newPrice;
        });
    });
});