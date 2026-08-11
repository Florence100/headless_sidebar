// import { ExampleWithState } from './examples/ExampleWithState';

// function App() {
//   return (
//     <ExampleWithState />
//   )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExampleWithRouter } from './examples/ExampleWithRouter';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<ExampleWithRouter />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
