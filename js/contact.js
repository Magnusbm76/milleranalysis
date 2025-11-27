/**
 * Contact Form Validation and Submission
 * Implements conservative approach with inline error messages
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = new ContactForm('contactForm');
    contactForm.init();
});

/**
 * ContactForm Object
 * Handles form validation, submission, and user feedback
 */
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.phoneField = document.getElementById('phoneField');
        this.contactMethodSelect = document.getElementById('contactMethod');
        this.successMessage = document.getElementById('successMessage');
        this.referenceNumber = document.getElementById('referenceNumber');
        
        // Form fields
        this.fields = {
            name: {
                element: document.getElementById('name'),
                errorElement: document.getElementById('nameError'),
                required: true,
                validation: this.validateName
            },
            email: {
                element: document.getElementById('email'),
                errorElement: document.getElementById('emailError'),
                required: true,
                validation: this.validateEmail
            },
            subject: {
                element: document.getElementById('subject'),
                errorElement: document.getElementById('subjectError'),
                required: true,
                validation: this.validateSubject
            },
            institution: {
                element: document.getElementById('institution'),
                errorElement: document.getElementById('institutionError'),
                required: false,
                validation: this.validateInstitution
            },
            message: {
                element: document.getElementById('message'),
                errorElement: document.getElementById('messageError'),
                required: true,
                validation: this.validateMessage
            },
            contactMethod: {
                element: document.getElementById('contactMethod'),
                errorElement: document.getElementById('contactMethodError'),
                required: true,
                validation: this.validateContactMethod
            },
            phone: {
                element: document.getElementById('phone'),
                errorElement: document.getElementById('phoneError'),
                required: false,
                validation: this.validatePhone,
                conditional: true
            }
        };
    }

    /**
     * Initialize the contact form
     */
    init() {
        // Add event listeners
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add real-time validation on blur
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            if (field.element) {
                field.element.addEventListener('blur', () => this.validateField(fieldName));
                field.element.addEventListener('input', () => this.clearFieldError(fieldName));
            }
        });
        
        // Add event listener for contact method change
        this.contactMethodSelect.addEventListener('change', () => this.handleContactMethodChange());
    }

    /**
     * Handle form submission
     */
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.submitForm();
        }
    }

    /**
     * Validate a single field
     */
    validateField(fieldName) {
        const field = this.fields[fieldName];
        
        // Skip validation for hidden conditional fields
        if (field.conditional && !this.isFieldVisible(fieldName)) {
            this.clearFieldError(fieldName);
            return true;
        }
        
        const value = field.element.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Check if required field is empty
        if (field.required && !value) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(fieldName)} is required.`;
        } else if (value && field.validation) {
            // Run custom validation if field has a value
            const validationResult = field.validation.call(this, value);
            isValid = validationResult.isValid;
            errorMessage = validationResult.errorMessage;
        }
        
        if (!isValid) {
            this.showFieldError(fieldName, errorMessage);
        } else {
            this.clearFieldError(fieldName);
        }
        
        return isValid;
    }

    /**
     * Validate the entire form
     */
    validateForm() {
        let isFormValid = true;
        
        // Validate all fields
        Object.keys(this.fields).forEach(fieldName => {
            const isFieldValid = this.validateField(fieldName);
            if (!isFieldValid) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }

    /**
     * Submit the form
     */
    submitForm() {
        // Generate reference number
        const ref = this.generateReferenceNumber();
        
        // Show success message
        this.referenceNumber.textContent = ref;
        this.successMessage.classList.remove('hidden');
        
        // Reset form
        this.form.reset();
        this.phoneField.classList.add('hidden');
        
        // Clear all field errors
        Object.keys(this.fields).forEach(fieldName => {
            this.clearFieldError(fieldName);
        });
        
        // Scroll to success message
        this.successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // In a real implementation, you would send the form data to a server here
        console.log('Form submitted with reference:', ref);
    }

    /**
     * Handle contact method change
     */
    handleContactMethodChange() {
        const contactMethod = this.contactMethodSelect.value;
        
        if (contactMethod === 'phone') {
            this.phoneField.classList.remove('hidden');
            this.fields.phone.required = true;
        } else {
            this.phoneField.classList.add('hidden');
            this.fields.phone.required = false;
            this.clearFieldError('phone');
        }
    }

    /**
     * Show field error
     */
    showFieldError(fieldName, message) {
        const field = this.fields[fieldName];
        field.errorElement.textContent = message;
        field.errorElement.classList.remove('hidden');
        field.element.classList.add('border-red-600');
        field.element.classList.remove('border-charcoal');
    }

    /**
     * Clear field error
     */
    clearFieldError(fieldName) {
        const field = this.fields[fieldName];
        field.errorElement.textContent = '';
        field.errorElement.classList.add('hidden');
        field.element.classList.remove('border-red-600');
        field.element.classList.add('border-charcoal');
    }

    /**
     * Check if a field is visible
     */
    isFieldVisible(fieldName) {
        if (fieldName === 'phone') {
            return !this.phoneField.classList.contains('hidden');
        }
        return true;
    }

    /**
     * Generate a unique reference number
     */
    generateReferenceNumber() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        
        return `LOI-${year}${month}${day}-${random}`;
    }

    /**
     * Get field label for error messages
     */
    getFieldLabel(fieldName) {
        const labels = {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            institution: 'Institution',
            message: 'Message',
            contactMethod: 'Contact method',
            phone: 'Phone number'
        };
        
        return labels[fieldName] || fieldName;
    }

    /**
     * Validation methods
     */
    validateName(value) {
        if (value.length < 2) {
            return {
                isValid: false,
                errorMessage: 'Name must be at least 2 characters long.'
            };
        }
        
        if (!/^[a-zA-Z\s\-'\.]+$/.test(value)) {
            return {
                isValid: false,
                errorMessage: 'Name can only contain letters, spaces, hyphens, apostrophes, and periods.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validateEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(value)) {
            return {
                isValid: false,
                errorMessage: 'Please enter a valid email address.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validateSubject(value) {
        if (value.length < 3) {
            return {
                isValid: false,
                errorMessage: 'Subject must be at least 3 characters long.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validateInstitution(value) {
        // Institution is optional, but if provided, validate it
        if (value && value.length < 2) {
            return {
                isValid: false,
                errorMessage: 'Institution name must be at least 2 characters long.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validateMessage(value) {
        if (value.length < 10) {
            return {
                isValid: false,
                errorMessage: 'Message must be at least 10 characters long.'
            };
        }
        
        if (value.length > 1000) {
            return {
                isValid: false,
                errorMessage: 'Message cannot exceed 1000 characters.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validateContactMethod(value) {
        if (!value) {
            return {
                isValid: false,
                errorMessage: 'Please select a contact method.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }

    validatePhone(value) {
        // Phone is only required when contact method is phone
        if (!value) {
            return {
                isValid: false,
                errorMessage: 'Phone number is required when phone is selected as contact method.'
            };
        }
        
        // Remove all non-digit characters for validation
        const digitsOnly = value.replace(/\D/g, '');
        
        if (digitsOnly.length < 10) {
            return {
                isValid: false,
                errorMessage: 'Please enter a valid phone number with at least 10 digits.'
            };
        }
        
        return { isValid: true, errorMessage: '' };
    }
}