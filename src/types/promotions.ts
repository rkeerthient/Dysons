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

export default interface Ce_promotion {
	landingPageUrl?: string,
	richTextDescription?: string,
	title?: string,
	name: string,
	c_activeInAnswers?: C_activeInAnswers,
	c_mobileImage?: Image,
	c_subtitle?: string,
	id: string,
}
