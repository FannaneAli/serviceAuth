export default {
  common: {
    brand: 'Service Auth',
    heroTitle: 'Accedez a votre espace',
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: 'Vous avez deja un compte ?',
    session: 'Session',
    role: 'Role',
    state: 'Etat',
    stateActive: 'Actif',
    stateGuest: 'Invite'
  },
  controls: {
    toggleTheme: 'Theme',
    toggleLang: 'Langue',
    themeDark: 'Sombre',
    themeLight: 'Clair',
    langFr: 'FR',
    langEn: 'EN'
  },
  auth: {
    loginCTA: 'Se connecter',
    registerCTA: "S'inscrire"
  },
  nav: {
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    doctorant: 'Espace doctorant',
    encadrant: 'Espace encadrant',
    admin: 'Administration',
    superuser: 'Superuser',
    logout: 'Logout'
  },
  login: {
    title: 'Login',
    usernameOrEmail: 'Username ou Email',
    password: 'Mot de passe',
    submit: 'Se connecter'
  },
  register: {
    title: 'Inscription',
    username: 'Username',
    email: 'Email',
    password: 'Mot de passe',
    role: 'Role',
    phone: 'Telephone',
    submit: 'Creer le compte',
    roles: {
      doctorant: 'Doctorant',
      encadrant: 'Encadrant'
    }
  },
  layout: {
    portalTitle: 'Portail comptes & profils',
    account: 'Compte',
    role: 'Role',
    dashboard: 'Dashboard',
    admin: 'Admin'
  },
  admin: {
    consoleTitle: 'Console Admin',
    badgeSuperuser: 'SUPERUSER',
    sections: {
      overview: 'Vue globale',
      accounts: 'Tous les comptes',
      pending: 'Comptes en attente',
      admins: 'Admins',
      structures: 'Departements & Labos',
      create: 'Creer un admin',
      jurors: 'Jures'
    },
    overview: {
      total: 'Comptes total',
      pending: 'En attente',
      admins: 'Admins',
      refresh: 'Rafraichir tout'
    },
    accounts: {
      title: 'Tous les comptes',
      refresh: 'Rafraichir',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      emailVerified: 'Email verifie',
      yes: 'Oui',
      no: 'Non'
    },
    pending: {
      title: 'Comptes en attente',
      refresh: 'Rafraichir',
      approve: 'Approuver',
      reject: 'Rejeter',
      none: 'Aucune demande.'
    },
    admins: {
      title: 'Admins existants',
      refresh: 'Rafraichir',
      activate: 'Activer',
      suspend: 'Suspendre',
      none: 'Aucun admin.'
    },
    create: {
      title: 'Creer un compte admin',
      username: 'Username',
      email: 'Email',
      password: 'Mot de passe',
      phone: 'Telephone',
      submit: 'Creer'
    },
    structures: {
      departments: 'Departements',
      laboratories: 'Laboratoires',
      name: 'Nom',
      description: 'Description',
      add: 'Ajouter',
      update: 'Mettre à jour',
      cancel: 'Annuler',
      edit: 'Modifier',
      delete: 'Supprimer',
      deleteBlocked: 'Suppression impossible : rattache a un encadrant'
    }
  },
  dashboard: {
    tabs: {
      session: 'Session',
      account: 'Mon compte',
      profile: 'Profil'
    },
    session: {
      title: 'Session',
      refresh: 'Refresh token',
      logout: 'Logout'
    },
    account: {
      title: 'Mon compte',
      username: 'Username',
      email: 'Email',
      role: 'Role',
      status: 'Status',
      profileCompleted: 'Profil complet ?'
    },
    profile: {
      doctorant: {
        title: 'Profil doctorant',
        firstName: 'Prenom',
        lastName: 'Nom',
        birthDate: 'Date de naissance',
        address: 'Adresse',
        graduationYear: 'Annee graduation',
        diploma: 'Diplome',
        university: 'Universite',
        edit: 'Modifier le profil',
        save: 'Enregistrer profil',
        update: 'Mettre a jour',
        cancel: 'Annuler'
      },
      encadrant: {
        title: 'Profil encadrant',
        firstName: 'Prenom',
        lastName: 'Nom',
        birthDate: 'Date de naissance',
        address: 'Adresse',
        grade: 'Grade',
        department: 'Departement',
        laboratory: 'Laboratoire',
        edit: 'Modifier le profil',
        save: 'Enregistrer profil',
        update: 'Mettre a jour',
        cancel: 'Annuler'
      }
    }
  }
};
