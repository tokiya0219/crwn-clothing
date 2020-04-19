import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('RJZdSz3OYJ95MQ7JABjN').collection('cartItems').doc('Y9dqo3G7RxYZgqHkCp2y');
firestore.doc('/users/RJZdSz3OYJ95MQ7JABjN/cartItems/Y9dqo3G7RxYZgqHkCp2y');
firestore.collection('/users/RJZdSz3OYJ95MQ7JABjN/cartItems');