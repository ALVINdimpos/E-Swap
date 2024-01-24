// models/CartItem.js
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // CartItem belongs to an item
      CartItem.belongsTo(models.Item, {
        foreignKey: "itemId",
        as: "item",
      });

      // CartItem belongs to a cart
      CartItem.belongsTo(models.Cart, {
        foreignKey: "cartId",
        as: "cart",
      });
    }
  }

  CartItem.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );

  return CartItem;
};
