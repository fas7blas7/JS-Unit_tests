import { expect } from "chai";
import { isOddOrEven } from "../1_EvenOrOddFunction.js";

describe("Even Or Odd function tests", function()
    {
        it("Returning ---Odd--- when coresponding length given", function()
    {
        expect(isOddOrEven("Odd")).to.equal("odd")
    })

    it("Returning ---Even--- when coresponding length given", function()
    {
        expect(isOddOrEven("Four")).to.equal("even")
    })

    it("Returning ---undefined--- when a non-string parameter is given", function()
    {
        expect(isOddOrEven(123)).to.be.undefined;
        expect(isOddOrEven()).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(NaN)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
    })
    });