import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import timelineData from "./timelineData.json";

// import p5 from 'p5';

// const sketch = (p) => {
//   let data = [];
//   let animProgress = 0; // Goes from 0 to 1
//   const startYear = 2007;
//   const endYear = 2026;

//   p.setup = () => {
//     p.createCanvas(p.windowWidth, 400);
//     // Data from your resume [cite: 17, 24, 30, 33, 37, 38]
//     data = [
//       { yr: 2007.9, name: "Blackant" },
//       { yr: 2012.5, name: "HnM Travel" },
//       { yr: 2014.5, name: "Astrika" },
//       { yr: 2018.7, name: "McCann" },
//       { yr: 2020.0, name: "Navneet" },
//       { yr: 2021.3, name: "Coinlock" },
//       { yr: 2022.3, name: "BeMasterly" },
//       { yr: 2023.1, name: "11Challengers" }
//     ];
//   };

//   p.draw = () => {
//     p.background(20, 20, 25); // Dark theme

//     let padding = 100;
//     let timelineY = p.height / 2;

//     // Draw Main Axis
//     p.stroke(100);
//     p.line(padding, timelineY, p.width - padding, timelineY);

//     // Increment animation speed
//     if (animProgress < 1) animProgress += 0.005;

//     data.forEach((item) => {
//       // Map year to X position
//       let x = p.map(item.yr, startYear, endYear, padding, p.width - padding);

//       // Only draw if the animation has "reached" this point
//       let currentXLimit = p.map(animProgress, 0, 1, padding, p.width - padding);

//       if (x < currentXLimit) {
//         let opacity = p.map(currentXLimit - x, 0, 50, 0, 255, true);

//         // Draw Marker
//         p.fill(0, 255, 200, opacity);
//         p.noStroke();
//         p.ellipse(x, timelineY, 12, 12);

//         // Draw Text
//         p.textAlign(p.CENTER);
//         p.fill(255, opacity);
//         p.text(Math.floor(item.yr), x, timelineY + 25);
//         p.push();
//         p.translate(x, timelineY - 20);
//         p.rotate(-p.QUARTER_PI);
//         p.text(item.name, 0, 0);
//         p.pop();
//       }
//     });
//   };

//   p.windowResized = () => {
//     p.resizeCanvas(p.windowWidth, 400);
//   };
// };

// new p5(sketch);
import p5 from "p5";
import gsap from "gsap";

const sketch = (p) => {
  // let timelineData = null; // Initialize as null to check status
  console.log("-----", timelineData);

  let animation = { progress: 0 };
  const startYear = 2007;
  const endYear = 2026;

  // p.preload = () => {
  //   // Vite serves files in /public at the root level /
  //   p.loadJSON("./timelineData.json", (data) => {
  //     console.log("-----", data);

  //     // Accessing the 'experience' array from your JSON structure
  //     if (data && data.experience) {
  //       timelineData = data.experience;
  //     }
  //   });
  // };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    // Only trigger GSAP if data is likely ready
    gsap.to(animation, {
      progress: 1,
      duration: 3,
      ease: "power3.inOut",
      delay: 0.5,
    });
  };

  p.draw = () => {
    // SAFETY CHECK: Prevent drawing if data hasn't loaded yet
    if (!timelineData) {
      p.background(10);
      p.fill(255);
      p.textAlign(p.CENTER);
      p.text("Loading Portfolio Experience...", p.width / 2, p.height / 2);
      return;
    }

    p.background(10, 10, 15);

    let padding = p.width * 0.1;
    let centerY = p.height / 2;
    let currentXLimit = p.map(
      animation.progress,
      0,
      1,
      padding,
      p.width - padding,
    );

    // Main Timeline Track
    p.stroke(40, 45, 60);
    p.strokeWeight(2);
    p.line(padding, centerY, p.width - padding, centerY);

    // Progress Line
    p.stroke(0, 255, 204);
    p.line(padding, centerY, currentXLimit, centerY);
    if (!timelineData) {
      timelineData.forEach((item, index) => {
        // Map the 'yr' value from your JSON [cite: 38, 37, 33, 30, 27, 24, 19, 16]
        let x = p.map(item.yr, startYear, endYear, padding, p.width - padding);

        if (x < currentXLimit) {
          let fade = p.map(currentXLimit - x, 0, 100, 0, 255, true);

          // Marker
          p.noStroke();
          p.fill(0, 255, 204, fade);
          p.ellipse(x, centerY, 12, 12);

          // Labels
          p.textAlign(p.CENTER);
          p.fill(200, fade);
          p.textSize(12);
          p.text(item.display || Math.floor(item.yr), x, centerY + 30);

          // Company & Role Placement
          // Alternate height to avoid overlapping text
          let yOffset = index % 2 === 0 ? -50 : 70;

          // p.fill(255, fade);
          // p.textSize(14);
          // p.text(item.company, x, centerY + yOffset); [cite: 16, 19, 24, 27, 30, 33, 37, 38]

          // p.fill(0, 255, 204, fade);
          // p.textSize(10);
          // p.text((item.role || "").toUpperCase(), x, centerY + yOffset + 15); [cite: 16, 19, 24, 27, 30, 33, 37, 38]
          p.fill(255, fade);
          p.textSize(14);
          p.text(item.company, x, centerY + yOffset);

          p.fill(0, 255, 204, fade);
          p.textSize(10);
          p.text((item.role || "").toUpperCase(), x, centerY + yOffset + 15);
        }
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
