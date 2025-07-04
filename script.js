// Master Layout JavaScript
class ClinicApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadInitialData();
        this.setupEventListeners();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
    }

    navigateTo(page) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        // Update page title
        const pageTitle = document.getElementById('page-title');
        pageTitle.textContent = this.getPageTitle(page);

        // Update content area
        this.loadPageContent(page);
        
        // Update current page
        this.currentPage = page;
        
        // Save current page to localStorage
        localStorage.setItem('currentPage', page);
    }

    getPageTitle(page) {
        const titles = {
            'dashboard': 'Dashboard',
            'patients': 'Patients',
            'appointments': 'Appointments',
            'doctors': 'Doctors',
            'specialties': 'Specialties',
            'reports': 'Reports'
        };
        return titles[page] || 'Dashboard';
    }

    loadPageContent(page) {
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = this.getPageContent(page);
    }

    getPageContent(page) {
        switch(page) {
            case 'dashboard':
                return this.getDashboardContent();
            case 'patients':
                return this.getPatientsContent();
            case 'appointments':
                return this.getAppointmentsContent();
            case 'doctors':
                return this.getDoctorsContent();
            case 'specialties':
                return this.getSpecialtiesContent();
            case 'reports':
                return this.getReportsContent();
            default:
                return this.getDashboardContent();
        }
    }

    getDashboardContent() {
        return `
            <div class="welcome-message">
                <h2>Welcome to Clinic Management System</h2>
                <p>Your clinic management dashboard</p>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Today's Appointments</h3>
                    </div>
                    <p>View and manage today's appointments</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Patient Records</h3>
                    </div>
                    <p>Access patient information and history</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Quick Actions</h3>
                    </div>
                    <p>Perform common clinic tasks</p>
                </div>
            </div>
        `;
    }

    getPatientsContent() {
        return `
            <div class="list-header">
                <h2>Patient Management</h2>
                <button onclick="app.showAddPatientForm()">Add New Patient</button>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search patients..." id="patient-search">
                <button onclick="app.searchPatients()">Search</button>
            </div>
            <div id="patients-list">
                <p>Patient list will be displayed here...</p>
            </div>
        `;
    }

    getAppointmentsContent() {
        return `
            <div class="list-header">
                <h2>Appointment Management</h2>
                <button onclick="app.showAddAppointmentForm()">Schedule Appointment</button>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search appointments..." id="appointment-search">
                <button onclick="app.searchAppointments()">Search</button>
            </div>
            <div id="appointments-list">
                <p>Appointment list will be displayed here...</p>
            </div>
        `;
    }

    getDoctorsContent() {
        return `
            <div class="list-header">
                <h2>Doctor Management</h2>
                <button onclick="app.showAddDoctorForm()">Add New Doctor</button>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search doctors..." id="doctor-search">
                <button onclick="app.searchDoctors()">Search</button>
            </div>
            <div id="doctors-list">
                <p>Doctor list will be displayed here...</p>
            </div>
        `;
    }

    getSpecialtiesContent() {
        return `
            <div class="list-header">
                <h2>Specialty Management</h2>
                <button onclick="app.showAddSpecialtyForm()">Add New Specialty</button>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search specialties..." id="specialty-search">
                <button onclick="app.searchSpecialties()">Search</button>
            </div>
            <div id="specialties-list">
                <p>Specialty list will be displayed here...</p>
            </div>
        `;
    }

    getReportsContent() {
        return `
            <div class="list-header">
                <h2>Reports & Analytics</h2>
                <button onclick="app.generateReport()">Generate Report</button>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Monthly Statistics</h3>
                    </div>
                    <p>View monthly clinic statistics</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Patient Reports</h3>
                    </div>
                    <p>Generate patient-related reports</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Financial Reports</h3>
                    </div>
                    <p>View financial summaries</p>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Add any global event listeners here
        window.addEventListener('beforeunload', () => {
            // Save any unsaved data before page unload
            localStorage.setItem('lastVisit', new Date().toISOString());
        });
    }

    loadInitialData() {
        // Load saved page from localStorage
        const savedPage = localStorage.getItem('currentPage') || 'dashboard';
        this.navigateTo(savedPage);
    }

    // Placeholder methods for future implementation
    showAddPatientForm() {
        alert('Add Patient form will be implemented in future tasks');
    }

    showAddAppointmentForm() {
        alert('Add Appointment form will be implemented in future tasks');
    }

    showAddDoctorForm() {
        alert('Add Doctor form will be implemented in future tasks');
    }

    showAddSpecialtyForm() {
        alert('Add Specialty form will be implemented in future tasks');
    }

    generateReport() {
        alert('Report generation will be implemented in future tasks');
    }

    searchPatients() {
        alert('Patient search will be implemented in future tasks');
    }

    searchAppointments() {
        alert('Appointment search will be implemented in future tasks');
    }

    searchDoctors() {
        alert('Doctor search will be implemented in future tasks');
    }

    searchSpecialties() {
        alert('Specialty search will be implemented in future tasks');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ClinicApp();
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClinicApp;
}