import axios from "axios";

const fake = [
  {
    id: "60abc8b150d57121df3499e3",
    name: "13 - 17",
    status: 1,
    createdAt: "2021-05-24T15:39:29.045Z",
  },
  {
    id: "60abc8c150d57121df3499e4",
    name: "18 - 24",
    status: 1,
    createdAt: "2021-05-24T15:39:45.299Z",
  },
  {
    id: "60abc8d450d57121df3499e5",
    name: "25 - 34",
    status: 1,
    createdAt: "2021-05-24T15:40:04.308Z",
  },
  {
    id: "60abc8e850d57121df3499e6",
    name: "35 - 50",
    status: 1,
    createdAt: "2021-05-24T15:40:24.315Z",
  },
  {
    id: "60abc90850d57121df3499e7",
    name: "50+",
    status: 1,
    createdAt: "2021-05-24T15:40:56.623Z",
  },
];

const getAllAges = (dispatch, state) => {
  try {
    if (state.isRealData) {
      axios.get("http://41.231.54.51/server/ages").then((res) => {
        dispatch({ type: "agesList", ages: res.data.list, isRealData: true });
      });
    } else {
      dispatch({ type: "agesList", ages: fake, isRealData: false });
    }
  } catch (error) {
    dispatch({ type: "agesList", ages: [], isRealData: false });
  }
};

export const agesAction = {
  getAllAges,
};
