//traffic light simulator:use an if/else or switch statement to log "stop" ,"slow down",or"go" based on a lightcolor variable.
let lightColor = "red";

if (lightColor === "red") {
    console.log("Stop");
} else if (lightColor === "yellow") {
    console.log("Slow down");
} else if (lightColor === "green") {
    console.log("Go");
} else {
    console.log("Invalid light color");
}