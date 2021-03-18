

const A47 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Fundamentals of instructing knowledge test: § 61.405(a)(1).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training in accordance with § 61.405(a)(1). I have determined that ${gender} is prepared for the Fundamentals of Instructing Knowledge Test. <br> <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A48 = ({studentName, gender, A48_class, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Sport pilot flight instructor aeronautical knowledge test: §§ 61.35(a)(1) and 61.405(a). 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.405(a)(2). I have determined that ${gender} is prepared for the Flight Instructor Sport ${A48_class} Knowledge Test. <br><br>
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

const A49 = ({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight instructor flight proficiency check to provide training if a different category or class of aircraft–(additional category/class): §§ 61.409 and 61.419.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training in accordance with §§ 61.409 and 61.419 and have determined that ${gender} is prepared for a proficiency check for the flight instructor with a sport pilot rating in a ${sport_CFI_catClass}.<br><br>
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

const A50 = ({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Passing the flight instructor flight proficiency check to provide training in a different category or class of aircraft (additional category/class): §§ 61.409 and 61.419.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has met the requirements in accordance with §§ 61.409 and 61.419. I have determined that ${gender} is proficient and authorized for the additional ${sport_CFI_catClass} flight instructor privilege<br><br>
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

const A51 = ({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight instructor practical test: §§ 61.409 and 61.411.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.409
and met the aeronautical experience requirements of § 61.411. I have determined that ${gender} is prepared for the flight instructor with a sport pilot rating practical test in a ${sport_CFI_catClass}.<br><br>
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

const A52 = ({studentName, gender, sport_CFI_catClass, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Passing the flight instructor practical test: §§ 61.409 and 61.411.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has met the requirements in accordance with §§ 61.409 and 61.411. I have determined that ${gender} is proficient and authorized for the ${sport_CFI_catClass} flight instructor privilege. <br><br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" size="26"/> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">Examiner No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>
    `
}

const A53 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Sport pilot instructor to train sport pilots on flight by reference to instruments: § 61.412.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that I have given ${studentName} 3 hours of flight training and 1 hour of ground instruction specific to providing flight training on control and maneuvering an airplane solely by reference to the instruments in accordance with § 61.412. I have determined that ${gender} is proficient and authorized to provide training on control and maneuvering an airplane solely by reference to the flight instruments to this instructor’s sport pilot candidate, who intends to operate an LSA airplane with a VH greater than 87 KCAS on a cross-country flight. <br><br>
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

const A54 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Spin training: § 61.405(b)(1)(ii).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.405(b)(1)(ii). I have determined that ${gender} is competent and possesses instructional proficiency in stall awareness, spin entry, spins, and spin recovery procedures. <br><br>
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
    A47: A47,
    A48: A48,
    A49: A49,
    A50: A50,
    A51: A51,
    A52: A52,
    A53: A53,
    A54: A54
}
