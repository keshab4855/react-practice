// import React from "react";
import axios from "axios";

// const api = () => {
//   return <>axios.get('https://api.unsplash.com/search/photos', {
//     headers: {
// Authorization: "Client-ID ajsEcmGhrSYiCCttisL_2VZR-yzqby8x9FGTDLLQZXc"
//     },
//     params:{

//     }
//   })</>;
// };

// export default api;

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ajsEcmGhrSYiCCttisL_2VZR-yzqby8x9FGTDLLQZXc",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
