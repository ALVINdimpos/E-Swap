// src/controllers/WishlistController.js
import { Wishlist } from "../models";

export const createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    return res.status(201).json(wishlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.findAll();
    return res.status(200).json(wishlists);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getWishlistById = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlist = await Wishlist.findByPk(id);
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }
    return res.status(200).json(wishlist);
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
      return res.status(200).json(updatedWishlist);
    }
    return res.status(404).json({ message: "Wishlist not found" });
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
      return res.status(204).send();
    }
    return res.status(404).json({ message: "Wishlist not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
