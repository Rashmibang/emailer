import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { EmaildataComponent } from './emaildata/emaildata.component';
import { EditableComponent } from './editable/editable.component';

const appRoutes: Routes = [
    { path: 'emails', component: EmailsComponent },
    { path: 'emails/:id', component: EmaildataComponent },
    { path: 'emails/:id/mode', component: EditableComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        EmailsComponent,
        EmaildataComponent,
        EditableComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
