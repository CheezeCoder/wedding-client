import { observable, action } from 'mobx';

class ViewStoreProxy {
  @observable showMapInfoBox: boolean = true;
  @observable loggedIn: boolean = false;
  @observable isSaving: boolean = false;
  @observable wasSaved: boolean = false;
  @observable isNotAnswered: boolean = false;
  @observable accomodationNotFilled: boolean = false;
  @observable wrongPassword: boolean = false;

  @action
  toggleWrongPassword(state) {
    this.wrongPassword = state;
  }

  @action
  toggleAccomodationNoFilled(state) {
    this.accomodationNotFilled = state;
  }
  @action
  toggleMapInfoBox(state) {
    this.showMapInfoBox = !state;
  }

  @action
  toggleNoAnswer(state) {
    this.isNotAnswered = state;
  }

  @action
  toggleWasSaved(state) {
    this.wasSaved = state;
  }

  @action
  toggleIsSaving(state) {
    this.isSaving = state;
  }

  @action
  toggleLogin(state) {
    this.loggedIn = state;
  }
}

export const ViewStore = new ViewStoreProxy();
