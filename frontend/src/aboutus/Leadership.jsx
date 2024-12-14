import { motion, useScroll, useTransform } from "framer-motion";
import React, { lazy, Suspense, useRef } from "react";

// Lazy loaded ImageComponents
const ImageComponents = lazy(() => Promise.resolve({
  default: ({ team }) => (
    <div className="w-full h-full">
      <img
        src={team.image}
        alt="Team member"
        className="w-full h-full object-cover"
      />
    </div>
  )
}));

// Lazy loaded TeamMemberCard
const TeamMemberCard = lazy(() => Promise.resolve({
  default: ({ style, className, team }) => (
    <motion.div style={style} className={className}>
      <ImageComponents team={team} />
    </motion.div>
  )
}));


// Loading fallback component
const LoadingFallback = () => (
  <div className="text-white text-center">Loading...</div>
);

// Team member data
const teamData = {
  dharan: {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop",
  },
  teammember: [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop",
    },
  ]
};

const MeetOurTeam3 = () => {
  const fullRef = useRef();
  const lastRef = useRef();

  const fullRefUseScroll = useScroll({
    target: fullRef,
    offset: ["0 0.5", "1 0"],
  });

  // Animation constants
  const endTopState = "70%";
  const endLeftState = "50%";
  const endScale = 1.5;
  const upState = "-50%";
  const point = "0.88";

  // Animation timing configurations
  const createTimingConfig = (start, mid1, mid2, end) => ({
    timing: [0, 0.1, mid1, mid2, point, 1],
    top: ["175%", "25%", "25%", endTopState, endTopState, upState],
    left: [`${start}%`, `${start}%`, `${start}%`, endLeftState, endLeftState, endLeftState],
    scale: [1, 1, 1, endScale, endScale, endScale]
  });

  // Create transform configurations for each section
  const sections = [
    createTimingConfig(20, 0.12, 0.3),    // Section 1
    createTimingConfig(40, 0.3, 0.48),     // Section 2
    createTimingConfig(60, 0.48, 0.66),    // Section 3
  ];

  // Create transform functions for each section
  const sectionTransforms = sections.map(section => ({
    top: useTransform(fullRefUseScroll.scrollYProgress, section.timing, section.top),
    left: useTransform(fullRefUseScroll.scrollYProgress, section.timing, section.left),
    scale: useTransform(fullRefUseScroll.scrollYProgress, section.timing, section.scale)
  }));

  // Special transforms for section 8
  const timing8 = [0, 0.1, 0.8, 0.87, point, 1];
  const section8Transform = {
    top: useTransform(fullRefUseScroll.scrollYProgress, timing8,
      ["225%", "75%", "75%", endTopState, endTopState, upState]),
    left: useTransform(fullRefUseScroll.scrollYProgress, timing8,
      ["90%", "90%", "90%", endLeftState, endLeftState, endLeftState]),
    scale: useTransform(fullRefUseScroll.scrollYProgress, timing8,
      [1, 1, 1, endScale, endScale, endScale])
  };

  // Transform for section 9
  const topSection9 = useTransform(
    fullRefUseScroll.scrollYProgress,
    [0, 0.1, 0.86, 0.88, 1],
    ["100%", "100%%", "100%", "60%", "-75%"]
  );

  return (
    <>
      {/* Desktop Layout */}
      <div ref={fullRef} className="w-full min-h-screen lg:block hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-[50vh]"></div>
        ))}
      </div>

      <div ref={lastRef} className="w-full h-screen lg:block hidden"></div>

      {/* Team Member Cards */}
      {sectionTransforms.map((transform, index) => (
        <Suspense key={index} fallback={<LoadingFallback />}>
          <TeamMemberCard
            style={{
              top: transform.top,
              x: "-50%",
              y: "-50%",
              scale: transform.scale,
              left: transform.left,
            }}
            className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-dharangradient3 fixed rounded-[15px] overflow-hidden"
            team={teamData.teammember[index]}
          />
        </Suspense>
      ))}

      {/* Leader Card */}
      <Suspense fallback={<LoadingFallback />}>
        <TeamMemberCard
          style={{
            top: section8Transform.top,
            x: "-50%",
            y: "-50%",
            scale: section8Transform.scale,
            left: section8Transform.left,
          }}
          className="xl:w-[200px] xl:h-[285px] lg:w-[150px] lg:h-[215px] bg-red-800 fixed rounded-[15px] overflow-hidden"
          team={{ image: teamData.dharan.image }}
        />
      </Suspense>

      {/* Title Section */}
      <motion.div
        style={{
          top: topSection9,
          left: "62%",
        }}
        className="w-[300px] h-[285px] fixed rounded-[15px] overflow-hidden"
      >
        <h1 className="text-[3vw] leading-[4.2vw] text-[#fff]">
          Leaders Democratising Education
        </h1>
      </motion.div>

      {/* Mobile Layout */}
      <div className="lg:hidden block p-4">
        <h1 className="text-2xl text-white mb-8">Leaders Democratising Education</h1>
        <div className="flex flex-col gap-6">
          {teamData.teammember.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full h-[300px] rounded-[15px] overflow-hidden"
            >
              <Suspense fallback={<LoadingFallback />}>
                <ImageComponents team={member} />
              </Suspense>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: teamData.teammember.length * 0.2 }}
            className="w-full h-[300px] rounded-[15px] overflow-hidden"
          >
            <Suspense fallback={<LoadingFallback />}>
              <ImageComponents team={{ image: teamData.dharan.image }} />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam3;
