
//the variables of my clock...

var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

//the setup function for the creation of the anglemode and canvas... 

function setup() {

    createCanvas(400,400); 
    angleMode(DEGREES);   
}

//the draw function for the main functions of the clock...

function draw() {

    background("silver");

    //the function for the translation and rotation of the clock... 

    translate(200,200)
    rotate(-90)

    //Calculating the time using the hour,minute & seconds function....

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    // drawing our seconds hand for the clock...
    
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing the minutes hand with the parameters...

    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing the hour hand of the clock...
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();
    stroke(255,0,255);
    point(0,0)

    //drawing the arcs as the displayed picture(the additional challenging activity)...

    strokeWeight(10);
    noFill();
    stroke("magenta");
    arc(0,0,300,300,0,scAngle);

    // the arc for minutes...

    stroke("blue");
    arc(0,0,280,280,0,mnAngle);

    //the arc for the hour hand of the clock...

    stroke("darkgreen");
    arc(0,0,260,260,0,hrAngle);
}