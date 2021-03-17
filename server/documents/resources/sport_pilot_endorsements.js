const A17 = ({studentName, gender, sport_knowledge_test, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Aeronautical knowledge test: §§ 61.35(a)(1) and 61.309.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required aeronautical
                knowledge training of § 61.309. I have determined that ${gender} is prepared for the
                Sport Pilot ${sport_knowledge_test} knowledge test. <br><br>
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

const A18 = ({studentName, gender, sport_knowledge_test, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Taking flight proficiency check for different category or class of aircraft: §§ 61.309
                and 61.311. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training required in
                accordance with §§ 61.309 and 61.311 and have determined that ${gender} is prepared
                for the ${sport_knowledge_test} proficiency check. <br><br>
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

const A19 = ({studentName, gender, sport_categoryClass, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Passing flight proficiency check for different category or class of aircraft: §§ 61.309
                and 61.311. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has met the requirements of §§ 61.309 and
                61.311 and I have determined ${gender} proficient to act as pilot in command of
                ${sport_categoryClass} of light-sport aircraft. <br><br>
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

/*I've decided to leave the type of practical test as "sport pilot". May need to give the users the option to change that in the future. */
const A20 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Taking sport pilot practical test: §§ 61.309, 61.311, and 61.313. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the training required in accordance
                with §§ 61.309 and 61.311 and met the aeronautical experience requirements of § 61.313.
                I have determined that ${gender} is prepared for the sport pilot practical test<br><br>
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

const A21 = ({studentName, gender, sport_categoryClass, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Passing a sport pilot practical test: §§ 61.309, 61.311, and 61.313.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has met the requirements of §§ 61.309, 61.311,
                and 61.313, and I have determined ${gender} proficient to act as pilot in command of
                ${sport_categoryClass} light-sport aircraft.<br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">S.P Examiner No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A22 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Class B, C, or D airspace, at an airport located in Class B, C, or D airspace, or to,
                from, through, or at an airport having an operational control tower: § 61.325.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.325.
                I have determined ${gender} is proficient to conduct operations in Class B, C, or D
                airspace, at an airport located in Class B, C, or D airspace, or to, from, through, or at an
                airport having an operational control tower.<br>
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

const A23 = ({studentName, gender, sport_makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Light-sport aircraft that has a maximum speed in level flight with maximum
                continuous power (VH) less than or equal to 87 Knots Calibrated Airspeed (KCAS):
                § 61.327. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training required in
                accordance with § 61.327(a) in a ${sport_makeModel} aircraft. I have determined ${gender}
                proficient to act as pilot in command of a light-sport aircraft that has a VH less than
                or equal to 87 KCAS. <br><br>
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

const A24 = ({studentName, gender, sport_makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Light-sport aircraft that has a VH greater than 87 KCAS: § 61.327. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training required in
                accordance with § 61.327(b) in a ${sport_makeModel} aircraft. I have determined ${gender}
                proficient to act as pilot in command of a light-sport aircraft that has a VH greater
                than 87 KCAS. <br>
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
module.exports = {
    A17: A17,
    A18: A18,
    A19: A19,
    A20: A20,
    A21: A21,
    A22: A22,
    A23: A23,
    A24: A24
}