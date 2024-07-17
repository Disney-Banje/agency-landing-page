import { services } from "./services";
import Article from "./Article";

function ServiceSection () {
    // console.log(services);
    return (
        <section>
            {services.map((service, index) => (
                <Article key={index} {...service} />
            ))}
        </section>
    );
}

export default ServiceSection;