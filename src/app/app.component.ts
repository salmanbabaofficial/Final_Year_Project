import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaIconComponent,FontAwesomeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final_year_project';
  // faGear = faGear;
  // faUser = faUser
}
