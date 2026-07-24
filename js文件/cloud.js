function changeQty(delta) {
    var el = document.getElementById('qtyNum');
    var val = parseInt(el.textContent) + delta;
    if (val < 1) val = 1;
    el.textContent = val;
}

function openModal() {
    document.getElementById('mo').style.display = 'flex';
}

function closeModal() {
    document.getElementById('mo').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var cartBtn = document.querySelector('.jr');
    var buyBtn = document.querySelector('.ljgm');
    var overlay = document.querySelector('.modal-overlay');

    cartBtn.addEventListener('click', openModal);
    buyBtn.addEventListener('click', openModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    var specs = document.querySelectorAll('.kg1, .kg2, .kg3, .kg5');
    for (var i = 0; i < specs.length; i++) {
        specs[i].addEventListener('click', function () {
            for (var j = 0; j < specs.length; j++) {
                specs[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
});
