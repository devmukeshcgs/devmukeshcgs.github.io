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
    for (let item of items22) {
      // 👉 Hover detection
      let d = p.dist(p.mouseX, p.mouseY, item.x, item.y);

      if (d < item.size / 2) {
        item.targetScale = 2;
      } else {
        item.targetScale = 1;
      }

      // 👉 Smooth animation
      item.scale = p.lerp(item.scale, item.targetScale, 0.1);
      drawVLine(item.x);
      // 👉 Draw
      p.push();
      p.translate(item.x, item.y);
      p.scale(item.scale);
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, item.size);
      p.pop();
    }

    // let padding = p.width * 0.0;
    let centerY = p.height / 2;
    // let currentXLimit = p.map(
    //   animation.progress,
    //   0,
    //   1,
    //   padding,
    //   p.width - padding,
    // );

    // Only trigger GSAP if data is likely ready
    // gsap.to(animation, {
    //   progress: 1,
    //   duration: 3,
    //   ease: "power3.inOut",
    //   delay: 0.5,
    // });

    // SAFETY CHECK: Prevent drawing if data hasn't loaded yet
    // if (!timelineData) {
    //   p.background(10);
    //   p.fill(255);
    //   p.textAlign(p.CENTER);
    //   p.text("Loading Portfolio Experience...", p.width / 2, p.height / 2);
    //   return;
    // }

    // p.background(10, 10, 15);

    // Main Timeline Track
    // p.stroke(40, 45, 60);
    // p.strokeWeight(1);
    // p.line(0, centerY, p.width, centerY);

    // Progress Line
    // p.stroke(0, 255, 204);
    // p.line(padding, centerY, currentXLimit, centerY);

    // if (!timelineData) {
    // timelineData.experience.forEach((item, index) => {
    // let x = p.map(item.yr, startYear, endYear, padding, p.width - padding);
    // Vertical Line
    // drawVLine(x);
    // Marker
    // drawMarkers(item, x, index, centerY);

    // }
    // });
    // }
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

  function drawMarkers(item, x, index, centerY, isHovered) {
    // 👉 Hover detection
    let targetScale = 1;
    let d = p.dist(p.mouseX, p.mouseY, item.x, centerY);
    if (d < 100 / 2) {
      targetScale = 2;
    } else {
      targetScale = 1;
    }
    // 👉 Smooth animation
    let Xscale = p.lerp(1, targetScale, 0.1);
    // 👉 Draw
    p.push();
    p.translate(x, centerY);
    p.scale(Xscale);
    // p.fill(255);
    p.noStroke();
    p.ellipse(0, 0, 10);
    p.pop();

    // let dx = (p.mouseX - x) / 6;
    // let dy = (p.mouseY - centerY) / 6;
    // isHovered = dx * dx + dy * dy <= 1;
    // let ellipsSize = isHovered ? 15 : 12;
    // p.noStroke();
    // // p.fill(0, 255, 204);
    // p.fill(isHovered ? "orange" : "blue");
    // p.ellipse(x, centerY, ellipsSize, ellipsSize);

    // // // Labels
    // p.textAlign(p.CENTER);
    // p.fill(200);
    // p.textSize(8);
    // p.text(item.display || Math.floor(item.yr), x, centerY + 25);

    // if (isHovered) {
    //   // drawToolTip(x, centerY, isHovered);
    //   let rectSize = 100;
    //   let currentXLimit = p.map(animation2.progress, 0, 1, 0, rectSize);
    //   p.rect(x, centerY - rectSize, currentXLimit, rectSize);

    //   // Company & Role Placement
    //   let yOffset = index % 2 === 0 ? -20 : 60;
    //   p.fill(255);
    //   p.textSize(12);
    //   p.text(item.company, x, centerY + yOffset);
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
