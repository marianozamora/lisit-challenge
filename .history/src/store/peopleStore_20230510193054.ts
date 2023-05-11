import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { People } from '../types';


const usePeopleStore = create(persist<People>((set) => ({
    people: [],
    setPeople: (people) => set({ people }),
}), {
    name: 'people-storage',
}
));
export default usePeopleStore;