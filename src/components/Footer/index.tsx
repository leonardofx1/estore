'use client'
import styles from "./styles.module.scss";
import leo from "../../../public/leo.png";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <section className={styles.wrapperImgFooter}>
          <Image src={leo} alt="foto do criador do site." />
        </section>

        <a href="https://github.com/leonardofx1" target="blank">
     
          <FaGithub className={styles.gitHub} />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-nunes-freitas-798ba1239/" target="blank">
          <FaLinkedinIn className={styles.linkedin} />
        </a>
      </div>
    </footer>
  );
};
