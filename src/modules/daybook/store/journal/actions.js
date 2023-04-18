// export const myAction = async ({commit}) => {}

import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  commit("setLoading");

  const { data } = await journalApi.get("/entries.json");

  if (!data) return commit("setEntries", []);

  const entries = [];

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  try {
    commit("setEntries", entries);
  } catch (error) {
    console.log("ERROR LOADING ENTRIES");
  }
};

export const updateEntry = async ({ commit }, entry) => {
  try {
    const { id, ...dataToSave } = entry;
    const { data } = await journalApi.put(`/entries/${id}.json`, dataToSave);
    commit("updateEntry", { ...data, ...entry });
  } catch (error) {
    console.log("ERROR UPDATE ENTRY", error);
  }
};
export const createEntry = async ({ commit }, entry) => {
  try {
    const { data } = await journalApi.post(`/entries.json`, entry);
    const id = data.name;
    const newEntry = { ...entry, id };
    commit("addEntry", newEntry);
  } catch (err) {
    console.log("ERROR CREATE ENTRY", err);
  }
};
export const deleteEntry = async ({ commit }, id) => {
  try {
    await journalApi.delete(`/entries/${id}.json`);
    commit("deleteEntry", id);
  } catch (err) {
    console.log("ERROR DELETE ENTRY", err);
  }
};
