function isArmstrong(n){
    return true;
}else{
    return false;
}
function checkAndShow(){
    let val1=document.getElementById("val1").value;
    if(isArmstrong(val1)){
        console.log("it is armstrong");
    }else{
        console.log("Not armstrong");
    }
}