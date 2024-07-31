import Items from "./Item";

function Article({ cover, cover1, title, summary, cta, color, background, background1, extend, type }) {
    // console.log(props.background);
    // Using a conditional statement to be able to generate articles with different styling.
    if (extend) {
        return (
            <Items 
            cover={cover}
            cover1={cover1}
            title={title}
            summary={summary}
            cta= {cta}
            color={color}/>
        );
    }
    return (
        <article className="relative text-center flex flex-col justify-end">

            <picture className="absolute w-full h-full -z-10 object-cover">
                    <source srcSet={background} media="(max-width: 768px)" />
                    <img src={background1} alt={title} className="w-full h-full object-cover"/>
                </picture>

                {/* Conditional for rendering content with different text color following the type prop */}
            <section className="px-5 py-10">
            {type === 'design' ? (
                <>
                 <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-graphic-design-text-color mb-5">{title}</h2>
                 <p className="text-graphic-design-text-color font-semibold mb-5">{summary}</p>
                </>
            ) : (
                <>
                 <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-photography-text-color mb-5">{title}</h2>
                 <p className="text-photography-text-color font-semibold mb-5">{summary}</p>
                </>
            )}
            </section>
       </article>
    );
}

export default Article;