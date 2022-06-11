var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  var code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var codePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = code[codePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      codePosition++;
  
      // if the last key is reached, activate cheats
      if (codePosition == code.length) {
        JSalert();
        codePosition = 0;
      }
    } else {
      codePosition = 0;
    }
  });

  function JSalert(){
	swal({   
        title: "Wait a second...",   
        text: '<img src="images/meme.jpg" style="width:420px;">',
        closeOnConfirm: false,   
        animation: "slide-from-top",   
        html: true
    })
  }