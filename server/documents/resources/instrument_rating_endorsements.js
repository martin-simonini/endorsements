

const A38 = ({studentName, gender, instrument_category,signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Aeronautical knowledge test: §§ 61.35(a)(1) and 61.65(a) and (b).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName}  has received the required training of § 61.65(b). I have determined that ${gender} is prepared for the Instrument–${instrument_category} knowledge test.<br> <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A39 = ({studentName, gender, instrument_category, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight proficiency/practical test: § 61.65(a)(6).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training of § 61.65(c) and (d). I have determined ${gender} is prepared for the Instrument–${instrument_category} practical test.<br><br>
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

const A40 = ({studentName, gender, instrument_category, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Prerequisites for instrument practical tests: § 61.39(a).
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received and logged the required flight time/training of § 61.39(a) in preparation for the practical test within 2 calendar-months preceding the date of the test and has satisfactory knowledge of the subject areas in which ${gender} was shown to be deficient by the FAA Airman Knowledge Test Report. I have determined ${gender} is prepared for the Instrument–${instrument_category} practical test.<br><br>
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
    A38: A38,
    A39: A39,
    A40: A40
}
