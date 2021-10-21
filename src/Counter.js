import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

import {
  Card,
  Button,
} from '@shopify/polaris';

const Counter =() => {
  
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return(
    <Card title="Counter Example" sectioned>  
      <h1>Counter {counter}</h1>
      <Button onClick={() => dispatch(increment(2))}>Add 2</Button>
      <Button onClick={() => dispatch(decrement())}>minus 1</Button>
    </Card>
  ); 
}
export default Counter;