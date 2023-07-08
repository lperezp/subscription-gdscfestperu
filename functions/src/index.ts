import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import { emailTemplate } from './emailTemplate';


const serviceAccount = require('./servicesAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const corsHandler = cors({ origin: true });

exports.addSubscriber = functions.https.onRequest(async (request, response) => {
    try {
        corsHandler(request, response, async () => {
            const categoriesRef = db.collection('subscribers');
            const { mail, date } = request.body;
            const data = {
                mail,
                date
            };
            await categoriesRef.doc(data.mail).set(data);
            response.status(201).json({ message: 'Registrado' });
        });
    } catch (error) {
        response.status(503).json({ message: `${error}` });
    }
});

exports.registerAssistants = functions.https.onRequest(async (request, response) => {
    try {
        corsHandler(request, response, async () => {
            const categoriesRef = db.collection('assistants');
            const { name, lastName, email, nroDoc, city, company, role, interest, communityStandards, policy, isSubscribed, event, hash, date } = request.body;
            const data = {
                name,
                lastName,
                email,
                nroDoc,
                city,
                company,
                role,
                interest,
                communityStandards,
                policy,
                isSubscribed,
                event,
                hash,
                date
            };
            await categoriesRef.doc(data.email).set(data);
            const resp = { 'message': 'Registrado', 'hash': hash };
            registerEmail(name, lastName, email, date, hash);
            response.status(201).json(resp);
        });
    } catch (error) {
        response.status(503).json({ message: `${error}` });
    }
});

const registerEmail = async (name: string, lastName: string, email: string, date: string, hash: string) => {
    const linkTicket = `https://rsvp.gdscfestperu.com/#/rsvp/confirmation/${hash}`;
    const username = `${name} ${lastName}`;
    try {
        const data = {
            date,
            'to': email,
            'message': {
                'subject': 'Confirmación de registro: GDSC Fest Perú 2023',
                'text': 'Confirmación de registro: GDSC Fest Perú 2023',
                'html': `${emailTemplate(username, linkTicket)}`,
            }
        }
        const categoriesRef = db.collection('email');
        await categoriesRef.add(data);
    } catch (error) {
        throw new Error("Ocurrió un error al enviar el correo");

    }
}

exports.getAssistants = functions.https.onRequest((req, res) => {
    try {
        const email = req.query.email;
        let docsSnap: any;
        corsHandler(req, res, async () => {
            const dailyFoodRef = db.collection('assistants');
            docsSnap = await dailyFoodRef
                .where('email', '==', email)
                .get();
            const dailyFood = docsSnap.docs.map((doc: any) => doc.data());
            res.json(dailyFood);
        });
    } catch (error) {
        res.status(404).json({ error: 'No está registrado.' });
    }
});

exports.getAllAssistants = functions.https.onRequest((req, res) => {
    try {
        let totalAssistants = 0;
        let totalAssistantsLima = 0;
        let totalAssistantsPiura = 0;
        let totalAssistantsIca = 0;
        corsHandler(req, res, async () => {
            const assistantsRef = db.collection('assistants');
            await assistantsRef
                .where('event', '==', 'GDSC Fest Lima')
                .get().then((querySnapshot) => {
                    totalAssistantsLima = querySnapshot.size
                });
            await assistantsRef
                .where('event', '==', 'GDSC Fest Ica')
                .get().then((querySnapshot) => {
                    totalAssistantsIca = querySnapshot.size
                });
            await assistantsRef
                .where('event', '==', 'GDSC Fest Piura')
                .get().then((querySnapshot) => {
                    totalAssistantsPiura = querySnapshot.size
                });
            totalAssistants = totalAssistantsLima + totalAssistantsIca + totalAssistantsPiura
            const data = {
                'totalAssistantsLima': totalAssistantsLima,
                'totalAssistantsIca': totalAssistantsIca,
                'totalAssistantsPiura': totalAssistantsPiura,
                'totalAssistants': totalAssistants
            }
            res.json(data);
        });
    } catch (error) {
        res.status(404).json({ 'error': error });
    }
});

exports.getAllAssistantsxInterest = functions.https.onRequest((req, res) => {
    try {
        let totalMovil = 0;
        let totalWeb = 0;
        let totalAI = 0;
        let totalCloud = 0;
        corsHandler(req, res, async () => {
            const assistantsRef = db.collection('assistants');
            await assistantsRef
                .where('interest', '==', 'Móvil')
                .get().then((querySnapshot) => {
                    totalMovil = querySnapshot.size
                });
            await assistantsRef
                .where('interest', '==', 'Web')
                .get().then((querySnapshot) => {
                    totalWeb = querySnapshot.size
                });
            await assistantsRef
                .where('interest', '==', 'AI')
                .get().then((querySnapshot) => {
                    totalAI = querySnapshot.size
                });
            await assistantsRef
                .where('interest', '==', 'Nube')
                .get().then((querySnapshot) => {
                    totalCloud = querySnapshot.size
                });
            const data = {
                'totalMovil': totalMovil,
                'totalWeb': totalWeb,
                'totalAI': totalAI,
                'totalCloud': totalCloud
            }
            res.json(data);
        });
    } catch (error) {
        res.status(404).json({ 'error': error });
    }
});