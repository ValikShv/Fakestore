import { fakeStoreUrl } from "../../config/api/axiosConfig";
import { Alert } from "react-native";
import { CATALOG_ITEMS, CATEGORY_ITEMS, CURRENT_ITEM } from "../config/actionTypes";
import { useDispatch } from "react-redux";

const dispatch = useDispatch

export const getItemCatalog = () => (dispatch) => {
  fakeStoreUrl
    .get('/products/categories')
    .then((res)=>{
      dispatch({ type: CATALOG_ITEMS, payload: res?.data })
      // console.log(res.data)
      // console.warn('CatalogThen')
    })
    .catch(res => {
      // Alert.alert("Error in GetItemCatalog", res)
      console.log(res)
      console.warn('CatalogCatch')
    })
}


export const getItems = () => dispatch => {
  fakeStoreUrl
    .get('products/category/jewelery')
    .then((res)=>{
      dispatch({ type: CATEGORY_ITEMS, payload: res?.data })
      // console.log(res)
      // console.log('getItamsThen')
    })
    .catch(res => {
      // Alert.alert("Error in login", res)
      console.log(res)
      console.log('getItamsCatch')
    })
}
export const getCurrentItem = (id) => dispatch => {
  fakeStoreUrl
    .get(`/products/${id}`)
    .then((res)=>{
      dispatch({ type: CURRENT_ITEM, payload: res?.data })
      // console.log(res)
      console.log('CurrentItemThen')
    })
    .catch(res => {
      // Alert.alert("Error in login", res)
      console.log(res)
      console.log('CurrentItemCatch')
    })
}

export const deleteItems = id => dispatch => {
  fakeStoreUrl
    .delete(`/products/${id}`)
    .then(res => {
      console.log(res)
      console.log('resthendelete')
    })
    .catch((res)=>{
      console.log('rescatchdelete')
      console.log(res)
    })
}

export const updateItem = (items, id) => dispatch => {
  fakeStoreUrl
    .put(`/products/${id}`, {items})
    .then(res => {
      console.log(res)
      console.log('resThen')
    })
    .catch(res => {
      console.log(res)
      console.log('resCatch')
    })
}

export const filter = () => dispatch => {
  fakeStoreUrl
    .get('/products/category/jewelery?sort=asc\n')
    .then(res=>{console.log(res)})
    .catch(res=>{console.log(res,'catch')})
}

