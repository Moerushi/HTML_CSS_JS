import { createSlice } from "@reduxjs/toolkit";

const url = "../data/data.json"
const url2 = "../data/dataSecond.json"

export async function fetchProducts(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

function findProductInData(array, productId) {
  const addedProduct = array.find(product => product.id === productId);
  return addedProduct;
}

function haveProductInStore(productId) {
  let isInStore = false;
  const produstLS = JSON.parse(localStorage.getItem("basket"));
  produstLS.forEach(product => {

    if (product.id === productId) {
      isInStore = true;
      return isInStore;
    }
  });
  return isInStore;
}
export const data = await fetchProducts(url);
export const dataSecond = await fetchProducts(url2);

const initialState = {
  products: JSON.parse(localStorage.getItem("basket") || "[]"),
};

export const saveToLocalStorage = (products) => {
  localStorage.setItem("basket", JSON.stringify(products));
};


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = findProductInData(dataSecond, action.payload);
      if (haveProductInStore(newProduct.id)) {
        return;
      }
      const products = [...state.products, newProduct];
      saveToLocalStorage(products);
      state.products = products;
    },
    deleteProduct: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload,
      );
      saveToLocalStorage(products);
      state.products = products;
    },
    setQuantity: (state, action) => {
      const product = state.products.find(item => item.id == action.payload.id);
      console.log(action.payload);
      if (product) {
        product.quantity = action.payload.value;
      }
      saveToLocalStorage(state.products);
    },
  },
});

export const { addProduct, deleteProduct, setQuantity} =
  productSlice.actions;
export default productSlice.reducer;
