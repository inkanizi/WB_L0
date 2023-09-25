console.log("load");

// Аккордионы
const productListAccordion = () => {
  const btn = document.querySelector("#list_btn");
  const list = document.querySelector(".cart-info_list");

  btn.addEventListener("click", function () {
    this.style.transform = "rotate(90deg)";
    if (list.style.display !== "none") {
      list.style.display = "none";
      this.style.transform = "rotate(180deg)";
    } else {
      list.style.display = "flex";
      this.style.transform = "rotate(-360deg)";
    }
  });
};
const unavailableListAccordion = () => {
  const btn = document.querySelector("#unavailable-list_btn");
  const list = document.querySelector(".cart-unavailable_list");

  btn.addEventListener("click", function () {
    if (list.style.display !== "none") {
      list.style.display = "none";
      this.style.transform = "rotate(180deg)";
    } else {
      list.style.display = "flex";
      this.style.transform = "rotate(-360deg)";
    }
  });
};

// Модалки

const openModal = (modal) => {
  modal.classList.toggle("modal-show");
};

function handleModalPayment() {
  const modal = document.querySelector(".modal-payment");
  const btnClose = document.querySelector("#modalPaymentBtnClose");

  this.addEventListener("click", openModal(modal));
  if (btnClose) {
    btnClose.addEventListener("click", openModal(modal));
  }
}

function handleModalDelivery() {
  const modal = document.querySelector(".modal-delivery");
  const btnClose = document.querySelector("#modalDeliveryBtnClose");

  this.addEventListener("click", openModal(modal));
  if (btnClose) {
    btnClose.addEventListener("click", openModal(modal));
  }
}

// Кнопка оплаты
const paymentCheckbox = document.querySelector("#payment-check");
const mobilePaymentCheckbox = document.querySelector("#mobile-payment-check");
const paymentSubtext = document.querySelector("#payment-check_subtext");
const mobilePaymentSubtext = document.querySelector("#mobile-payment-check_subtext");
// Не самое лучшее исполнение
const paymentBtnText = document.querySelector("#btn-payment_text");
const mobilePaymentBtnText = document.querySelector("#mobile-btn-payment_text");
const paymentTotalSum = document.querySelector("#mobile-total-sum");
const mobilePaymentTotalSum = document.querySelector("#mobile-total-sum");

paymentCheckbox.addEventListener("change", () => {
  if (paymentCheckbox.checked) {
    paymentSubtext.style.display = "none";
    paymentBtnText.innerHTML = `Оплатить ${paymentTotalSum.innerHTML} сом`;
  } else {
    paymentSubtext.style.display = "block";
    paymentBtnText.innerHTML = `Заказать`;
  }
});

mobilePaymentCheckbox.addEventListener("change", () => {
  if (mobilePaymentCheckbox.checked) {
    mobilePaymentSubtext.style.display = "none";
    mobilePaymentBtnText.innerHTML = `Оплатить ${mobilePaymentTotalSum.innerHTML} сом`;
  } else {
    mobilePaymentSubtext.style.display = "block";
    mobilePaymentBtnText.innerHTML = `Заказать`;
  }
});

// Рендер в корзине

cartItems = [
  {
    id: 1,
    name: "Футболка UZcotton мужская",
    color: "белый",
    size: "56",
    storage: "Коледино WB",
    provider: "ООО Вайлдберриз",
    price: 1051,
    img: "./assets/images/product1.png",
    max: 3,
    count: 1,
    discount: 0.55,
    isChecked: true,
    address:
      "42181, Московская область, г.о. Подольск, д. Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1",
    ogrn: 5167746237148,
  },
  {
    id: 2,
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "прозрачный",
    storage: "Коледино WB",
    provider: "ООО Мегапрофстиль",
    price: 10500.235,
    img: "./assets/images/product2.png",
    max: 1000,
    count: 200,
    discount: 0.8,
    isChecked: true,
    address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    ogrn: 5167746237148,
  },

  {
    id: 3,
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    storage: "Коледино WB",
    provider: "ООО Вайлдберриз",
    price: 475,
    img: "./assets/images/product3.png",
    max: 4,
    count: 2,
    discount: 0.55,
    isChecked: true,
    address:
      "42181, Московская область, г.о. Подольск, д. Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1",
    ogrn: 5167746237148,
  },
];

