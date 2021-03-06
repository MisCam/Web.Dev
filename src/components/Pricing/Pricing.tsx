import React from "react";

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import Price from "./Price";

import styles from "./Pricing.module.css";

const Pricing = (): React.ReactElement => (
  <div className={styles.pricing}>
    <PageLayout>
      <PageTitle title="Pricing" subTitle="Pricing Policy" />
      <div className={styles.price_list}>
        <Price
          name="For Starter"
          cost="$1499"
          pluses={[
            "Feedback Categorization",
            "Features prioritization",
            "Real-time collaboration",
            "Feedback loop notifications",
            "Essential dev tools integrations",
          ]}
          button="Request Demo"
          isCentral={false}
        />
        <Price
          name="For Teams"
          cost="$2999"
          pluses={[
            "Feedback Categorization",
            "Features prioritization",
            "Real-time collaboration",
            "Feedback loop notifications",
            "Essential dev tools integrations",
          ]}
          button="Request Demo"
          isCentral={true}
        />
        <Price
          name="For Company"
          cost="Custom"
          pluses={[
            "Feedback Categorization",
            "Feedback loop notifications",
            "Essential dev tools integrations"
          ]}
          button="Contact Us"
          isCentral={false}
        />
      </div>
    </PageLayout>
  </div>
);

export default Pricing;
