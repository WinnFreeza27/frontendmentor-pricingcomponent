const pageViewEl = document.getElementById('pageviewtotal');
const slider = document.getElementById('slider');
const pricing = document.getElementById('pricing');
const toggleX = document.querySelector('.toggle-circle');
const toggleBtn = document.getElementById('toggleBtn')
let subs = false;

window.onload = function() {
    slider.value = 100;
};

toggleBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    toggleX.classList.toggle('translate-x-5');
    toggleBtn.firstElementChild.classList.toggle('bg-strong-cyan');
    rubahHarga();
})
slider.addEventListener('input', rubahHarga);

function rubahHarga() {
    toggleX.classList.contains('translate-x-5') ? subs = true : subs = false;

    let valueOfSlider = parseFloat(slider.value);
    pageViewEl.innerText = valueOfSlider + 'K PAGEVIEWS';
    let totalPricing = valueOfSlider/5;

    if (subs && !isNaN(valueOfSlider)) {
       pricingDiscount(totalPricing);
    } else {
       let nonDiscountedText = pricing.innerText = "$" + totalPricing.toFixed(1);
       updatePricing(nonDiscountedText); 
    }
}

function pricingDiscount (param) {
    let discounted = param * 0.75;
    let discountedText = "$" + discounted.toFixed(1);
    updatePricing(discountedText);
}

function updatePricing(text) {
    pricing.innerText = text;
}