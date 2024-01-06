
const accordionList = document.querySelectorAll('.accordion-list dt')

function activeAccordion() {
    console.log(this)
}

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})


const dias = [...document.querySelector('.titulo-dia')]


dias.forEach((e)=>{
    e.addEventListener('click', showTitle)
}

function showTitle(){
    alert(this.title)
}










