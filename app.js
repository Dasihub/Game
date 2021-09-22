const board = document.querySelector('#board')
const squares_num = 480

const color = ['red', 'lime', 'aque', 'yellow', 'rgb(255, 85, 7)', 'purple']

for (let i = 0; i < squares_num; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

const setColor = (element) => {
const color = getColor()
    element.style.backgroundColor = color
} 

const removeColor = (element) => {
    element.style.backgroundColor = 'rgb(51, 47, 47)'
}

const getColor = () => {
    const index = Math.floor(Math.random() * 5)
    return color[index]
}