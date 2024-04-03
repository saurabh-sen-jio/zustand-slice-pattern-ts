import { StateCreator, create } from "zustand";

interface ICounterState {
    count: number;
    amount: number;
    incrementByOne: (qty: number) => void;
    decrementByOne: (qty: number) => void;
    changeAmount: (qty: number) => void;
}

const counterSlice: StateCreator<ICounterState> = (set) => ({
    count: 0,
    amount: 123,
    incrementByOne: (qty: number) => set({ count: qty }),
    decrementByOne: (qty: number) => set({ count: qty }),
    changeAmount: (qty: number) => set({ amount: qty })
})

export const useCounter = create<ICounterState>()((...a) => ({
    ...counterSlice(...a)
}))