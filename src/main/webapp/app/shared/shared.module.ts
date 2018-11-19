import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { AxisDesignSolutionWebAppSharedLibsModule, AxisDesignSolutionWebAppSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [AxisDesignSolutionWebAppSharedLibsModule, AxisDesignSolutionWebAppSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [AxisDesignSolutionWebAppSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AxisDesignSolutionWebAppSharedModule {
    static forRoot() {
        return {
            ngModule: AxisDesignSolutionWebAppSharedModule
        };
    }
}
