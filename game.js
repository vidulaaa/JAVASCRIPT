const player = document.querySelector(".player");
const player1 = document.querySelector(".arrow");
const container = document.querySelector(".parent");
let scoreElement = document.querySelector(".score");
let y = 180;
let y1 = 240;
let y17=240;
let score = 0;


document.addEventListener("keydown", (e) => {
    if (!player) return;
    
    if (e.key === "ArrowUp") {
        y -= 10;
        if(y<0){
            y=0;
        }
    }
    if (e.key === "ArrowDown") {
        y += 10;
        if(y>240){
            y=240;
        }
    }
    
    
    player.style.top = y + "px";
});
document.addEventListener("keydown", (e) => {
    if (!player1) return;
    
    if (e.key === "ArrowRight") {
        y1 += 10;
        if(y1>240){
            y1=240;
        }
    }
    
    player1.style.left = y1 + "px";
});

setInterval(() => {
        const a=player1.getBoundingClientRect();
        const p=player.getBoundingClientRect();
        if(a.left<p.right && a.right>p.left && a.top<p.bottom && a.bottom>p.top){
           
            scoreElement.textContent = score;
            alert("Game Over! Final score: " + score);
            score = 0;
            restartGame();
        }
        y1-=10;
        player1.style.left = y1 + "px";
        if(y1<=0){
            score++;
            console.log(score);
            scoreElement.textContent = score;
        y1=240;
        let ry=Math.floor(Math.random()*5);
        y17=ry*60;
        player1.style.top = y17 + "px";
       
    }
    
}, 100);

function restartGame() {
    y = 180;
    y1 = 240;
    player.style.top = y + "px";
    player1.style.left = y1 + "px";
}