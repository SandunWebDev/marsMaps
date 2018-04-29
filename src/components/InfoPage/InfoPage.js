/**
 * This component render InfoPage. (/info Route)
 */

import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import "./InfoPage.css";

// Here goes each sections content. (Sections - Introduiction, Diagram, Facts, Missions)
// Introduction Section
const introduction = (
  <div>
    <img
      src="https://www.wpclipart.com/space/solar_system/Mars/Mars_clipart.png"
      alt=""
    />
    <p>
      Mars is the fourth planet from the Sun and is the second smallest planet
      in the solar system. Named after the Roman god of war, Mars is also often
      described as the “Red Planet” due to its reddish appearance. Mars is a
      terrestrial planet with a thin atmosphere composed primarily of carbon
      dioxide.
    </p>
    <p>
      The rotational period and seasonal cycles of Mars are likewise similar to
      those of Earth, as is the tilt that produces the seasons. Mars is the site
      of Olympus Mons, the largest volcano and second-highest known mountain in
      the Solar System, and of Valles Marineris, one of the largest canyons in
      the Solar System. The smooth Borealis basin in the northern hemisphere
      covers 40% of the planet and may be a giant impact feature. Mars has two
      moons, Phobos and Deimos, which are small and irregularly shaped. These
      may be captured asteroids, similar to 5261 Eureka, a Mars trojan.
    </p>

    <h2>Mars Planet Profile</h2>
    <ul>
      <li>Equatorial Diameter: 6,792 km</li>
      <li>Polar Diameter: 6,752 km</li>
      <li>Mass: 6.42 x 10^23 kg (10.7% Earth)</li>
      <li>Moons: 2 (Phobos & Deimos)</li>
      <li>Orbit Distance: 227,943,824 km (1.52 AU)</li>
      <li>Orbit Period: 687 days (1.9 years)</li>
      <li>Surface Temperature: -153 to 20 °C</li>
      <li>First Record: 2nd millennium BC</li>
      <li>Recorded By: Egyptian astronomers</li>
    </ul>
  </div>
);

// Diagram Section
const diagram = (
  <div>
    <img
      src="https://space-facts.com/wp-content/uploads/mars-size.png"
      alt=""
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/PIA19088-MarsCuriosityRover-MethaneSource-20141216.png/800px-PIA19088-MarsCuriosityRover-MethaneSource-20141216.png"
      alt=""
    />
  </div>
);

