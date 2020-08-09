var h = 0;
var w = 0;
var hv, wv;
var ex;
var factor = 0;
var gen;
var age;
var calories = 0;
var type = "";

function setup(){
    createCanvas(1200,1000)
    hv = createInput('');
    hv.position(windowWidth*1/3,450);
    hv.size(50,30);
    wv = createInput('');
    wv.position(windowWidth*1/3,500);
    wv.size(50,30);
    ex = createSelect();
    ex.option('little or no exercise');
    ex.option('light exercise/sports 1-3 days/week');
    ex.option('moderate exercise/sports 3-5 days/week');
    ex.option('hard exercise/sports 6-7 days a week');
    ex.option('very hard exercise/sports & physical job or 2x training');
    ex.position(windowWidth*1/5,1240);
    ex.size(500,40);
    gen = createSelect();
    gen.option('Male');
    gen.option('Female');
    gen.position(windowWidth*1/5,1340);
    gen.size(100,40);
    age = createInput('');
    age.position(windowWidth*1.75/5,1340);
    age.size(40,40);
    frameRate(60);
    canvas.id = "defaultCanvas1";
}

function draw(){
    background(100);
    h = hv.value();
    w = wv.value();
    clear();
    textSize(30);
    fill(0)
    text("Height:        m",190,60);
    text("Weight:        kg",185,110);
    text("Age:       years",253,957);
    textSize(60);
    if(Math.round(w/Math.pow(h,2),2) <= 18){
        var c = "underweight";
        fill(0,200,250);
    }else if(Math.round(w/Math.pow(h,2),2) <= 24){
        var c = "healthy";
        fill(0,255,100);
    }else if(Math.round(w/Math.pow(h,2),2) <= 29){
        var c = "overweight";
        fill(200,100,100);
    }else if(Math.round(w/Math.pow(h,2),2) <= 39){
        var c = "obese";
        fill(220,50,50);
    }else if(Math.round(w/Math.pow(h,2),2) > 39){
        var c = "extremely obese";
        fill(255,10,10);
    }
    text("BMI = "+Math.round(w/Math.pow(h,2),2)+", "+c,450,97);
    if(h && w){
        if(Math.round(w/Math.pow(h,2),2) <= 14){
            type = "(heavy weight gain)";
            factor = 500;
        }else if(Math.round(w/Math.pow(h,2),2) <= 16){
            type = "(weight gain)";
            factor = 350;
        }else if(c === "underweight"){
            type = "(light weight gain)";
            factor = 200;
        }else if(c === "healthy"){
            type = "(maintain)";
            factor = 0;
        }else if(c === "overweight"){
            type = "(light weight loss)";
            factor = -100;
        }else if(c === "obese"){
            type = "(weight loss)";
            factor = -250;
        }else if(c === "extremely obese"){
            type = "(heavy weight loss)";
            factor = -500;
        }
        if(gen.value() === 'Female'){
            calories = 655 + (9.6*w) + (1.8*h*100) - (4.7*age.value());
        }else{
            calories = 66 + (13.7*w) + (5*h*100) - (6.8*age.value());
        }
        if(ex.value() === 'little or no exercise'){
            calories = calories * 1.2;
        }else if(ex.value() === 'light exercise/sports 1-3 days/week'){
            calories = calories * 1.375;
        }else if(ex.value() === 'moderate exercise/sports 3-5 days/week'){
            calories = calories * 1.55;
        }else if(ex.value() === 'hard exercise/sports 6-7 days a week'){
            calories = calories * 1.725;
        }else if(ex.value() === 'very hard exercise/sports & physical job or 2x training'){
            calories = calories * 1.9;
        }
        calories = calories + factor;
        if(gen.value() === 'Female'){
            if(calories < 1200){
                calories = 1200;
            }
        }else{
            if(calories < 1800){
                calories = 1800;
            }        
        }
        textSize(50);
        textAlign(LEFT);
        fill(0);
        text("Calorie Requirement: "+round(calories)+"\n"+type,560,880);
    }
}