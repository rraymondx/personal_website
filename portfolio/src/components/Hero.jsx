import React from 'react';
import styles from '../styles/Hero.module.css';
import { getImageUrl } from '../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Raymond</h1>
                <p className={styles.description}>
                I'm a CST student at BCIT using React and Node.js!
                </p>
                <a href="mainto:rraymondxie@gmail.com" className={styles.contactButton}>
                    Contact Me
                </a>
            </div>
                <img src={getImageUrl("hero/heroImage.png")} 
                                    alt="Image of myself" 
                                    className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero
