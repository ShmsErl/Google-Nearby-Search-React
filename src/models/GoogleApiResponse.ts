import GetLocation from "./GetLocation";

export default interface GoogleApiResponse{
    
	html_attributions: any[];
	results: GetLocation[];
	status: string;

}