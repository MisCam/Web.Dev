import React from "react";

import PageLayout from "../PageLayout";
import Sponsors from "./Sponsors";
import Button from "../Button";
import SpecializationBlock from "./SpecializationBlock";
import PageTitle from "../PageTitle";
import { BUTTON_SIZE, BUTTON_COLOR } from "../Button/Button";

import FigmaLogo from "../../assets/FigmaLogo.png";
import Webflow from "../../assets/Webflow.png";
import Shopify from "../../assets/Shopify.png";
import Php from "../../assets/Php.png";

import styles from "./Specialization.module.css";


const Specialization = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <Sponsors></Sponsors>
      <PageTitle title="What we Do?" subTitle="Our Specialization"/>
      <div className={styles.blocks}>
        <SpecializationBlock
          title="Webflow Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={Webflow}
          altname="Webflow"
        />
        <SpecializationBlock
          title="Shopify Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={Shopify}
          altname="Shopify"
        />
        <SpecializationBlock
          title="Figma Web Designin"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={FigmaLogo}
          altname="Figma"
        />
        <SpecializationBlock
          title="Php Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={Php}
          altname="Php"
        />
      </div>
      <Button size={BUTTON_SIZE.big} color={BUTTON_COLOR.green}>Learn More</Button>
    </PageLayout>
  </div>
);

export default Specialization;
