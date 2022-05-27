import { StoreBase } from "./storeBase"

/**
 * Compasable de suppression d'une donnée
 * @param store 
 * @param callback 
 * @returns 
 */
export function useDelete(store: StoreBase, callback?: () => void) {
  
  /**
   * 
   * @param id Supprime un donnée en fonction de son id
   */
  function deleteData(id: string)
  {
    store.delete(id).finally(() => {
      if(callback) callback();
    });
  }

  return { deleteData };
}