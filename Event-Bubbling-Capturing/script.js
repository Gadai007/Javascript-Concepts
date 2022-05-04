document.querySelector('#grandparent').addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('GrandParent clicked !')
}, true)

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent clicked !')
}, true)

document.querySelector('#child').addEventListener('click', () => {
    console.log('Child clicked !')
}, true)


//if true than event Capturing and if false event bubbling
//it is a costly process so we use e.stopPropagation() for it