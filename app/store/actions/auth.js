import { fakeStoreUrl } from "../../config/api/axiosConfig";
import { Alert } from "react-native";


export const login = () => {
  fakeStoreUrl
    .post('/auth/login')
    .then((res)=>{
      console.log(res)
      console.log('loginThen')
    })
    .catch(res => {
      Alert.alert("Error in login", res)
      console.log(res)
      console.log('loginCatch')
    })
}


