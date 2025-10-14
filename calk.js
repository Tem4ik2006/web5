document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const quantityError = document.getElementById('quantity-error');

    // Регулярное выражение для проверки ввода (только цифры)
    const quantityRegex = /^\d+$/;

    function validateQuantity() {
        const value = quantityInput.value.trim();
        
        if (value === '') {
            quantityInput.classList.remove('is-invalid');
            quantityError.style.display = 'none';
            return false;
        }
        
        if (!quantityRegex.test(value)) {
            quantityInput.classList.add('is-invalid');
            quantityError.style.display = 'block';
            return false;
        }
        
        quantityInput.classList.remove('is-invalid');
        quantityError.style.display = 'none';
        return true;
    }

    function calculateTotal() {
        if (!validateQuantity()) {
            resultDiv.classList.add('d-none');
            return;
        }

        const quantity = parseInt(quantityInput.value);
        const price = parseInt(productSelect.value);
        const total = quantity * price;

        resultDiv.textContent = `Стоимость заказа: ${total.toLocaleString('ru-RU')} ₽`;
        resultDiv.classList.remove('d-none');
    }

    // Обработчики событий
    quantityInput.addEventListener('input', validateQuantity);
    calculateBtn.addEventListener('click', calculateTotal);

    // Инициализация калькулятора
    console.log('Калькулятор стоимости заказа инициализирован');
});