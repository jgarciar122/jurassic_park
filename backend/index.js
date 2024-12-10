const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const parkRoutes = require('./routes/park');
const dinosaurioRoutes = require('./routes/dinosaurio');
const emergenciaRoutes = require('./routes/emergencia');
const recintoRoutes = require('./routes/recintos');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas
app.use('/auth', authRoutes);
app.use('/park', parkRoutes);
app.use('/dinosaurs', dinosaurioRoutes);
app.use('/emergencies', emergenciaRoutes);
app.use('/recinto', recintoRoutes);

// Puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
