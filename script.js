// Firebase konfiguracja
const firebaseConfig = {
    apiKey: „TWOJE_API_KEY”,
    authDomain: „TWOJA_AUTH_DOMAIN”,
    projectId: „TWOJE_PROJECT_ID”,
    storageBucket: „TWOJA_STORAGE_BUCKET”,
    messagingSenderId: „TWOJE_MESSAGING_SENDER_ID”,
    appId: „TWOJE_APP_ID”
};

// Inicjalizacja Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Rejestracja użytkownika (Modelka)
const registerModel = (email, password, phone, dob) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Zapis dodatkowych danych w Firestore
db.collection(„users”).doc(userCredential.user.uid).set({
                role: „Model”,
                phone: phone,
                dob: dob,
                email: email
            });
            alert(„Rejestracja udana!”);
        })
        .catch((error) => {
            console.error(„Błąd rejestracji:”, error);
        });
};

// Rejestracja użytkownika (Firma)
const registerFirm = (email, password, phone) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Zapis dodatkowych danych w Firestore
db.collection(„users”).doc(userCredential.user.uid).set({
                role: „Firm”,
                phone: phone,
                email: email
            });
            alert(„Rejestracja udana!”);
        })
        .catch((error) => {
            console.error(„Błąd rejestracji:”, error);
        });
};