// Facts Section
const facts = (
  <div>
    <ul>
      <li>
        <h3>Mars and Earth have approximately the same landmass.</h3>
        <p>
          Even though Mars has only 15% of the Earth’s volume and just over 10%
          of the Earth’s mass, around two thirds of the Earth’s surface is
          covered in water. Martian surface gravity is only 37% of the Earth’s
          (meaning you could leap nearly three times higher on Mars).
        </p>
      </li>
      <li>
        <h3>Mars is home to the tallest mountain in the solar system.</h3>
        <p>
          Olympus Mons, a shield volcano, is 21km high and 600km in diameter.
          Despite having formed over billions of years, evidence from volcanic
          lava flows is so recent many scientists believe it could still be
          active.
        </p>
      </li>
      <li>
        <h3>Only 18 missions to Mars have been successful.</h3>
        <p>
          As of September 2014 there have been 40 missions to Mars, including
          orbiters, landers and rovers but not counting flybys. The most recent
          arrivals include the Mars Curiosity mission in 2012, the MAVEN
          mission, which arrived on September 22, 2014, followed by the Indian
          Space Research Organization’s MOM Mangalyaan orbiter, which arrived on
          September 24, 2014. The next missions to arrive will be the European
          Space Agency’s ExoMars mission, comprising an orbiter, lander, and a
          rover, followed by NASA’s InSight robotic lander mission, slated for
          launch in March 2016 and a planned arrival in September, 2016.
        </p>
      </li>
      <li>
        <h3>Mars has the largest dust storms in the solar system.</h3>
        <p>
          They can last for months and cover the entire planet. The seasons are
          extreme because its elliptical (oval-shaped) orbital path around the
          Sun is more elongated than most other planets in the solar system.
        </p>
      </li>
      <li>
        <h3>
          On Mars the Sun appears about half the size as it does on Earth.
        </h3>
        <p>
          At the closest point to the Sun, the Martian southern hemisphere leans
          towards the Sun, causing a short, intensely hot summer, while the
          northern hemisphere endures a brief, cold winter: at its farthest
          point from the Sun, the Martian northern hemisphere leans towards the
          Sun, causing a long, mild summer, while the southern hemisphere
          endures a lengthy, cold winter.
        </p>
      </li>
      <li>
        <h3>Pieces of Mars have fallen to Earth.</h3>
        <p>
          Scientists have found tiny traces of Martian atmosphere within
          meteorites violently ejected from Mars, then orbiting the solar system
          amongst galactic debris for millions of years, before crash landing on
          Earth. This allowed scientists to begin studying Mars prior to
          launching space missions.
        </p>
      </li>
      <li>
        <h3>Mars takes its name from the Roman god of war.</h3>
        <p>
          The ancient Greeks called the planet Ares, after their god of war; the
          Romans then did likewise, associating the planet’s blood-red colour
          with Mars, their own god of war. Interestingly, other ancient cultures
          also focused on colour – to China’s astronomers it was ‘the fire
          star’, whilst Egyptian priests called on ‘Her Desher’, or ‘the red
          one’. The red colour Mars is known for is due to the rock and dust
          covering its surface being rich in iron.
        </p>
      </li>
      <li>
        <h3>There are signs of liquid water on Mars.</h3>
        <p>
          For years Mars has been known to have water in the form of ice. The
          first signs of trickling water are dark stripes or stains on crater
          wall and cliffs seen in satellite images. Due to Mars’ atmosphere this
          water would have to be salty to prevent it from freezing or
          vaporising.
        </p>
      </li>
      <li>
        <h3>One day Mars will have a ring.</h3>
        <p>
          In the next 20-40 million years Mars’ largest moon Phobos will be torn
          apart by gravitational forces leading to the creation of a ring that
          could last up to 100 million years.
        </p>
      </li>
    </ul>
  </div>
);

