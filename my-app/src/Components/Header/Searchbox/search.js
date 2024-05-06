import { FaSearch } from "react-icons/fa";

const SearchBox=()=>{
    return(
        <div className='search'>
                            <input type='text' placeholder='Search items'/>
                           <button> <FaSearch /></button>
                    </div>
    )

}
export  default SearchBox;