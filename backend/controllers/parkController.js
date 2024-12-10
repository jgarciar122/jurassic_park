const fs = require('fs');
const jwt = require('jsonwebtoken');
const parksFile = './data/parks.json';
const SECRET_KEY = 'mysecretkey';

const getParkStatus = (req, res) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token no proporcionado o inválido' });
    }

    const token = authHeader.replace('Bearer ', '');
    const data = jwt.verify(token, SECRET_KEY);
    const userId = data.id;
    const parks = JSON.parse(fs.readFileSync(parksFile));

    const park = parks.find(p => p.userId === userId);
    if (!park) {
        return res.status(404).json({ message: 'Parque no encontrado' });
    }

    res.status(200).json(park);
};

const updatePark = (req, res) => {
    const { userId, dinosaurioIds, recintosIds, monedas } = req.body;
    const parks = JSON.parse(fs.readFileSync(parksFile));

    let park = parks.find(p => p.userId === userId);
    if (!park) {
        park = { userId, dinosaurioIds: [], recintosIds: [], monedas: 0 };
        parks.push(park);
    }

    park.dinosaurioIds = dinosaurioIds || park.dinosaurioIds;
    park.recintosIds = recintosIds || park.recintosIds;
    park.monedas = monedas || park.monedas;

    fs.writeFileSync(parksFile, JSON.stringify(parks));
    res.status(200).json({ message: 'Parque actualizado' });
};

module.exports = { getParkStatus, updatePark };
