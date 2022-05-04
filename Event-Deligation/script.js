document.querySelector('.products').addEventListener('click', (event) => {

    if(event.target.tagName === 'LI'){
        console.log(event.target.className)
    }
})