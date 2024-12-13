import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { agendaSlice } from "./Agenda/agendaSlice";
import { informeActividadesSlice } from "./InformeActividades/informeActividadesSlice";
import { serviciosSlice } from "./Servicios/serviciosSlice";
import { transparenciaSlice } from "./Transparencia/transparenciaSlice";



const rootReducer = combineReducers({
  Agenda: agendaSlice.reducer,
  Informe: informeActividadesSlice.reducer,
  Servicios: serviciosSlice.reducer,
  Transparencia: transparenciaSlice.reducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});