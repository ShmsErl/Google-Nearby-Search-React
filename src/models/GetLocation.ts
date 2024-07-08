export default interface GetLocation {

	searchRequestId: number;
	place_id: string;
	name: string;
	vicinity: string;
	geometry: Geometry;
}



export interface Geometry {
	location: Location;
}

export interface Location {
	lat: number;
	lng: number;
}
