import styles from "../venue.module.css";
import {
  CurrencyConverter,
  DiscoverTunisia,
  
  VenueHero,
  VenueMap,
} from "../_components/VenueSections";

export default function CongressVenuePage() {
  return (
    <main className={styles.page}>
      <VenueHero />
      
      <VenueMap />
      <DiscoverTunisia />
      <CurrencyConverter />
    </main>
  );
}