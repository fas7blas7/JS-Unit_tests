import { expect } from "chai";
import { lookupChar } from "../2_CharLookupFunction.js";

describe("Char Lookup Tests", function()
{
    it("Return character at the specified index when given correct values for both parameters", function()
{
    expect(lookupChar("Test", 2)).to.equal("s");
    expect(lookupChar("Test", 3)).to.equal("t");
    expect(lookupChar("Test", 1)).to.equal("e");
    expect(lookupChar("Test", 0)).to.equal("T");
})

it("Return ---undefined--- when given incorrect values for first parameter", function()
{
    expect(lookupChar(1, 2)).to.be.undefined;
    expect(lookupChar([], 2)).to.be.undefined;
    expect(lookupChar(NaN, 2)).to.be.undefined;
    expect(lookupChar(null, 2)).to.be.undefined;
})

it("Return ---undefined--- when given incorrect values for second parameter", function()
{
    expect(lookupChar("Test", {})).to.be.undefined;
    expect(lookupChar("Test", "")).to.be.undefined;
    expect(lookupChar("Test", null)).to.be.undefined;
    expect(lookupChar("Test", NaN)).to.be.undefined;
    expect(lookupChar("Test", 1.5)).to.be.undefined;
})

it("Return ---Incorrect index--- when given correct value for first parameter, but the second parameter is bigger than the provided string", function()
{
    expect(lookupChar("Test", 4)).to.equal("Incorrect index");
})

it("Return ---Incorrect index--- when given correct value for first parameter, but the second parameter is lower (Negative number) than the provided string", function()
{
    expect(lookupChar("Test", -4)).to.equal("Incorrect index");
})
});

