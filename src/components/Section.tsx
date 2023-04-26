import { isValidMotionProp, motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Section = ({
  children,
  delay = 0,
}: React.PropsWithChildren<{ delay: number }>) => (
  <StyledDiv
    variants={{
      hidden: { opacity: 0, y: 10 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 1.5,
        },
      },
    }}
    initial="hidden"
    animate="show"
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
