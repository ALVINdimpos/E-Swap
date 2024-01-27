// src/controllers/CategoryController.js
import { db } from "../models";

const Category = db.Category;

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({
      status: "success",
      message: "Categories retrieved successfully",
      categories,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Category retrieved successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Category.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(id);
      return res.status(200).json(
        {
          status: "success",
          message: "Category updated successfully",
          updatedCategory,
        }
      );
    }
    return res.status(404).json({ message: "Category not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Category.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).json({
        status: "success",
        message: "Category deleted successfully",
        deletedCategory: true,
      });
    }
    return res.status(404).json({ 
      status: "error",
      message: "Category not found"
     });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
