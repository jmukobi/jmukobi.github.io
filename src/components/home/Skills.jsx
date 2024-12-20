import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, softwareSkills, programmingSkills, fabricationSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y < skillsTabRef.current.offsetTop + skillsTabRef.current.offsetHeight) {
        setIsScrolled(true);
      }
    },
    [],
    skillsTabRef
  );

  console.log('Skills component props:', { heading, softwareSkills, programmingSkills, fabricationSkills });

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="software-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="software-skills"
            title="Software"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softwareSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="programming-skills"
            title="Programming"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={programmingSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="fabrication-skills"
            title="Fabrication"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={fabricationSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
