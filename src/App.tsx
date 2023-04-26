import "./styles.css";
import faker from "faker";
import { useState } from "react";
import CustomerList from "./Components/CustomerList";
import CustomeDetail from "./Components/CustomerDetail";
type Customer = {
  id: number;
  name: string;
  address: string;
  bio: string;
};

const createUser = (index: number) => {
  return {
    id: index,
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.paragraph(20)
  };
};
const createUsers = (numUsers: number) => {
  return Array(numUsers)
    .fill()
    .map((_, i) => createUser(i));
};
const data = createUsers(1000);

export default function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(data[0]);
  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };
  return (
    <div className="App">
      <CustomerList
        data={data}
        selectedCustomer={selectedCustomer}
        onCustomerClick={handleCustomerClick}
      />
      <CustomeDetail data={selectedCustomer} />
    </div>
  );
}
