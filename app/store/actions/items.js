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


