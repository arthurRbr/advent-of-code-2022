type TElf = {
    id: string;
    addCalories: (calories: number[]) => void;
    getCalories: () => number;
};

const Elf = (id: string): TElf => {
    let _calories = 0

    const addCalories = (calories: number[]) => {
        _calories += calories.reduce((sum, cal) => sum + cal)
    }

    const getCalories = () => {
        return _calories
    }

    return {
        id,
        addCalories,
        getCalories,
    }
}

export const getTopCarrier = (str: string): TElf => {
    const caloriesByElf = str.split('\n\n').map(_str => _str.split('\n').map(__str => parseInt(__str.trim())))
    const elves = caloriesByElf.map((calories, idx) => {
        const elf = Elf(idx.toString())
        elf.addCalories(calories)

        return elf
    })

    return elves.sort((a, b) => b.getCalories() - a.getCalories())[0]
}