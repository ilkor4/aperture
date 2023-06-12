const mysql = require('mysql2');

function saveOrder(order, connection, res) {
  const clothesQuery = 'INSERT INTO clothes (color, typeClothes, fabrics) VALUES (?, ?, ?)';
  const clothesValues = [order.color, order.typeClothes, order.fabrics];

  connection.query(clothesQuery, clothesValues, (error, results, fields) => {
    if (error) {
      console.error('Ошибка сохранения информации о вещи:', error);
    } else {
      const idClothes = results.insertId;

      const orderQuery = 'INSERT INTO orders (firstName, phoneNumber, id_clothes, height, bust, waist, sleeve, trousersLength, booty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const orderValues = [order.firstName, order.phoneNumber, idClothes, order.height, order.bust, order.waist, order.sleeve, order.trousersLength, order.booty];

      connection.query(orderQuery, orderValues, (error, results, fields) => {
        if (error) {
          console.error('Ошибка сохранения заказа:', error);
        } else {
          res.send({ message: "Заказ успешен" })
          console.log('Заказ успешно сохранен в базе данных');
        }

        connection.end();
      });
    }
  });
}



const createOrder = (req, res, next) => {
  const { firstName, phoneNumber, typeClothes, fabrics, color, height, bust, waist, sleeve, trousersLength, booty } = req.body;

  const order = {
    firstName: firstName,
    phoneNumber: phoneNumber,
    color: color,
    typeClothes: typeClothes,
    fabrics: fabrics,
    height: height,
    bust: bust,
    waist: waist,
    sleeve: sleeve,
    trousersLength: trousersLength,
    booty: booty,
  };

  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'myDB',
    user: 'root',
    password: '25862586',
  });

  saveOrder(order, connection, res)


};

module.exports = { createOrder };
