import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.darksky.net/forecast/7cebc8502232a88ba7945ddf26a2503f',
})

export default api;
