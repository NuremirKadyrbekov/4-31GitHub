const htmlcode = document.getElementById('in1'); 
let csscode = document.getElementById('in2');
let outres = document.getElementById('outres');


const Add = () =>{
     let htmlCodeTwo = htmlcode.value;
     let cssCodeTwo = `<style>${csscode.value}</style>`
     let a = `${htmlCodeTwo} ${cssCodeTwo}`;
     outres.innerHTML = a
}
htmlcode.addEventListener('input', Add)
csscode.addEventListener('input' , Add)
Add()