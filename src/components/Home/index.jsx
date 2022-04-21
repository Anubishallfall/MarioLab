import React, { useRef, useState } from 'react'
import Fundo from "../../config/fundo.jpg"
import Logo from "../../config/Orion_medical-research.svg"
import { Body, Input, Form, Header, Foother, Main, Button, DivCaluclar, P, DivResultado, Img, H1, Copy } from "./styles";
function HomePage() {
    const massaRef = useRef();
    const volumeRef = useRef();
    const densidadeRef = useRef();
    const densidadeParaSolidoRef = useRef();

    const [densidadeResultado, setDensidadeResultado] = useState();
    const [solidoResultado, setSolidoResultado] = useState();
    const [liquidoResultado, setLiquidoResultado] = useState();

    function handleCalcularDensidade(e) {
        e.preventDefault();
        console.log(massaRef.current.value)
        const massa = massaRef.current.value;
        const volume = volumeRef.current.value;
        const resultado = massa / volume;
        setDensidadeResultado(resultado)
    }
    function handleCalcularSolido(e) {
        e.preventDefault();
        const ds = densidadeRef.current.value;
        const resultado = ((2.6 * ds) - 2.6) / 1.6;
        setSolidoResultado(resultado);

    }

    function handleCalcularLiquido(e) {
        e.preventDefault();
        const ds = densidadeParaSolidoRef.current.value;
        const solido = ((2.6 * ds) - 2.6) / 1.6;
        const resultado = ds - solido;
        setLiquidoResultado(resultado);

    }




    return (
        <Body background={Fundo}>
            <Header>
                <Img src={Logo} />
                <H1>Mario Peixoto Lab</H1>
            </Header>
            <Main>
                <Form onSubmit={handleCalcularDensidade}>
                    <h5>Densidade</h5>
                    <Input placeholder='Massa' ref={massaRef} />
                    <Input placeholder='volume' ref={volumeRef} />
                    <DivCaluclar>
                        <Button type='submit'>Calcular</Button>
                        <DivResultado>
                            <P>{densidadeResultado}</P>
                        </DivResultado>
                    </DivCaluclar>
                </Form>
                <Form onSubmit={handleCalcularSolido}>
                    <h5>Quantidade de sólido</h5>
                    <Input placeholder='Densidade' ref={densidadeRef} />
                    <DivCaluclar>
                        <Button type='submit'>Calcular</Button>
                        <DivResultado>
                            <P>{solidoResultado}</P>
                        </DivResultado>
                    </DivCaluclar>
                </Form>
                <Form onSubmit={handleCalcularLiquido}>
                    <h5>Quantidade de líquido</h5>
                    <Input placeholder='Densidade' ref={densidadeParaSolidoRef} />
                    <DivCaluclar>
                        <Button type='submit' >Calcular</Button>
                        <DivResultado>
                            <P>{liquidoResultado}</P>
                        </DivResultado>
                    </DivCaluclar>

                </Form>
            </Main>
            <Foother>
                <Copy>© 2022 Mario Peixoto Lab - creator by Mauro Peixoto</Copy>
            </Foother>
        </Body>
    )
}

export default HomePage