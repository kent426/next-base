import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MediaQueryKey } from "../styles/media";

const Home: NextPage = () => {
  return (
    <div
      css={(theme) => css`
        width: 100%;
        height: 100vh;
        background-color: ${theme.colors.black};
      `}
    >
      <span
        css={(theme) => css`
          color: ${theme.colors.white};
          ${theme.fontSize.std1}
        `}
      >
        {"what is up"}
      </span>
    </div>
  );
};

export default Home;
