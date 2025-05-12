console.log('DOM');

const liElement = document.querySelector('.comments__item.comments__item--newest')
const spanDataElements = liElement.querySelectorAll('span[data-info]')
console.log(spanDataElements.length);
