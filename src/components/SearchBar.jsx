import { useState } from "react"


export default function SearchBar({handleSearch}) {
    let [searchTerm, setSearchTerm] = useState('');

    const onSubmit = e => {
        handleSearch(e, searchTerm);
    }

    return <form>
        <input 
            type='text'
            placeholder="Enter a search term here"
            onChange={ e => handleSearch(e, e.target.value ) }
        />
        <input type='submit' />
    </form>
}