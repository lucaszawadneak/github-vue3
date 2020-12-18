import { reactive, toRefs } from 'vue';
import api from '../services/api';

interface Response {
  data: {
    items: any[];
  };
}
interface Reactive {
  users: any[];
  loading: boolean;
  showList: boolean;
}

const state = reactive<Reactive>({
  users: [],
  loading: false,
  showList: false,
});

async function search(query: string) {
  state.showList = false;
  await api
    .get('/search/users', { params: { q: query } })
    .then((res: Response) => {
      console.log(res.data.items);
      state.users = res.data.items;
      state.showList = true;
    })
    .catch(err => console.error(err));
  state.loading = false;
}

function handleSearch(query: string) {
  state.loading = true;
  search(query);
}

export const useUsers = { ...toRefs(state) };
export default handleSearch;
