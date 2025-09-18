import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/feather.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/feather/feather.css';
import './assets/plugins/icons/flags/flags.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/plugins/simple-calendar/simple-calendar.css';
import './assets/plugins/select2/css/select2.min.css';
import './assets/plugins/datatables/datatables.min.css';
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
)
