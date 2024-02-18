import React from "react";
import ColorTitle from "@/sharedComponents/ColorTitle";
import Styles from "./index.module.scss";
import DonationCard from "./DonationCard";

function DonationsGrid({ data, name }) {
  return (
    <section id={name} className={Styles.container}>
      <ColorTitle text={data.title} />
      <div className={Styles.container__grid}>
        {data?.donations?.map((item, idx) => {
          return <DonationCard key={idx} item={item} />;
        })}
        {/* <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard /> */}
      </div>
    </section>
  );
}

export default DonationsGrid;