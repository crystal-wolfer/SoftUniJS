class ImageBox {
  _domElement;
  _imageSource;

  constructor(parent, imageSource) {
      this._domElement = this.#createElement(parent);
      this.imageSource = imageSource;
  }

  get imageSource(){
      return this._imageSource;
  }

  set imageSource(value) {
      this._imageSource = value;
      let image = this._domElement.querySelector('img');
      image.src = value;
  }

  showHideImage(){
      let image = this._domElement.querySelector('img');
      let isVisible = image.style.display === 'block';
      image.style.display = isVisible ? 'none' : 'block';
      let button = this._domElement.querySelector('button');
      button.textContent = isVisible ? 'Hide image' : 'Show image';
  }

  #createElement(parent) {
      let div = document.createElement('div');
      div.classList.add('box');
      let image = document.createElement('img');
      image.classList.add('box-image');
      let button = document.createElement('button');
      button.textContent = 'Show image';

      button.addEventListener('click', this.showHideImage.bind(this));

      div.appendChild(image);
      div.appendChild(button);

      parent.appendChild(div);
      return div;
  }
}

class Carousel {
  _imageBoxes;
  constructor(...imageBoxes) {
      this._imageBoxes = imageBoxes;
  }

  showHide(){
      this._imageBoxes.forEach(x => x.showHideImage())
  }
}


let main = document.getElementById('main');
let catImage = new ImageBox(main, 'https://http.cat/100');
let catImage2 = new ImageBox(main, 'https://http.cat/101');

let carousel = new Carousel(catImage, catImage2);
