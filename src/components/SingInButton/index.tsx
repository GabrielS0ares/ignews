import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import {FiX} from  'react-icons/fi'

export function SingInButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button 
            type="button"
            className={styles.singinbutton}
        >
            <FaGithub color="#04d361"/>
            NomeGitHub
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.singinbutton}
    >
            <FaGithub color="#eba417"/>
            Sing in With Github
        </button>
    );
}

export default SingInButton;