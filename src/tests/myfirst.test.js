
function add(x, y){
    return x + y;
}


describe('My first Test',  () => {

    it('adds two numbers together', () => {
        expect(add(9,6)).toBe(15)
    })
})