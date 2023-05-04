import React from "react";
import AppContext from "./AppContext";
import AppContainer from "./AppContainer";

function DataForm() {
  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-clip'>
    <AppContext>
      <AppContainer />
    </AppContext>
    </div>
  );
}

export default DataForm;
