/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../app/events/event-details/session-list.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../app/user/auth.service';
import * as import9 from '../../../../app/events/event-details/voter.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '../../../../app/events/shared/duration.pipe';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '../../../../app/common/collapsible-well.component';
import * as import18 from '../../common/collapsible-well.component.ngfactory';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '../../../../app/events/event-details/upvote.component';
import * as import21 from './upvote.component.ngfactory';
export class Wrapper_SessionListComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SessionListComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.SessionListComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_sessions(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.sessions = currValue;
      this._changes['sessions'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_filterBy(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.filterBy = currValue;
      this._changes['filterBy'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_sortBy(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.sortBy = currValue;
      this._changes['sortBy'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_eventId(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.eventId = currValue;
      this._changes['eventId'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SessionListComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SessionListComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SessionListComponent>;
  _SessionListComponent_0_3:Wrapper_SessionListComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SessionListComponent_Host0,renderType_SessionListComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'session-list',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SessionListComponent0(this.viewUtils,this,0,this._el_0);
    this._SessionListComponent_0_3 = new Wrapper_SessionListComponent(this.injectorGet(import8.AuthService,this.parentIndex),this.injectorGet(import9.VoterService,this.parentIndex));
    this.compView_0.create(this._SessionListComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SessionListComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SessionListComponent) && (0 === requestNodeIndex))) { return this._SessionListComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SessionListComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SessionListComponentNgFactory:import7.ComponentFactory<import0.SessionListComponent> = new import7.ComponentFactory<import0.SessionListComponent>('session-list',View_SessionListComponent_Host0,import0.SessionListComponent);
const styles_SessionListComponent:any[] = ['collapsible-well[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {margin-top:-5px; margin-bottom:10px }'];
var renderType_SessionListComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_SessionListComponent,{});
export class View_SessionListComponent0 extends import2.AppView<import0.SessionListComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import10.ViewContainer;
  _TemplateRef_0_5:any;
  _NgFor_0_6:import11.Wrapper_NgFor;
  _pipe_duration_0:import12.DurationPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SessionListComponent0,renderType_SessionListComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import10.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this,0,this._anchor_0);
    this._NgFor_0_6 = new import11.Wrapper_NgFor(this._vc_0.vcRef,this._TemplateRef_0_5,this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.ref);
    this._pipe_duration_0 = new import12.DurationPipe();
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import15.NgFor) && (0 === requestNodeIndex))) { return this._NgFor_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.visibleSessions;
    this._NgFor_0_6.check_ngForOf(currVal_0_0_0,throwOnChange,false);
    this._NgFor_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_SessionListComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
class View_SessionListComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import10.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import16.Wrapper_NgIf;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import2.AppView<import17.CollapsibleWellComponent>;
  _CollapsibleWellComponent_9_3:import18.Wrapper_CollapsibleWellComponent;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _vc_13:import10.ViewContainer;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import16.Wrapper_NgIf;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  /*private*/ _expr_42:any;
  /*private*/ _expr_43:any;
  /*private*/ _expr_44:any;
  _pipe_duration_0_0:any;
  /*private*/ _expr_46:any;
  /*private*/ _expr_47:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_SessionListComponent1,renderType_SessionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_42 = import1.UNINITIALIZED;
    this._expr_43 = import1.UNINITIALIZED;
    this._expr_44 = import1.UNINITIALIZED;
    this._expr_46 = import1.UNINITIALIZED;
    this._expr_47 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-md-1'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_4 = new import10.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import13.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import16.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-md-10'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'collapsible-well',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_9 = new import18.View_CollapsibleWellComponent0(this.viewUtils,this,9,this._el_9);
    this._CollapsibleWellComponent_9_3 = new import18.Wrapper_CollapsibleWellComponent();
    this._text_10 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'well-title',''),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11,(null as any));
    this._vc_13 = new import10.ViewContainer(13,11,this,this._anchor_13);
    this._TemplateRef_13_5 = new import13.TemplateRef_(this,13,this._anchor_13);
    this._NgIf_13_6 = new import16.Wrapper_NgIf(this._vc_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_11,'\n      ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'well-body',''),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'h6',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'',(null as any));
    this._text_20 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_16,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_16,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_24 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_16,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'',(null as any));
    this._text_27 = this.renderer.createText(this._el_16,'\n\n        ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_16,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'',(null as any));
    this._text_30 = this.renderer.createText(this._el_16,'\n      ',(null as any));
    this._text_31 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_9.create(this._CollapsibleWellComponent_9_3.context);
    this._text_32 = this.renderer.createText(this._el_7,'\n  ',(null as any));
    this._text_33 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._pipe_duration_0_0 = import3.pureProxy1((<View_SessionListComponent0>this.parentView)._pipe_duration_0.transform.bind((<View_SessionListComponent0>this.parentView)._pipe_duration_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import19.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import13.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import19.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6.context; }
    if (((token === import17.CollapsibleWellComponent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._CollapsibleWellComponent_9_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_4_0_0:any = this.parentView.context.auth.isAuthenticated();
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._CollapsibleWellComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    const currVal_13_0_0:any = (this.context.$implicit.voters.length > 3);
    this._NgIf_13_6.check_ngIf(currVal_13_0_0,throwOnChange,false);
    this._NgIf_13_6.ngDoCheck(this,this._anchor_13,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    const currVal_42:any = import3.inlineInterpolate(1,'\n        ',this.context.$implicit.name,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_42,currVal_42)) {
      this.renderer.setText(this._text_12,currVal_42);
      this._expr_42 = currVal_42;
    }
    const currVal_43:any = import3.inlineInterpolate(1,'',this.context.$implicit.presenter,'');
    if (import3.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setText(this._text_19,currVal_43);
      this._expr_43 = currVal_43;
    }
    valUnwrapper.reset();
    const currVal_44:any = import3.inlineInterpolate(1,'Duration: ',valUnwrapper.unwrap(import3.castByValue(this._pipe_duration_0_0,(<View_SessionListComponent0>this.parentView)._pipe_duration_0.transform)(this.context.$implicit.duration)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_44,currVal_44))) {
      this.renderer.setText(this._text_22,currVal_44);
      this._expr_44 = currVal_44;
    }
    const currVal_46:any = import3.inlineInterpolate(1,'Level: ',this.context.$implicit.level,'');
    if (import3.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setText(this._text_26,currVal_46);
      this._expr_46 = currVal_46;
    }
    const currVal_47:any = import3.inlineInterpolate(1,'',this.context.$implicit.abstract,'');
    if (import3.checkBinding(throwOnChange,this._expr_47,currVal_47)) {
      this.renderer.setText(this._text_29,currVal_47);
      this._expr_47 = currVal_47;
    }
    this.compView_9.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this._vc_13.destroyNestedViews();
    this.compView_9.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 9) && (ngContentIndex == 0))) { cb(this._el_11,ctx); }
    if (((nodeIndex == 9) && (ngContentIndex == 1))) { cb(this._el_16,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 4)) { return new View_SessionListComponent2(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 13)) { return new View_SessionListComponent3(this.viewUtils,this,13,this._anchor_13,this._vc_13); }
    return (null as any);
  }
}
class View_SessionListComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import20.UpvoteComponent>;
  _UpvoteComponent_2_3:import21.Wrapper_UpvoteComponent;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_SessionListComponent2,renderType_SessionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'upvote',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import21.View_UpvoteComponent0(this.viewUtils,this,2,this._el_2);
    this._UpvoteComponent_2_3 = new import21.Wrapper_UpvoteComponent();
    this.compView_2.create(this._UpvoteComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'vote',(null as any)),this.eventHandler(this.handleEvent_2));
    this._UpvoteComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.UpvoteComponent) && (2 === requestNodeIndex))) { return this._UpvoteComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.$implicit.voters.length;
    this._UpvoteComponent_2_3.check_count(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.parentView.context.userHasVoted(this.parentView.context.$implicit);
    this._UpvoteComponent_2_3.check_voted(currVal_2_0_1,throwOnChange,false);
    this._UpvoteComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._UpvoteComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'vote')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.toggleVote(this.parentView.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_SessionListComponent3 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_SessionListComponent3,renderType_SessionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'i',new import3.InlineArray4(4,'class','glyphicon glyphicon-fire','style','color:red'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}