function renderCart(items) {
  const cartList = document.querySelector(".cart-info_list");
  cartList.innerHTML = "";
  items.forEach((item, index) => {
    cartList.innerHTML += `
       <div class="cart-info_list--item">
                    <div class="cart-info_list--item-info">
                      <div class="cart-info_list--item-info_wrapper">
                        <div class="row-block">
                          <div class="custom-checkbox_container">
                            <input
                              type="checkbox"
                              class="custom-checkbox cart-custom-checkbox"
                              id="product-${item.id}"
                              name="product${item.id}"
                              onchange="handleCheckbox(${item.id})"
                              ${item.isChecked ? "checked" : ""}
                            />
                            <label for="product-${item.id}"></label>
                          </div>
                          <img
                            class="cart-info_list--item-info_wrapper_img" 
                            src="${item.img}"
                            alt=""
                          >
                            <div class="mobile-cart-info">
                              <div class="mobile-cart-info-container">
                                <div class="row-block">
                                  <div class="mobile-custom-checkbox_container">
                                    <input
                                      type="checkbox"
                                      class="custom-checkbox"
                                      id="mobile-product-${item.id}"
                                      name="product${item.id}"
                                      onchange="handleMobileCheckbox(${item.id})"
                                      checked="${item.isChecked}"
                                    />
                                    <label for="mobile-product-${item.id}"></label>
                                  </div>
                                  ${item.size ? `<span>${item.size}</span>` : ``}
                                </div>
                              </div>
                          </div>  
                          </img>
                        </div>

                        <div class="cart-info_list--item-info_text">
                          <p class="typo-h4 mobile-list--item_price"><span >${Math.round(
                            item.price
                          )} сом</span><span class="typo-caption text-inderline_dashed">${Math.round(
      item.price
    )} сом</span></p>
                          <p class="typo-body mobile-cart_item-title">${item.name}</p>
                          ${
                            item.size || item.color
                              ? `<p class="typo-caption">
                            ${item.color ? `<span>Цвет: ${item.color}</span>` : ``}
                            ${
                              item.size
                                ? `<span class="mobile-none">Размер: ${item.size}</span>`
                                : ``
                            }
                          </p>`
                              : ""
                          }
                          <div class="col-block typo-caption">
                            <p class="text-color_gray">${item.storage}</p>
                            <div class="row-block cart-info_list--item-provider">
                              <p class="text-color_gray">${item.provider}</p>
                              <div class="tooltip">
                              <img
                                src="./assets/icons/info.svg"
                                alt=""
                                
                              />
                               <div class="tooltiptext item-text-tooltip">
                                  <span class="typo-h5">${item.provider}</span>
                                  <span class="typo-caption"> ОГРН: ${item.ogrn}</span>
                                  <span class="typo-caption">${item.address}</span>
                               </div>
                              </div>  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cart-info_list--item-func">
                      <div class="cart-info_list--item-btns">
                        <div class="counter">
                          <button class="counter-minus" id="counter-minus${
                            item.id
                          }" onclick="handleCounter(${item.id}, -1)">−</button>
                          <input type="text" onchange="counterChangeValue(${item.id})" value="${
      item.count
    }" id="counter-value-${item.id}" class="counter-value"/>
                          <button class="counter-plus" id="counter-plus${
                            item.id
                          }" onclick="handleCounter(${item.id}, +1)">+</button>
                        </div>
                        ${
                          item.max - item.count <= 5
                            ? `<span class="typo-caption text-color_orange">Осталось ${
                                item.max - item.count
                              } шт.</span>`
                            : ""
                        }
                        <div class="cart-info_list--item-btns_icons">
                          <svg
                            class="svg-heart"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.03399 2.05857C2.26592 2.75224 1.76687 3.83284 1.99496 5.42928C2.22335 7.02783 3.26497 8.68522 4.80439 10.3478C6.25868 11.9184 8.10965 13.4437 9.99999 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.7351 8.68521 17.7767 7.02783 18.005 5.4293C18.2331 3.83285 17.734 2.75224 16.9659 2.05856C16.1767 1.34572 15.055 1 14 1C12.132 1 11.0924 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1583 3.04882 9.84169 3.04882 9.64643 2.85355C9.59644 2.80356 9.54185 2.7466 9.48227 2.68443C8.9076 2.08479 7.868 1 5.99999 1C4.94498 1 3.82328 1.34573 3.03399 2.05857ZM2.36374 1.31643C3.37372 0.404274 4.75205 0 5.99999 0C8.07126 0 9.34542 1.11257 9.99999 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2669 3.66715 18.995 5.5707C18.7233 7.47217 17.515 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87776 16.0333 9.69999 15.9C7.69356 14.3952 5.66446 12.7485 4.07063 11.0272C2.48506 9.31478 1.27668 7.47217 1.00501 5.57072C0.733043 3.66716 1.33253 2.24776 2.36374 1.31643Z"
                              fill="black"
                            />
                          </svg>
                          <svg
                            onclick="deleteCartItem(${index})"
                            class="svg-bin"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                              fill="black"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                              fill="black"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="cart-info_list--item-price">
                        <span class="typo-h3 product-total_sum">${Math.round(
                          item.count * (item.price - item.price * item.discount)
                        )} <span class="typo-h4">сом</span></span>
                        <s class="typo-caption text-color_gray text-inderline_dashed tooltip">${Math.round(
                          item.price * item.count
                        )} сом <span class="tooltiptext">
                        <div class="item-price-tooltip typo-caption">
                          <p><span class="text-color_gray">Скидка 55%</span><span>−300 сом</span></p>
                          <p><span class="text-color_gray">Скидка покупателя 10%</span><span>−30 сом</span></p>
                        </div></span></s>
                        
                      </div>
                    </div>
                  </div>
    `;
  });
  renderAside();
}

