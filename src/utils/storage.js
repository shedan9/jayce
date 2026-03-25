export default {
  local: {
    theme: {
      get() {
        return window.localStorage.getItem('theme');
      },
      set(val) {
        window.localStorage.setItem('theme', val);
      },
      clear() {
        window.localStorage.removeItem('theme');
      },
    },
    primaryColor: {
      get() {
        return window.localStorage.getItem('primaryColor');
      },
      set(val) {
        window.localStorage.setItem('primaryColor', val);
      },
      clear() {
        window.localStorage.removeItem('primaryColor');
      },
    },
  },
  session: {},
};
