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