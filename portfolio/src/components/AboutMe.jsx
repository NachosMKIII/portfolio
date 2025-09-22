import React, { useState } from "react";

const AboutMe = () => {
  let [isExpanded, setIsExpanded] = useState(true);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="w-[50vw] z-10 flex">
      <div
        className={`bg-gradient-to-b info-container from-neutral-950 to-neutral-800 ml-12 mt-20 ${
          isExpanded
            ? "w-100 h-200 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
            : "w-40 h-14"
        } overflow-hidden transition-all transition-discrete duration-700 bold text-neutral-200`}
      >
        <h1
          className="bg-neutral-900/50 pl-3 text-3xl pt-2 h-14 cursor-pointer"
          onClick={toggleExpand}
        >
          About Me
        </h1>

        <p className="p-2 pt-3 mb-3 text-lg">
          I'm a junior software developer from Brazil, i'm currently in my last
          year of high school and i'm looking forward to getting in the tech
          industry with a part-time job or internship, i have been studying
          programming for over a year now and i'm very eager to learn more and
          grow my skills.
        </p>
        <p className="text-xl p-2">Hobbies:</p>
        <p className="text-lg p-2">
          I like videogames and music(so original btw), the type of games i like
          is mainly RPGs but i also like some hack-slash or adventure games
        </p>
        <p className="text-lg p-2">
          I like music a lot, ranging from soothing styles like dreampop and
          antifolk to more intense genres like heavy metal and breakcore. Aside
          from these ones i mentioned, i like alt hip hop, alt rock, garage
          rock, pop-funk, blues rock and more. (are you actually still reading
          this?)";
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
