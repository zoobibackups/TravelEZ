const Countries = [
    {
        label: 'Afghanistan',
        value: 'AF',
        capital: 'Kabul',
        region: 'AS'
    },
    {
        label: 'Åland Islands',
        value: 'AX',
        capital: 'Mariehamn',
        region: 'EU'
    },
    {
        label: 'Albania',
        value: 'AL',
        capital: 'Tirana',
        region: 'EU'
    },
    {
        label: 'Algeria',
        value: 'DZ',
        capital: 'Algiers',
        region: 'AF'
    },
    {
        label: 'American Samoa',
        value: 'AS',
        capital: 'Pago Pago',
        region: 'OC'
    },
    {
        label: 'Andorra',
        value: 'AD',
        capital: 'Andorra la Vella',
        region: 'EU'
    },
    {
        label: 'Angola',
        value: 'AO',
        capital: 'Luanda',
        region: 'AF'
    },
    {
        label: 'Anguilla',
        value: 'AI',
        capital: 'The Valley',
        region: 'NA'
    },
    {
        label: 'Antigua and Barbuda',
        value: 'AG',
        capital: "Saint John's",
        region: 'NA'
    },
    {
        label: 'Argentina',
        value: 'AR',
        capital: 'Buenos Aires',
        region: 'SA'
    },
    {
        label: 'Armenia',
        value: 'AM',
        capital: 'Yerevan',
        region: 'AS'
    },
    {
        label: 'Aruba',
        value: 'AW',
        capital: 'Oranjestad',
        region: 'SA'
    },
    {
        label: 'Australia',
        value: 'AU',
        capital: 'Canberra',
        region: 'OC'
    },
    {
        label: 'Austria',
        value: 'AT',
        capital: 'Vienna',
        region: 'EU'
    },
    {
        label: 'Azerbaijan',
        value: 'AZ',
        capital: 'Baku',
        region: 'AS'
    },
    {
        label: 'Bahamas',
        value: 'BS',
        capital: 'Nassau',
        region: 'NA'
    },
    {
        label: 'Bahrain',
        value: 'BH',
        capital: 'Manama',
        region: 'AS'
    },
    {
        label: 'Bangladesh',
        value: 'BD',
        capital: 'Dhaka',
        region: 'AS'
    },
    {
        label: 'Barbados',
        value: 'BB',
        capital: 'Bridgetown',
        region: 'NA'
    },
    {
        label: 'Belarus',
        value: 'BY',
        capital: 'Minsk',
        region: 'EU'
    },
    {
        label: 'Belgium',
        value: 'BE',
        capital: 'Brussels',
        region: 'EU'
    },
    {
        label: 'Belize',
        value: 'BZ',
        capital: 'Belmopan',
        region: 'NA'
    },
    {
        label: 'Benin',
        value: 'BJ',
        capital: 'Porto-Novo',
        region: 'AF'
    },
    {
        label: 'Bermuda',
        value: 'BM',
        capital: 'Hamilton',
        region: 'NA'
    },
    {
        label: 'Bhutan',
        value: 'BT',
        capital: 'Thimphu',
        region: 'AS'
    },
    {
        label: 'Bolivia (Plurinational State of)',
        value: 'BO',
        capital: 'Sucre',
        region: 'SA'
    },
    {
        label: 'Bonaire, Sint Eustatius and Saba',
        value: 'BQ',
        capital: 'Kralendijk',
        region: 'SA'
    },
    {
        label: 'Bosnia and Herzegovina',
        value: 'BA',
        capital: 'Sarajevo',
        region: 'EU'
    },
    {
        label: 'Botswana',
        value: 'BW',
        capital: 'Gaborone',
        region: 'AF'
    },
    {
        label: 'Bouvet Island',
        value: 'BV',
        capital: '',
        region: 'AN'
    },
    {
        label: 'Brazil',
        value: 'BR',
        capital: 'Brasília',
        region: 'SA'
    },
    {
        label: 'British Indian Ocean Territory',
        value: 'IO',
        capital: 'Diego Garcia',
        region: 'AF'
    },
    {
        label: 'United States Minor Outlying Islands',
        value: 'UM',
        capital: '',
        region: 'NA'
    },
    {
        label: 'Virgin Islands (British)',
        value: 'VG',
        capital: 'Road Town',
        region: 'NA'
    },
    {
        label: 'Virgin Islands (U.S.)',
        value: 'VI',
        capital: 'Charlotte Amalie',
        region: 'NA'
    },
    {
        label: 'Brunei Darussalam',
        value: 'BN',
        capital: 'Bandar Seri Begawan',
        region: 'AS'
    },
    {
        label: 'Bulgaria',
        value: 'BG',
        capital: 'Sofia',
        region: 'EU'
    },
    {
        label: 'Burkina Faso',
        value: 'BF',
        capital: 'Ouagadougou',
        region: 'AF'
    },
    {
        label: 'Burundi',
        value: 'BI',
        capital: 'Bujumbura',
        region: 'AF'
    },
    {
        label: 'Cambodia',
        value: 'KH',
        capital: 'Phnom Penh',
        region: 'AS'
    },
    {
        label: 'Cameroon',
        value: 'CM',
        capital: 'Yaoundé',
        region: 'AF'
    },
    {
        label: 'Canada',
        value: 'CA',
        capital: 'Ottawa',
        region: 'NA'
    },
    {
        label: 'Cabo Verde',
        value: 'CV',
        capital: 'Praia',
        region: 'AF'
    },
    {
        label: 'Cayman Islands',
        value: 'KY',
        capital: 'George Town',
        region: 'NA',
        demonym: 'Caymanian'
    },
    {
        label: 'Central African Republic',
        value: 'CF',
        capital: 'Bangui',
        region: 'AF'
    },
    {
        label: 'Chad',
        value: 'TD',
        capital: "N'Djamena",
        region: 'AF'
    },
    {
        label: 'Chile',
        value: 'CL',
        capital: 'Santiago',
        region: 'SA'
    },
    {
        label: 'China',
        value: 'CN',
        capital: 'Beijing',
        region: 'AS'
    },
    {
        label: 'Christmas Island',
        value: 'CX',
        capital: 'Flying Fish Cove',
        region: 'OC'
    },
    {
        label: 'Cocos (Keeling) Islands',
        value: 'CC',
        capital: 'West Island',
        region: 'OC'
    },
    {
        label: 'Colombia',
        value: 'CO',
        capital: 'Bogotá',
        region: 'SA'
    },
    {
        label: 'Comoros',
        value: 'KM',
        capital: 'Moroni',
        region: 'AF'
    },
    {
        label: 'Congo',
        value: 'CG',
        capital: 'Brazzaville',
        region: 'AF'
    },
    {
        label: 'Congo (Democratic Republic of the)',
        value: 'CD',
        capital: 'Kinshasa',
        region: 'AF'
    },
    {
        label: 'Cook Islands',
        value: 'CK',
        capital: 'Avarua',
        region: 'OC'
    },
    {
        label: 'Costa Rica',
        value: 'CR',
        capital: 'San José',
        region: 'NA'
    },
    {
        label: 'Croatia',
        value: 'HR',
        capital: 'Zagreb',
        region: 'EU'
    },
    {
        label: 'Cuba',
        value: 'CU',
        capital: 'Havana',
        region: 'NA'
    },
    {
        label: 'Curaçao',
        value: 'CW',
        capital: 'Willemstad',
        region: 'SA'
    },
    {
        label: 'Cyprus',
        value: 'CY',
        capital: 'Nicosia',
        region: 'EU'
    },
    {
        label: 'Czech Republic',
        value: 'CZ',
        capital: 'Prague',
        region: 'EU'
    },
    {
        label: 'Denmark',
        value: 'DK',
        capital: 'Copenhagen',
        region: 'EU'
    },
    {
        label: 'Djibouti',
        value: 'DJ',
        capital: 'Djibouti',
        region: 'AF'
    },
    {
        label: 'Dominica',
        value: 'DM',
        capital: 'Roseau',
        region: 'NA'
    },
    {
        label: 'Dominican Republic',
        value: 'DO',
        capital: 'Santo Domingo',
        region: 'NA'
    },
    {
        label: 'Ecuador',
        value: 'EC',
        capital: 'Quito',
        region: 'SA'
    },
    {
        label: 'Egypt',
        value: 'EG',
        capital: 'Cairo',
        region: 'AF'
    },
    {
        label: 'El Salvador',
        value: 'SV',
        capital: 'San Salvador',
        region: 'NA'
    },
    {
        label: 'Equatorial Guinea',
        value: 'GQ',
        capital: 'Malabo',
        region: 'AF'
    },
    {
        label: 'Eritrea',
        value: 'ER',
        capital: 'Asmara',
        region: 'AF'
    },
    {
        label: 'Estonia',
        value: 'EE',
        capital: 'Tallinn',
        region: 'EU'
    },
    {
        label: 'Ethiopia',
        value: 'ET',
        capital: 'Addis Ababa',
        region: 'AF'
    },
    {
        label: 'Falkland Islands (Malvinas)',
        value: 'FK',
        capital: 'Stanley',
        region: 'SA'
    },
    {
        label: 'Faroe Islands',
        value: 'FO',
        capital: 'Tórshavn',
        region: 'EU'
    },
    {
        label: 'Fiji',
        value: 'FJ',
        capital: 'Suva',
        region: 'OC'
    },
    {
        label: 'Finland',
        value: 'FI',
        capital: 'Helsinki',
        region: 'EU'
    },
    {
        label: 'France',
        value: 'FR',
        capital: 'Paris',
        region: 'EU',
        demonym: 'French'
    },
    {
        label: 'French Guiana',
        value: 'GF',
        capital: 'Cayenne',
        region: 'SA'
    },
    {
        label: 'French Polynesia',
        value: 'PF',
        capital: 'Papeetē',
        region: 'OC'
    },
    {
        label: 'French Southern Territories',
        value: 'TF',
        capital: 'Port-aux-Français',
        region: 'AF'
    },
    {
        label: 'Gabon',
        value: 'GA',
        capital: 'Libreville',
        region: 'AF'
    },
    {
        label: 'Gambia',
        value: 'GM',
        capital: 'Banjul',
        region: 'AF'
    },
    {
        label: 'Georgia',
        value: 'GE',
        capital: 'Tbilisi',
        region: 'AS'
    },
    {
        label: 'Germany',
        value: 'DE',
        capital: 'Berlin',
        region: 'EU'
    },
    {
        label: 'Ghana',
        value: 'GH',
        capital: 'Accra',
        region: 'AF'
    },
    {
        label: 'Gibraltar',
        value: 'GI',
        capital: 'Gibraltar',
        region: 'EU'
    },
    {
        label: 'Greece',
        value: 'GR',
        capital: 'Athens',
        region: 'EU'
    },
    {
        label: 'Greenland',
        value: 'GL',
        capital: 'Nuuk',
        region: 'NA'
    },
    {
        label: 'Grenada',
        value: 'GD',
        capital: "St. George's",
        region: 'NA'
    },
    {
        label: 'Guadeloupe',
        value: 'GP',
        capital: 'Basse-Terre',
        region: 'NA'
    },
    {
        label: 'Guam',
        value: 'GU',
        capital: 'Hagåtña',
        region: 'OC'
    },
    {
        label: 'Guatemala',
        value: 'GT',
        capital: 'Guatemala City',
        region: 'NA'
    },
    {
        label: 'Guernsey',
        value: 'GG',
        capital: 'St. Peter Port',
        region: 'EU'
    },
    {
        label: 'Guinea',
        value: 'GN',
        capital: 'Conakry',
        region: 'AF'
    },
    {
        label: 'Guinea-Bissau',
        value: 'GW',
        capital: 'Bissau',
        region: 'AF'
    },
    {
        label: 'Guyana',
        value: 'GY',
        capital: 'Georgetown',
        region: 'SA'
    },
    {
        label: 'Haiti',
        value: 'HT',
        capital: 'Port-au-Prince',
        region: 'Americas'
    },
    {
        label: 'Heard Island and McDonald Islands',
        value: 'HM',
        capital: '',
        region: ''
    },
    {
        label: 'Holy See',
        value: 'VA',
        capital: 'Rome',
        region: 'EU'
    },
    {
        label: 'Honduras',
        value: 'HN',
        capital: 'Tegucigalpa',
        region: 'NA'
    },
    {
        label: 'Hong Kong',
        value: 'HK',
        capital: 'City of Victoria',
        region: 'AS'
    },
    {
        label: 'Hungary',
        value: 'HU',
        capital: 'Budapest',
        region: 'EU'
    },
    {
        label: 'Iceland',
        value: 'IS',
        capital: 'Reykjavík',
        region: 'EU'
    },
    {
        label: 'India',
        value: 'IN',
        capital: 'New Delhi',
        region: 'AS'
    },
    {
        label: 'Indonesia',
        value: 'ID',
        capital: 'Jakarta',
        region: 'AS'
    },
    {
        label: "Côte d'Ivoire",
        value: 'CI',
        capital: 'Yamoussoukro',
        region: 'AF'
    },
    {
        label: 'Iran (Islamic Republic of)',
        value: 'IR',
        capital: 'Tehran',
        region: 'AS'
    },
    {
        label: 'Iraq',
        value: 'IQ',
        capital: 'Baghdad',
        region: 'AS'
    },
    {
        label: 'Ireland',
        value: 'IE',
        capital: 'Dublin',
        region: 'EU'
    },
    {
        label: 'Isle of Man',
        value: 'IM',
        capital: 'Douglas',
        region: 'EU'
    },
    {
        label: 'Israel',
        value: 'IL',
        capital: 'Jerusalem',
        region: 'AS'
    },
    {
        label: 'Italy',
        value: 'IT',
        capital: 'Rome',
        region: 'EU'
    },
    {
        label: 'Jamaica',
        value: 'JM',
        capital: 'Kingston',
        region: 'NA'
    },
    {
        label: 'Japan',
        value: 'JP',
        capital: 'Tokyo',
        region: 'AS'
    },
    {
        label: 'Jersey',
        value: 'JE',
        capital: 'Saint Helier',
        region: 'EU'
    },
    {
        label: 'Jordan',
        value: 'JO',
        capital: 'Amman',
        region: 'AS'
    },
    {
        label: 'Kazakhstan',
        value: 'KZ',
        capital: 'Astana',
        region: 'AS'
    },
    {
        label: 'Kenya',
        value: 'KE',
        capital: 'Nairobi',
        region: 'AF'
    },
    {
        label: 'Kiribati',
        value: 'KI',
        capital: 'South Tarawa',
        region: 'OC'
    },
    {
        label: 'Kuwait',
        value: 'KW',
        capital: 'Kuwait City',
        region: 'AS'
    },
    {
        label: 'Kyrgyzstan',
        value: 'KG',
        capital: 'Bishkek',
        region: 'AS'
    },
    {
        label: "Lao People's Democratic Republic",
        value: 'LA',
        capital: 'Vientiane',
        region: 'AS'
    },
    {
        label: 'Latvia',
        value: 'LV',
        capital: 'Riga',
        region: 'EU'
    },
    {
        label: 'Lebanon',
        value: 'LB',
        capital: 'Beirut',
        region: 'AS'
    },
    {
        label: 'Lesotho',
        value: 'LS',
        capital: 'Maseru',
        region: 'AF'
    },
    {
        label: 'Liberia',
        value: 'LR',
        capital: 'Monrovia',
        region: 'AF'
    },
    {
        label: 'Libya',
        value: 'LY',
        capital: 'Tripoli',
        region: 'AF'
    },
    {
        label: 'Liechtenstein',
        value: 'LI',
        capital: 'Vaduz',
        region: 'EU'
    },
    {
        label: 'Lithuania',
        value: 'LT',
        capital: 'Vilnius',
        region: 'EU'
    },
    {
        label: 'Luxembourg',
        value: 'LU',
        capital: 'Luxembourg',
        region: 'EU'
    },
    {
        label: 'Macao',
        value: 'MO',
        capital: '',
        region: 'AS'
    },
    {
        label: 'Macedonia (the former Yugoslav Republic of)',
        value: 'MK',
        capital: 'Skopje',
        region: 'EU'
    },
    {
        label: 'Madagascar',
        value: 'MG',
        capital: 'Antananarivo',
        region: 'AF'
    },
    {
        label: 'Malawi',
        value: 'MW',
        capital: 'Lilongwe',
        region: 'AF'
    },
    {
        label: 'Malaysia',
        value: 'MY',
        capital: 'Kuala Lumpur',
        region: 'AS'
    },
    {
        label: 'Maldives',
        value: 'MV',
        capital: 'Malé',
        region: 'AS'
    },
    {
        label: 'Mali',
        value: 'ML',
        capital: 'Bamako',
        region: 'AF'
    },
    {
        label: 'Malta',
        value: 'MT',
        capital: 'Valletta',
        region: 'EU'
    },
    {
        label: 'Marshall Islands',
        value: 'MH',
        capital: 'Majuro',
        region: 'OC'
    },
    {
        label: 'Martinique',
        value: 'MQ',
        capital: 'Fort-de-France',
        region: 'Americas'
    },
    {
        label: 'Mauritania',
        value: 'MR',
        capital: 'Nouakchott',
        region: 'AF'
    },
    {
        label: 'Mauritius',
        value: 'MU',
        capital: 'Port Louis',
        region: 'AF'
    },
    {
        label: 'Mayotte',
        value: 'YT',
        capital: 'Mamoudzou',
        region: 'AF'
    },
    {
        label: 'Mexico',
        value: 'MX',
        capital: 'Mexico City',
        region: 'NA'
    },
    {
        label: 'Micronesia (Federated States of)',
        value: 'FM',
        capital: 'Palikir',
        region: 'OC'
    },
    {
        label: 'Moldova (Republic of)',
        value: 'MD',
        capital: 'Chișinău',
        region: 'EU'
    },
    {
        label: 'Monaco',
        value: 'MC',
        capital: 'Monaco',
        region: 'EU'
    },
    {
        label: 'Mongolia',
        value: 'MN',
        capital: 'Ulan Bator',
        region: 'AS'
    },
    {
        label: 'Montenegro',
        value: 'ME',
        capital: 'Podgorica',
        region: 'EU'
    },
    {
        label: 'Montserrat',
        value: 'MS',
        capital: 'Plymouth',
        region: 'NA'
    },
    {
        label: 'Morocco',
        value: 'MA',
        capital: 'Rabat',
        region: 'AF'
    },
    {
        label: 'Mozambique',
        value: 'MZ',
        capital: 'Maputo',
        region: 'AF'
    },
    {
        label: 'Myanmar',
        value: 'MM',
        capital: 'Naypyidaw',
        region: 'AS'
    },
    {
        label: 'Namibia',
        value: 'NA',
        capital: 'Windhoek',
        region: 'AF'
    },
    {
        label: 'Nauru',
        value: 'NR',
        capital: 'Yaren',
        region: 'OC'
    },
    {
        label: 'Nepal',
        value: 'NP',
        capital: 'Kathmandu',
        region: 'AS'
    },
    {
        label: 'Netherlands',
        value: 'NL',
        capital: 'Amsterdam',
        region: 'EU'
    },
    {
        label: 'New Caledonia',
        value: 'NC',
        capital: 'Nouméa',
        region: 'OC'
    },
    {
        label: 'New Zealand',
        value: 'NZ',
        capital: 'Wellington',
        region: 'OC'
    },
    {
        label: 'Nicaragua',
        value: 'NI',
        capital: 'Managua',
        region: 'NA'
    },
    {
        label: 'Niger',
        value: 'NE',
        capital: 'Niamey',
        region: 'AF'
    },
    {
        label: 'Nigeria',
        value: 'NG',
        capital: 'Abuja',
        region: 'AF'
    },
    {
        label: 'Niue',
        value: 'NU',
        capital: 'Alofi',
        region: 'OC'
    },
    {
        label: 'Norfolk Island',
        value: 'NF',
        capital: 'Kingston',
        region: 'OC'
    },
    {
        label: "Korea (Democratic People's Republic of)",
        value: 'KP',
        capital: 'Pyongyang',
        region: 'AS'
    },
    {
        label: 'Northern Mariana Islands',
        value: 'MP',
        capital: 'Saipan',
        region: 'OC'
    },
    {
        label: 'Norway',
        value: 'NO',
        capital: 'Oslo',
        region: 'EU'
    },
    {
        label: 'Oman',
        value: 'OM',
        capital: 'Muscat',
        region: 'AS'
    },
    {
        label: 'Pakistan',
        value: 'PK',
        capital: 'Islamabad',
        region: 'AS'
    },
    {
        label: 'Palau',
        value: 'PW',
        capital: 'Ngerulmud',
        region: 'OC'
    },
    {
        label: 'Palestine, State of',
        value: 'PS',
        capital: 'Ramallah',
        region: 'AS'
    },
    {
        label: 'Panama',
        value: 'PA',
        capital: 'Panama City',
        region: 'NA'
    },
    {
        label: 'Papua New Guinea',
        value: 'PG',
        capital: 'Port Moresby',
        region: 'OC'
    },
    {
        label: 'Paraguay',
        value: 'PY',
        capital: 'Asunción',
        region: 'SA'
    },
    {
        label: 'Peru',
        value: 'PE',
        capital: 'Lima',
        region: 'SA'
    },
    {
        label: 'Philippines',
        value: 'PH',
        capital: 'Manila',
        region: 'AS'
    },
    {
        label: 'Pitcairn',
        value: 'PN',
        capital: 'Adamstown',
        region: 'OC'
    },
    {
        label: 'Poland',
        value: 'PL',
        capital: 'Warsaw',
        region: 'EU'
    },
    {
        label: 'Portugal',
        value: 'PT',
        capital: 'Lisbon',
        region: 'EU'
    },
    {
        label: 'Puerto Rico',
        value: 'PR',
        capital: 'San Juan',
        region: 'NA'
    },
    {
        label: 'Qatar',
        value: 'QA',
        capital: 'Doha',
        region: 'AS'
    },
    {
        label: 'Republic of Kosovo',
        value: 'XK',
        capital: 'Pristina',
        region: 'EU'
    },
    {
        label: 'Réunion',
        value: 'RE',
        capital: 'Saint-Denis',
        region: 'AF'
    },
    {
        label: 'Romania',
        value: 'RO',
        capital: 'Bucharest',
        region: 'EU'
    },
    {
        label: 'Russian Federation',
        value: 'RU',
        capital: 'Moscow',
        region: 'EU'
    },
    {
        label: 'Rwanda',
        value: 'RW',
        capital: 'Kigali',
        region: 'AF'
    },
    {
        label: 'Saint Barthélemy',
        value: 'BL',
        capital: 'Gustavia',
        region: 'NA'
    },
    {
        label: 'Saint Helena, Ascension and Tristan da Cunha',
        value: 'SH',
        capital: 'Jamestown',
        region: 'AF'
    },
    {
        label: 'Saint Kitts and Nevis',
        value: 'KN',
        capital: 'Basseterre',
        region: 'NA'
    },
    {
        label: 'Saint Lucia',
        value: 'LC',
        capital: 'Castries',
        region: 'NA'
    },
    {
        label: 'Saint Martin (French part)',
        value: 'MF',
        capital: 'Marigot',
        region: 'NA'
    },
    {
        label: 'Saint Pierre and Miquelon',
        value: 'PM',
        capital: 'Saint-Pierre',
        region: 'NA'
    },
    {
        label: 'Saint Vincent and the Grenadines',
        value: 'VC',
        capital: 'Kingstown',
        region: 'NA'
    },
    {
        label: 'Samoa',
        value: 'WS',
        capital: 'Apia',
        region: 'OC'
    },
    {
        label: 'San Marino',
        value: 'SM',
        capital: 'City of San Marino',
        region: 'EU'
    },
    {
        label: 'Sao Tome and Principe',
        value: 'ST',
        capital: 'São Tomé',
        region: 'AF'
    },
    {
        label: 'Saudi Arabia',
        value: 'SA',
        capital: 'Riyadh',
        region: 'AS'
    },
    {
        label: 'Senegal',
        value: 'SN',
        capital: 'Dakar',
        region: 'AF'
    },
    {
        label: 'Serbia',
        value: 'RS',
        capital: 'Belgrade',
        region: 'EU'
    },
    {
        label: 'Seychelles',
        value: 'SC',
        capital: 'Victoria',
        region: 'AF'
    },
    {
        label: 'Sierra Leone',
        value: 'SL',
        capital: 'Freetown',
        region: 'AF'
    },
    {
        label: 'Singapore',
        value: 'SG',
        capital: 'Singapore',
        region: 'AS'
    },
    {
        label: 'Sint Maarten (Dutch part)',
        value: 'SX',
        capital: 'Philipsburg',
        region: 'Americas'
    },
    {
        label: 'Slovakia',
        value: 'SK',
        capital: 'Bratislava',
        region: 'EU'
    },
    {
        label: 'Slovenia',
        value: 'SI',
        capital: 'Ljubljana',
        region: 'EU'
    },
    {
        label: 'Solomon Islands',
        value: 'SB',
        capital: 'Honiara',
        region: 'OC'
    },
    {
        label: 'Somalia',
        value: 'SO',
        capital: 'Mogadishu',
        region: 'AF'
    },
    {
        label: 'South Africa',
        value: 'ZA',
        capital: 'Pretoria',
        region: 'AF'
    },
    {
        label: 'South Georgia and the South Sandwich Islands',
        value: 'GS',
        capital: 'King Edward Point',
        region: 'NA'
    },
    {
        label: 'Korea (Republic of)',
        value: 'KR',
        capital: 'Seoul',
        region: 'AS'
    },
    {
        label: 'South Sudan',
        value: 'SS',
        capital: 'Juba',
        region: 'AF'
    },
    {
        label: 'Spain',
        value: 'ES',
        capital: 'Madrid',
        region: 'EU'
    },
    {
        label: 'Sri Lanka',
        value: 'LK',
        capital: 'Colombo',
        region: 'AS'
    },
    {
        label: 'Sudan',
        value: 'SD',
        capital: 'Khartoum',
        region: 'AF'
    },
    {
        label: 'Suriname',
        value: 'SR',
        capital: 'Paramaribo',
        region: 'SA'
    },
    {
        label: 'Svalbard and Jan Mayen',
        value: 'SJ',
        capital: 'Longyearbyen',
        region: 'EU'
    },
    {
        label: 'Swaziland',
        value: 'SZ',
        capital: 'Lobamba',
        region: 'AF'
    },
    {
        label: 'Sweden',
        value: 'SE',
        capital: 'Stockholm',
        region: 'EU'
    },
    {
        label: 'Switzerland',
        value: 'CH',
        capital: 'Bern',
        region: 'EU'
    },
    {
        label: 'Syrian Arab Republic',
        value: 'SY',
        capital: 'Damascus',
        region: 'AS'
    },
    {
        label: 'Taiwan',
        value: 'TW',
        capital: 'Taipei',
        region: 'AS'
    },
    {
        label: 'Tajikistan',
        value: 'TJ',
        capital: 'Dushanbe',
        region: 'AS'
    },
    {
        label: 'Tanzania, United Republic of',
        value: 'TZ',
        capital: 'Dodoma',
        region: 'AF'
    },
    {
        label: 'Thailand',
        value: 'TH',
        capital: 'Bangkok',
        region: 'AS'
    },
    {
        label: 'Timor-Leste',
        value: 'TL',
        capital: 'Dili',
        region: 'AS'
    },
    {
        label: 'Togo',
        value: 'TG',
        capital: 'Lomé',
        region: 'AF'
    },
    {
        label: 'Tokelau',
        value: 'TK',
        capital: 'Fakaofo',
        region: 'OC'
    },
    {
        label: 'Tonga',
        value: 'TO',
        capital: "Nuku'alofa",
        region: 'OC'
    },
    {
        label: 'Trinidad and Tobago',
        value: 'TT',
        capital: 'Port of Spain',
        region: 'SA'
    },
    {
        label: 'Tunisia',
        value: 'TN',
        capital: 'Tunis',
        region: 'AF'
    },
    {
        label: 'Turkey',
        value: 'TR',
        capital: 'Ankara',
        region: 'AS'
    },
    {
        label: 'Turkmenistan',
        value: 'TM',
        capital: 'Ashgabat',
        region: 'AS'
    },
    {
        label: 'Turks and Caicos Islands',
        value: 'TC',
        capital: 'Cockburn Town',
        region: 'NA'
    },
    {
        label: 'Tuvalu',
        value: 'TV',
        capital: 'Funafuti',
        region: 'OC'
    },
    {
        label: 'Uganda',
        value: 'UG',
        capital: 'Kampala',
        region: 'AF'
    },
    {
        label: 'Ukraine',
        value: 'UA',
        capital: 'Kiev',
        region: 'EU'
    },
    {
        label: 'United Arab Emirates',
        value: 'AE',
        capital: 'Abu Dhabi',
        region: 'AS'
    },
    {
        label: 'United Kingdom of Great Britain and Northern Ireland',
        value: 'GB',
        capital: 'London',
        region: 'EU'
    },
    {
        label: 'United States of America',
        value: 'US',
        capital: 'Washington, D.C.',
        region: 'NA'
    },
    {
        label: 'Uruguay',
        value: 'UY',
        capital: 'Montevideo',
        region: 'SA'
    },
    {
        label: 'Uzbekistan',
        value: 'UZ',
        capital: 'Tashkent',
        region: 'AS'
    },
    {
        label: 'Vanuatu',
        value: 'VU',
        capital: 'Port Vila',
        region: 'OC'
    },
    {
        label: 'Venezuela (Bolivarian Republic of)',
        value: 'VE',
        capital: 'Caracas',
        region: 'SA'
    },
    {
        label: 'Viet Nam',
        value: 'VN',
        capital: 'Hanoi',
        region: 'AS'
    },
    {
        label: 'Wallis and Futuna',
        value: 'WF',
        capital: 'Mata-Utu',
        region: 'OC'
    },
    {
        label: 'Western Sahara',
        value: 'EH',
        capital: 'El Aaiún',
        region: 'AF'
    },
    {
        label: 'Yemen',
        value: 'YE',
        capital: "Sana'a",
        region: 'AS'
    },
    {
        label: 'Zambia',
        value: 'ZM',
        capital: 'Lusaka',
        region: 'AF'
    },
    {
        label: 'Zimbabwe',
        value: 'ZW',
        capital: 'Harare',
        region: 'AF'
    }
];

export default Countries;
