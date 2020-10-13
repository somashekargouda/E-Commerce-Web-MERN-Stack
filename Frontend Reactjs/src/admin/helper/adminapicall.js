import { API } from "../../backend";

//category API calls
const createCategory = (userId, token, category) => {
    return fetch (`${API}/category/create/${userId}`, {
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(category)
    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
}
export default createCategory;

//get all categories
export const getCategories = (category) =>{
    return fetch(`${API}/categories`, {
        method :"GET"
    })
    .then(response =>{
       return response.json()
    })
    .catch(err =>console.log(err))
}


//Product API calls
//create a product
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: product
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

//Update a product
export const updateProduct =(productId, userId, token, product) =>{
    return fetch (`${API}/product/${productId}/${userId}`, {
        method : "PUT",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body :product
    })
    .then(response =>{
        return response.json()
    })
    .catch(error =>console.log(error))
}

//get all products
export const getProducts = (product) =>{
    return fetch(`${API}/products`, {
        method :"GET"
    })
    .then(response =>{
       return response.json()
    })
    .catch(error =>console.log(error))
}

//Get product
export const getProduct = (productId) =>{
    return fetch(`${API}/product/${productId}`, {
        method :"GET"
    })
    .then(response =>{
       return  response.json()
    })
    .catch(error =>console.log(error))
}

//delete a product
export const deleteProduct =(productId,userId, token,) =>{
    return fetch (`${API}/product/${productId}/${userId}`, {
        method : "DELETE",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        }
    })
    .then(response =>{
        return response.json()
    })
    .catch(error =>console.log(error))
}