//Чекбоксы
const handleCheckbox = (id) => {
  const box = document.querySelector(`#product-${id}`);
  if (box.checked) {
    cartItems[id - 1].isChecked = !cartItems[id - 1].isChecked;
  } else {
    cartItems[id - 1].isChecked = !cartItems[id - 1].isChecked;
  }
  renderCart(cartItems);
};

const handleMobileCheckbox = (id) => {
  const box = document.querySelector(`#mobile-product-${id}`);

  if (!box.checked) {
    cartItems[id - 1].isChecked = !cartItems[id - 1].isChecked;
  } else {
    cartItems[id - 1].isChecked = !cartItems[id - 1].isChecked;
  }
  renderCart(cartItems);
};

// Удаление из корзины

function deleteCartItem(index) {
  cartItems.splice(index, 1);
  renderCart(cartItems);
  renderUnavailable();
}

// Рендер Aside

function renderAside() {
  const totalSumValue = document.querySelector("#total-sum");
  const sumWithoutSaleValue = document.querySelector("#sum-without-sale");
  const totalProductCountValue = document.querySelector("#total-product-count");
  const totalSaleValue = document.querySelector("#mobile-total-sale");
  const mobileTotalSumValue = document.querySelector("#mobile-total-sum");
  const mobileSumWithoutSaleValue = document.querySelector("#mobile-sum-without-sale");
  const mobileTotalProductCountValue = document.querySelector("#mobile-total-product-count");
  const mobileTotalSaleValue = document.querySelector("#mobile-total-sale");

  let sumWithoutSale = 0;
  let totalProductCount = 0;
  let totalSale = 0;
  cartItems.forEach((item) => {
    if (item.isChecked) {
      totalProductCount += item.count;
      sumWithoutSale += item.count * item.price;
      totalSale += item.count * item.price - Math.round(item.count * item.price * item.discount);
    }
  });

  totalSumValue.innerHTML = sumWithoutSale - totalSale;
  sumWithoutSaleValue.innerHTML = `${Math.round(sumWithoutSale)} сом`;
  totalProductCountValue.innerHTML = `${totalProductCount} товаров`;
  totalSaleValue.innerHTML = `-${Math.round(totalSale)} сом`;

  mobileTotalSumValue.innerHTML = sumWithoutSale - totalSale;
  mobileSumWithoutSaleValue.innerHTML = `${Math.round(sumWithoutSale)} сом`;
  mobileTotalProductCountValue.innerHTML = `${totalProductCount} товаров`;
  mobileTotalSaleValue.innerHTML = `-${Math.round(totalSale)} сом`;
}

