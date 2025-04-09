import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    '.Net',
    'SQL',
    'Docker',
    'kubernetes',
    'Powershell',
    'bash',
    'Python',
    'Typescript',
    'Blazor',
    'CosmosDB',
    'Azure',
    'AWS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! My name is Ahmed Magdi, and I’ve been passionate about technology and databases
              since 2008, when I began my career through a scholarship from the Egyptian Ministry of
              Communication for MS SQL Server administration and software development.
            </p>

            <p>
              Over the years, I’ve grown into a results-driven and experienced Database
              Administrator with more than 7 years of hands-on expertise. I specialize in managing
              and optimizing database structures using a wide range of technologies, including MS
              SQL Server, T-SQL, LINQ, SSIS, AOAG, and Microsoft Entity Framework.
            </p>

            <p>
              Alongside my DBA work, I’ve gained strong experience in{' '}
              <a href="https://www.docker.com/">Docker</a> and{' '}
              <a href="https://kubernetes.io/">Kubernetes</a>, using them extensively to
              containerize and deploy scalable applications. I’ve built multiple backend services
              using .NET REST APIs and developed front-end interfaces with Microsoft Blazor. I’m
              also an active member of the open-source community{' '}
              <a href="https://github.com/hassanhabib/The-Standard">The Standard</a>, where we
              collaborate on clean architecture and development best practices.
            </p>

            <p>
              My focus has always been on building reliable, secure, and high-performing database
              solutions. I’ve led initiatives to improve backup and recovery strategies, ensured
              compliance with standards like ISO 27001, GDPR, PCI-DSS, and implemented robust
              security protocols. I also enjoy supporting application development with ASP, .NET,
              and MVC.
            </p>

            <p>
              I’ve had the opportunity to collaborate with cross-functional teams, manage database
              infrastructure, and contribute to secure network environments. I’ve even taken on
              out-of-hours support to keep systems running smoothly and clients happy.
            </p>

            <p>
              Currently, I’m pursuing my master’s degree at the{' '}
              <a href="https://igsr.alexu.edu.eg/index.php/en/">
                Institute of Graduate Studies and Research – Alexandria University
              </a>
              , continuing to deepen my knowledge and stay ahead of emerging trends in the field.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
