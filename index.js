const calculate = (newValue) =>{

  document.getElementById('disply-number').value +=newValue;

}
const deleteNumber = ()=>{
document.getElementById('disply-number').value="";

}

const result = () =>{
const  a = document.getElementById('disply-number').value;
const b = eval(a);
document.getElementById('disply-number').value = b;


}