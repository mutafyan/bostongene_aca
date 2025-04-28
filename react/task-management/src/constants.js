export const statuses = [
  { label: "To do", value: "todo" },
  { label: "Doing", value: "doing" },
  { label: "Blocked", value: "blocked" },
  { label: "Done", value: "done" },
];

export const statusColors = {
    'todo': 'blue',
    'doing': 'purple',
    'blocked':'red',
    'done': 'green'
}
export const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const priorityColor = { low: "blue", medium: "green", high: "red" };

export const mockUsers = [
  // formatted from randomuser.me/api, because server was unstable to fetch at runtime, kept getting 500 errors
  {
    id: "7a5197c4-8774-42ed-861d-3c65eba3a226",
    name: "Illya Petrushevich",
    avatar: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
  },
  {
    id: "0846f400-3743-4bda-88bb-7d1b705b61e8",
    name: "Dennis Hunt",
    avatar: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
  },
  {
    id: "272a23fd-9b79-437e-9a45-95d0170d2e41",
    name: "Camila Stone",
    avatar: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
  },
  {
    id: "b5a0c968-7c6e-4d72-a782-496d3f038dc6",
    name: "Florence Jones",
    avatar: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
  },
  {
    id: "4ed35b66-ff11-4cb4-98c9-93db5f3dbebb",
    name: "Lyan Verhelst",
    avatar: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
  },
  {
    id: "cc26a877-8896-4ce1-9938-994e4fb89e98",
    name: "Faith Mason",
    avatar: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
  },
  {
    id: "6a209fb9-d635-4956-bf5b-f88eebb3a3d0",
    name: "Ratislav Oliynik",
    avatar: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
  },
  {
    id: "eeb31bb7-f1b8-4732-ac1b-e80a0dc8b696",
    name: "Maximilian Oshaug",
    avatar: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
  },
  {
    id: "307ffbf9-5b49-470d-9222-ecbc0e9adedd",
    name: "Lori Hicks",
    avatar: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
  },
  {
    id: "de64ad90-e2ba-4548-b263-f4c6102aac48",
    name: "Aubree Sims",
    avatar: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
  },
];
