import React from 'react';
import styles from '../styles/Contact.module.css';
import { getImageUrl } from '../utils';


const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:rraymondxie@gmail.com">rraymondxie@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/xiehouman/">linkedin.com/xiehouman</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/rraymondx">github.com/rraymondx</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
