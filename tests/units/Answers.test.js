
const { expect } = require('chai');
const answer = require('../../app/v1/answers/AnswerModel');
/**
 * @jest-environment node
 */

describe('Answer Model', () => {
    beforeEach(() => {

    })
    afterEach(() => {

    })
    it('should be a valid Answer', () => {
        let id = "61a7ed55af28e90f9ca0137b"
        answer.findById({id})
        .then(result => {
            console.log(result);
            console.log(id)
            expect(result.answer).tobe('What is the capital of India?');
            expect(result.username).tobe('ol4juwon');
        })
        expect(question).toBeInstanceOf(Function);
    }
);
it("Should return empty ", ()=>{
        let id = "dfdf"
        answer.findById({id})
        .then(result => {
            console.log(result);
            console.log(id)
            expect(result.username).tobe('');
        })
})
});