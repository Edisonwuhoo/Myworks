$(function(){
$("[type='color']").on("change",changeColor);
});

function changeColor(){
$('body').css("background-color",this.value)
}

