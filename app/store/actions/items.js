import { fakeStoreUrl } from "../../config/api/axiosConfig";
import { Alert } from "react-native";


export const getItemCatalog = () => {
  fakeStoreUrl
    .get('/products/categories')
    .then((res)=>{
      console.log(res)
      console.log('CatalogThen')
    })
    .catch(res => {
      // Alert.alert("Error in login", res)
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


