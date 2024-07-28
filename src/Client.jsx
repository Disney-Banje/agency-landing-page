
function Client({ avatar, clientName, position, testimonial }) {
    return (
        <article className="text-center max-w-96">
            <img src={avatar} alt={clientName} className="w-16 rounded-full mx-auto mb-8"/>
            <p className="mb-8 font-semibold text-very-dark-grayish-blue">{testimonial}</p>
            <h3 className="text-heading-text-color font-fraunces font-bold text-xl mb-2">{clientName}</h3>
            <p className="text-grayish-blue font-semibold text-sm">{position}</p>
        </article>
    );
}

export default Client;