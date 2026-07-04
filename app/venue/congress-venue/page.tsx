import styles from "../venue.module.css";
import {
  CurrencyConverter,
  DiscoverTunisia,
  VenueFeatures,
  VenueHero,
  VenueMap,
} from "../_components/VenueSections";

export default function CongressVenuePage() {
  return (
    <main className={styles.page}>
      <VenueHero />
      <VenueFeatures />
      <VenueMap />
      <DiscoverTunisia />
      <CurrencyConverter />
    </main>
  );
}