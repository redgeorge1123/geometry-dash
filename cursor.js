
(() => {
    const style = document.createElement("style");

    style.textContent = `
        * {
            cursor: none !important;
        }

        #custom-cursor {
            position: fixed;
            width: 9px;
            height: 9px;
            background: #00ff55;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2147483647;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px #00ff55, 0 0 20px #00ff55;
        }

        #cursor-circle {
            position: fixed;
            width: 34px;
            height: 34px;
            border: 2px solid #00ff55;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2147483646;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px #00ff55, inset 0 0 8px #00ff5533;
            transition: width .15s ease, height .15s ease;
        }
    `;

    document.head.appendChild(style);

    const circle = document.createElement("div");
    circle.id = "cursor-circle";

    const dot = document.createElement("div");
    dot.id = "custom-cursor";

    document.body.append(circle, dot);

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
    });

    function animate() {
        circleX += (mouseX - circleX) * 0.12;
        circleY += (mouseY - circleY) * 0.12;

        circle.style.left = circleX + "px";
        circle.style.top = circleY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener("mousedown", () => {
        circle.style.width = "27px";
        circle.style.height = "27px";
    });

    document.addEventListener("mouseup", () => {
        circle.style.width = "34px";
        circle.style.height = "34px";
    });
})();
