import React from 'react';

function getRandomCatUrl() {
  const STATUS_CODES = [
    100, 101, 200, 201, 202, 204, 206, 207, 300,
    301, 303, 304, 305, 307, 400, 401, 402, 403,
    404, 405, 406, 408, 409, 410, 411, 412, 413,
    414, 420, 421, 422, 423, 423, 424, 425, 426,
    429, 431, 444, 450, 401, 500, 502, 503, 504,
    506, 507, 508, 509, 511, 599,
  ];
  const index = parseInt(Math.random() * 10000) % STATUS_CODES.length;
  return `https://http.cat/${STATUS_CODES[index]}`;
}
const CATS = [ getRandomCatUrl(), getRandomCatUrl(), getRandomCatUrl(), ];
const IMG_HEIGHT = 240;

const Component = props => (
  <div className='flex note-example-l'>
    <ul>
      {/* This gives you the same result...*/}
      <li><img className='image-default' src={getRandomCatUrl()} role='presentation' height={IMG_HEIGHT} /></li>
      <li><img className='image-default' src={getRandomCatUrl()} role='presentation' height={IMG_HEIGHT} /></li>
      <li><img className='image-default' src={getRandomCatUrl()} role='presentation' height={IMG_HEIGHT} /></li>
    </ul>
    <ul>
      {/* ... but this is more convenient*/}
      {CATS.map((url, index) => <li key={index}><img src={url} role='presentation' height={IMG_HEIGHT} /></li>)
        /* when creating elements dynamically,
        you always need to provide each element a unique key*/
      }
    </ul>
  </div>
);

export default Component;
