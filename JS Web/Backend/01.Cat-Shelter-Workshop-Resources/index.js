const http = require('http');
// making the html page as a js module so we can render it 
const homeTemplate = require('./resources/views/home/index.js');
const catsTemplate = require('./resources/views/home/catTempl.js');
const siteCSS = require('./resources/content/styles/site.js');
const addBreedHtml = require('./resources/views/addBreed.js');

const cats = [
  {
    id: 1,
    name: 'KitCat',
    breed: 'Bombay Cat',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    imgUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'
  },

  {
    id: 2,
    name: 'Sweet Pea',
    breed: 'Persian',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    imgUrl: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg'
  },

  {
    id: 3,
    name: 'Liitle Princess',
    breed: 'Angora',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    imgUrl: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
  },

  {
    id: 4  ,
    name: 'Garfield',
    breed: 'Orange Royal',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    imgUrl: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg'
  }
];

const server = http.createServer((req, res) => {
  console.log(req.url);
  // making the server understand that the browser is requesting the .css file and the home page log req.url to see the browser requests in  order to address them
  if (req.url === '/') {
    const patternImg = /{{imgUrl}}/g
    const patternName = /{{catName}}/g
    const patternBreed = /{{breed}}/g
    const patternDescr = /{{description}}/g

    const catsReplacer = cats.map(cat => 
      catsTemplate
        .replace(patternImg,cat.imgUrl)
        .replace(patternName,cat.name)
        .replace(patternBreed,cat.breed)
        .replace(patternDescr,cat.description)
    )

    const homeHtml = homeTemplate.replace('{{cats}}', catsReplacer)

    res.writeHead(200, {"Content-Type": "text/html"});

    res.write(homeHtml)
    // the url path for the css is the same path given in the html file href for the css file path and can be edited from there
  } else if (req.url === '/content/styles/site.css'){
     res.writeHead(200, {"Content-Type": "text/css"});

    res.write(siteCSS)
  } else if (req.url === '/cats/add-breed'){
    res.writeHead(200, {"Content-Type": "text/html"});

    res.write(addBreedHtml)
  }


  res.end();
}); 
server.listen(5000, () => console.log('Server listening on port 5000...' ));