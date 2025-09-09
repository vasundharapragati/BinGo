// Simple localStorage helpers for demo auth + data.

const KEY_USERS = "bingo_users";
const KEY_CURRENT = "bingo_current_user";
const KEY_PICKUPS = "bingo_pickups";
const KEY_ALERTS = "bingo_alerts";

export const storage = {
  getUsers: () => JSON.parse(localStorage.getItem(KEY_USERS) || "[]"),
  setUsers: (arr) => localStorage.setItem(KEY_USERS, JSON.stringify(arr)),
  getCurrent: () => JSON.parse(localStorage.getItem(KEY_CURRENT) || "null"),
  setCurrent: (user) => localStorage.setItem(KEY_CURRENT, JSON.stringify(user)),
  signOut: () => localStorage.removeItem(KEY_CURRENT),

  addPickup(p) {
    const list = JSON.parse(localStorage.getItem(KEY_PICKUPS) || "[]");
    list.unshift(p);
    localStorage.setItem(KEY_PICKUPS, JSON.stringify(list));
    return list;
  },
  getPickups: () => JSON.parse(localStorage.getItem(KEY_PICKUPS) || "[]"),

  addAlert(a) {
    const list = JSON.parse(localStorage.getItem(KEY_ALERTS) || "[]");
    list.unshift(a);
    localStorage.setItem(KEY_ALERTS, JSON.stringify(list));
    return list;
  },
  getAlerts: () => JSON.parse(localStorage.getItem(KEY_ALERTS) || "[]"),
};
