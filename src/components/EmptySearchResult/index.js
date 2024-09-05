import React from "react";
import "./EmptySearchResult.css"

function EmptySearchResult({searchText}) {
    return(
        <span className="container-not-found">
            
            <span className="not-found">
                
                No results found to {searchText} 
            </span>
        </span>
    )
}



export {EmptySearchResult};