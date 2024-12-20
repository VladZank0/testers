function animateNumber(element, start, end, duration) {
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercentage = Math.min(progress / duration, 1);
        const currentNumber = Math.floor(progressPercentage * range + start);

        // Заменяем число в строке
        element.textContent = element.textContent.replace(/\d+/, currentNumber);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            // Убедиться, что конечное значение установлено
            element.textContent = element.textContent.replace(/\d+/, end);
        }
    }

    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter__number');
    const options = {
        root: null, // Относительно viewport
        rootMargin: '0px',
        threshold: 0.5 // Половина элемента должна быть видима
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const startMatch = text.match(/\d+/);
                if (startMatch) {
                    const start = parseInt(startMatch[0], 10)/2;
                    const end = start*2; // Задаем конечное значение как удвоенное начальное для примера
                    const duration = 3000; // Задаем длительность анимации

                    animateNumber(entry.target, start, end, duration);
                    observer.unobserve(entry.target); // Отключаем наблюдение после анимации
                }
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
