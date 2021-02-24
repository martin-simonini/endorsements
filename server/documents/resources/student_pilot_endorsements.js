const A3 = ({studentName, makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatLeft">
        <tr>
            <td class="title">
                Pre-solo aeronautical knowledge: § 61.87(b)
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has satisfactorily completed the pre-solo
                knowledge test of § 61.87(b) for the ${makeModel} aircraft.
                test. <br><br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`
}

const A4 = ({studentName, makeModel, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table class="floatRight">
        <tr>
            <td class="title">
                Pre-solo flight training: § 61.87(c)(1) and (2).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received and logged pre-solo flight training
                for the maneuvers and procedures that are appropriate to the ${makeModel} aircraft. I
                have determined ${gender} has demonstrated satisfactory proficiency and safety on the
                maneuvers and procedures required by § 61.87 in this or similar make and model of
                aircraft to be flown. <br><br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A5 = ({studentName, A5_airport, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Pre-solo flight training at night: § 61.87(o).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received flight training at night on night
                flying procedures that include takeoffs, approaches, landings, and go-arounds at night at
                the ${A5_airport} airport where the solo flight will be conducted; navigation training at
                night in the vicinity of the ${A5_airport} airport where the solo flight will be conducted.
                This endorsement expires 90 calendar-days from the date the flight training at night was
                received. 
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A6 = ({studentName, gender, makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo flight (first 90 calendar-day period): § 61.87(n).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined ${gender} meets the applicable requirements of § 61.87(n)
                and is proficient to make solo flights in ${makeModel}. <br><br>
            </td>
        </tr>
       <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A7 = ({studentName, gender, makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo flight (each additional 90 calendar-day period): § 61.87(p).

            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined that ${gender} meets the applicable requirements of
                § 61.87(p) and is proficient to make solo flights in ${makeModel}. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A8 = ({studentName, gender, A8_airport, A8_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo takeoffs and landings at another airport within 25 nautical miles (NM):
                § 61.93(b)(1).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of
                § 61.93(b)(1). I have determined that ${gender} is proficient to practice solo takeoffs and
                landings at ${A8_airport}. The takeoffs and landings at ${A8_airport} are subject to the
                following conditions: ${A8_limitations} <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A9 = ({studentName, gender, makeModel, category, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo cross-country flight: § 61.93(c)(1) and (2).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received solo cross-country
                training. I find ${gender} has met the applicable requirements of § 61.93, and is
                proficient to make solo cross-country flights in a ${makeModel} aircraft, ${category}. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A10 = ({studentName, A10_origin_airport, A10_route, makeModel, A10_date,A10_landings, A10_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo cross-country flight: § 61.93(c)(3).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I have reviewed the cross-country planning of ${studentName}. I find the
                planning and preparation to be correct to make the solo flight from ${A10_origin_airport} to
                ${A10_origin_airport} via ${A10_route} with landings at ${A10_landings} in a
                ${makeModel} aircraft on ${A10_date}. ${A10_limitations} <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A11 = ({studentName, A11_airport, gender, A11_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Repeated solo cross-country flights not more than 50 NM from the point of departure: § 61.93(b)(2). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training in both
                directions between and at both ${A11_airport}. I have determined that ${gender} is
                proficient of § 61.93(b)(2) to conduct repeated solo cross-country flights over that route,
                subject to the following conditions: ${A11_limitations} <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A12 = ({studentName, gender, A12_classB, A12_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo flight in Class B airspace: § 61.95(a).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.95(a).
                I have determined ${gender} is proficient to conduct solo flights in ${A12_classB}
                airspace. ${A12_limitations}.<br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A13 = ({studentName, gender, A13_airport, A13_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Solo flight to, from, or at an airport located in Class B airspace: § 61.95(b) and 14 CFR part 91, § 91.131(b)(1). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.95(b)(1). I have determined that ${gender} is proficient to conduct solo flight operations at ${A13_airport}. ${A13_limitations}<br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}
//const A = ({studentName, gender, signedDate, cfiNumber, expDate}) => {}
module.exports = {
    A3: A3,
    A4: A4,
    A5: A5,
    A6: A6,
    A7: A7,
    A8: A8,
    A9: A9,
    A10: A10,
    A11: A11,
    A12: A12,
    A13: A13
}
