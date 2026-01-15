function Card(props) {
    if (!props.data) {
        return <p>?</p>
    }

    console.log("props data image", props.data.image);

    return (
        <a className="card" href={props.data.url ? props.data.url : undefined} target="_blank">
            {props.data.image ? <div className="card-img" style={{backgroundImage: `url(${props.data.image})`}}></div> : undefined}
            <h4 className="card-title">
                {props.data.title}
            </h4>
            {props.data.subtitle ? <p className="card-subtitle">{props.data.subtitle}</p> : undefined}
            {props.data.subtitles ? (
                props.data.subtitles.map((value, index) => (
                    <p className="card-subtitle" key={index}>{value}</p>
                ))
            ) : undefined}
            {props.data.description ? (
                <p className="card-description">
                    {props.data.description}
                </p>
            ) : undefined}
        </a>
    )
}

export default Card;