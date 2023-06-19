import Image from "next/image";

import GoogleBtn from "../images/google-play-badge-logo.svg";

import styles from "./Auth.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Image
          className={styles.mobileImage}
          src="/iphones.png"
          alt="iphones"
          width={501}
          height={706}
        />
        <div className={styles.contentConteiner}>
          <div className={styles.content}>{children}</div>
          <a
            target="_blank"
            href="https://play.google.com/"
            className={styles.googleBtn}
          >
            <GoogleBtn className={styles.googleImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
