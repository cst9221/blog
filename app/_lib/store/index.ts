import { create } from 'zustand'

type State = {
    count: number;
}
type Action = {
    setCount: (count: State['count']) => void;
}

const useStore = create<State & Action>((set) => ({
    count: 0,
    setCount: (count) => set({count}),
    addCount: () => set(({count}) => ({count: count + 1}))
}))

export default useStore