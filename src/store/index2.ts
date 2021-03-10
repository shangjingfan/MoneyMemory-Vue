import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

console.log('store/index2执行了');
const store = {
  ...recordStore,
  ...tagStore
};
console.log(store);
export default store;