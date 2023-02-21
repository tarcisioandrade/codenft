import Motion from "@components/Motion";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Profile1 from "@public/assets/profile1.png";
import Profile2 from "@public/assets/profile2.png";
import Profile3 from "@public/assets/profile3.png";
import Profile4 from "@public/assets/profile4.png";
import clsx from "clsx";
import { motion } from "framer-motion";
import { item } from "@lib/Variants";

const Collection = () => {
  return (
    <Motion className="container section" id="collection">
      <motion.header variants={item} className={styles.header}>
        <h4>Colecionadores</h4>
        <button className={clsx("button", styles.headerBtnDesktop)}>
          Ver Todos
        </button>
      </motion.header>
      <table className={styles.table}>
        <thead>
          <motion.tr variants={item}>
            <th>Colecionadores</th>
            <th>Volume</th>
            <th>Piso</th>
            <th>Items</th>
          </motion.tr>
        </thead>
        <tbody>
          <motion.tr variants={item}>
            <td>
              <div className={styles.profile}>
                <span>
                  <Image src={Profile1} alt="Amanda Profile" />
                </span>
                Amanda
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                230.38 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +50.20%
                </span>
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                12.38 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +50.20%
                </span>
              </div>
            </td>
            <td>138</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className={styles.profile}>
                <span>
                  <Image src={Profile2} alt="Fernando Profile" />
                </span>
                Fernando
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                189.25 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +33.11%
                </span>
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                54.38 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +70.45%
                </span>
              </div>
            </td>
            <td>105</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className={styles.profile}>
                <span>
                  <Image src={Profile3} alt="Bruna Profile" />
                </span>
                Bruna
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                963 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +78.20%
                </span>
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                30.96 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +25.60%
                </span>
              </div>
            </td>
            <td>88</td>
          </motion.tr>
          <motion.tr variants={item}>
            <td>
              <div className={styles.profile}>
                <span>
                  <Image src={Profile4} alt="José Profile" />
                </span>
                José
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                421.66 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +46.20%
                </span>
              </div>
            </td>
            <td>
              <div className={styles.vol}>
                130.38 ETH{" "}
                <span className={clsx("text_small", styles.volNumber)}>
                  +50.20%
                </span>
              </div>
            </td>
            <td>56</td>
          </motion.tr>
        </tbody>
      </table>
      <motion.button
        className={clsx("button", styles.headerBtnMobile)}
        variants={item}
      >
        Ver Todos
      </motion.button>
    </Motion>
  );
};

export default Collection;
