### ProductForm Component 

## Overview
The `AddProductForm` component is a React form designed for adding product information. It leverages the `react-hook-form` library for form management and validation, and it utilizes the `zod` library for schema-based validation. The form includes fields for product name, price, description, image upload, size, category, and stock quantity.

## Dependencies
1. `@hookform/resolvers/zod`: Utilized for integrating the `zod` schema with the `react-hook-form` library.
2. `react-hook-form`: A library for managing forms in React.
3. `zod`: A TypeScript-first schema declaration and validation library.
4. `shadcn/ui`: Custom UI components used for form elements like input, textarea, select, etc.
5. `axios`: A promise-based HTTP client for making requests to the server.
6. `next/navigation`: Used for programmatic navigation in Next.js applications.

# Usage
```typescript
import AddProductForm from './path/to/AddProductForm';

// Inside a React component
const MyComponent = () => {
  return (
    <div>
      <AddProductForm />
    </div>
  );
};
```

# Form Structure

1. Product Name:
    * Field Name: name
    * Input Type: Text
    * Validation: Required
    * Price:

2. Price
    * Field Name: price
    * Input Type: Number
    * Validation: Required, numeric

3. Description:
    * Field Name: description
    * Input Type: Textarea
    * Validation: Required
    * Image Upload:

4. Image Upload:
    * Field Name: image
    * Input Type: Custom image upload component (ImageUpload)

5. Size:
    * Field Name: size
    * Input Type: Select dropdown
    * Options: S, M, L, XL

6. Category:
    * Field Name: category
    * Input Type: Select dropdown
    * Options: TShirt, Hoodie, Sweetshirt, Pants, Shorts, Hat, Shoes, Socks

7. Quantity:
    * Field Name: quantity
    * Input Type: Number

8. Validation: Required, numeric

# Form Submission
   * On form submission, the data is sent to the server using the axios library to the `/api/product`endpoint.
   * If the submission is successful, the user is redirected to the `/dashboard` page.
  
# Error Handling
  * If an error occurs during form submission, an error message is displayed, and the submission process is halted.