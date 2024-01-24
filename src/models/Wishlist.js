// models/Wishlist.js
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      // Wishlist belongs to a user
      Wishlist.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      // Wishlist has many items (as items in the wishlist)
      Wishlist.belongsToMany(models.Item, {
        through: "WishlistItem",
        foreignKey: "wishlistId",
        as: "items",
      });
    }
  }

  Wishlist.init(
    {
    },
    {
      sequelize,
      modelName: "Wishlist",
    }
  );

  return Wishlist;
};
