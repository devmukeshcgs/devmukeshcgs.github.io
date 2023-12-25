"use client"
import { useRef } from "react";
import Image from 'next/image'
import { useScroll, useTransform, motion } from "framer-motion";

const transition = { duration: 0.6 };

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  });
 
  const opacity = useTransform(scrollYProgress, [0 , 0.5], [1,0]);
  const scale = useTransform(scrollYProgress, [0 , 0.5], [1,0.8]);
  const moveX = useTransform(scrollYProgress, [0 , 0.5], [1,0]);
  const moveY = useTransform(scrollYProgress, [0 , 0.5], [1,0]);
  return (
    <main  className="font-poppins text-gray-400 tracking-widest">
      <div id="app">
        <div >
          <motion.div 
            // style={{ opacity }}
            ref={targetRef}
            className="h-screen bg-white relative text-center flex flex-col">
              <div className="bg-white  h-screen flex justify-center flex-col  flex-nowrap items-center  ">
              <motion.h1 
                style={{ scale, opacity }}
                ref={targetRef}
                className="text-5xl tracking-widest text-black m-4">
                  mukesh thankar
              </motion.h1>
                 {/* <div className="text-xl tracking-widest text-gray-500">
                  designer <span className="text-blue-500"> | </span> developer
              </div> */}
              <div className="flex justify-center flex-row  flex-nowrap items-center  ">
              <motion.div
                    style={{ opacity }}
                    ref={targetRef}
                    className="text-xl tracking-widest text-gray-400"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{  opacity: 1,  x: 0, transition: { delay: 1, ...transition },
                    }}>
                     designer 
              </motion.div>
              <motion.div
                className="text-xl tracking-widest text-blue-500 h-screen px-4 " 
                style={{ scale, opacity }}
                ref={targetRef}
                initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto",
                       transition: { delay: 1, ...transition },
                    }}
                    >
                    |
              </motion.div>
              <motion.div
              className="text-xl tracking-widest text-gray-400"
                    style={{ opacity }}
                    ref={targetRef}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{  opacity: 1,  x: 0, transition: { delay: 1, ...transition },
                    }}> developer 
              </motion.div>
              </div>
              </div>
          </motion.div>

          <div className="">
            <div className=" bg-gray-50 relative flex flex-col px-8">
              <div className="my-4">
                <div className="text-4xl bold text-gray-600 mb-4">
                  <span className=""></span>About Me
                </div>
                <div className=" ">
                  <p className="">
                    I am <span className="mt">Mukesh Thankar</span>, a UI/UX
                    designer and web developer living in Mumbai, India. I am
                    primarily focused on web design, and development but love
                    taking on any good design/development challenge. I love
                    getting to collaborate with clients to find a strategic
                    and creative solution for any and all of their design
                    needs. When I am not designing, you can find me drawing,
                    playing games.
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-gray-50 relative flex flex-col px-8">
              <div className="my-4">
                <div className="text-4xl bold text-gray-600 mb-4">
                   Skills
                </div>
                <div className=" ">
                  <ul className="custom-ul">
                    <li>React JS</li>
                    <li>Next JS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript</li>
                    <li>Adobe Photoshop</li>
                    <li>Coral Draw</li>
                    <li>Adobe Illustrator</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ---------------------------END--------------------- */}

            <div className="bg-gray-50 px-8">
              <div className=" ">
                <div className="text-4xl bold text-gray-600 mb-4 ">
                Freelance Work
                </div>
                <div className=" "> 
                    <div className="work-exp-block">
                      <div className="row-one">
                        <div className="skill-name">Navneet Futuretech Ltd.</div>
                        <div className="skill-time">Jan 2022 - Present</div>
                      </div>
                      <div className="row-two">
                        <div className="skill-type">Front-end Developer</div>
                      </div>
                    </div>  
                    <div className="work-exp-block">
                      <div className="row-one">
                        <div className="skill-name">Navneet Futuretech Ltd.</div>
                        <div className="skill-time">Jan 2022 - Present</div>
                      </div>
                      <div className="row-two">
                        <div className="skill-type">Front-end Developer</div>
                      </div>
                    </div>  
                </div>
              </div>
            </div>
            {/* ---------------------------END--------------------- */}

            <div className="bg-gray-50 px-8">
              <div className=" ">
                <div className="text-4xl bold text-gray-600 mb-4 ">
                   Work Experience
                </div>
                <div className=" "> 
                    <div className="work-exp-block">
                      <div className="row-one">
                        <div className="skill-name">Navneet Futuretech Ltd.</div>
                        <div className="skill-time">Jan 2022 - Present</div>
                      </div>
                      <div className="row-two">
                        <div className="skill-type">Front-end Developer</div>
                      </div>
                    </div>  
                    <div className="work-exp-block">
                      <div className="row-one">
                        <div className="skill-name">Navneet Futuretech Ltd.</div>
                        <div className="skill-time">Jan 2022 - Present</div>
                      </div>
                      <div className="row-two">
                        <div className="skill-type">Front-end Developer</div>
                      </div>
                    </div>  
                </div>
              </div>
            </div>

            {/* ---------------------------END--------------------- */}
            <div className="">
              <div className="work-exp-block">
                <div id="p2" className="page-heading">
                  <span className="overlay22"></span>Work Experience
                </div>
                <ul
                  className="skills work-exp wow fadeInUp"
                  data-wow-delay="0.3s">
                  <li>
                    <div className="skill-name">Black Ant Pvt. Ltd.</div>
                    <div className="skill-type">Graphic Designer</div>
                    <div className="skill-time">Nov 2007 - May 2013</div>
                  </li>
                  <li>
                    <div className="skill-name">
                      Hotels &amp; More Pvt. Ltd.
                    </div>
                    <div className="skill-type">
                      Web Designer &amp; Developer
                    </div>
                    <div className="skill-time">May 2013 - June 2014</div>
                  </li>
                  <li>
                    <div className="skill-name">
                      Astrika Infotech Pvt. Ltd.
                    </div>
                    <div className="skill-type">Front-end Developer</div>
                    <div className="skill-time">Jully 2014 - Sept 2018</div>
                  </li>
                  <li>
                    <div className="skill-name">Macann Erricson</div>
                    <div className="skill-type">Front-end Developer</div>
                    <div className="skill-time">Sept 2018 - Present</div>
                  </li>
                </ul>
                <div id="p3" className="page-heading">
                  <span className="overlay22"></span>Freelance Work
                </div>
                <ul
                  className="skills freelance  wow fadeInUp"
                  data-wow-delay="0.3s">
                  <li className="fade-in">
                    <div className="skill-name">Srikant Villuri</div>
                    <div className="skill-type">
                      <div>website</div>
                      <div>design</div>
                      <div>UI</div>
                      <div>UX</div>
                    </div>
                    <div className="skill-time">
                      3 Months{" "}
                      <a
                        href="./srikantvilluri/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit
                      </a>
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className="skill-name">CCUSA</div>
                    <div className="skill-type">
                      <div>application</div>
                      <div>website</div>
                      <div>design</div>
                      <div>UI</div>
                      <div>UX</div>
                    </div>
                    <div className="skill-time">
                      3 Months{" "}
                      <a
                        href="./ravebizz/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit
                      </a>
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className="skill-name">Ravebizz Solutions</div>
                    <div className="skill-type">
                      <div>application</div>
                      <div>website</div>
                      <div>design</div>
                      <div>UI</div>
                      <div>UX</div>
                    </div>
                    <div className="skill-time">
                      3 Months{" "}
                      <a
                        href="./ravebizz/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit
                      </a>
                    </div>
                  </li>
                  <li className="fade-in">
                    <div className="skill-name">Magical Tarot</div>
                    <div className="skill-type">
                      <div>website</div>
                      <div>UI</div>
                    </div>
                    <div className="skill-time">1.5 Months</div>
                  </li>
                  <li className="fade-in">
                    <div className="skill-name">Massakali Sarees</div>
                    <div className="skill-type">
                      <div>application</div>
                      <div>website</div>
                      <div>design</div>
                      <div>UI</div>
                    </div>
                    <div className="skill-time">
                      2 Months{" "}
                      <a
                        href="./ravebizz/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit
                      </a>
                    </div>
                  </li>
                </ul>

                <div id="p4" className="page-heading">
                  <span className="overlay22"></span>Education
                </div>
                <ul className="skills edu wow fadeInUp" data-wow-delay="0.3s">
                  <li>
                    <div className="skill-name">BCA</div>
                    <div className="skill-type">Pune Univercity</div>
                    <div className="skill-time">Feb 2012 - 2013</div>
                  </li>
                  <li>
                    <div className="skill-name">Graphic Design</div>
                    <div className="skill-type">Digicom Institute</div>
                    <div className="skill-time">Feb 2011 - 2012</div>
                  </li>
                  <li>
                    <div className="skill-name">HSC</div>
                    <div className="skill-type">Birla Collage</div>
                    <div className="skill-time">Feb 2011 - 2012</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="page-container wow fadeInUp" data-wow-delay="0.3s">
            <form action="" className="contact-form">
              <div className="g12">
                <div className="g1x2">
                  <div>
                    <input
                      placeholder="Name"
                      type="text"
                      id="field"
                      name="field"
                    />
                  </div>
                </div>

                <div className="g1x2">
                  <div>
                    <input
                      id="submit"
                      type="button"
                      value="Sumbmit"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div
                id="recaptcha"
                className="g-recaptcha"
                data-sitekey="6LcmzdwUAAAAAFDTv8rRuGWfESS1D0_KharJCtHW"
                data-callback="onSubmit"
                data-size="invisible"></div>
            </form>
          </div> */}

          <script>onload();</script>
        </div>
      </div>
    </main>
  )
}
