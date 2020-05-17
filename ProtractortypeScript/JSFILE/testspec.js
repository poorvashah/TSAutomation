"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor"); //imported the global browser element from protractor
const protractor_2 = require("protractor");
describe('Chain locators demo', function () {
    it('Open Angular js website', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        protractor_2.element(protractor_2.by.model("first")).sendKeys("3");
        protractor_2.element(protractor_2.by.model("second")).sendKeys("5");
        protractor_2.element(protractor_2.by.id("gobutton")).click();
        protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQyxDQUFBLHFEQUFxRDtBQUN4RiwyQ0FBdUM7QUFDdkMsUUFBUSxDQUFDLHFCQUFxQixFQUFDO0lBRzlCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztRQUk1QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pELHdEQUF3RDtRQUN4RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFHdkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUdILGdGQUFnRjtJQVdqRixDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=