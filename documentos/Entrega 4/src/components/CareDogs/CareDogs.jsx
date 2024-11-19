import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CareDogs.module.css";
  
const CareDogs = ({ icon, imgSrc, altText,}) => {
  return (
    <div className={styles.careDogs}>
      <h1 className={styles.careDogsTitle}>Cuidados para seu doguinho!</h1>
      <div className={styles.careDogsContent}>
        <div className={styles.careDogsImage}>
          <img src={imgSrc} alt={altText} />
        </div>
        <div className={styles.careDogsItem}>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 1: Lorem Ipsum is simply dummy text.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 2: Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 3: It has survived not only five centuries.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 4: But also the leap into electronic typesetting.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 5: Remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.careDogsContent}>
        <div className={styles.careDogsImageVFS}>
          <img src={imgSrc} alt={altText} />
        </div>
        <div className={styles.careDogsItem}>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 1: Lorem Ipsum is simply dummy text.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 2: Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 3: It has survived not only five centuries.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 4: But also the leap into electronic typesetting.
            </p>
          </div>
          <div className={styles.textRow}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>
              Texto 5: Remaining essentially unchanged."
            </p>
          </div>
        </div>
        <div className={styles.careDogsImageFS}>
          <img src={imgSrc} alt={altText} />
        </div>
      </div>
    </div>
  );
};

export default CareDogs;
