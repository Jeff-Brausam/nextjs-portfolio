import { styled } from "@stitches/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";

export interface ProjectType {
  title: string;
  description: string;
  video?: {
    src: string;
    type: string;
  };
  image?: {
    src: string;
  };
  link?: {
    demo: string;
    repo: string;
  };
}

const videoWrapper = (video: { src: string; type: string }) => {
  return (
    <VideoWrapper>
      <StyledVideo playsInline loop autoPlay muted src={video.src}>
        {/* <source src={} type={video.type} /> */}
      </StyledVideo>
    </VideoWrapper>
  );
};

const imageWrapper = (image: { src: string }) => (
  <StyledProjectImage src={image.src} width={1400} height={720} />
);

export const Project: React.FC<ProjectType> = ({
  title,
  description,
  video,
  image,
  link,
}) => {
  return (
    <ProjectContainer>
      <div>
        {video ? videoWrapper(video) : imageWrapper(image)}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      {link && (
        <LinkContainer>
          <Link href={link.demo}>
            <a>
              <StyledProjectButton>Demo</StyledProjectButton>
            </a>
          </Link>
          <Link href={link.repo}>
            <a>
              <StyledProjectButton>Repo</StyledProjectButton>
            </a>
          </Link>
        </LinkContainer>
      )}
    </ProjectContainer>
  );
};

const ProjectContainer = styled("section", {
  padding: "1rem",
  display: "flex",
  margin: styles.spacing.size10,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: styles.effect.boxshadow.shadowmd,
});

const VideoWrapper = styled("div", {
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledVideo = styled("video", {
  maxWidth: "100%",
  flex: styles.layout.flex.basis.flex1,
});

const StyledProjectImage = styled(Image, {
  border: "1px solid red",
  margin: styles.spacing.size8,
  boxShadow: styles.effect.boxshadow.shadowmd,
});

const StyledProjectButton = styled("button", {
  width: styles.sizing.width.size14,
  height: styles.sizing.height.size6,
  borderRadius: "25px",
  border: `1px solid ${styles.color.gray500}`,
  background: "white",
  color: styles.color.gray500,
  "&:hover": {
    color: styles.color.lime600,
    border: `1px solid ${styles.color.lime600}`,
    cursor: "pointer",
  },
});

const Title = styled("h3", {
  marginBottom: "0",
  color: styles.color.gray500,
  fontWeight: 500,
});

const Description = styled("p", {
  color: styles.color.gray400,
  marginTop: styles.spacing.size2,
  fontSize: styles.typography.fontsize.textsm.size,
});

const LinkContainer = styled("div", {
  width: styles.sizing.width.size44,
  display: "flex",
  justifyContent: "space-evenly",
  alignSelf: "flex-end",
});
