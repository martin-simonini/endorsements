//TODO: Add Make and Model
const A3 = ({studentName, signedDate, cfiNumber, expDate}) => {
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
                knowledge test of § 61.87(b) for the [make and model] aircraft.
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

//TODO: Add Make and Model
const A4 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
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
                for the maneuvers and procedures that are appropriate to the [make and model] aircraft. I
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

//TODO: Add Airport name
const A5 = ({studentName, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatRight">
        <tr>
            <td class="title">
                Pre-solo flight training at night: § 61.87(o).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received flight training at night on night
                flying procedures that include takeoffs, approaches, landings, and go-arounds at night at
                the [airport name] airport where the solo flight will be conducted; navigation training at
                night in the vicinity of the [airport name] airport where the solo flight will be conducted.
                This endorsement expires 90 calendar-days from the date the flight training at night was
                received. <br><br>
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

//TODO: Add Make and Model
const A6 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatRight">
        <tr>
            <td class="title">
                Solo flight (first 90 calendar-day period): § 61.87(n).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined ${gender} meets the applicable requirements of § 61.87(n)
                and is proficient to make solo flights in [make and model]. <br><br>
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

//TODO: Add make and model
const A7 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatRight">
        <tr>
            <td class="title">
                Solo flight (each additional 90 calendar-day period): § 61.87(p).

            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training to qualify for
                solo flying. I have determined that ${gender} meets the applicable requirements of
                § 61.87(p) and is proficient to make solo flights in [make and model]. <br><br>
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

//TODO: Add Airport name
//TODO: Add limitations
const A8 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table class="floatRight">
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
                landings at [airport name]. The takeoffs and landings at [airport name] are subject to the
                following conditions: [List any applicable conditions or limitations.] <br><br>
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
    /*A9: A9,
    A10: A10,
    A11: A11,
    A12: A12,
    A13: A13*/
}