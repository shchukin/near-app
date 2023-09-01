import Button from "../../components/button/button.jsx";
import Deal from "../../components/deal/deal.jsx";
import {deals} from "../../mocks/deals.js";

function Promo() {

    return(
        <div style={{maxWidth: "390px", margin: "0 auto"}}>

            <h1>Deal</h1>


            {
                deals.map((deal, index) => {
                    return (
                        <Deal data={deal}/>
                    )
                })
            }


            <br/>
            <br/>
            <br/>
            <br/>
            <h1>.button</h1>
            <h2>theme</h2>
            <p>
                Обезательная пропса, посколько дефолтной кнопки не существует. Какой-то из следующих скинчиков обезательно нужно выбрать:
            </p>

            <h3>white</h3>

            <Button theme="white">
                Найти любимое место
            </Button>

            <br/>
            <br/>
            <h3>shadow-white</h3>


            <Button theme="shadow-white">
                Найти любимое место
            </Button>

            <br/>
            <br/>
            <h3>black</h3>
            <div style={{backgroundColor: "#000000", padding: "20px"}}>

                <Button theme="black">
                    Найти любимое место
                </Button>

            </div>
            <br/>
            <h3>shadow-black</h3>
            <div style={{backgroundColor: "#000000", padding: "20px"}}>

                <Button theme="shadow-black">
                    Найти любимое место
                </Button>

            </div>


            <br/>
            <br/>
            <h2>socialIcon</h2>
            <p>
                Опциональная иконка. Важно, что здесь расчёт только на иконки соц. сетей -- большие и всегда с краю.
                В общем виде кнопок с иконками нет.
            </p>

            <h3>email</h3>

            <Button theme="white" socialIcon="email">
                Продолжить с Email
            </Button>

            <br/>
            <br/>
            <h3>instagram</h3>

            <Button theme="white" socialIcon="instagram">
                Продолжить с Instagram
            </Button>

            <br/>
            <br/>
            <h3>google</h3>

            <Button theme="white" socialIcon="google">
                Продолжить с Google
            </Button>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </div>
    )
}

export default Promo
