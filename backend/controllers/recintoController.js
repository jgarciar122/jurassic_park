const fs = require('fs');
const recintoFile = './data/recinto.json';

const getRecinto = (req, res) => {
    const recinto = JSON.parse(fs.readFileSync(recintoFile));
    res.status(200).json(recinto);
};

module.exports = { getRecinto };
