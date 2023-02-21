import Logo from "./Logo";
import { clsx } from "clsx";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { animationInLoad } from "@lib/Animations";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <motion.header
      className={clsx("container", styles.container)}
      {...animationInLoad}
    >
      <div className={styles.logo}>
        <Logo />
        <span>CodeNFT</span>
      </div>

      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <Link to="toprate" offset={-50} smooth href="#toprate">
              NFT
            </Link>
          </li>
          <li>
            <Link to="collection" offset={-50} smooth href="#collection">
              Colecionadores
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
