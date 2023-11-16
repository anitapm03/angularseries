import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
//componentes
import { HomeComponent } from "./components/home/home.component";
import { CrearpersonajeComponent } from "./components/crearpersonaje/crearpersonaje.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";
import { SerieComponent } from "./components/serie/serie.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "crear", component: CrearpersonajeComponent },
    { path: "modificar", component: ModificarpersonajeComponent },
    { path: "serie/:id", component: SerieComponent },
    { path: "personajes/:id", component: PersonajesComponent }
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);