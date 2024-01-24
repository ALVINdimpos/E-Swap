// src/controllers/WishlistItemController.js
import { WishlistItem } from "../models";

export const createWishlistItem = async (req, res) => {
  try {
    const wishlistItem = await WishlistItem.create(req.body);
    return res.status(201).json(wishlistItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await WishlistItem.findAll();
    return res.status(200).json(wishlistItems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getWishlistItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlistItem = await WishlistItem.findByPk(id);
    if (!wishlistItem) {
      return res.status(404).json({ message: "WishlistItem not found" });
    }
    return res.status(200).json(wishlistItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateWishlistItem = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await WishlistItem.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedWishlistItem = await WishlistItem.findByPk(id);
      return res.status(200).json(updatedWishlistItem);
    }
    return res.status(404).json({ message: "WishlistItem not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteWishlistItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await WishlistItem.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ message: "WishlistItem not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
