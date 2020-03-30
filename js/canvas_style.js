
'use strict';
{
  function draw(){
    const canvas = document.getElementById('mycanvas');
    var Ball;
    var balls = [];
    var Stage;
    var stage;
    //canvasが使用できなければ、retrunでストップする↓
    if(typeof canvas.getContext === 'undefined'){
      return;
    }
    //2Dを使用する↓
    const ctx = canvas.getContext('2d');

    function rand(min, max){
      // 0-n
      // Math.floor(Math.random() * (n + 1))
      // min-max
      return min + Math.floor(Math.random() * (max - min + 1));
    }

    function adjustPosition(pos, r, max){
      if(pos - r < 0){
        return r;
      }else if(pos + r > max){
        return max - r;
      }else{
        return pos;
      }
    }

    canvas.addEventListener('click', function(e){
      var x,y,r;
      var rect;
      rect = e.target.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      r = rand(0,100) < 20 ? rand(50,80) : rand(10,35);

      x = adjustPosition(x,r,canvas.width);
      y = adjustPosition(y,r,canvas.height);

      balls.push(new Ball(x,y,r));
    });

    Ball = function(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = rand(-10,10);
      this.vy = rand(-10,10);
      // this.color = 'hsla(120,80%,40%,0.8)';
      this.color = 'hsla(' + rand(50, 100) + ', ' + 
      rand(40, 80) + '%, ' + rand(50, 60) + '%, ' + 
      Math.random() + ')';
    };

    Ball.prototype.draw = function(){
        ctx.beginPath();
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.closePath();
      ctx.fill();
    };
    Ball.prototype.move = function(){
      if(this.x + this.r > canvas.width || this.x - this.r < 0){
          this.vx *= -1;
      }
      if(this.y + this.r > canvas.height || this.y - this.r < 0){
        this.vy *= -1;
      }
      this.x += this.vx;
      this.y += this.vy;
    };

    Stage = function(){
      this.update = function(){
        var i;
        this.clear();
        for(i = 0; i < balls.length; i++){
          balls[i].draw();
          balls[i].move();
        }
        
        setTimeout(function(){
          this.update();
        }.bind(this),30);
      };
      this.clear = function(){
        ctx.fillStyle = '#ecf0f1';
        ctx.fillRect(0,0,canvas.width,canvas.height);
      }
    };
    stage = new Stage();
    stage.update();
  }

  draw();
}

