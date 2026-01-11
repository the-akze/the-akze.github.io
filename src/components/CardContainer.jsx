import Card from "./Card"

function CardContainer(props) {
    if (!props.data) {
        return <p>?</p>
    }
    return (
        <div className="card-container">
            {props.data.map((value, index) => (
                <Card data={value} key={index}/>
            ))}
        </div>
    )
}

export default CardContainer;