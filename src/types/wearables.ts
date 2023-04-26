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

export default interface Ce_wearables {
	landingPageUrl?: string,
	richTextDescription?: string,
	name: string,
	c_floorType?: string[],
	c_homeSize?: string[],
	c_price?: string,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatusNumerical?: string,
	photoGallery?: ComplexImage[],
	id: string,
}
