import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import timelineData from "./timelineData.json";

// new p5(sketch);
import p5 from "p5";
import gsap from "gsap";

// Global state object
// const state = {
//   mouseX: 0,
//   mouseY: 0,
//   hoveredEllipse: null,
// };

const sketch = (p) => {
  let items22 = [];
  // let timelineData = null; // Initialize as null to check status
  let animation = { progress: 0 };
  const startYear = 2007;
  const endYear = 2026;
  let hoveredYear = null;
  let infoPanel;
  let padding = p.width * 0.0;
  let centerY = p.height / 2;

  p.setup = () => {
    // p.noLoop(); // Stops the continuous loop initially
    // Add mouse move listener for canvas
    p.createCanvas(p.windowWidth, p.windowHeight);
    const canvasElement = document.getElementById("defaultCanvas0");
    canvasElement.addEventListener("mousemove", handleMouseMove);
    canvasElement.addEventListener("mouseleave", handleMouseLeave);
    for (let i = 0; i < timelineData.experience.length; i++) {
      let xx = p.map(
        timelineData.experience[i].yr,
        startYear,
        endYear,
        0,
        p.width,
      );

      items22.push({
        x: xx,
        y: p.height / 2,
        size: 10,
        scale: 1,
        targetScale: 1,
        alpha: 0.0,
        targetAlpha: 100,
        rectSize: 0,
        targetRectSize: 100,
        rect: {
          x: xx,
          y: p.height / 2,
          w: 0,
          h: 100,
        },
        targetRect: {
          x: xx,
          y: 0,
          w: 100,
          h: 100,
        },
      });
    }
  };

  p.draw = () => {
    p.background(20);
    p.push();
    p.stroke(255, 0, 0);
    p.strokeWeight(0.5);
    p.line(0, p.height / 2, p.width, p.height / 2);
    p.pop();

    items22.forEach((item, i) => {
      // 👉 Hover detection
      let d = p.dist(p.mouseX, p.mouseY, item.x, item.y);

      if (d < item.size / 2) {
        item.targetScale = 2;
        item.targetAlpha = 255; // fully visible
        item.targetRectSize = 200; // fully visible
      } else {
        item.targetScale = 1;
        item.targetAlpha = 0; // faded
        item.targetRectSize = 0; // faded
      }
      // 👉 Lerp Value -smooth animation
      item.alpha = p.lerp(item.alpha, item.targetAlpha, 0.1);
      item.scale = p.lerp(item.scale, item.targetScale, 0.1);
      item.rectSize = p.lerp(item.rectSize, item.targetRectSize, 0.1);
      item.rect = p.lerp(item.rectSize, item.targetRectSize, 0.1);

      // DRAW Fun
      drawVLine(item.x);
      drawMarkers(item, i, item.targetScale, item.alpha, item.rectSize);
      p.rect(
        item.x,
        item.y - item.rectSize / 2,
        item.rectSize,
        item.rectSize / 2,
      );

      // 👉 Draw
      p.push();
      p.translate(item.x, item.y);
      p.scale(item.scale);
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, item.size);
      p.pop();
    });
  };

  function drawVLine(x) {
    // console.log("Called");
    p.stroke(0, 255, 204, 25);
    p.line(x, 0, x, p.height);
  }

  let animation2 = { progress: 0 };

  gsap.to(animation2, {
    progress: 1,
    duration: 3,
    ease: "power3.inOut",
    delay: 0.5,
  });
  function drawToolTip(x, centerY, isHovered) {
    let rectSize = 100;
    let c;
    if (isHovered) {
      c = p.lerp(10, rectSize, 1);
    } else {
      c = p.lerp(rectSize, 10, 0);
    }
    p.rect(x, centerY, c, rectSize);
  }

  function drawMarkers(item, i, newTargetScale, lerpAlpha, lerpRectSize) {
    let rectSize = 100;
    // // Labels
    p.textAlign(p.CENTER);
    p.fill(200);
    p.textSize(8);
    p.text(
      timelineData.experience[i].display ||
        Math.floor(timelineData.experience[i].yr),
      item.x,
      item.y + 25,
    );

    // Company & Role Placement
    let yOffset = i % 2 === 0 ? -20 : 60;
    p.fill(255);
    p.textSize(12);
    p.text(timelineData.experience[i].company, item.x, item.y + yOffset);
    // } else {
    //   let rectSize = 0;
    //   let currentXLimit = p.map(animation2.progress, 0, 1, 0, rectSize);
    //   p.rect(x, centerY - rectSize, currentXLimit, rectSize);
    // }
  }
  function handleMouseMove(event) {}

  function handleMouseLeave() {
    hoveredYear = null;
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
