import '../Style/searchComponent.css'
const SearchResultComponent = (props) => {
    const results = props.results
    return ( 
        results.map((data,index)=>(
            <div className="SearchComponent" key={index} >
                {data}
            </div>
        ))
     );
}
 
export default SearchResultComponent;