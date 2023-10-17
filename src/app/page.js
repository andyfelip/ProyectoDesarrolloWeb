import Image from 'next/image'; 
import styles from './components/variables.module.scss'; 
import Layout from './layout'; 


export default function Login() {
  return (

    <Layout>

      <section className={styles.leftform}>
        <form className = {styles.formulariologin}>
            <h2 className={styles.h2title}>Inicio Sesion</h2>
            <label  className={styles.label}>Correo: </label>
            <input type='email' name='correo' id='correo' className={styles.input} placeholder='ingrese su correo'/>
            <label className={styles.label}>Password: </label>
            <input type='password' name='password' id='password' className={styles.input} placeholder='ingrese su password'/>
            <input type='submit' value='Iniciar Sesion' className={styles.input} />
        </form>
      </section>
      <section className={styles.rightform}>

          

      </section>

    </Layout>
    
  )
}
