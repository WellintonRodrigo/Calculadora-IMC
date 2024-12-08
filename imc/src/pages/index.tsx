import Head from "next/head";
import calculadora_imc from './Calculadora-imc';


export default function Home() {
  return (
    
      <><Head>
      <title>Calculadora de IMC</title>
      <meta name="description" content="Calculadora de IMC" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <calculadora_imc/>
    
    </>
    
  );
}
