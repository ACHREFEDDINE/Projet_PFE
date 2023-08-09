import axios from "axios";

const fake = [
  {
    id: "1",
    firstName: "Searcher 1",
    lastName: "ln",
    email: "string",
    emailPerso: "string",
    role: "searcher",
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
    age: {
      id: "60abc8d450d57121df3499e5",
      name: "string",
      status: 0,
      createdAt: "2022-05-26T20:47:48.557Z",
    },
  },
  {
    id: "2",
    firstName: "Searcher 2",
    lastName: "ln",
    email: "string",
    emailPerso: "string",
    role: "searcher",
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
    age: {
      id: "60abc8d450d57121df3499e5",
      name: "string",
      status: 0,
      createdAt: "2022-05-26T20:47:48.557Z",
    },
  },
  {
    id: "3",
    firstName: "Searcher 3",
    lastName: "ln",
    email: "string",
    emailPerso: "string",
    role: "searcher",
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
    age: {
      id: "60abc8d450d57121df3499e5",
      name: "string",
      status: 0,
      createdAt: "2022-05-26T20:47:48.557Z",
    },
  },
  {
    id: "4",
    firstName: "Searcher 4",
    lastName: "ln",
    email: "string",
    emailPerso: "string",
    role: "searcher",
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
    age: {
      id: "60abc90850d57121df3499e7",
      name: "string",
      status: 0,
      createdAt: "2022-05-26T20:47:48.557Z",
    },
  },
];
const getAllSearcher = (dispatch, state) => {
  try {
    if (state.isRealData) {
      axios.get("http://41.231.54.51/server/searcher").then((res) => {
        dispatch({ type: "chercheursList", chercheurs: res.data.list });
      });
    } else {
      dispatch({ type: "chercheursList", chercheurs: fake });
    }
  } catch (error) {
    console.log(error);
  }
};

export const searcherAction = {
  getAllSearcher,
};
