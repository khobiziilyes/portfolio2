import Image from "next/image";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "@/components/Layout";
import Paragraph from "@/components/Paragraph";
import { BioSection, PinkBioYear } from "@/components/BioItems";
import Section from "@/components/Section";
import AppLink from "@/components/AppLink";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container maxWidth="container.md">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ilyes K.
          </Heading>

          <p>Senior Full Stack Web Developer.</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>

        <Box whiteSpace="pre-wrap">
          <Paragraph>
            {`
As a Full Stack Developer possessing 3 years of professional experience in constructing scalable, efficient, and user-centric web applications, I am confident in my capacity to contribute positively to your projects. My expertise encompasses both front-end and back-end development, enabling me to transform your concepts into reality effectively.
            
My proficiencies are grounded in employing contemporary technologies to develop dynamic and adaptable web pages. I have successfully executed numerous projects, varying from straightforward websites to intricate web applications, consistently garnering positive client feedback for my meticulousness, adherence to deadlines, and exceptional communication skills. I am perpetually eager to expand my knowledge and stay current with the latest developments in web development, demonstrating swift adaptability to new technologies.
            
I look forward to collaborate with you to create something exceptional!
            `}
            <br></br>
          </Paragraph>
        </Box>
        <Box my={4} textAlign="center">
          <AppLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              What have I done?
            </Button>
          </AppLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <PinkBioYear>2012</PinkBioYear>
          Used a computer for the first time.
        </BioSection>

        <BioSection>
          <PinkBioYear>2014</PinkBioYear>
          Started learning VB.NET by curiosity to develop a malware.
        </BioSection>

        <BioSection>
          <PinkBioYear>2015</PinkBioYear>
          The malware needed a backend so I started learning PHP.
        </BioSection>

        <BioSection>
          <PinkBioYear>2017</PinkBioYear>
          Switched to ElectronJS, which led me to learn HTML, CSS, JS, NodeJS.
        </BioSection>

        <BioSection>
          <PinkBioYear>2018</PinkBioYear>
          Started learning ReactJS, and I fell in love with it.
        </BioSection>

        <BioSection>
          <PinkBioYear>2020</PinkBioYear>
          Joined Yobi as a Full Stack Developer.
        </BioSection>

        <BioSection>
          <PinkBioYear>2022</PinkBioYear>
          Joined Cureety as a Senior Full Stack Developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What do I master
        </Heading>

        <Paragraph>
          <strong>Frontend:</strong> ReactJS, ElectronJS, NextJS, Redux,
          Redux-Saga, Redux-Thunk, React-Query, React-Router, React-Bootstrap,
          Chakra-UI, Material-UI, TailwindCSS, Styled-Components, Emotion, HTML,
          CSS, JavaScript, TypeScript, jQuery, Bootstrap, MaterializeCSS, Bulma,
          AntDesign, SemanticUI, Webpack, Babel, GatsbyJS, GraphQL, Apollo,
          Jest, Cypress, Storybook, Framer Motion.
          <br />
          <br />
          <strong>Backend:</strong> NodeJS, ExpressJS, NestJS, PHP, Laravel,
          MySQL, PostgreSQL, Redis, Firebase, Docker, SocketIO, REST, GraphQL,
          Apollo, Prisma, Sequelize, Mongoose, Python, Flask.
          <br />
          <br />
          <strong>Mobile:</strong> React Native, Expo, Swift, Ionic, Capacitor.
          <br />
          <br />
          <strong>Other:</strong> Git, GitHub, GitLab, BitBucket, Jira, Trello,
          Asana, ClickUp, Slack, Discord, Zoom, Google Meet, Microsoft Teams,
          Notion, Confluence, Raspberry Pi, Arduino.
          <br />
          <br />
          <strong>Soft Skills:</strong> Communication, Teamwork, Problem
          Solving, Time Management, Adaptability, Creativity, Work Ethic,
          Interpersonal Skills, Collaboration, Analytical Skills, Critical
          Thinking, Leadership, Conflict Resolution, Emotional Intelligence,
          Stress Management, Active Listening, Empathy, Patience, Open-Minded,
          <br />
          <br />
          <strong>Languages:</strong> Arabic (Native), French (Native), English
          (Fluent), German (Beginner).
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Profiles
        </Heading>

        <List>
          <ListItem>
            <Link href="https://github.com/khobiziilyes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IconBrandGithub />}
              >
                @khobiziilyes
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/khobizi-ilyes/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IconBrandLinkedin />}
              >
                Ilyes Khobizi
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box my={4} textAlign="center">
          <AppLink
            href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Download Resume
            </Button>
          </AppLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
