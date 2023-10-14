
document.getElementsByTagName('img')[0].addEventListener('mousemove', (e) => {
    document.getElementById('img').style.transition = '.1s'

    let x = (e.offsetX) / 10
    let w = (e.target.clientWidth) / 10

    let y = (e.offsetY) / 10
    let h = (e.target.clientHeight) / 10

    // document.getElementById('num').innerText='layer x :' + x + "and layer y is : " + y

    document.getElementById('img').style.transform = 'perspective(800px) rotateY(' + (x - (w / 2)) + 'deg) rotateX(' + (y - (h / 2)) + 'deg)'
})
document.getElementsByTagName('img')[0].addEventListener('mouseleave', (e) => {
    document.getElementById('img').style.transition = '.5s'
    document.getElementById('img').style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
})
