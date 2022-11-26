const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}
var count=1;

const btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 99)}%`;
    btn.style.top = `${random(0, 99)}%`;
});
