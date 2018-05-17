/* globals Display images */
/* exported App productImages */
'use strict';

const appTemplate = document.getElementById('app-template').content;

class App {
    constructor() {
        this.list = images;
        this.lastDisplay = [];
    }

    randomize(max) {
        const productImages = [];

        for(let i = 0; i < 3; i++){
            const index = Math.floor(Math.random() * max);

            if(productImages.includes(this.list[index]) || this.lastDisplay.includes(this.list[index])) {
                i--;
                continue;
            }

            productImages[i] = this.list[index];
            productImages[i].viewcount++;
        }

        this.lastDisplay = productImages;
        return productImages;
    }
        

    render() {
        
        const dom = appTemplate;

        const imageDisplaySection = dom.getElementById('pictures');
        const randomObjArray = this.randomize(this.list.length);
        const imageDisplayComponent = new Display(randomObjArray);
        imageDisplaySection.appendChild(imageDisplayComponent.render());


        return dom;
    }
}

// gets random item out of the image array
// function getRandomImage() {
//     return Math.floor(Math.random() * images.length);
// }

// getRandomImage();
// console.log(getRandomImage());
    



