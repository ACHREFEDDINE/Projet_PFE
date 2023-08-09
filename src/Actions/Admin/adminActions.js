import axios from "axios";
import { get } from "jquery";

const fake = [
  {
    id: "14",
    password: "string",
    firstName: "admin",
    lastName: "admin",
    email: "admin@misra.com",
    emailPerso: "string",
    role: "admin",
    status: 0,
    nationalite: "string",
    username: "string",
    voluntary: true,
    farmNb: 0,
    createdAt: "2022-05-05T10:20:27.897Z",
    verifed: true,
    subscriptionNb: 0,
    govId: "string",
    delegationId: "string",
    localityId: "string",
    ageId: "string",
  },
];

const getAllAdmins = (dispatch, state) => {
  try {
    if (state.isRealData) {
      axios
        .get("http://41.231.54.51/server/users")
        .then((res) => {
          console.log(res);
          dispatch({
            type: "adminsList",
            admins: res.data,
            isRealData: true,
          });
        })
        .catch((er) => {
          console.log("error");
        });
    } else {
      dispatch({
        type: "adminsList",
        admins: fake,
        isRealData: false,
      });
    }
  } catch (error) {
    dispatch({
      type: "adminsList",
      admins: [],
      isRealData: false,
    });
  }
};

const updateProfile = (dispatch, state, user) => {
  try {
    if (state.isRealData) {
      axios.put("http://41.231.54.51/server/users/" + user.id, user);
    }
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const adminsAction = {
  getAllAdmins,
  updateProfile,
};
