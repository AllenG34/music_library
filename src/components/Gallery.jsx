import GalleryItem from "./GalleryItem"

export default function Gallery({ data }) {
    const gallerItems = data.map((item, index) => {
        return <GalleryItem item={item} key={index} />
    });

    return <div>
        { gallerItems }
    </div>
}