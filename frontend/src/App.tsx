
import { Toaster} from 'sonner';
import { BrowserRouter,Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <div>
      {/* <button onClick={() => toast("jejejefabjsaf")}>test</button> */}
      <BrowserRouter>
      <Routes> 
        <Route path="/"
              element={<HomePage></HomePage>}/>
        <Route path="*"
              element={<NotFound></NotFound>}/>
      </Routes>
      
      </BrowserRouter>
      <Toaster ></Toaster>
    </div>
    
  )
}

export default App
