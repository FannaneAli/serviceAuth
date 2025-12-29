export default {
  common: {
    brand: 'Service Auth',
    heroTitle: 'Access your space',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    session: 'Session',
    role: 'Role',
    state: 'Status',
    stateActive: 'Active',
    stateGuest: 'Guest'
  },
  controls: {
    toggleTheme: 'Theme',
    toggleLang: 'Lang',
    themeDark: 'Dark',
    themeLight: 'Light',
    langFr: 'FR',
    langEn: 'EN'
  },
  auth: {
    loginCTA: 'Sign in',
    registerCTA: 'Sign up'
  },
  nav: {
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    doctorant: 'Doctoral space',
    encadrant: 'Supervisor space',
    admin: 'Admin',
    superuser: 'Superuser',
    logout: 'Logout'
  },
  login: {
    title: 'Login',
    usernameOrEmail: 'Username or Email',
    password: 'Password',
    submit: 'Sign in'
  },
  register: {
    title: 'Register',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    role: 'Role',
    phone: 'Phone',
    submit: 'Create account',
    roles: {
      doctorant: 'Doctoral student',
      encadrant: 'Supervisor'
    }
  },
  layout: {
    portalTitle: 'Accounts & Profiles portal',
    account: 'Account',
    role: 'Role',
    dashboard: 'Dashboard',
    admin: 'Admin'
  },
  admin: {
    consoleTitle: 'Admin Console',
    badgeSuperuser: 'SUPERUSER',
    sections: {
      overview: 'Overview',
      accounts: 'All accounts',
      pending: 'Pending accounts',
      admins: 'Admins',
      structures: 'Departments & Labs',
      create: 'Create admin'
    },
    overview: {
      total: 'Total accounts',
      pending: 'Pending',
      admins: 'Admins',
      refresh: 'Refresh all'
    },
    accounts: {
      title: 'All accounts',
      refresh: 'Refresh',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      emailVerified: 'Email verified',
      yes: 'Yes',
      no: 'No'
    },
    pending: {
      title: 'Pending accounts',
      refresh: 'Refresh',
      approve: 'Approve',
      reject: 'Reject',
      none: 'No requests.'
    },
    admins: {
      title: 'Existing admins',
      refresh: 'Refresh',
      activate: 'Activate',
      suspend: 'Suspend',
      none: 'No admin.'
    },
    create: {
      title: 'Create admin account',
      username: 'Username',
      email: 'Email',
      password: 'Password',
      phone: 'Phone',
      submit: 'Create'
    },
    structures: {
      departments: 'Departments',
      laboratories: 'Laboratories',
      name: 'Name',
      description: 'Description',
      add: 'Add',
      update: 'Update',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      deleteBlocked: 'Delete blocked: linked to supervisor'
    }
  },
  dashboard: {
    tabs: {
      session: 'Session',
      account: 'My account',
      profile: 'Profile'
    },
    session: {
      title: 'Session',
      refresh: 'Refresh token',
      logout: 'Logout'
    },
    account: {
      title: 'My account',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      profileCompleted: 'Profile completed?'
    },
    profile: {
      doctorant: {
        title: 'Doctoral profile',
        firstName: 'First name',
        lastName: 'Last name',
        birthDate: 'Birth date',
        address: 'Address',
        graduationYear: 'Graduation year',
        diploma: 'Diploma',
        university: 'University',
        edit: 'Edit profile',
        save: 'Save profile',
        update: 'Update',
        cancel: 'Cancel'
      },
      encadrant: {
        title: 'Supervisor profile',
        firstName: 'First name',
        lastName: 'Last name',
        birthDate: 'Birth date',
        address: 'Address',
        grade: 'Grade',
        department: 'Department',
        laboratory: 'Laboratory',
        edit: 'Edit profile',
        save: 'Save profile',
        update: 'Update',
        cancel: 'Cancel'
      }
    }
  }
};
