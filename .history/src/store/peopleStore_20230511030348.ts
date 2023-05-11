import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { People } from '../hooks/types';

interface PeopleStore {
    pagination: {
        page: number;
        limit: number;
    };
    people: People[];
    setPeople: (people: People[]) => void;
}

const usePeopleStore = create(persist<PeopleStore>((set) => ({
    people: [],
    pagination: {
        page: 1,
        limit: 10,
    },
    setPeople: (people) => set({ people }),
}), {
    name: 'people-storage',
}
));
export default usePeopleStore;