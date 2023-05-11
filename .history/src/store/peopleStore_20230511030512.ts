import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { People } from '../hooks/types';

interface PeopleStore {
    query: string;
    pagination: {
        page: number;
        limit: number;
    };
    people: People[];
    setPeople: (people: People[]) => void;
    getPeople: () => void;
}

const usePeopleStore = create(persist<PeopleStore>((set) => ({
    people: [],
    query: '',
    pagination: {
        page: 1,
        limit: 10,
    },
    setPeople: (people) => set({ people }),
    getPeople: () => set({ people }),
    getPeopleById: (id) => set({ people }),
}), {
    name: 'people-storage',
}
));
export default usePeopleStore;