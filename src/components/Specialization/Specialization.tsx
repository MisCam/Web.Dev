import React from "react";

import PageLayout from "../PageLayout";
import Sponsors from "../Sponsors";
import Button from "../Button";
import SpecializationBlock from "../SpecializationBlock";
import PageTitle from "../PageTitle";

import FigmaLogo from "../../assets/FigmaLogo.png";

import styles from "./Specialization.module.css";

const Specialization = (): React.ReactElement => (
  <div className={styles.container}>
    <PageLayout>
      <Sponsors></Sponsors>
      <PageTitle firstText="What we Do?" secondText="Our Specialization"/>
      <div className={styles.blocks}>
        <SpecializationBlock
          title="Webflow Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={FigmaLogo}
        />
        <SpecializationBlock
          title="Shopify Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={FigmaLogo}
        />
        <SpecializationBlock
          title="Figma Web Designin"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={FigmaLogo}
        />
        <SpecializationBlock
          title="Php Development"
          mainText="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
          image={FigmaLogo}
        />
      </div>
      <Button text="Learn More"></Button>
    </PageLayout>
  </div>
);

export default Specialization;
