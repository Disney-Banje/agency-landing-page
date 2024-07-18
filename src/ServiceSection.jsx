import { services } from "./services";
import Article from "./Article";

function ServiceSection () {
    // console.log(services);
    return (
        <section className="grid grid-cols-1 auto-rows-fr md:grid-cols-2">
            {services.map((service, index) => (
                <Article key={index} {...service} />
            ))}
        </section>
    );
}

export default ServiceSection;