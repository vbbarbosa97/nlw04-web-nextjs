import styles from '../styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vbbarbosa97.png" alt="Vinicius Batista Barbosa" />
      <div>
        <strong>Vinicius Batista Barbosa</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};
