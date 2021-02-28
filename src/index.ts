import * as _ from 'lodash';

const typeWriter = document.getElementById('type-writer');
const h = document.createElement('h1');
typeWriter?.appendChild(h);

var content = "Hello World. \n I am Kishor &...";

var arrContent = _.toArray(content);

var counter = 0;
var interval = 100; //ms
arrContent.forEach(val => {
    if(val == '\n')
        val = '<br>';
        
    setTimeout(()=>{
        console.log(`Writing: ${val}`);
        h.innerHTML += val;
    }, interval * counter);
    counter++;
});