export default class Configurator {
 usp() {
        // add order options
        const orderOptions = document.createElement('div');
        const markup = `
            <ul class="orderOptions">
                <li class="option" data-omni-type="microsite" ga-ca="microsite"ga-ac="tvPdp-test" ga-la="dausp:pricepromise" data-omni="dausp:pricepromise">
                    <div class="option-icon">
                        <img src="https://images.samsung.com/is/image/samsung/assets/uk/smartphonepcd/Price_faq.png"/>
                    </div>
                    <div class="option-content">
                      <p class="label">Price Promise</p>
                      <p class="text">Find it cheaper and we'll return the difference**</p>
                    </div>
                </li>
                <li class="option" data-omni-type="microsite" ga-ca="microsite"ga-ac="tvPdp-test" ga-la="dausp:finance" data-omni="dausp:finance">
                    <div class="option-icon">
                        <img src="https://images.samsung.com/is/image/samsung/assets/uk/smartphonepcd/Finance_faq.png"/>
                    </div>
                    <div class="option-content">
                      <p class="label">Flexible Finance</p>
                      <p class="text">Spread the cost to suit you.</p>
                    </div>
                </li>
                <li class="option" data-omni-type="microsite" ga-ca="microsite"ga-ac="tvPdp-test" ga-la="dausp:delivery" data-omni="dausp:delivery">
                    <div class="option-icon">
                        <img src="https://images.samsung.com/is/image/samsung/assets/uk/smartphonepcd/Delivery_faq.png"/>
                    </div>
                    <div class="option-content">
                        <p class="label">Free Scheduled Delivery</p>
                        <p class="text">Next day or choose your delivery day</p>
                    </div>
                </li>
            </ul>
        `;
        orderOptions.innerHTML = markup
        const gallery = document.querySelector('.pd-header-gallery');
        gallery.append(orderOptions);

        const onlineShopContainer = document.createElement('div')
        onlineShopContainer.classList.add('online-shop-container')
        onlineShopContainer.innerHTML = `<p> Online shop FAQs > </p>`
        orderOptions.append(onlineShopContainer)

        document.querySelector(".online-shop-container > p").addEventListener('click', () => {
        document.querySelector(".product-support__banner").scrollIntoView({
            block: 'start',
            });
        })
    }
}