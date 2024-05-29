import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // 3. Signals
  // A signal is a wrapper around a value that notifies interested consumers when that values changes.
  // You can set the values for a signal as we did for the descriptionSection1
  // Or you can use computed signals as below (not settable)

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  protected descriptionSection1 = signal("This is the section about zoneless rendering.");

  changeSection1Title(title: string) {
    // 1. Zoneless
    // the click on the button triggers the update of the signal value & updates the UI
    // comparing to the using of zone.js, Angular runs fewer check to see if the UI has changed
    // less refreshing, more smooth
    // we only refresh when the signal is updated
    // thanks to coalescing Angular will run the detection only once
    // for Zoneless to work we need one of these notifications
    // 1. ChangeDetectorRef.markForCheck (called by AsyncPipe)
    // 2. ComponentRef.setInput
    // 3. Updating a signal
    // 4. Bound host or template listener callback
    // 5. Attaching a view that was marked dirty by one of the above

    this.descriptionSection1.set(title);
  }

  setCountValue(value: number){
    this.count.set(value);
  }
}
