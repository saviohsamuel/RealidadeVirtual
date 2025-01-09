document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container__cards');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    const scrollAmount = 300;    
    leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });    
    rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });    
    const updateButtons = () => {
        leftBtn.style.display = container.scrollLeft > 0 ? 'block' : 'none';
        rightBtn.style.display = container.scrollLeft < container.scrollWidth - container.clientWidth ? 'block' : 'none';
    };
    container.addEventListener('scroll', updateButtons);
    updateButtons();
});
