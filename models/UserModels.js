const db = require('../config/db');

const user = {
    save: (data, callback) =>{
        const query = 'insert into products (name, description, price, quantity) values (?,?,?,?)';
        db.query(query, [data.prodName, data.prodDesc, data.prodPrice, data.prodQuan], callback);
    }
}