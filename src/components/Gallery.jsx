import GalleryItem from "./GalleryItem"
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function Gallery(props) {
    const data = useContext(DataContext);

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

