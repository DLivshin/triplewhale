import { useSelector, useDispatch } from 'react-redux';
import { get_order, refresh } from './actions';
import {
  Card,
  TextStyle,
  Button,
  useIndexResourceState,
  IndexTable,
} from '@shopify/polaris';


const OrderTable =() => {
  
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
  useIndexResourceState(order);

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const rowMarkup = Object.keys(order).map((item, index) => (
    <IndexTable.Row
      id={order[item].id}
      key={order[item].id}
      selected={selectedResources.includes(order[item].id)}
      position={index}
    >
      <IndexTable.Cell>{order[item].id}</IndexTable.Cell>
      <IndexTable.Cell>
        <TextStyle variation="strong">{order[item].customer_name}</TextStyle>
      </IndexTable.Cell>
      <IndexTable.Cell>{order[item].price}</IndexTable.Cell>
      <IndexTable.Cell>{order[item].date}</IndexTable.Cell>
      
    </IndexTable.Row>
  ),
);

  return(
    <Card title="Order Table" sectioned>
            {order !== 0 &&
            <IndexTable
                resourceName={resourceName}
                itemCount={order.length}
                selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
                onSelectionChange={handleSelectionChange}
                headings={[
                  { title: 'Order' },
                  { title: 'Customer' },
                  { title: 'Price' },
                  { title: 'Date' },
                ]}
              >
                {rowMarkup}
              </IndexTable>
            }
            {order === 0 &&
              <h3> Not loaded orders into table yet</h3>
            }
          <Button onClick={() => dispatch(get_order())}>Populate table</Button>
          <Button onClick={() => dispatch(refresh())}>Empty Table</Button>
          </Card>

  );
}
export default OrderTable;