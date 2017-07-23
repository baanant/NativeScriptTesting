"use strict";
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    if (args.view.ios) {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceHolder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSxzQkFBNkIsSUFBdUM7SUFDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FDN0IsQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBVkQsb0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9ICAgICAgICBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gICAgZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmRlY2xhcmUgdmFyIE5TQXR0cmlidXRlZFN0cmluZzogICAgICAgICAgICAgYW55O1xyXG5kZWNsYXJlIHZhciBOU0RpY3Rpb25hcnk6ICAgICAgICAgICAgICAgICAgIGFueTtcclxuZGVjbGFyZSB2YXIgTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lOiBhbnk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SGludENvbG9yKGFyZ3M6IHsgdmlldzogVGV4dEZpZWxkLCBjb2xvcjogQ29sb3IgfSkge1xyXG4gICAgaWYgKGFyZ3Mudmlldy5hbmRyb2lkKSB7XHJcbiAgICAgICAgYXJncy52aWV3LmFuZHJvaWQuc2V0SGludFRleHRDb2xvcihhcmdzLmNvbG9yLmFuZHJvaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3Mudmlldy5pb3MpIHtcclxuICAgICAgICBsZXQgZGljdGlvbmFyeSA9IG5ldyBOU0RpY3Rpb25hcnkoW2FyZ3MuY29sb3IuaW9zXSwgW05TRm9yZWdyb3VuZENvbG9yQXR0cmlidXRlTmFtZV0pO1xyXG4gICAgICAgIGFyZ3Mudmlldy5pb3MuYXR0cmlidXRlZFBsYWNlSG9sZGVyID0gTlNBdHRyaWJ1dGVkU3RyaW5nLmFsbG9jKCkuaW5pdFdpdGhTdHJpbmdBdHRyaWJ1dGVzKFxyXG4gICAgICAgICAgICBhcmdzLnZpZXcuaGludCwgZGljdGlvbmFyeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gIl19