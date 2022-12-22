import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './../pages/Public/NotFoundPage/NotFoundPage';


function RoutesNotFound({ children, isPrivate, isAdmin}) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage authenticated={isPrivate} admin={isAdmin}/>} />
    </Routes>
  );
}
export default RoutesNotFound;