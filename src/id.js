const { v4: uuidv4 } = require('uuid');

function giftedid() {
    return uuidv4();
}

module.exports = { giftedid };
