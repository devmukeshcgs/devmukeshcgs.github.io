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

    items22.forEach((item, i) => {
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
      drawMarkers(item, i, item.targetScale);
      // 👉 Draw
      p.push();
      p.translate(item.x, item.y);
      p.scale(item.scale);
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, item.size);
      p.pop();
    });

    // for (let item of items22) {
    //   // 👉 Hover detection
    //   let d = p.dist(p.mouseX, p.mouseY, item.x, item.y);

    //   if (d < item.size / 2) {
    //     item.targetScale = 2;
    //   } else {
    //     item.targetScale = 1;
    //   }

    //   // 👉 Smooth animation
    //   item.scale = p.lerp(item.scale, item.targetScale, 0.1);
    //   drawVLine(item.x);
    //   drawMarkers(item, item.x, item.y);
    //   // 👉 Draw
    //   p.push();
    //   p.translate(item.x, item.y);
    //   p.scale(item.scale);
    //   p.fill(255);
    //   p.noStroke();
    //   p.ellipse(0, 0, item.size);
    //   p.pop();
    // }

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

  function drawMarkers(item, i, newTargetScale, d) {
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
    let colorA = p.color(255, 0, 0, 0); // Transparent Red
    let colorB = p.color(255, 0, 0, 255); // Opaque Red
    // 👉 Smooth animation
    let dd = p.lerp(item.scale, item.targetScale, 0, 255, 0.1);
    // let lerpAlpha = p.lerp(colorA, colorB, 10);
    console.log(dd);

    // 👉 Draw
    p.push();
    p.noStroke();
    // p.translate(item.x, item.y);
    // p.scale(isc);
    // p.fill(255, 255, 255, dd);
    // p.fill(255, 255, 255, lerpAlpha);
    p.rect(item.x, item.y - rectSize * dd, rectSize * 2, rectSize);
    p.pop();

    // if (isHovered) {
    // drawToolTip(x, centerY, isHovered);
    // let currentXLimit = p.map(animation2.progress, 0, 1, 0, rectSize);
    // p.rect(item.x, item.y - rectSize, currentXLimit, rectSize);

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
