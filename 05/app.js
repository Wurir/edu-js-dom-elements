console.log('DOM');

const curr = document.querySelector('.js-curr');

const currParent = curr.parentElement

// #1
const newButton = document.createElement('button')
newButton.classList.add('article__btn')
newButton.innerText = 'usuń z koszyka'
currParent.appendChild(newButton)

// #2

const siblingElements = currParent.children
const siblingsArray = [...siblingElements]

siblingsArray.forEach(function(element){
    if(element.getAttribute('class').includes('js-curr')) return 

    element.classList.add('siblings')
})

// #3

const nextArticleElement = currParent.nextElementSibling

nextArticleElement.setAttribute('title', 'nextElementSibling')


// #4 

const lastArticleElement = nextArticleElement.nextElementSibling

const newParagraphElement = document.createElement('p')
newParagraphElement.innerText = 'new paragraph'

const lastArticleButtonElement = lastArticleElement.querySelector('button')

lastArticleElement.insertBefore(newParagraphElement, lastArticleButtonElement)

// #5

const clonedArticleElement = nextArticleElement.cloneNode(true)
const sectionElement = currParent.parentElement

sectionElement.insertBefore(clonedArticleElement, currParent)