// Рендер недоступных товаров

function renderUnavailable() {
  const list = document.querySelector(".cart-unavailable_list");
  list.innerHTML = "";
  cartItems.forEach((item, index) => {
    list.innerHTML += `
    <div class="cart-unavailable_list-item">
                    <div class="cart-unavailable_list-item_info">
                      <img
                        src="${item.img}"
                        width="72"
                        height="96"
                        alt=""
                        class="cart-unavailable_list-item_info_img"
                      />
                      <div class="cart-unavailable_list-item_text text-color_gray">
                        <p class="typo-body mobile-unavailable_item-title">${item.name}</p>
                        ${
                          item.size || item.color
                            ? `<p class="typo-caption">
                            ${item.color ? `<span>Цвет: ${item.color}</span>` : ``}
                            ${item.size ? `<span>Размер: ${item.size}</span>` : ``}
                          </p>`
                            : ""
                        }
                      </div>
                    </div>
                    <div class="cart-unavailable_list-item_btns">
                      <svg
                        class="svg-heart"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.03399 2.05857C2.26592 2.75224 1.76687 3.83284 1.99496 5.42928C2.22335 7.02783 3.26497 8.68522 4.80439 10.3478C6.25868 11.9184 8.10965 13.4437 9.99999 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.7351 8.68521 17.7767 7.02783 18.005 5.4293C18.2331 3.83285 17.734 2.75224 16.9659 2.05856C16.1767 1.34572 15.055 1 14 1C12.132 1 11.0924 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1583 3.04882 9.84169 3.04882 9.64643 2.85355C9.59644 2.80356 9.54185 2.7466 9.48227 2.68443C8.9076 2.08479 7.868 1 5.99999 1C4.94498 1 3.82328 1.34573 3.03399 2.05857ZM2.36374 1.31643C3.37372 0.404274 4.75205 0 5.99999 0C8.07126 0 9.34542 1.11257 9.99999 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2669 3.66715 18.995 5.5707C18.7233 7.47217 17.515 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87776 16.0333 9.69999 15.9C7.69356 14.3952 5.66446 12.7485 4.07063 11.0272C2.48506 9.31478 1.27668 7.47217 1.00501 5.57072C0.733043 3.66716 1.33253 2.24776 2.36374 1.31643Z"
                          fill="black"
                        />
                      </svg>
                      <svg
                        onclick="deleteCartItem(${index})"
                        class="svg-bin"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
    `;
  });
}

// Запуск
unavailableListAccordion();
productListAccordion();
renderCart(cartItems);
renderUnavailable();

// Изменение ценика от длина

const productTotalSum = document.querySelectorAll(".product-total_sum");

productTotalSum.forEach((item) => {
  const priceLength = item.innerHTML.split("<")[0].slice("").length;
  if (priceLength >= 5) {
    item.style.fontSize = "16px";
    item.style.lineHeight = "24px";
    item.style.letterSpacing = "normal";
  }
});

// Счетчик

function handleCounter(id, diff) {
  let item = cartItems[id - 1];

  if (diff === -1) {
    item.count--;
  } else if (diff === +1) {
    item.count++;
  }
  renderCart(cartItems);
  checkCounterLimit(id);
}

const checkCounterLimit = (id) => {
  const btnPlus = document.querySelector(`#counter-plus${id}`);
  const btnMinus = document.querySelector(`#counter-minus${id}`);
  if (cartItems[id - 1].count >= cartItems[id - 1].max) {
    btnPlus.classList.toggle("counter-btn_disabled");
    btnPlus.disabled = true;
  } else if (cartItems[id - 1].count <= 1) {
    btnMinus.classList.toggle("counter-btn_disabled");
    btnMinus.disabled = true;
  }
};

function counterChangeValue(id) {
  const input = document.querySelector(`#counter-value-${id}`);
  cartItems[id - 1].count = input.value;
  renderCart(cartItems);
  checkCounterLimit(id);
}

// Инпуты
const inputs = document.querySelectorAll(".custom-textfield-input");

