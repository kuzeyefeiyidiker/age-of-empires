import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitDetailPageComponent } from './unit-detail-page/unit-detail-page.component';
import { UnitsListPageComponent } from './units-list-page/units-list-page.component';
import { UnitsListFilterComponent } from './units-list-filter/units-list-filter.component';
import { UnitResolver } from './services/unit.resolver';
import { UnitsRoutingModule } from './units-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { LoaderModule } from '../common/loader/loader.module';
import { PaginatorModule } from '../common/paginator/paginator.module';
import { UnitCostsParserPipe } from './pipes/unit-costs-parser/unit-costs-parser.pipe';

@NgModule({
  declarations: [UnitsListPageComponent, UnitsListFilterComponent, UnitDetailPageComponent, UnitCostsParserPipe],
  imports: [CommonModule, UnitsRoutingModule, ReactiveFormsModule, NgxSliderModule, LoaderModule, PaginatorModule],
  providers: [UnitResolver],
})
export class UnitsModule {}
