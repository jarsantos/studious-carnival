# Instructions for Clinic Management System

## Language Requirements

### Visible Text (User Interface)
All visible text in the application must be written in **Portuguese (Portugal)**. This includes:

- Navigation menu items
- Page titles and headers
- Form labels and input placeholders
- Button text
- Error messages and notifications
- Help text and descriptions
- Table headers and data labels
- Modal dialog content
- Any other text that users can see in the interface

### Code and Markup
All code and markup must remain in **English**. This includes:

- Variable names and function names
- Class names and IDs in HTML/CSS
- JavaScript comments
- HTML attributes and structure
- CSS property names and selectors
- File names and directory structure
- Database field names (if applicable)
- API endpoints and parameters
- Configuration files

### Examples

#### ✅ Correct Usage

**HTML:**
```html
<button id="save-patient-btn" class="primary-button">
    Guardar Paciente
</button>
```

**JavaScript:**
```javascript
// Function to save patient data
function savePatientData(patientInfo) {
    const confirmationMessage = "Paciente guardado com sucesso!";
    showNotification(confirmationMessage);
}
```

#### ❌ Incorrect Usage

**HTML:**
```html
<button id="guardar-paciente-btn" class="botao-primario">
    Save Patient
</button>
```

### Implementation Guidelines

1. **Maintain Consistency**: Use consistent Portuguese terminology throughout the application
2. **Formal Language**: Use formal Portuguese appropriate for a professional medical environment
3. **Clear Communication**: Prioritize clarity and ease of understanding for Portuguese users
4. **Code Readability**: Keep all code in English to maintain international development standards

### Translation Notes

- Use "Paciente" for "Patient"
- Use "Médico" for "Doctor"
- Use "Consulta" for "Appointment"
- Use "Especialidade" for "Specialty"
- Use "Relatório" for "Report"
- Use "Painel" or "Dashboard" for "Dashboard"

This approach ensures the application is accessible to Portuguese users while maintaining code that follows international development practices.