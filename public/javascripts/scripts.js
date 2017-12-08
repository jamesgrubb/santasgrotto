let cnv;
let mic;
let amp;
let snowflakes = []
function preload(){
    ny = loadImage('images/ny.png')
}

function setup(){
    mic = new p5.AudioIn();
    mic.start();
    imageMode(CENTER)
    cnv = createCanvas(windowWidth,windowHeight)
    cnv.position(0,0)
    cnv.style('z-index' , '-1')
    // for (let i = 0; i < 200; i++) {
    //     let s = new Snowflake(random(2,20),random(0,width),random(20,30))
    //     snowflakes.push(s)
        
    // }
    noStroke()
 
}

function draw(){
    let volume = mic.getLevel()
    // console.log(`The volume is ${volume}`)
    if(frameCount % 6 == 0){
    let s = new Snowflake(random(2,10),random(0,width),random(0,10))
    snowflakes.push(s)
}
    
background('#8523bb')
for (let i = 0; i < snowflakes.length; i++) {
    const s = snowflakes[i];
    s.render()
    s.update(volume)
    s.checkEdges()
    if(snowflakes.length > 180){
        snowflakes.splice(0,1)
       
    }
    
    // console.log(s.x)

    // fill(0)
    //     ellipse(s.x,s.y,s.r*10)
    

}
    let nyWidth = ny.width;
    let nyHeight = ny.height;
    image(ny,width/2,height-(nyHeight/2))
    ny.resize(windowWidth,0)
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}