const tabTitle = document.querySelectorAll(".tabs-title");
const tabs = document.querySelector('.tabs');
const tabContent = document.querySelectorAll('.text');


const addClass = (array, css, element) => {
    array.forEach((nodeItem) => {
        if(nodeItem.classList.contains(css)) {
            nodeItem.classList.remove(css)
        }
    })
    element.classList.add(css);
}

const dataTab = (event) => {
    const id = event.target.getAttribute('data-tab');
    const activeElement = document.getElementById(id)
    addClass(tabTitle,  'active', event.target)
    addClass(tabContent, 'active', activeElement)
}

tabs.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'LI') {
        dataTab(event)
    }

})