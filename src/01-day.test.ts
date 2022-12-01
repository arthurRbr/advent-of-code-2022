import { getTopCarrier } from "./01-day"

describe('01-day', () => {
    it('should return the top carrier from the example', () => {
        const str = `1000
            2000
            3000

            4000

            5000
            6000

            7000
            8000
            9000

            10000`

        const topElf = getTopCarrier(str)

        expect(topElf.id).toEqual('3')
        expect(topElf.getCalories()).toEqual(24000)
    })
})