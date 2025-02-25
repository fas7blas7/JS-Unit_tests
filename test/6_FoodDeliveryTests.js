import { expect } from "chai";
import { foodDelivery } from "../6_FoodDelivery.js";

describe("Food Delivery Function Tests", function()
{
    describe("getCategory Function Tests", function()
{
    it("Return correct messages when given specific values and throw ---error--- when given incorrect value.", function()
{
    expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
    expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
    expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
    expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
    expect(() => foodDelivery.getCategory("Cheese")).to.throw("Invalid Category!");
});

    describe("addMenuItem Function Tests", function()
{
    it("Throw ---error--- if menuItem parameter is: not an array, length is less than 1", function()
{
    expect(() => foodDelivery.addMenuItem("", 6)).to.throw("Invalid Information!");
    expect(() => foodDelivery.addMenuItem([], 6)).to.throw("Invalid Information!");
    expect(() => foodDelivery.addMenuItem(1, 6)).to.throw("Invalid Information!");
});

    it("Throw ---error--- if maxPrice parameter is: different from a string, length is less than 5", function()
{
    expect(() => foodDelivery.addMenuItem([2], 4)).to.throw("Invalid Information!");
    expect(() => foodDelivery.addMenuItem([2], -4)).to.throw("Invalid Information!");
    expect(() => foodDelivery.addMenuItem([2], [])).to.throw("Invalid Information!");
});

    it("Return correct message when correct values are given for addMenuItem and items are pushed to the empty array (availableItems)", function()
{
    const availableItems = 
    [
        {name: "Salad", price: 5},
        {name: "Soup", price: 6},
        {name: "Steak", price: 18}
    ]
    expect(foodDelivery.addMenuItem(availableItems, 10)).to.equal("There are 2 available menu items matching your criteria!");
});

    describe("calculateOrderCost Function Tests", function()
{
    it("Throw ---error--- if shipping and addons are incorrect types and discount is not boolean", function()
{
    expect(() => foodDelivery.calculateOrderCost("", 6, true)).to.throw("Invalid Information!");
    expect(() => foodDelivery.calculateOrderCost([1], 6, true)).to.throw("Invalid Information!");
    expect(() => foodDelivery.calculateOrderCost([1], [1], "")).to.throw("Invalid Information!");
});

    it("should calculate correct price without discount", function()
{
    const shipping = ["standard"];
    const addOns = ["sauce", "beverage"];

    expect(foodDelivery.calculateOrderCost(shipping, addOns, false)).to.equal("You spend $7.50 for shipping and addons!")
});

it("should calculate correct price with discount", function()
{
    const shipping = ["express"];
    const addOns = ["sauce", "beverage"];
    expect(foodDelivery.calculateOrderCost(shipping, addOns, true)).to.equal("You spend $8.07 for shipping and addons with a 15% discount!")
});
});
});
});
});