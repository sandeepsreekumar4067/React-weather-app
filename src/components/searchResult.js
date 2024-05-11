import '../Style/searchComponent.css'
const SearchResultComponent = (props) => {
    const results = props.results
    const onClick = props.onClick
    return ( 
        results.map((data,index)=>(
            <div className="SearchComponent" onClick={
                ()=>(
                   onClick(data.lat,data.long)
                )
            } key={index} >
                {data.placename},{data.state}
            </div>
        ))
     );
}
 
export default SearchResultComponent;