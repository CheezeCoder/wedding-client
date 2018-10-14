import * as React from 'react';
import * as Styles from './styles.css';
import { ContentStore } from 'app/stores/ContentStore';
import { Choice } from 'app/pages/Profile/Card/Options/MealChoice/Choice';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';
import { EMeal } from 'app/lib/configuration';
interface MealTypeProps {}

const { Meals } = ContentStore.Profile;

export const MealType: React.StatelessComponent<MealTypeProps> = observer(
  () => (
    <div className={Styles.root}>
      <h3>Meal Choice:</h3>
      <div className={Styles.meals}>
        <Choice
          alt={Meals.Fish.img.alt}
          img={Meals.Fish.img.src}
          label={Meals.Fish.label}
          active={ProfileStore.mealChoice === EMeal.Fish}
          type={EMeal.Fish}
        />

        <Choice
          alt={Meals.Vegetarian.img.alt}
          img={Meals.Vegetarian.img.src}
          label={Meals.Vegetarian.label}
          active={ProfileStore.mealChoice === EMeal.Vegetarian}
          type={EMeal.Vegetarian}
        />

        <Choice
          alt={Meals.Vegan.img.alt}
          img={Meals.Vegan.img.src}
          label={Meals.Vegan.label}
          active={ProfileStore.mealChoice === EMeal.Vegan}
          type={EMeal.Vegan}
        />
      </div>
    </div>
  )
);
