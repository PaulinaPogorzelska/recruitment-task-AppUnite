export default {
  state: {
    showMore: false,
    currentPage: 1
  },
  mutations: {
    TURN_ON_SHOW_MORE(state) {
      state.showMore = true;
    },
    TURUN_OFF_SHOW_MORE(state) {
      state.showMore = false;
    },
    INCREMENT_PAGE_NUMBER(state) {
      state.currentPage++;
    },
    RESET_PAGE_NUMBER(state) {
      state.currentPage = 1;
    }
  }
};
