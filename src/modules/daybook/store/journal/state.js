export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "lorem",
      picture: null,
    },
    {
      id: new Date().getTime() + 100,
      date: new Date().toDateString(),
      text: "lorem 2",
      picture: null,
    },
    {
      id: new Date().getTime() + 200,
      date: new Date().toDateString(),
      text: "lorem 3",
      picture: null,
    },
  ],
});
