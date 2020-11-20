/*Downloaded from https://www.codeseek.co/jorgemaiden/javascript-contador-numandxe9rico-con-animaciandxf3n-jrVRRv */
function count(){
    var counter = { var: -55 };
    TweenMax.to(counter, 3, {
      var: 25, 
      onUpdate: function () {
        var number = Math.ceil(counter.var);
        $('.counter').html(number);
        if(number === counter.var){ count.kill(); }
      },
      onComplete: function(){
        count();
      },    
      ease:Circ.easeOut
    });
  }
  
  count();