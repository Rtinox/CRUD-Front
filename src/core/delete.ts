import { StoreBase } from "./storeBase"

export function useDelete(store: StoreBase, callback?: () => void) {
  
  function deleteData(id: string)
  {
    store.delete(id).finally(() => {
      if(callback) callback();
    });
  }

  return { deleteData };
}