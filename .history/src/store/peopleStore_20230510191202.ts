import {create} from 'zustand';

const usePeopleStore = create((set) => ({
    people: [],
    setPeople: (people) => set({ people }),
}));
export default usePeopleStore;