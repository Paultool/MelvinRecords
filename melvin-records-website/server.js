import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => res.send('Servidor funcionando'));

// Endpoint para enviar correo
app.post('/send-email', async (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  try {
    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'paultool@gmail.com',       // tu Gmail
        pass: 'myyx liiu pylw uuxt'        // contraseña de app (no tu contraseña normal)
      }
    });

    // Contenido del email
    const mailOptions = {
      from: `"${nombre}" <${email}>`,
      to: 'paultool@gmail.com',          // tu Gmail (recibe los mensajes)
      subject: asunto || 'Mensaje desde el formulario',
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Asunto:</strong> ${asunto}</p>
             <p><strong>Mensaje:</strong><br/>${mensaje}</p>`
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ status: 'error', details: error.message });
  }
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
