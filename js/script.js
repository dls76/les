
const accordionList = document.querySelectorAll('.accordion-list dt')

function activeAccordion() {
    console.log(this)
}

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})