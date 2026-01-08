const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Initialize Admin SDK
admin.initializeApp();

// Get SendGrid key from functions config
const SENDGRID_KEY = functions.config().sendgrid?.key;
if (SENDGRID_KEY) {
  sgMail.setApiKey(SENDGRID_KEY);
} else {
  console.warn('SendGrid API key not set in functions config.');
}

// Callable function: send confirmation to the provided email
exports.sendContactConfirmation = functions.https.onCall(async (data, context) => {
  const email = data?.email;
  const name = data?.name || '';
  const message = data?.message || '';

  if (!email) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing email');
  }

  if (!SENDGRID_KEY) {
    throw new functions.https.HttpsError('failed-precondition', 'SendGrid key not configured');
  }

  const from = functions.config().sendgrid.from || 'noreply@yourdomain.com';

  const subject = 'Votre demande a bien été reçue';
  const text = `Bonjour ${name},\n\nMerci pour votre message. Nous avons bien reçu votre demande et nous reviendrons vers vous rapidement.\n\nVotre message: ${message}\n\nCordialement,\nNextGAME`;
  const html = `<p>Bonjour ${name},</p><p>Merci pour votre message. Nous avons bien reçu votre demande et nous reviendrons vers vous rapidement.</p><p><strong>Votre message:</strong><br/>${message}</p><p>Cordialement,<br/>NextGAME</p>`;

  const msg = {
    to: email,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (err) {
    console.error('SendGrid send error:', err);
    throw new functions.https.HttpsError('internal', 'Failed to send email');
  }
});
