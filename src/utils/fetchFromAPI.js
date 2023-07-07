// import axios from 'axios'

// const BASE_URL="https://youtube-v311.p.rapidapi.com"

// const options = {
//   method: 'GET',
//   url: BASE_URL,
//   params: {
//     relatedToVideoId: '7ghhRHRP6t4',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c7fb59274fmshcc7d0d24b75ad1fp11a7dbjsncf0de1cc83eb',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
  
//   export const fetchFromAPI = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
//     return data;
//   };

import axios from 'axios';

const BASE_URL = "https://youtube-v311.p.rapidapi.com"; // Update the base URL

const options = {
  method: 'GET',
  url: '/search', // Replace this with the specific endpoint URL you want to access
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'c7fb59274fmshcc7d0d24b75ad1fp11a7dbjsncf0de1cc83eb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.request({
      ...options,
      url: `${BASE_URL}/${url}` // Append the specific endpoint URL to the base URL
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
