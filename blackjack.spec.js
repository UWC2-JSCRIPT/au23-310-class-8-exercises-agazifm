//hw
//jasmine test function for dealerShouldDraw

describe('Blackjack', () => {
    describe('dealerShouldDraw', () => {
        it('should return false when receiving 10, 9', () => {
            expect(dealerShouldDraw([10, 9])).toBe(false);
        });
        it('should return false when receiving Ace, 6', () => {
            expect(dealerShouldDraw(['Ace', 6])).toBe(false);
        });
        it('should return false when receiving 10, 6, Ace', () => {
            expect(dealerShouldDraw([10, 6, 'Ace'])).toBe(false);
        });
        it('should return false when receiving 2, 4, 2, 5', () => {
            expect(dealerShouldDraw([2, 4, 2, 5])).toBe(false);
        });

    });
});