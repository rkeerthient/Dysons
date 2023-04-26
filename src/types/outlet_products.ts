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

export default interface Ce_outletProducts {
	landingPageUrl?: string,
	richTextDescription?: string,
	name: string,
	c_absolute?: string,
	c_absoluteNumerical?: string,
	c_featuredProduct?: boolean,
	c_floorType?: string[],
	c_homeSize?: string[],
	c_inBox?: string,
	c_keywords?: string,
	c_modelName?: string,
	c_modelNumber?: string,
	c_orderOnPage?: string,
	c_partsAirFacet?: string,
	c_partsHairFacet?: string,
	c_partsVacuumFacet?: string,
	c_price?: string,
	c_productType?: string,
	c_promotionVerbiage?: string,
	c_reducedPrice?: string,
	c_savings?: string,
	c_sKU?: string,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatus?: string,
	c_stockStatusNumerical?: string,
	c_strikethroughPrice?: string,
	c_type?: string,
	photoGallery?: ComplexImage[],
	id: string,
}
