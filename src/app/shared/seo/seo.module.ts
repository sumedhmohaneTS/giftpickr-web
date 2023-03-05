import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule]
})
export class SeoModule {
    public static forRoot(): ModuleWithProviders<SeoModule> {
        return {
            ngModule: SeoModule,
            providers: [],
        };
    }
}