import { Component, Inject, Compiler, Injector, NgModuleRef, NgModule, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components.module';

@Component({
    selector: 'app-root',
    template: `
        <div #vc></div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('vc', { read: ViewContainerRef, static: false })
    vc: ViewContainerRef;

    private cmpRef: ComponentRef<any>;
    title = 'ygam-microsite';

    tmplUrl: string;

    constructor(private http: HttpClient, private compiler: Compiler, private injector: Injector, private moduleRef: NgModuleRef<any>) {
        http.get('./assets/template.html', { responseType: 'text' }).subscribe((result) => {
            console.log(result);
            this.compileTemplate(result);
        });
    }

    protected compileTemplate(template: string) {
        const tmpCmp = Component({ template, styles: [] })(
            class {
                // the class is anonymous. But it's a quite regular angular class. You could add @Inputs,
                // @Outputs, inject stuff etc.
                data: { some: 'data' };
                ngOnInit() {
                    /* do stuff here in the dynamic component */
                }
            }
        );

        // Now, also create a dynamic module.
        const tmpModule = NgModule({
            imports: [ComponentsModule],
            declarations: [tmpCmp]
            // providers: [] - e.g. if your dynamic component needs any service, provide it here.
        })(class {});

        // Now compile this module and component, and inject it into that #vc in your current component template.
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule).then((factories) => {
            const f = factories.componentFactories[factories.componentFactories.length - 1];
            this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
            this.cmpRef.instance.name = 'my-dynamic-component';
            this.vc.insert(this.cmpRef.hostView);
        });
    }

    // Cleanup properly. You can add more cleanup-related stuff here.
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
