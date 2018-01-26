let previousTime = performance.now();

function addEvent(){
    var form = document.getElementById("event_form");
    var name = form[0];
    var interval = form[1];
    var count = form[2];

    // document.getElementById("events").innerHTML = name;
    console.log(name)
}

function processInput(elapsedTime){

}

function update(elapsedTime){
    console.log("Updating game...")
}

function render(elapsedTime){

}

function gameLoop(){
    let currentTime = performance.now();
    let elapsedTime = currentTime - previousTime;
    previousTime = currentTime;

    processInput(elapsedTime);
    update(elapsedTime);
    render(elapsedTime);

    if(true){
        // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
        requestAnimationFrame(gameLoop)
    }
}

gameLoop();