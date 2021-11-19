import { fakeStoreUrl } from "../../config/api/axiosConfig";
import { Alert } from "react-native";


// export const login = (email, password) => {
//   console.log(email)
//   console.log(password)
//   fakeStoreUrl
//     .post('/auth/login', {email, password})
//     .then((res)=>{
//       console.log(res)
//       console.log('loginThen')
//     })
//     .catch(res => {
//       Alert.alert("Error in login", res)
//       console.log(res)
//       console.log('loginCatch')
//     })
// }

export const login = ({ email, password }) => async dispatch => {
}


