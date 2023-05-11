import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { People } from '../hooks/types';

interface PeopleStore {
    people: People[];
    setPeople: (people: People[]) => void;
}

const usePeopleStore = create(persist<PeopleStore>((set) => ({
    people: [],
    setPeople: (people) => set({ people }),
}), {
    name: 'people-storage',
}
));
export default usePeopleStore;