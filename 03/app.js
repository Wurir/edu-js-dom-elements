console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const parentElement = document.querySelector('.parent-for-button')

const buttonElement = document.createElement('button')

for(const key in buttonSettings){
    if(key === 'attr'){
        for(const attr in buttonSettings[key]){
            buttonElement[attr] = buttonSettings[key][attr]
        } 
    }
    if(key === 'css'){
        for(const css in buttonSettings[key]){
            buttonElement.style[css] = buttonSettings[key][css]
        }
    }
    if(key === 'text') {
        buttonElement.innerText = buttonSettings[key]
    }
}

parentElement.appendChild(buttonElement)