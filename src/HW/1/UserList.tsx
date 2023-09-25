type AddressType = {
  street: string //| number; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
    address: AddressType;
    id: number
    name: string
    age: number

};

type UserListPropsType = {
  users: Array <UserType> ; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...


};

// test commit

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

        <ul>
            {props.users.map((el) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                <li key={el.id} id={`hw01-user-${el.id}`}>
                    <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
                    {el.address.street}, {el.address.city}
                </li>
            ))}
        </ul>
    </div>
  );
};
