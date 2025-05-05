import { HeaderSection } from "@/sections/header-section";
import styles from '@/app/cart/[productName]/styles.module.css';
import { VisionSection } from "@/sections/vision-section";
import { MaterialsSection } from "@/sections/materials-section";
import { ProductsSection } from "@/sections/products-section";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <div className={styles.dappledLight}>
          <div className={styles.glow}></div>
          <div className={styles.glowBounce}></div>
          <div className={styles.perspective}>
            <div className={styles.leaves}>
              <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                <defs>
                  <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                      <animate attributeName="baseFrequency" dur="16s" keyTimes="0;0.33;0.66;1"
                        values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic">
                      <animate attributeName="scale" dur="20s" keyTimes="0;0.25;0.5;0.75;1" values="45;55;75;55;45"
                        repeatCount="indefinite" />
                    </feDisplacementMap>
                  </filter>
                </defs>
              </svg>
            </div>
            <div className={styles.blinds}>
              <div className={styles.shutters}>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
                <div className={styles.shutter}></div>
              </div>
              <div className={styles.vertical}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            </div>
          </div>
          <div className={styles.progressiveBlur}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <HeaderSection></HeaderSection>
      <VisionSection></VisionSection>
      <MaterialsSection></MaterialsSection>
      <ProductsSection></ProductsSection>
    </main>
  );
}