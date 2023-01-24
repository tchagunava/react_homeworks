import { useState } from 'react';
import './App.css';
const initialValues = {
  name: "",
  lastname: "",
  age: "",
  Email: "",
  Gender: "",
};

const validate = (values) => {
  const errors = {};
  if (values.name.length < 4) {
    errors.name = "Name is Requiers at list 4 characters";
  }
  if (values.lastname.length < 4) {
    errors.lastname = "last name is Requiers at list 4 characters";
  }
  if (!values.Email) {
    errors.Email = "Email is required!";
  } else if (!values.Email.includes("@")) {
    errors.Email = "This Email is not valid";
  }
  if (values.age.length < 18) {
    errors.age = "user has to be over 18";
  }
  if (!values.Gender) {
    errors.Gender = "please select your gender";
  }
  return errors;
};


function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isUserUpdating, setIsUserUpdating] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    if (!isUserUpdating) {
      setUsers(
        (prevUsers) => [
          ...prevUsers, { ...formValues, id: new Date().toString() },
        ]
      );

    } else {
      setUsers(
        (prevUsers) => {
          const newUsersArray = prevUsers.reduce((acc, current) => {
            if (current.id === formValues.id) {
              return [...acc, formValues];
            } else return [...acc, current];
          }, []
          );
          return newUsersArray;
        }
      );
    };
    setFormValues(initialValues);
    setIsUserUpdating(false);
  };
  const onDelete = (id) => {
    setUsers(
      (prevUsers) => {
        const newUsersArray = prevUsers.filter((user) => user.id !== id);
        return newUsersArray;
      }
    );
  };
  const onEdit = (id) => {
    const selectedUser = users.find((user) => user.id === id);
    setFormValues(selectedUser);
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />{" "}
        <label>Name</label>
        {formErrors.name && <p>{formErrors.name}</p>}
        <div>
          <input
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
          />{" "}
          <label>Last Name</label>
          {formErrors.lastname && <p>{formErrors.lastname}</p>}
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />{" "}
          <label>Age</label>
          {formErrors.age && <p>{formErrors.age}</p>}
        </div>
        <div>
          <input
            type="text"
            name="Email"
            value={formValues.Email}
            onChange={handleChange}
          />{" "}
          <label>Email</label>
          {formErrors.Email && <p>{formErrors.Email}</p>}
        </div>
        <select onChange={handleChange}>
          <option value={formValues.Gender}>Male</option>
          <option value={formValues.Gender}>Famale</option>
          <option value={formValues.Gender}>Other</option>
        </select>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        {users.map((user) => (
          <div kay={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.lastname}</h1>
            <button
              onClick={() => {
                setIsUserUpdating(true);
                onEdit(user.id);
              }}> edit
            </button>
            <button onClick={() => onDelete(user.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;