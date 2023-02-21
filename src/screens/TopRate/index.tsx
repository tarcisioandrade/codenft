/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import NFT1 from "@assets/nft-1.png";
import NFT2 from "@assets/nft-2.png";
import NFT3 from "@assets/nft-3.png";
import NFT1Mobile from "@assets/mobile/nft-1.png";
import NFT2Mobile from "@assets/mobile/nft-2.png";
import NFT3Mobile from "@assets/mobile/nft-3.png";
import Motion from "@components/Motion";
import { item } from "@lib/Variants";

const TopRate = () => {
  return (
    <Motion className="container section" id="toprate">
      <motion.h3 variants={item} className={styles.header}>
        TOP NFTs
      </motion.h3>
      <motion.div className={styles.cards}>
        <motion.picture variants={item}>
          <source srcSet={NFT1Mobile.src} media="(max-width: 727px)" />
          <img src={NFT1.src} alt="NFT 1" />
        </motion.picture>
        <motion.picture variants={item}>
          <source srcSet={NFT2Mobile.src} media="(max-width: 727px)" />
          <img src={NFT2.src} alt="NFT 2" />
        </motion.picture>
        <motion.picture variants={item}>
          <source srcSet={NFT3Mobile.src} media="(max-width: 727px)" />
          <img src={NFT3.src} alt="NFT 3" />
        </motion.picture>
      </motion.div>
    </Motion>
  );
};

export default TopRate;
