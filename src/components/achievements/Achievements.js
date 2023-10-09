import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import crackathon from "../../Assets/Projects/crackathon.jpeg";
import AchievementCard from "./AchievementCard";
import morgan from "../../Assets/morgan.jpg"
import cpi from "../../Assets/Projects/cpi.png"
import kanpur from "../../Assets/Projects/kanpur.jpeg"
import amritapuri from "../../Assets/Projects/amritapuri.jpeg"
import ignite from "../../Assets/Projects/ignite.jpeg"
import feb from "../../Assets/Projects/feb.png"
import march from "../../Assets/Projects/march.png"
import semicode from "../../Assets/Projects/semicode.jpg"
import newton from "../../Assets/Projects/newton.png"
import ust from "../../Assets/Projects/Dcode.jpg"
import cf from "../../Assets/Projects/cf.webp"
function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
         <strong className="purple"> Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things i've achieved till now..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={morgan}
              title="Morgan Stanley"
              description="Tech Summer Analyst,
              May 2023 - July 2023
              "
            />
          </Col>

          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={cpi}
              isBlog={false}
              title="Competitive Programming Initiative"
              description="Problem setter intern , Nov 2022 - Dec 2022"
            //  ghLink="https://github.com/https://github.com/ryuusama09/TrendSetters"
             
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={ust}
              isBlog={false}
              title="UST D3CODE 2023"
              description="Winners of India's largest hackathon"
            //  ghLink="https://github.com/https://github.com/ryuusama09/TrendSetters"
             
            />
          </Col>

          <Col md={4} className="achievement-card">
            <AchievementCard
              imgPath={kanpur}
              isBlog={false}
              title="ICPC Asia-west Regionals 22"
              description=" Kanpur-Mathura doublesite ,Asia west rank  57"
              
                         
            />
          </Col>

          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={amritapuri}
              title="ICPC Asia-west Regionals 21"
              description="Amritapuri doublesite ,Asia west rank  61"
              
            />
          </Col>

          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={ignite}
              isBlog={false}
              title="Ignite 4.0"
              description=" Achieved overall Rank - 1"
              
             // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="achievement-card">
          <AchievementCard
              imgPath={crackathon}
              isBlog={false}
              title="Crackathon 4.0"
              description="Achieved overall Rank-3"
             
                    //<--------Please include a demo link here 
            />
          </Col>
         
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={semicode}
              isBlog={false}
              title="Semicode 2.0"
              description="Achieved overall Rank-1"
              
             // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={newton}
              isBlog={false}
              title="Newton School CodeRush march"
              description="Global Rank 76 out of 36000+ registered particpants"
              Link = "https://my.newtonschool.co/course/xs63bc4sdnpa/assignment/efkd007y05tc/dashboard?tab=leaderboard"
        />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={newton}
              isBlog={false}
              title="Newton School CodeCrush"
              description="Global Rank 135 out of 12000+ registered particpants"
              Link = "https://my.newtonschool.co/course/5t1yg72fprau/assignment/6sba8ck03i42/dashboard?tab=leaderboard"
             // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="achievement-card">
            <AchievementCard
             imgPath={cf}
              isBlog={false}
              title="Codeforces"
              description="Global Rank 471 out of 30000+ registered particpants in round 817"
              Link = "https://codeforces.com/contest/1722/standings/participant/139254037#p139254037"
             // <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
