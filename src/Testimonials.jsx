import { clientList } from "./clientList";
import Client from "./Client";

function Testimonials() {
    return (
        <section>
            <h2>Client testimonials</h2>
            <div>
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