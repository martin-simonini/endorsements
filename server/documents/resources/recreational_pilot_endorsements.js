const A25 = ({studentName, gender, recreational_knowledge_test, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Aeronautical knowledge test: §§ 61.35(a)(1), 61.96(b)(3), and 61.97(b). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.97(b).
                I have determined that ${gender} is prepared for the Recreational Pilot - ${recreational_knowledge_test} knowledge test.<br><br>
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

const A26 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight proficiency/practical test: §§ 61.96(b)(5), 61.98(a) and (b), and 61.99
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of
                §§ 61.98(b) and 61.99. I have determined that ${gender} is prepared for the Recreational Pilot
                practical test<br><br>
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

const A27 = ({studentName, gender, A27_airport, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Recreational pilot to operate within 50 NM of the airport where training was
                received: § 61.101(b).  
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of
                § 61.101(b). I have determined that ${gender} is competent to operate at the ${A27_airport}.<br><br>
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


const A28 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Recreational pilot to act as pilot in command on a flight that exceeds 50 NM of the departure airport: § 61.101(c). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required cross-country training of § 61.101(c). I have determined that ${gender} is proficient in cross-country flying of part 61 subpart E. <br><br>
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

const A29 = ({studentName, gender, recreational_makeModel, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Recreational pilot with less than 400 flight hours and no logged pilot in command time within the preceding 180 calendar-days: § 61.101(g).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required 180-day recurrent training of § 61.101(g) in a ${recreational_makeModel} aircraft. I have determined ${gender} proficient to act as pilot in command of that aircraft.<br><br>
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

const A30 = ({studentName, gender, recreational_makeModel, A30_date, A30_limitations, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Recreational pilot to conduct solo flights for the purpose of obtaining an additional certificate or rating while under the supervision of an authorized flight instructor: § 61.101(j). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.87 in a ${recreational_makeModel} aircraft. I have determined ${gender} is prepared to conduct a solo flight on ${A30_date} under the following conditions: ${A30_limitations}<br>
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

const A31 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Class B, C, or D airspace, at an airport located in Class B, C, or D airspace, or to, from, through, or at an airport having an operational control tower: § 61.101(d). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.101(d). I have determined ${gender} is proficient to conduct operations in Class B, C, or D airspace, at an airport located in Class B, C, or D airspace, or to, from, through, or at an airport having an operational control tower.<br><br>
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
    A25: A25,
    A26: A26,
    A27: A27,
    A28: A28,
    A29: A29,
    A30: A30,
    A31: A31
}