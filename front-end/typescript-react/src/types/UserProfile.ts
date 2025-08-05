export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  NON_BINARY = "NON_BINARY",
  NOT_SPECIFIED = "NOT_SPECIFIED",
}

export enum DependentRelationship {
  AUNT = "AUNT",
  COUSIN = "COUSIN",
  DAUGHTER = "DAUGHTER",
  FATHER = "FATHER",
  GRANDFATHER = "GRANDFATHER",
  GRANDMOTHER = "GRANDMOTHER",
  MOTHER = "MOTHER",
  NEPHEW = "NEPHEW",
  NIECE = "NIECE",
  SON = "SON",
  UNCLE = "UNCLE",
}

export enum EmergencyRelationship {
  PARENT = "PARENT",
  SIBLING = "SIBLING",
  CHILD = "CHILD",
  GRANDPARENT = "GRANDPARENT",
  OTHER_RELATIVE = "OTHER_RELATIVE",
  SPOUSE = "SPOUSE",
  PARTNER = "PARTNER",
  FRIEND = "FRIEND",
  COLLEAGUE = "COLLEAGUE",
  OTHER = "OTHER",
}

export enum Jurisdiction {
  ACT = "ACT",
  NSW = "NSW",
  NT = "NT",
  QLD = "QLD",
  SA = "SA",
  TAS = "TAS",
  VIC = "VIC",
  WA = "WA",
  AUSTRALIA = "AUSTRALIA",
  OVERSEAS = "OVERSEAS",
}

export enum EmploymentCategory {
  UNEMPLOYED = "UNEMPLOYED",
  EMPLOYED = "EMPLOYED",
  SELF_EMPLOYED = "SELF_EMPLOYED",
  STUDENT = "STUDENT",
  RETIRED = "RETIRED",
}

type int = number;

export class StoredDate {
  year: int;
  month: int;
  day: int;

  constructor(year: int, month: int, day: int) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  set isoValue(value: string) {
    this.day = parseInt(value.substring(8, 9));
    this.month = parseInt(value.substring(5, 6));
    this.year = parseInt(value.substring(0, 3));
  }

  get isoValue() {
    return `${this.year}-${this.month.toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`;
  }

  toString() {
    return this.isoValue;
  }
}

export type Image = {
  url: string;
  name: string;
  type: string;
};

export type UserProfile = {
  jurisdiction: Jurisdiction;
  personalDetails: PersonalDetails;
  personalPhoto?: Image;
  addressHistory: Address[];
  employmentHistory: Employment[];
  dependents: Dependent[];
  emergencyContact?: EmergencyContact;
  governmentIdentity: GovernmentIdentification[];
};

export type PersonalDetails = {
  firstName: string;
  lastName: string;
  dateOfBirth: StoredDate;
  phoneNumber: string;
  gender: Gender;
};

export type Address = {
  unitOrApartment: string;
  streetNumber: string;
  streetName: string;
  locality: string;
  state: Jurisdiction;
  postcode: string;
};

export type Employment = {
  category: EmploymentCategory;
  companyName: string;
  jobTitle: string;
  yearStarted: int;
  yearEnded: int;
  abnOrAcn: string;
};

export type Dependent = {
  age: int;
  relationship: DependentRelationship;
  gender: Gender;
};

export type EmergencyContact = {
  name: string;
  relationship: EmergencyRelationship;
  phoneNumber: string;
  email: string;
};

export type GovernmentIdentification = {
  name: string;
  value: string;
  jurisdiction: Jurisdiction;
  expiry: StoredDate;
};
