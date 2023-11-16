import React from "react";
import { Link } from "react-router-dom";
import { BiSolidChevronRight } from "react-icons/bi";
import HightLightText from "../components/core/homepages/HightLightText";
import CTAButton from "../components/core/homepages/CTAButton";

import Banner from "../assents/video/banner.mp4";
import CodeBlocks from "../components/core/homepages/CodeBlocks";
import TimelineSection from "../components/core/homepages/TimeLineSection";
import LearningLanguageSection from "../components/core/homepages/LearingLanguageSection";
import InstructorSection from "../components/core/homepages/InstructorSection";
import ReviewSlide from "../components/common/ReviewSlider";
import ExplorePage from "../components/core/homepages/ExplorePage";
import Footer from "../components/common/Footer"



const  Home = () => {
  return (
    <div>
      {/* section1 */}

      <div
        className={
          "relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8"
        }
      >
        <Link to={"/signup"}>
          <div
            className={
              "group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none"
            }
          >
            <div
              className={
                "flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900"
              }
            >
              <p>Become an Instructor</p>
              <BiSolidChevronRight />
            </div>
          </div>
        </Link>
        <div>
          Empower Your Future with
          <HightLightText text={"coding skills"} />
        </div>

        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          {" "}
          {/* here we passed "Learn More" as a children in CTAButton component and here compnent is used because there are many button like this; */}
          <CTAButton active={true} linkto={"/signup"}>
            {" "}
            Learn More{" "}
          </CTAButton>{" "}
          {/* here active is passed as props because if active is true then button is yellow otherwise black; */}
          <CTAButton active={false} linkto={"/login"}>
            {" "}
            Book a Demo{" "}
          </CTAButton>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            muted
            loop
            autoPlay
            className="shadow-[20px_20px_rgba(255,255,255)]"
          >
            {" "}
            <source src={Banner} type="video/mp4" />{" "}
          </video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HightLightText text={"coding potential"} /> with
                our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "learn more", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start <HightLightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            codeColor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <ExplorePage/>
      </div>

      {/* section2 */}
      <div className={"bg-pure-greys-5 text-richblack-700"}>
        <div className={"homepage_bg h-[320px]"}>
          <div
            className={
              "mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8"
            }
          >
            <div className={"lg:h-[150px]"}></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  {" "}
                  Explore Full Catalog <BiSolidChevronRight />{" "}
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                {" "}
                Learn more{" "}
              </CTAButton>
            </div>
          </div>
        </div>

        <div
          className={
            "mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8"
          }
        >
          <div
            className={
              "mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0"
            }
          >
            <div className={"text-4xl font-semibold lg:w-[45%]"}>
              Get the Skills you need for a
              <HightLightText text={"Job that is in demand"} />
            </div>

            <div className={"flex flex-col items-start gap-10 lg:w-[40%]"}>
              <p className="text-[16px]">
                {" "}
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.{" "}
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                {" "}
                Learn more{" "}
              </CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* section3 */}

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-8">
          {" "}
          review from Other Learners{" "}
        </h1>
        {/* Review Slider here */}
        <ReviewSlide />
      </div>

      {/* header  */}
        <Footer/>
      
    </div>
  );
};

export default Home;
