import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useFormContext } from "./AppContext"
import Input from "./Input";
import FormButtons from "./FormButtons";


function AppContainer() {
    const formData = useFormContext();
  return (
    <div>
        <BrowserRouter>
          <br />
          <Link to="/contact">
            <div className="bg-blue-500">Root Link</div>
          </Link>
          <Link to="/contact/input1">
            <div className="bg-red-500">Input-1 Link</div>
          </Link>
          <Link to="/contact/input2">
            <div className="bg-yellow-500">Input-2 Link</div>
          </Link>
          <Link to="/contact/input3">
            <div className="bg-green-500">Input-3 Link</div>
          </Link>
          BrowserRouter
          <Routes>
            <Route path="/contact" element={<div>ROOT</div>}></Route>
            <Route
              path="/contact/input1"
              element={
                <Input
                  id={"name"}
                  inputName="Name"
                  color="bg-red-500"
                  value={formData.name}
                />
              }
            ></Route>
            <Route
              path="/contact/input2"
              element={
                <Input
                  id={"lastname"}
                  inputName="Last Name"
                  color="bg-yellow-500"
                  value={formData.lastname}
                />
              }
            ></Route>
            <Route
              path="/contact/input3"
              element={
                <Input
                  id={"venture"}
                  inputName="Venture"
                  color="bg-green-500"
                  value={formData.venture}
                />
              }
            ></Route>
          </Routes>
          <FormButtons />
        </BrowserRouter>
        
    </div>
  )
}

export default AppContainer