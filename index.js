var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 3000);

for(let i = 0; i<=4; i++){
    $(".footer-icon .svg" + i).hover(function(){
        $(".footer-icon .svg" + i).css("color", "blue");
    }, function(){
        $(".footer-icon .svg" + i).css("color", "black");
    });
}