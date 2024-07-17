

function Abstract() {
    return (
        <section>
            <picture>
                <source srcSet="src/assets/mobile/image-gallery-milkbottles.jpg" media="(max-width: 768px)" />
                <img src="src/assets/desktop/image-gallery-milkbottles.jpg" alt="" />
            </picture>
            <picture>
                <source srcSet="src/assets/mobile/image-gallery-orange.jpg" media="(max-width: 768px)" />
                <img src="src/assets/desktop/image-gallery-orange.jpg" alt="" />
            </picture>
            <picture>
                <source srcSet="src/assets/mobile/image-gallery-cone.jpg" media="(max-width: 768px)" />
                <img src="src/assets/desktop/image-gallery-cone.jpg" alt="" />
            </picture>
            <picture>
                <source srcSet="src/assets/mobile/image-gallery-sugar-cubes.jpg" media="(max-width: 768px)" />
                <img src="src/assets/desktop/image-gallery-sugarcubes.jpg" alt="" />
            </picture>
        </section>
    );
}

export default Abstract;