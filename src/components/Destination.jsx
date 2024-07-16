import Mountain1 from "../assets/img/1.jpg";
import Mountain2 from "../assets/img/2.jpg";
import Mountain3 from "../assets/img/5.jpg";
import Mountain4 from "../assets/img/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the oppurtunity to see a lot within a time frame</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quas ad delectus exercitationem? Aliquid eum cum ipsam iusto ipsum? Ab beatae exercitationem quaerat voluptas aliquid. Dolorum, similique sint! Illo laborum nihil aliquam, expedita quasi dicta quia odio cum quaerat obcaecati corrupti blanditiis quae nisi aut cumque inventore repudiandae, dignissimos laudantium itaque unde. Explicabo, aliquam laboriosam quia inventore quae ea incidunt tempora temporibus enim optio! Animi eveniet reprehenderit iure atque, corrupti, perferendis ullam non consequuntur cupiditate accusamus numquam quidem vel commodi! Officiis veritatis quisquam eum ea blanditiis corrupti ullam repudiandae incidunt, eius veniam magnam odit iste iure beatae? Libero, expedita animi."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi. Expedita nesciunt aut odit amet accusantium vel cumque recusandae atque reprehenderit ipsam, veniam at excepturi quaerat sint dolorum eveniet eligendi ullam? Adipisci sequi tempore expedita, quisquam aspernatur atque, ipsum laboriosam quaerat molestiae voluptates saepe perspiciatis repellendus dolorem, error officiis facilis et laborum asperiores ex debitis facere repellat non. Atque provident porro maxime illo exercitationem culpa modi? Consequatur minus aperiam facilis cum odio ratione consequuntur omnis! Dolorem doloribus expedita corporis et facere dignissimos iste dolor impedit sint illum, aperiam iusto, similique eos dicta cumque. Illo tempore deleniti, modi ullam delectus quos."
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    )
}

export default Destination