import { NgModule } from "@angular/core";
import { MatButtonModule,MatCheckboxModule, MatSidenavModule, MatListModule } from "@angular/material";
import { MatToolbarModule, MatIconModule } from "@angular/material";
@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule,
        MatListModule],
    
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule,
        MatSidenavModule, 
        MatListModule] 
})

export class MaterialModule{}