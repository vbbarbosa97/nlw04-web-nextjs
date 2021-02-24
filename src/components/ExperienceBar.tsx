import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export const ExperienceBar = () => {
  const { currenteExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLeve = Math.round(currenteExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLeve}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLeve}%` }}>
          {currenteExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
};
