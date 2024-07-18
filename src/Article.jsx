

function Article(props) {
    // console.log(props.background);
    if (props.extend) {
        return <article className="text-center md:text-start md:col-span-3 md:grid md:grid-cols-2">
            <div>
            <picture>
                <source srcSet={props.cover} media="(max-width: 768px)" />
                <img src={props.cover1} alt={props.title} className="w-full h-full object-cover"/>
            </picture>
            </div>
            <section className="px-5 py-10">
                <h2 className="font-fraunces text-4xl font-extrabold text-heading-text-color mb-5">{props.title}</h2>
                <p className="text-dark-grayish-blue font-semibold mb-5">{props.summary}</p>
                <a href="#" className="text-heading-text-color font-fraunces font-bold text-xl relative px-2 after:absolute after:w-full after:h-2 after:bg-link-yellow after:left-0 after:top-4 after:rounded-3xl after:-z-10 after:opacity-50 hover:after:opacity-100">
                    <span className="relative">{props.cta}</span>
                </a>
            </section>
        </article>
    }
    return <article className="relative text-center flex flex-col justify-end">
        <picture className="absolute w-full h-full -z-10 object-cover">
                <source srcSet={props.background} media="(max-width: 768px)" />
                <img src={props.background1} alt={props.title} className="w-full h-full object-cover"/>
            </picture>
        <section className="px-5 py-10">
        <h2 className="font-fraunces text-4xl font-extrabold text-heading-text-color mb-5">{props.title}</h2>
        <p className="text-dark-grayish-blue font-semibold mb-5">{props.summary}</p>
        </section>
    </article>
}

export default Article;