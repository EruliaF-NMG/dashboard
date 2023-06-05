import Routes from './Routers';
import Store from './Store';
import ErrorBoundary from '../components/ui-elements/common/ErrorBoundary.atom';

const App=() =>{
  return (
    <ErrorBoundary>
      <Store>
        <Routes/>
      </Store>
    </ErrorBoundary>
  );
}

export default App;
