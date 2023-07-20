document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const cards = document.querySelectorAll('.col');

    let start = 3;
    let show = 3;
    let count = cards.length;
    if(count == 1){
        btn.classList.add('none');
    }
    
    function noneCards() {
        cards.forEach(function(card, index) {
            if (index >= start) {
                card.classList.add('none');
            } else {
                card.classList.remove('none');
            }
        });
    }
    noneCards()
    btn.addEventListener('click', function() {
        let load = this.getAttribute('data-load');
        let more = this.getAttribute('data-more');
        start = (start + show <= count) ? start + show : count;
        $(this).text(load);
        setTimeout(() => {
            noneCards();
            if (start == count) {
                btn.style.display = 'none';
            }
            $(this).text(more);
        }, 1000);

    });
})