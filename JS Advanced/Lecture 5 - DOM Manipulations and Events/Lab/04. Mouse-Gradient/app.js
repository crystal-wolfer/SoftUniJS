function attachGradientEvents() {
    // capture elements 
    const hoverBox = document.querySelector('#gradient');
    const outputBox = document.querySelector('#result');

    // attach event listener
    hoverBox.addEventListener('mousemove', hoverBoxHandler);
    
    // the hoverBoxHandler function
    function hoverBoxHandler(eventProp){
        console.dir(eventProp);
        let offsetX = eventProp.offsetX; // offsetX returns the position of the mouse in the X coordinate
        let elementWidth = eventProp.target.clientWidth; // clientWidth is a prperty of the target property and returns the width of the hoverBox element

        let positionPercent = offsetX/elementWidth*100; 
        outputBox.textContent = `${Math.trunc(positionPercent)}%`; // math trunc to round down the number
    }
}