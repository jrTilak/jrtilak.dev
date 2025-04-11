import { useState, useCallback, useRef } from "react";

// Define types for the form state, errors, and validation rules.
type FormValues = { [key: string]: unknown };
type Errors = { [key: string]: string | undefined };
type ValidationRules = {
  required?: boolean;
  validate?: (value: unknown) => string | undefined;
};

// Define the custom useForm hook.
export function useForm<T extends FormValues>({ defaultValues }: { defaultValues: T }) {
  const [formValues, setFormValues] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<Errors>({});
  const validationRules = useRef<{ [key in keyof T]?: ValidationRules }>({});

  // Function to register an input and set validation rules.
  const register = (name: keyof T, rules?: ValidationRules) => {
    if (rules) {
      validationRules.current[name] = rules;
    }

    return {
      name,
      id: name,
      value: formValues[name] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormValues((prev) => ({
          ...prev,
          [name]: value,
        }));

        // Validate the field when value changes if rules are provided.
        if (rules) validateField(name, value, rules);
      },
      onBlur: () => {
        // Optionally, run validation on blur event.
        if (rules) validateField(name, formValues[name], rules);
      },
    };
  };

  // Function to validate a field based on rules.
  const validateField = (name: keyof T, value: unknown, rules: ValidationRules) => {
    let errorMessage: string | undefined = undefined;
    if (rules.required && !value) {
      errorMessage = `${String(name)} is required`;
    } else if (rules.validate) {
      const customError = rules.validate(value);
      if (customError) errorMessage = customError;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  // Function to handle form submission.
  const handleSubmit = (callback: (data: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    Object.keys(formValues).forEach((key) => {
      const value = formValues[key as keyof T];
      const rules = validationRules.current[key as keyof T];
      let errorMessage: string | undefined = undefined;

      if (rules) {
        // Validate using the rules defined for the field.
        if (rules.required && !value) {
          errorMessage = `${key} is required`;
        } else if (rules.validate) {
          const customError = rules.validate(value);
          if (customError) errorMessage = customError;
        }
      }

      if (errorMessage) {
        setErrors((prev) => ({
          ...prev,
          [key]: errorMessage,
        }));
        valid = false;
      } else {
        setErrors((prev) => ({
          ...prev,
          [key]: undefined,
        }));
      }
    });

    if (valid) {
      callback(formValues);
    }
  };

  // Function to reset form values and errors.
  const reset: () => void = useCallback(() => {
    setFormValues(defaultValues);
    setErrors({});
    validationRules.current = {}; // Reset validation rules
  }, []);

  return {
    register,
    handleSubmit,
    formValues,
    errors,
    reset,
  };
}
