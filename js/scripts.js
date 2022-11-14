let itemCardsEl = document.querySelectorAll('.item-card');
let delayTime = 0; 

itemCardsEl.forEach((el) => {
    delayTime = delayTime + .25;
    el.style.animationDelay = `${delayTime}s`;
});