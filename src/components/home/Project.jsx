import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './Project.css'; // Import the CSS file for styling
import { projects } from '../../editable-stuff/config'; // Import the projects config

const Project = () => {
  const { username, length, specfic } = projects;
  const allReposAPI = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `https://api.github.com/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill({
    name: 'Project Name',
    description: 'Project Description',
    svn_url: '#',
    stargazers_count: 0,
    languages_url: '#',
    pushed_at: 'Date',
  });

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList.slice(0, 4)); // Ensure the array is limited to 4 items
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Container fluid id="projects" className="bg-light m-0 p-5">
      <Container>
        <h2 className="display-4 pb-5 text-center">Recent Projects</h2>
        
        {/* Stanford Student CubeSat Team Section */}
        <Row className="mb-5">
          <Col md={6} className="text-center">
            <Figure>
              <Figure.Image
                src={require('../../assets/img/satellites_team.jpeg')}
                className="rounded img-fluid mb-3"
                alt="Stanford Student CubeSat Team"
              />
              <Figure.Caption>
                Sapling 1 Deployer Integration
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={6}>
            <h3>Stanford Student CubeSat Team</h3>
            <p className="lead">
              I led the Stanford Student CubeSat team in launching the first two satellites made entirely by Stanford Students, Sapling 1 and 2. Both were <a href="https://ssisatellites.notion.site/Sapling-4d49231940b94453b1b8a55e5b9631ff" target="_blank" rel="noreferrer noopener">open source</a> satellite bus test missions, demonstrating ultra-low-cost space hardware. 
            </p>
            <p className="lead">
              Sapling 1 made it to space in January, 2023 but was never deployed due to a launch provider failure. My co-lead and I signed another launch contract for the very next SpaceX rideshare mission, and we successfully launched and operated an upgraded version of Sapling in April, 2023.
            </p>
            <h4>Read news coverage:</h4>
            <ul>
              <li><a href="https://news.satnews.com/2023/01/03/stanfords-sapling-sempervirens-smallsat-to-launch-on-the-spacex-transporter-6-mission/" target="_blank" rel="noreferrer noopener">SatNews</a></li>
              <li><a href="https://stanforddaily.com/2023/04/16/stanford-space-initiative-satellite-successfully-launched-into-orbit/" target="_blank" rel="noreferrer noopener">The Stanford Daily</a></li>
              <li><a href="https://slab.stanford.edu/news/news-sssi-successfully-launched-1u-cubesat" target="_blank" rel="noreferrer noopener">Space Rendezvous Lab</a></li>
              <li><a href="https://www.stanfordssi.org/blog/08d690e1-2bb1-4990-9eb7-02e39cb706dc" target="_blank" rel="noreferrer noopener">Stanford Student Space Initiative</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={3} className="text-center">
            <Figure>
              <Figure.Image
                src={require('../../assets/img/sapling_1.jpg')}
                className="rounded img-fluid mb-3"
                alt="Sapling 1"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Figure.Caption>
                Sapling 1
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="text-center">
            <Figure>
              <Figure.Image
                src={require('../../assets/img/falcon_launch.png')}
                className="rounded img-fluid mb-3"
                alt="Falcon Launch"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Figure.Caption>
                Falcon 9 Launch with Sapling 2 Onboard
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="text-center">
            <Figure>
              <Figure.Image
                src={require('../../assets/img/sapling_2.jpg')}
                className="rounded img-fluid mb-3"
                alt="Sapling 2"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Figure.Caption>
                Sapling 2
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="text-center">
            <Figure>
              <Figure.Image
                src={require('../../assets/img/vibe_test.jpg')}
                className="rounded img-fluid mb-3"
                alt="Sapling 3"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Figure.Caption>
                Sapling 2 Before Vibration Testing
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>

        {/* Recent GitHub Projects Section */}
        <h2 className="display-4 pb-5 text-center">Recent GitHub Projects</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard key={index} value={project} />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard key={index} value={project} />
            ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Project;
