import AppDescription from "./components/AppDescription";
import AppName from "./components/AppName";
import "./App.css"
import BangladeshTime from "./components/BangladeshTime";

export default  function App(){
  return(
    <>
      <div className="mt-5 container text-center bg-success p-4 bdTimeApp">
          <AppName />
          <AppDescription />
          <BangladeshTime />
      </div>
    </>
  )
}