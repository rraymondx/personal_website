import React from 'react'
import styles from '../styles/About.module.css';
import { getImageUrl } from '../utils';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.jpg")} className={styles.aboutImage} alt="Me" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Analytics</h3>
                            <p>
                                Currently at BCIT studying predictive analytics,
                                using linear and logistic regression models to predict data.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>
                                Currently learning full stack development both at BCIT and during personal time as a hobbie.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Hobbies</h3>
                            <p>
                                I enjoy street photography, playing badminton, and gaming with friends.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About
