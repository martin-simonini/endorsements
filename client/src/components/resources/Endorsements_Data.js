
export const categories = [
    "GENERIC",
    "TRANSPORTATION SECURITY ADMINISTRATION (TSA) ENDORSEMENT",
    "STUDENT PILOT ENDORSEMENTS",
    "ADDITIONAL STUDENT PILOT ENDORSEMENTS FOR STUDENTS SEEKING SPORT OR RECREATIONAL PILOT CERTIFICATES",
    "SPORT PILOT ENDORSEMENTS",
    "RECREATIONAL PILOT ENDORSEMENTS",
    "PRIVATE PILOT ENDORSEMENTS",
    "COMMERCIAL PILOT ENDORSEMENTS",
    "AIRLINE TRANSPORT PILOT (ATP) ENDORSEMENTS",
    "INSTRUMENT RATING ENDORSEMENTS",
    "FLIGHT INSTRUCTOR (OTHER THAN FLIGHT INSTRUCTORS WITH A SPORT PILOT RATING) ENDORSEMENTS",
    "FLIGHT INSTRUCTOR WITH A SPORT PILOT RATING ENDORSEMENT",
    "GROUND INSTRUCTOR ENDORSEMENT",
    "SPECIAL FEDERAL AVIATION REGULATION (SFAR) 73, ROBINSON R-22/R-44 SPECIAL TRAINING AND EXPERIENCE REQUIREMENTS, ENDORSEMENTS",
    "ADDITIONAL ENDORSEMENTS",
    "NIGHT VISION GOGGLES (NVG) OPERATIONS",
    "ENHANCED FLIGHT VISION SYSTEM (EFVS)"
]

export const generic_endorsements = [
    {name: "Prerequisites for practical test", id: "A1"},
    {name: "Review of deficiencies identified on airman knowledge test", id: "A2"}
]

export const student_pilot_endorsements = [
    {name: "Pre-solo aeronautical knowledge: § 61.87(b)", id: "A3"},
    {name: "Pre-solo flight training: § 61.87(c)(1) and (2).", id: "A4"},
    {name: "Pre-solo flight training at night: § 61.87(o)", id: "A5"},
    {name: "Solo flight (first 90 calendar-day period): § 61.87(n).", id: "A6"},
    {name: "Solo flight (each additional 90 calendar-day period): § 61.87(p)", id: "A7"},
    {name: "Solo takeoffs and landings at another airport within 25 nautical miles (NM): § 61.93(b)(1).", id: "A8"},
    {name: "Solo cross-country flight: § 61.93(c)(1) and (2)", id: "A9"},
    {name: "Solo cross-country flight: § 61.93(c)(3).", id: "A10"},
    {name: "Repeated solo cross-country flights not more than 50 NM from the point of departure: § 61.93(b)(2).", id: "A11"},
    {name: "Solo flight in Class B airspace: § 61.95(a).", id: "A12"},
    {name: "Solo flight to, from, or at an airport located in Class B airspace: § 61.95(b) and 14 CFR part 91, § 91.131(b)(1).", id: "A13"},
]

export const additional_student_pilot_endorsements = [
    {name: "Solo flight in Class B, C, and D airspace: § 61.94(a).", id: "A15"},
    {name: "Solo flight to, from, or at an airport located in Class B, C, or D airspace or at an airport having an operational control tower: §§ 61.94(a) and 91.131(b)(1).", id: "A16"}
]

export const tsa_endorsement = [
    {name: "Endorsement of U.S. citizenship recommended by the Transportation Security Administration (TSA): Title 49 of the Code of Federal Regulations (49 CFR) § 1552.3(h).", id: "A14"}
]

export const sport_pilot_endorsements = [
    {name: "Aeronautical knowledge test: §§ 61.35(a)(1) and 61.309. ", id:"A17"},
    {name: "Taking flight proficiency check for different category or class of aircraft: §§ 61.309 and 61.311.", id: "A18"},
    {name: "Passing flight proficiency check for different category or class of aircraft: §§ 61.309 and 61.311. ", id: "A19"},
    {name: "Taking sport pilot practical test: §§ 61.309, 61.311, and 61.313. ", id: "A20"},
    {name: "Passing a sport pilot practical test: §§ 61.309, 61.311, and 61.313.", id: "A21"},
    {name: "Class B, C, or D airspace, at an airport located in Class B, C, or D airspace, or to, from, through, or at an airport having an operational control tower: § 61.325. ", id: "A22"},
    {name: "Light-sport aircraft that has a maximum speed in level flight with maximum continuous power (VH) less than or equal to 87 Knots Calibrated Airspeed (KCAS): § 61.327. ", id: "A23"},
    {name: "Light-sport aircraft that has a VH greater than 87 KCAS: § 61.327. ", id: "A24"},
]

export const aircraft_make_and_model = [
    "A3",
    "A4",
    "A6",
    "A7",
    "A9",

    "A23",
    "A24"
]

export const airport = [
    "A5",
    "A8",
]

export const limitations = [
    "A8",
]

export const aircraft_category = [
    "A9",
    "A19",
    "A21",
]

export const FULL_PAGE = 12;