for(var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    var whiteBox = "<div class='white-box'></div>";
    var redBox = "<div class='red-box'></div>";
    var blackChecker = "<div class='black-checker'></div>";
    var whiteChecker = "<div class='white-checker'></div>";
    if (i%2===0){
      if(j%2===0){
        $("#checkerboard").append(whiteBox);
      }
      else{
        $("#checkerboard").append(redBox);
      }
    }
    else{
      if(j%2===0){
        $("#checkerboard").append(redBox);
      }
      else{
        $("#checkerboard").append(whiteBox);
      }
    }
  }
}
