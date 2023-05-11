import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const usePeopleStore = create(persist((set) => ({
    people: [],
    setPeople: (people) => set({ people }),
}), {
    name: 'people-storage',
}
));
export default usePeopleStore;