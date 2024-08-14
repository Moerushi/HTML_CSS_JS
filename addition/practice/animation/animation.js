const cat = document.querySelector('.cat');

// let prev = performance.now();
//   let times = 0;

//   requestAnimationFrame(function measure(time) {
//     document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
//     prev = time;

//     if (times++ < 10) requestAnimationFrame(measure);
//   })

let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 100) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);