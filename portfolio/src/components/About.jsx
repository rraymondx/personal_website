import React from 'react'
import styles from '../styles/About.module.css';
import { getImageUrl } from '../utils';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} alt="Me" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>CST Student</h3>
                            <p>
                                I am currently at BCIT pursing a CST Dipolma.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>
                                I am currently in the fields of full stack development, trying to create meaningful projects.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Gamer</h3>
                            <p>
                                I enjoy playing games like Valorant, League of Legends, Lethal Company, and Hearthstone!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About