// Mission Section
const missions = (
  <div>
    <p>
      Since the first spacecraft was sent to Mars was launched in 1960, there
      have been at least 68 missions that have been launched to the Red Planet
      or have flown by it on their way to other solar system bodies. If you
      count orbiting telescopes such as Hubble Space Telescope that have looked
      at Mars from near-Earth regions, the number is even higher. For this
      analysis, we will look only at missions sent directly to study Mars.
    </p>
    More than half of all missions sent to Mars have failed. Some were destroyed
    on launch, others were lost in space or on the planet. Yet, among all the
    missions, there have been successes along the way.
    <h3>The 1960s</h3>
    <p>
      The former Soviet Union started off the race to Mars with a series of Mars
      spacecraft. Among them, the Mars 1 mission was able to send back some data
      about the Red Planet before mission controllers lost contact with it a few
      months after launch. Mars 2 got to Mars safely, but its rover crashed
      landed on the surface. Mars 3, 4, 5 and 6 were partially successful, while
      Mars 7’s lander had separation issues and never made it to the surface.
      Throughout the period of the 1960s and 1980s, the former Soviet Union and
      the U.S. were in something of a race to send missions to Mars.
    </p>
    <p>
      The first U.S. mission to successfully reach Mars was Mariner 4 in 1964.
      It flew by the planet and returned the first-ever images of Mars and
      hinted at interesting surface features. The Mariner missions had several
      more successes, including Mariners 6, 7, and 9. The first two were flybys
      that returned images and data.
    </p>
    <h3>The 1970s And 1980s</h3>
    <p>
      Mariner 9 arrived during a planet-wide dust storm and successfully put
      itself into orbit. After the dust settled, the spacecraft returned 7,329
      images that revealed 85 percent of the surface of the planet. Those images
      revealed surface features familiar to us on Earth, including river beds,
      craters, flood plains, canyons, and volcanic features.
    </p>
    <p>
      In 1976, the U.S. succeeded in putting two Viking landers on the surface
      of Mars, linked to Earth via their orbiters. These missions lasted for
      several years, and supplied surface images, atmospheric data, and orbiter
      mapping. After the Viking missions were complete, there was a mission
      hiatus for several years until the Soviets launched two Phobos Missions in
      1988. They lost contact with Phobos 1, while Phobos 2 was able to enter
      Mars orbit and return some data before controllers lost contact with the
      spacecraft.
    </p>
    <h3>The 1990s</h3>
    <p>
      The bad luck with missions continued into the 1990s with the loss of
      NASA’s Mars Observer mission in 1993. An investigation suggested that a
      fuel leak may have caused the mission to fail. Mars 96 failed at launch in
      1996, the Japanese Nozomi (Planet B) mission never entered Mars orbit. The
      Mars Climate Orbiter (NASA) crashed to the Martian surface in September
      1999, and an investigation showed that a metric-English measurement mixup
      doomed the spacecraft. Not long after that, NASA’s Mars Polar Lander
      crashed to the surface in December 1999, largely due to an equipment
      failure.
    </p>
    <p>
      The successful missions of the 1990s included NASA’s Mars Global Surveyor,
      which spent nearly 10 years mapping and imaging the planet from orbit. It
      was followed by the Mars Pathfinder mission, the first to set a rover down
      on the planet. It lasted for three months and was the first mission to
      drill into rocks in an effort to determine their mineralogy.
    </p>
    <h3>The 21st Century</h3>
    <p>
      In the first two decades of the 21st century, space agencies have had more
      successful missions. NASA’s Mars Odyssey, the European Space Agency’s Mars
      Express led off the march to Mars. They are still currently operating as
      of this writing.
    </p>
    <p>
      The Mars Exploration Rovers A and B, also known as Spirit and Opportunity,
      settled onto the Martian surface in 2004 and immediately began searching
      for evidence of past water on the planet. Spirit lasted for about 7 years
      and Opportunity is still operating. Both rovers made important discoveries
      about the surface of Mars and the existence of water there in the distant
      past. Their images and data have given scientists valuable long-term daily
      looks at the weather and climate of the planet, as well.
    </p>
    <p>
      The Mars Reconnaissance Orbiter, launched in 2005 has continually mapped
      and imaged the planet at high resolution since then. It, along with other
      orbiters, provides a useful radio link back to Earth. Mars Phoenix landed
      on the Red Planet and spent several months cataloguing conditions near the
      Mars northern polar regions.
    </p>
    <p>
      The Russians, Chinese and British had a run of back luck with spacecraft
      in 2003 and 2011 respectively. The Beagle Rover made it to Mars, but
      failed upon landing. The Fobos-Grunt and Yinghuo-1 mission fell back to
      Earth after a launch failure.
    </p>
    <p>
      In more recent years, the U.S. Mars Curiosity rover has been a huge
      success, returning images from the surface as well as detailed mineralogy
      of the rocks where it landed. It continues to explore and is currently
      heading up a series of hills near its landing area.
    </p>
    <p>
      The two most recent missions to arrive at Mars (September 2014) are the
      Indian Space Research Organization’s Mars Orbiter Mission (nicknamed
      “Mom”) and the MAVEN mission. MOM is a proof of concept mission returning
      images of the planet and data about the atmosphere. MAVEN is an
      atmospheric studies satellite that is sampling the upper atmosphere in an
      effort to understand how the planet is losing its atmosphere (and how it
      may have lost water in the past).
    </p>
  </div>
);

class InfoPage extends Component {
  // Componet state - keep trackof witch section is cliked and witch articles go with it.
  state = { activeItem: "Introduction", activeSection: introduction };

  // Handle section click
  handleItemClick = (e, { name, section }) =>
    this.setState({ activeItem: name, activeSection: section });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="InfoPage">
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="Introduction"
                  active={activeItem === "Introduction"}
                  onClick={this.handleItemClick}
                  section={introduction}
                />
                <Menu.Item
                  name="Diagram"
                  active={activeItem === "Diagram"}
                  onClick={this.handleItemClick}
                  section={diagram}
                />
                <Menu.Item
                  name="Facts"
                  active={activeItem === "Facts"}
                  onClick={this.handleItemClick}
                  section={facts}
                />
                <Menu.Item
                  name="Missions"
                  active={activeItem === "Missions"}
                  onClick={this.handleItemClick}
                  section={missions}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={13}>
              <Segment className="InfoPage__section">
                {this.state.activeSection}
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default InfoPage;
