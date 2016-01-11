
function calc (){

    cmVal = inToCm( parseFloat (inchesField.value) );
    cmField.value = cmVal;


}

function inToCm(x){
    return (x*2.54);
}

function setup() {
    console.log('test');
    inchesField = $('#in')[0];
    cmField = $('#cm')[0];
    inchesField.onkeyup = calc;
}

$('document').ready(function(){
    console.log('ready!');
    setup();
});
