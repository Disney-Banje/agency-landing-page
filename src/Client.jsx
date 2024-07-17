
function Client(props) {
    return (
        <article>
            <img src={props.avatar} alt={props.clientName} />
            <p>{props.testimonial}</p>
            <h3>{props.clientName}</h3>
            <p>{props.position}</p>
        </article>
    );
}

export default Client;