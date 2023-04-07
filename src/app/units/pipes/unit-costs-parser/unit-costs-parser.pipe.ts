import { Pipe, PipeTransform } from '@angular/core';
import { UnitCostTypes } from '../../../common/types';

@Pipe({
  name: 'unitCostsParser',
})
export class UnitCostsParserPipe implements PipeTransform {
  transform(value: Record<UnitCostTypes, number>): string {
    if (!value) {
      return '';
    }

    return Object.entries(value)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  }
}
