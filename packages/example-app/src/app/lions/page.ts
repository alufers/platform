import { select, select$ } from '@angular-redux-ivy/store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pipe, prop, sortBy, values } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnimalAPIActions } from '../animals/api/actions';
import { Animal, ANIMAL_TYPES } from '../animals/model';

export function sortAnimals(animalDictionary: Observable<{}>) {
  return animalDictionary.pipe(map(() => pipe(values, sortBy(prop('name')))));
}

@Component({
  templateUrl: './page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LionPageComponent {
  // Get lion-related data out of the Redux store as observables.
  @select$(['lion', 'items'], sortAnimals)
  readonly animals!: Observable<Animal[]>;

  @select(['lion', 'loading'])
  readonly loading!: Observable<boolean>;

  @select(['lion', 'error'])
  readonly error!: Observable<boolean>;

  constructor(actions: AnimalAPIActions) {
    actions.loadAnimals(ANIMAL_TYPES.LION);
  }
}
