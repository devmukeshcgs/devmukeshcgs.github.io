import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import timelineData from "./timelineData.json";

// new p5(sketch);
import p5 from "p5";
import gsap from "gsap";

// Global state object
const state = {};

const sketch = (p) => {
  let items = [];
  let activeIndex = -1;
  let tooltip;
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
    // get tooltip div
    tooltip = document.getElementById("tooltip");

    for (let i = 0; i < timelineData.experience.length; i++) {
      let xx = p.map(
        timelineData.experience[i].yr,
        startYear,
        endYear,
        0,
        p.width,
      );

      items.push({
        animating: true,
        locked: false,
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
          y: p.height / 2,
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

    items.forEach((item, i) => {
      // 👉 Hover detection
      let d = p.dist(p.mouseX, p.mouseY, item.x, item.y);
      // 👉 Hover only if not locked
      if (!item.locked) {
        if (d < item.size / 2) {
          item.targetScale = 2;
          item.targetAlpha = 255; // fully visible
          item.targetRectSize = 200; // fully visible
          item.targetRect.w = 100;
          item.targetRect.x = item.x;
        } else {
          item.targetScale = 1;
          item.targetAlpha = 0; // faded
          item.targetRectSize = 0; // faded
          item.targetRect.x = item.x;
          item.targetRect.w = 0;
        }
      }
      // 👉 Animate only if allowed
      if (item.animating) {
        item.scale = p.lerp(item.scale, item.targetScale, 0.1);

        // stop when close enough
        if (p.abs(item.scale - item.targetScale) < 0.01) {
          item.animating = false;
        }
      }
      // 👉 Lerp Value -smooth animation
      item.alpha = p.lerp(item.alpha, item.targetAlpha, 0.1);
      item.scale = p.lerp(item.scale, item.targetScale, 0.1);
      item.rectSize = p.lerp(item.rectSize, item.targetRectSize, 0.1);
      // item.rect = p.lerp(item.rectSize, item.targetRectSize, 0.1);
      // Lerp Object
      lerpRect(item.rect, item.targetRect, 0.1);
      // DRAW Fun
      drawVLine(item.x);
      drawMarkers(item, i, item.targetScale, item.alpha, item.rectSize);
      p.push();
      p.noStroke();
      p.fill(255, 0, 0);
      p.rect(item.rect.x, item.rect.y, item.rect.w, item.rect.h);
      p.pop();
      // Working Eg.
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
    handleInteraction(p.mouseX, p.mouseY);
    // 👉 Tooltip logic
    updateTooltip();
  };
  function updateTooltip() {
    if (!tooltip) return;

    if (activeIndex !== -1) {
      let item = items[activeIndex];

      let rect = p.canvas.getBoundingClientRect();

      tooltip.style.display = "block";
      tooltip.style.left = rect.left + item.x + "px";
      tooltip.style.top = rect.top + item.y - 40 + "px";
      tooltip.innerHTML = `Item ${activeIndex}`;
    } else {
      tooltip.style.display = "none";
    }
  }
  // // 👉 Click (desktop)
  // p.mousePressed = () => {
  //   handleInteraction(p.mouseX, p.mouseY, true);
  // };

  // // 👉 Touch (mobile)
  // p.touchStarted = () => {
  //   handleInteraction(p.mouseX, p.mouseY, true);
  //   return false;
  // };

  // p.touchMoved = () => {
  //   handleInteraction(p.mouseX, p.mouseY);
  //   return false;
  // };

  function drawVLine(x) {
    // console.log("Called");
    p.stroke(0, 255, 204, 25);
    p.line(x, 0, x, p.height);
  }

  function lerpRect(r, tr, amt) {
    r.x = p.lerp(r.x, tr.x, amt);
    r.y = p.lerp(r.y, tr.y, amt);
    r.w = p.lerp(r.w, tr.w, amt);
    r.h = p.lerp(r.h, tr.h, amt);
  }
  function drawMarkers(item, i, newTargetScale, lerpAlpha, lerpRectSize) {
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
  p.mouseClicked = () => {};
  p.mousePressed = () => {
    handleInteraction(p.mouseX, p.mouseY, true);
    //   for (let item of items) {
    //     let d = p.dist(p.mouseX, p.mouseY, item.x, item.y);

    //     if (d < item.size / 2) {
    //       item.locked = true;
    //       item.targetScale = 2;
    //       item.animating = true;
    //     }else{
    //       item.locked = false;
    //       item.targetScale=1;
    //        item.animating = false;
    //     }
    //   }
  };
  // MOBILE EVENT
  p.touchStarted = (e) => {
    handleInteraction(p.mouseX, p.mouseY, true);
    return false;
  };
  // p.touchEnd = () => {
  //   return false;
  // };

  p.touchMoved = () => {
    handleInteraction(p.mouseX, p.mouseY);
    return false;
  };
  p.touchStarted = () => {
    handleInteraction(p.mouseX, p.mouseY, true);
    return false;
  };

  function handleInteraction(px, py, isClick = false) {
    activeIndex = -1;

    items.forEach((item, i) => {
      let d = p.dist(px, py, item.x, item.y);

      if (d < item.size / 2) {
        activeIndex = i;
        item.targetScale = 2;
      } else {
        item.targetScale = 1;
      }
    });
  }
  // function handleInteraction(px, py, isClick = false) {
  //   activeIndex = -1;
  //   items.forEach((item, i) => {
  //     let d = p.dist(px, py, item.x, item.y);

  //     if (d < item.size / 2) {
  //       if (isClick) {
  //         activeIndex = i;
  //         item.locked = true;
  //         item.targetScale = 2;
  //         item.animating = true;
  //       } else if (!item.locked) {
  //         item.targetScale = 2;
  //         item.animating = true;
  //       }
  //     } else if (!item.locked) {
  //       item.targetScale = 1;
  //       item.animating = true;
  //     } else {
  //       if (isClick) {
  //         item.locked = false;
  //         item.targetScale = 1;
  //         item.animating = false;
  //       }
  //     }
  //   });
  // }
  function handleMouseMove(event) {}

  function handleMouseLeave() {}

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
