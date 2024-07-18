
function Client(props) {
    return (
        <article className="text-center max-w-96">
            <img src={props.avatar} alt={props.clientName} className="w-16 rounded-full mx-auto mb-8"/>
            <p className="mb-8 font-semibold text-very-dark-grayish-blue">{props.testimonial}</p>
            <h3 className="text-heading-text-color font-fraunces font-bold text-xl mb-2">{props.clientName}</h3>
            <p className="text-grayish-blue font-semibold text-sm">{props.position}</p>
        </article>
    );
}

export default Client;