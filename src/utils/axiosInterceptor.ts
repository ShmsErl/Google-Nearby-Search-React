
import axios from "axios";
import store from "../store/store";
import { decreaseRequestCount, increaseRequestCount } from "../store/slice/loadingSlice";
const axiosInstance = axios.create({


	baseURL: "https://api.sehmuserol.com.tr/api/v1/",

});


axiosInstance.interceptors.request.use(
	async (config) => {
		store.dispatch(increaseRequestCount())
		
		return Promise.resolve(config)

	},

	(error) => {

		return Promise.reject(error);
	}
);


axiosInstance.interceptors.response.use(
	(response) => {
		store.dispatch(decreaseRequestCount())

		return Promise.resolve(response)
	},
	(error) => {
		store.dispatch(decreaseRequestCount())
		return Promise.reject(error);
	}



);
export default axiosInstance;