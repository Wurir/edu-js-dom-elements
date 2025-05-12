console.log('DOM');

const linkElements = document.querySelectorAll('a[data-url]')

linkElements.forEach(function(element){
    const data = element.getAttribute('data-url')
    element.setAttribute('href', data)
})