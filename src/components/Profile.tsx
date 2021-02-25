import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luizsp7m.png" alt="Profile" />
      <div>
        <strong>Luiz Antonio</strong>
        <p>
          <img src="icons/level.svg" alt="Icon"/>
          Nível 1
        </p>
      </div>
    </div>
  );
}