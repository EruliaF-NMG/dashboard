import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { checkUserINLocalStorage } from '../helpers/manageStorage.helper';
import { syncWithLocalStorage,setASGuestUser } from '../helpers/core-actions/auth.action';

const useInit = () => {

    const isLogged = useSelector(state => state.authState.isAuth);
    const dispatch = useDispatch();
    const [initState, setState] = useState(false);

  useEffect(() => {

    if ( isLogged === false || isLogged === true) {
      setState(true);
    } else {
      const localStoreData = checkUserINLocalStorage();
      if (localStoreData.status === true) {
        dispatch(syncWithLocalStorage(localStoreData.result));
      } else {
        dispatch(setASGuestUser());
      }
      setState(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [initState, isLogged];
};

export default useInit;