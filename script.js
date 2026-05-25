document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 60; // Quanto menor o número, mais rápida é a animação

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Ativa a animação apenas quando o usuário rolar até a seção dos contadores
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target); // Executa apenas uma vez
            }
        });
    }, { threshold: 0.5 });

    const targetSection = document.querySelector('.counters-section');
    if(targetSection) {
        observer.observe(targetSection);
    }
});