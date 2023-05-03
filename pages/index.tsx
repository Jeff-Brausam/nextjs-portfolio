import Head from "next/head";
import { Header } from "../components/header";
import { Project } from "../components/project";
import { Graphic } from "../components/graphic";
import { styled } from "@stitches/react";
import styles from "../styles/index";
import { GraphicData, ProjectData } from "../data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeff Brausam Portfolio</title>
        {/* <script src="ac_quicktime.js" type="text/javascript"></script> */}
        {/* <script src="http://api.html5media.info/1.1.8/html5media.min.js"></script> */}
        <meta name="description" content="My portfolio" />
      </Head>
      <Header />

      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <div
            style={{
              marginBottom: "2rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: styles.typography.fontsize.text2xl.size,
                fontWeight: 500,
                marginTop: styles.spacing.size12,
                marginBottom: styles.spacing.size2,
              }}
            >
              Graphic Design
            </h3>
            <div style={{ width: "50%" }}>
              <hr
                style={{
                  backgroundColor: styles.color.gray300,
                  height: ".1rem",
                  border: "none",
                  // borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <StyledGraphicGrid>
            {GraphicData.map((project, i) => {
              return (
                <Graphic
                  key={i}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              );
            })}
          </StyledGraphicGrid>
          <div
            style={{
              marginBottom: "2rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: styles.typography.fontsize.text2xl.size,
                fontWeight: 500,
                marginTop: styles.spacing.size12,
                marginBottom: styles.spacing.size2,
              }}
            >
              Websites
            </h3>
            <div style={{ width: "50%" }}>
              <hr
                style={{
                  backgroundColor: styles.color.gray300,
                  height: ".1rem",
                  border: "none",
                  // borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <StyledGrid>
            {ProjectData.map((project, i) => {
              return (
                <Project
                  key={i}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  video={project.video}
                  link={project.link}
                />
              );
            })}
          </StyledGrid>
        </Container>
      </main>
    </div>
  );
}

const Container = styled("div", {
  maxWidth: styles.layout.container.xLarge,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const StyledGrid = styled("div", {
  // display: "grid",
  // gridTemplateColumns: "repeat(2, minmax(70%, auto))",
  // width: "100%",
  // maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10px",
  // width: "100%",
  // maxWidth: "100%",
});

const StyledGraphicGrid = styled("div", {
  // display: "grid",
  // gridTemplateColumns: "repeat(2, minmax(70%, auto))",
  // width: "100%",
  // maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  // flexWrap: "wrap",
  // columnGap: "10px",
  // width: "100%",
  // maxWidth: "100%",
});
