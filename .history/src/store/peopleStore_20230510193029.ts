import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const usePeopleStore = create(persist((set) => ({
    people: [],
    setPeople: (people) => set({ people }),
})));
export default usePeopleStore;