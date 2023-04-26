export enum C_activeInAnswers {
	YES = "Yes",
	NO = "No",
}

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

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Ce_pinnedBanners {
	landingPageUrl?: string,
	richTextDescription?: string,
	name: string,
	c_activeInAnswers?: C_activeInAnswers,
	c_activeOnProduction?: boolean,
	c_activeOnStaging?: boolean,
	c_connector?: string,
	c_floorType?: string[],
	c_homeSize?: string[],
	c_mobileImage?: Image,
	c_modelName?: string,
	c_modelNumber?: string,
	c_orderOnPage?: string,
	c_partsAirFacet?: string,
	c_partsHairFacet?: string,
	c_partsVacuumFacet?: string,
	c_photo?: Image,
	c_price?: string,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatus?: string,
	c_stockStatusNumerical?: string,
	keywords?: string[],
	id: string,
}
