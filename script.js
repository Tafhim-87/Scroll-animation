const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight - 100;

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
