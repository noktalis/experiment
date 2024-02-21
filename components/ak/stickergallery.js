import format from "../../styles/modules/gallery.module.scss";
import {StickerMap} from '@/components/ak/stickermap';

/**
 * Component for displaying an Arknights sticker pack, the pack's data stored in a map
 * @returns 
 */
export default function AKStickerGallery({children, ...data}){
	let pack = data['pack'];
	// let map = StickerMap.stickers;
	console.log(StickerMap.stickers["chen_annoy"]);

	let cnDate;
	let enDate;

	try {
		cnDate = dateStringReformat(pack["cn-date"]);
		enDate = dateStringReformat(pack["en-date"]);
		// console.log(cnDate);
		console.log("Dates set");
	} catch (error) {
		console.log("Could not set dates");
	}
	
	return (
		<>
		{ pack ? 	
			<>
				<h2>{pack["name"]}</h2>
				<CNDate src={pack["cn-src"]} dateStr={cnDate}/>
				<ENDate src={pack["en-src"]} dateStr={enDate}/>
				{children}
			</>
			: <></>
		}
		</>
	); // end return
} // end Component

function ENDate({dateStr, src}) {
	if (src) {
		return (
			<p>
				Released to EN: <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else if (dateStr) {
		return (
			<p>
				Released to EN: {dateStr}
			</p>
		);
	} else {
		return (
			<p>
				Released to EN: Unknown
			</p>
		);
	}
}

function CNDate({dateStr, src}) {
	if (src) {
		return (
			<p>
				Released to CN: <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else if (dateStr) {
		return (
			<p>
				Released to CN: {dateStr}
			</p>
		);
	} else {
		return (
			<p>
				Released to CN: Unknown
			</p>
		);
	}
}

/**
 * Converts a data string from YYYY-MM-DD (ISO) format to DD Mon YYYY format
 * @param {String} string - a date in ISO format
 * 
 * @returns date string in DD Mon YYYY format
 */
function dateStringReformat(string) {
	let date = new Date(string);
	let newStr = date.toUTCString().substring(5,16);

	return newStr;
}
