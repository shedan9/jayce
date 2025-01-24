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
  },
  session: {},
};
