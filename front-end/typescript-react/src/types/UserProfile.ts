enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  NON_BINARY = "NON_BINARY",
  NOT_SPECIFIED = "NOT_SPECIFIED",
}

enum DependentRelationship {
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

enum EmergencyRelationship {
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

enum Jurisdiction {
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

enum EmploymentCategory {
  UNEMPLOYED = "UNEMPLOYED",
  EMPLOYED = "EMPLOYED",
  SELF_EMPLOYED = "SELF_EMPLOYED",
  STUDENT = "STUDENT",
  RETIRED = "RETIRED",
}

type int = number;

export type StoredDate = {
  day: int;
  month: int;
  year: int;
};

export type Image = {
  url: string;
  name: string;
  type: string;
};

export type UserProfile = {
  jurisdiction: Jurisdiction;
  personalDetails: PersonalDetails;
  personalPhoto: Image;
  addressHistory: Address[];
  employmentHistory: Employment[];
  dependents: Dependent[];
  emergencyContact: EmergencyContact;
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
