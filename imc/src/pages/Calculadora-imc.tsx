
import React from "react";
import styles from "@/styles/Home.module.css";




function calculadora_imc() {
    return( 
    
    <main className={styles.main} >

        <section className={styles.section}>

            <h1 className={styles.title}>Calculadora IMC</h1>

            <form className={styles.form}>
            <label htmlFor="peso">Peso(kg):</label>
                <input type="number" id="peso"/>

                <label htmlFor="altura">Altura(m):</label>
                <input type="number" id="altura"/>
            </form>
                
            
            <button className={styles.button}>Calcular</button>
        </section>   
    </main>)
}

export default calculadora_imc()