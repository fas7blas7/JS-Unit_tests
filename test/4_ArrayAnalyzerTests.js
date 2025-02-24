import { expect } from "chai";
import { analyzeArray } from "../4_ArrayAnalyzer.js";

describe("Array Analyzer Tests", function()
{
    it("Return ---undefined--- when input parameter is not an array.", function()
{
    expect(analyzeArray("")).to.be.undefined;
    expect(analyzeArray(1)).to.be.undefined;
    expect(analyzeArray({})).to.be.undefined;
    expect(analyzeArray(null)).to.be.undefined;
    expect(analyzeArray(undefined)).to.be.undefined;

})

it("Return ---undefined--- when input parameter is an empty array.", function()
{
    expect(analyzeArray([])).to.be.undefined;
})

it("Return correct response  when input parameter is an array of numbers.", function()
{
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal({ min: 1, max: 8, length: 8 })
})

it("Return ---undefined--- when input is a single element array.", function()
{
    expect(analyzeArray([1])).to.deep.equal({ min: 1, max: 1, length: 1 });
})

it("Return ---undefined--- when input parameter is an array with equal elements.", function()
{
    expect(analyzeArray([1, 1, 1])).to.deep.equal({ min: 1, max: 1, length: 3 });
    expect(analyzeArray([-1, -1, -1])).to.deep.equal({ min: -1, max: -1, length: 3 });
})
});