// models/WishlistItem.js
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class WishlistItem extends Model {
    static associate(models) {
      // WishlistItem belongs to an item
      WishlistItem.belongsTo(models.Item, {
        foreignKey: "itemId",
        as: "item",
      });

      // WishlistItem belongs to a wishlist
      WishlistItem.belongsTo(models.Wishlist, {
        foreignKey: "wishlistId",
        as: "wishlist",
      });
    }
  }

  WishlistItem.init(
      {
          quantity: DataTypes.INTEGER,
          
    },
    {
      sequelize,
      modelName: "WishlistItem",
    }
  );

  return WishlistItem;
};
