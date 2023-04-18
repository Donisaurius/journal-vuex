// export const mutations = (state) => {}

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const setLoading = (state) => {
  state.isLoading = !state.isLoading;
};

export const updateEntry = (state, entry) => {
  const updatedEntries = state.entries.map((e) => {
    if (e.id === entry.id) {
      return entry;
    }
    return e;
  });

  state.entries = updatedEntries;
};

export const addEntry = (state, entry) => {
  state.entries.unshift(entry);
};
export const deleteEntry = (state, id) => {
  const newEntries = state.entries.filter((entry) => entry.id !== id);
  state.entries = newEntries;
};
