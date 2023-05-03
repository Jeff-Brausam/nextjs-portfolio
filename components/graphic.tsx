import { styled } from "@stitches/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";

export interface GraphicType {
  title: string;
  description: string;
  image?: {
    src: string;
    width: string;
    height: string;
  };
}

const imageWrapper = (image: {
  src: string;
  width: string;
  height: string;
}) => (
  <StyledProjectImage
    src={image.src}
    width={image.width}
    height={image.height}
  />
);

export const Graphic: React.FC<GraphicType> = ({
  title,
  description,
  image,
}) => {
  return (
    <ProjectContainer>
      <div>
        {imageWrapper(image)}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled("section", {
  padding: "1rem",
  // margin: ".2rem",
  marginBottom: "2rem",
  flex: "100%",

  boxSizing: "border-box",
  // display: "flex",
  // margin: styles.spacing.size10,
  // alignItems: "center",

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
