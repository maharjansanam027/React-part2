function Card(props){
    return(
        <div id="card" style={{padding:"2px",fontFamily:"Noto Sans"}}>
            <img src={props.image} alt="" height="250px" width="200px"/>
            <div style={{textAlign:"center"}}>
                <h2>{props.dresstype}</h2>
                <h1>{props.discount}</h1>
                <h2>Shop Now</h2>
                <button class="price-tag">{`Buy for ${props.price}`}</button>
            </div>
        </div>
    )
}

export default Card;