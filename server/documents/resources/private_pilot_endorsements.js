

const A32 = ({studentName, gender, signedDate, cfiNumber, expDate}) => {
    return `
    <table>
        <tr>
            <td class="title">
                Aeronautical knowledge test: §§ 61.35(a)(1), 61.103(d), and 61.105. 
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training in accordance with § 61.105. I have determined ${gender} is prepared for the private pilot knowledge test. <br>
            </td>
        </tr>
        <tr>
            <td class="signature">Signed <input type="text" class="signature_block" /> Date <input type="text" class="date_block" size="12" value="${signedDate}" /> </td>
        </tr>
        <tr>
            <td class="signature">CFI No. <input type="text" class="signature_block" size="15" value="${cfiNumber}"/> Exp. Date <input type="text" class="date_block" size="12" value="${expDate}" /> </td>
        </tr>
    </table>`}

const A33 = ({studentName, gender, A33_practical, signedDate, cfiNumber, expDate}) => {
    return`
    <table>
        <tr>
            <td class="title">
                Flight proficiency/practical test: §§ 61.103(f), 61.107(b), and 61.109.
            </td>
        </tr>
        <tr>
            <td class="endorsement_text">
                I certify that ${studentName} has received the required training in accordance with §§ 61.107 and 61.109. I have determined ${gender} is prepared for the Private Pilot ${A33_practical} practical test.<br><br>
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
    A32: A32,
    A33: A33
}
