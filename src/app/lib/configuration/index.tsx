export enum EAttendance {
  Unanswered,
  Accept,
  Refuse
}

export enum EChildren {
  None,
  One,
  Two,
  Three,
  Four
}

export enum EMeal {
  Fish,
  Vegetarian,
  Vegan
}

export interface IAccommodation {
  name: string;
  address: string;
}
export interface IAdult {
  firstName: string;
  lastName: string;
}

export interface IFirestoreProfile {
  Adlib: IAdlib;
  Adults: Array<IAdult>;
  Kids: number;
  Guest: boolean;
  RSVP: boolean;
  Meal: string;
  Remarks: string;
  Attending: number;
  Accomodation: IAccommodation;
}

export interface IAdlib {
  verb1: string;
  noun1: string;
  verb2: string;
  emotion: string;
  adjective: string;
  pluralnoun: string;
  verb3: string;
}

export interface IProfile {
  card: IAdlib;
  guestsName: string;
  childrenAttending: EChildren;
  mealChoice: EMeal;
  guest: boolean;
  attending: EAttendance;
  adultsAttending: Number;
  considerations: string;
  accomodation: IAccommodation;
  single: boolean;
}

export class ProfileMapper {
  constructor() {}

  private mapAdultsToNames(adults: Array<IAdult>) {
    if (adults.length > 1) {
      return `${adults[0].firstName} & ${adults[1].firstName}`;
    }

    return `${adults[0].firstName} & guest`;
  }

  private emptyAdlib = {
    verb1: '',
    noun1: '',
    verb2: '',
    emotion: '',
    adjective: '',
    pluralnoun: '',
    verb3: ''
  };

  private mapMealtoEnum(meal: string) {
    switch (meal) {
      case 'vgn':
        return EMeal.Vegan;
      case 'veg':
        return EMeal.Vegetarian;
      case 'fish':
        return EMeal.Fish;
      default:
        return EMeal.Fish;
    }
  }

  private mapEnumToMeal(meal: EMeal) {
    switch (meal) {
      case EMeal.Vegan:
        return 'vgn';
      case EMeal.Vegetarian:
        return 'veg';
      case EMeal.Fish:
        return 'fish';
      default:
        return 'fish';
    }
  }

  public MapToDTO(profile: IProfile) {
    return {
      Adlib: profile.card || this.emptyAdlib,
      Kids: profile.childrenAttending,
      Meal: this.mapEnumToMeal(profile.mealChoice),
      Guest: profile.guest,
      RSVP:
        profile.attending == EAttendance.Unanswered
          ? null
          : profile.attending == EAttendance.Accept ? true : false,
      Attending: profile.adultsAttending,
      Remarks: profile.considerations,
      Accomodation: profile.accomodation
    };
  }

  public Map(dto: IFirestoreProfile, profile: IProfile) {
    profile = {
      card: dto.Adlib || this.emptyAdlib,
      guestsName: this.mapAdultsToNames(dto.Adults) || 'guest',
      childrenAttending: dto.Kids || 0,
      mealChoice: this.mapMealtoEnum(dto.Meal) || EMeal.Fish,
      guest: dto.Guest || false,
      attending:
        dto.RSVP == null
          ? EAttendance.Unanswered
          : dto.RSVP ? EAttendance.Accept : EAttendance.Refuse,
      adultsAttending: dto.Attending || 0,
      considerations: dto.Remarks || null,
      accomodation: dto.Accomodation || { name: '', address: '' },
      single: dto.Adults.length > 1 ? false : true
    };

    return profile;
  }
}
