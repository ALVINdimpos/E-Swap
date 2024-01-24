// src/controllers/CartItemController.js
import { CartItem } from "../models";

export const createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    return res.status(201).json(cartItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    return res.status(200).json(cartItems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCartItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) {
      return res.status(404).json({ message: "CartItem not found" });
    }
    return res.status(200).json(cartItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await CartItem.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedCartItem = await CartItem.findByPk(id);
      return res.status(200).json(updatedCartItem);
    }
    return res.status(404).json({ message: "CartItem not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CartItem.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ message: "CartItem not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
