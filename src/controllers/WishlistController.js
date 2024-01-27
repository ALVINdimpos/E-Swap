// src/controllers/WishlistController.js
import { db } from "../models";

const Wishlist = db.Wishlist;

export const createWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const wishlist = await Wishlist.create({
      ...req.body,
      userId,
    });
    return res.status(201).json({
      status: "success",
      message: "Wishlist created successfully",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.findAll({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: db.User,
          as: "user",
          attributes: ["id", "name", "email", "role"],
        },
        {
          model: db.Item,
          as: "item",
          attributes: ["id", "name", "price", "image", "description"],
        },
      ],
    });
    return res.status(200).json({
      status: "success",
      message: "Wishlists retrieved successfully",
      wishlists,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getWishlistById = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlist = await Wishlist.findByPk(id, {
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: db.User,
          as: "user",
        },
        {
          model: db.Item,
          as: "item",
        },
      ],
    });
    if (!wishlist) {
      return res.status(404).json({
        status: "error",
        message: "Wishlist not found",

       });
    }
    return res.status(200).json({
      status: "success",
      message: "Wishlist retrieved successfully",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Wishlist.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedWishlist = await Wishlist.findByPk(id);
      return res.status(200).json({
        status: "success",
        message: "Wishlist updated successfully",
        updatedWishlist,
      });
    }
    return res.status(404).json({
      status: "error",
      message: "Wishlist not found"
     });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Wishlist.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).json({
        status: "success",
        message: "Wishlist deleted successfully",
        deleted,
      });
    }
    return res.status(404).json({
      status: "error",
      message: "Wishlist not found"
     });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
