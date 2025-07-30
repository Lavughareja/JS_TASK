const input=document.getElementById('inputbox');
const output=document.getElementById('outputbox');

input.addEventListener('input',updateOutput)

function updateOutput(e){
    output.innerHTML=e.target.value;
}