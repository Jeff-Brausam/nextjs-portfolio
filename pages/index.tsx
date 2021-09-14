import Head from "next/head";
import { Header } from "../components/header";
import { Project } from "../components/project";
import { styled } from "@stitches/react";
import styles from "../styles/index";
import { ProjectData } from "../data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeff Brausam Portfolio</title>
        <script src="ac_quicktime.js" type="text/javascript"></script>
        <script src="http://api.html5media.info/1.1.8/html5media.min.js"></script>
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
          <div>
            <h3
              style={{
                fontSize: styles.typography.fontsize.text2xl.size,
                fontWeight: 500,
                marginTop: styles.spacing.size12,
                marginBottom: styles.spacing.size4,
              }}
            >
              Featured Work
            </h3>
            <hr style={{ color: styles.color.lime400, width: "100%" }} />
          </div>
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
        </Container>
      </main>
    </div>
  );
}

const Container = styled("div", {
  maxWidth: styles.layout.container.medium,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
