import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MyCard from './MyCard.jsx';

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito"/>
      <div className="group">
        <MyCard nombre= "Johnny Bravo" imagen="Dog-1.jpg" descripcion="Soy un guapo golden con mucho estilo, me gusta salir a pasear y ser el centro de atencion del parque y que todas las dogsgirls me sigan"
                tagNombre="Golden  Retriever" tagColor="success"
        />
        <MyCard nombre= "Revoltoso"  imagen="Dog-2.jpg" descripcion="Aunque soy muy torpe estoy lleno de full energia y listo para ser de gran compañia"
                tagNombre="Labrador" tagColor="primary"
        />
        <MyCard nombre="DoñaLupe" imagen="Dog-3.webp" descripcion="Soy muy amigable y repetuosa quepo en todos lados me puedes llevar y ni cuenta se daran"
                tagNombre="Chihuahua" tagColor="primary"
        />
        <MyCard nombre="Sanson" imagen="Dog-5.jpg" descripcion="lo mas tierno que veras hoy fuerte y grandulon por eso me llamo el gran sanson"
          tagNombre="Dalmata" tagColor="primary"
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
