import axios from 'axios';

const API = 'https://testimonialapi.toolcarton.com/api'

export const TestimonyList = async (state) => {
  const response = await axios.get(API)
  state(response.data)
}

