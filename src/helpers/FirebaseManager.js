import { initializeApp } from 'firebase';
import firebaseConfig from '../configs/firebase/firebase-config';

class FirebaseManager {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.auth = this.app.auth();
        this.dbRootRef = this.app.database().ref();
        this.storage = this.app.storage();
        
        this.ready = new Promise((resolve) => {
            this.auth.signInWithEmailAndPassword(
                window.atob('bWluZ2hlMDkxNUBnbWFpbC5jb20='),
                window.atob('RE9XTjc2MDkxNQ==')
            ).then(() => resolve());
        });
    }
}

export default new FirebaseManager();
