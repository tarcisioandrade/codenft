import Motion from "@/components/Motion";
import styles from "./styles.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <Motion className="container section">
      <motion.h4 className={styles.title}>Perguntas Frequentes</motion.h4>
      <Accordion.Root type="single" className={styles.accordion}>
        <Accordion.Item value="faq-1" className={styles.accordionItem}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordionTrigger}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.accordionContent}>TESTE</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="faq-2" className={styles.accordionItem}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordionTrigger}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>TESTE</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="faq-3" className={styles.accordionItem}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.accordionTrigger}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>TESTE</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Motion>
  );
};

export default Faq;
