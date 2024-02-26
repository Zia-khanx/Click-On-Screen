document.onclick = function(event) {
    let clickX = event.clientX;
    let clickY = event.clientY;
    let clickTimestamp = new Date().toLocaleString();
    let clickCoordinatesElement = document.getElementById("clickCoordinates");
    clickCoordinatesElement.style.left = clickX + "px";
    clickCoordinatesElement.style.top = clickY + "px";
    clickCoordinatesElement.innerHTML = "you clicked here: (" + clickX + ",   " + clickY + ")<br>on this Time : " + clickTimestamp;

    clickCoordinatesElement.style.display = "block"; 
    setTimeout(function(){ clickCoordinatesElement.style.display = "none"; }, 6000); 
};
