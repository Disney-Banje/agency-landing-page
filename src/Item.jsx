

function Items({ cover, cover1, title, summary, color, cta }) {
    return (
        <article className="learn-more text-center md:text-start md:col-span-3 md:grid md:grid-cols-2">
                <div>
                <picture>
                    <source srcSet={cover} media="(max-width: 768px)" />
                    <img src={cover1} alt={title} className="w-full h-full"/>
                </picture>
                </div>
                {/* Using a ternary operator to generate a row-reverse in landscape mode for the first element to follow the design. */}
                {title === 'Transform your brand' ? (
                    <section className="px-5 py-10 lg:px-16 2xl:px-24 md:self-center md:row-start-1">
                        <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-heading-text-color mb-5">{title}</h2>
                        <p className="text-dark-grayish-blue font-semibold mb-5">{summary}</p>
                        {/* Ternary operator for pseudo element since they have different colors. */}
                        {color === 'yellow' ? (
                                <a href="#" className="text-heading-text-color font-fraunces font-bold text-xl relative px-2 after:absolute after:w-full after:h-2 after:bg-link-yellow after:left-0 after:top-4 after:rounded-3xl after:-z-10 after:opacity-50 hover:after:opacity-100">
                                    <span className="relative">{cta}</span>
                                </a>
                            ) : (
                                <a href="#" className="text-heading-text-color font-fraunces font-bold text-xl relative px-2 after:absolute after:w-full after:h-2 after:bg-link-soft-red after:left-0 after:top-4 after:rounded-3xl after:-z-10 after:opacity-50 hover:after:opacity-100">
                                    <span className="relative">{cta}</span>
                                </a>
                            )}
                    </section>
                ) : (
                    <section className="px-5 py-10 lg:px-16 2xl:px-24 md:self-center">
                        <h2 className="font-fraunces text-4xl xl:text-5xl font-extrabold text-heading-text-color mb-5">{title}</h2>
                        <p className="text-dark-grayish-blue font-semibold mb-5">{summary}</p>
                        {color === 'yellow' ? (
                                <a href="#" className="text-heading-text-color font-fraunces font-bold text-xl relative px-2 after:absolute after:w-full after:h-2 after:bg-link-yellow after:left-0 after:top-4 after:rounded-3xl after:-z-10 after:opacity-50 hover:after:opacity-100">
                                    <span className="relative">{cta}</span>
                                </a>
                            ) : (
                                <a href="#" className="text-heading-text-color font-fraunces font-bold text-xl relative px-2 after:absolute after:w-full after:h-2 after:bg-link-soft-red after:left-0 after:top-4 after:rounded-3xl after:-z-10 after:opacity-50 hover:after:opacity-100">
                                    <span className="relative">{cta}</span>
                                </a>
                            )}
                    </section>
                )}
            </article>
    );
}

export default Items;