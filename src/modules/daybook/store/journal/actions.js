// export const myAction = async ({commit}) => {}

import journalApi from "@/api/journalApi";

export const loadEntries = async (/* {commit} */) => {
  const { data } = await journalApi.get("/entries.json");

  try {
    console.log(data);
  } catch (error) {
    console.log("ERROR LOADING ENTRIES");
  }
};
export const updateEntry = async (/* {commit} */) => {};
export const createEntry = async (/* {commit} */) => {};
