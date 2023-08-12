import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/appContext';
import {
  Home,
  NotFound,
  ProtectedRoute,
  SharedLayout,
  AddPirate,
  PirateDetail,
  Pirates,
} from './pages';
import GlobalStyles from './GlobalStyles';
import { AlertBox, Logout } from './shared';

export function App() {
  const {
    state: { showAlert, user },
  } = useAppContext();

  return (
    <>
      {showAlert && <AlertBox />}
      {user && <Logout />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pirates"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Pirates />} />
          <Route path="/pirates/new" element={<AddPirate />} />
          <Route path="/pirates/:id" element={<PirateDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <AppProvider>
      <BrowserRouter>
        <App />

        <GlobalStyles />
      </BrowserRouter>
    </AppProvider>
  );
}
