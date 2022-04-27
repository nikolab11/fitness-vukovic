const registerScreenData = {
  header: {
    sr: 'NOVI NALOG',
    en: 'NEW ACCOUNT',
  },
  button: {
    sr: 'REGISTRUJTE SE',
    en: 'REGISTER',
  },
  login: {
    question: {
      sr: 'Imate nalog?',
      en: 'Already registered?',
    },
    button: {
      sr: 'Prijavite se',
      en: 'Log in',
    },
  },
  inputs: [
    {
      id: 1,
      name: 'name',
      icon: 'user-alt',
      textContentType: 'name',
      placeholder: { sr: 'Ime i prezime', en: 'Fullname' },
      autocapitalize: 'words',
    },
    {
      id: 2,
      name: 'adress',
      icon: 'map-pin',
      textContentType: 'fullStreetAddress',
      placeholder: { sr: 'Mesto', en: 'Adress' },
      autocapitalize: 'sentences',
    },
    {
      id: 3,
      name: 'email',
      icon: 'email',
      material: true,
      textContentType: 'emailAddress',
      placeholder: { sr: 'email adresa', en: 'e-mail' },
      autocapitalize: 'none',
    },
    {
      id: 4,
      name: 'password',
      icon: 'lock',
      material: true,
      textContentType: 'password',
      placeholder: { sr: 'Šifra', en: 'Password' },
      secureTextEntry: true,
      autocapitalize: 'none',
    },
    {
      id: 5,
      name: 'passwordRepeat',
      icon: 'lock',
      material: true,
      textContentType: 'password',
      placeholder: { sr: 'Ponovite šifru', en: 'Repeat password' },
      secureTextEntry: true,
      autocapitalize: 'none',
    },
  ],
  errors: {
    name: {
      required: {
        sr: 'Ime je prazno',
        en: 'Name is empty',
      },
      pattern: {
        sr: 'Morate ispravno uneti i ime i prezime',
        en: 'Both correctly spelled first and last name required ',
      },
    },
    adress: {
      required: {
        sr: 'Mesto je prazno',
        en: 'Adress is empty',
      },
    },
    email: {
      required: {
        sr: 'Email je prazan',
        en: 'Email is empty',
      },
      pattern: {
        sr: 'E-mail mora biti u odgovarajućem formatu',
        en: 'E-mail must be in propper format',
      },
    },
    password: {
      required: {
        sr: 'Šifra je prazna',
        en: 'Password is empty',
      },
      minLength: {
        sr: 'Šifra mora imati najmanje 6 karaktera',
        en: 'Password needs to have at least 6 characters',
      },
    },
  },
};

export default registerScreenData;
