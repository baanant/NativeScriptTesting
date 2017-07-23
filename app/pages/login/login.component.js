"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var hint_util_1 = require("../../utils/hint-util");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was succesfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQTJFO0FBQzNFLGdDQUFtRTtBQUNuRSwrQkFBaUU7QUFJakUsK0NBQWtGO0FBQ2xGLCtEQUEwRjtBQUMxRixtREFBaUY7QUFRakYsSUFBYSxjQUFjO0lBUXZCLHdCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxJQUFVO1FBQXBFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFMeEYsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFNZixJQUFJLENBQUMsSUFBSSxHQUFhLElBQUksV0FBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQU8sdUJBQXVCLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUksVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFHRCwrQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMxQixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUks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cnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgc2V0SGludENvbG9yIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi8uLi91dGlscy9oaW50LXV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXIgICA6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZW1haWxcIikgZW1haWwgICAgICAgICAgIDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZCAgICAgOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLnVzZXIgICAgICAgICAgID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgICAgID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgID0gXCJwYXNzd29yZFwiO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpe1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dEZpZWxkQ29sb3JzKCl7XHJcbiAgICAgICAgbGV0IGVtYWlsVGV4dEZpZWxkICAgICAgPSA8VGV4dEZpZWxkPnRoaXMuZW1haWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgcGFzc3dvcmRUZXh0RmllbGQgICA9IDxUZXh0RmllbGQ+dGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgbWFpblRleHRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCJibGFja1wiIDogXCIjQzRBRkI0XCIpO1xyXG4gICAgICAgIGVtYWlsVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcclxuICAgICAgICBwYXNzd29yZFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XHJcblxyXG4gICAgICAgIGxldCBoaW50Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiI0FDQTZBN1wiIDogXCIjQzRBRkI0XCIgKTtcclxuICAgICAgICBzZXRIaW50Q29sb3IoeyB2aWV3OiBlbWFpbFRleHRGaWVsZCwgY29sb3I6aGludENvbG9yIH0pO1xyXG4gICAgICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2VzZnVsbHkgY3JlYXRlZC5cIilcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgICAgICB0aGlzLnNldFRleHRGaWVsZENvbG9ycygpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19