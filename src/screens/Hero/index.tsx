import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import NFT from "@public/assets/nft-hero.png";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Motion from "@components/Motion";
import { item, main } from "@lib/Variants";

const dashboardArray = [
  {
    title: "Coleções",
    number: "300",
  },
  {
    title: "Usuários",
    number: "+100k",
  },
  {
    title: "Negociações",
    number: "+30k",
  },
  {
    title: "Visualizações",
    number: "+1 M",
  },
];

const Hero = () => {
  return (
    <Motion className="container section" id="hero">
      <div className={styles.container}>
        <motion.div className={styles.content} variants={item}>
          <h1>
            Descubra e colete <span className={styles.bold}>obras de arte</span>{" "}
            digitais super raras
          </h1>
          <p className={styles.subtitle}>
            O maior mercado NFT. Criação digital autêntica e verdadeiramente
            única. Assinado e emitido pelo criador, possibilitado pela
            tecnologia blockchain
          </p>
          <button className="button">Explorar</button>
        </motion.div>

        <motion.div className={styles.card} variants={item}>
          <Image src={NFT} alt="NFT" className={styles.cardImage} />
          <div className={styles.cardRating}>Top 1</div>
          <div className={styles.cardFooter}>
            <div className={styles.cardTexts}>
              <span>Apple Muu</span>
              <span className="text_small">By Steve Jobs</span>
              <div className={styles.cardPrice}>
                <Logo /> 18 ETH
              </div>
            </div>
            <button className="button">Comprar</button>
          </div>
        </motion.div>
      </div>

      <motion.div variants={main} className={styles.dashboard}>
        {dashboardArray.map((dashItem, index) => (
          <motion.div
            variants={item}
            className={styles.dashboardInfo}
            key={index}
          >
            <span className={styles.dashboardNumber}>{dashItem.number}</span>
            <span className={styles.dashboardTitle}>{dashItem.title}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className={styles.dashboardSlider}>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
        >
          {dashboardArray.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.dashboardInfo}>
                <span className={styles.dashboardNumber}>{item.number}</span>
                <span className={styles.dashboardTitle}>{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Motion>
  );
};

export default Hero;
