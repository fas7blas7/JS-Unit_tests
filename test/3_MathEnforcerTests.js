import { expect } from "chai";
import { mathEnforcer } from "../3_MathEnforcer.js";

describe("MathEnforcer", function()
{
    describe("addFive", function()
{
    it("Return ---undefined--- when given non-number for the parameter", function()
{
    expect(mathEnforcer.addFive("")).to.be.undefined;
    expect(mathEnforcer.addFive("1")).to.be.undefined;
    expect(mathEnforcer.addFive([1])).to.be.undefined;
    expect(mathEnforcer.addFive({})).to.be.undefined;
    expect(mathEnforcer.addFive(null)).to.be.undefined;
})

it("Return correct result (add 5) to the given parameter", function()
{
    expect(mathEnforcer.addFive(25)).to.equal(30);
    expect(mathEnforcer.addFive(1000)).to.equal(1005);
    expect(mathEnforcer.addFive(5)).to.equal(10);
    expect(mathEnforcer.addFive(1.155)).to.be.closeTo(6.15, 0.01);
    expect(mathEnforcer.addFive(1.159)).to.be.closeTo(6.15, 0.01);
})

it("Return correct result (add 5) to a negative number to the given parameter", function()
{
    expect(mathEnforcer.addFive(-25)).to.equal(-20);
    expect(mathEnforcer.addFive(-100)).to.equal(-95);
})
});

describe("subtractTen", function()
{
    it("Return ---undefined--- when given non-number for the parameter", function()
{
    expect(mathEnforcer.subtractTen("")).to.be.undefined;
    expect(mathEnforcer.subtractTen("1")).to.be.undefined;
    expect(mathEnforcer.subtractTen([1])).to.be.undefined;
    expect(mathEnforcer.subtractTen({})).to.be.undefined;
    expect(mathEnforcer.subtractTen(null)).to.be.undefined;
})

it("Return correct result (substract 10) when given correct value for the parameter", function()
{
    expect(mathEnforcer.subtractTen(10)).to.equal(0);
    expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    expect(mathEnforcer.subtractTen(10.55)).to.be.closeTo(0.55, 0.01);
})
});

describe("sum", function()
{
    it("Should return ---undefined--- when given incorrect value for the first parameter", function()
{
    expect(mathEnforcer.sum("", 1)).to.be.undefined;
    expect(mathEnforcer.sum("1", 0)).to.be.undefined;
    expect(mathEnforcer.sum([1]), 10).to.be.undefined;
    expect(mathEnforcer.sum({}), 100).to.be.undefined;
    expect(mathEnforcer.sum(null), 1.5).to.be.undefined;
    expect(mathEnforcer.sum(null, -1)).to.be.undefined;
})

it("Should return ---undefined--- when given incorrect value for the second parameter", function()
{
    expect(mathEnforcer.sum(1, "")).to.be.undefined;
    expect(mathEnforcer.sum(1, "10")).to.be.undefined;
    expect(mathEnforcer.sum(10, [1])).to.be.undefined;
    expect(mathEnforcer.sum(100, {})).to.be.undefined;
    expect(mathEnforcer.sum(1.5, null)).to.be.undefined;
    expect(mathEnforcer.sum(-1, null)).to.be.undefined;
})

it("Return correct result (sum num1 + num2) when given correct value for the parameter", function()
{
    expect(mathEnforcer.sum(10, 10)).to.equal(20);
    expect(mathEnforcer.sum(-10, 10)).to.equal(0);
    expect(mathEnforcer.sum(10.55, 10)).to.be.closeTo(20.55, 0.01);
    expect(mathEnforcer.sum(-10.55, -10)).to.be.closeTo(-20.55, 0.01);
    expect(mathEnforcer.sum(0, 0)).to.equal(0);
    expect(mathEnforcer.sum(1.5, 1.5)).to.be.closeTo(3, 0.01);
})
})
});