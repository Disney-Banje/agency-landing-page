import { clientList } from "./clientList";
import Client from "./Client";

function Testimonials() {
    return (
        <section className="px-5 py-10 lg:py-36">
            <h2 className="mb-12 text-base tracking-[5px] text-center font-fraunces text-grayish-blue uppercase font-extrabold">Client testimonials</h2>
            <div className="flex flex-row flex-wrap justify-center gap-12">
                {
                    clientList.map((client, index) => (
                        <Client key={index} {...client} />
                    ))
                }
            </div>
        </section>
    );
}


export default Testimonials;