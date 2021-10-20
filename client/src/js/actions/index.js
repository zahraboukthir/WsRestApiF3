import { GET_USERS, ADD_USER } from "../actionTypes";
import axios from "axios";

//ADD A NEW USER
//PATH : /users/add_user
// RESPONSE : newUser object

/******** */

//GET ALL USERS
// PATH : /users/GetAllUsers
//response : ARRAY OF USERS

/******* */
//DELETE USER BY ID
//PATH : /users/DeleteUser/:userID

/** */

//UPDATE USER BY ID
//PATH : /users/EditUser/:userID
//RESPONSE THE EDITED USER OBJECT

export const getUsers = () => async(dispatch) => {
 
    try { let res=await axios.get("/users/GetAllUsers")
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    } catch (error) {
      console.log(error);
    }
 
};

export const removeUser = (id) => async(dispatch) => {
  

    try {
       await axios.delete(`/users/DeleteUser/${id}`)
      dispatch(getUsers())
    } catch (error) {
      //err.response.data = { msg :"Error " }
      alert("ERROR DELETE");
    }
};

export const addUser = (newUser) => (dispatch) => {
  //newUser = { name , lastName , email , phone }
  axios
    .post("/users/add_user", newUser)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data, // a newUser object
      })
    )
    .catch((err) => alert("ADD ERROR "));
};

export const editUserById = (id, formData) => (dispatch) => {
  axios.put(`/users/EditUser/${id}`, formData).then((res) => dispatch(getUsers()));
};
