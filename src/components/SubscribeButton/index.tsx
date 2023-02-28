import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({priceId} : SubscribeButtonProps){
    const {data} = useSession();


    
    function handleSubscribe(){
        if(!data){
            signIn('github')
            return
        }
    }

    return (
        <button
            type='button'
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
        Subscribe Now
        </button>
    );
}

export default SubscribeButton;