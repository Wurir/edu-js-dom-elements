console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navElement = document.querySelector('nav')


// without forEach

const ulElement = document.createElement('ul')

const liStartElement = document.createElement('li')
const startLinkElement = document.createElement('a')

const liGalleryElement = document.createElement('li')
const galleryLinkElement = document.createElement('a')

const liContactElement = document.createElement('li')
const contactLinkElement = document.createElement('a')

startLinkElement.setAttribute('href', '/')
startLinkElement.innerText = 'start'
liStartElement.appendChild(startLinkElement)

galleryLinkElement.setAttribute('href', '/gallery')
galleryLinkElement.innerText = 'galeria'
liGalleryElement.appendChild(galleryLinkElement)

contactLinkElement.setAttribute('href', '/kontakt')
contactLinkElement.innerText = 'kontakt'
liContactElement.appendChild(contactLinkElement)

ulElement.appendChild(liStartElement)
ulElement.appendChild(liGalleryElement)
ulElement.appendChild(liContactElement)
navElement.appendChild(ulElement)


// forEach

const newUlElement = document.createElement('ul')

menuItems.forEach(function(element){
    const liEl = document.createElement('li')
    const aEl = document.createElement('a')

    aEl.setAttribute('href', element['url'])
    aEl.innerText = element['text']
    
    liEl.appendChild(aEl)
    newUlElement.appendChild(liEl)
})

navElement.appendChild(newUlElement)