import { Routes, Route } from 'react-router-dom';


function RoutesNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div className="m-0 m-auto text-uppercase">Not found</div>} />
    </Routes>
  );
}
export default RoutesNotFound;