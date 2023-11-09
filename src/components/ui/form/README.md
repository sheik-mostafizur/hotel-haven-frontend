# We can't use watch for confirm password

# Form Field types

```typescript
type FormField = {
  type?: string;
  tag?: string;
  name: string;
  defaultValue: string;
  label?: string;
  placeholder?: string;
  rules?: {
    required: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
  option?: Array<{
    label: string;
    value: string;
  }>;
};
```

# Form Field data structure

```typescript
const form: FormField[] = [
  {
    type: "email",
    name: "email",
    defaultValue: "",
    rules: {
      required: "This is required",
      minLength: {
        value: 3,
        message: "Too Few Characters",
      },
      maxLength: {
        value: 30,
        message: "Too Many Characters",
      },
    },
  },
  {
    name: "name",
    defaultValue: "",
    label: "I am label",
    placeholder: "I am placeholder",
    rules: {
      required: "This is required",
      minLength: {
        value: 3,
        message: "Too Few Characters",
      },
      maxLength: {
        value: 30,
        message: "Too Many Characters",
      },
    },
  },
  {
    tag: "select",
    name: "country",
    defaultValue: "",
    option: [
      {
        label: "Chose a value",
        value: "",
      },
      {
        label: "Travel and Adventure",
        value: "travel and adventure",
      },
    ],
    label: "Select label",
    rules: {
      required: "This is required",
    },
  },
];
```

# How to use in react components

```jsx
<Form
  form={form}
  onSubmit={(data) => {
    console.log(data);
  }}
/>
```
