var bestTime = "1.000";
var time = "0.000";
var startTime = 0;
var started = false;
var filcol = "white";
var waitTime = 0;
var bcategory = "(N/A)";
var category = "()";

function setup(){
    createCanvas(1200,500);
    frameRate(144);
}

function draw(){
    frameRate(360);
    background(0);
    game();
    fill(filcol);
    textAlign(RIGHT);
    textSize(50);
    text("FPS: "+round(frameRate()),width,40);
    textAlign(LEFT);
    textSize(50);
    text("Best reaction time: "+bestTime+"s "+bcategory,0,40);
}

function game(){
    fill(filcol);  
    textAlign(CENTER);
    textSize(40);  
    if(mouseIsPressed && !started && millis()-startTime > 500){
        time = "0.000";
        startTime = 0;
        waitTime = millis()+random(2666,5000);
        filcol = "white";
        started = true;
    }
    if(started){
        text("click anywhere when the text colour becomes red\nand timer starts",width/2,150);
        if(waitTime-millis() <= 0 ){
            if(startTime === 0){
                startTime = millis();
                filcol = "red";
            }
            if(filcol === "red"){
                time = millis()-startTime;
                time = time/1000;
                time = ""+time+"";
            }
        }
    }else{ 
        text("click anywhere to start",width/2,150);
    }
    if(filcol === "red"){
        if(mouseIsPressed === true){
            for(var i = 0; i <= 4; i++){
                if(!time[i]){
                    if(i === 1){
                        time += ".";
                    }else{
                        time += "0";
                    }
                }
            }
            if(time >= "0.000" && time <= "0.040"){
                category = "(?!?!)";
            }else if(time <= "0.100"){
                category = "(inhuman)";
            }else if(time <= "0.150"){
                category = "(very rare)";
            }else if(time <= "0.180"){
                category = "(excellent)";
            }else if(time <= "0.220"){
                category = "(above average)";
            }else if(time <= "0.270"){
                category = "(average)";
            }else if(time <= "0.500"){
                category = "(poor)";
            }else if(time > "0.500"){
                category = "(-_-)";
            }
            if(bestTime >= "0.000" && bestTime <= "0.040"){
                bcategory = "(?!?!)";
            }else if(bestTime <= "0.100"){
                bcategory = "(inhuman)";
            }else if(bestTime <= "0.150"){
                bcategory = "(very rare)";
            }else if(bestTime <= "0.180"){
                bcategory = "(excellent)";
            }else if(bestTime <= "0.220"){
                bcategory = "(above average)";
            }else if(bestTime <= "0.270"){
                bcategory = "(average)";
            }else if(bestTime <= "0.500"){
                bcategory = "(poor)";
            }else if(bestTime > "0.500"){
                bcategory = "(-_-)";
            }
            if(time < bestTime && time > "0.005"){
                bestTime = time[0]+time[1]+time[2]+time[3]+time[4];
            }
            if(time >= "0.000" && time <= "0.040"){
                category = "(?!?!)";
            }else if(time <= "0.100"){
                category = "(inhuman)";
            }else if(time <= "0.150"){
                category = "(very rare)";
            }else if(time <= "0.180"){
                category = "(excellent)";
            }else if(time <= "0.220"){
                category = "(above average)";
            }else if(time <= "0.270"){
                category = "(average)";
            }else if(time <= "0.500"){
                category = "(poor)";
            }else if(time > "0.500"){
                category = "(-_-)";
            }
            if(bestTime >= "0.000" && bestTime <= "0.040"){
                bcategory = "(?!?!)";
            }else if(bestTime <= "0.100"){
                bcategory = "(inhuman)";
            }else if(bestTime <= "0.150"){
                bcategory = "(very rare)";
            }else if(bestTime <= "0.180"){
                bcategory = "(excellent)";
            }else if(bestTime <= "0.220"){
                bcategory = "(above average)";
            }else if(bestTime <= "0.270"){
                bcategory = "(average)";
            }else if(bestTime <= "0.500"){
                bcategory = "(poor)";
            }else if(bestTime > "0.500"){
                bcategory = "(-_-)";
            }
            filcol = "white";
            started = false;
            startTime = millis();
            console.log(started);
        }
    }
    text("reaction time: "+time[0]+time[1]+time[2]+time[3]+time[4]+"s "+category,width/2, height*3/5);
    textSize(30);
    text("Fun fact: red colour is used to show that the timer has started as red light travels fastest",width/2,470)
}