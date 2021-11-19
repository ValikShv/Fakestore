import { fakeStoreUrl } from "../../config/api/axiosConfig";
import { Alert } from "react-native";
import { CATALOG_ITEMS } from "../config/actionTypes";


// export const getItemCatalog = () => dispatch => {
//   console.log('qweqweqweqweqwe START')
//   fakeStoreUrl
//     .get('/products/categories')
//     .then((res)=>{
//       dispatch({ type: CATALOG_ITEMS, payload: res?.data })
//       console.log(res.data)
//       console.log('CatalogThen')
//     })
//     .catch(res => {
//       // Alert.alert("Error in GetItemCatalog", res)
//       console.log(res)
//       console.log('CatalogCatch')
//     })
// }

export const getItemCatalog = () => async dispatch => {
  fakeStoreUrl
    .get('/products/categories')
    .then((res)=>{
      dispatch({ type: CATALOG_ITEMS, payload: res?.data })
      console.log(res.data)
      console.log('CatalogThen')
    })
    .catch(res => {
      // Alert.alert("Error in GetItemCatalog", res)
      console.log(res)
      console.log('CatalogCatch')
    })
}


export const getItems = () => {
  fakeStoreUrl
    .get('products/category/jewelery')
    .then((res)=>{
      console.log(res)
      console.log('getItamsThen')
    })
    .catch(res => {
      // Alert.alert("Error in login", res)
      console.log(res)
      console.log('getItamsCatch')
    })
}
export const getCurrentItem = () => {
  fakeStoreUrl
    .get('products/category/jewelery')
    .then((res)=>{
      console.log(res)
      console.log('CurrentItemThen')
    })
    .catch(res => {
      // Alert.alert("Error in login", res)
      console.log(res)
      console.log('CurrentItemCatch')
    })
}


