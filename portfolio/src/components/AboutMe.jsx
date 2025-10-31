import React, { useState } from "react";

const AboutMe = () => {
  let [isExpanded, setIsExpanded] = useState(true);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="z-10 flex">
      <div
        className={` info-container mt-10 overflow-y-auto custom-scrollbar transition-all transition-discrete duration-700 bold text-neutral-200`}
      >
        <h1 className=" pl-3 text-3xl pt-2 h-14">About Me</h1>

        <p className="p-2 pt-3 mb-3 text-lg">
          I'm a junior software developer from Brazil, I'm currently in my last
          year of high school and I'm looking forward to getting in the tech
          industry with a part-time job or internship, I have been studying
          programming for over a year now and I'm very eager to learn more and
          grow my skills.
        </p>
        <p className="text-xl p-2">Hobbies:</p>
        <p className="text-lg p-2">
          I like videogames and music(so original btw), the type of games I like
          is mainly RPGs but I also like some hack-slash or adventure games
        </p>
        <p className="text-lg p-2">
          I like music a lot, ranging from soothing styles like dreampop and
          antifolk to more intense genres like heavy metal and breakcore. Aside
          from these ones I mentioned, I like alt hip hop, alt rock, garage
          rock, pop-funk, blues rock and more (are you actually still reading
          this?). I also like cartoons and anime (kinda)
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
