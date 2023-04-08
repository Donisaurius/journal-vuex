import DayBookRouter from "../modules/daybook/router";

export const routes = [
  { path: "/", component: () => import("../components/HelloWorld.vue") },
  {
    path: "/daybook",
    ...DayBookRouter,
  },
];
