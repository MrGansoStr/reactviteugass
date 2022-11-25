import { Routes, Route } from 'react-router-dom';


function RoutesNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
export default RoutesNotFound;