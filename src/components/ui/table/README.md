# TailwindCSS Table

# Columns structure must be this type of columns

```javascript
const columns = [
  {
    title: "Product name",
    key: "name",
  },
  {
    title: "color name",
    key: "color",
  },
  {
    title: "category name",
    key: "category",
  },
  {
    title: "price name",
    key: "price",
  },
];
```

# data structure must be \_id but you can add more properties

```javascript
const data = [
  {
    _id: 1,
    name: "Magic Mouse 2",
    color: "black",
    category: "Accessories",
    price: 100,
  },
  {
    _id: 2,
    name: "2Magic Mouse 2",
    color: "2black",
    category: "2Accessories",
    price: 200,
  },
];
```

# actions structure must be this type

```javascript
const handleEdit = (_id) => {
  console.log(_id);
};
const handleDelete = (_id) => {
  console.log(_id);
};

const actions = {
  title: "Actions",
  events: [
    {
      handleEvent: handleDelete,
      buttonStyle: {}, //optional
      color: "", //optional
      buttonPlaceholder: "Delete", //optional
    },
    {
      handleEvent: handleEdit,
      buttonStyle: {},
      color: "primary",
      buttonPlaceholder: "Edit",
    },
  ],
};
```

# Use this component

```jsx
<Table columns={columns} data={data} actions={actions} />
```

# Full setup example

```jsx
import Table from "./table"; //path

const Playground: React.FC = () => {
  const columns = [
    {
      title: "Product name",
      key: "name",
    },
    {
      title: "color name",
      key: "color",
    },
    {
      title: "category name",
      key: "category",
    },
    {
      title: "price name",
      key: "price",
    },
  ];

  const data = [
    {
      _id: 1,
      name: "Magic Mouse 2",
      color: "black",
      category: "Accessories",
      price: 100,
    },
    {
      _id: 2,
      name: "2Magic Mouse 2",
      color: "2black",
      category: "2Accessories",
      price: 200,
    },
  ];

  const handleEdit = (_id) => {
    console.log(_id);
  };
  const handleDelete = (_id) => {
    console.log(_id);
  };

  const actions = {
    title: "Actions",
    events: [
      {
        handleEvent: handleEdit,
        buttonStyle: {},
        color: "primary",
        buttonPlaceholder: "Edit",
      },
      {
        handleEvent: handleDelete,
        buttonStyle: {},
        color: "",
        buttonPlaceholder: "Delete",
      },
    ],
  };

  return <Table columns={columns} data={data} actions={actions} />;
};

export default Playground;
```
