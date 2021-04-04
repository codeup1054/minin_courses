// 2021-04-04 https://youtu.be/yz09oVHt3PY?t=2098

const  WIDTH  = 600
const HEIGHT =  200
const DPI_WIDTH = WIDTH*2
const DPI_HEIGHT = HEIGHT*2


function chart(canvas,data) {
    const ctx = canvas.getContext('2d')
    canvas.style.width = WIDTH  + 'px'
    canvas.style.height = HEIGHT  + 'px'
    canvas.width = DPI_WIDTH
    canvas.height = DPI_HEIGHT

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#ff0000'

    for (const[x,y] of data)
    {
        ctx.lineTo(x, DPI_HEIGHT -y)
    }
    ctx.stroke()
    ctx.closePath()

}

chart(document.getElementById('chart'),
    [
        [0,0],
        [200,100],
        [400,50],
        [600,300],
        [800,50],
        [1000,50],
    ]
)