inputs.forEach((input) => {
  const id = input.id.split("-")[2];
  const inn = document.querySelector(`#textfield-error-inn`);
  inn.innerHTML = "Для таможенного оформления";
  inn.style.opacity = "1";
  const error = document.querySelector(`#textfield-error-${id}`);
  input.addEventListener("blur", (e) => {
    showLabel(id, e);
  });
  input.addEventListener("focus", (e) => {
    showLabel(id, e);
  });
});

function showLabel(id, event) {
  const label = document.querySelector(`#textfield-label-${id}`);

  if (event.target.value === "") label.classList.toggle("show-label");

  validationInput(id, event);
}

const validationInput = (i, e) => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const TELE_REGEXP = /^\+\d \d{3} \d{3} \d{2} \d{2}$/;
  const INN_REGEXP = /^\d{14}$/;
  const error = document.querySelector(`#textfield-error-${i}`);
  const input = document.querySelector(`#textfield-input-${i}`);
  const label = document.querySelector(`#textfield-label-${i}`);

  switch (i) {
    case 0:
      break;
    case "email":
      if (EMAIL_REGEXP.test(e.target.value)) {
        error.style.opacity = "0";
        input.style.color = "black";
        input.style.borderColor = "#9797af";
      } else if (e.target.value !== "") {
        error.style.opacity = "1";
        error.style.color = "red";
        input.style.color = "red";
        input.style.borderColor = "red";
        error.innerHTML = "Проверьте адрес электронной почты";
      }
      break;
    case "tele":
      if (TELE_REGEXP.test(e.target.value)) {
        error.style.opacity = "0";
        input.style.color = "black";
        input.style.borderColor = "#9797af";
      } else if (e.target.value !== "") {
        error.style.opacity = "1";
        error.style.color = "red";
        input.style.color = "red";
        input.style.borderColor = "red";
        error.innerHTML = "Формат: +9 999 999 99 99";
      }
      break;
    case "inn":
      if (INN_REGEXP.test(e.target.value)) {
        error.style.opacity = "0";
        input.style.color = "black";
        input.style.borderColor = "#9797af";
      } else if (e.target.value !== "") {
        error.style.opacity = "1";
        error.style.color = "red";
        input.style.color = "red";
        input.style.borderColor = "red";
        error.innerHTML = "Проверьте ИНН";
      }
      break;

    default:
      break;
  }
};

// Форматирование телефона
const phoneInput = document.getElementById("textfield-input-tele");
phoneInput.addEventListener("input", function (e) {
  let inputValue = phoneInput.value.replace(/[^\d]/g, "");
  if (inputValue.length > 0 && inputValue[0] !== "+") {
    inputValue = "+" + inputValue;
  }
  if (inputValue.length > 30) {
    inputValue = inputValue.slice(0, 30);
  }
  let formattedValue = "";
  for (let i = 0; i < inputValue.length; i++) {
    if (i === 2 || i === 5 || i === 8 || (i === 10 && i <= 12)) {
      formattedValue += " ";
    }
    formattedValue += inputValue[i];
  }
  phoneInput.value = formattedValue;
});

//Форматирование ИНН
const innInput = document.getElementById("textfield-input-inn");
innInput.addEventListener("input", function () {
  let inputValue = innInput.value.replace(/[^\d]/g, "");

  if (inputValue.length > 14) {
    inputValue = inputValue.slice(0, 14);
  }

  innInput.value = inputValue;
});

const handleSubmitForm = () => {
  inputs.forEach((input) => {
    let id = input.id.split("-")[2];
    const error = document.querySelector(`#textfield-error-${id}`);
    switch (id) {
      case "name":
        error.innerHTML = "Укажите имя";
        break;
      case "surname":
        error.innerHTML = "Введите фамилию";
        break;
      case "email":
        error.innerHTML = "Укажите электронную почту";
        break;
      case "tele":
        error.innerHTML = "Укажите номер телефона";
        break;
      case "inn":
        error.innerHTML = "Укажите ИНН";
        break;
    }
    if (input.value != "") {
      error.style.opacity = "0";
      input.style.color = "black";
      input.style.borderColor = "#9797af";
    } else {
      error.style.opacity = "1";
      error.style.color = "red";
      input.style.color = "red";
      input.style.borderColor = "red";
    }
  });
};
