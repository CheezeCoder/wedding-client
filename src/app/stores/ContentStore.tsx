export interface IEventRow {
  icon: string;
  text: string;
  alt: string;
}

export interface ICountry {
  Icon: string;
  Name: string;
  Methods: Array<IMethod>;
}

export interface IMethod {
  Type: string;
  Targets: Array<string>;
}

export const ContentStore = {
  Details: {
    Island: {
      text: `The largest island of the Ionian Sea, Kefalonia is a very charming place. Although it has developed over the last years as
        a family destination, beach places in Kefalonia island never get crowded due to the large size of the island.
        Mostly famous for the exotic beaches, including Myrtos, Antisamos, Lourdas and Skala, the island was chosen
        for filming the Hollywood movie Captain Corelli's Mandolin. Apart from swimming, Kefalonia Greece also has
        many places to see, from picturesque villages to Medieval castles and beautiful monasteries. Fiscardo is
        the most cosmopolitan place with a port that receives many yachts every summer. Other nice villages to visit
        during your Kefalonia holidays are Argostoli, Sami and Assos and of course Lassi where we are getting married!`
    },
    Events: [
      {
        Title: 'The Ceremony',
        Image: { url: 'beacharch.jpg', alt: 'Wedding arch on a beach' },
        Rows: [
          {
            icon: 'mapmarker.png',
            alt: 'map marker icon',
            text: 'Ammos Residence, Argostoli, Greece'
          },
          {
            icon: 'calendar.png',
            alt: 'calendar icon',
            text: 'Sep 05th 2018, 17:30pm'
          },
          {
            icon: 'attire.png',
            alt: 'dress icon',
            text: 'All White!'
          }
        ],
        Details: {
          paragraphs: [
            'Our beachside wedding will be held at the picturesque Ammos residence. Be there early to grab a drink or cockatil in the warm greek sun.',
            "Come dressed in all white! No exceptions apart from footwear. Bare feet are also welcome if you wish! Linens, t-shirts, board shorts, whatever! It doesn't have to be fancy as long as it is all white! Offenders will be promptly thrown into the ocean.  Finally enjoy fresh made leomande after the ceremony and get to know the other guests!"
          ]
        },
        Alternate: false
      },
      {
        Title: 'The Reception',
        Image: { url: 'mythoscenter.jpg', alt: 'Mythos Conference Center' },
        Rows: [
          {
            icon: 'mapmarker.png',
            text: 'Mythos Event Center, Travliata, Greece'
          },
          {
            icon: 'calendar.png',
            text: 'Sep 05th 2018, 18:45'
          },
          {
            icon: 'attire.png',
            text: 'White + accessory if needed'
          }
        ],
        Details: {
          paragraphs: [
            'Join us after the ceremony at the beautiful Mythos Event Center situated in the rolling hills of southern Kefalonia overlooking Argostoli.',
            "Keep your white outfits! If you're scared of being cold, feel free to bring a non white jacket."
          ]
        },
        Alternate: true
      }
    ],
    Locations: {
      Us: {
        Beach: 'Makris Gialos Beach',
        Details: {
          paragraphs: [
            'We are booked in all week at a fantastic AirBnB on the north side of Makris Gialos Beach (Marked in the map down below on the red marker)',
            'Lassi is a beautiful town on the island of Kefalonia and we encourage you all to book a hotel or AirBnB in Lassi! Feel free of course to book anywhere else you want, however the majority of the events will be near Argostoli/Lassi.'
          ]
        },
        InfoWindow: {
          Image: { url: '', alt: 'sunny beach villa' },
          Title: 'Sunny Beach Villa',
          Text:
            'Somewhere on the north side of Makris Gialos Beach. We are right on the edge of the small cliff leading down to the beach. Looking forward to having a drink with you all with the great views!'
        }
      }
    }
  },
  ThankYou: {
    HeaderImage: { src: 'thankyou.jpg', alt: 'Thank you so much!' },
    Content: {
      paragraphs: [
        `Thank you for wanting to travel half way across the world to celebrate our wedding! We honestly couldn't think
        of a better gift than seeing your beautiful faces in Greece!`,
        `However, if you are just dying to get something, the best gift you can give us is a small donation towards making
        this wedding happen!`,
        `If you feel this is the way to go you can send money to any of the following accounts:`
      ]
    },
    Payments: {
      Countries: [
        {
          Icon: 'http://www.geonames.org/flags/x/ca.gif',
          Name: `Canada`,
          Methods: [
            {
              Type: 'Email Bank Transfer to:',
              Targets: ['ChrisShieldsEdmonton@gmail.com']
            },
            {
              Type: 'Direct transfer to BMO Account:',
              Targets: ['0014 3454-325']
            }
          ]
        },
        {
          Icon: 'http://www.geonames.org/flags/x/se.gif',
          Name: 'Sweden',
          Methods: [
            {
              Type: 'Swish to:',
              Targets: ['0722022154', '0722021971']
            },
            {
              Type: 'Direct Deposit to ICA Bank account:',
              Targets: ['(9727)-3625052']
            }
          ]
        }
      ]
    }
  },
  Profile: {
    Meals: {
      Fish: {
        img: { src: 'Fish', alt: 'Fish alternative' },
        label: 'Fish'
      },
      Vegetarian: {
        img: { src: 'Vegetarian', alt: 'Vegetarian alternative' },
        label: 'Vegetarian'
      },
      Vegan: {
        img: { src: 'Vegan', alt: 'Vegan alternative' },
        label: 'Vegan'
      }
    },
    Considerations: {
      paragraphs: {
        one: `If there are any other considerations such as allergies you need us to know about please let
        us know here!`,
        two: `For details about the wedding such as dress code, time and place, please see the`
      }
    }
  }
};
