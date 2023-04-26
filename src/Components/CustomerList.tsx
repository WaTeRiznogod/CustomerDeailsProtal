import { FixedSizeList as List } from "react-window";
type Customer = {
  id: number;
  name: string;
  address: string;
  bio: string;
};

type CustomerListProps = {
  data: Customer[];
  selectedCustomer: Customer;
  onCustomerClick: (customer: Customer) => void;
};

const CustomerList = (props: CustomerListProps) => {
  const { data, onCustomerClick } = props;

  const onclickHandler = (e) => {
    onCustomerClick(data[e]);
  };

  const Row = ({ index, style }) => (
    <div style={style} onClick={() => onclickHandler(index)}>
      {data[index].id}-{data[index].name}
    </div>
  );
  return (
    <div className="list">
      <List
        height={window.innerHeight}
        itemCount={data.length}
        itemSize={50}
        width={window.innerWidth}
      >
        {Row}
      </List>
    </div>
  );
};

export default CustomerList;
