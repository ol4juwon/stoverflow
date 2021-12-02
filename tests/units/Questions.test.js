
const question = require('../../app/v1/questions/QuestionModel');
/**
 * @jest-environment node
 */

describe('Question Model', () => {
    beforeEach(() => {

    })
    afterEach(() => {

    })
    it('should be a question', () => {
        let id = "61a7ed55af28e90f9ca0137b"
        question.findById({id})
        .then(result => {
            console.log(result);
            console.log(id)
            expect(result.question).tobe('What is the capital of India?');
            expe
        })
        expect(question).toBeInstanceOf(Function);
    }
);
it("Should return empty ", ()=>{
        let id = "dfdf"
        question.findById({id})
        .then(result => {
            console.log(result);
            console.log(id)
            expect(result.question).tobe('');
        })
})
});