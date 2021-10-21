export const increment = nr =>{
    return{
        type:'INCREMENT',
        payload: nr
    };
};

export const decrement =() =>{
    return{
        type:'DECREMENT'
    };
};

export const get_order = () =>{
    return{
        type:'GET_ORDERS',
        payload: [
            {
              id: '#3411',
              customer_name: 'Mae Jemison',
              price: '$2,400',
              date: '11/10/2021 4:00pm',
            },
            {
              id: '#3412',
              customer_name: 'Dave Johnson ',
              price: '$10',
              date: '11/11/2021 5:03am',
            },
          ]
    };
};

export const refresh =() =>{
    return{
        type:'REFRESH'
    };
};