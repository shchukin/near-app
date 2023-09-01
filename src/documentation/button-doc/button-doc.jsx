import Button from "../../components/button/button.jsx";

function ButtonDoc() {

    return (
        <div style={{maxWidth: "390px", margin: "0 auto"}}>

            <br/>
            <br/>
            <br/>
            <br/>
            <h1>.button</h1>
            <p>
                Дефолтной кнопки не существует. Вызвать её, конечно, можно:
            </p>

            <Button>
                Найти любимое место
            </Button>

            <p>
                ... но она никак не стилизована.
            </p>


            <br/>
            <br/>
            <h2>theme</h2>
            <p>
                Обязательная пропса. Какой-то из следующих скинчиков обезательно нужно выбрать:
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

export default ButtonDoc
