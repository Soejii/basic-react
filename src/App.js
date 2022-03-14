import './App.css';
import Test from "./components/Test";
import Employee from "./components/Employee"
import Accordion from "./components/Accordion"



function App() {
  return (
    <div className='App'>
    <h3 align="center">
    5 Fakta Menarik Ganyu
      </h3>  
    <Accordion></Accordion>

    <Employee
      name="Soeji"
      tanggal="14 March 2022"
      gender="Undifined"
      email="Soejiiii@mamak.id"
      telephone="08213732"
      division="Software Developer"
      image="https://www.seekpng.com/png/detail/169-1692416_depressed-crying-shinji-sad-boys-phone-case.png"
      />
    </div>
    
  );
}

export default App;
