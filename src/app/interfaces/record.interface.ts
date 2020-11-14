import { IFloorplan, IGeocode } from '.';

export interface IRecord {
	listID: number;
	order: number;
	propertyID: number;
	name: string;
	streetAddress: string;
	city: string;
	state: string;
	pets: boolean;
	washerDry: string;
	photo: string;
	favorite: boolean;
	highestSentCommissions: number;
	onsiteManager?: unknown;
	management?: unknown;
	proximity: number;
	section8: boolean;
	seniorHousing: boolean;
	studentHousting: boolean;
	floorplans: IFloorplan[];
	highValueAmenities: string[];
	paidUtilities: string[];
	geocode: IGeocode;
}
