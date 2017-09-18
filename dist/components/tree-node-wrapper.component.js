import { Component, Input, ViewEncapsulation } from '@angular/core';
var TreeNodeWrapperComponent = /** @class */ (function () {
    function TreeNodeWrapperComponent() {
    }
    TreeNodeWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-node-wrapper',
                    encapsulation: ViewEncapsulation.None,
                    styles: [],
                    template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n        <tree-node-expander [node]=\"node\"></tree-node-expander>\n        <div class=\"node-content-wrapper\"\n          [class.node-content-wrapper-active]=\"node.isActive\"\n          [class.node-content-wrapper-focused]=\"node.isFocused\"\n          (click)=\"node.mouseAction('click', $event)\"\n          (dblclick)=\"node.mouseAction('dblClick', $event)\"\n          (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n          (treeDrop)=\"node.onDrop($event)\"\n          (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n          (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n          (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n          [treeAllowDrop]=\"node.allowDrop\"\n          [treeDrag]=\"node\"\n          [treeDragEnabled]=\"node.allowDrag()\">\n\n          <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n          </tree-node-content>\n        </div>\n      </div>\n      <ng-container \n        [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\" \n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n      </ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeNodeWrapperComponent.ctorParameters = function () { return []; };
    TreeNodeWrapperComponent.propDecorators = {
        'node': [{ type: Input },],
        'index': [{ type: Input },],
        'templates': [{ type: Input },],
    };
    return TreeNodeWrapperComponent;
}());
export { TreeNodeWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUFXLEtBQUEsRUFBTyxpQkFBQSxFQUErQixNQUFPLGVBQUEsQ0FBZ0I7QUFLakY7SUFNRTtJQUFnQixDQUFDO0lBRVosbUNBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN4QixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLHl5Q0F5QlA7aUJBQ0osRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLHVDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0ssdUNBQWMsR0FBMkM7UUFDaEUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7S0FDOUIsQ0FBQztJQUNGLCtCQUFDO0NBakRELEFBaURDLElBQUE7U0FqRFksd0JBQXdCIiwiZmlsZSI6InRyZWUtbm9kZS13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB7XHJcblxyXG4gICBub2RlOiBUcmVlTm9kZTtcclxuICAgaW5kZXg6IG51bWJlcjtcclxuICAgdGVtcGxhdGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XHJcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUtd3JhcHBlcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgKm5nSWY9XCIhdGVtcGxhdGVzLnRyZWVOb2RlV3JhcHBlclRlbXBsYXRlXCIgY2xhc3M9XCJub2RlLXdyYXBwZXJcIiBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtZXhwYW5kZXIgW25vZGVdPVwibm9kZVwiPjwvdHJlZS1ub2RlLWV4cGFuZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLWNvbnRlbnQtd3JhcHBlclwiXHJcbiAgICAgICAgICBbY2xhc3Mubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlXT1cIm5vZGUuaXNBY3RpdmVcIlxyXG4gICAgICAgICAgW2NsYXNzLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWRdPVwibm9kZS5pc0ZvY3VzZWRcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2NsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAoZGJsY2xpY2spPVwibm9kZS5tb3VzZUFjdGlvbignZGJsQ2xpY2snLCAkZXZlbnQpXCJcclxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJub2RlLm1vdXNlQWN0aW9uKCdjb250ZXh0TWVudScsICRldmVudClcIlxyXG4gICAgICAgICAgKHRyZWVEcm9wKT1cIm5vZGUub25Ecm9wKCRldmVudClcIlxyXG4gICAgICAgICAgKHRyZWVEcm9wRHJhZ092ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ092ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcERyYWdMZWF2ZSk9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnTGVhdmUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcERyYWdFbnRlcik9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnRW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIFt0cmVlQWxsb3dEcm9wXT1cIm5vZGUuYWxsb3dEcm9wXCJcclxuICAgICAgICAgIFt0cmVlRHJhZ109XCJub2RlXCJcclxuICAgICAgICAgIFt0cmVlRHJhZ0VuYWJsZWRdPVwibm9kZS5hbGxvd0RyYWcoKVwiPlxyXG5cclxuICAgICAgICAgIDx0cmVlLW5vZGUtY29udGVudCBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy50cmVlTm9kZVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8L3RyZWUtbm9kZS1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVXcmFwcGVyVGVtcGxhdGVcIiBcclxuICAgICAgICBbbmdPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXggfVwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIGBcclxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndGVtcGxhdGVzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cclxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=