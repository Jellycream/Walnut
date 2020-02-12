// Colour picker
let picker = p => {

    let width = 140
    let height = 140

    p.setup = () => {
        let cnv = p.createCanvas(width, height);
        cnv.parent('picker');

        p.background(255)

        p.loadPixels();

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let index = (x + y * width) * 4

                let brightness = (height - y) / height
                let saturation = x / width * 255

                p.pixels[index] = 255 * brightness
                p.pixels[index + 1] = saturation * brightness
                p.pixels[index + 2] = saturation * brightness
            }
        }

        p.updatePixels();
    }
}   

let pickerP5 = new p5(picker)

//Hue bar

// let hue = p => {
//     p.setup = () => {
//         return
//     }
// }