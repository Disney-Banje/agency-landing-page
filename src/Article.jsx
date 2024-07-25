import Items from "./Item";

function Article(props) {
    // console.log(props.background);
    // Using a conditional statement to be able to generate articles with different styling.
    if (props.extend) {
        return (
            <Items 
            cover={props.cover}
            cover1={props.cover1}
            title={props.title}
            summary={props.summary}
            cta= {props.cta}
            color={props.color}/>
        );
    }
    return (
        <article className="relative text-center flex flex-col justify-end">
            <picture className="absolute w-full h-full -z-10 object-cover">
                    <source srcSet={props.background} media="(max-width: 768px)" />
                    <img src={props.background1} alt={props.title} className="w-full h-full object-cover"/>
                </picture>
            <section className="px-5 py-10">
            {props.type === 'design' ? (
                <>
                 <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-graphic-design-text-color mb-5">{props.title}</h2>
                 <p className="text-graphic-design-text-color font-semibold mb-5">{props.summary}</p>
                </>
            ) : (
                <>
                 <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-photography-text-color mb-5">{props.title}</h2>
                 <p className="text-photography-text-color font-semibold mb-5">{props.summary}</p>
                </>
            )}
            </section>
       </article>
    );
}

export default Article;