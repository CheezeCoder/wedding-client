import {
  IProfile,
  IFirestoreProfile,
  ProfileMapper
} from 'app/lib/configuration';
import { database } from 'app/stores/FirebaseStore';

class Api {
  async getProfile(uid: string): Promise<IProfile> {
    const userDocument = await database
      .collection('Profiles')
      .doc(uid)
      .get();

    const user: IFirestoreProfile = userDocument.data() as IFirestoreProfile;

    const mapper = new ProfileMapper();
    let profile: IProfile;
    profile = mapper.Map(user, profile);

    return profile;
  }

  async putProfile(uid: string, profile: IProfile): Promise<void> {
    const mapper = new ProfileMapper();
    const profileDTO = mapper.MapToDTO(profile);

    return await database
      .collection('Profiles')
      .doc(uid)
      .set(profileDTO, { merge: true });
  }
}

export let api = new Api();
