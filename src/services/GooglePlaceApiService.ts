import GetLocation from "../models/GetLocation";
import GoogleApiResponse from "../models/GoogleApiResponse";
import PostNearbySearch from "../models/PostNearbySearch";
import axiosInstance from "../utils/axiosInterceptor";


class GooglePlaceApiService {
    nearbySearch(requst:PostNearbySearch){
        return axiosInstance.get<GoogleApiResponse>(`nearby-search?latitude=${requst.latitude}&longitude=${requst.longitude}&radius=${requst.radius}`);
    }
}
    

export default new GooglePlaceApiService();