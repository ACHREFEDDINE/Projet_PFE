import axios from "axios";
const fake = [
  {
    id: "61598bf55b71d682586e4c37",
    status: 1,
    createdAt: "2021-10-03T10:54:45.813Z",
    startAt: "2022-04-15T06:00:00.000Z",
    endAt: "2022-12-31T00:00:00.000Z",
    persNb: 2400,
    price: 0,
    TtlPrice: 0,
    sub: 0,
    farmId: "6146f21c5b71d682586e4bb4",
    adminId: "612901336bc5cb6a9c140808",
    govId: "6137def71c73eb28103c18ea",
    delegationId: "6137df3f1c73eb28103c1964",
    localityId: "6137df3f1c73eb28103c1965",
    companyTypeId: "60c389995e4e9ba20cc5f4fd",
    harvestTypeId: "6146f1135b71d682586e4bb3",
    searchers: [
      {
        id: "617722495b71d682586e4d0c",
        createdAt: "2021-10-25T21:31:53.362Z",
        status: 1,
        adId: "61598bf55b71d682586e4c37",
        searcherId: "617721e35b71d682586e4d0a",
      },
    ],
    farm: {
      id: "6146f21c5b71d682586e4bb4",
      name: "مرحبا مهدية",
      status: 1,
      createdAt: "2021-09-19T08:17:32.594Z",
      address: "تونس الخضراء",
      requestNb: 0,
      advs: [],
      govId: "6137def71c73eb28103c18ea",
      delegationId: "6137df3f1c73eb28103c1964",
      localityId: "6137df4a1c73eb28103c1977",
      managerId: "612901336bc5cb6a9c140808",
      harvestTypeId: "6146f1135b71d682586e4bb3",
      gov: {
        id: "6137def71c73eb28103c18ea",
        name: "Mahdia",
        nameAr: "المهدية",
        status: 1,
        createdAt: "2021-09-07T21:51:51.743Z",
        countryId: "60a7a008d65bba8fa22951ef",
      },
      manager: {
        id: "612901336bc5cb6a9c140808",
        lastName: "string",
        email: "achref@misra.com",
        emailPerso: "string",
        password:
          "$2a$10$KayCNoP1L.D.SmapmFER/.NoAnoWx5k02JeQ60Uk3yADGzea6dXn2",
        role: "string",
        status: 0,
        img: "string",
        nationalite: "string",
        phone: "string",
        gender: "string",
        societeName: "string",
        username: "string",
        voluntary: true,
        drLic: true,
        passport: true,
        verifStatus: true,
        rating: 0,
        reviewNb: 0,
        reviewSom: 0,
        farmNb: 0,
        createdAt: "2022-05-03T14:29:01.467Z",
        verifed: true,
        codeValidation: "string",
        subscriptionNb: 0,
        facebookId: "string",
        oneSignalId: "string",
        registrationId: "string",
        countryId: "string",
        languageId: "string",
        govId: "string",
        delegationId: "string",
        localityId: "string",
        ageId: "string",
        companyTypeId: "string",
        additionalProp1: {},
      },
      delegation: {
        id: "6137df3f1c73eb28103c1964",
        name: "Mahdia",
        nameAr: "المهدية",
        status: 1,
        createdAt: "2021-09-07T21:53:03.370Z",
        govId: "6137def71c73eb28103c18ea",
      },
      harvestType: {
        id: "6146f1135b71d682586e4bb3",
        name: "Bienvenue à Misra",
        nameAr: "مرحبا بكم",
        status: 1,
        createdAt: "2021-09-19T08:13:07.057Z",
      },
    },
  },
];
const getAllAds = (dispatch, state) => {
  try {
    if (state.isRealData) {
      axios.get("http://41.231.54.51/server/ads").then((res) => {
        dispatch({ type: "adsList", ads: res.data.list, isRealData: true });
      });
    } else {
      dispatch({ type: "adsList", ads: fake, isRealData: false });
    }
  } catch (error) {
    dispatch({ type: "adsList", ads: [], isRealData: false });
  }
};

export const adsAction = {
  getAllAds,
};
