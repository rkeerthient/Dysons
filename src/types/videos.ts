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

export default interface Ce_videos {
	landingPageUrl?: string,
	richTextDescription?: string,
	name: string,
	c_connector?: string,
	c_datePosted?: string,
	c_defaultLanguage?: string,
	c_duration?: string,
	c_floorType?: string[],
	c_homeSize?: string[],
	c_likesCount?: string,
	c_modelName?: string,
	c_modelNumber?: string,
	c_orderOnPage?: string,
	c_partsAirFacet?: string,
	c_partsHairFacet?: string,
	c_partsVacuumFacet?: string,
	c_price?: string,
	c_primaryCTA?: C_primaryCTA,
	c_ratingCount?: string,
	c_ratingValue?: string,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatus?: string,
	c_stockStatusNumerical?: string,
	c_videoLanguage?: string,
	c_videoTags?: string[],
	c_videoURL?: string,
	c_viewsCount?: string,
	id: string,
}
