// Получаем все элементы с классом 'service-card__pag-item'
const pagItems = document.querySelectorAll('.service-card__pag-item');

// Функция для обработки клика по элементу
const handleClick = (event) => {
    // Удаляем класс 'active' у всех элементов
    pagItems.forEach(item => item.classList.remove('active'));
    // Добавляем класс 'active' к текущему элементу
    event.target.classList.add('active');
};

// Назначаем обработчик клика для каждого элемента
pagItems.forEach(item => item.addEventListener('click', handleClick));