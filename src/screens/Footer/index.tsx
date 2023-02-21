import React from "react";
import styles from "./styles.module.css";
import Motion from "@/components/Motion";
import { motion } from "framer-motion";
import InstagramIcon from "@/public/assets/fi_instagram.svg";
import FacebookIcon from "@/public/assets/fi_facebook.svg";
import TwitterIcon from "@/public/assets/fi_twitter.svg";
import EmailIcon from "@/public/assets/fi_mail.svg";
import Image from "next/image";
import { footer, item } from "@/lib/Variants";

const Footer = () => {
  return (
    <Motion className="container section" id="footer">
      <motion.footer variants={footer} className={styles.footer}>
        <motion.div className={styles.socialItem} variants={item}>
          <Image src={InstagramIcon} alt="instagram icon" />
        </motion.div>
        <motion.div className={styles.socialItem} variants={item}>
          <Image src={FacebookIcon} alt="facebook icon" />
        </motion.div>
        <motion.div className={styles.socialItem} variants={item}>
          <Image src={TwitterIcon} alt="twitter icon" />
        </motion.div>
        <motion.div className={styles.socialItem} variants={item}>
          <Image src={EmailIcon} alt="email icon" />
        </motion.div>
      </motion.footer>
    </Motion>
  );
};

export default Footer;
