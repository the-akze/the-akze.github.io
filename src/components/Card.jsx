function Card(props) {
    if (!props.data) {
        return <p>?</p>
    }

    console.log("props data image", props.data.image);

    return (
        <a className="card" href="">
            {props.data.image ? <div className="card-img" style={{backgroundImage: `url(${props.data.image})`}}></div> : undefined}
            <h3 className="card-title">
                {props.data.title}
            </h3>
            <p className="card-description">
                {props.data.description}
            </p>
        </a>
    )
}

export default Card;