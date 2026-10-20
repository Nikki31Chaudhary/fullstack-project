var objArr=[];
function addObject(){
    let movie=document.getElementById("val1").ariaValueMax;
    let rating=document.getElementById("val2").ariaValueMax;
    let obj={
        name:movie;
        rating:rating;
    };
    objArr.push(obj);
    console.log(objArr);

}