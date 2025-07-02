let clickOnSubmitOrder = async (event) => {
    if(styleOfWall) styleOfWall.remove();

    if(!document.getElementById('form_container_order').checkValidity()) return;

    const formElement = document.getElementById('form_container_order');
    const formData = new FormData(formElement);

    let formObject = {};

    // Build the formObject and extract the File instance
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const product_id = document.querySelector('.product_img').getAttribute('data-product-id');

    formObject.product_id = product_id;

    let stringifiedFormObject = JSON.stringify(formObject);

    console.log("This is the ordering form data", formObject);

    // Now send it
    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: stringifiedFormObject
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}









// Replace '.your-element-class' with your element's selector
function removeOnMobile() {
  if (window.innerWidth <= 600) {
    const el = document.querySelector('#third_row');
    if (el) el.remove();

    // Set flex to 0.45 for #first_row and #second_row in JS
    const firstRow = document.getElementById('first_row');
    const secondRow = document.getElementById('second_row');
    if (firstRow) {
    firstRow.style.flex = '0.45';
    firstRow.style.gap = '25px';
  }
  if (secondRow) {
    secondRow.style.flex = '0.45';
    secondRow.style.gap = '25px';
  }


    // Set gap for #products_container in JS
    const productsContainer = document.getElementById('products_container');
    if (productsContainer) {
    //productsContainer.style.gap = '0px';
    productsContainer.paddingLeft = '0px';
  }
  }
}

// Run on load and on resize
window.addEventListener('resize', removeOnMobile);
window.addEventListener('DOMContentLoaded', removeOnMobile);