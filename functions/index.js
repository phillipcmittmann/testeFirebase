const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.onUpdateAtividade = functions.firestore
    .document('atividades/{docId}')
    .onUpdate((change, context) => {
        const newValue = change.after.data();
        const previousValue = change.before.data();

        if (newValue.status == previousValue.status && newValue.usuarioResponsavel == previousValue.usuarioResponsavel) {
            return null;
        } else {
            db
            .collection('eventHistory')
            .add({
                documento: context.params.docId,
                modificadoEm: '',
                novosValores: newValue,
                valoresAntigos: previousValue
            });
        }
    });