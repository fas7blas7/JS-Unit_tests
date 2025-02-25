import { expect } from "chai";
import { artGallery } from "../5_ArtGallery.js";

describe("Art Gallery Tests", function()
{
    describe("Add Artwork Tests", function()
{
    it("Throw ---Invalid Information!--- when non string values are given for the first(Title) and third(Artist) parameters.", function()
{
    expect(() => artGallery.addArtwork(1, "1920 x 1980", "Van Gogh")).to.throw("Invalid Information!");
    expect(() => artGallery.addArtwork("GigaTitle", "1920 x 1980", 1)).to.throw("Invalid Information!");
});

it("Throw ---Invalid Dimensions!--- when non string values and format are given for the second(dimensions) parameter.", function()
{
    expect(() => artGallery.addArtwork("GigaTitle", "1920x1980", "Van Gogh")).to.throw("Invalid Dimensions!");
    expect(() => artGallery.addArtwork("GigaTitle", 1920-1980, "Van Gogh")).to.throw("Invalid Dimensions!");
    expect(() => artGallery.addArtwork("GigaTitle", [], "Van Gogh")).to.throw("Invalid Dimensions!");
    expect(() => artGallery.addArtwork("GigaTitle", {}, "Van Gogh")).to.throw("Invalid Dimensions!");
});

it("Throw This artist is not allowed in the gallery when non-allowed Artist is given for (artist) parameter.", function()
{
    expect(() => artGallery.addArtwork("GigaTitle", "1920 x 1980", "Bozinho")).to.throw("This artist is not allowed in the gallery!");
    expect(() => artGallery.addArtwork("GigaTitle", "1920 x 1980", "{Bozinho}")).to.throw("This artist is not allowed in the gallery!");
    expect(() => artGallery.addArtwork("GigaTitle", "1920 x 1980", "[Bozinho]")).to.throw("This artist is not allowed in the gallery!");    
});

it("Return ---Artwork added successfully!--- when correct values are given for all three parameters.", function()
{
    expect(artGallery.addArtwork("GigaTitle 1", "1920 x 1980", "Van Gogh")).to.equal("Artwork added successfully: 'GigaTitle 1' by Van Gogh with dimensions 1920 x 1980.");
    expect(artGallery.addArtwork("GigaTitle 2", "1920 x 1980", "Picasso")).to.equal("Artwork added successfully: 'GigaTitle 2' by Picasso with dimensions 1920 x 1980.");
    expect(artGallery.addArtwork("GigaTitle 3", "1920 x 1980", "Monet")).to.equal("Artwork added successfully: 'GigaTitle 3' by Monet with dimensions 1920 x 1980.");    
});
});

    describe("Calculate Costs Tests", function()
{
    it("Throw Error ---Invalid Information!--- when first parameter value is different from number", function()
{
    expect(() => artGallery.calculateCosts("", 20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(undefined, 20, true)).to.throw("Invalid Information!");
});

    it("Throw Error ---Invalid Information!--- when second parameter value is different from number", function()
{
    expect(() => artGallery.calculateCosts(15, [], true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, "20", true)).to.throw("Invalid Information!");
});

    it("Throw Error ---Invalid Information!--- when third parameter value is different from boolean", function()
{
    expect(() => artGallery.calculateCosts(15, 20, 1)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, 20, "yes")).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, 20, "no")).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, 20, [])).to.throw("Invalid Information!");
});

    it("Throw Error ---Invalid Information!--- when exhibitionCosts parameter value is less than 0", function()
{
    expect(() => artGallery.calculateCosts(-15, 20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(-15, 20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(-15, 20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(-15, 20, true)).to.throw("Invalid Information!");
});

    it("Throw Error ---Invalid Information!--- when insuranceCosts  parameter value is less than 0.", function()
{
    expect(() => artGallery.calculateCosts(15, -20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, -20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, -20, true)).to.throw("Invalid Information!");
    expect(() => artGallery.calculateCosts(15, -20, true)).to.throw("Invalid Information!");
});

    it("Return correct message and price if there ---IS--- a sponsor.", function()
{
    expect(artGallery.calculateCosts(10, 20, true)).to.equal("Exhibition and insurance costs are 27$, reduced by 10% with the help of a donation from your sponsor.");    
});

    it("Return correct message and price if there is ---NO--- sponsor.", function()
{
    expect(artGallery.calculateCosts(10, 20, false)).to.equal("Exhibition and insurance costs are 30$.");
});
});

    describe("Organize Exhibits Tests", function()
{
    it("Throw ---Invalid Information--- when artworksCount parameter is different than number.", function()
{
    expect(() => artGallery.organizeExhibits("", 1)).to.throw("Invalid Information!");
    expect(() => artGallery.organizeExhibits(null, 1)).to.throw("Invalid Information!");
});

    it("Throw ---Invalid Information--- when displaySpacesCount parameter is different than number.", function()
{
    expect(() => artGallery.organizeExhibits(1, "")).to.throw("Invalid Information!");
    expect(() => artGallery.organizeExhibits(1, null)).to.throw("Invalid Information!");
});

    it("Throw ---Invalid Information--- when artworksCount parameter is less than 0.", function()
{
    expect(() => artGallery.organizeExhibits(-1, 1)).to.throw("Invalid Information!");
    expect(() => artGallery.organizeExhibits(0, 1)).to.throw("Invalid Information!");
});

    it("Throw ---Invalid Information--- when displaySpacesCount parameter is less than 0.", function()
{
    expect(() => artGallery.organizeExhibits(1, -1)).to.throw("Invalid Information!");
    expect(() => artGallery.organizeExhibits(1, 0)).to.throw("Invalid Information!");
});

    it("Return correct message if artworks Per Space are less than 5 and you can add more artworks to display.", function()
{
    expect(artGallery.organizeExhibits(12, 6)).to.equal("There are only 2 artworks in each display space, you can add more artworks.");
});

it("Return correct message if displays spaces are more than 5 and you can add more artworks to display.", function()
{
    expect(artGallery.organizeExhibits(15, 3)).to.equal("You have 3 display spaces with 5 artworks in each space.");
    expect(artGallery.organizeExhibits(15, 2)).to.equal("You have 2 display spaces with 7 artworks in each space.");
});
});
});