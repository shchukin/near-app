import Deal from "../../components/deal/deal.jsx";
import {deals} from "../../mocks/deals.js";
import Nav from "../../components/nav/nav.jsx";

function Promo() {

    return (
        <>
            <div className="promo container">
                {
                    deals.map((deal) => {
                        return (
                            <Deal data={deal} key={deal.id}/>
                        )
                    })
                }
            </div>
            <Nav/>
        </>
    )
}

export default Promo;
