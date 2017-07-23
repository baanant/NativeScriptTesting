"use strict";
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService, zone) {
        this.groceryListService = groceryListService;
        this.zone = zone;
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.groceryListService.delete(grocery.id)
            .subscribe(function () {
            _this.zone.run(function () {
                var index = _this.groceryList.indexOf(grocery);
                _this.groceryList.splice(index, 1);
            });
        });
    };
    ListComponent.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService,
        core_1.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlGO0FBRWpGLHVEQUF5RDtBQUd6RCxrRkFBK0U7QUFRL0UsSUFBYSxhQUFhO0lBT3RCLHVCQUNZLGtCQUFzQyxFQUN0QyxJQUFZO1FBRFosdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBUnhCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO0lBSUwsQ0FBQztJQUU3QixnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLGVBQWU7WUFDdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMkJBQUcsR0FBSDtRQUFBLGlCQXVCQztRQXRCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFNBQVMsQ0FDVixVQUFBLGFBQWE7WUFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQ0Q7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUNBLENBQUE7SUFDVCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE9BQWU7UUFBdEIsaUJBVUM7UUFURyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDekMsU0FBUyxDQUNQO1lBQ0ksS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBaEVrQztJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTt1REFBQztBQUpuRCxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1FBQ2hFLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO0tBQ2xDLENBQUM7cUNBU2tDLHlDQUFrQjtRQUNoQyxhQUFNO0dBVGYsYUFBYSxDQW9FekI7QUFwRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XHJcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGdyb2NlcnkgPSBcIlwiO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlKGdyb2Nlcnk6R3JvY2VyeSkge1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmRlbGV0ZShncm9jZXJ5LmlkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdyb2NlcnlMaXN0LmluZGV4T2YoZ3JvY2VyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHNpemUgPSB0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy5ncm9jZXJ5TGlzdFtpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3RTdHJpbmcgPSBsaXN0LmpvaW4oXCIsIFwiKS50cmltKCk7XHJcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xyXG4gICAgfVxyXG59Il19