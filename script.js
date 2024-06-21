//Store referenace to canvas from html
const canvas = document.getElementById('myCanvas')

//Store refeerence to 2d rendering context, the tool used to paint on canvas
const ctx = canvas.getContex('2d')


//Main raytraceing method
const mainMethod = () => {
    let origin = {
        x: 0,
        y: 0,
        z: 0
    }
    for(let x = -canvas.width /2; x < canvas.width / 2; x++){
        for(let y = -canvas.height /2; x < canvas.height / 2; x++){
            D = CanavasToViewport(x,y)
            color = TraceRay(origin, D, 1, Infinity)
            canvas.PutPixel(x,y,color)
        }
    }
}

