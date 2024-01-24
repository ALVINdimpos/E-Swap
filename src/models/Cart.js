// models/Cart.js
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // Cart belongs to a user
      Cart.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      // Cart has many items (as items in the cart)
      Cart.belongsToMany(models.Item, {
        through: "CartItem",
        foreignKey: "cartId",
        as: "items",
      });
    }
  }

  Cart.init(
      {
        quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );

  return Cart;
};
