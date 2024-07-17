

function Article(props) {
    // console.log(props.background);
    if (props.extend) {
        return <article>
            <div>
                <img src={props.cover} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
            <p>{props.summary}</p>
            <a href="#">{props.cta}</a>
        </article>
    }
    return <article>
        <img src={props.background} alt="" />
        <section>
        <h2>{props.title}</h2>
        <p>{props.summary}</p>
        </section>
    </article>
}

export default Article;