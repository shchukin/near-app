import Deal from "../../components/deal/deal.jsx";
import {deals} from "../../mocks/deals.js";
import './../../pages/promo/promo.css';

function Promo() {

    return (
        <div className="promo container">
            {
                deals.map((deal) => {
                    return (
                        <Deal data={deal} key={deal.id}/>
                    )
                })
            }
        </div>
    )
}

export default Promo
