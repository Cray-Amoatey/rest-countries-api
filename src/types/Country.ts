export interface CountryTS {
  name: string,
  nativeName: string,
  population: number,
  region: string,
  subregion: string,
  capital: string,
  languages: string,

  flags: {
    png: string,
  };
  topLevelDomain: [string

];
currencies:[
    {
        name:string
    }
],
borders:[
    string
]
}