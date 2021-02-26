import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/luizsp7m.png" alt="Profile" />
      <div>
        <strong>Luiz Antonio</strong>
        <p>
          <img src="icons/level.svg" alt="Icon"/>
          Nível {level}
        </p>
      </div>
    </div>
  );
}