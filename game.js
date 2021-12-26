var leftFlag=0;
var topFlag=0;
var l=0;
var t=0;
var box=document.querySelector(".box")
var ball=document.getElementById("ball")
var obj = null;
            function init() {
                obj = document.getElementById("pad");
                obj.style.left = "430px";
                
                
            }
            function getKeyAndMove(e) {
                var key_code = e.which || e.keyCode;
                switch (key_code) {
                    case 37: 
                        moveLeft();
                        break;
                    
                    case 39: 
                        moveRight();
                        break;
                    
                }
            }
            function moveLeft() {
                if (parseInt(obj.style.left)>0)
                obj.style.left = parseInt(obj.style.left) - 15 + "px";
                
                
            }
            
            function moveRight() {
                if (parseInt(obj.style.left)<880)
                obj.style.left = parseInt(obj.style.left) + 15 + "px";
                
            }
            window.onload = init;
            
var count=0            
const move=()=>{
    if (count==1){
        count++
        
        alert("You have one chance left press Enter to resume the game")
    }
    if(count==3){
        alert("you lost")
        return
    }
    if (leftFlag==0){
        if(l==960){
            leftFlag=1;
        }
        l+=5;
        ball.style.left=l+"px";
    }
    else if(leftFlag=1){
        if (l==0){
            leftFlag=0;
        }
        l-=5;
        ball.style.left=l+"px"
    }
    if(topFlag==0){
        if(t==460){
            count++
            topFlag=1;
        }
        if(t==435 && l<parseInt(obj.style.left)+100 && l>parseInt(obj.style.left)-20){
            topFlag=1;
        }
        t+=5;
        ball.style.top=t+"px";
    }
    else if(topFlag==1){
        if(t==0){
            topFlag=0;
        }
        t-=5;
        ball.style.top=t+"px";
    }
    requestAnimationFrame(move)
}

move();


