import { observable, action } from 'mobx';
import { auth } from 'app/stores/FirebaseStore';
import {
  IProfile,
  IAdlib,
  EChildren,
  EMeal,
  EAttendance,
  IAccommodation
} from 'app/lib/configuration/';
import { api } from 'app/lib/api';
import { ViewStore } from 'app/stores/ViewStore';

class InnerProfileStore implements IProfile {
  @observable
  card: IAdlib = {
    verb1: '',
    noun1: '',
    verb2: '',
    emotion: '',
    adjective: '',
    pluralnoun: '',
    verb3: ''
  };

  @observable userId: string;

  @observable guestsName: string;

  @observable childrenAttending: EChildren = EChildren.None;

  @observable mealChoice: EMeal = EMeal.Fish;

  @observable guest: boolean = false;

  @observable attending: EAttendance = EAttendance.Unanswered;

  @observable adultsAttending: number = 1;

  @observable considerations: string = null;

  @observable single: boolean = true;

  @observable
  accomodation: IAccommodation = { name: '', address: '' } as IAccommodation;

  @action
  updateAdlib(key: string, value: string) {
    this.card[key] = value;
  }

  @action
  updateAttendance(value: EAttendance) {
    this.attending = value;
  }

  @action
  updateChildrenAttending = (amount: EChildren) => {
    this.childrenAttending = amount;
  };

  @action
  updateGuestAttendance = (status: boolean) => {
    this.guest = status;
  };

  @action
  updateCondsiderations = (text: string) => {
    this.considerations = text;
  };

  @action
  updateAccomodationName = (name: string) => {
    this.accomodation.name = name;
  };

  @action
  updateAccomodationAddress = (address: string) => {
    this.accomodation.address = address;
  };

  @action
  updateAdultsAttending = (amount: number) => {
    this.adultsAttending = amount;
  };

  @action
  setName = (name: string) => {
    this.guestsName = name;
  };

  @action
  setMeal = (meal: EMeal) => {
    this.mealChoice = meal;
  };

  onLoad = async () => {
    this.userId = auth.currentUser.uid;
    const profile = await api.getProfile(this.userId);
    Object.assign(this, profile);
  };

  onSave = async () => {
    if (this.attending != EAttendance.Unanswered) {
      ViewStore.toggleNoAnswer(false);
      if (this.accomodation.name === '' || this.accomodation.address === '') {
        ViewStore.toggleAccomodationNoFilled(true);
        return;
      }
      ViewStore.toggleAccomodationNoFilled(false);

      ViewStore.toggleIsSaving(true);
      await api.putProfile(this.userId, this);
      ViewStore.toggleIsSaving(false);
      ViewStore.toggleWasSaved(true);
      setTimeout(() => ViewStore.toggleWasSaved(false), 5000);
      return;
    } else {
      if (this.accomodation.name === '' || this.accomodation.address === '') {
        ViewStore.toggleAccomodationNoFilled(true);
        return;
      }
    }
    ViewStore.toggleNoAnswer(true);
  };

  onSignOut = async () => {
    ViewStore.toggleLogin(false);
    ViewStore.toggleIsSaving(true);
    await auth.signOut();
    ViewStore.toggleNoAnswer(false);
    ViewStore.toggleAccomodationNoFilled(false);
    ViewStore.toggleIsSaving(false);
  };
}
export const ProfileStore = new InnerProfileStore();
