import { expect } from "chai";
import { workforceManagement } from "../7_WorkforceManagement.js";

describe("Workforce Management Tests", function()
{
    describe("Recruit Staff Function tests", function()
{
    it("Return correct message for successfull recruit of (Developer) when experience parameter value is bigger than 4 - including 4", function()
{
    let firstName = "Martin";
    let role = "Developer";
    expect(workforceManagement.recruitStaff(firstName, role, 5)).to.equal(`${firstName} has been successfully recruited for the role of ${role}.`);
    expect(workforceManagement.recruitStaff(firstName, role, 4)).to.equal(`${firstName} has been successfully recruited for the role of ${role}.`);
});

    it("Return correct message if experience parameter value is less than 4", function()
{
    let firstName = "Kircho"
    let role = "Developer";
    expect(workforceManagement.recruitStaff(firstName, role, 1)).to.equal(`${firstName} is not suitable for this role.`);
    
});

    it("Return correct message if company is not hiring for role different from (Developer) parameter value is less than 4", function()
{
    let firstName = "Pencho"
    let role = "Junior QA";
    expect(() => workforceManagement.recruitStaff(firstName, role, 0)).to.throw("We are not currently hiring for this role.");
    expect(() => workforceManagement.recruitStaff(firstName, role, 5)).to.throw("We are not currently hiring for this role.");    
});

    describe("computeWages Function Tests", function()
{
    it("Throw error for incorrect type of input of parameter (hoursWorked) and if hours worked <0", function()
{
    expect(() => workforceManagement.computeWages("")).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages(-1)).to.throw("Invalid hours");    
    expect(() => workforceManagement.computeWages(null)).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages({})).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages([])).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages("1")).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages(undefined)).to.throw("Invalid hours");
    expect(() => workforceManagement.computeWages()).to.throw("Invalid hours");
});

    it("Calculate total payment with bigger than 160 value of parameter (hoursWorked)", function()
{
    let hoursWorked = 168;
    let hourlyRate = 18;
    let totalPayment = hourlyRate * hoursWorked;
    if(hoursWorked > 160)
    {
        totalPayment += 1500
    }
    expect(workforceManagement.computeWages(hoursWorked)).to.equal(totalPayment);
});

    describe("dismissEmployee Function Tests", function()
{
    it("Throw error if non array is given for parameter (workforce)", function()
{
    expect(() => workforceManagement.dismissEmployee(), 10).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee("", 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee(1, 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee("1", 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee([], 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee({}, 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee(-1, 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee(null, 10)).to.throw("Invalid input");
    expect(() => workforceManagement.dismissEmployee(undefined, 10)).to.throw("Invalid input");
});

    it("Throw error if non-integer number given for parameter (employeeIndex)", function()
{
    expect(() => workforceManagement.dismissEmployee(["Djeki"], 1.5)).to.throw("Invalid input");    
});

    it("Throw error if less than 0 is given for parameter (employeeIndex)", function()
{
    expect(() => workforceManagement.dismissEmployee(["Djeki"], -1)).to.throw("Invalid input");
});

    it("Throw error if employeeIndex is bigger or equal to workforce.length (length of the array)", function()
{
    let workforce = ["Djeki"];    
    expect(() => workforceManagement.dismissEmployee(workforce, 1)).to.throw("Invalid input");
});

    it("should dismiss an employee by index and return the updated workforce as a string", function()
{
    let workforce = ["Djeki", "Meki", "Djoni"];
    const result = workforceManagement.dismissEmployee(workforce, 1);
    expect(result).to.equal(["Djeki", "Djoni"].join(", "));
//My take at the test coding ->
    
/*  it("Update the array and print the new updated array with coma and \s (space) as separator")
    let updatedStaff = [];
    let workforce = ["Djeki", "Meki", "Djoni"];    
    let expectedStaff = ["Djeki", "Djoni"].join(", ");
    let result = workforceManagement.dismissEmployee(workforce, 1)
    expect(expectedStaff).to.equal(result);
}); */
});
});
});
});
});