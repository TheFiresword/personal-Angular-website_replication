import {AfterViewInit, Directive, Renderer2,ElementRef, HostListener} from '@angular/core'


@Directive({
    selector:'[red-color]'
})
export class RedColorDirective implements AfterViewInit{
    constructor(private ref:ElementRef, private renderer:Renderer2)
    {}
    ngAfterViewInit(): void {
        
    }
    setBackGroundColor(color:string){
        this.renderer.setStyle(this.ref.nativeElement,'background-color',color);
        
    }
    @HostListener('onmouseover') onMouseOver(){
        this.setBackGroundColor('red')
    }
    @HostListener('onmouseleave') onMouseLeave(){
        this.setBackGroundColor('white')
    }

    
}