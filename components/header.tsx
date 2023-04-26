import Image from "next/image";
import Link from "next/link";
import { styled } from "@stitches/react";
import styles from "../styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div
        style={{
          borderRadius: "50%",
          margin: "2rem 2rem 2rem 0",
        }}
      >
        <StyledProfilePic
          src="/images/profilepic.jpg"
          alt="me"
          width="120"
          height="120"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <strong
          style={{ fontSize: "1.8rem", margin: 0, color: styles.color.black }}
        >
          Jeff Brausam
        </strong>
        <p
          style={{
            color: styles.color.gray800,
            margin: `${styles.spacing.size1} 0`,
          }}
        >
          Software Engineer
        </p>
        <div
          style={{
            margin: `${styles.spacing.size1} 0`,
            color: styles.color.gray800,
          }}
        >
          <Link href="https://github.com/Jeff-Brausam" passHref>
            <StyledLink>Github</StyledLink>
          </Link>{" "}
          |{" "}
          <Link
            href="https://www.linkedin.com/in/jeff-brausam-7584a2125/"
            passHref
          >
            <StyledLink>Linkedin</StyledLink>
          </Link>{" "}
          |{" "}
          <Link href="mailto:jeffbrausam@gmail.com" passHref>
            <StyledLink>Email</StyledLink>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled("header", {
  background: "hsl(48, 50%, 96%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // borderBottom: "4px solid hsl(161, 93%, 30%)",
});

const StyledProfilePic = styled(Image, {
  borderRadius: "50%",
  boxShadow: styles.effect.boxshadow.shadowmd,
});

const StyledLink = styled("a", {
  "&:hover": {
    color: styles.color.emerald600,
    cursor: "pointer",
  },
});
