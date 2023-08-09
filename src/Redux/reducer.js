const initialState = {
  user: {},
  annonceurs: [],
  chercheurs: [],
  ads: [],
  ages: [],
  admins: [],
  isRealData:
    localStorage.getItem("isRealData") == "true" ||
    localStorage.getItem("isRealData") == true,
  nbMonths: localStorage.getItem("nbMonths"),
  nbRows: localStorage.getItem("nbRows"),
};
function Reducer(state = initialState, action) {
  switch (action.type) {
    case "annoceursList":
      return {
        ...state,
        annonceurs: action.annonceurs,
        isRealData: action.isRealData,
      };
    case "chercheursList":
      return {
        ...state,
        chercheurs: action.chercheurs,
        isRealData: action.isRealData,
      };
    case "adsList":
      return { ...state, ads: action.ads, isRealData: action.isRealData };
    case "agesList":
      return { ...state, ages: action.ages, isRealData: action.isRealData };
    case "adminsList":
      return { ...state, admins: action.admins, isRealData: action.isRealData };
    case "dataSource":
      localStorage.setItem("isRealData", action.isRealData);
      return { ...state, isRealData: action.isRealData };
    case "nbMonths":
      localStorage.setItem("nbMonths", action.nbMonths);
      return { ...state, nbMonths: action.nbMonths };
    case "nbRows":
      localStorage.setItem("nbRows", action.nbRows);
      return { ...state, nbRows: action.nbRows };
    default:
      return state;
  }
}

export default Reducer;
