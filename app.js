var button = document.querySelector('.btn-button')
var box0 = document.querySelector('.box0')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')

var colorName0 = document.querySelector('.Color0')
var colorName1 = document.querySelector('.Color1')
var colorName2 = document.querySelector('.Color2')

button.addEventListener('click', function(){
    setColor()
})

function generateRandomColor(){
    let letters ="01234567890ABCDEF";
    let color = "#";
    for(let i=0; i <6;i++){
        color += letters[Math.floor(Math.random() * 16 )];
    }
   
    return color;
}

function setColor() {
    const color = generateRandomColor();
    colorName0.innerHTML= color
    box0.style.background = color;
    const color1 = generateRandomColor();
    box1.style.background = color1;
    colorName1.innerHTML= color1

    colorName2.innerHTML= color +" , "+ color1;

    box2.style.background = `linear-gradient(${color},${color1})`;
    box3.style.background = `linear-gradient(to top,${color},${color1})`;
    box4.style.background = `linear-gradient(to bottom, ${color},${color1})`;
    box5.style.background = `linear-gradient(to left, ${color},${color1})`;
    box6.style.background = `linear-gradient(to right ,${color},${color1})`;
    

}
