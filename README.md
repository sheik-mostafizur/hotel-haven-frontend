# Hotel Haven (Team Project)

## [Hotel Haven Requirement](https://chiseled-numeric-49f.notion.site/Booking-Heaven-d115045250f84e92b5bbece1439a0987?pvs=4)

## [Hotel Haven Requirement Distributions](https://shanjeed-saif.atlassian.net/jira/software/projects/HOT/boards/2/timeline?shared=&atlOrigin=eyJpIjoiZDZkNTkzYzZhMWQ5NDA3NDg1ZWQ3N2JjNWU3M2M0ZGUiLCJwIjoiaiJ9)

## [Hotel Haven Backend](https://github.com/sheik-mostafizur/hotel-haven-backend)

## [Hotel Haven Frontend](https://github.com/sheik-mostafizur/hotel-haven-frontend)

## We are follow Folder and File

**kebab-case** for File and Folder Names:

- **make sure all folder names are kebab-case**

- Using kebab-case for file and folder names is a reasonable choice, especially for non-component files. It's a more web-friendly convention and can be more easily used in URLs.

**PascalCase** for Component Files:

- Using PascalCase for component files is a common convention in React. It helps differentiate components from other files and makes it clear that these are meant to be used as React components. Make sure to keep the root file, like "index.js" or "index.ts", in PascalCase, which is also a common practice.

**UPPERCASE_SNAKE_CASE** for Constants file names:

- Using UPPERCASE_SNAKE_CASE for constant values is a common practice. It makes constants stand out and is widely recognized as a convention for constants in many programming languages.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
