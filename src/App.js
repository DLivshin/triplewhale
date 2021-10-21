import React from 'react';
import OrderTable from './OrderTable';
import Counter from './Counter';

import {
  Layout,
  Page,

} from '@shopify/polaris';

function App() {
 
  return ( 
    <Page title="Order List TripleWhale">
      <br></br>
      <Layout>
      <Layout.Section>
        <Counter />
      </Layout.Section>
      <Layout.Section>
        <OrderTable />
      </Layout.Section>
        
        
      </Layout>
    </Page>
    
  );
}
export default App;

