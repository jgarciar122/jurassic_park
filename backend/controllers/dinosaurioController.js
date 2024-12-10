const fs = require('fs');
const dinosaursFile = './data/dinosaurios.json';

const getDinosaurios = (req, res) => {
    const dinosaurios = JSON.parse(fs.readFileSync(dinosauriosFile));
    res.status(200).json(dinosaurios);
};

module.exports = { getDinosaurs };
