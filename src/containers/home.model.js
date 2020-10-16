import * as service from './home.service';

export default {
  namespace: 'home',
  state: {},

  effects: {
    *getTablist(_, {call, put}) {
      const res = yield call(service.getTablist);
      if (!res) {
        return false;
      }
      return res;
    },
  },

  reducers: {
    save(state, {payload: data}) {
      return {...state, ...data};
    },
  },
};
