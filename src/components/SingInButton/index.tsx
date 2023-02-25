import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import {FiX} from  'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

export function SingInButton(){
    const {data} = useSession()

    return data ? (
        <button 
            type="button"
            className={styles.singinbutton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
                {data.user.name}
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.singinbutton}
        onClick={() => signIn('github')}
    >
            <FaGithub color="#eba417"/>
            Sing in With Github
        </button>
    );
}

export default SingInButton;
