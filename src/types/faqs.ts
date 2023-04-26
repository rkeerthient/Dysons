export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Faq {
	answer?: string,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	question: string,
	slug?: string,
	logo?: ComplexImage,
	name: string,
	c_floorType?: string[],
	c_homeSize?: string[],
	c_modelName?: string,
	c_modelNumber?: string,
	c_orderOnPage?: string,
	c_partsAirFacet?: string,
	c_partsHairFacet?: string,
	c_partsVacuumFacet?: string,
	c_primaryCTA?: C_primaryCTA,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatusNumerical?: string,
	c_vacuumSupported?: string,
	keywords?: string[],
	id: string,
	timezone?: any,
}
